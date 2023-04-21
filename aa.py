import pyautogui as pt
import time

limit =100
message='oyee nautanki '
i=0
time.sleep(2)
while i<=limit:
    pt.typewrite(message)
    pt.press('enter')
    i+=1