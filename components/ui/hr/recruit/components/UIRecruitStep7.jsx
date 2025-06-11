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
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-center text-xl font-[600]">
          <div>ประกาศว่าด้วยการคุ้มครองข้อมูลส่วนบุคคล</div>
        </div>
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
          บริษัท ชาญนครวิศวกรรม จำกัด (CHANNAKORN ENGINEERING CO., LTD.)
          ตระหนักและให้ความสำคัญต่อความเป็นส่วนตัว
          รวมถึงการคุ้มครองข้อมูลส่วนบุคคลของผู้สมัครงาน ผู้สมัครฝึกงาน
          และผู้ฝึกงาน (ต่อไปนี้เรียกรวมว่า “ท่าน”) ด้วยเหตุนี้
          บริษัทจึงได้จัดทำประกาศฉบับนี้ขึ้น
          เพื่อชี้แจงรายละเอียดเกี่ยวกับการเก็บรวบรวม การใช้
          และการเปิดเผยข้อมูลส่วนบุคคลของท่าน (ซึ่งต่อไปนี้เรียกรวมว่า
          “การประมวลผลข้อมูลส่วนบุคคล”)
          ทั้งนี้เป็นไปตามที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลกำหนด
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            1. วัตถุประสงค์การประมวลผลข้อมูลส่วนบุคคล
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            1.1 บริษัทจะประมวลผลข้อมูลส่วนบุคคลของท่าน โดยมีวัตถุประสงค์หลัก
            ดังต่อไปนี้
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full xl:w-10/12 border-2 border-dark">
            <div className="flex flex-row items-center justify-center w-full h-full font-[600]">
              <div className="flex items-center justify-center w-full p-2 gap-2 border-b-2 border-r-1 border-dark">
                วัตถุประสงค์
              </div>
              <div className="flex  items-center justify-center w-full p-2 gap-2 border-b-2 border-l-1 border-dark">
                ฐานทางกฏหมาย
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-r-1 border-dark">
                (1)
                เพื่อใช้ในการดำเนินการตามคำขอของท่านในการสมัครงานหรือเข้าฝึกงานกับบริษัท
                เช่น การดำเนินการตามกระบวนการสรรหา การตรวจสอบคุณสมบัติ
                การคัดเลือกก่อนการทำสัญญาจ้างเป็นพนักงาน
                รวมถึงการปฏิบัติตามข้อตกลงการฝึกงาน การจ่ายค่าตอบแทนการฝึกงาน
                การได้รับสิทธิประโยชน์และสวัสดิการต่างๆ จากการฝึกงาน
                และการพิจารณาคุณสมบัติเพื่อนำเสนอตำแหน่งงานที่เหมาะสม
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-l-1 border-dark">
                การปฏิบัติตามสัญญา / ความจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมาย
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-r-1 border-dark">
                (2) เพื่อการสมัครเข้าใช้งานระบบงานอิเล็กทรอนิกส์
                หรือการเปิดสิทธิ์การเข้าถึงหรือใช้งานอินเทอร์เน็ต
                หรือระบบงานอิเล็กทรอนิกส์ต่างๆ
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-l-1 border-dark">
                ความจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมาย
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-r-1 border-dark">
                (3) เพื่อการวิเคราะห์และจัดทำฐานข้อมูล
                การบริหารจัดการและปรับปรุงกระบวนการสรรหาและคัดเลือกพนักงาน
                การประเมินผลการฝึกงาน การส่งข่าวสารที่เกี่ยวกับตำแหน่งงาน
                การจัดทำสัญญาฝึกงานหรือสัญญาจ้างงานในกรณีที่ท่านผ่านการคัดเลือก
                และการใช้สิทธิเรียกร้องตามกฎหมาย
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-l-1 border-dark">
                ความจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมาย
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-r-1 border-dark">
                (4) เพื่อดำเนินการวางแผน การบริหารความเสี่ยง การกำกับการตรวจสอบ
                รวมถึงการตรวจสอบภายในของสำนักตรวจสอบภายใน
                และการบริหารจัดการภายในองค์กร
                รวมถึงการใช้ประโยชน์ในการดำเนินงานภายในบริษัทที่เกี่ยวข้องกับการเบิกจ่ายเงินของหน่วยงานบัญชีและการเงินของบริษัท
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-l-1 border-dark">
                ความจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมาย
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-r-1 border-dark">
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
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-l-1 border-dark">
                การปฏิบัติตามกฎหมาย
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-r-1 border-dark">
                (6)
                เพื่อการปฏิบัติตามกฎหมายเกี่ยวกับประโยชน์สาธารณะด้านการสาธารณสุข
                เช่น การป้องกันด้านสุขภาพจากโรคติดต่ออันตราย
                หรือโรคระบาดที่อาจติดต่อหรือแพร่เข้าสู่ราชอาณาจักร
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-b-2 border-l-1 border-dark">
                การปฏิบัติตามกฎหมาย
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-r-1 border-dark">
                (7) เพื่อการบริหารจัดการด้านสุขอนามัยและความปลอดภัยของท่าน
                และการป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของบุคคล
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-l-1 border-dark">
                การปกป้องผลประโยชน์ที่จำเป็นต่อชีวิตหรือสุขภาพ
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            1.2
            ในกรณีที่บริษัทจะประมวลผลข้อมูลส่วนบุคคลของท่านเพื่อวัตถุประสงค์อื่นนอกเหนือจากที่กล่าวมาแล้วข้างต้น
            บริษัทอาจขอข้อมูลส่วนบุคคลของท่านเพิ่มเติม
            โดยจะแจ้งให้ท่านทราบและขอความยินยอมจากท่านเป็นคราวๆ ไป (ตามแต่กรณี)
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            2. ข้อมูลส่วนบุคคลที่เก็บรวบรวม
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            โดยทั่วไปแล้ว
            บริษัทจะเก็บรวบรวมข้อมูลส่วนบุคคลของท่านโดยการขอหรือสอบถามข้อมูลเหล่านั้นจากท่านโดยตรง
            อย่างไรก็ตาม ในบางกรณีบริษัทอาจเก็บรวบรวมข้อมูลของท่านจากแหล่งอื่น
            เช่น หน่วยงานของรัฐ หรือแหล่งข้อมูลอื่นๆ
            ที่มีข้อมูลส่วนบุคคลของท่านปรากฏแก่สาธารณะอย่างชัดแจ้ง
            รวมถึงการเปิดเผยข้อมูลผ่านทางสื่อสังคมออนไลน์ เป็นต้น ในกรณีดังกล่าว
            บริษัทจะเลือกเก็บรวบรวมเฉพาะข้อมูลที่ท่านเลือกให้ปรากฏต่อสาธารณะเท่านั้น
            โดยประเภทของข้อมูลส่วนบุคคลของท่านที่บริษัททำการประมวลผล
            มีดังต่อไปนี้:
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            2.1 ข้อมูลตามที่กำหนดไว้ในใบสมัคร ดังนี้:
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (1).ข้อมูลตามเอกสารที่ท่านส่งมอบให้แก่บริษัท เช่น Curriculum Vitae
              (CV), Resume, เอกสารสมัครงาน, ความเห็นประกอบการสรรหาพนักงาน
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (2).ข้อมูลส่วนตัว เช่น ชื่อ นามสกุล เพศ วันเดือนปีเกิด น้ำหนัก
              ส่วนสูง เลขที่บัตรประชาชนหรือหนังสือเดินทาง หมู่โลหิต สัญชาติ
              ศาสนา สถานะการสมรส
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (3).ข้อมูลการติดต่อ เช่น ที่อยู่ อีเมล หมายเลขโทรศัพท์
              ช่องทางติดต่อในสื่อสังคมออนไลน์
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (4).เงื่อนไขในการปฏิบัติงาน เช่น
              ความสามารถในการปฏิบัติงานต่างจังหวัดหรือต่างประเทศ
              พื้นที่ที่ต้องการปฏิบัติงาน
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (5).ข้อมูลของคู่สมรส บุตร บิดา มารดา เช่น ชื่อ นามสกุล
              เลขที่บัตรประชาชนหรือหนังสือเดินทาง วันเดือนปีเกิด สัญชาติ
              หมู่โลหิต การศึกษา ที่อยู่ หมายเลขโทรศัพท์ หมายเหตุ:
              ก่อนให้ข้อมูลดังกล่าวแก่บริษัท
              ท่านจะต้องแจ้งประกาศคุ้มครองข้อมูลส่วนบุคคลฉบับนี้ให้บุคคลเหล่านั้นทราบ
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (6).ข้อมูลเกี่ยวกับสมาชิกในครอบครัวหรือผู้ที่อยู่ในความดูแลของท่าน
              หมายเหตุ: ต้องแจ้งประกาศฉบับนี้ให้บุคคลดังกล่าวทราบเช่นกัน
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (7).รูปถ่ายและภาพเคลื่อนไหว
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (8).ข้อมูลเกี่ยวกับการศึกษา ความสามารถ และการพัฒนาศักยภาพ เช่น
              ระดับการศึกษา วุฒิการศึกษา สถาบัน/มหาวิทยาลัย ประวัติการศึกษา
              ประวัติการฝึกอบรม ผลการศึกษา ผลการทดสอบ
              สิทธิในการทำงานอย่างถูกต้องตามกฎหมาย คุณสมบัติด้านวิชาชีพ
              ความสามารถด้านภาษา และอื่นๆ
              รวมถึงข้อมูลจากการอ้างอิงที่ท่านให้แก่บริษัท
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (9).ข้อมูลเกี่ยวกับประสบการณ์ทำงานและการจ้างงานในอดีต เช่น
              ตำแหน่งงาน รายละเอียดของนายจ้าง เงินเดือนและค่าตอบแทน
              สวัสดิการที่ได้รับ
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (10).ข้อมูลเกี่ยวกับสถานที่ที่สามารถปฏิบัติงานได้
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (11).ข้อมูลเกี่ยวกับภาระทางทหาร
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (12).ความสามารถในการขับขี่ยานพาหนะ
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (13).รายละเอียดของบุคคลที่อ้างอิง
              และรายละเอียดของผู้ที่บริษัทสามารถติดต่อได้ในกรณีฉุกเฉิน หมายเหตุ:
              ท่านต้องแจ้งประกาศคุ้มครองข้อมูลส่วนบุคคลนี้ให้บุคคลดังกล่าวทราบก่อนให้ข้อมูลแก่บริษัท
            </div>
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            2.2 ข้อมูลจากการทำแบบทดสอบเกี่ยวกับลักษณะของท่าน เช่น นิสัย พฤติกรรม
            ทัศนคติ ความถนัด ทักษะ ภาวะความเป็นผู้นำ
            ความสามารถในการทำงานร่วมกับผู้อื่น ความฉลาดทางอารมณ์
            ซึ่งอาจได้มาจากการสังเกตและวิเคราะห์ของบริษัทในระหว่างที่ท่านเข้าร่วมกิจกรรมกับบริษัท
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            2.3 ข้อมูลที่จำเป็นสำหรับการรายงานต่อหน่วยงานที่กำกับดูแล เช่น
            กระทรวงแรงงาน
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            2.4 ข้อมูลที่รวบรวมจากท่าน เช่น ข้อมูลที่ท่านระบุหรือให้ไว้แก่บริษัท
            ข้อมูลที่ท่านแจ้งแก่บริษัทในระหว่างการสัมภาษณ์งาน
            ข้อมูลจากการทำแบบทดสอบต่างๆ
            ข้อมูลที่ท่านให้ไว้ในการเข้าร่วมกิจกรรมกับบริษัท
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            2.5 ข้อมูลที่ท่านเลือกจะแบ่งปันและเปิดเผยผ่านระบบ แอปพลิเคชัน
            เครื่องมือ แบบสอบถาม และบริการต่างๆ ของบริษัท
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            2.6 เอกสารที่สามารถใช้เพื่อระบุตัวตนของท่าน เช่น
            สำเนาเอกสารที่หน่วยงานของรัฐออกให้ ได้แก่ บัตรประจำตัวประชาชน
            ใบอนุญาตขับขี่รถยนต์/จักรยานยนต์ หนังสือเดินทาง
            และสำเนาเอกสารที่หน่วยงานของรัฐหรือเอกชนออกให้ เช่น สำเนาทะเบียนบ้าน
            หนังสือรับรองวุฒิการศึกษา ปริญญาบัตร ใบแสดงผลการเรียน
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            2.7 ข้อมูลอื่นๆ
            ที่จำเป็นต่อการสรรหาและคัดเลือกพนักงานหรือนักศึกษาฝึกงาน
            การปฏิบัติตามสัญญาการฝึกงาน การดูแลสิทธิประโยชน์และสวัสดิการ
            การวิเคราะห์และการบริหารงานของบริษัท และการปฏิบัติตามกฎหมายต่างๆ
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            2.8 สำหรับผู้ฝึกงาน บริษัทอาจมีการเก็บรวบรวมข้อมูลเพิ่มเติม เช่น
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (1).ข้อมูลเกี่ยวกับบิดา มารดา หรือผู้ปกครอง เช่น ชื่อ นามสกุล
              ที่อยู่ หมายเลขโทรศัพท์ หรือหมายเลขโทรศัพท์เคลื่อนที่
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (2).รายละเอียดเกี่ยวกับบัญชีธนาคารของท่าน
              เพื่อใช้ในการจ่ายค่าเบี้ยเลี้ยงฝึกงาน
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (3).ลักษณะของผู้ฝึกงานและข้อมูลจากการฝึกงาน เช่น นิสัย พฤติกรรม
              ทัศนคติ ความถนัด ทักษะ ภาวะความเป็นผู้นำ
              ความสามารถในการทำงานร่วมกับผู้อื่น ความฉลาดทางอารมณ์ ความมีวินัย
              หรือลักษณะอื่นๆ รวมถึงการบันทึกเวลาเข้า–ออกงาน
              และระยะเวลาในการปฏิบัติงาน เพื่อใช้ในการประเมินผลการฝึกงาน
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (4).ข้อมูลอื่นๆ เช่น รายละเอียดของผู้แนะนำ
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (5).รูปถ่าย ภาพเคลื่อนไหว
              และบันทึกภาพและ/หรือเสียงจากกล้องโทรทัศน์วงจรปิด (“กล้องวงจรปิด”)
              โดยบริษัทจะติดป้ายแจ้งเตือนว่ามีการใช้กล้องวงจรปิดในบริเวณพื้นที่ที่อยู่ในความดูแลและรับผิดชอบของบริษัท
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (6).บันทึกการเข้า–ออกงานและระยะเวลาในการปฏิบัติงาน
              การทำงานล่วงเวลา ไม่ว่าจะในวันทำงานปกติหรือวันหยุด
              การทำงานในวันหยุด การขาดงาน และการลางาน รวมถึงสถานที่ปฏิบัติงาน
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (7).ข้อมูลการใช้งานและการเข้าถึงระบบสารสนเทศ คอมพิวเตอร์ ระบบงาน
              เว็บไซต์ แอปพลิเคชัน ระบบเครือข่าย อุปกรณ์อิเล็กทรอนิกส์
              ระบบจดหมายอิเล็กทรอนิกส์
              เพื่อให้สอดคล้องกับนโยบายด้านการรักษาความมั่นคงปลอดภัยทางเทคโนโลยีสารสนเทศ
              รวมถึงกฎ ระเบียบ และหลักเกณฑ์การใช้ระบบเทคโนโลยีสารสนเทศของบริษัท
              และกฎหมายที่เกี่ยวข้อง เช่น ชื่อบัญชีผู้ใช้งาน รหัสผ่าน (Password)
              รหัสประจำตัว (Personal Identification Number: PIN)
              หมายเลขอ้างอิงของอุปกรณ์อิเล็กทรอนิกส์ (IP Address)
              ข้อมูลพิกัดตำแหน่งที่อยู่ (Location Data) รหัสบ่งชี้อุปกรณ์
              (Device Identifier) ชนิดและเวอร์ชันของเบราว์เซอร์ที่ท่านใช้
              ชนิดและเวอร์ชันของโปรแกรมเสริม (Plug-in) ของเบราว์เซอร์
              การตั้งค่าเขตเวลา (Time Zone)
            </div>
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            2.9
            ข้อมูลส่วนบุคคลที่เก็บรวบรวมข้างต้นเป็นข้อมูลที่จำเป็นต่อบริษัทในการปฏิบัติตามสัญญา
            หรือการปฏิบัติตามคำขอของท่านก่อนการทำสัญญา
            หากท่านไม่ให้ข้อมูลส่วนบุคคลที่จำเป็นดังกล่าว
            บริษัทอาจไม่สามารถดำเนินการต่างๆ ที่เกี่ยวข้องกับการทำธุรกรรม
            หรือบริหารจัดการตามสัญญากับท่านได้ (ตามแต่กรณี)
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            2.10 ในกรณีที่ท่านได้รับคัดเลือกให้เป็นพนักงาน
            บริษัทจะมีการเก็บรวบรวมข้อมูลส่วนบุคคลเพิ่มเติม ตามที่กำหนดไว้ใน
            ประกาศคุ้มครองข้อมูลส่วนบุคคลสำหรับพนักงาน
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            3.ข้อมูลส่วนบุคคลที่มีความอ่อนไหว
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            3.1
            บริษัทอาจมีความจำเป็นต้องประมวลผลข้อมูลส่วนบุคคลที่มีความอ่อนไหวตามที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลกำหนด
            เพื่อใช้ตามวัตถุประสงค์ที่ระบุไว้ในประกาศคุ้มครองข้อมูลส่วนบุคคลฉบับนี้
            หรือวัตถุประสงค์อื่นใดตามที่บริษัทได้แจ้งให้ท่านทราบเพิ่มเติม
            หรือได้รับความยินยอมจากท่านเป็นรายกรณีไป
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            3.2
            บริษัทอาจต้องประมวลผลข้อมูลส่วนบุคคลที่มีความอ่อนไหวของท่านในกรณีดังต่อไปนี้:
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (1).ข้อมูลสุขภาพ เช่น น้ำหนัก ส่วนสูง โรคประจำตัว ตาบอดสี
              ผลการตรวจร่างกาย ข้อมูลการแพ้อาหาร ข้อมูลการแพ้ยา หมู่โลหิต
              ใบรับรองแพทย์ ประวัติการรักษาพยาบาล เพื่อการคุ้มครองแรงงาน
              การประเมินความสามารถในการทำงาน
              รวมถึงการปฏิบัติตามกฎหมายที่เกี่ยวข้อง
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (2).ข้อมูลชีวภาพ (Biometric Data) เช่น ข้อมูลจำลองลายนิ้วมือ
              ข้อมูลภาพจำลองใบหน้า เพื่อใช้ในการระบุและยืนยันตัวตนของท่าน
              การป้องกันอาชญากรรม
              และการรักษาผลประโยชน์โดยชอบด้วยกฎหมายของบริษัทหรือของผู้อื่น
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (3).ข้อมูลเกี่ยวกับประวัติอาชญากรรม
              เพื่อพิจารณาความเหมาะสมในการปฏิบัติงานและรักษาผลประโยชน์โดยชอบด้วยกฎหมายของบริษัท
              โดยบริษัทจะจัดให้มีมาตรการคุ้มครองข้อมูลดังกล่าวตามที่กฎหมายกำหนด
              และจะเก็บจากเอกสารที่ท่านนำมาแสดงหรือที่ท่านยินยอมให้ตรวจสอบจากหน่วยงานที่มีอำนาจตามกฎหมาย
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (4).เชื้อชาติ ความพิการ ข้อมูลสหภาพแรงงาน
              เพื่อประกอบการจัดสิ่งอำนวยความสะดวก กิจกรรม
              และสวัสดิการที่เหมาะสมกับพนักงาน
              รวมถึงเพื่อการบริหารจัดการดูแลพนักงานอย่างเท่าเทียมและเป็นธรรมตามหลักสิทธิมนุษยชน
            </div>
            <div className="flex items-start justify-start w-full h-full p-2 gap-2">
              (5).ข้อมูลส่วนบุคคลที่มีความอ่อนไหวอื่นๆ
              ตามวัตถุประสงค์อันชอบด้วยกฎหมาย เช่น
              เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของบุคคล
              เป็นข้อมูลที่เปิดเผยต่อสาธารณะด้วยความยินยอมโดยชัดแจ้งของท่าน
              เพื่อใช้สิทธิเรียกร้องตามกฎหมาย
              เพื่อบรรลุวัตถุประสงค์เกี่ยวกับการคุ้มครองแรงงาน การประกันสังคม
              และสวัสดิการของพนักงาน
            </div>
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            3.3 ในการประมวลผลข้อมูลส่วนบุคคลที่มีความอ่อนไหวดังกล่าว
            บริษัทจะขอความยินยอมโดยชัดแจ้งจากท่านเป็นรายกรณี
            และจะจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยที่เพียงพอ
            เพื่อปกป้องคุ้มครองข้อมูลส่วนบุคคลที่มีความอ่อนไหวของท่าน
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            4.คุกกี้ (Cookies)
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            ในกรณีที่ท่านเข้าใช้งานสื่ออิเล็กทรอนิกส์ของบริษัท เช่น แอปพลิเคชัน
            เว็บไซต์ ระบบเทคโนโลยีสารสนเทศและไซเบอร์อื่นๆ
            บริษัทมีการใช้คุกกี้เพื่อเก็บรวบรวมข้อมูลส่วนบุคคล ตามที่กำหนดไว้ใน
            ประกาศการใช้งานคุกกี้ของบริษัท
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            5. การถอนความยินยอมและผลกระทบที่อาจเกิดขึ้น
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            5.1
            ในกรณีที่บริษัททำการประมวลผลข้อมูลส่วนบุคคลโดยอาศัยความยินยอมของท่าน
            ท่านมีสิทธิที่จะถอนความยินยอมที่ให้ไว้กับบริษัทได้ตลอดเวลา
            โดยการถอนความยินยอมดังกล่าวจะไม่ส่งผลกระทบต่อการประมวลผลข้อมูลส่วนบุคคลที่บริษัทได้ดำเนินการไปแล้วก่อนหน้าการถอนความยินยอม
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            5.2 การที่ท่านถอนความยินยอม หรือปฏิเสธไม่ให้ข้อมูลบางประการ
            อาจส่งผลให้บริษัทไม่สามารถดำเนินการเพื่อบรรลุวัตถุประสงค์บางประการหรือทั้งหมดตามที่บริษัทได้แจ้งไว้ในประกาศคุ้มครองข้อมูลส่วนบุคคลฉบับนี้
            หรือวัตถุประสงค์อื่นใดที่บริษัทได้แจ้งให้ท่านทราบเพิ่มเติม
            หรือที่ท่านได้ให้ความยินยอมไว้เป็นรายกรณี
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            6. ข้อมูลส่วนบุคคลของบุคคลอื่น
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            6.1 ในกรณีที่ท่านได้ให้ข้อมูลส่วนบุคคลของบุคคลอื่นแก่บริษัท
            ท่านมีหน้าที่ดังต่อไปนี้:
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (1).แจ้งรายละเอียดตามประกาศคุ้มครองข้อมูลส่วนบุคคลของบริษัทให้บุคคลนั้นทราบ
                รวมถึงขอความยินยอมจากบุคคลนั้น
                (ในกรณีที่ต้องได้รับความยินยอมจากเจ้าของข้อมูล)
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (2).ดำเนินการที่จำเป็นเพื่อให้บริษัทสามารถประมวลผลข้อมูลส่วนบุคคลของบุคคลนั้นได้โดยชอบด้วยกฎหมาย
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            6.2 ข้อมูลส่วนบุคคลของบุคคลอื่นที่บริษัทอาจใช้ในการประมวลผล
            อาจรวมถึงข้อมูลส่วนบุคคลที่มีความอ่อนไหว เช่น: ชื่อ นามสกุล
            วันเดือนปีเกิด ที่อยู่ เพศ สัญชาติ
            ข้อมูลตามบัตรประจำตัวประชาชนหรือหนังสือเดินทาง
            ที่อยู่จดหมายอิเล็กทรอนิกส์ (อีเมล) หมายเลขโทรศัพท์ อาชีพ
            ตำแหน่งหน้าที่ สถานที่ทำงาน เอกสารทางการเงิน ความสัมพันธ์กับท่าน
            ช่องทางติดต่อในสื่อสังคมออนไลน์
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            7. ข้อมูลส่วนบุคคลของผู้เยาว์ คนไร้ความสามารถ
            และคนเสมือนไร้ความสามารถ
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            7.1
            ในกรณีที่บริษัทจำเป็นต้องได้รับความยินยอมในการประมวลผลข้อมูลส่วนบุคคลของผู้เยาว์
            คนไร้ความสามารถ หรือคนเสมือนไร้ความสามารถ
            บริษัทจะประมวลผลข้อมูลส่วนบุคคลของบุคคลดังกล่าวได้
            ก็ต่อเมื่อบริษัทได้รับความยินยอมจากผู้ใช้อำนาจปกครองที่มีอำนาจกระทำการแทนผู้เยาว์
            ผู้พิทักษ์ หรือผู้อนุบาล
            หรือผู้มีอำนาจให้ความยินยอมแทนบุคคลดังกล่าวตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
            (แล้วแต่กรณี)
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            7.2
            หากบริษัทต้องได้รับความยินยอมในการประมวลผลข้อมูลส่วนบุคคลของผู้เยาว์
            คนไร้ความสามารถ หรือคนเสมือนไร้ความสามารถ แต่ในขณะประมวลผล
            บริษัทไม่ทราบว่าเจ้าของข้อมูลเป็นบุคคลตามที่กล่าวข้างต้น
            และต่อมาทราบในภายหลังว่าบริษัทได้ประมวลผลข้อมูลโดยไม่ได้รับความยินยอมจากผู้มีอำนาจ
            บริษัทจะลบหรือทำลายข้อมูลดังกล่าว
            หรือทำให้ข้อมูลไม่สามารถระบุตัวบุคคลได้
            เว้นแต่บริษัทสามารถประมวลผลได้โดยอาศัยฐานทางกฎหมายอื่นโดยไม่ต้องขอความยินยอม
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            8. ระยะเวลาเก็บรักษาข้อมูลส่วนบุคคล
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            8.1
            บริษัทจะเก็บรักษาข้อมูลส่วนบุคคลของท่านตามระยะเวลาที่จำเป็นเพื่อบรรลุวัตถุประสงค์ในการประมวลผลข้อมูล
            เว้นแต่กฎหมายอนุญาตให้เก็บรักษาได้นานกว่า
            หากไม่สามารถระบุระยะเวลาแน่ชัด
            บริษัทจะเก็บไว้ตามระยะเวลาที่สมควรโดยอิงจากแนวปฏิบัติทางธุรกิจ
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            8.2
            บริษัทอาจเก็บข้อมูลของท่านไว้หลังจากเสร็จสิ้นการพิจารณาคัดเลือกเพื่อใช้พิจารณาสำหรับตำแหน่งงานอื่น
            หากท่านไม่ประสงค์ให้เก็บไว้
            สามารถติดต่อบริษัทผ่านช่องทางที่ระบุในประกาศฉบับนี้
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            8.3 หากท่านผ่านการคัดเลือกเป็นพนักงานหรือเข้าฝึกงาน
            บริษัทจะเก็บข้อมูลไว้ในระยะเวลาที่จำเป็นเพื่อวัตถุประสงค์ในการจ้างงานหรือฝึกงาน
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            8.4 ข้อมูลจากกล้องวงจรปิดจะเก็บไว้ตามนี้:
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (1).แกรณีปกติ: ไม่เกิน 1 ปีนับจากวันที่บันทึก
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (2).กรณีจำเป็น: เกิน 1 ปี หากต้องใช้เป็นหลักฐานในการสืบสวน
                สอบสวน หรือคดี โดยจะลบ/ทำลายเมื่อไม่จำเป็นต่อวัตถุประสงค์
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            8.5 ในกรณีที่บริษัทประมวลผลข้อมูลตามความยินยอม
            บริษัทจะดำเนินการจนกว่าท่านจะถอนความยินยอม
            และจะเก็บข้อมูลเท่าที่จำเป็นเพื่อบันทึกว่าท่านเคยถอนความยินยอม
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            9. การเปิดเผยข้อมูลส่วนบุคคล
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            9.1 บริษัทอาจเปิดเผยข้อมูลของท่านให้แก่: กลุ่มบริษัท
            ผู้ประมวลผลข้อมูล ที่ปรึกษา/สถาบันการเงิน/ผู้สอบบัญชี คู่ค้า
            พันธมิตร Co-branding ผู้รับจ้าง และผู้ที่เกี่ยวข้องกับการจ้างงาน
            หน่วยงานภาครัฐ ผู้มีอำนาจตามกฎหมาย
            องค์กรภายใน–ต่างประเทศที่เกี่ยวข้องกับดัชนียั่งยืน
            หน่วยงานทางการแพทย์หรือกู้ภัยในกรณีฉุกเฉิน
            ผู้ที่บริษัทมีภาระผูกพันตามกฎหมายหรือนิติสัมพันธ์
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            9.2
            บริษัทจะกำหนดให้ผู้รับข้อมูลมีมาตรการปกป้องและใช้เฉพาะเท่าที่จำเป็น
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            9.3
            บริษัทจะกำชับให้ข้อมูลถูกเก็บเป็นความลับและใช้ตามวัตถุประสงค์ตามที่แจ้งไว้หรือได้รับความยินยอมเท่านั้น
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            10. การส่งหรือโอนข้อมูลส่วนบุคคลไปต่างประเทศ
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            บริษัทจะควบคุมดูแลให้ผู้รับโอนข้อมูล
            หรือผู้ให้บริการในต่างประเทศมีมาตรฐานการคุ้มครองข้อมูลส่วนบุคคลตามกฎหมาย
            หากประเทศปลายทางไม่มีมาตรฐานเทียบเท่า
            บริษัทจะดำเนินมาตรการที่จำเป็นเพื่อให้ข้อมูลได้รับการคุ้มครองในระดับที่เพียงพอ
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            11. มาตรการรักษาความมั่นคงปลอดภัยสำหรับข้อมูลส่วนบุคคล
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            11.1 บริษัทจะกำหนดสิทธิ์ในการเข้าถึง การใช้ แก้ไข เปลี่ยนแปลง
            หรือเปิดเผยข้อมูลส่วนบุคคล
            รวมถึงการยืนยันตัวบุคคลของผู้ที่เข้าถึงหรือใช้ข้อมูลส่วนบุคคลอย่างเคร่งครัด
            ทั้งนี้
            ภายใต้มาตรฐานการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลตามที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลกำหนด
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            11.2 บริษัทจะจัดให้มีวิธีการทางเทคโนโลยีที่เหมาะสม
            เพื่อป้องกันไม่ให้มีการเข้าถึงระบบเทคโนโลยีสารสนเทศโดยไม่ได้รับอนุญาต
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            11.3 ในกรณีที่บริษัทมีการเปิดเผยข้อมูลส่วนบุคคลของท่านแก่บุคคลอื่น
            บริษัทจะดำเนินการใดๆ
            อันสมควรเพื่อป้องกันไม่ให้บุคคลนั้นใช้หรือเปิดเผยข้อมูลส่วนบุคคลโดยปราศจากอำนาจ
            หรือโดยมิชอบ และใช้ข้อมูลส่วนบุคคลของท่านเพียงเท่าที่จำเป็น
            และเป็นไปตามวัตถุประสงค์ที่บริษัทได้แจ้งให้ท่านทราบและ/หรือได้รับความยินยอมจากท่านเป็นรายกรณี
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            11.4 บริษัทจะจัดให้มีระบบตรวจสอบ
            เพื่อดำเนินการลบหรือทำลายข้อมูลส่วนบุคคลออกจากระบบจัดเก็บเมื่อพ้นระยะเวลาที่กำหนดไว้สำหรับการจัดเก็บข้อมูล
            หรือเมื่อข้อมูลส่วนบุคคลนั้นไม่เกี่ยวข้องหรือเกินความจำเป็นตามวัตถุประสงค์ในการประมวลผล
            หรือเมื่อท่านร้องขอ หรือขอถอนความยินยอม
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            11.5
            ในกรณีที่มีการฝ่าฝืนมาตรการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของบริษัท
            จนเป็นเหตุให้มีการละเมิดข้อมูลส่วนบุคคลของท่าน
            บริษัทจะแจ้งเหตุการณ์ละเมิดดังกล่าวให้หน่วยงานที่มีอำนาจตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลทราบโดยไม่ชักช้า
            เว้นแต่การละเมิดดังกล่าวไม่มีความเสี่ยงที่จะกระทบต่อสิทธิและเสรีภาพของบุคคล
            ในกรณีที่การละเมิดนั้นมีความเสี่ยงสูง
            บริษัทจะแจ้งเหตุการณ์ละเมิดให้ท่านทราบโดยไม่ชักช้าพร้อมทั้งแนวทางการเยียวยา
            ทั้งนี้
            ให้เป็นไปตามหลักเกณฑ์และวิธีการที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลกำหนด
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            11.6 บริษัทจะบันทึกรายการตามที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลกำหนดไว้
            เป็นลายลักษณ์อักษรหรือในระบบอิเล็กทรอนิกส์
            เพื่อให้เจ้าของข้อมูลหรือหน่วยงานที่มีอำนาจสามารถตรวจสอบได้
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            12. สิทธิของเจ้าของข้อมูล
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            12.1
            ท่านในฐานะเจ้าของข้อมูลมีสิทธิในการดำเนินการเกี่ยวกับข้อมูลส่วนบุคคลของท่าน
            ซึ่งอยู่ในความรับผิดชอบของบริษัท ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
            ดังนี้:
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (1).ขอเข้าถึงหรือขอรับสำเนาข้อมูลส่วนบุคคล
                หรือขอให้เปิดเผยถึงแหล่งที่มาของข้อมูลส่วนบุคคลที่ท่านไม่ได้ให้ความยินยอม
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (2).ขอรับข้อมูลส่วนบุคคลในรูปแบบอิเล็กทรอนิกส์
                หรือขอให้ถ่ายโอนข้อมูลดังกล่าวไปยังบุคคลอื่น
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (3).คัดค้านการเก็บรวบรวม การใช้ หรือการเปิดเผยข้อมูลส่วนบุคคล
                ทั้งนี้ ภายใต้หลักเกณฑ์ที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลกำหนด
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (4).ขอให้ลบหรือทำลายข้อมูลส่วนบุคคล
                หรือทำให้ข้อมูลส่วนบุคคลของท่านกลายเป็นข้อมูลที่ไม่สามารถระบุตัวบุคคลได้
                ทั้งนี้ ภายใต้หลักเกณฑ์ที่กฎหมายกำหนด
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (5).ขอให้ระงับการใช้ข้อมูลส่วนบุคคล ทั้งนี้
                ภายใต้หลักเกณฑ์ที่กฎหมายกำหนด
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (6).ขอแก้ไขหรือปรับปรุงข้อมูลส่วนบุคคลของท่านให้ถูกต้อง
                เป็นปัจจุบัน สมบูรณ์ และไม่ก่อให้เกิดความเข้าใจผิด
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (7).ถอนความยินยอม ที่ท่านได้ให้ไว้กับบริษัท
                เว้นแต่มีข้อจำกัดสิทธิในการถอนความยินยอมตามที่กฎหมายหรือสัญญากำหนดไว้เพื่อประโยชน์ของท่าน
              </div>
              <div className="flex items-start justify-start w-full h-full p-2 gap-2">
                (8).ร้องเรียนต่อหน่วยงานที่มีอำนาจตามกฎหมาย
                หากท่านเชื่อว่าการดำเนินการเกี่ยวกับข้อมูลส่วนบุคคลของบริษัทไม่เป็นไปตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            12.2 ท่านสามารถใช้สิทธิตามข้อ 12.1 ได้ โดยติดต่อบุคคลที่ระบุไว้ในข้อ
            14
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            12.3
            บริษัทขอสงวนสิทธิที่จะปฏิเสธการดำเนินการตามคำขอใช้สิทธิของท่านไม่ว่าทั้งหมดหรือบางส่วน
            หากบริษัทมีเหตุผลอันสมควรและเป็นไปโดยชอบด้วยกฎหมาย เช่น
            ารดำเนินการดังกล่าวก่อให้เกิดภาระแก่บริษัทเกินสมควร
            เป็นการพ้นวิสัยในทางปฏิบัติ ขัดต่อกฎหมาย
            การใช้สิทธินั้นมีหรืออาจมีผลกระทบต่อสิทธิและเสรีภาพของบุคคลอื่น
            หรือในกรณีที่บริษัทมีอำนาจตามกฎหมายในการเก็บรวบรวมข้อมูลส่วนบุคคลของท่านโดยไม่ต้องได้รับความยินยอมจากท่าน
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            13.
            ประกาศหรือนโยบายคุ้มครองข้อมูลส่วนบุคคลของเว็บไซต์หรือแอปพลิเคชันอื่น
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            ในกรณีที่ท่านใช้งานเว็บไซต์หรือแอปพลิเคชันของบริษัท
            และท่านได้คลิกลิงก์ที่ปรากฏบนเว็บไซต์หรือแอปพลิเคชันดังกล่าว
            เพื่อเข้าไปยังเว็บไซต์หรือแอปพลิเคชันอื่น
            ไม่ว่าเว็บไซต์หรือแอปพลิเคชันนั้นจะเป็นของบริษัทหรือไม่ก็ตาม
            ท่านมีหน้าที่ศึกษาประกาศหรือนโยบายคุ้มครองข้อมูลส่วนบุคคลของเว็บไซต์หรือแอปพลิเคชันนั้นโดยตรง
            ทั้งนี้ บริษัทจะไม่รับผิดชอบต่อเนื้อหา
            หรือมาตรฐานการคุ้มครองข้อมูลส่วนบุคคลของเว็บไซต์หรือแอปพลิเคชันอื่น
            และหากท่านได้ให้ข้อมูลส่วนบุคคลแก่เจ้าของเว็บไซต์หรือแอปพลิเคชันอื่น
            บริษัทขอให้ท่านทราบและเข้าใจว่าบริษัทไม่มีส่วนเกี่ยวข้องกับการประมวลผลข้อมูลส่วนบุคคลของท่านโดยเจ้าของเว็บไซต์หรือแอปพลิเคชันนั้นแต่อย่างใด
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            14.
            ข้อมูลผู้ควบคุมข้อมูลส่วนบุคคลและเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            ท่านสามารถติดต่อผู้ควบคุมข้อมูลส่วนบุคคลและ/หรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของบริษัท
            ผ่านช่องทางดังต่อไปนี้: PDPA Contact Center โทรศัพท์: 02-975-5566
            อีเมล: pdpa_info@thaibev.com
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
            15. การแก้ไขเปลี่ยนแปลงประกาศคุ้มครองข้อมูลส่วนบุคคล
          </div>
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 indent-10">
            ในกรณีที่มีการแก้ไขหรือเปลี่ยนแปลงประกาศคุ้มครองข้อมูลส่วนบุคคลฉบับนี้
            บริษัทจะแจ้งให้ท่านทราบผ่านทางเว็บไซต์ แอปพลิเคชัน
            หรือช่องทางการสื่อสารอื่นของบริษัท
            โดยประกาศคุ้มครองข้อมูลส่วนบุคคลฉบับใหม่จะมีผลบังคับใช้ทันทีในวันที่ประกาศให้ท่านทราบ
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-1 w-full h-full p-2 gap-2 border-2 border-dark/25">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-2">
          <div className="flex flex-col items-start justify-center w-full h-full xl:w-4/12 p-2 gap-2">
            <div className="font-medium text-black">ข้าพเจ้า</div>
            <div className="text-sm text-gray-500">I</div>
          </div>
          <div className="flex items-end justify-center w-full h-full xl:w-8/12 p-2 gap-2">
            <RadioGroup
              name="recruitGender"
              size="sm"
              variant="underlined"
              color="primary"
              radius="full"
              orientation="horizontal"
              className="flex items-start justify-center xl:items-start w-full h-full"
              // value={formData.recruitGender}
              // onValueChange={(value) =>
              //   handleInputChange("recruitGender")({ target: { value } })
              // }
              // onChange={handleInputChange("roleName")}
              // isInvalid={!!errors.roleName}
              // errorMessage={errors.roleName}
            >
              <Radio key="Yes" value="Yes">
                ยินยอม
                <div className="text-sm text-gray-500">(Give consent)</div>
              </Radio>
              <Radio key="No" value="No">
                ไม่ยินยอม
                <div className="text-sm text-gray-500">
                  (Do not give consent)
                </div>
              </Radio>
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 text-md font-[600]">
          <div>
            ข้าพเจ้ายินยอมให้บริษัท ชาญนครวิศวกรรม จำกัด (CHAN NAKORN
            ENGINEERING CO., LTD.) ประมวลผลข้อมูลส่วนบุคคลของข้าพเจ้า
            เพื่อใช้ในการพิจารณาตำแหน่งงานที่เหมาะสมกับข้าพเจ้า
            และเพื่อแจ้งเตือนเมื่อมีประกาศรับสมัครงานใหม่จากทางบริษัท
          </div>
          <div>
            II consent to CHAN NAKORN ENGINEERING CO., LTD. processing my
            personal data for the purpose of considering job positions
            appropriate to me and notifying me when new recruitment
            announcements are made by the Company.
          </div>
        </div>
      </div>
    </>
  );
}
