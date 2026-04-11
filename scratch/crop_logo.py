from PIL import Image
import os

def crop_favicon():
    logo_path = r"C:\Users\Mahajan\Desktop\Github Upload\Saral\public\logo.png"
    output_path = r"C:\Users\Mahajan\Desktop\Github Upload\Saral\public\favicon.png"
    
    if not os.path.exists(logo_path):
        print(f"Logo not found at {logo_path}")
        return

    with Image.open(logo_path) as img:
        width, height = img.size
        print(f"Original size: {width}x{height}")
        
        # The symbol is on the left. We want a square.
        # Let's take a square from the left. 
        # Usually symbols like this are roughly square.
        # Based on the visual, the symbol is clear on the left.
        # We'll take the height as the size for the square.
        
        # Crop box: (left, top, right, bottom)
        # We'll take the first 'height' pixels from the left.
        left = 0
        top = 0
        right = height # Square
        bottom = height
        
        # Note: If the symbol is not a perfect square or is smaller than height, 
        # we might need to adjust. But height is a good starting point for detailed logos.
        # Actually in the image, the symbol is taller than it is wide? 
        # Let's look at the image again. The 'S' occupies maybe 1/4 of the width.
        # Let's try to find the actual content bounds.
        
        # Convert to RGBA to find transparency bounds
        img_rgba = img.convert("RGBA")
        bbox = img_rgba.getbbox() # Returns (left, top, right, bottom) of non-zero pixels
        print(f"Bbox: {bbox}")
        
        # The symbol is the first "clump" of pixels. 
        # Instead of generic height, let's find the first gap in pixels or just take 
        # a reasonable square around the left content.
        
        # Let's just take the first part of the bbox until the text starts.
        # Or better: just make a square that contains the symbol.
        # Looking at the image, the symbol is roughly square or slightly taller.
        
        # Just use the height as the size for a square crop from the left.
        # This usually captures the icon in these types of lockups.
        
        # BUT, to be "stylish", we should center the symbol in the square.
        # Let's just crop the logo symbol and pad it if needed.
        
        # Actually, let's just use the symbol's bounding box and then square it.
        # We'll assume the symbol is on the left.
        # Let's guess the symbol ends at around width * 0.3
        symbol_right = int(width * 0.3)
        symbol_bbox = (bbox[0], bbox[1], symbol_right, bbox[3])
        
        # Now make it square
        symbol_w = symbol_bbox[2] - symbol_bbox[0]
        symbol_h = symbol_bbox[3] - symbol_bbox[1]
        size = max(symbol_w, symbol_h)
        
        # Create new transparent square
        square_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        
        # Paste symbol into it, centered
        offset_x = (size - symbol_w) // 2
        offset_y = (size - symbol_h) // 2
        
        logo_symbol = img.crop(symbol_bbox)
        square_img.paste(logo_symbol, (offset_x, offset_y))
        
        # Resize to standard size for performance (e.g. 512x512)
        final_img = square_img.resize((512, 512), Image.Resampling.LANCZOS)
        final_img.save(output_path, "PNG")
        print(f"Favicon saved to {output_path}")

if __name__ == "__main__":
    crop_favicon()
