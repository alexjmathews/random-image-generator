Random image generation a la Slack

The way the code works currently:

1. Generates a good center
    - Center of the new image
    - Picks a point that resides between two circles. This ensures that the image doesn't have too much white space.
2. Adjusts for cropped image size and coordinate system
3. Reads in file using JIMP
4. Crops file using lenna
5. Writes file to avatar.jpg
