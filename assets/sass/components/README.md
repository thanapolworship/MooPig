# Components

## components folder
* มีหน้าที่เก็บไฟล์สไตล์ที่มีลักษณะเป็น Widget สามารถนำไปใช้ในแต่ละส่วนของเว็บไซต์ได้(Resue) โดยไม่มีความเฉพาะเจาะจงเท่ากับ layout

## components structure
* Mixins: เป็นส่วนที่กำหนด Properties, States, Child/Modifier classes ตั้งต้นเพื่อทำให้เกิดโครงสร้างของ Component
* Contextual variations: เป็นส่วนการตั้งค่าให้กับ Properties ของ mixin เพื่อสร้าง component class รูปแบบต่างๆ ออกมาใช้งาน

## CSS ruleset
* แบ่งส่วนประกอบเป็น 6 ส่วน ได้แก่
  1. Specific variables(use only in component)
     - ค่าที่ใช้เฉพาะใน Component นี้เท่านั้น
  2. Styles of component itself
     - CSS Properties ของ Component
  3. Styles of child class
     - Class ของ Elements ที่อยู่ใน Component
  4. Styles of state
     - Class สถานะของ Component เข่น success, error, warning, disabled (มีจุดประสงค์ด้านความหมาย และ UI)
  4. Styles of modifier class
     - Class ขยายหรือเปลี่ยนแปลงลักษณะของ Component (มีจุดประสงค์ด้าน UI เท่านั้น)
  5. Styles of state with modifier class
     - Modifier class ที่มีการเปลี่ยนแปลง CSS Properties ภายใต้ State class
  6. Media query
     - Breakpoint สำหรับ Styles ในหน้าจอขนาดต่างๆ (ใช้ Mixins > mq ร่วมกับ Screen Variables/Function)
* เขียน Nesting ซ้อนไม่เกิน 3 ชั้น(แต่ในงานจริงๆ เราจะเจอการใช้ Selector ที่มีการซ้อนมากกว่า 3 ชั้น ก็จะอนุโลมให้ในกรณี Class นั้นซ้อนอยู่ใน State, Modifier class, Media query)
