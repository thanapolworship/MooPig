# Images

## images folder
* การตั้งชื่อ folder ไม่ต้องเติม s ที่ด้านหลัง

```
.{categoryImageName}-{imageName}_{stateName}@{imageDensity}.{extensionImageName}
```

### โครงสร้างชื่อ ประกอบด้วย
1. categoryImageName: ชื่อ Category ของ image/icon (แบ่งตาม folder)
2. imageName: ชื่อของ image/icon
3. stateName: ชื่อ state ของ image/icon เช่น hover, active, disabled, success, pending, error
4. imageDensity: density ของ image/icon เช่น 2x, 3x (ในกรณี 1x และ svg ไม่ต้องมี density กำกับ)
5. extensionImageName: นามสกุลของ image/icon เช่น jpg, gif, png, svg

### การตั้งชื่อ
1. ชื่อประกอบด้วยคำ 2 คำ ขั้นด้วยขีดกลาง(ชื่อ category folder และ ชื่อ image) และถ้าคำๆ นั้นมีคำขยายหลายคำให้เขี่ยนต่อกันโดยใช้ตัวเล็ก เช่น
    * .default-user.png
    * .default-coverpage.jpg
2. กรณี image อยู่ใน sub category เช่น icon(category folder) > brand(sub category folder) ให้ใช้ชื่อประกอบด้วยคำ 2 คำ ขั้นด้วยขีดกลาง(ชื่อ sub category และ ชื่อ image)
    * .brand-facebook.svg
    * .brand-youtube.svg
3. กรณี image มี state เช่น active, disabled, success, pending, error ให้ใช้ _ ต่อท้ายชื่อ
    * .brand-facebook_hover.svg
    * .brand-youtube_selected.svg
4. กรณี image มีหลาย size เช่น 32px, 64px หรือหลาย density เช่น 2x, 3x ให้ใช้ @ ต่อท้ายชื่อและระบุ size หรือ density
    * .favicon@small.png
    * .brand-facebook@2x.png
    * .brand-youtube@3x.png
