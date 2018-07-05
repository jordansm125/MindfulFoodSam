from __future__ import print_function
from apiclient.discovery import build
from httplib2 import Http
from oauth2client import file, client, tools

import datetime
import dateutil.relativedelta

import urllib.request
import base64

import csv

from os import chdir, getcwd
wd=getcwd()
chdir(wd)

# adapted code from https://github.com/ido-ran/google-photos-api-python-quickstart/blob/master/quickstart.py
# which mainly listed albums; we extend to list images

# Setup the Photo v1 API
SCOPES = 'https://www.googleapis.com/auth/photoslibrary.readonly'
store = file.Storage('credentials.json')
creds = store.get()
if not creds or creds.invalid:
    flow = client.flow_from_clientsecrets('projectCredsOffline.json', SCOPES)
    creds = tools.run_flow(flow, store)
    
service = build('photoslibrary', 'v1', http=creds.authorize(Http()))


#def rescaleImage(width_orig, height_orig, max_px):
#    return {"width":10, "height":10}

#--------------------------------------------------------------
# Call the Photo v1 API to list default view of image items
#--------------------------------------------------------------
# retrieve images, ref: https://developers.google.com/photos/library/guides/list
# some tips on Python API, ref: https://developers.google.com/api-client-library/python/start/get_started
# note BASE_URL=wMAX_WIDTH-hMAX_HEIGHT, ref: https://developers.google.com/photos/library/guides/access-media-items#base-urls

nowDate = datetime.datetime.now()
#supposed to take 2 months and subtract--strange thing that works
#how to calc number of months before a particular date
cutoffDate = nowDate - dateutil.relativedelta.relativedelta(months=1) # cut off at 2 months before today
earliestDate = nowDate
creationTime = nowDate

pageSize = 15 # should increase to ~90 for production (~3 meals for 30 days, but may be many more if users take many other photos)
nextPageToken = None
#nextPageToken = "AH_uQ43E28SiZrXaAoHUQrFRd9aTcyWjzWB-4HdEcsYBWMeIcI--u-xJTxp7bOPzk3Tn5FgDx7m5X_sDi_S4-AG1OCZZmPI6wWV7jT2VQ_bt8Jgtf3XHtbSOnh6mDKNFYjq4RZb5R52wiF1V4OJcXYtOEyfcITZV3w"

maxWidthHeight = 500

logfilename = 'images ' + str(nowDate).replace(":","-") + ".csv"
print(logfilename)

with open(logfilename, 'w', newline='') as csvfile:
    fieldnames = ['accessToken', 'imageId', 'creationTime', 'imageUrl', 'imageB64'];
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames, quotechar='"', quoting=csv.QUOTE_ALL)
    writer.writeheader()
    userImages = []
    

    while (creationTime >= cutoffDate):
        results = service.mediaItems().search(body={"pageSize":pageSize, "pageToken":nextPageToken}, fields="nextPageToken,mediaItems").execute()
    #    print(results)
        
        items = results.get('mediaItems', [])
        if not items:
            print('No images found.')
        else:
            for item in items:
                image_id = item['id']
                baseUrl = item['baseUrl']
                
                mediaMetadata = item['mediaMetadata']
        #        print(mediaMetadata)
                creationTime = datetime.datetime.strptime(mediaMetadata['creationTime'], "%Y-%m-%dT%H:%M:%SZ")
                width = int(mediaMetadata['width'])
                height = int(mediaMetadata['height'])
                
                imageUrl = baseUrl + "=w" + str(maxWidthHeight) + "-h" + str(maxWidthHeight)
                
                with urllib.request.urlopen(imageUrl) as image_file:
                    image_b64 = base64.b64encode(image_file.read()) # download image and store as base64 byte string; can store in DB
                    image_b64 = image_b64.decode('utf-8')#.replace('\n', '')
#                    image_b64 = str(image_b64, 'utf-8') # get rid of "b'...'"
#                    image_b64 = image_b64.replace('\n', '')
                    image_b64 = "data:image/jpeg;base64," + image_b64
                    # test viewer: http://jaredwinick.github.io/base64-image-viewer/
                    # start with: data:image/jpg;base64,
                    # e.g., data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABHb29nbGUAAP/bAIQAAwICCAgIBwgICwgHBwcHBwgHBwcHBwcHBwcICAcHBwgJCAcHBwcHBwgHCQgICggIBwgJCQkHBw0NCggNBwgJCAEDBAQGBQYKBgYKDw0KDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0N/8AAEQgAtwETAwERAAIRAQMRAf/EAB0AAAEFAQEBAQAAAAAAAAAAAAUCAwQGBwgAAQn/xABQEAABAgMEBQcHCAgEBgIDAQADAhMABBIFIiMzAQYyQkMHFFJTYmNzCBFygoOi8BUhkpOjsrPSJDFRwsPT4uM0QfLzFhdEYXGBGKE1dJEJ/8QAHAEAAgMBAQEBAAAAAAAAAAAAAwQAAgUGAQcI/8QANREAAgIBAwMCAwcCBgMAAAAAAAIDEgQBBRMRFCIhMhUx8AYjQVFSYXFCsTOBkaHB4RYk0f/aAAwDAQACEQMRAD8A7tkJmEGNVVDaLSTCbRjisSEW2mFuIGeNbcTiII+UonEMEj5QgPGToe+VExep50FituPag6EhFtRUrxEhE/EJxDvyjoiAeISu0kxCcQj5UTEL8R75UiE4hC7VihOIaXaUQvxkIwUqgnKwcQizRQbkYXJr0B4j2xHNPwZYyWBprVVBuInIM/KionETkJwZ9MB4w3IeWZMTjJyikLTFKkseNMXbtDkSpLEJdW8WDWA1HZa0hJ3nIlSWPBn/AEIlQ4s0tVEseWPBsrpR6So7zCnZgJKnloq2kxZWZiN4mda561SoXEqzI28aBmE2nMhnNfA1Kw0frjb7YT5To5GrBUxx/OPiA2CbSqlMSxS4KtKzSi2ovYKD5OZKpWzEsQsEnZRVQFmGAwixIDYgtFlCTvRSwIkGCKJYhEWhPSjwJYQiISxLCGIeiJmW7UQhFa7UQue5n2ohBHydpglQdiQGzVQMlh1Ejpg/Kp6J5hp6UG5VFxXMYDY9qRZmzYMrEqBLSQpOziQawGoOlpYyoliVJnMCpiWJUZXVEsSpLllxSpLBCuJUlh1Zk70B
                
                    # note that Excel has a problem of assuming max length in text cell of 32,767 chars; ref: https://support.office.com/en-us/article/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3
                            
                # TODO: classify images into food/non-food
                
                # TODO: classify food images
                # label top 5 guesses for food labels, or just top one? Include confidence %
                # label top ingredients for each guess?
                
#                print(creds.access_token, image_id + "," + str(creationTime) + "," + imageUrl + "," + str(image_b64))
                
                userImages.append({
                        'accessToken':creds.access_token, 
                        'imageId':image_id, 
                        'creationTime': creationTime, 
                        'imageUrl': imageUrl, 
                        'imageB64': image_b64
                        })
                
                # save to CSV for later analysis?
                
                if (creationTime >= cutoffDate):
                    earliestDate = creationTime
                else:
                    break
                
        nextPageToken = results['nextPageToken']
#        print(earliestDate)
        
    writer.writerows(userImages)
    print("writing complete")
    
# TODO: classify images into food/non-food
    
# TODO: classify food images


# TODO: revoke credentials; then creds.access_token will no longer be valid