import vid_to_pic 
import detect_TVs

def main():
    """ Main entry point of the app """
    print("hello world")
    vid_to_pic.vid_to_pic()
    detect_TVs.detect_TV_main()


if __name__ == "__main__":
    """ This is executed when run from the command line """
    main()