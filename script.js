/* =========================================================
   THE WORLD OF TIME & SEASONS
   Interactive personality quiz

   No frameworks.
   No external libraries.
========================================================= */


/* =========================================================
   1. CHARACTER DATA
========================================================= */

const characters = {

  minute: {
    name: "เข็มนาทีผู้หวาดกลัว",

    english: "The Anxious Minute Hand",

    season: "🕝 โลกของเวลา",

    tagline: "คนที่อยากหยุดช่วงเวลาที่มีความสุขไว้",

    symbol: "🕝",

    color: "#aebfca",

    story: `
      เข็มนาทีเคยคิดว่า ถ้าเวลาหยุดเดิน
      ทุกสิ่งที่รักก็คงไม่ต้องจากไปไหน

      แต่เมื่อเวลาหยุดลงจริง ๆ เขากลับพบว่า
      ไม่มีดอกไม้ใดเบ่งบาน ไม่มีใครได้เติบโต
      และไม่มีวันพรุ่งนี้ให้รอคอย

      เข็มนาทีจึงค่อย ๆ เรียนรู้ว่า
      การเดินต่อไปไม่ได้แปลว่าเราต้องสูญเสียทุกอย่าง
      บางครั้งมันคือสิ่งที่ทำให้เราได้พบกับช่วงเวลาใหม่ ๆ
    `,

    meaning: `
      คุณอาจเป็นคนที่ให้คุณค่ากับช่วงเวลาที่มีความสุขมาก
      จนบางครั้งกลัวว่าการเปลี่ยนแปลงจะพรากสิ่งเหล่านั้นไป

      ไม่จำเป็นต้องรีบปล่อยทุกอย่างในวันนี้
      แค่ค่อย ๆ ให้เวลาเดินไปพร้อมกับคุณก็เพียงพอแล้ว
    `
  },


  piano: {
    name: "เสียงเปียโนสีเทา",

    english: "The Melancholic Musician",

    season: "☀️ ฤดูร้อน",

    tagline: "คนที่มีความเศร้าอยู่ในใจ แต่ยังมอบความอบอุ่นให้คนอื่นได้",

    symbol: "♫",

    color: "#b6b8c1",

    story: `
      ในบ้านหลังหนึ่ง มีเปียโนสีเทาที่เคยเล่นเพลงให้ทุกคนฟัง

      เมื่อบ้านเงียบลง เสียงเพลงของเขาก็ยังคงอยู่
      แม้ไม่มีใครนั่งฟังเหมือนเมื่อก่อน

      เขาไม่ได้เล่นเพื่อทำให้ความเศร้าหายไป
      แต่เพื่อบอกว่า แม้ในวันที่ไม่มีใครอยู่
      ความทรงจำดี ๆ ก็ยังมีที่ของมันในหัวใจ
    `,

    meaning: `
      คุณอาจเป็นคนที่มีความรู้สึกลึกซึ้ง
      และแม้จะผ่านเรื่องเศร้ามา
      คุณก็ยังมีความอ่อนโยนให้กับคนอื่นได้

      ความเศร้าของคุณไม่ได้ทำให้คุณอ่อนแอ
      มันอาจเป็นส่วนหนึ่งของความเข้าใจที่คุณมีต่อโลก
    `
  },


  notebook: {
    name: "สมุดหมึกปากกา",

    english: "The Permanent Writer",

    season: "🍂 ใบไม้ร่วง",

    tagline: "คนที่กำลังเรียนรู้ว่าจะอยู่กับอดีตอย่างไร",

    symbol: "📖",

    color: "#b6a99e",

    story: `
      สมุดเล่มหนึ่งมีหน้ากระดาษเต็มไปด้วยเรื่องราวที่เขียนด้วยหมึก

      บางหน้าเป็นวันที่มีความสุข
      บางหน้าเป็นวันที่อยากลืม
      และบางหน้าก็เต็มไปด้วยคำที่ไม่เคยได้พูดออกไป

      สมุดอยากลบหน้าที่เจ็บปวด
      แต่หมึกไม่เคยจางหาย

      จนวันหนึ่ง เขาเข้าใจว่า
      หนังสือเล่มนี้ไม่จำเป็นต้องมีแต่หน้าที่สวยงาม
      เพราะทุกหน้าล้วนเป็นส่วนหนึ่งของเรื่องราว
      ที่ทำให้เขาเป็นตัวเองในวันนี้
    `,

    meaning: `
      คุณอาจเป็นคนที่กำลังเรียนรู้ว่าจะอยู่กับอดีตอย่างไร
      โดยไม่ต้องลืมมัน และไม่จำเป็นต้องกลับไปแก้ไขทุกอย่าง

      หน้าที่ผ่านมาอาจยังอยู่ในหนังสือของคุณ
      แต่หน้าต่อไปยังเขียนได้เสมอ
    `
  },


  star: {
    name: "ดวงดาวกลางวัน",

    english: "The Hidden Star",

    season: "❄️ ฤดูหนาว",

    tagline: "คนที่กำลังค้นพบคุณค่าของตัวเอง",

    symbol: "✦",

    color: "#d7c99e",

    story: `
      มีดาวดวงหนึ่งที่มักมองเห็นดวงอาทิตย์ส่องแสงอยู่บนท้องฟ้า

      เขาคิดว่าแสงของตัวเองคงไม่มีความหมาย
      เพราะไม่มีใครมองเห็นในเวลากลางวัน

      แต่เมื่อค่ำคืนมาถึง
      เขากลับพบว่ามีใครบางคนกำลังมองขึ้นมา
      และแสงเล็ก ๆ ของเขาก็ทำให้ท้องฟ้าที่มืดมิด
      ไม่ว่างเปล่าอีกต่อไป

      ดาวจึงได้รู้ว่า
      ไม่จำเป็นต้องสว่างที่สุดเพื่อมีคุณค่า
    `,

    meaning: `
      คุณอาจเป็นคนที่ยังมองไม่เห็นความงามของตัวเอง
      เพราะเผลอเปรียบเทียบกับคนอื่นมากเกินไป

      คุณไม่จำเป็นต้องเหมือนใคร
      แสงของคุณมีความหมายในแบบที่เป็นของคุณเอง
    `
  },


  tree: {
    name: "ต้นไม้ผลัดใบ",

    english: "The Transforming Tree",

    season: "🌳 โลกของการเติบโต",

    tagline: "คนที่กำลังเปลี่ยนแปลงและเติบโต",

    symbol: "🌳",

    color: "#a7b8a6",

    story: `
      ต้นไม้ต้นหนึ่งเคยกลัววันที่ใบไม้ของตัวเองจะร่วงหล่น

      เขาคิดว่าถ้าไม่มีใบไม้เหลืออยู่
      เขาก็คงไม่ใช่ต้นไม้ที่สวยงามอีกต่อไป

      แต่เมื่อฤดูเปลี่ยนผ่าน
      ใบไม้ที่ร่วงลงกลับกลายเป็นผืนดิน
      ให้ต้นอ่อนเติบโต

      ต้นไม้จึงเข้าใจว่า
      การเปลี่ยนแปลงไม่ได้พรากทุกอย่างไปเสมอ
      บางครั้งมันกำลังเตรียมพื้นที่ให้สิ่งใหม่เกิดขึ้น
    `,

    meaning: `
      คุณอาจกำลังอยู่ในช่วงเปลี่ยนแปลง
      และกำลังเรียนรู้ว่าการปล่อยบางสิ่งไป
      ไม่ได้แปลว่าคุณล้มเหลว

      คุณไม่จำเป็นต้องเติบโตในจังหวะเดียวกับใคร
      ฤดูของคุณมีเวลาเป็นของตัวเอง
    `
  },


  scarecrow: {
    name: "หุ่นไล่กาผู้เฝ้ามอง",

    english: "The Silent Protector",

    season: "🪹 ทุ่งแห่งความรัก",

    tagline: "คนที่คอยดูแลคนอื่นอย่างเงียบ ๆ",

    symbol: "🪹",

    color: "#b8b29f",

    story: `
      หุ่นไล่กาสองตัวเคยยืนอยู่กลางทุ่ง
      เพื่อปกป้องต้นอ่อนเล็ก ๆ จากลมและฝน

      พวกเขาไม่ได้พูดอะไร
      ไม่เคยขอให้ใครขอบคุณ
      และไม่เคยรู้ว่าต้นอ่อนจะเติบโตไปได้ไกลแค่ไหน

      แต่ทุกวันที่ต้นอ่อนยังยืนอยู่
      พวกเขาก็ยังอยู่ตรงนั้น

      บางครั้งความรักอาจไม่ได้มาในรูปของคำพูด
      แต่อยู่ในสิ่งเล็ก ๆ ที่ใครบางคนทำให้เราอย่างเงียบ ๆ
    `,

    meaning: `
      คุณอาจเป็นคนที่คอยดูแลคนอื่นโดยไม่ค่อยพูด
      หรือเป็นคนที่มีใครบางคนคอยปกป้องอยู่เสมอ

      อย่าลืมว่า คนที่คอยดูแลคนอื่น
      ก็สมควรได้รับการดูแลเช่นกัน
    `
  },


  spring: {
    name: "ใบไม้ผลิ",

    english: "The First Bloom",

    season: "🌸 ฤดูใบไม้ผลิ",

    tagline: "การเริ่มต้นและการเติบโต",

    symbol: "🌸",

    color: "#d8b7b8",

    story: `
      เมล็ดเล็ก ๆ เคยคิดว่าตัวเองคงไม่มีวันเติบโตได้

      รอบตัวมีแต่ต้นไม้ใหญ่
      ที่ดูแข็งแรงและสวยงามกว่า

      แต่เมื่อฤดูใบไม้ผลิมาถึง
      เมล็ดนั้นก็ค่อย ๆ แตกหน่อขึ้นมา

      เขาไม่ได้เติบโตเพราะต้องเป็นเหมือนต้นไม้ต้นอื่น
      แต่เพราะเขามีจังหวะของตัวเอง
    `,

    meaning: `
      คุณอาจกำลังเริ่มต้นบางสิ่ง
      หรือกำลังค้นพบว่าตัวเองมีความสามารถมากกว่าที่เคยคิด

      ไม่ต้องรีบเป็นดอกไม้ที่บานเต็มที่
      การเริ่มต้นเล็ก ๆ ก็มีความหมายแล้ว
    `
  },


  summer: {
    name: "ฤดูร้อน",

    english: "The Warm House",

    season: "☀️ ฤดูร้อน",

    tagline: "ความทรงจำและความอบอุ่น",

    symbol: "☀️",

    color: "#dfc59c",

    story: `
      บ้านหลังหนึ่งเคยเต็มไปด้วยเสียงหัวเราะ
      กลิ่นอาหาร และเสียงเปียโน

      เมื่อเวลาผ่านไป บ้านกลับเงียบลง
      เหลือเพียงแสงแดดที่ส่องผ่านหน้าต่าง

      แต่ทุกครั้งที่ใครสักคนคิดถึงบ้านหลังนั้น
      ความอบอุ่นก็ยังกลับมา

      เพราะบ้านอาจไม่ใช่แค่สถานที่
      แต่เป็นความรู้สึกที่เราพกติดตัวไปได้
      แม้จะอยู่ไกลแค่ไหน
    `,

    meaning: `
      คุณอาจเป็นคนที่ให้คุณค่ากับความทรงจำ
      และความสัมพันธ์ที่ทำให้รู้สึกปลอดภัย

      บางสิ่งอาจไม่ได้อยู่ตรงหน้าแล้ว
      แต่ความอบอุ่นที่เคยมอบให้คุณยังคงอยู่
    `
  },


  autumn: {
    name: "ใบไม้ร่วง",

    english: "The Falling Leaf",

    season: "🍂 ใบไม้ร่วง",

    tagline: "การยอมรับและการเปลี่ยนแปลง",

    symbol: "🍂",

    color: "#c5a98c",

    story: `
      ใบไม้ใบหนึ่งเคยกลัวการร่วงหล่นจากต้น

      เขาคิดว่าถ้าต้องจากกิ่งไม้ไป
      เขาคงไม่มีที่อยู่

      แต่เมื่อสายลมพัดมา
      เขากลับได้เห็นโลกในมุมที่ไม่เคยเห็นมาก่อน

      ใบไม้จึงเข้าใจว่า
      การจากลาอาจเป็นจุดเริ่มต้น
      ของการเดินทางที่เราไม่เคยรู้จัก
    `,

    meaning: `
      คุณอาจกำลังเรียนรู้ที่จะยอมรับความเปลี่ยนแปลง
      แม้บางสิ่งยังมีความหมายกับคุณอยู่

      การปล่อยให้บางอย่างเดินทางต่อ
      ไม่ได้ทำให้สิ่งนั้นหมดคุณค่า
    `
  },


  winter: {
    name: "ฤดูหนาว",

    english: "The Little Winter Light",

    season: "❄️ ฤดูหนาว",

    tagline: "การพักใจและค้นพบแสงของตัวเอง",

    symbol: "❄️",

    color: "#aebdcb",

    story: `
      ในคืนฤดูหนาวที่เงียบสงบ
      มีดาวดวงเล็ก ๆ ดวงหนึ่งส่องแสงอยู่บนท้องฟ้า

      เขาเคยคิดว่าแสงของตัวเองไม่สำคัญ
      เพราะยังมีดาวอีกมากมายที่สว่างกว่า

      แต่เมื่อทุกอย่างเงียบลง
      เขากลับมองเห็นแสงของตัวเองได้ชัดเจนขึ้น

      และนั่นทำให้เขารู้ว่า
      ความสวยงามไม่ได้อยู่ที่การส่องแสงให้ใครเห็น
      แต่อยู่ที่การได้เป็นตัวเองอย่างเต็มที่
    `,

    meaning: `
      คุณอาจเป็นคนที่กำลังพักใจ
      และค้นพบคุณค่าของตัวเอง
      โดยไม่จำเป็นต้องเปรียบเทียบกับใคร

      แม้ในวันที่คุณยังไม่เห็นแสงของตัวเองชัดเจน
      มันก็ไม่ได้หมายความว่าแสงนั้นหายไป
    `
  }

};


/* =========================================================
   2. QUESTIONS
=========================================================

   แต่ละคำตอบจะให้คะแนนกับตัวละคร 2 ตัว
   คะแนนสูงสุดจะกลายเป็นผลลัพธ์ของผู้เล่น
========================================================= */

const questions = [

  {
    season: "🌸 ฤดูใบไม้ผลิ",
    chapter: "บทที่ 01 · การเริ่มต้น",

    text: "หากคุณสามารถหยุดเวลาในชีวิตไว้ได้หนึ่งช่วงเวลา คุณจะหยุดตอนไหน?",

    answers: [

      {
        text: "ช่วงเวลาที่มีความสุขที่สุด อยากเก็บมันไว้นาน ๆ",
        scores: { minute: 3, summer: 2 }
      },

      {
        text: "วันที่ทุกอย่างยังเป็นไปได้ และยังไม่มีอะไรต้องเสีย",
        scores: { spring: 3, tree: 1 }
      },

      {
        text: "วันที่มีใครบางคนอยู่ข้าง ๆ และทำให้รู้สึกปลอดภัย",
        scores: { scarecrow: 3, summer: 2 }
      },

      {
        text: "ช่วงเวลาที่อยากกลับไปพูดบางอย่างที่ไม่ได้พูด",
        scores: { notebook: 3, piano: 1 }
      }

    ]
  },


  {
    season: "🌸 ฤดูใบไม้ผลิ",
    chapter: "บทที่ 02 · การเติบโต",

    text: "เมื่อเห็นคนที่คุณรักกำลังเติบโต คุณรู้สึกอย่างไร?",

    answers: [

      {
        text: "ดีใจที่เขาเติบโต แต่ก็กลัวว่าสักวันเขาจะจากไป",
        scores: { minute: 3, scarecrow: 1 }
      },

      {
        text: "ภูมิใจที่เขาได้เป็นตัวเองในแบบที่เขาต้องการ",
        scores: { spring: 3, tree: 2 }
      },

      {
        text: "คิดถึงวันที่เราเคยอยู่ด้วยกัน",
        scores: { summer: 3, notebook: 1 }
      },

      {
        text: "รู้สึกว่าทุกคนมีจังหวะของตัวเอง",
        scores: { tree: 3, autumn: 1 }
      }

    ]
  },


  {
    season: "☀️ ฤดูร้อน",
    chapter: "บทที่ 03 · บ้าน",

    text: "เมื่อคิดถึงคำว่า 'บ้าน' สิ่งแรกที่ปรากฏในใจคุณคืออะไร?",

    answers: [

      {
        text: "เสียงหัวเราะและช่วงเวลาที่เคยมีความสุข",
        scores: { summer: 3, piano: 2 }
      },

      {
        text: "คนที่คอยอยู่ข้าง ๆ แม้ไม่ต้องพูดอะไร",
        scores: { scarecrow: 3, summer: 1 }
      },

      {
        text: "สถานที่ที่อยากกลับไป แม้รู้ว่าทุกอย่างเปลี่ยนไปแล้ว",
        scores: { notebook: 3, autumn: 2 }
      },

      {
        text: "สถานที่ที่ทำให้ฉันได้พักจากทุกสิ่ง",
        scores: { winter: 3, piano: 1 }
      }

    ]
  },


  {
    season: "☀️ ฤดูร้อน",
    chapter: "บทที่ 04 · เสียงเพลง",

    text: "ถ้าความเศร้าของคุณกลายเป็นเสียงเพลง มันจะเป็นแบบไหน?",

    answers: [

      {
        text: "เพลงเบา ๆ ที่ทำให้คิดถึงใครบางคน",
        scores: { piano: 3, summer: 2 }
      },

      {
        text: "เพลงที่ไม่มีใครได้ยิน แต่ฉันยังเล่นต่อไป",
        scores: { piano: 3, star: 1 }
      },

      {
        text: "เพลงที่เคยฟังในช่วงเวลาที่อยากย้อนกลับไป",
        scores: { notebook: 3, summer: 2 }
      },

      {
        text: "เพลงที่ค่อย ๆ เปลี่ยนจากเศร้าเป็นความหวัง",
        scores: { tree: 3, spring: 2 }
      }

    ]
  },


  {
    season: "🍂 ใบไม้ร่วง",
    chapter: "บทที่ 05 · หมึกปากกา",

    text: "หากชีวิตคุณเป็นสมุดที่เขียนด้วยหมึก คุณอยากทำอะไรกับหน้าที่เจ็บปวดที่สุด?",

    answers: [

      {
        text: "อยากย้อนกลับไปอ่าน เพื่อเข้าใจว่าตัวเองผ่านมาได้อย่างไร",
        scores: { notebook: 3, autumn: 2 }
      },

      {
        text: "อยากปิดหน้านั้นไว้ และเริ่มเขียนหน้าต่อไป",
        scores: { autumn: 3, tree: 2 }
      },

      {
        text: "อยากเก็บมันไว้ เพราะมันเป็นส่วนหนึ่งของฉัน",
        scores: { summer: 2, notebook: 3 }
      },

      {
        text: "อยากให้เวลาพาฉันออกจากความรู้สึกนั้น",
        scores: { minute: 2, winter: 2 }
      }

    ]
  },


  {
    season: "🍂 ใบไม้ร่วง",
    chapter: "บทที่ 06 · การผลัดใบ",

    text: "เมื่อชีวิตบังคับให้คุณต้องปล่อยบางสิ่งไป คุณมักทำอย่างไร?",

    answers: [

      {
        text: "พยายามเก็บมันไว้ให้นานที่สุด",
        scores: { minute: 3, summer: 1 }
      },

      {
        text: "ยอมรับว่ามันถึงเวลาที่ต้องเปลี่ยนแปลง",
        scores: { autumn: 3, tree: 2 }
      },

      {
        text: "ใช้เวลาอยู่กับตัวเองจนกว่าจะพร้อม",
        scores: { winter: 3, notebook: 1 }
      },

      {
        text: "พยายามดูแลคนอื่น แม้ตัวเองจะเสียใจ",
        scores: { scarecrow: 3, piano: 1 }
      }

    ]
  },


  {
    season: "❄️ ฤดูหนาว",
    chapter: "บทที่ 07 · แสงของตัวเอง",

    text: "คุณเคยรู้สึกว่าตัวเองถูกแสงของคนอื่นบดบังไหม?",

    answers: [

      {
        text: "บ่อยครั้ง ฉันรู้สึกว่าคนอื่นทำได้ดีกว่าฉัน",
        scores: { star: 3, winter: 2 }
      },

      {
        text: "บางครั้ง แต่ฉันกำลังเรียนรู้ที่จะเป็นตัวเอง",
        scores: { star: 3, spring: 2 }
      },

      {
        text: "ฉันอยากเป็นคนที่คอยส่องแสงให้คนอื่นมากกว่า",
        scores: { scarecrow: 3, piano: 2 }
      },

      {
        text: "ฉันคิดว่าทุกคนมีแสงของตัวเองในเวลาที่ต่างกัน",
        scores: { tree: 3, winter: 2 }
      }

    ]
  },


  {
    season: "❄️ ฤดูหนาว",
    chapter: "บทที่ 08 · ความเงียบ",

    text: "ในวันที่ไม่มีใครมองเห็นคุณ คุณอยากทำอะไรที่สุด?",

    answers: [

      {
        text: "อยู่เงียบ ๆ กับตัวเอง และพักจากทุกอย่าง",
        scores: { winter: 3, star: 2 }
      },

      {
        text: "ทำสิ่งเล็ก ๆ ที่ทำให้ตัวเองมีความสุข",
        scores: { spring: 3, piano: 1 }
      },

      {
        text: "คิดถึงคนที่ทำให้ฉันรู้สึกว่าเป็นที่รัก",
        scores: { summer: 3, scarecrow: 2 }
      },

      {
        text: "เขียนสิ่งที่รู้สึกลงในสมุด",
        scores: { notebook: 3, piano: 1 }
      }

    ]
  },


  {
    season: "🌳 โลกของการเติบโต",
    chapter: "บทที่ 09 · จังหวะของชีวิต",

    text: "เมื่อเห็นว่าคนอื่นกำลังไปได้ไกลกว่าคุณ คุณจะคิดอย่างไร?",

    answers: [

      {
        text: "ฉันรู้สึกว่าตัวเองช้าเกินไป",
        scores: { star: 3, minute: 1 }
      },

      {
        text: "ฉันอยากกลับไปเริ่มต้นใหม่",
        scores: { spring: 3, notebook: 1 }
      },

      {
        text: "ฉันกำลังเดินอยู่ในจังหวะของตัวเอง",
        scores: { tree: 3, winter: 2 }
      },

      {
        text: "ฉันอยากให้คนที่รักเติบโตไปได้ดี",
        scores: { scarecrow: 3, summer: 1 }
      }

    ]
  },


  {
    season: "🌸 โลกของเวลา",
    chapter: "บทที่ 10 · วันพรุ่งนี้",

    text: "ถ้าคุณสามารถฝากข้อความหนึ่งข้อความไว้ให้ตัวเองในวันพรุ่งนี้ คุณจะเขียนว่าอะไร?",

    answers: [

      {
        text: "ไม่ต้องกลัว ทุกอย่างจะผ่านไป",
        scores: { minute: 3, winter: 2 }
      },

      {
        text: "ขอบคุณที่ยังอยู่ตรงนี้",
        scores: { piano: 3, scarecrow: 2 }
      },

      {
        text: "สิ่งที่ผ่านไปแล้ว ไม่ได้ทำให้คุณหมดคุณค่า",
        scores: { notebook: 3, autumn: 2 }
      },

      {
        text: "อย่าลืมว่าแสงของคุณมีอยู่เสมอ",
        scores: { star: 3, spring: 2 }
      }

    ]
  }

];


/* =========================================================
   3. GAME STATE
========================================================= */

let currentQuestion = 0;

let scores = {};

let selectedAnswers = [];

let finalCharacter = null;


/* =========================================================
   4. DOM ELEMENTS
========================================================= */

const homeScreen = document.getElementById("homeScreen");

const quizScreen = document.getElementById("quizScreen");

const resultScreen = document.getElementById("resultScreen");

const startButton = document.getElementById("startButton");

const backButton = document.getElementById("backButton");

const restartButton = document.getElementById("restartButton");

const shareButton = document.getElementById("shareButton");

const shareMessage = document.getElementById("shareMessage");

const currentNumber = document.getElementById("currentNumber");

const progressBar = document.getElementById("progressBar");

const questionSeason = document.getElementById("questionSeason");

const questionChapter = document.getElementById("questionChapter");

const questionText = document.getElementById("questionText");

const questionHint = document.querySelector(".question-hint");

const questionArt = document.getElementById("questionArt");

const answersContainer = document.getElementById("answersContainer");

const quizFooterHint = document.getElementById("questionHint");

const resultSeason = document.getElementById("resultSeason");

const resultEnglishName = document.getElementById("resultEnglishName");

const resultName = document.getElementById("resultName");

const resultTagline = document.getElementById("resultTagline");

const resultStory = document.getElementById("resultStory");

const resultMeaning = document.getElementById("resultMeaning");

const resultIllustration = document.getElementById("resultIllustration");


/* =========================================================
   5. SCREEN CONTROL
========================================================= */

function showScreen(screen) {

  document.querySelectorAll(".screen").forEach((item) => {
    item.classList.remove("active");
  });

  screen.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   6. START GAME
========================================================= */

function startGame() {

  currentQuestion = 0;

  selectedAnswers = [];

  finalCharacter = null;

  scores = {};

  Object.keys(characters).forEach((key) => {
    scores[key] = 0;
  });

  shareMessage.textContent = "";

  showScreen(quizScreen);

  renderQuestion();

}


/* =========================================================
   7. RENDER QUESTION
========================================================= */

function renderQuestion() {

  const question = questions[currentQuestion];

  const questionIndex = currentQuestion + 1;

  const percentage = (questionIndex / questions.length) * 100;

  currentNumber.textContent =
    String(questionIndex).padStart(2, "0");

  progressBar.style.width = `${percentage}%`;

  questionSeason.textContent = question.season;

  questionChapter.textContent = question.chapter;

  questionText.textContent = question.text;

  quizFooterHint.textContent =
    `คำถามที่ ${questionIndex} จาก ${questions.length}`;

  renderQuestionArt(questionIndex);

  answersContainer.innerHTML = "";

  question.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.className = "answer-button";

    button.type = "button";

    button.innerHTML = `
      <span class="answer-letter">
        ${String.fromCharCode(65 + index)}
      </span>

      <span>${answer.text}</span>
    `;

    button.addEventListener("click", () => {
      chooseAnswer(answer, index);
    });

    answersContainer.appendChild(button);

  });

}


/* =========================================================
   8. QUESTION ART
=========================================================

   ตอนนี้ใช้ภาพจำลองด้วย CSS
   ภายหลังเปลี่ยนเป็นรูปจริงได้ที่นี่
========================================================= */

function renderQuestionArt(questionNumber) {

  const artTypes = [

    {
      background: "linear-gradient(180deg, #dce6e9, #eee9df)",
      symbol: "✦"
    },

    {
      background: "linear-gradient(180deg, #e7dfd1, #f2e9da)",
      symbol: "🌸"
    },

    {
      background: "linear-gradient(180deg, #dce5e7, #e9e4d9)",
      symbol: "☀"
    },

    {
      background: "linear-gradient(180deg, #d5dce2, #e6e8e3)",
      symbol: "♫"
    },

    {
      background: "linear-gradient(180deg, #d8dfe1, #e7e1d8)",
      symbol: "📖"
    },

    {
      background: "linear-gradient(180deg, #d7e0e2, #e7e4d8)",
      symbol: "🍂"
    },

    {
      background: "linear-gradient(180deg, #d6e0e5, #e8e9e5)",
      symbol: "✦"
    },

    {
      background: "linear-gradient(180deg, #dce4e8, #e8e9e5)",
      symbol: "☾"
    },

    {
      background: "linear-gradient(180deg, #dce4e3, #e8e4d9)",
      symbol: "🌱"
    },

    {
      background: "linear-gradient(180deg, #d8e2e6, #e8e6de)",
      symbol: "✧"
    }

  ];

  const art = artTypes[questionNumber - 1];

  questionArt.style.background = art.background;

  questionArt.innerHTML = `
    <div class="art-moon"></div>

    <div class="art-star star-a">
      ${art.symbol}
    </div>

    <div class="art-star star-b">
      ✧
    </div>

    <div class="art-ground"></div>
  `;

}


/* =========================================================
   9. CHOOSE ANSWER
========================================================= */

function chooseAnswer(answer, answerIndex) {

  selectedAnswers[currentQuestion] = answerIndex;

  Object.entries(answer.scores).forEach(([character, points]) => {

    scores[character] += points;

  });

  if (currentQuestion < questions.length - 1) {

    currentQuestion++;

    renderQuestion();

  } else {

    calculateResult();

  }

}


/* =========================================================
   10. CALCULATE RESULT
========================================================= */

function calculateResult() {

  let highestScore = -Infinity;

  let winners = [];

  Object.entries(scores).forEach(([character, score]) => {

    if (score > highestScore) {

      highestScore = score;

      winners = [character];

    } else if (score === highestScore) {

      winners.push(character);

    }

  });


  /*
    ถ้าคะแนนเท่ากัน จะเลือกจากลำดับที่กำหนด
    เพื่อให้ผลลัพธ์ไม่เปลี่ยนแบบสุ่ม
  */

  const priority = [
    "minute",
    "piano",
    "notebook",
    "star",
    "tree",
    "scarecrow",
    "spring",
    "summer",
    "autumn",
    "winter"
  ];

  winners.sort((a, b) => {

    return priority.indexOf(a) - priority.indexOf(b);

  });

  finalCharacter = winners[0];

  renderResult();

}


/* =========================================================
   11. RENDER RESULT
========================================================= */

function renderResult() {

  const character = characters[finalCharacter];

  resultSeason.textContent = character.season;

  resultEnglishName.textContent = character.english;

  resultName.textContent = character.name;

  resultTagline.textContent = character.tagline;

  resultStory.textContent = character.story;

  resultMeaning.textContent = character.meaning;


  renderResultIllustration(character);


  showScreen(resultScreen);

}


/* =========================================================
   12. RESULT ILLUSTRATION
=========================================================

   ภาพจำลองชั่วคราว
   เมื่อวาดการ์ดเสร็จแล้ว เปลี่ยนส่วนนี้ได้เลย
========================================================= */

function renderResultIllustration(character) {

  const imageFiles = {
    minute: "minute.jpg",
    piano: "piano.jpg",
    notebook: "notebook.jpg",
    star: "star.jpg",
    tree: "tree.jpg",
    scarecrow: "scarecrow.jpg",
    spring: "spring.jpg",
    summer: "summer.jpg",
    autumn: "autumn.jpg",
    winter: "winter.jpg"
  };

  const imagePath = `images/${imageFiles[finalCharacter]}`;

  resultIllustration.innerHTML = `
    <img
      src="${imagePath}"
      alt="${character.name}"
      class="result-image"
    >
  `;

}


/* =========================================================
   13. BACK BUTTON
========================================================= */

function goBack() {

  if (currentQuestion === 0) {

    showScreen(homeScreen);

    return;

  }

  currentQuestion--;

  renderQuestion();

}


/* =========================================================
   14. RESTART
========================================================= */

function restartGame() {

  startGame();

}


/* =========================================================
   15. SHARE RESULT
========================================================= */

async function shareResult() {

  if (!finalCharacter) return;

  const character = characters[finalCharacter];

  const text = `
The World of Time & Seasons

ฉันเกิดใหม่เป็น ${character.name}

${character.tagline}

${character.english}

ลองค้นหาตัวละครของคุณในโลกของเวลาและฤดู
  `.trim();


  if (navigator.share) {

    try {

      await navigator.share({
        title: "The World of Time & Seasons",
        text: text
      });

      return;

    } catch (error) {

      if (error.name === "AbortError") {
        return;
      }

    }

  }


  try {

    await navigator.clipboard.writeText(text);

    shareMessage.textContent =
      "คัดลอกผลลัพธ์แล้ว ✦";

  } catch (error) {

    shareMessage.textContent =
      "ไม่สามารถคัดลอกอัตโนมัติได้";

  }

}


/* =========================================================
   16. EVENT LISTENERS
========================================================= */

startButton.addEventListener("click", startGame);

backButton.addEventListener("click", goBack);

restartButton.addEventListener("click", restartGame);

shareButton.addEventListener("click", shareResult);


/* =========================================================
   17. INITIAL STATE
========================================================= */

showScreen(homeScreen);