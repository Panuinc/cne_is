"use client";

import React from "react";
import {
  Input,
  Textarea,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
} from "@heroui/react";

export default function UIRecruitStep7() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-xl font-[600]">
          <div>ประกาศว่าด้วยการคุ้มครองข้อมูลส่วนบุคคล</div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-md">
          <div className="flex items-start justify-center w-full h-full p-2 gap-2 border-2 border-dark indent-8">
            บริษัท ชาญนครวิศวกรรม จำกัด (CHAN NAKORN ENGINEERING CO., LTD.)
            ตระหนักและให้ความสำคัญต่อความเป็นส่วนตัว
            รวมถึงการคุ้มครองข้อมูลส่วนบุคคลของผู้สมัครงาน ผู้สมัครฝึกงาน
            และผู้ฝึกงาน (ต่อไปนี้เรียกรวมว่า “ท่าน”) ด้วยเหตุนี้
            บริษัทจึงได้จัดทำประกาศฉบับนี้ขึ้น
            เพื่อชี้แจงรายละเอียดเกี่ยวกับการเก็บรวบรวม การใช้
            และการเปิดเผยข้อมูลส่วนบุคคลของท่าน (ซึ่งต่อไปนี้เรียกรวมว่า
            “การประมวลผลข้อมูลส่วนบุคคล”)
            ทั้งนี้เป็นไปตามที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลกำหนด
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark font-[600]">
            1. วัตถุประสงค์การประมวลผลข้อมูลส่วนบุคคล
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark indent-8">
            1.1 บริษัทจะประมวลผลข้อมูลส่วนบุคคลของท่าน โดยมีวัตถุประสงค์หลัก
            ดังต่อไปนี้
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark font-[600]">
                วัตถุประสงค์
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                (1)
                เพื่อใช้ในการดำเนินการตามคำขอของท่านในการสมัครงานหรือเข้าฝึกงานกับบริษัท
                เช่น การดำเนินการตามกระบวนการสรรหา การตรวจสอบคุณสมบัติ
                การคัดเลือกก่อนการทำสัญญาจ้างเป็นพนักงาน
                รวมถึงการปฏิบัติตามข้อตกลงการฝึกงาน การจ่ายค่าตอบแทนการฝึกงาน
                การได้รับสิทธิประโยชน์และสวัสดิการต่างๆ จากการฝึกงาน
                และการพิจารณาคุณสมบัติเพื่อนำเสนอตำแหน่งงานที่เหมาะสม
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                (2) เพื่อการสมัครเข้าใช้งานระบบงานอิเล็กทรอนิกส์
                หรือการเปิดสิทธิ์การเข้าถึงหรือใช้งานอินเทอร์เน็ต
                หรือระบบงานอิเล็กทรอนิกส์ต่างๆ
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                (3) เพื่อการวิเคราะห์และจัดทำฐานข้อมูล
                การบริหารจัดการและปรับปรุงกระบวนการสรรหาและคัดเลือกพนักงาน
                การประเมินผลการฝึกงาน การส่งข่าวสารที่เกี่ยวกับตำแหน่งงาน
                การจัดทำสัญญาฝึกงานหรือสัญญาจ้างงานในกรณีที่ท่านผ่านการคัดเลือก
                และการใช้สิทธิเรียกร้องตามกฎหมาย
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                (4) เพื่อดำเนินการวางแผน การบริหารความเสี่ยง การกำกับการตรวจสอบ
                รวมถึงการตรวจสอบภายในของสำนักตรวจสอบภายใน
                และการบริหารจัดการภายในองค์กร
                รวมถึงการใช้ประโยชน์ในการดำเนินงานภายในบริษัทที่เกี่ยวข้องกับการเบิกจ่ายเงินของหน่วยงานบัญชีและการเงินของบริษัท
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                (5) เพื่อการปฏิบัติตามกฎหมาย หรือการปฏิบัติตามหมายศาล หนังสือ
                หรือคำสั่งของหน่วยงาน องค์กรอิสระ
                หรือเจ้าพนักงานที่มีหน้าที่และอำนาจตามกฎหมาย เช่น
                การปฏิบัติตามหมายเรียก หมายอายัด คำสั่งของศาล เจ้าหน้าที่ตำรวจ
                อัยการ หน่วยงานราชการ
                รวมถึงการรายงานหรือเปิดเผยข้อมูลต่อผู้ถือหุ้น หน่วยงานราชการ
                หรือองค์กรอิสระ เช่น สำนักงานคณะกรรมการกำกับกิจการพลังงาน
                กระทรวงพลังงาน กรมสรรพากร กรมที่ดิน สำนักงานการตรวจเงินแผ่นดิน
                สำนักงานคณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ เป็นต้น
                ทั้งนี้เพื่อปฏิบัติตามกฎหมายที่เกี่ยวข้อง
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                (6)
                เพื่อการปฏิบัติตามกฎหมายเกี่ยวกับประโยชน์สาธารณะด้านการสาธารณสุข
                เช่น การป้องกันด้านสุขภาพจากโรคติดต่ออันตราย
                หรือโรคระบาดที่อาจติดต่อหรือแพร่เข้าสู่ราชอาณาจักร
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                (7) เพื่อการบริหารจัดการด้านสุขอนามัยและความปลอดภัยของท่าน
                และการป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของบุคคล
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="flex  items-center justify-center w-full p-2 gap-2 border-2 border-dark font-[600]">
                ฐานทางกฏหมาย
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                การปฏิบัติตามสัญญา / ความจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมาย
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                ความจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมาย
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                ความจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมาย
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                ความจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมาย
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                การปฏิบัติตามกฎหมาย
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                การปฏิบัติตามกฎหมาย
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                การปกป้องผลประโยชน์ที่จำเป็นต่อชีวิตหรือสุขภาพ
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark indent-8">
            1.2
            ในกรณีที่บริษัทจะประมวลผลข้อมูลส่วนบุคคลของท่านเพื่อวัตถุประสงค์อื่นนอกเหนือจากที่กล่าวมาแล้วข้างต้น
            บริษัทอาจขอข้อมูลส่วนบุคคลของท่านเพิ่มเติม
            โดยจะแจ้งให้ท่านทราบและขอความยินยอมจากท่านเป็นคราวๆ ไป (ตามแต่กรณี)
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark font-[600]">
            2. ข้อมูลส่วนบุคคลที่เก็บรวบรวม โดยทั่วไปแล้ว
            บริษัทจะเก็บรวบรวมข้อมูลส่วนบุคคลของท่านโดยการขอหรือสอบถามข้อมูลเหล่านั้นจากท่านโดยตรง
            อย่างไรก็ตาม ในบางกรณีบริษัทอาจเก็บรวบรวมข้อมูลของท่านจากแหล่งอื่น
            เช่น หน่วยงานของรัฐ หรือแหล่งข้อมูลอื่นๆ
            ที่มีข้อมูลส่วนบุคคลของท่านปรากฏแก่สาธารณะอย่างชัดแจ้ง
            รวมถึงการเปิดเผยข้อมูลผ่านทางสื่อสังคมออนไลน์ เป็นต้น ในกรณีดังกล่าว
            บริษัทจะเลือกเก็บรวบรวมเฉพาะข้อมูลที่ท่านเลือกให้ปรากฏต่อสาธารณะเท่านั้น
            โดยประเภทของข้อมูลส่วนบุคคลของท่านที่บริษัททำการประมวลผล
            มีดังต่อไปนี้:
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark indent-8">
            2.1 ข้อมูลตามที่กำหนดไว้ในใบสมัคร ดังนี้:
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                1.ข้อมูลตามเอกสารที่ท่านส่งมอบให้แก่บริษัท เช่น Curriculum Vitae
                (CV), Resume, เอกสารสมัครงาน, ความเห็นประกอบการสรรหาพนักงาน
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                2.ข้อมูลส่วนตัว เช่น ชื่อ นามสกุล เพศ วันเดือนปีเกิด น้ำหนัก
                ส่วนสูง เลขที่บัตรประชาชนหรือหนังสือเดินทาง หมู่โลหิต สัญชาติ
                ศาสนา สถานะการสมรส
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                3.ข้อมูลการติดต่อ เช่น ที่อยู่ อีเมล หมายเลขโทรศัพท์
                ช่องทางติดต่อในสื่อสังคมออนไลน์
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                4.เงื่อนไขในการปฏิบัติงาน เช่น
                ความสามารถในการปฏิบัติงานต่างจังหวัดหรือต่างประเทศ
                พื้นที่ที่ต้องการปฏิบัติงาน
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                5.ข้อมูลของคู่สมรส บุตร บิดา มารดา เช่น ชื่อ นามสกุล
                เลขที่บัตรประชาชนหรือหนังสือเดินทาง วันเดือนปีเกิด สัญชาติ
                หมู่โลหิต การศึกษา ที่อยู่ หมายเลขโทรศัพท์ หมายเหตุ:
                ก่อนให้ข้อมูลดังกล่าวแก่บริษัท
                ท่านจะต้องแจ้งประกาศคุ้มครองข้อมูลส่วนบุคคลฉบับนี้ให้บุคคลเหล่านั้นทราบ
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                6.ข้อมูลเกี่ยวกับสมาชิกในครอบครัวหรือผู้ที่อยู่ในความดูแลของท่าน
                หมายเหตุ: ต้องแจ้งประกาศฉบับนี้ให้บุคคลดังกล่าวทราบเช่นกัน
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                7.รูปถ่ายและภาพเคลื่อนไหว
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                8.ข้อมูลเกี่ยวกับการศึกษา ความสามารถ และการพัฒนาศักยภาพ เช่น
                ระดับการศึกษา วุฒิการศึกษา สถาบัน/มหาวิทยาลัย ประวัติการศึกษา
                ประวัติการฝึกอบรม ผลการศึกษา ผลการทดสอบ
                สิทธิในการทำงานอย่างถูกต้องตามกฎหมาย คุณสมบัติด้านวิชาชีพ
                ความสามารถด้านภาษา และอื่นๆ
                รวมถึงข้อมูลจากการอ้างอิงที่ท่านให้แก่บริษัท
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                9.ข้อมูลเกี่ยวกับประสบการณ์ทำงานและการจ้างงานในอดีต เช่น
                ตำแหน่งงาน รายละเอียดของนายจ้าง เงินเดือนและค่าตอบแทน
                สวัสดิการที่ได้รับ
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                10.ข้อมูลเกี่ยวกับสถานที่ที่สามารถปฏิบัติงานได้
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                11.ข้อมูลเกี่ยวกับภาระทางทหาร
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                12.ความสามารถในการขับขี่ยานพาหนะ
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark">
                13.รายละเอียดของบุคคลที่อ้างอิง
                และรายละเอียดของผู้ที่บริษัทสามารถติดต่อได้ในกรณีฉุกเฉิน
                หมายเหตุ:
                ท่านต้องแจ้งประกาศคุ้มครองข้อมูลส่วนบุคคลนี้ให้บุคคลดังกล่าวทราบก่อนให้ข้อมูลแก่บริษัท
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark indent-8">
            2.2 ข้อมูลจากการทำแบบทดสอบเกี่ยวกับลักษณะของท่าน เช่น นิสัย พฤติกรรม
            ทัศนคติ ความถนัด ทักษะ ภาวะความเป็นผู้นำ
            ความสามารถในการทำงานร่วมกับผู้อื่น ความฉลาดทางอารมณ์
            ซึ่งอาจได้มาจากการสังเกตและวิเคราะห์ของบริษัทในระหว่างที่ท่านเข้าร่วมกิจกรรมกับบริษัท
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark indent-8">
            2.3 ข้อมูลที่จำเป็นสำหรับการรายงานต่อหน่วยงานที่กำกับดูแล เช่น
            กระทรวงแรงงาน
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark indent-8">
            2.4 ข้อมูลที่รวบรวมจากท่าน เช่น ข้อมูลที่ท่านระบุหรือให้ไว้แก่บริษัท
            ข้อมูลที่ท่านแจ้งแก่บริษัทในระหว่างการสัมภาษณ์งาน
            ข้อมูลจากการทำแบบทดสอบต่างๆ
            ข้อมูลที่ท่านให้ไว้ในการเข้าร่วมกิจกรรมกับบริษัท
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark indent-8">
            2.5 ข้อมูลที่ท่านเลือกจะแบ่งปันและเปิดเผยผ่านระบบ แอปพลิเคชัน
            เครื่องมือ แบบสอบถาม และบริการต่างๆ ของบริษัท
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark indent-8">
            2.6 เอกสารที่สามารถใช้เพื่อระบุตัวตนของท่าน เช่น
            สำเนาเอกสารที่หน่วยงานของรัฐออกให้ ได้แก่ บัตรประจำตัวประชาชน
            ใบอนุญาตขับขี่รถยนต์/จักรยานยนต์ หนังสือเดินทาง
            และสำเนาเอกสารที่หน่วยงานของรัฐหรือเอกชนออกให้ เช่น สำเนาทะเบียนบ้าน
            หนังสือรับรองวุฒิการศึกษา ปริญญาบัตร ใบแสดงผลการเรียน
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark indent-8">
            2.7 ข้อมูลอื่นๆ
            ที่จำเป็นต่อการสรรหาและคัดเลือกพนักงานหรือนักศึกษาฝึกงาน
            การปฏิบัติตามสัญญาการฝึกงาน การดูแลสิทธิประโยชน์และสวัสดิการ
            การวิเคราะห์และการบริหารงานของบริษัท และการปฏิบัติตามกฎหมายต่างๆ
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark indent-8">
            2.2 ข้อมูลตามที่กำหนดไว้ในใบสมัคร ดังนี้:
          </div>
        </div>
      </div>
    </>
  );
}
