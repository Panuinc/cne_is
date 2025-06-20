"use client";

import { renderRadioGroupField } from "@/components/ui/hr/recruit/components/UIRenderField";

export default function UIRecruitStep7({
  formData,
  handleInputChange,
  errors,
  formattedDate,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl font-[600]">
          แบบฟอร์มขอความยินยอม (Consent Form)
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          บริษัท ชาญนครวิศวกรรม จำกัด (ต่อไปนี้จะเรียกว่า “บริษัทฯ”)
          ให้ความสำคัญต่อการคุ้มครองข้อมูลส่วนบุคคลตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
          พ.ศ.2562 ดังนั้นเพื่อให้บริษัทฯ สามารถ เก็บ รวบรวม
          ใช้หรือเปิดเผยให้สอดคล้องกับพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.
          2562 บริษัทฯ
          ใคร่ขอความยินยอมจากผู้สมัครงานในฐานะเจ้าของข้อมูลส่วนบุคคลในการเก็บ
          รวบรวม ใช้หรือเปิดเผย โดยมีรายละเอียดดังนี้
          ทั้งนี้ผู้สมัครงานรับทราบว่าหนังสือแสดงความยินยอมฉบับนี้เป็นส่วนหนึ่งของใบสมัครงาน
        </div>

        {/* {session 1} */}
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-md font-[600]">
          ข้อ 1. วัตถุประสงค์การเก็บ รวบรวม ใช้หรือเปิดเผยข้อมูลส่วนบุคคล
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          บริษัทฯ มีการเก็บ รวบรวม
          ใช้และเปิดเผยข้อมูลส่วนบุคคลของผู้สมัครงานเพื่อวัตถุประสงค์
          ดังต่อไปนี้
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          1.1 เพื่อใช้ในการดำเนินการตามกระบวนการสรรหาของบริษัทฯ
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          1.2
          เพื่อการพิจารณาคุณสมบัติและทักษะของท่านว่าเหมาะสมกับตำแหน่งงานนั้นหรือไม่
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          1.3 เพื่อประโยชน์ในการติดต่อ สื่อสารเพื่อการนัดหมายสัมภาษณ์งาน
          การส่งข่าวสารที่เกี่ยวกับตำแหน่งงาน
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          1.4
          เพื่อใช้ประกอบในการอ้างอิงการยืนยันตัวตนของผู้สมัครและความถูกต้องของข้อมูลส่วนบุคคล
          และ/หรือข้อมูลอื่นๆ ที่ผู้สมัครงานได้ให้ไว้แก่บริษัทฯ
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          1.5 เพื่อปฏิบัติตามกฎหมายต่างๆ เช่น กฎหมายแรงงาน กฎหมายภาษีอากร
          และกฎหมายหรือกฎระเบียบใดๆ ที่มีผลบังคับใช้กับบริษัทฯ
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          ทั้งนี้ หากภายหลังบริษัทฯได้มีการเปลี่ยนแปลงวัตถุประสงค์ในการเก็บ
          รวบรวม ใช้และเปิดเผยข้อมูลส่วนบุคคล บริษัทฯ
          จะแจ้งให้ท่านทราบและขอความยินยอมก่อนการเก็บ รวบรวม ใช้หรือเปิดเผย
          ทั้งนี้ บริษัทฯ
          ได้กำหนดให้มีการบันทึกการแก้ไขเพิ่มเติมไว้เป็นหลักฐานด้วย
        </div>

        {/* {session 2} */}
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-md font-[600]">
          ข้อ 2. ประเภทข้อมูลส่วนบุคคล
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          ข้อมูลส่วนบุคคลซึ่งบริษัทฯ ได้เก็บ รวมรวม ใช้หรือเปิดเผย
          มีรายละเอียดดังต่อไปนี้
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          2.1 ชื่อตัว ชื่อสกุล ชื่อเล่น เพศ ภาพถ่าย วัน เดือน ปี เกิด
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          2.2 Resume Curriculum Vitae (CV) จดหมายที่นำ ประสบการณ์ทำงาน
          และข้อมูลด้านการศึกษา
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          2.3 ข้อมูลในการติดต่อกับผู้สมัครงาน เช่น ที่อยู่
          ที่อยู่ของจดหมายอิเล็กทรอนิกส์ (E-Mail address) หมายเลขโทรศัพท์
          เป็นต้น
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          2.4 ใบอนุญาตประกอบวิชาชีพหรือใบอนุญาตอื่นๆ ที่เกี่ยวกับงาน
          ใบอนุญาตหรือประกาศนียบัตรที่มีอยู่
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          2.5 ข้อมูล IP Address หรือข้อมูลที่เก็บรวบรวมผ่านคุกกี้ (Cookies)
          หรือเทคโนโลยีที่คล้ายกัน
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          2.6 ข้อมูลส่วนบุคคลของบุคคลอื่น เช่น ผู้ติดต่อกรณีฉุกเฉิน บุคคลอ้างอิง
          ผู้รับผลประโยชน์ รายละเอียดหรือเอกสารเกี่ยวกับคู่สมรส บุตร บิดามารดา
          พี่น้องร่วมบิดามารดา รายชื่อเครือญาติ ของท่าน
          ซึ่งรวมถึงเบอร์โทรศัพท์/โทรศัพท์มือถือของบุคคลดังกล่าว เป็นต้น
          ทั้งนี้ในการให้ข้อมูล ส่วนบุคคลที่สามแก่บริษัทฯ
          ท่านรับรองและรับประกันว่าท่านมีอำนาจในการกระทำดังกล่าวและ
          อนุญาตให้บริษัทฯ ใช้ข้อมูลส่วนบุคคลดังกล่าวตามคำประกาศฉบับนี้
          นอกจากนี้ท่านยังมีหน้าที่
          ในการแจ้งให้บุคคลเหล่านั้นทราบถึงคำประกาศฉบับนี้และ/หรือขอความยินยอมจากบุคคล
          เหล่านั้น
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          2.7 ข้อมูลที่รวบรวมจากผู้สมัครงาน เช่น
          ข้อมูลที่ผู้สมัครงานแจ้งแก่บริษัทฯ ในระหว่างการสัมภาษณ์ งาน
          ข้อมูลของผู้สมัครงานในการทำแบบทดสอบต่างๆ
          ข้อมูลของผู้สมัครงานที่บริษัทฯ
          ได้บันทึกภาพและ/หรือเสียงในระหว่างการทำกิจกรรมเพื่อกระบวนการสรรหาของบริษัทฯ
          เป็นต้น
        </div>

        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-md font-[600]">
          ข้อ 3. ระยะเวลาในการเก็บรักษาข้อมูลส่วนบุคคล
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          บริษัทฯ จะเก็บข้อมูลส่วนบุคคลของท่านเป็นระยะเวลา 6
          เดือนนับแต่สิ้นสุดขั้นตอนการสัมภาษณ์รอบสุดท้าของท่าน
          เว้นแต่กรณีดังต่อไปนี้
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          3.1
          กรณีที่ผู้สมัครงานผ่านการคัดเลือกเข้าทำงานเป็นผู้สมัครงานของบริษัทฯ
          บริษัทฯ จะเก็บข้อมูล
          ส่วนบุคคลของท่านต่อไปในระยะที่จำเป็นเพื่อให้บรรลุวัตถุประสงค์ของบริษัทฯ
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          3.2 กรณีมีเหตุจำเป็นตามคำร้องขอจากเจ้าของข้อมูล,
          คำสั่งจากหน่วยงานของรัฐ, คำสั่งศาล บริษัทฯ
          จะจัดให้มีระบบการตรวจสอบเพื่อดำเนินการลบหรือทำลายข้อมูลส่วนบุคคลเมื่อพ้นกำหนดระยะเวลาการ
          เก็บรักษาหรือที่ไม่เกี่ยวข้องหรือเกินความจำเป็นตามวัตถุประสงค์ในการ
          เก็บ รวบรวมข้อมูลส่วนบุคคลนั้น
        </div>

        {/* {session 4} */}
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-md font-[600]">
          ข้อ 4. การเปิดเผยข้อมูลส่วนบุคคล
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          บริษัทฯ
          จะไม่เปิดเผยข้อมูลส่วนบุคคลดังกล่าวต่อบุคคลใดโดยปราศจากการอนุญาตจากเจ้าของข้อมูล
          อย่างไรก็ตาม เพื่อประโยชน์ในการดำเนินการตามวัตถุประสงค์การเก็บ รวบรวม
          ใช้หรือเปิดเผยตามที่ระบุไว้ข้างต้นผู้สมัคร
          งานรับทราบและยินยอมว่าบริษัทฯ
          อาจเปิดเผยข้อมูลส่วนบุคคลของเจ้าของข้อมูลให้กับบุคคลอื่น ดังต่อไปนี้
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          4.1 บุคคลหรือองค์กรที่บริษัทฯ
          ได้ว่าจ้างให้ดำเนินงานที่เกี่ยวข้องกับข้อมูลส่วนบุคคลเพื่อประโยชน์ใน
          การบริหารจัดการองค์กรของบริษัทฯ เช่น
          ผู้ให้บริการเกี่ยวกับเทคโนโลยีสารสนเทศผู้ให้บริการ วิเคราะห์ ข้อมูล
          สถิติ การวิจัยและพัฒนาผลิตภัณฑ์การออกแบบ เป็นต้น
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          4.2 บริษัท ฯ
          อาจเปิดเผยข้อมูลส่วนบุคคลของผู้สมัครงานภายใต้หลักเกณฑ์ที่กฎหมายกำหนด
          เช่น การเปิดเผยข้อมูลต่อหน่วยงานราชการ หน่วยงานภาครัฐ
          หน่วยงานที่มีหน้าที่กำกับดูแลคุ้มครอง สวัสดิภาพแรงงาน
          รวมถึงในกรณีที่มีการร้องขอให้เปิดเผยข้อมูลโดยอาศัยอำนาจตามกฎหมาย เช่น
          การร้องขอข้อมูลเพื่อการฟ้องร้องหรือดำเนินคดีตามกฎหมาย การบังคับคดี
          เป็นต้น
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          ทั้งนี้บริษัทฯ
          จะดำเนินการให้บุคคลหรือองค์กรเหล่านั้นมีมาตราการคุ้มครองข้อมูลส่วนบุคคลตามที่
          กฎหมายกำหนด
          และอยู่บนพื้นฐานการรู้เท่าที่จำเป็นอย่างเคร่งครัดเพื่อการปฏิบัติตามกฎหมายหรือสัญญา
        </div>

        {/* {session 5} */}
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-md font-[600]">
          ข้อ 5. สิทธิของผู้สมัครงานในฐานะเจ้าของข้อมูลส่วนบุคคล
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          ผู้สมัครงานในฐานะเจ้าของข้อมูลส่วนบุคคลมีสิทธิดังนี้
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          5.1 ขอเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคลที่เกี่ยวกับตน
          ซึ่งอยู่ในความรับผิดชอบของบริษัทฯ หรือ
          ขอให้เปิดเผยถึงการได้มาซึ่งข้อมูลส่วนบุคคลดังกล่าวที่ตนไม่ได้ให้ความยินยอม
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          5.2 แจ้งให้บริษัทฯดำเนินการให้ข้อมูลส่วนบุคคลของตนถูกต้องเป็นปัจจุบัน
          สมบูรณ์ และไม่ก่อให้เกิด ความเข้าใจผิด
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          5.3 คัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลที่เกี่ยวกับตน
          ที่กฎหมายอนุญาตให้เก็บ ได้โดยไม่ต้องได้รับความยินยอมจากเจ้าของข้อมูล
          เมื่อใดก็ได้ขอให้บริษัทฯ ดำเนินการลบหรือทำลาย
          หรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัว
          บุคคลที่เป็นเจ้าของข้อมูลส่วนบุคคลได้ ในกรณีตามที่กฎหมายกำหนด
          ในกรณีที่มีการร้องขอให้ ลบข้อมูลส่วนบุคคลจากระบบนั้น
          ข้อมูลดังกล่าวอาจจะยังคงได้รับการบันทึกหรือทำสำเนาไว้ที่ เซิร์ฟเวอร์
          (Server) หรือระบบสำรอง (Backup System) ของบริษัทฯ
          เพื่อป้องกันการเข้าสู่ระบบ ภายหลังโดยบุคคลที่ไม่ได้รับอนุญาต
          หรือเพื่อเป็นการสำรองข้อมูลในกรณีที่เกิดความผิดพลาด บกพร่อง
          หรือเกิดจากความขัดข้องของระบบ หรือในกรณีที่เกิดจากการกระทำใดๆ
          ที่มีจุดประสงค์ มุ่งร้ายของบุคคลหรือซอฟต์แวร์อื่น
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          5.4 ขอให้บริษัทฯ ระงับการใช้ข้อมูลส่วนบุคคลได้ ในกรณีตามที่กฎหมายกำหนด
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          5.5 ถอนความยินยอมเสียเมื่อใดก็ได้
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          5.6 ร้องเรียนในกรณีที่บริษัท ฯ หรือผู้ประมวลผลข้อมูลส่วนบุคคล
          รวมทั้งลูกจ้างหรือผู้รับจ้างของ บริษัทฯ
          ฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          อย่างไรก็ตามบริษัทฯ
          มีสิทธิปฏิเสธสิทธิของผู้สมัครงานในฐานะเจ้าของข้อมูลส่วนบุคคลตามที่ระบุไว้
          ข้างต้นโดยอาศัยเหตุตามที่พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.
          2562 หรือที่จะมีการแก้ไขเพิ่มเติมใน ภายหน้า หรือกฎหมายอื่นได้อนุญาตไว้
        </div>

        {/* {session 6} */}
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-md font-[600]">
          ข้อ 6. ผลของการถอนความยินยอม
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          ความยินยอมที่ผู้สมัครงานให้ไว้เพื่อเก็บรวบรวมใช้หรือเปิดเผยตามวัตถุประสงค์ดังกล่าวข้างต้นจะยังคง
          มีผลบังคับใช้จนกว่าผู้สมัครงานจะได้บอกถอนความยินยอมเป็นหนังสือแจ้งต่อบริษัทฯ
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          เมื่อบริษัทฯ ได้รับแจ้งความประสงค์ของผู้สมัครงานตามที่ระบุไว้ในข้อ 5.
          แล้ว บริษัทฯ จะดำเนินการ
          ตรวจสอบและแจ้งผลกระทบที่อาจจะเกิดขึ้นจากการร้องขอของผู้สมัครงาน
          (ถ้ามี) โดยจะดำเนินการให้เสร็จสิ้น ตามคำขอภายใน 30 วัน
          นับจากวันที่ได้รับการแจ้งเป็นหนังสือตามแบบฟอร์มที่บริษัทฯ
          กำหนดจากผู้สมัครงาน
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          การเพิกถอนความยินยอมของผู้สมัครงาน จะไม่ส่งผลกระทบต่อการเก็บรวบรวม ใช้
          หรือเปิดเผยข้อมูล ส่วนบุคคล
          ที่ผู้สมัครงานได้ให้ความยินยอมไปแล้วก่อนหน้านั้น
        </div>

        {/* {session 7} */}
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-md font-[600]">
          ข้อ 7. คุกกี้ (Cookies)
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          บริษัทฯ เก็บ
          รวบรวมข้อมูลส่วนบุคคลบางอย่างจากผู้สมัครงานโดยการใช้คุกกี้
          โดยข้อมูลส่วนบุคคล ดังกล่าวรวมถึงพฤติกรรมการใช้งาน
          และเวลาที่ใช้ไปในช่องทางการสื่อสารของบริษัทฯ
          เพื่อปรับปรุงและพัฒนาเว็บไซต์ และ/หรือแอปพลิเคชั่นของบริษัทฯ
          โปรดศึกษานโยบายคุกกี้ฉบับเต็มของบริษัทฯ https://channakorn.co.th/
        </div>

        {/* {session 8} */}
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-md font-[600]">
          ข้อ 8. ช่องทางติดต่อ
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[95%] p-2 gap-2">
          ผู้สมัครงานสามารถติดต่อ แผนกทรัพยากรมนุษย์และสนับสนุนงานบริหาร หรือ
          เจ้าหน้าที่คุ้มครอง ข้อมูลส่วนบุคคล ได้ตามช่องทาง ดังต่อไปนี้
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          8.1 อีเมล์ hr@channakorn.co.th
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          8.2 ไปรษณีย์หรือส่งด้วยตนเองส่งถึง :
          แผนกทรัพยากรมนุษย์และสนับสนุนงานบริหาร หรือ เจ้าหน้าที่คุ้มครอง
          ข้อมูลส่วนบุคคล / ศูนย์คุ้มครองข้อมูลส่วนบุคคล
        </div>
        <div className="flex items-center justify-start w-full h-full xl:w-[90%] p-2 gap-2">
          8.3 ที่อยู่ : บริษัท ชาญนครวิศวกรรม จำกัด 35 ม.12 ตำบล คูบางหลวง
          อำเภอลาดหลุมแก้ว ปทุมธานี 12140
        </div>

        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-md font-[600]">
          ข้าพเจ้าได้รับทราบนโยบายคุ้มครองข้อมูลส่วนบุคคลของบริษัทฯ ในการเก็บ
          รวบรวม ใช้หรือ เปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้าตามขอบวัตถุประสงค์
          ดังที่ได้อธิบายไว้ข้างต้นเป็นที่เรียบร้อยแล้วและขอให้ความยินยอมแก่บริษัทฯ
          ดังต่อไปนี้
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
          {renderRadioGroupField({
            labelTH: "ข้าพเข้า",
            labelEN: "I",
            name: "recruitDetail.recruitDetailConsentPdpa",
            value: formData?.recruitDetail?.recruitDetailConsentPdpa || "",
            onChange: handleInputChange("recruitDetail.recruitDetailConsentPdpa"),
            error: errors?.["recruitDetail.recruitDetailConsentPdpa"],
            options: [
              {
                labelTH:
                  "ข้าพเจ้าให้ความยินยอมในการเก็บ รวบรวม ใช้เปิดเผยและโอนซึ่งข้อมูลส่วนบุคคลของข้าพเจ้าตาม รายละเอียดที่ระบุไว้ในหนังสือแสดงความยินยอมฉบับนี้ ",
                labelEN: "Yes",
                value: "Yes",
              },
              {
                labelTH:
                  "ข้าพเจ้าไม่ให้ความยินยอมในการเก็บ รวบรวม ใช้เปิดเผยและโอนซึ่งข้อมูลส่วนบุคคลของข้าพเจ้าตามรายละเอียดที่ระบุไว้ในหนังสือแสดงความยินยอมฉบับนี้ ",
                labelEN: "No",
                value: "No",
              },
            ],
          })}
        </div>

        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-sm">
          ในกรณีที่ข้าพเจ้าไม่ได้ให้ความยินยอมข้างต้น
          ข้าพเจ้ารับทราบว่าอาจมีผลต่อการพิจารณาคัดเลือก ใบสมัครของข้าพเจ้า
          เนื่องจากข้อมูลที่ระบุไว้ในใบสมัครดังกล่าวเป็นข้อมูลที่จำเป็นในการพิจารณา
          คัดเลือกบุคคลเข้าทำงานในบริษัทฯ
          <br />I consent to the Company processing my personal data for the
          purpose of considering suitable job positions and notifying me when
          new job openings are announced.
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-end w-full h-full p-2 gap-2">
          วันที่ {formattedDate}
        </div>
      </div>
    </>
  );
}
