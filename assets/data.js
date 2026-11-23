// EduBridge authored lesson and guided-mentor content
const LESSONS = [
  {
    "id": "cell",
    "src": "https://en.wikipedia.org/wiki/Cell_(biology)",
    "emoji": "🧬",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الخلية",
    "titleEn": "The Cell",
    "ar": "الخلية هي أصغر وحدة حية في جسم أي كائن. كل شيء حي حولك، من البكتيريا إلى الإنسان، مبني من خلايا. داخل الخلية أجزاء لها وظائف مثل أعضاء الجسم: النواة تحمل التعليمات الوراثية (DNA)، والميتوكوندريا تحول طاقة الغذاء إلى ATP، والغشاء الخلوي يتحكم فيما يدخل ويخرج. جسم الإنسان فيه نحو 37 تريليون خلية، وكل خلية تعرف دورها: خلايا عضلية تتقلص، وعصبية تنقل الإشارات، ودم حمراء تحمل الأكسجين.",
    "en": "The cell is the smallest living unit of any organism. Everything alive, from bacteria to humans, is built from cells. Inside a cell, parts work like organs: the nucleus holds the genetic instructions (DNA), mitochondria convert energy into ATP, and the cell membrane controls what enters and exits. The human body has about 37 trillion cells, each with a job: muscle cells contract, neurons carry signals, red blood cells carry oxygen.",
    "story": "تخيّل الخلية مدينة صغيرة: النواة مكتبة تعليمات، والغشاء بوابة تنظم الدخول والخروج، والريبوسوم ورشة بناء بروتين. هذه تشبيهات للتعلم؛ العضيات ليست أشخاصاً ولا تتخذ قرارات مثل البشر.",
    "storyEn": "Imagine the cell as a tiny city: the nucleus is a library of instructions, the membrane is a gate organizing entry and exit, and the ribosome is a protein-building workshop. These are learning analogies; organelles are not people and do not make decisions like humans.",
    "quiz": [
      {
        "q": "أي جزء داخل الخلية يحمل التعليمات الوراثية؟",
        "o": [
          "الميتوكوندريا",
          "النواة",
          "الغشاء"
        ],
        "a": 1
      },
      {
        "q": "ما وظيفة الميتوكوندريا؟",
        "o": [
          "إنتاج الطاقة",
          "تخزين الماء",
          "نقل الأكسجين"
        ],
        "a": 0
      },
      {
        "q": "تقريباً كم خلية في جسم الإنسان؟",
        "o": [
          "37 مليون",
          "37 مليار",
          "37 تريليون"
        ],
        "a": 2
      }
    ],
    "quizEn": [
      {
            "q": "Which part inside the cell carries the genetic instructions?",
            "o": [
                  "The mitochondria",
                  "The nucleus",
                  "The membrane"
            ],
            "a": 1
      },
      {
            "q": "What do mitochondria do?",
            "o": [
                  "Produce energy",
                  "Store water",
                  "Carry oxygen"
            ],
            "a": 0
      },
      {
            "q": "About how many cells are in the human body?",
            "o": [
                  "37 million",
                  "37 billion",
                  "37 trillion"
            ],
            "a": 2
      }
],
    "video": "تركيب الخلية للاطفال",
    "videoEn": "cell structure and function"
  },
  {
    "id": "dna",
    "src": "https://en.wikipedia.org/wiki/DNA",
    "emoji": "🧬",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الحمض النووي (DNA)",
    "titleEn": "DNA",
    "kw": [
      "الحمض النووي",
      "حمض نووي",
      "دنا",
      "دي ان ايه",
      "dna"
    ],
    "ar": "DNA جزيء يحمل معلومات وراثية في تسلسل قواعده الأربع A وT وC وG، وغالباً ما يكون حلزوناً مزدوجاً. في الخلايا البشرية التي تحتوي نواة يوجد معظمه داخل النواة، ويوجد بعضه في الميتوكوندريا؛ والبكتيريا لا تملك نواة. الجينات أجزاء من DNA تحمل تعليمات لإنتاج بروتينات أو جزيئات RNA وظيفية. يرث الإنسان معظم DNA النووي من الوالدين، ويؤثر في الصفات مع البيئة وعوامل أخرى.",
    "en": "DNA carries genetic information in the sequence of four bases, A, T, C and G, usually in a double helix. In human cells with nuclei, most DNA is in the nucleus and some is in mitochondria; bacteria have no nucleus. Genes are DNA regions with instructions for proteins or functional RNA. People inherit most nuclear DNA from their parents, and it influences traits together with environment and other factors.",
    "story": "تخيّل شريطاً طويلاً تتغير رسالته بتغير ترتيب أربعة حروف. ترتيب الحروف، لا عددها وحده، يحمل المعلومة. يوضح التشبيه كيف يمكن لمجموعة صغيرة من القواعد بناء تنوع كبير في المعلومات الوراثية.",
    "storyEn": "Imagine a long tape whose message changes as the order of four letters changes. The order of the letters, not their count alone, carries the information. The analogy shows how a small set of rules can build huge variety in genetic information.",
    "quiz": [
      {
        "q": "ما شكل جزيء الـ DNA؟",
        "o": [
          "كرة",
          "لولب مزدوج",
          "مكعب"
        ],
        "a": 1
      },
      {
        "q": "كم عدد الحروف الكيميائية في الـ DNA؟",
        "o": [
          "4",
          "20",
          "100"
        ],
        "a": 0
      },
      {
        "q": "من أين يرث الإنسان الـ DNA؟",
        "o": [
          "من الأم فقط",
          "من الأب فقط",
          "نصفه من كل والد"
        ],
        "a": 2
      }
    ],
    "quizEn": [
      {
            "q": "What is the shape of a DNA molecule?",
            "o": [
                  "A ball",
                  "A double helix",
                  "A cube"
            ],
            "a": 1
      },
      {
            "q": "How many chemical letters are in DNA?",
            "o": [
                  "4",
                  "20",
                  "100"
            ],
            "a": 0
      },
      {
            "q": "Where does a person inherit DNA from?",
            "o": [
                  "The mother only",
                  "The father only",
                  "Half from each parent"
            ],
            "a": 2
      }
],
    "video": "ما هو ال DNA",
    "videoEn": "DNA structure explained"
  },
  {
    "id": "atom",
    "src": "https://en.wikipedia.org/wiki/Atom",
    "emoji": "⚛️",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "الذرة",
    "titleEn": "The Atom",
    "ar": "الذرة أصغر وحدة من عنصر تحتفظ بهويته الكيميائية. عدد البروتونات في نواتها يحدد نوع العنصر. تحتوي النواة عادة نيوترونات أيضاً، بينما توصف الإلكترونات بتوزيعات ومستويات طاقة حولها، وليس بكرات تسير على سكك ثابتة. تتكون مواد من جزيئات، وأخرى من شبكات ممتدة من ذرات أو أيونات. النموذج الذي يعرض مدارات دائرية وسيلة تعليمية مبسطة.",
    "en": "An atom is the smallest unit of an element that retains its chemical identity. Its proton count determines the element. The nucleus usually also contains neutrons, while electrons are described by distributions and energy levels rather than balls on fixed tracks. Some materials consist of molecules; others form extended atomic or ionic structures. The circular-orbit model is a simplified teaching diagram.",
    "story": "تخيّل أنك تصنف ذرات بعدد بروتوناتها. إذا تغير عدد النيوترونات فقط فلدينا نظير للعنصر نفسه، وإذا تغير عدد البروتونات صار عنصراً آخر. النموذج هنا يساعد على المقارنة ولا يرسم مسارات الإلكترونات الحقيقية.",
    "storyEn": "Imagine sorting atoms by their number of protons. If only the number of neutrons changes, we have an isotope of the same element; if the number of protons changes, it becomes another element. The model here helps us compare; it does not draw the electrons' real paths.",
    "quiz": [
      {
        "q": "ماذا يوجد في نواة الذرة؟",
        "o": [
          "بروتونات ونيوترونات",
          "إلكترونات فقط",
          "ماء"
        ],
        "a": 0
      },
      {
        "q": "شحنة الإلكترون؟",
        "o": [
          "موجبة",
          "سالبة",
          "متعادلة"
        ],
        "a": 1
      },
      {
        "q": "ما الذي يحدد نوع العنصر؟",
        "o": [
          "عدد الإلكترونات",
          "عدد البروتونات",
          "الحجم"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "What is inside the atom's nucleus?",
            "o": [
                  "Protons and neutrons",
                  "Only electrons",
                  "Water"
            ],
            "a": 0
      },
      {
            "q": "The electron's charge is?",
            "o": [
                  "Positive",
                  "Negative",
                  "Neutral"
            ],
            "a": 1
      },
      {
            "q": "What determines the type of element?",
            "o": [
                  "The number of electrons",
                  "The number of protons",
                  "The size"
            ],
            "a": 1
      }
],
    "video": "تركيب الذرة",
    "videoEn": "atomic structure basics"
  },
  {
    "id": "heart",
    "src": "https://en.wikipedia.org/wiki/Heart",
    "emoji": "❤️",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "القلب",
    "titleEn": "The Heart",
    "ar": "القلب عضلة بحجم قبضة اليد تعمل كمضخة لا تتوقف: تنبض نحو 100 ألف مرة يومياً لتدفع الدم عبر 100 ألف كيلومتر من الأوعية. له أربع حجرات: أذينان يستقبلان الدم وبطينان يضخانه. الدم يخرج من القلب محمّلاً بالأكسجين إلى الجسم، ويعود محمّلاً بثاني أكسيد الكربون فيمر بالرئتين ليتجدد. نبضك الذي تشعر به في معصمك هو موجة الضخ نفسها.",
    "en": "The heart is a fist-sized muscle that works as a nonstop pump: about 100,000 beats a day, pushing blood through 100,000 km of vessels. It has four chambers: two atria receive blood and two ventricles pump it out. Blood leaves the heart full of oxygen for the body and returns carrying carbon dioxide to be refreshed in the lungs. The pulse at your wrist is that same pumping wave.",
    "story": "قبل الولادة بفترة يبدأ القلب النامي في الانقباض. تخيّل كيف يختلف طلب العضلات للدم أثناء المشي والراحة، وكيف تتغير سرعة القلب لتساعد على تلبية هذا الطلب. القلب مضخة حية تتأثر بحالة الجسم ولا تعمل بإيقاع واحد دائماً.",
    "storyEn": "Some time before birth, the developing heart starts to beat. Imagine how the muscles' demand for blood differs between walking and resting, and how the heart rate changes to help meet that demand. The heart is a living pump affected by the body's state; it does not keep one rhythm forever.",
    "quiz": [
      {
        "q": "كم عدد حجرات القلب؟",
        "o": [
          "2",
          "4",
          "6"
        ],
        "a": 1
      },
      {
        "q": "ماذا يحمل الدم الخارج من القلب إلى الجسم؟",
        "o": [
          "الأكسجين",
          "ثاني أكسيد الكربون",
          "الماء فقط"
        ],
        "a": 0
      },
      {
        "q": "ما وظيفة البطينين؟",
        "o": [
          "استقبال الدم",
          "ضخ الدم",
          "تنقية الدم"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "How many chambers does the heart have?",
            "o": [
                  "2",
                  "4",
                  "6"
            ],
            "a": 1
      },
      {
            "q": "What does the blood leaving the heart for the body carry?",
            "o": [
                  "Oxygen",
                  "Carbon dioxide",
                  "Only water"
            ],
            "a": 0
      },
      {
            "q": "What do the ventricles do?",
            "o": [
                  "Receive blood",
                  "Pump blood",
                  "Purify blood"
            ],
            "a": 1
      }
],
    "video": "كيف يعمل القلب",
    "videoEn": "how the heart works"
  },
  {
    "id": "solar",
    "src": "https://en.wikipedia.org/wiki/Solar_System",
    "emoji": "🪐",
    "cat": "فلك",
    "catEn": "Astronomy",
    "title": "المجموعة الشمسية",
    "titleEn": "The Solar System",
    "ar": "مجموعتنا الشمسية هي الشمس وكل ما يدور حولها بفعل جاذبيتها: 8 كواكب وأقمارها وكويكبات ومذنّبات. الترتيب من الأقرب للشمس: عطارد، الزهرة، الأرض، المريخ (كواكب صخرية)، ثم المشتري وزحل وأورانوس ونبتون (عمالقة غازية وجليدية). الشمس تحوي 99.8% من كتلة المجموعة كلها، وضوءها يصلنا في 8 دقائق. الأرض هي الكوكب الوحيد المعروف حتى الآن الذي توجد عليه حياة.",
    "en": "Our solar system is the Sun plus everything its gravity holds: 8 planets with their moons, asteroids and comets. From nearest to the Sun: Mercury, Venus, Earth, Mars (rocky planets), then Jupiter, Saturn, Uranus, Neptune (gas and ice giants). The Sun holds 99.8% of the whole system mass, and its light reaches us in 8 minutes. Earth is the only planet known so far to host life.",
    "story": "تخيّل أنك تحاول رسم الشمس والكواكب والمسافات بينها كلها بمقياس واحد على ورقة. ستجد أن إظهار الكواكب بوضوح يجعل المسافات غير عملية، والعكس. لذلك تستخدم الرسوم التعليمية عادة مقاييس مختلفة للحجم والمسافة، كما يفعل نموذجنا المبسط.",
    "storyEn": "Imagine trying to draw the Sun, the planets and the distances between them all to one scale on paper. You will find that showing the planets clearly makes the distances impractical, and the other way around. That is why educational drawings usually use different scales for size and distance, as our simplified model does.",
    "quiz": [
      {
        "q": "كم عدد كواكب المجموعة الشمسية؟",
        "o": [
          "7",
          "8",
          "9"
        ],
        "a": 1
      },
      {
        "q": "ما أكبر كواكب المجموعة؟",
        "o": [
          "الأرض",
          "زحل",
          "المشتري"
        ],
        "a": 2
      },
      {
        "q": "كم يستغرق ضوء الشمس للوصول إلى الأرض؟",
        "o": [
          "8 ثوانٍ",
          "8 دقائق",
          "8 ساعات"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "How many planets does the solar system have?",
            "o": [
                  "7",
                  "8",
                  "9"
            ],
            "a": 1
      },
      {
            "q": "What is the biggest planet?",
            "o": [
                  "Earth",
                  "Saturn",
                  "Jupiter"
            ],
            "a": 2
      },
      {
            "q": "How long does sunlight take to reach Earth?",
            "o": [
                  "8 seconds",
                  "8 minutes",
                  "8 hours"
            ],
            "a": 1
      }
],
    "video": "المجموعة الشمسية للاطفال",
    "videoEn": "solar system tour"
  },
  {
    "id": "water",
    "src": "https://en.wikipedia.org/wiki/Properties_of_water",
    "emoji": "💧",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "جزيء الماء",
    "titleEn": "The Water Molecule",
    "ar": "جزيء الماء بسيط التركيب: ذرة أكسجين وذرتا هيدروجين (H2O)، لكن بساطته خادعة. شكله المنحني يجعل له قطباً موجباً وقطباً سالباً، فيتصرف كمغناطيس صغير يذوّب أشياء كثيرة، ولهذا سُمّي \"المذيب العام\". هذه القطبية تمنح الماء خواص غريبة تجعل الحياة ممكنة: يتمدد عند التجمد فيطفو الجليد ويحمي كائنات البحار، ويتماسك فيصعد في سيقان النباتات، ويمتص الحرارة فينظّم مناخ الأرض ودرجة حرارة أجسامنا.",
    "en": "The water molecule looks simple - one oxygen and two hydrogens (H2O) - but its simplicity is deceptive. Its bent shape gives it a positive and a negative pole, so it acts like a tiny magnet that dissolves many things, earning it the name \"universal solvent\". This polarity gives water the strange properties that make life possible: it expands when it freezes so ice floats and protects sea life, it sticks together and climbs plant stems, and it absorbs heat, regulating Earth climate and our body temperature.",
    "story": "تخيّل ماء يتبخر من سطح البحر ثم يتكاثف في سحابة ويسقط مطراً. هذه رحلة ممكنة ضمن دورة الماء، لا سيرة مؤكدة لكل قطرة. ويمكن أن تتكون جزيئات ماء أو تتفكك في تفاعلات؛ دورة الماء لا تعني أن كل جزيء باقٍ للأبد.",
    "storyEn": "Imagine water evaporating from the sea's surface, condensing in a cloud and falling as rain. This is a possible journey within the water cycle, not a confirmed biography of every drop. And water molecules can form or break apart in reactions; the water cycle does not mean every molecule lasts forever.",
    "quiz": [
      {
        "q": "ما الصيغة الكيميائية للماء؟",
        "o": [
          "CO2",
          "H2O",
          "O2"
        ],
        "a": 1
      },
      {
        "q": "لماذا يطفو الجليد؟",
        "o": [
          "الماء يتمدد عند التجمد",
          "الجليد أثقل",
          "بسبب الملح"
        ],
        "a": 0
      },
      {
        "q": "لماذا يسمى الماء \"المذيب العام\"؟",
        "o": [
          "لونه شفاف",
          "يذيب مواد كثيرة بفضل قطبيته",
          "لأنه سائل"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "What is water's chemical formula?",
            "o": [
                  "CO2",
                  "H2O",
                  "O2"
            ],
            "a": 1
      },
      {
            "q": "Why does ice float?",
            "o": [
                  "Water expands when it freezes",
                  "Ice is heavier",
                  "Because of salt"
            ],
            "a": 0
      },
      {
            "q": "Why is water called the 'universal solvent'?",
            "o": [
                  "It is transparent",
                  "It dissolves many substances thanks to its polarity",
                  "Because it is a liquid"
            ],
            "a": 1
      }
],
    "video": "خصائص الماء الغريبة",
    "videoEn": "properties of water"
  },
  {
    "id": "recursion",
    "src": "https://en.wikipedia.org/wiki/Recursion_(computer_science)",
    "emoji": "💻",
    "cat": "برمجة",
    "catEn": "Programming",
    "title": "الاستدعاء الذاتي (Recursion)",
    "titleEn": "Recursion",
    "ar": "الاستدعاء الذاتي هو أن تحل الدالة مشكلة كبيرة بأن تستدعي نفسها على نسخة أصغر منها، مرة بعد مرة، حتى تصل إلى حالة بسيطة جداً تعرف إجابتها مباشرة (الحالة القاعدية) فتتوقف. مثال كلاسيكي: مضروب العدد n! = n × (n-1)!، فتحسب مضروب 5 بضربه في مضروب 4، وهكذا حتى مضروب 1 الذي يساوي 1. القاعدة الذهبية: كل استدعاء ذاتي يحتاج حالة قاعدية تنهيه، وإلا دار للأبد مثل مرآتين متقابلتين.",
    "en": "Recursion is when a function solves a big problem by calling itself on a smaller version of it, again and again, until it reaches a case so simple it knows the answer directly (the base case) and stops. Classic example: factorial n! = n × (n-1)!, so 5! is 5 times 4!, down to 1! which is 1. The golden rule: every recursion needs a base case to end it, or it loops forever like two mirrors facing each other.",
    "story": "تخيّل فتح صندوق بداخله صندوق أصغر، ثم أصغر، حتى تصل إلى صندوق مكتوب عليه: توقف. الصناديق تشبيه للاستدعاءات المتكررة، والصندوق الأخير يشبه الحالة القاعدية التي تعطي جواباً دون استدعاء جديد.",
    "storyEn": "Imagine opening a box with a smaller box inside, then a smaller one, until you reach a box labeled: stop. The boxes are like repeated function calls, and the last box is like the base case that gives an answer without a new call.",
    "quiz": [
      {
        "q": "ما الحالة القاعدية؟",
        "o": [
          "أول سطر في الكود",
          "الشرط الذي يوقف الاستدعاء",
          "اسم الدالة"
        ],
        "a": 1
      },
      {
        "q": "ماذا يحدث بلا حالة قاعدية؟",
        "o": [
          "يعمل أسرع",
          "لا شيء",
          "تكرار لا نهائي"
        ],
        "a": 2
      },
      {
        "q": "5! يساوي؟",
        "o": [
          "25",
          "120",
          "60"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "What is the base case?",
            "o": [
                  "The first line of code",
                  "The condition that stops the recursion",
                  "The function's name"
            ],
            "a": 1
      },
      {
            "q": "What happens with no base case?",
            "o": [
                  "It runs faster",
                  "Nothing",
                  "Infinite repetition"
            ],
            "a": 2
      },
      {
            "q": "5! equals?",
            "o": [
                  "25",
                  "120",
                  "60"
            ],
            "a": 1
      }
],
    "video": "شرح Recursion بالعربي",
    "videoEn": "recursion explained simply"
  },
  {
    "id": "gravity",
    "src": "https://en.wikipedia.org/wiki/Gravity",
    "emoji": "🍎",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الجاذبية",
    "titleEn": "Gravity",
    "ar": "الجاذبية هي قوة جذب بين أي جسمين لهما كتلة. أنت تجذب كتابك وكتابك يجذبك، لكن كتلتكما صغيرة فلا تشعران بذلك. الأرض كتلتها هائلة فتجذب كل شيء نحو مركزها، ولهذا تسقط الأشياء وتلتزم أقدامنا بالأرض. الجاذبية نفسها تبقي القمر في مداره والأرض حول الشمس. كلما زادت الكتلة زاد الجذب، وكلما زادت المسافة ضعف بسرعة (يتناسب عكسياً مع مربع المسافة)، وهذا قانون نيوتن الذي وحّد سقوط تفاحة ودوران القمر في معادلة واحدة.",
    "en": "Gravity is an attraction between any two masses. You attract your book and it attracts you, but your masses are too small to feel it. Earth mass is enormous, so it pulls everything toward its center, which is why things fall and our feet stay on the ground. The same gravity keeps the Moon in orbit and Earth around the Sun. More mass means more pull; more distance weakens it fast (inverse square law) - Newton insight that united a falling apple and the orbiting Moon in one equation.",
    "story": "تخيّل كرة تتحرك جانبياً بينما تؤثر فيها جاذبية نحو مركز الأرض. تتغير جهة سرعتها، وإذا ناسبت الظروف يمكن أن تدخل مداراً بدلاً من السقوط مباشرة إلى السطح. هذا تصوير مبسط للفكرة، وليس وصفة لإطلاق جسم منزلي إلى الفضاء.",
    "storyEn": "Imagine a ball moving sideways while gravity pulls it toward Earth's center. The direction of its velocity changes, and if conditions are right it can enter orbit instead of falling straight to the surface. This is a simplified picture of the idea, not a recipe for launching a household object into space.",
    "quiz": [
      {
        "q": "من وضع قانون الجاذبية العام؟",
        "o": [
          "أينشتاين",
          "نيوتن",
          "جاليليو"
        ],
        "a": 1
      },
      {
        "q": "ماذا يحدث للجاذبية كلما زادت المسافة؟",
        "o": [
          "تزداد",
          "تضعف",
          "لا تتغير"
        ],
        "a": 1
      },
      {
        "q": "لماذا يبقى القمر في مداره؟",
        "o": [
          "لا جاذبية في الفضاء",
          "توازن سقوطه وسرعته الجانبية",
          "مغناطيسية"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "Who formulated the general law of gravitation?",
            "o": [
                  "Einstein",
                  "Newton",
                  "Galileo"
            ],
            "a": 1
      },
      {
            "q": "What happens to gravity as distance increases?",
            "o": [
                  "It grows",
                  "It weakens",
                  "It stays the same"
            ],
            "a": 1
      },
      {
            "q": "Why does the Moon stay in orbit?",
            "o": [
                  "There is no gravity in space",
                  "Its falling balances its sideways speed",
                  "Magnetism"
            ],
            "a": 1
      }
],
    "video": "شرح الجاذبية",
    "videoEn": "gravity explained"
  },
  {
    "id": "neural",
    "src": "https://en.wikipedia.org/wiki/Artificial_neural_network",
    "emoji": "🧠",
    "cat": "برمجة",
    "catEn": "Programming",
    "title": "الشبكة العصبية",
    "titleEn": "Neural Networks",
    "ar": "الشبكة العصبية الاصطناعية هي نموذج رياضي مستوحى من دماغك: وحدات صغيرة اسمها \"عصبونات\" مرتبة في طبقات، كل عصبون يستقبل أرقاماً، يزنها بأوزان معينة، ويمرر الناتج للطبقة التالية. عند التدريب، نقارن إجابة الشبكة بالإجابة الصحيحة ونعدّل الأوزان قليلاً كل مرة؛ وبعد آلاف الأمثلة \"تتعلم\" الشبكة الأنماط وحدها: تميّز القطط من الكلاب أو تتوقع الكلمة التالية. كل ما يميزها عن برنامج عادي أن قواعدها ليست مكتوبة بيد مبرمج، بل مستخلصة من البيانات.",
    "en": "An artificial neural network is a math model inspired by your brain: small units called neurons arranged in layers. Each neuron takes in numbers, weighs them, and passes the result on. During training we compare the network answer with the correct one and nudge the weights a little each time; after thousands of examples the network \"learns\" patterns on its own: telling cats from dogs or predicting the next word. Unlike a normal program, its rules are not hand-written by a programmer but extracted from data.",
    "story": "تخيّل نموذجاً يحاول تصنيف صور ثم نقارن إجاباته بأمثلة معروفة. قد نعدل أوزانه لتقليل الخطأ خلال التدريب. نجاحه في أمثلة التدريب لا يضمن نجاحه دائماً في صور جديدة، وهو نموذج حسابي لا نسخة حرفية من دماغ الإنسان.",
    "storyEn": "Imagine a model trying to classify pictures while we compare its answers to known examples. We can adjust its weights to reduce error during training. Success on training examples does not always guarantee success on new pictures, and it is a computing model, not a literal copy of a human brain.",
    "quiz": [
      {
        "q": "على أي أساس صُممت الشبكات العصبية؟",
        "o": [
          "الدوائر الكهربية",
          "الدماغ البشري",
          "الجدول الدوري"
        ],
        "a": 1
      },
      {
        "q": "ماذا يحدث أثناء التدريب؟",
        "o": [
          "تعديل الأوزان حسب الخطأ",
          "حذف البيانات",
          "كتابة قواعد جديدة يدوياً"
        ],
        "a": 0
      },
      {
        "q": "ما الذي \"تتعلمه\" الشبكة؟",
        "o": [
          "الأنماط في البيانات",
          "أسماء المبرمجين",
          "لغات البرمجة"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Neural networks were designed based on?",
            "o": [
                  "Electric circuits",
                  "The human brain",
                  "The periodic table"
            ],
            "a": 1
      },
      {
            "q": "What happens during training?",
            "o": [
                  "Weights are adjusted by the error",
                  "Data is deleted",
                  "New rules are written by hand"
            ],
            "a": 0
      },
      {
            "q": "What does the network 'learn'?",
            "o": [
                  "Patterns in the data",
                  "Programmers' names",
                  "Programming languages"
            ],
            "a": 0
      }
],
    "video": "شرح الشبكات العصبية بالعربي",
    "videoEn": "neural networks explained"
  },
  {
    "id": "bacteria",
    "src": "https://en.wikipedia.org/wiki/Bacteria",
    "emoji": "🦠",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "البكتيريا",
    "titleEn": "Bacteria",
    "ar": "البكتيريا كائنات وحيدة الخلية لا تحيط بمادتها الوراثية نواة غشائية. تعيش في بيئات كثيرة، ومنها التربة والماء وأجسام الكائنات. بعض أنواعها يسبب أمراضاً، بينما أنواع كثيرة غير ضارة أو مفيدة، مثل أنواع تسهم في تحلل المواد أو تخمر الغذاء. ليست كل البكتيريا الموجودة في الجسم نافعة في كل ظرف، ولا تستخدم المضادات الحيوية دون توجيه طبي.",
    "en": "Bacteria are single-celled organisms whose genetic material is not enclosed in a membrane-bound nucleus. They live in many environments including soil, water and other organisms. Some cause disease, while many are harmless or helpful, contributing to decomposition or food fermentation. Not every bacterium in the body is beneficial in every situation, and antibiotics require appropriate medical guidance.",
    "story": "تخيّل عينة من تربة أو غذاء تحت مجهر مناسب. قد تضم أنواعاً كثيرة من الميكروبات مختلفة الأدوار. لا نستطيع من شكلها وحده أن نحكم أن كل ما نراه ضار أو نافع، ولا نجرب زراعة ميكروبات مجهولة في المنزل.",
    "storyEn": "Imagine a sample of soil or food under a suitable microscope. It may hold many kinds of microbes with different roles. From their shape alone we cannot judge whether everything we see is harmful or helpful, and we never try growing unknown microbes at home.",
    "quiz": [
      {
        "q": "هل كل البكتيريا ضارة؟",
        "o": [
          "نعم",
          "لا، أقل من 1% ممرضة",
          "نصفها فقط"
        ],
        "a": 1
      },
      {
        "q": "هل تحيط بالمادة الوراثية للبكتيريا نواة غشائية؟",
        "o": [
          "لا",
          "نعم دائماً",
          "لا توجد مادة وراثية"
        ],
        "a": 0
      },
      {
        "q": "أين تعيش بكتيريا مفيدة في جسمك؟",
        "o": [
          "في الأمعاء",
          "في العظام",
          "لا توجد"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Are all bacteria harmful?",
            "o": [
                  "Yes",
                  "No, less than 1% are disease-causing",
                  "Only half of them"
            ],
            "a": 1
      },
      {
            "q": "Is bacterial genetic material surrounded by a membrane-bound nucleus?",
            "o": [
                  "No",
                  "Yes, always",
                  "There is no genetic material"
            ],
            "a": 0
      },
      {
            "q": "Where do helpful bacteria live in your body?",
            "o": [
                  "In the gut",
                  "In the bones",
                  "Nowhere"
            ],
            "a": 0
      }
],
    "video": "البكتيريا النافعة والضارة",
    "videoEn": "bacteria explained"
  },
  {
    "id": "waves",
    "src": "https://en.wikipedia.org/wiki/Wave",
    "emoji": "🌊",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الأمواج",
    "titleEn": "Waves",
    "ar": "الموجة تغير ينتشر في مكان وزمان ويمكنه نقل الطاقة. الموجات الميكانيكية مثل الصوت تحتاج وسطاً، بينما الموجات الكهرومغناطيسية مثل الضوء تستطيع الانتقال في الفراغ. في نموذج الموجة على حبل تتحرك أجزاء الحبل قرب مواضعها بينما ينتقل الاضطراب على طوله. التردد عدد الدورات في الثانية، والطول الموجي مسافة تكرار النمط. ليست كل الموجات موجات عرضية لها قمم وقيعان مرئية.",
    "en": "A wave is a disturbance spreading through space and time that can transfer energy. Mechanical waves such as sound need a medium; electromagnetic waves such as light can travel through vacuum. In a string-wave model, string segments move near their positions while the disturbance travels along the string. Frequency is cycles per second, and wavelength is the spatial repeat distance. Not all waves are transverse waves with visible crests and troughs.",
    "story": "تخيّل وتراً يهتز في آلة موسيقية. يجعل الاهتزاز الهواء القريب يتضاغط ويتمدد، وتنتقل الموجة إلى الأذن. جزيئات الهواء لا تسافر كلها من الوتر إلى أذنك؛ ينتقل الاضطراب خلال الوسط.",
    "storyEn": "Imagine a string vibrating in a musical instrument. The vibration makes the nearby air compress and stretch, and the wave travels to the ear. The air molecules do not all travel from the string to your ear; the disturbance travels through the medium.",
    "quiz": [
      {
        "q": "ما الذي ينتقل مع الموجة؟",
        "o": [
          "الطاقة",
          "المادة نفسها",
          "لا شيء"
        ],
        "a": 0
      },
      {
        "q": "لماذا لا يُسمع صوت في الفضاء؟",
        "o": [
          "الصوت بطيء",
          "لا وسط ينقله",
          "الأذن لا تعمل هناك"
        ],
        "a": 1
      },
      {
        "q": "التردد هو؟",
        "o": [
          "ارتفاع القمة",
          "عدد الموجات في الثانية",
          "سرعة الضوء"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "What travels with a wave?",
            "o": [
                  "Energy",
                  "The matter itself",
                  "Nothing"
            ],
            "a": 0
      },
      {
            "q": "Why is no sound heard in space?",
            "o": [
                  "Sound is slow",
                  "There is no medium to carry it",
                  "The ear does not work there"
            ],
            "a": 1
      },
      {
            "q": "Frequency is?",
            "o": [
                  "The height of the crest",
                  "The number of waves per second",
                  "The speed of light"
            ],
            "a": 1
      }
],
    "video": "شرح الأمواج والصوت",
    "videoEn": "waves basics physics"
  },
  {
    "id": "triangles",
    "src": "https://en.wikipedia.org/wiki/Triangle",
    "emoji": "📐",
    "cat": "رياضيات",
    "catEn": "Mathematics",
    "title": "المثلثات",
    "titleEn": "Triangles",
    "ar": "المثلث أبسط مضلع: ثلاثة أضلاع وثلاث زوايا مجموعها في الهندسة المستوية الإقليدية 180 درجة. بساطته هي قوته: لأنه الشكل الوحيد الذي لا يتشوه دون تغيير أطوال أضلاعه، تُبنى به الجسور والأبراج وأذرع الرافعات. أشهر قوانينه فيثاغورس: في المثلث القائم، مربع الوتر يساوي مجموع مربعي الضلعين الآخرين. ومن المثلثات وُلد علم كامل هو حساب المثلثات الذي يقيس المسافات المستحيلة: ارتفاع هرم دون تسلقه، وبُعد نجم دون السفر إليه.",
    "en": "The triangle is the simplest polygon: three sides and three angles that sum to 180 degrees in Euclidean plane geometry. Its simplicity is its strength: it is the only shape that cannot deform without changing a side length, which is why bridges, towers and crane arms are built from it. Its most famous law is Pythagoras: in a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides. From triangles a whole field, trigonometry, was born, measuring impossible distances: a pyramid height without climbing it, a star distance without traveling to it.",
    "story": "تخيّل إطاراً من أربعة أضلاع متصلة بمفاصل، ثم أضف دعامة قطرية تقسمه إلى مثلثين. يصعب تشويهه دون تغيير أطوال الأضلاع أو الدعامة. هكذا تساعد المثلثات على تقوية هياكل كثيرة، مع بقاء خواص المواد والوصلات مهمة.",
    "storyEn": "Imagine a frame of four sides joined by hinges, then add a diagonal brace that splits it into two triangles. It becomes hard to distort without changing the lengths of the sides or the brace. This is how triangles strengthen many structures, while the properties of materials and joints still matter.",
    "quiz": [
      {
        "q": "مجموع زوايا المثلث؟",
        "o": [
          "90",
          "180",
          "360"
        ],
        "a": 1
      },
      {
        "q": "نظرية فيثاغورس تخص؟",
        "o": [
          "أي مثلث",
          "المثلث القائم فقط",
          "الدائرة"
        ],
        "a": 1
      },
      {
        "q": "لماذا تُستخدم المثلثات في الجسور؟",
        "o": [
          "شكلها جميل",
          "صلابتها وعدم تشوهها",
          "رخص الحديد"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "The angles of a triangle add up to?",
            "o": [
                  "90",
                  "180",
                  "360"
            ],
            "a": 1
      },
      {
            "q": "The Pythagorean theorem concerns?",
            "o": [
                  "Any triangle",
                  "Only right triangles",
                  "The circle"
            ],
            "a": 1
      },
      {
            "q": "Why are triangles used in bridges?",
            "o": [
                  "They look nice",
                  "Their rigidity and resistance to distortion",
                  "Cheap iron"
            ],
            "a": 1
      }
],
    "video": "نظرية فيثاغورس",
    "videoEn": "why triangles are strong"
  },
  {
    "id": "kidney",
    "src": "https://en.wikipedia.org/wiki/Kidney",
    "emoji": "🫘",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الكلى",
    "titleEn": "The Kidney",
    "ar": "تساعد الكليتان على إزالة الفضلات وضبط الماء والأملاح وتكوين البول. يحتوي كل منهما على وحدات دقيقة تسمى النفرونات، ترشح سائلاً من الدم ثم تستعيد معظم الماء والمواد اللازمة. نحو 180 لتراً يومياً رقم تقريبي للراشح المتكون لدى بالغ سليم، وليس حجم الدم المار بالكليتين ولا كمية البول. يمر البول عبر الحالبين إلى المثانة، وتسهم الكليتان أيضاً في تنظيم الضغط وإنتاج هرمونات.",
    "en": "The kidneys help remove waste, regulate water and salts, and form urine. Their tiny nephrons filter fluid from blood and then reclaim most water and needed substances. About 180 liters a day is an approximate adult filtrate volume, not the amount of blood flowing through the kidneys or the urine output. Urine passes through the ureters to the bladder; the kidneys also help regulate pressure and produce hormones.",
    "story": "تخيّل الراشح يمر في أنبوب دقيق، ثم تعود منه مواد كثيرة إلى الدم بينما يخرج جزء كفضلات. هذا يوضح الفرق بين الترشيح وإعادة الامتصاص، ولماذا لا يساوي حجم الراشح حجم البول الخارج.",
    "storyEn": "Imagine the filtrate passing through a tiny tube, then many substances returning from it to the blood while a portion leaves as waste. This shows the difference between filtration and reabsorption, and why the volume of filtrate does not equal the volume of urine that comes out.",
    "quiz": [
      {
        "q": "ما الوحدة الدقيقة التي ترشّح الدم داخل الكلية؟",
        "o": [
          "النيفرون",
          "النواة",
          "الحويصلة الهوائية"
        ],
        "a": 0
      },
      {
        "q": "ماذا يعني رقم 180 لتراً يومياً تقريباً في عمل الكليتين؟",
        "o": [
          "حجم الراشح المتكون قبل إعادة الامتصاص",
          "حجم البول الخارج",
          "حجم الدم في الجسم"
        ],
        "a": 0
      },
      {
        "q": "إلى أين ينتقل البول بعد تصفيته في الكلى؟",
        "o": [
          "الكبد",
          "المثانة",
          "المعدة"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "What is the tiny unit that filters blood inside the kidney?",
            "o": [
                  "The nephron",
                  "The nucleus",
                  "The air sac"
            ],
            "a": 0
      },
      {
            "q": "What does the figure of about 180 liters per day mean in the kidneys' work?",
            "o": [
                  "The volume of filtrate formed before reabsorption",
                  "The volume of urine out",
                  "The volume of blood in the body"
            ],
            "a": 0
      },
      {
            "q": "Where does urine go after being filtered in the kidney?",
            "o": [
                  "The liver",
                  "The bladder",
                  "The stomach"
            ],
            "a": 1
      }
],
    "video": "كيف تعمل الكلى للاطفال",
    "videoEn": "how the kidneys work"
  },
  {
    "id": "photosynthesis",
    "src": "https://en.wikipedia.org/wiki/Photosynthesis",
    "emoji": "🌿",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "البناء الضوئي",
    "titleEn": "Photosynthesis",
    "ar": "البناء الضوئي هو مطبخ النبات: تأخذ الأوراق ضوء الشمس وثاني أكسيد الكربون من الهواء والماء من الجذور، وتحوّلها داخل البلاستيدات الخضراء إلى سكر (غذاء) وتطلق الأكسجين الذي نتنفسه. المعادلة ببساطة: ضوء + ماء + CO2 = سكر + أكسجين. كل نسمة أكسجين في رئتيك الآن صنعها نبات أو طحلب في مكان ما، ولهذا يقال إن الأشجار هي رئة الأرض.",
    "en": "Photosynthesis is the plant kitchen: leaves take sunlight, carbon dioxide from the air and water from the roots, and inside the green chloroplasts turn them into sugar (food) while releasing the oxygen we breathe. The simple equation: light + water + CO2 = sugar + oxygen. Every breath of oxygen in your lungs right now was made by a plant or alga somewhere, which is why forests are called the lungs of the Earth.",
    "story": "تخيّل ورقة يصلها الضوء والماء وثاني أكسيد الكربون. تستخدم الخلايا المحتوية على بلاستيدات هذه المدخلات في تفاعلات تصنع مادة عضوية وتطلق الأكسجين. النبات يتنفس خلوياً أيضاً، فهو ليس آلة تطلق الأكسجين في كل لحظة بلا شروط.",
    "storyEn": "Imagine a leaf receiving light, water and carbon dioxide. The cells containing chloroplasts use these inputs in reactions that make organic material and release oxygen. The plant also respires, so it is not a machine releasing oxygen at every moment without conditions.",
    "quiz": [
      {
        "q": "ما المادة الخضراء التي تمتص الضوء داخل الورقة؟",
        "o": [
          "الكلوروفيل في البلاستيدات",
          "النواة",
          "الهيموغلوبين"
        ],
        "a": 0
      },
      {
        "q": "ما الغاز الذي يطلقه البناء الضوئي؟",
        "o": [
          "ثاني أكسيد الكربون",
          "النيتروجين",
          "الأكسجين"
        ],
        "a": 2
      },
      {
        "q": "من أين يحصل النبات على الماء؟",
        "o": [
          "الجذور",
          "الأزهار",
          "الهواء مباشرة"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What green substance absorbs light inside the leaf?",
            "o": [
                  "Chlorophyll in the chloroplasts",
                  "The nucleus",
                  "Hemoglobin"
            ],
            "a": 0
      },
      {
            "q": "Which gas does photosynthesis release?",
            "o": [
                  "Carbon dioxide",
                  "Nitrogen",
                  "Oxygen"
            ],
            "a": 2
      },
      {
            "q": "Where does the plant get water?",
            "o": [
                  "The roots",
                  "The flowers",
                  "Directly from the air"
            ],
            "a": 0
      }
],
    "video": "البناء الضوئي للاطفال",
    "videoEn": "photosynthesis explained for kids"
  },
  {
    "id": "nervous",
    "src": "https://en.wikipedia.org/wiki/Nervous_system",
    "emoji": "⚡",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الجهاز العصبي",
    "titleEn": "The Nervous System",
    "ar": "يتكون الجهاز العصبي من الدماغ والحبل الشوكي والأعصاب. تستقبل خلاياه معلومات وتنقل إشارات وتنسق استجابات الجسم. تختلف سرعة الإشارة حسب نوع الليف العصبي، وقد تكون بعض المسارات سريعة جداً. في منعكس سحب اليد تشارك دوائر الحبل الشوكي قبل أن يكتمل إدراك الألم. نحو 86 ملياراً تقدير لعدد الخلايا العصبية في الدماغ البشري، وليس رقماً ثابتاً لكل الجهاز العصبي.",
    "en": "The nervous system includes the brain, spinal cord and nerves. Its cells receive information, transmit signals and coordinate responses. Signal speeds vary by nerve-fiber type, with some pathways very fast. Spinal circuits contribute to a withdrawal reflex before full conscious awareness of pain. About 86 billion is an estimate for neurons in the human brain, not a fixed count for the entire nervous system.",
    "story": "تخيّل أنك لمست سطحاً ساخناً دون قصد فسحبت يدك سريعاً. تشارك مستقبلات وأعصاب ودوائر في الحبل الشوكي وعضلات في الاستجابة. هذه الفكرة تفسر منعكساً وقائياً، وليست دعوة للمس أجسام ساخنة لاختباره.",
    "storyEn": "Imagine accidentally touching a hot surface and pulling your hand back quickly. Receptors, nerves, circuits in the spinal cord and muscles all take part in the response. This idea explains a protective reflex; it is not an invitation to touch hot objects to test it.",
    "quiz": [
      {
        "q": "هل تنتقل كل الإشارات العصبية بنفس السرعة؟",
        "o": [
          "لا، تختلف بحسب نوع الليف",
          "نعم دائماً",
          "لا توجد إشارات عصبية"
        ],
        "a": 0
      },
      {
        "q": "أين يحدث رد الفعل السريع (كسحب اليد من النار)؟",
        "o": [
          "الحبل الشوكي",
          "القلب",
          "الكبد"
        ],
        "a": 0
      },
      {
        "q": "نحو 86 مليار خلية عصبية تقدير لعددها في أي عضو؟",
        "o": [
          "الدماغ",
          "المعدة",
          "العظام"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Do all nerve signals travel at the same speed?",
            "o": [
                  "No, they differ by fiber type",
                  "Yes, always",
                  "There are no nerve signals"
            ],
            "a": 0
      },
      {
            "q": "Where does a fast reflex (like pulling a hand from fire) happen?",
            "o": [
                  "The spinal cord",
                  "The heart",
                  "The liver"
            ],
            "a": 0
      },
      {
            "q": "About 86 billion nerve cells is the estimate for which organ?",
            "o": [
                  "The brain",
                  "The stomach",
                  "The bones"
            ],
            "a": 0
      }
],
    "video": "الجهاز العصبي للاطفال",
    "videoEn": "nervous system for kids"
  },
  {
    "id": "digestion",
    "src": "https://en.wikipedia.org/wiki/Human_digestive_system",
    "emoji": "🍎",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الجهاز الهضمي",
    "titleEn": "The Digestive System",
    "ar": "الجهاز الهضمي مصنع معالجة كامل بطول نحو 9 أمتار: يبدأ الطعام رحلته من الفم حيث تقطعه الأسنان وتذيبه اللعبة، ثم المريء يدفعه إلى المعدة التي تقلبه في حمض قوي يقتل الجراثيم، ثم الأمعاء الدقيقة (6 أمتار!) حيث تُمتص العناصر الغذائية إلى الدم، وأخيراً الأمعاء الغليظة التي تستعيد الماء. الكبد والبنكرياس يساعدان بعصارات هاضمة. الرحلة الكاملة من لقمة إلى فضلات تستغرق 24-72 ساعة.",
    "en": "The digestive system is a complete processing plant about 9 meters long: food starts in the mouth where teeth chop it and saliva dissolves it, then the esophagus pushes it to the stomach which churns it in strong acid that kills germs, then the small intestine (6 meters!) absorbs the nutrients into the blood, and finally the large intestine reclaims water. The liver and pancreas help with digestive juices. The full journey from bite to waste takes 24-72 hours.",
    "story": "تخيّل لقمة تمر من الفم إلى المعدة ثم الأمعاء. لا تؤدي كل محطة الوظيفة نفسها: المضغ يفتت، وتفاعلات الهضم تكسر جزيئات، والامتصاص ينقل مواد عبر جدار الأمعاء. الاسم الواحد، الهضم، يخفي تعاون أعضاء كثيرة.",
    "storyEn": "Imagine a bite passing from the mouth to the stomach and then the intestines. Not every station does the same job: chewing breaks food up, digestive reactions break molecules down, and absorption moves substances across the intestinal wall. One word, digestion, hides the teamwork of many organs.",
    "quiz": [
      {
        "q": "أين يحدث امتصاص معظم الغذاء إلى الدم؟",
        "o": [
          "المعدة",
          "الأمعاء الدقيقة",
          "الفم"
        ],
        "a": 1
      },
      {
        "q": "ما طول الجهاز الهضمي كله تقريباً؟",
        "o": [
          "9 أمتار",
          "90 سم",
          "9 كم"
        ],
        "a": 0
      },
      {
        "q": "ما وظيفة حمض المعدة؟",
        "o": [
          "قتل الجراثيم وتفتيت الطعام",
          "صنع الدم",
          "تخزين الماء"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Where is most food absorbed into the blood?",
            "o": [
                  "The stomach",
                  "The small intestine",
                  "The mouth"
            ],
            "a": 1
      },
      {
            "q": "About how long is the whole digestive tract?",
            "o": [
                  "9 meters",
                  "90 cm",
                  "9 km"
            ],
            "a": 0
      },
      {
            "q": "What does stomach acid do?",
            "o": [
                  "Kills germs and breaks up food",
                  "Makes blood",
                  "Stores water"
            ],
            "a": 0
      }
],
    "video": "الجهاز الهضمي للاطفال",
    "videoEn": "digestive system for kids"
  },
  {
    "id": "blood",
    "src": "https://en.wikipedia.org/wiki/Blood",
    "emoji": "🩸",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الدم",
    "titleEn": "Blood",
    "ar": "الدم نهر الحياة في جسمك: 5 لترات تقريباً تجري في 100 ألف كم من الأوعية. مكوناته أربعة: خلايا حمراء تحمل الأكسجين (ويعيش كل منها 120 يوماً)، وخلايا بيضاء جيش المناعة، وصفائح دموية تسد الجروح وتوقف النزيف، وبلازما سائلة تنقل الغذاء والهرمونات. نخاع العظام مصنعك الذي ينتج مليوني خلية حمراء كل ثانية، وفصيلة دمك (A أو B أو AB أو O) تحدد من يمكنه نقل الدم لك.",
    "en": "Blood is the river of life in your body: about 5 liters flowing through 100,000 km of vessels. Its four components: red cells carrying oxygen (each lives 120 days), white cells as the immune army, platelets that plug wounds and stop bleeding, and liquid plasma transporting food and hormones. Your bone marrow factory makes two million red cells every second, and your blood type (A, B, AB or O) decides who can donate to you.",
    "story": "تخيّل قطرة دم في رسم مكبر: خلايا حمراء وصفائح وخلايا بيضاء تتحرك في البلازما. لكل مكون أدوار مختلفة، ولا يمكن اختزال الدم في وظيفة حمل الأكسجين فقط. وألوان الرسم تساعدنا على التمييز وليست مقاييس أو ألواناً حرفية.",
    "storyEn": "Imagine a drop of blood in a magnified drawing: red cells, platelets and white cells moving in the plasma. Each component has different roles, and blood cannot be reduced to only carrying oxygen. The drawing's colors help us tell parts apart; they are not literal scales or colors.",
    "quiz": [
      {
        "q": "ما وظيفة الخلايا الحمراء؟",
        "o": [
          "حمل الأكسجين",
          "محاربة الجراثيم",
          "سد الجروح"
        ],
        "a": 0
      },
      {
        "q": "أين تُصنع خلايا الدم؟",
        "o": [
          "الكبد",
          "نخاع العظام",
          "المعدة"
        ],
        "a": 1
      },
      {
        "q": "ما عمر الخلية الحمراء الواحدة تقريباً؟",
        "o": [
          "120 يوماً",
          "يوم واحد",
          "12 سنة"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What is the job of red blood cells?",
            "o": [
                  "Carrying oxygen",
                  "Fighting germs",
                  "Sealing wounds"
            ],
            "a": 0
      },
      {
            "q": "Where are blood cells made?",
            "o": [
                  "The liver",
                  "Bone marrow",
                  "The stomach"
            ],
            "a": 1
      },
      {
            "q": "About how long does one red blood cell live?",
            "o": [
                  "120 days",
                  "One day",
                  "12 years"
            ],
            "a": 0
      }
],
    "video": "مكونات الدم للاطفال",
    "videoEn": "blood components for kids"
  },
  {
    "id": "organelles",
    "src": "https://en.wikipedia.org/wiki/Organelle",
    "emoji": "🔬",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "عضيات الخلية",
    "titleEn": "Cell Organelles",
    "ar": "داخل الخلية الحيوانية النموذجية مدينة مصغّرة من العضيات، ولكل منها وظيفة: النواة مركز القيادة وتحفظ الـ DNA، والميتوكوندريا محطة الطاقة تحرق السكر وتنتج ATP، والريبوسومات مصانع تخيط البروتينات، والشبكة الإندوبلازمية طرق النقل الداخلية، وجهاز غولجي مكتب البريد يغلّف المواد ويرسلها، والجسيمات الحالة عمال النظافة تهضم التالف. تتعاون هذه العضيات بدقة تجعل الخلية الواحدة أعقد من أي مصنع بشري.",
    "en": "Inside a typical animal cell is a miniature city of organelles, each with a job: the nucleus is the command center storing DNA, mitochondria are power stations burning sugar into ATP, ribosomes are factories stitching proteins, the endoplasmic reticulum is the internal road network, the Golgi apparatus is the post office packaging and shipping materials, and lysosomes are the cleanup crew digesting the worn-out. These organelles cooperate with a precision that makes a single cell more complex than any human factory.",
    "story": "تخيّل رسالة mRNA تصل إلى ريبوسوم ثم ينتقل بروتين مناسب إلى الشبكة الإندوبلازمية وغولجي قبل وجهته. هذا مثال لمسار بعض البروتينات، وليس طريق كل بروتين تصنعه الخلية.",
    "storyEn": "Imagine an mRNA message reaching a ribosome, then a suitable protein moving to the endoplasmic reticulum and the Golgi before its destination. This is an example of the path of some proteins, not the road of every protein the cell makes.",
    "quiz": [
      {
        "q": "أي عضية تنتج طاقة الخلية؟",
        "o": [
          "الميتوكوندريا",
          "النواة",
          "جهاز غولجي"
        ],
        "a": 0
      },
      {
        "q": "ما وظيفة الريبوسومات؟",
        "o": [
          "تصنيع البروتين",
          "تخزين الماء",
          "هضم التالف"
        ],
        "a": 0
      },
      {
        "q": "ماذا كانت الميتوكوندريا في الأصل؟",
        "o": [
          "فيروساً",
          "بكتيريا حرة",
          "جزءاً من النواة"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "Which organelle produces the cell's energy?",
            "o": [
                  "The mitochondria",
                  "The nucleus",
                  "The Golgi apparatus"
            ],
            "a": 0
      },
      {
            "q": "What do ribosomes do?",
            "o": [
                  "Make protein",
                  "Store water",
                  "Digest the worn-out"
            ],
            "a": 0
      },
      {
            "q": "What were mitochondria originally?",
            "o": [
                  "A virus",
                  "Free-living bacteria",
                  "Part of the nucleus"
            ],
            "a": 1
      }
],
    "video": "عضيات الخلية للاطفال",
    "videoEn": "cell organelles explained for kids"
  },
  {
    "id": "tissues",
    "src": "https://en.wikipedia.org/wiki/Tissue_(biology)",
    "emoji": "🧱",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الأنسجة",
    "titleEn": "Tissues",
    "ar": "النسيج هو مجموعة خلايا متشابهة تتعاون في مهمة واحدة، وهو المستوى بين الخلية والعضو. جسمك مبني من أربعة أنواع أساسية: النسيج الطلائي يغطي الأسطح ويبطن الأعضاء (كالجلد وبطانة الفم)، والنسيج الضام يربط ويدعم (كالعظم والغضروف والدم)، والنسيج العضلي يتقلص فيحركك، والنسيج العصبي ينقل الإشارات. اجمع أنسجة مختلفة في بنية واحدة لها مهمة كبرى فتحصل على عضو كامل كالقلب.",
    "en": "A tissue is a group of similar cells cooperating on one task, the level between cell and organ. Your body is built from four basic types: epithelial tissue covers surfaces and lines organs (like skin and mouth lining), connective tissue binds and supports (like bone, cartilage and blood), muscle tissue contracts to move you, and nervous tissue carries signals. Combine different tissues in one structure with a major task and you get a whole organ like the heart.",
    "story": "تخيّل عضواً مثل المعدة: نسيج يبطنه، وعضلات تحركه، ونسيج ضام يدعمه، وأعصاب تنسق عمله. العضو لا يتكون من نوع واحد يؤدي كل المهام؛ تعاون الأنسجة هو الفكرة.",
    "storyEn": "Imagine an organ like the stomach: tissue lining it, muscles moving it, connective tissue supporting it and nerves coordinating its work. An organ is not made of one type that does every task; the cooperation of tissues is the idea.",
    "quiz": [
      {
        "q": "كم عدد أنواع الأنسجة الأساسية في الجسم؟",
        "o": [
          "4",
          "40",
          "400"
        ],
        "a": 0
      },
      {
        "q": "إلى أي نوع ينتمي العظم والدم؟",
        "o": [
          "الطلائي",
          "الضام",
          "العضلي"
        ],
        "a": 1
      },
      {
        "q": "تجميع أنسجة مختلفة لمهمة كبرى يكوّن؟",
        "o": [
          "خلية",
          "عضواً",
          "عضية"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "How many basic tissue types does the body have?",
            "o": [
                  "4",
                  "40",
                  "400"
            ],
            "a": 0
      },
      {
            "q": "Which type do bone and blood belong to?",
            "o": [
                  "Epithelial",
                  "Connective",
                  "Muscle"
            ],
            "a": 1
      },
      {
            "q": "Grouping different tissues for one big task forms?",
            "o": [
                  "A cell",
                  "An organ",
                  "An organelle"
            ],
            "a": 1
      }
],
    "video": "أنسجة الجسم للاطفال",
    "videoEn": "types of tissues for kids"
  },
  {
    "id": "skeleton",
    "src": "https://en.wikipedia.org/wiki/Human_skeleton",
    "emoji": "🦴",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الهيكل العظمي",
    "titleEn": "The Skeleton",
    "ar": "هيكلك العظمي 206 عظمة في الإنسان البالغ (يولد الطفل بنحو 300 تلتحم مع النمو)، وهو ليس مجرد إطار: يدعم الجسم ويقف به، ويحمي الأعضاء الحساسة (الجمجمة للدماغ والقفص الصدري للقلب والرئتين)، ويصنع خلايا الدم في نخاعه، ويخزن الكالسيوم. العظام أنسجة حية تتجدد باستمرار؛ كسرك يلتئم لأن خلايا خاصة تعيد بناء العظم، وأقوى عظمة فيك هي عظمة الفخذ وأصغرها الركاب في الأذن بطول 3 ملم.",
    "en": "Your skeleton has 206 bones in an adult (a baby is born with about 300 that fuse as they grow), and it is not just a frame: it supports the body upright, protects delicate organs (skull for the brain, ribcage for heart and lungs), makes blood cells in its marrow, and stores calcium. Bones are living, constantly renewing tissue; your fracture heals because special cells rebuild bone. Your strongest bone is the femur, and the smallest is the stapes in the ear, 3 mm long.",
    "story": "تخيّل ضلوعاً تحيط بأعضاء الصدر وعظام أطراف تعمل كروافع. الحماية والدعم والحركة وظائف مترابطة، والعظم نفسه نسيج حي يغير بنيته مع الزمن، وليس حجراً خاملاً.",
    "storyEn": "Imagine ribs wrapping the organs of the chest and limb bones working as levers. Protection, support and movement are connected functions, and bone itself is living tissue that changes its structure over time, not idle stone.",
    "quiz": [
      {
        "q": "كم عدد عظام الإنسان البالغ؟",
        "o": [
          "206",
          "300",
          "100"
        ],
        "a": 0
      },
      {
        "q": "أين تُصنع خلايا الدم؟",
        "o": [
          "الكبد",
          "نخاع العظام",
          "الجلد"
        ],
        "a": 1
      },
      {
        "q": "ما أصغر عظمة في الجسم؟",
        "o": [
          "الركاب في الأذن",
          "عظمة الإصبع",
          "الفخذ"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "How many bones does an adult human have?",
            "o": [
                  "206",
                  "300",
                  "100"
            ],
            "a": 0
      },
      {
            "q": "Where are blood cells made?",
            "o": [
                  "The liver",
                  "Bone marrow",
                  "The skin"
            ],
            "a": 1
      },
      {
            "q": "What is the smallest bone in the body?",
            "o": [
                  "The stapes in the ear",
                  "A finger bone",
                  "The femur"
            ],
            "a": 0
      }
],
    "video": "الهيكل العظمي للاطفال",
    "videoEn": "human skeleton for kids"
  },
  {
    "id": "muscles",
    "src": "https://en.wikipedia.org/wiki/Muscular_system",
    "emoji": "💪",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "العضلات",
    "titleEn": "Muscles",
    "ar": "في جسمك أكثر من 600 عضلة تشكل نحو 40% من وزنك، وهي ثلاثة أنواع: العضلات الهيكلية تحرك عظامك بإرادتك (كعضلة الذراع)، والعضلة القلبية تعمل بلا توقف طوال عمرك بلا إرادة، والعضلات الملساء في الأمعاء والأوعية تعمل بصمت. العضلات تسحب فقط ولا تدفع، لذلك تعمل في أزواج متعاكسة: عضلة تثني ذراعك وأخرى تفردها. أقوى عضلة نسبةً لحجمها هي الماضغة في الفك، وأكبرها الألوية في الجلوس.",
    "en": "Your body has over 600 muscles making about 40% of your weight, in three types: skeletal muscles move your bones at will (like the arm biceps), the cardiac muscle works nonstop your whole life without your command, and smooth muscles in the intestines and vessels work silently. Muscles only pull, never push, so they work in opposing pairs: one bends your arm and another straightens it. The strongest muscle for its size is the masseter in the jaw, and the largest is the gluteus maximus.",
    "story": "تخيّل المرفق ينثني ثم يستقيم. تشد عضلات مختلفة العظام عبر الأوتار فتتغير الزاوية عند المفصل. العضلة تولد شداً عند الانقباض، ويؤدي ترتيب العضلات والمفاصل إلى حركات متنوعة.",
    "storyEn": "Imagine the elbow bending then straightening. Different muscles pull the bones through tendons, so the angle at the joint changes. A muscle generates pull when it contracts, and the arrangement of muscles and joints produces varied movements.",
    "quiz": [
      {
        "q": "كم عدد عضلات جسمك تقريباً؟",
        "o": [
          "أكثر من 600",
          "60",
          "6000"
        ],
        "a": 0
      },
      {
        "q": "لماذا تعمل العضلات في أزواج؟",
        "o": [
          "لأنها تسحب فقط ولا تدفع",
          "لتبدو أجمل",
          "لتوفير الطاقة"
        ],
        "a": 0
      },
      {
        "q": "أي عضلة تعمل بلا توقف طوال العمر؟",
        "o": [
          "عضلة الذراع",
          "عضلة القلب",
          "عضلة الفك"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "About how many muscles does your body have?",
            "o": [
                  "More than 600",
                  "60",
                  "6000"
            ],
            "a": 0
      },
      {
            "q": "Why do muscles work in pairs?",
            "o": [
                  "Because they only pull and cannot push",
                  "To look nicer",
                  "To save energy"
            ],
            "a": 0
      },
      {
            "q": "Which muscle works without stopping all your life?",
            "o": [
                  "The arm muscle",
                  "The heart muscle",
                  "The jaw muscle"
            ],
            "a": 1
      }
],
    "video": "عضلات الجسم للاطفال",
    "videoEn": "muscular system for kids"
  },
  {
    "id": "respiration",
    "src": "https://en.wikipedia.org/wiki/Respiratory_system",
    "emoji": "🫁",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الجهاز التنفسي",
    "titleEn": "The Respiratory System",
    "ar": "ينتقل الهواء عبر مجارٍ تنفسية إلى الرئتين، حيث توفر الحويصلات سطوحاً رقيقة لتبادل الغازات مع الدم. يدخل الأكسجين إلى الدم ويخرج ثاني أكسيد الكربون في الاتجاه المقابل تبعاً لفروق الضغط الجزئي. يساعد انقباض الحجاب الحاجز على زيادة حجم الصدر ودخول الهواء. التنفس عملية تهوية، أما استخدام الخلايا للأكسجين لإنتاج ATP فجزء من التنفس الخلوي. يختلف معدل التنفس حسب العمر والنشاط والحالة الصحية.",
    "en": "Air travels through airways into the lungs, where alveoli provide thin surfaces for gas exchange with blood. Oxygen enters blood and carbon dioxide moves the other way according to partial-pressure differences. Diaphragm contraction helps expand the chest and draw air in. Breathing is ventilation; cellular use of oxygen to make ATP is part of cellular respiration. Breathing rate varies with age, activity and health.",
    "story": "تخيّل حويصلة هوائية بجوار شعيرة دموية. يفصل بين الهواء والدم حاجز رقيق يسمح بتبادل الغازات، مع بقائهما في حيزين مختلفين عادة. الحجاب الحاجز يساعد على التهوية، والدم ينقل الغاز بعد تبادله.",
    "storyEn": "Imagine an air sac next to a capillary. A thin barrier between air and blood lets gases exchange while they usually stay in two separate spaces. The diaphragm helps with ventilation, and the blood carries the gas after the exchange.",
    "quiz": [
      {
        "q": "أين يدخل الأكسجين إلى الدم؟",
        "o": [
          "الحويصلات الهوائية",
          "الأنف",
          "المعدة"
        ],
        "a": 0
      },
      {
        "q": "ما العضلة التي تضخ الهواء إلى الرئتين؟",
        "o": [
          "القلب",
          "الحجاب الحاجز",
          "المعدة"
        ],
        "a": 1
      },
      {
        "q": "هل معدل التنفس واحد في كل الأعمار والأنشطة؟",
        "o": [
          "لا، يتغير بحسب العمر والنشاط وعوامل أخرى",
          "نعم دائماً",
          "لا يتأثر بالنشاط"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Where does oxygen enter the blood?",
            "o": [
                  "The alveoli (air sacs)",
                  "The nose",
                  "The stomach"
            ],
            "a": 0
      },
      {
            "q": "Which muscle pumps air into the lungs?",
            "o": [
                  "The heart",
                  "The diaphragm",
                  "The stomach"
            ],
            "a": 1
      },
      {
            "q": "Is the breathing rate the same at every age and activity?",
            "o": [
                  "No, it changes with age, activity and other factors",
                  "Yes, always",
                  "It is unaffected by activity"
            ],
            "a": 0
      }
],
    "video": "الجهاز التنفسي للاطفال",
    "videoEn": "respiratory system for kids"
  },
  {
    "id": "immunity",
    "src": "https://en.wikipedia.org/wiki/Immune_system",
    "emoji": "🛡️",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "جهاز المناعة",
    "titleEn": "The Immune System",
    "ar": "يساعد الجهاز المناعي على التعرف على أخطار والدفاع عن الجسم. الجلد والأغشية حواجز، وتوجد استجابات فطرية سريعة وأخرى تكيفية أكثر تخصصاً. تتحول بعض الخلايا البائية إلى خلايا تنتج الأجسام المضادة، بينما تؤدي الخلايا التائية أدواراً أخرى منها التنسيق وقتل خلايا مصابة. تستطيع بعض الاستجابات تكوين ذاكرة مناعية، وتستخدم اللقاحات هذه القدرة بطرق تختلف بحسب اللقاح. المناعة ليست معصومة، وقد تستجيب أحياناً لمادة غير ضارة في الحساسية.",
    "en": "The immune system helps recognize threats and defend the body. Skin and membranes act as barriers, while innate responses are rapid and adaptive responses more specific. Some B cells become antibody-producing cells; T cells have other roles including coordination and killing infected cells. Some responses form immune memory, which vaccines use in ways that vary by vaccine. Immunity is not infallible and can respond to harmless substances in allergy.",
    "story": "تخيّل حاجزاً جلدياً واستجابة سريعة ثم خلايا أكثر تخصصاً تتعرف على هدف معين. هذه صورة مبسطة لتعاون أجزاء المناعة؛ لا تعمل الأجزاء كجيوش واعية، ولا تضمن المناعة منع كل عدوى.",
    "storyEn": "Imagine a skin barrier, a fast response, and then more specialized cells that recognize a specific target. This is a simplified picture of how the parts of immunity cooperate; the parts do not act like conscious armies, and immunity does not guarantee stopping every infection.",
    "quiz": [
      {
        "q": "ما فكرة اللقاح؟",
        "o": [
          "تدريب المناعة على عدو معطَّل",
          "قتل كل البكتيريا في الجسم",
          "تقوية العضلات"
        ],
        "a": 0
      },
      {
        "q": "أي خلايا تصنع الأجسام المضادة؟",
        "o": [
          "الخلايا البائية بعد تحولها إلى خلايا بلازمية",
          "الخلايا الحمراء",
          "كل خلايا الجسم"
        ],
        "a": 0
      },
      {
        "q": "ما الخط الأول للدفاع؟",
        "o": [
          "الجلد والمخاط وحمض المعدة",
          "الأجسام المضادة",
          "المضادات الحيوية"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What is the idea of a vaccine?",
            "o": [
                  "Training immunity on a disarmed enemy",
                  "Killing all bacteria in the body",
                  "Strengthening muscles"
            ],
            "a": 0
      },
      {
            "q": "Which cells make antibodies?",
            "o": [
                  "B cells after becoming plasma cells",
                  "Red blood cells",
                  "Every body cell"
            ],
            "a": 0
      },
      {
            "q": "What is the first line of defense?",
            "o": [
                  "Skin, mucus and stomach acid",
                  "Antibodies",
                  "Antibiotics"
            ],
            "a": 0
      }
],
    "video": "جهاز المناعة للاطفال",
    "videoEn": "immune system for kids"
  },
  {
    "id": "genetics",
    "src": "https://en.wikipedia.org/wiki/Heredity",
    "emoji": "👨‍👩‍👧",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الوراثة",
    "titleEn": "Heredity",
    "ar": "الوراثة انتقال معلومات جينية من الوالدين إلى الأبناء. الجينات أجزاء من DNA، وتوجد لها نسخ مختلفة تسمى أليلات. تفسر السيادة والتنحي بعض أنماط الوراثة البسيطة، لكن صفات كثيرة تتأثر بجينات متعددة وبالبيئة. لذلك لا يصح اختزال لون العين أو الذكاء أو الشخصية إلى جين واحد. يتشابه الإخوة ويختلفون بسبب مجموعات النسخ التي ورثوها وعوامل أخرى.",
    "en": "Heredity is the transmission of genetic information from parents to offspring. Genes are DNA regions with alternative versions called alleles. Dominance and recessiveness explain some simple inheritance patterns, but many traits involve multiple genes and environmental influences. Eye color, intelligence or personality should not be reduced to one gene. Siblings resemble and differ from each other because of inherited combinations and other factors.",
    "story": "تخيّل والدين يحملان نسخاً مختلفة من جين في مثال وراثة بسيط. قد يرث الأبناء توليفات مختلفة، لذلك قد لا يتطابق الإخوة. صفات الإنسان المعقدة تحتاج عادة أكثر من هذا المثال ذي الجين الواحد.",
    "storyEn": "Imagine two parents carrying different versions of a gene in a simple inheritance example. Their children may inherit different combinations, so siblings may not match. Complex human traits usually need more than this single-gene example.",
    "quiz": [
      {
        "q": "من أين ترث جيناتك؟",
        "o": [
          "نصفها من كل والد",
          "كلها من الأم",
          "كلها من الأب"
        ],
        "a": 0
      },
      {
        "q": "ما الجين؟",
        "o": [
          "مقطع DNA يشبه الوصفة",
          "نوع من الخلايا",
          "فيتامين"
        ],
        "a": 0
      },
      {
        "q": "هل كل صفة بشرية يحددها جين واحد فقط؟",
        "o": [
          "لا، صفات كثيرة متعددة العوامل",
          "نعم دائماً",
          "البيئة لا تؤثر أبداً"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Where do you inherit your genes from?",
            "o": [
                  "Half from each parent",
                  "All from the mother",
                  "All from the father"
            ],
            "a": 0
      },
      {
            "q": "What is a gene?",
            "o": [
                  "A DNA segment like a recipe",
                  "A type of cell",
                  "A vitamin"
            ],
            "a": 0
      },
      {
            "q": "Is every human trait set by a single gene?",
            "o": [
                  "No, many traits are multi-factor",
                  "Yes, always",
                  "The environment never matters"
            ],
            "a": 0
      }
],
    "video": "الوراثة للاطفال",
    "videoEn": "heredity and genetics for kids"
  },
  {
    "id": "evolution",
    "src": "https://en.wikipedia.org/wiki/Evolution",
    "emoji": "🐢",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "التطور",
    "titleEn": "Evolution",
    "ar": "التطور هو تغير الكائنات الحية عبر الأجيال الطويلة جداً، ومحركه الانتقاء الطبيعي: داخل كل نوع يولد أفراد بفروق بسيطة عشوائية، ومن كان منها أنسب لبيئته عاش وتكاثر أكثر، فتنتشر صفته في الجيل التالي. كرر ذلك ملايين السنين فتحصل على زعانف تصير أرجلاً وزوائد تصير أجنحة. الدليل عليه في كل مكان: حفريات مرتبة في الصخر، وتشابه عظام يدك وجناح الخفاش وزعنفة الحوت، وبكتيريا تكتسب مقاومة للمضادات أمام أعيننا اليوم.",
    "en": "Evolution is the change of living things across very long generations, driven by natural selection: within every species, individuals are born with small random differences, and those best suited to their environment survive and reproduce more, so their traits spread in the next generation. Repeat that for millions of years and fins become legs and buds become wings. Evidence is everywhere: fossils ordered in rock, the shared bone pattern of your hand, a bat wing and a whale flipper, and bacteria gaining antibiotic resistance before our eyes today.",
    "story": "تخيّل جماعة بكتيريا فيها اختلافات موروثة، ثم بيئة تجعل بعض الأنواع الوراثية أنجح في التكاثر. قد تتغير نسب هذه الأنواع عبر الأجيال. الفرد لا يختار طفرة لأنه يحتاجها؛ يتغير توزيع صفات الجماعة.",
    "storyEn": "Imagine a population of bacteria with inherited differences, then an environment that makes some genetic types more successful at reproducing. The proportions of these types can change over generations. An individual does not choose a mutation because it needs one; the distribution of traits in the population changes.",
    "quiz": [
      {
        "q": "ما محرك التطور الأساسي؟",
        "o": [
          "الانتقاء الطبيعي",
          "الحظ فقط",
          "التدريب الرياضي"
        ],
        "a": 0
      },
      {
        "q": "ماذا يحدث عبر الانتخاب الطبيعي؟",
        "o": [
          "تتغير نسب صفات موروثة تبعاً للنجاح التكاثري",
          "الفرد يختار طفرة عند الحاجة",
          "تختفي كل الاختلافات فوراً"
        ],
        "a": 0
      },
      {
        "q": "التطور الوراثي تغير يحدث في؟",
        "o": [
          "جماعات عبر الأجيال",
          "قرار يتخذه فرد",
          "كل فرد خلال ثانية"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What is the main engine of evolution?",
            "o": [
                  "Natural selection",
                  "Pure luck",
                  "Sports training"
            ],
            "a": 0
      },
      {
            "q": "What happens through natural selection?",
            "o": [
                  "Proportions of inherited traits change with reproductive success",
                  "An individual chooses a mutation when needed",
                  "All differences vanish at once"
            ],
            "a": 0
      },
      {
            "q": "Genetic evolution is a change that happens in?",
            "o": [
                  "Populations over generations",
                  "A decision by an individual",
                  "Every individual in one second"
            ],
            "a": 0
      }
],
    "video": "التطور للاطفال",
    "videoEn": "evolution and natural selection for kids"
  },
  {
    "id": "ecology",
    "src": "https://en.wikipedia.org/wiki/Ecology",
    "emoji": "🌍",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "علم البيئة",
    "titleEn": "Ecology",
    "ar": "علم البيئة هو دراسة كيف تتصل الكائنات ببعضها وببيئتها في شبكة واحدة: النبات يصنع الغذاء من الضوء، والعاشب يأكله، والمفترس يأكل العاشب، والمحللات تعيد البقايا إلى التربة لتبدأ الدورة من جديد - تلك السلسلة الغذائية. كل نوع له دور، وإسقاط حلقة واحدة قد يقلب النظام كله: اختفاء النحل مثلاً يهدد ثلث محاصيلنا لأنه يلقح الأزهار. البيئة ليست ديكوراً حولنا؛ إنها جهاز التنفس والأكل الذي نعيش داخله.",
    "en": "Ecology is the study of how living things connect to each other and to their environment in one web: plants make food from light, herbivores eat them, predators eat the herbivores, and decomposers return the remains to the soil so the cycle starts again - that is the food chain. Every species has a role, and dropping one link can flip the whole system: losing bees, for example, threatens a third of our crops because they pollinate the flowers. The environment is not decoration around us; it is the breathing and feeding machine we live inside.",
    "story": "تخيّل نباتاً وحشرة وطائراً ومحللات في شبكة واحدة. تغيير مورد أو نوع قد يغير علاقات كثيرة، لكن النتيجة تتوقف على بقية النظام. لهذا يدرس علماء البيئة أكثر من رابط واحد قبل تفسير تغير كبير.",
    "storyEn": "Imagine a plant, an insect, a bird and decomposers in one web. Changing a resource or a species can change many relationships, but the outcome depends on the rest of the system. That is why ecologists study more than one link before explaining a big change.",
    "quiz": [
      {
        "q": "في سلسلة غذائية تبدأ بنبات، ما دور النبات؟",
        "o": [
          "منتج",
          "مفترس",
          "لا دور له"
        ],
        "a": 0
      },
      {
        "q": "ما خطر اختفاء النحل؟",
        "o": [
          "تهديد تلقيح المحاصيل",
          "زيادة العسل",
          "لا شيء"
        ],
        "a": 0
      },
      {
        "q": "ما دور المحللات؟",
        "o": [
          "إعادة البقايا للتربة",
          "افتراس الغزلان",
          "صنع الأكسجين فقط"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "In a food chain that starts with a plant, what is the plant's role?",
            "o": [
                  "Producer",
                  "Predator",
                  "It has no role"
            ],
            "a": 0
      },
      {
            "q": "What is the danger of bees disappearing?",
            "o": [
                  "Threatening crop pollination",
                  "More honey",
                  "Nothing"
            ],
            "a": 0
      },
      {
            "q": "What do decomposers do?",
            "o": [
                  "Return remains to the soil",
                  "Hunt deer",
                  "Only make oxygen"
            ],
            "a": 0
      }
],
    "video": "السلسلة الغذائية للاطفال",
    "videoEn": "food chains and ecosystems for kids"
  },
  {
    "id": "enzymes",
    "src": "https://en.wikipedia.org/wiki/Enzyme",
    "emoji": "⚗️",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الإنزيمات",
    "titleEn": "Enzymes",
    "ar": "الإنزيمات عوامل حفازة حيوية تسرع تفاعلات دون أن تستهلك في محصلتها. كثير منها بروتينات، وتوجد أيضاً جزيئات RNA لها نشاط حفاز. تتفاعل الركيزة مع موقع نشط مناسب، ويساعد الإنزيم على خفض حاجز طاقة التنشيط. قد تغير درجة الحرارة أو الحموضة نشاطه وبنيته، ولكل إنزيم ظروف مناسبة. الأميلاز مثال يساعد على تفكيك النشا أثناء الهضم.",
    "en": "Enzymes are biological catalysts that speed reactions without being consumed overall. Most are proteins, though some RNA molecules also have catalytic activity. A substrate interacts with a suitable active site, and the enzyme lowers the activation-energy barrier. Temperature and pH can change its activity or structure, with suitable conditions differing by enzyme. Amylase, for example, helps break down starch during digestion.",
    "story": "تخيّل ركيزة ترتبط بموقع نشط مناسب في إنزيم، ثم تتحول إلى نواتج وتغادر. يمكن للإنزيم أن يكرر العمل لأنه لا يستهلك في محصلة التفاعل، مع أن نشاطه يتأثر بالظروف.",
    "storyEn": "Imagine a substrate fitting into an enzyme's matching active site, then turning into products and leaving. The enzyme can repeat the job because it is not consumed in the overall reaction, even though its activity depends on conditions.",
    "quiz": [
      {
        "q": "ما وظيفة الإنزيم؟",
        "o": [
          "تسريع التفاعلات",
          "إبطاء الهضم",
          "صنع العظام"
        ],
        "a": 0
      },
      {
        "q": "أي إنزيم في اللعاب؟",
        "o": [
          "الأميلاز",
          "الإنسولين",
          "الهيموغلوبين"
        ],
        "a": 0
      },
      {
        "q": "شكل الإنزيم يلائم الجزيء مثل؟",
        "o": [
          "المفتاح والقفل",
          "الكرة والملعب",
          "القلم والورق"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What does an enzyme do?",
            "o": [
                  "Speeds up reactions",
                  "Slows digestion",
                  "Makes bones"
            ],
            "a": 0
      },
      {
            "q": "Which enzyme is in saliva?",
            "o": [
                  "Amylase",
                  "Insulin",
                  "Hemoglobin"
            ],
            "a": 0
      },
      {
            "q": "An enzyme's shape fits its molecule like?",
            "o": [
                  "A key and a lock",
                  "A ball and a field",
                  "A pen and paper"
            ],
            "a": 0
      }
],
    "video": "الإنزيمات للاطفال",
    "videoEn": "enzymes explained for kids"
  },
  {
    "id": "virus",
    "src": "https://en.wikipedia.org/wiki/Virus",
    "emoji": "👾",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الفيروسات",
    "titleEn": "Viruses",
    "ar": "الفيروس أعجوبة على حافة الحياة: ليس خلية ولا يأكل ولا يتكاثر وحده؛ هو صندوق صغير من المادة الوراثية مغلف ببروتين، مهمته الوحيدة اقتحام خلية وخطف مصانعها لتصنع منه نسخاً. لذلك لا تنفع ضده المضادات الحيوية، وإنما المناعة واللقاحات. الفيروسات أصغر من البكتيريا مئة مرة تقريباً، وهي في كل مكان، وبعضها مفيد: فيروسات البكتيريوفاج تقتل بكتيريا خطرة، وجزء من DNA الإنساني هو بقايا فيروسات قديمة سكنتنا منذ ملايين السنين.",
    "en": "A virus is a wonder on the edge of life: not a cell, it does not eat and cannot multiply alone; it is a small box of genetic material wrapped in protein, whose only mission is breaking into a cell and hijacking its factories to make copies. That is why antibiotics do not work on viruses - immunity and vaccines do. Viruses are about a hundred times smaller than bacteria, they are everywhere, and some are useful: bacteriophage viruses kill dangerous bacteria, and part of human DNA is leftovers of ancient viruses that moved in millions of years ago.",
    "story": "تخيّل مادة وراثية داخل غلاف بروتيني تصل إلى خلية مناسبة. يعتمد تكوين نسخ فيروسية جديدة على مكونات الخلية المضيفة. يوضح ذلك الفرق بين الفيروس والبكتيريا، ولماذا لا تعمل المضادات البكتيرية كعلاج عام للفيروسات.",
    "storyEn": "Imagine genetic material inside a protein coat reaching a suitable cell. Making new viral copies depends on the host cell's machinery. This shows the difference between a virus and a bacterium, and why antibacterial drugs do not work as a general treatment for viruses.",
    "quiz": [
      {
        "q": "لماذا لا يقتل المضاد الحيوي الفيروسات؟",
        "o": [
          "لأنها ليست بكتيريا",
          "لأنها كبيرة",
          "لأنها سريعة"
        ],
        "a": 0
      },
      {
        "q": "كيف يتكاثر الفيروس؟",
        "o": [
          "يخطف مصانع الخلية",
          "ينقسم نصفين",
          "يصنع بويضات"
        ],
        "a": 0
      },
      {
        "q": "حجم الفيروس مقارنة بالبكتيريا؟",
        "o": [
          "أصغر مئة مرة",
          "أكبر مئة مرة",
          "نفس الحجم"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Why do antibiotics not kill viruses?",
            "o": [
                  "Because they are not bacteria",
                  "Because they are big",
                  "Because they are fast"
            ],
            "a": 0
      },
      {
            "q": "How does a virus multiply?",
            "o": [
                  "It hijacks the cell's machinery",
                  "It splits in half",
                  "It lays eggs"
            ],
            "a": 0
      },
      {
            "q": "A virus's size compared to a bacterium?",
            "o": [
                  "A hundred times smaller",
                  "A hundred times bigger",
                  "The same size"
            ],
            "a": 0
      }
],
    "video": "الفيروسات للاطفال",
    "videoEn": "viruses explained for kids"
  },
  {
    "id": "brain",
    "src": "https://en.wikipedia.org/wiki/Brain",
    "emoji": "🧠",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الدماغ",
    "titleEn": "The Brain",
    "ar": "الدماغ شبكة من خلايا عصبية وخلايا داعمة تعالج المعلومات وتنسق الحركة والإحساس ووظائف أخرى. تتعاون مناطق متعددة: يسهم الحصين في تكوين أنواع من الذكريات، والمخيخ في تنسيق الحركة، ومناطق أمامية في التخطيط. لا تختزل وظيفة معقدة مثل الإبداع في نصف واحد من الدماغ. يمكن أن تتغير الاتصالات مع الخبرة والتعلم، وهو جانب من المرونة العصبية، لكن التعلم لا يعتمد على عامل واحد.",
    "en": "The brain is a network of neurons and supporting cells processing information and coordinating movement, sensation and other functions. Regions cooperate: the hippocampus contributes to some kinds of memory, the cerebellum to coordination, and frontal regions to planning. A complex function such as creativity cannot be assigned to only one hemisphere. Connections can change with experience and learning, an aspect of neuroplasticity, but learning does not depend on a single factor.",
    "story": "تخيّل أنك تتعلم مهارة جديدة وتتحسن تدريجياً بالممارسة والراحة. تعمل شبكات ومناطق متعددة، وقد تتغير قوة اتصالاتها. لا نحتاج إلى أسطورة نصف مبدع ونصف منطقي كي نفهم دور الدماغ في التعلم.",
    "storyEn": "Imagine learning a new skill and gradually improving with practice and rest. Many networks and regions work together, and the strength of their connections can change. We do not need the myth of a creative half and a logical half to understand the brain's role in learning.",
    "quiz": [
      {
        "q": "هل الإبداع وظيفة نصف واحد من الدماغ فقط؟",
        "o": [
          "لا، تشارك شبكات ومناطق متعددة",
          "نعم، الأيمن فقط",
          "نعم، الأيسر فقط"
        ],
        "a": 0
      },
      {
        "q": "أي منطقة تصنع الذكريات الجديدة؟",
        "o": [
          "الحصين",
          "المخيخ",
          "اللوزة"
        ],
        "a": 0
      },
      {
        "q": "ما المرونة العصبية؟",
        "o": [
          "تغير وصلات الدماغ بالتعلم",
          "ليونة العظام",
          "سرعة الركض"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Is creativity the job of only one half of the brain?",
            "o": [
                  "No, many networks and regions take part",
                  "Yes, only the right half",
                  "Yes, only the left half"
            ],
            "a": 0
      },
      {
            "q": "Which region makes new memories?",
            "o": [
                  "The hippocampus",
                  "The cerebellum",
                  "The amygdala"
            ],
            "a": 0
      },
      {
            "q": "What is neuroplasticity?",
            "o": [
                  "Brain connections changing with learning",
                  "Flexible bones",
                  "Running speed"
            ],
            "a": 0
      }
],
    "video": "الدماغ للاطفال",
    "videoEn": "the brain for kids"
  },
  {
    "id": "senses",
    "src": "https://en.wikipedia.org/wiki/Sense",
    "emoji": "👁️",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الحواس",
    "titleEn": "The Senses",
    "ar": "تستقبل الحواس معلومات عن الضوء والاهتزاز والمواد الكيميائية والضغط وغير ذلك. إلى جانب الحواس الخمس المشهورة، لدينا إحساس بالتوازن ووضع الأطراف ودرجة الحرارة والألم. تحول المستقبلات المؤثرات إلى إشارات يعالجها الجهاز العصبي. لا ينقل الإحساس نسخة مثالية من العالم؛ تسهم طريقة معالجة الدماغ في أوهام بصرية وإدراكية. عدد الحواس يعتمد على طريقة تصنيفها، فلا توجد قائمة واحدة متفق عليها لكل الأغراض.",
    "en": "Senses receive information about light, vibration, chemicals, pressure and more. Beyond the familiar five, people sense balance, limb position, temperature and pain. Receptors turn stimuli into signals processed by the nervous system. Perception is not a perfect copy of the world; brain processing contributes to visual and other illusions. The number of senses depends on classification, so no single list suits every purpose.",
    "story": "تخيّل خطين متساويين يبدوان مختلفين بسبب ما يحيط بهما في الرسم. المعلومة تصل إلى العين، لكن تفسير السياق يؤثر فيما تدركه. الوهم البصري يتيح دراسة الإدراك، وليس دليلاً أن شخصاً أذكى من آخر.",
    "storyEn": "Imagine two equal lines that look different because of what surrounds them in a drawing. The information reaches the eye, but interpreting the context shapes what you perceive. An optical illusion lets us study perception; it is not proof that one person is smarter than another.",
    "quiz": [
      {
        "q": "أين يقع إحساس التوازن؟",
        "o": [
          "الأذن الداخلية",
          "العين",
          "القدم"
        ],
        "a": 0
      },
      {
        "q": "الخدعة البصرية تكشف؟",
        "o": [
          "ثغرة في تفسير الدماغ",
          "مرضاً في العين",
          "خدعة سحرية"
        ],
        "a": 0
      },
      {
        "q": "أي إحساس يساعدك على معرفة وضع ذراعك دون النظر؟",
        "o": [
          "الإحساس بوضع الأطراف",
          "الذوق",
          "الشم"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Where is the sense of balance located?",
            "o": [
                  "The inner ear",
                  "The eye",
                  "The foot"
            ],
            "a": 0
      },
      {
            "q": "An optical illusion reveals?",
            "o": [
                  "A gap in the brain's interpretation",
                  "An eye disease",
                  "A magic trick"
            ],
            "a": 0
      },
      {
            "q": "Which sense tells you where your arm is without looking?",
            "o": [
                  "Proprioception (body position sense)",
                  "Taste",
                  "Smell"
            ],
            "a": 0
      }
],
    "video": "الحواس الخمس للاطفال",
    "videoEn": "the five senses for kids"
  },
  {
    "id": "endocrine",
    "src": "https://en.wikipedia.org/wiki/Endocrine_system",
    "emoji": "📣",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الهرمونات والغدد الصماء",
    "titleEn": "Hormones & Endocrine",
    "ar": "الهرمونات رسائل كيميائية تطلقها غدد وخلايا، ويمكن أن تنتقل في الدم إلى خلايا هدف تملك مستقبلاتها. تسهم النخامية والدرقية والكظرية والبنكرياس في شبكات تنظم النمو والأيض والاستجابة للإجهاد وسكر الدم. الإنسولين مثلاً يساعد على ضبط سكر الدم. تختلف سرعة التأثير ومدته بين الهرمونات، ولا تعني كلمة هرمون أن تأثيره بطيء دائماً. لا نشخص اضطراباً هرمونياً من عرض واحد.",
    "en": "Hormones are chemical messages released by glands and cells, and can travel in blood to target cells with suitable receptors. The pituitary, thyroid, adrenals and pancreas contribute to networks regulating growth, metabolism, stress responses and blood glucose. Insulin, for example, helps regulate blood glucose. Speed and duration vary by hormone; hormonal effects are not always slow. One symptom alone cannot diagnose a hormone disorder.",
    "story": "تخيّل رسالة كيميائية تسير في الدم، لكن خلايا معينة فقط تملك مستقبلها المناسب. تصل الرسالة إلى أماكن كثيرة ولا تستجيب كلها بالطريقة نفسها. هكذا نفهم أن وجود الهرمون وحده ليس كل القصة.",
    "storyEn": "Imagine a chemical message traveling in the blood, but only certain cells have its matching receptor. The message reaches many places and not all of them respond the same way. That is how we understand that the presence of a hormone alone is not the whole story.",
    "quiz": [
      {
        "q": "أي غدة تسمى قائد الأوركسترا؟",
        "o": [
          "النخامية",
          "الدرقية",
          "الكظرية"
        ],
        "a": 0
      },
      {
        "q": "ما وظيفة الإنسولين؟",
        "o": [
          "ضبط سكر الدم",
          "هضم الدهون",
          "تقوية العظام"
        ],
        "a": 0
      },
      {
        "q": "كيف تنتقل الهرمونات في الجسم؟",
        "o": [
          "عبر الدم",
          "عبر الأعصاب",
          "عبر العظام"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Which gland is called the orchestra conductor?",
            "o": [
                  "The pituitary",
                  "The thyroid",
                  "The adrenal"
            ],
            "a": 0
      },
      {
            "q": "What does insulin do?",
            "o": [
                  "Regulates blood sugar",
                  "Digests fats",
                  "Strengthens bones"
            ],
            "a": 0
      },
      {
            "q": "How do hormones travel in the body?",
            "o": [
                  "Through the blood",
                  "Through the nerves",
                  "Through the bones"
            ],
            "a": 0
      }
],
    "video": "الهرمونات للاطفال",
    "videoEn": "hormones and endocrine system for kids"
  },
  {
    "id": "pollination",
    "src": "https://en.wikipedia.org/wiki/Pollination",
    "emoji": "🌸",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "التلقيح في النباتات",
    "titleEn": "Pollination",
    "ar": "التلقيح انتقال حبوب اللقاح إلى الجزء المستقبل لها في النبات؛ في النباتات الزهرية يكون عادة من المتك إلى الميسم. قد تنقلها حشرات أو طيور أو حيوانات أخرى، أو الرياح، بحسب النبات. ليس التلقيح هو الإخصاب نفسه، لكنه خطوة تساعد على حدوثه وتكوين البذور. قد تجذب ألوان الأزهار وروائحها الملقحات، بينما يعتمد القمح مثلاً على الرياح. تنوع طرق التلقيح يربط تكاثر النبات ببيئته.",
    "en": "Pollination is pollen transfer to a receptive plant structure; in flowering plants it is usually from anther to stigma. Insects, birds, other animals or wind may carry it, depending on the plant. Pollination is not fertilization itself, but helps make fertilization and seed formation possible. Flower colors and scents may attract pollinators, while wheat relies on wind. Different pollination methods link plant reproduction with the environment.",
    "story": "تخيّل نحلة تجمع غذاء من زهرة فيلتصق بها لقاح ثم يصل بعضه إلى زهرة مناسبة. قد يساعد ذلك على التكاثر، بينما نبات آخر يعتمد على الرياح. ليست كل زهرة محتاجة إلى نفس الحيوان أو نفس الطريقة.",
    "storyEn": "Imagine a bee collecting food from a flower; pollen sticks to it and some reaches a suitable flower. That can help reproduction, while another plant relies on the wind. Not every flower needs the same animal or the same method.",
    "quiz": [
      {
        "q": "ما وظيفة النحل في الزهرة؟",
        "o": [
          "نقل حبوب اللقاح",
          "أكل الأوراق",
          "سقي الجذور"
        ],
        "a": 0
      },
      {
        "q": "لماذا ألوان الأزهار زاهية؟",
        "o": [
          "لجذب الملقحات",
          "للتدفئة",
          "للزينة فقط"
        ],
        "a": 0
      },
      {
        "q": "ماذا يلقح القمح؟",
        "o": [
          "الرياح",
          "النحل فقط",
          "الأمطار"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What does the bee do for the flower?",
            "o": [
                  "Carries pollen",
                  "Eats the leaves",
                  "Waters the roots"
            ],
            "a": 0
      },
      {
            "q": "Why are flower colors bright?",
            "o": [
                  "To attract pollinators",
                  "For warmth",
                  "For decoration only"
            ],
            "a": 0
      },
      {
            "q": "What pollinates wheat?",
            "o": [
                  "The wind",
                  "Only bees",
                  "Rain"
            ],
            "a": 0
      }
],
    "video": "التلقيح والنحل للاطفال",
    "videoEn": "pollination and bees for kids"
  },
  {
    "id": "skin",
    "src": "https://en.wikipedia.org/wiki/Skin",
    "emoji": "🖐️",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الجلد",
    "titleEn": "Skin",
    "ar": "جلدك أكبر عضو في جسمك: مساحته نحو مترين مربعين ووزنه 4 كجم، وهو درع متعدد الطبقات يعمل بلا توقف. البشرة الخارجية تتجدد كل شهر تقريباً (تفقد نصف مليون خلية ميتة كل يوم دون أن تشعر)، والأدمة تحتها فيها الأعصاب والغدد العرقية وبصماتك الفريدة، والطبقة الدهنية عازل حراري ومخزن طاقة. الجلد يحمي من الجراثيم، وينظم حرارتك بالتعرق، ويصنع فيتامين د من الشمس، ويلتئم ذاتياً بعد الجروح - لهذا نقول إن الجلد أول خطوط المناعة.",
    "en": "Your skin is your largest organ: about two square meters weighing 4 kg, a multi-layered shield working nonstop. The outer epidermis renews itself roughly every month (you shed half a million dead cells daily without noticing), the dermis beneath holds nerves, sweat glands and your unique fingerprints, and the fat layer insulates and stores energy. Skin guards against germs, regulates your temperature by sweating, makes vitamin D from sunlight, and heals itself after wounds - which is why skin is called the first line of immunity.",
    "story": "تخيّل طبقات الجلد في مقطع مكبر: حاجز خارجي وطبقة بها أوعية وأعصاب وغدد وأنسجة أسفلها. قد تؤدي إصابة واحدة إلى التأثير في الحماية والإحساس وتنظيم الحرارة معاً، لأن الوظائف مترابطة.",
    "storyEn": "Imagine the layers of skin in a magnified section: an outer barrier, a layer with vessels, nerves and glands, and tissue underneath. One injury can affect protection, sensation and temperature regulation together, because the functions are connected.",
    "quiz": [
      {
        "q": "كم مساحة الجلد تقريباً؟",
        "o": [
          "متران مربعان",
          "20 سم",
          "20 متراً مربعاً"
        ],
        "a": 0
      },
      {
        "q": "ما وظيفة العرق؟",
        "o": [
          "تبريد الجسم",
          "تلوين الجلد",
          "تخزين الدهون"
        ],
        "a": 0
      },
      {
        "q": "أي فيتامين يصنعه الجلد بالشمس؟",
        "o": [
          "فيتامين د",
          "فيتامين ج",
          "فيتامين ب12"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "About how large is the skin's area?",
            "o": [
                  "Two square meters",
                  "20 cm",
                  "20 square meters"
            ],
            "a": 0
      },
      {
            "q": "What does sweat do?",
            "o": [
                  "Cools the body",
                  "Colors the skin",
                  "Stores fat"
            ],
            "a": 0
      },
      {
            "q": "Which vitamin does skin make with sunlight?",
            "o": [
                  "Vitamin D",
                  "Vitamin C",
                  "Vitamin B12"
            ],
            "a": 0
      }
],
    "video": "الجلد للاطفال",
    "videoEn": "skin layers and functions for kids"
  },
  {
    "id": "circulation",
    "src": "https://en.wikipedia.org/wiki/Circulatory_system",
    "emoji": "🫀",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الدورة الدموية",
    "titleEn": "Circulation",
    "ar": "القلب والأوعية والدم تشكل شبكة نقل في الجسم. الشرايين تنقل الدم بعيداً عن القلب، والأوردة تعيده إليه؛ لا نعرفها بنسبة الأكسجين وحدها. في الدورة الرئوية يذهب الدم إلى الرئتين لتبادل الغازات، وفي الدورة الجهازية يذهب إلى أنسجة الجسم. توفر الشعيرات الدموية سطوحاً رقيقة لتبادل مواد بين الدم والأنسجة. في الدورة الرئوية تحمل الشرايين عادة دماً أقل أكسجيناً من الأوردة.",
    "en": "The heart, vessels and blood form a transport network. Arteries carry blood away from the heart and veins return it; oxygen content alone does not define them. Pulmonary circulation carries blood to the lungs for gas exchange, while systemic circulation supplies body tissues. Thin capillary surfaces allow exchange between blood and tissues. In pulmonary circulation, arteries normally carry less oxygenated blood than veins.",
    "story": "تخيّل قطرة دم تسير من القلب إلى الرئتين ثم تعود إليه، وبعدها تنتقل إلى أنسجة الجسم. اتجاهها بالنسبة إلى القلب يحدد هل الوعاء شريان أم وريد، وليس مقدار الأكسجين وحده.",
    "storyEn": "Imagine a drop of blood traveling from the heart to the lungs and back, then moving on to the body's tissues. Its direction relative to the heart decides whether a vessel is an artery or a vein, not the amount of oxygen alone.",
    "quiz": [
      {
        "q": "أين يتبادل الدم الأكسجين مع الخلايا؟",
        "o": [
          "الشعيرات الدموية",
          "الشرايين الكبيرة",
          "القلب"
        ],
        "a": 0
      },
      {
        "q": "ما الذي يميز الشريان عن الوريد؟",
        "o": [
          "اتجاه الدم بالنسبة إلى القلب",
          "لون الجلد",
          "قطره وحده"
        ],
        "a": 0
      },
      {
        "q": "إلى أين تنقل الدورة الرئوية الدم؟",
        "o": [
          "الرئتين",
          "العظام فقط",
          "الجلد فقط"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Where does blood exchange oxygen with the cells?",
            "o": [
                  "The capillaries",
                  "The large arteries",
                  "The heart"
            ],
            "a": 0
      },
      {
            "q": "What distinguishes an artery from a vein?",
            "o": [
                  "The blood's direction relative to the heart",
                  "Skin color",
                  "Its diameter alone"
            ],
            "a": 0
      },
      {
            "q": "Where does the pulmonary circuit carry blood?",
            "o": [
                  "The lungs",
                  "Only the bones",
                  "Only the skin"
            ],
            "a": 0
      }
],
    "video": "الدورة الدموية للاطفال",
    "videoEn": "circulatory system for kids"
  },
  {
    "id": "microbiome",
    "src": "https://en.wikipedia.org/wiki/Microbiota",
    "emoji": "🦠",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "ميكروبيوم الجسم",
    "titleEn": "The Microbiome",
    "ar": "تعيش مجتمعات من الميكروبات على الجسم وداخله، وتسمى الكائنات نفسها ميكروبيوتا، ويستخدم مصطلح ميكروبيوم لوصفها مع مادتها الوراثية أو بيئتها بحسب السياق. تسهم بعض ميكروبات الأمعاء في تفكيك مكونات غذائية وتكوين نواتج تؤثر في الجسم. تختلف هذه المجتمعات بين الأشخاص وتتغير بالغذاء والعمر وعوامل أخرى. العلاقة بين الميكروبات والصحة معقدة، ولا تكفي معرفة نوع واحد لتشخيص مرض أو اختيار علاج.",
    "en": "Microbial communities live on and within the body. Microbiota refers to the organisms; microbiome may include their genetic material or environment, depending on context. Some gut microbes help break down food components and make products that affect the body. Communities differ between people and change with diet, age and other factors. Their links to health are complex; one microbial finding alone cannot diagnose illness or select treatment.",
    "story": "تخيّل مجتمعاً من الميكروبات يتغير الغذاء المتاح له. قد تتغير نسب الأنواع ونواتجها، لكن لا نستنتج من ذلك وصفة واحدة صالحة لكل شخص. دراسة الميكروبيوم تربط بين المجتمع والبيئة والجسم.",
    "storyEn": "Imagine a community of microbes whose available food changes. The proportions of species and their products may change, but we cannot conclude one recipe that works for every person. Microbiome research connects the community, the environment and the body.",
    "quiz": [
      {
        "q": "أين يعيش معظم ميكروبيوم الجسم؟",
        "o": [
          "الأمعاء",
          "الجلد",
          "الفم"
        ],
        "a": 0
      },
      {
        "q": "هل الميكروبيوم متطابق عند كل الناس؟",
        "o": [
          "لا، يختلف ويتغير بعوامل كثيرة",
          "نعم تماماً",
          "لا يتأثر بالغذاء"
        ],
        "a": 0
      },
      {
        "q": "ما أحب طعام للميكروبيوم؟",
        "o": [
          "الألياف النباتية",
          "السكر الصافي",
          "المضادات الحيوية"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Where does most of the body's microbiome live?",
            "o": [
                  "The gut",
                  "The skin",
                  "The mouth"
            ],
            "a": 0
      },
      {
            "q": "Is the microbiome identical in all people?",
            "o": [
                  "No, it differs and changes with many factors",
                  "Yes, exactly",
                  "It is unaffected by food"
            ],
            "a": 0
      },
      {
            "q": "What is the microbiome's favorite food?",
            "o": [
                  "Plant fiber",
                  "Pure sugar",
                  "Antibiotics"
            ],
            "a": 0
      }
],
    "video": "ميكروبيوم الأمعاء للاطفال",
    "videoEn": "gut microbiome for kids"
  },
  {
    "id": "fungi",
    "src": "https://en.wikipedia.org/wiki/Fungus",
    "emoji": "🍄",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الفطريات",
    "titleEn": "Fungi",
    "ar": "الفطريات كائنات حقيقية النواة تختلف عن النباتات والحيوانات. لا تبني غذاءها بالبناء الضوئي، بل تمتص مغذيات، وكثير منها يفرز إنزيمات لهضم المواد خارجياً. تتكون أجسام فطريات كثيرة من خيوط تنشئ شبكة اسمها الميسيليوم، والمشروم جسم ثمري ينتج أبواغاً وليس زهرة نباتية. بعض الفطريات محللات، وبعضها يعيش في شراكات، وبعضها يسبب أمراضاً. الخميرة أيضاً من الفطريات رغم أنها وحيدة الخلية.",
    "en": "Fungi are eukaryotes distinct from plants and animals. They do not photosynthesize; they absorb nutrients, often after releasing enzymes for external digestion. Many grow as threads forming a network called mycelium; a mushroom is a spore-producing fruiting body, not a plant flower. Some fungi decompose material, some form partnerships and some cause disease. Yeasts are fungi too, even though they are single-celled.",
    "story": "تخيّل شبكة خيوط فطرية داخل مادة عضوية وجسماً ثمرياً يظهر فوقها. الجزء الظاهر ليس النبات كله ولا زهرة؛ إنه جزء يرتبط بإنتاج الأبواغ، بينما تمتد خيوط كثيرة في الوسط.",
    "storyEn": "Imagine a network of fungal threads inside organic matter, with a fruiting body appearing above it. The visible part is not a whole plant and not a flower; it is a part linked to producing spores, while many threads spread through the medium.",
    "quiz": [
      {
        "q": "كيف تأكل الفطريات؟",
        "o": [
          "تهضم خارجياً ثم تمتص",
          "بالبناء الضوئي",
          "بالافتراس"
        ],
        "a": 0
      },
      {
        "q": "ما الميسيليوم؟",
        "o": [
          "شبكة خيوط الفطر تحت الأرض",
          "نوع من العفن السام",
          "جذر النبات"
        ],
        "a": 0
      },
      {
        "q": "هل المشروم زهرة نباتية؟",
        "o": [
          "لا، هو جسم ثمري فطري",
          "نعم دائماً",
          "هو جذر شجرة"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "How do fungi eat?",
            "o": [
                  "They digest externally then absorb",
                  "By photosynthesis",
                  "By hunting"
            ],
            "a": 0
      },
      {
            "q": "What is mycelium?",
            "o": [
                  "The network of fungal threads underground",
                  "A kind of toxic mold",
                  "A plant root"
            ],
            "a": 0
      },
      {
            "q": "Is a mushroom a plant flower?",
            "o": [
                  "No, it is a fungal fruiting body",
                  "Yes, always",
                  "It is a tree root"
            ],
            "a": 0
      }
],
    "video": "الفطريات للاطفال",
    "videoEn": "fungi for kids"
  },
  {
    "id": "plants",
    "src": "https://en.wikipedia.org/wiki/Plant",
    "emoji": "🌱",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "بنية النبات",
    "titleEn": "Plant Structure",
    "ar": "النبات مصنع مقلوب: جذوره تحت الأرض تثبته وتمتص الماء والأملاح بشعيرات جذرية تزيد مساحة الامتصاص مئات المرات، وساقه عمود نقل فيه أوعية خشب تصعد الماء من الجذر إلى أعلى ورقة بلا مضخة - بل بسحب التبخر من الأوراق، وأوعية لحاء توزع السكر المصنوع. أما الورقة فهي المطبخ: سطح عريض أخضر لالتقاط الضوء، وثغور صغيرة تحتها تتنفس وتتحكم في الماء. أطول الأشجار تصعد الماء فيها 100 متر بقوة التبخر وحده.",
    "en": "A plant is an upside-down factory: roots underground anchor it and absorb water and minerals through root hairs multiplying the absorption area hundreds of times; the stem is a transport column with xylem vessels lifting water from root to top leaf with no pump - pulled by evaporation from leaves - and phloem vessels distributing the sugar made. The leaf is the kitchen: a wide green surface catching light, with tiny stomata underneath that breathe and control water. The tallest trees lift water 100 meters by evaporation power alone.",
    "story": "تخيّل مسارين في النبات: أوعية خشب تحمل الماء، ولحاء ينقل سكريات بين مناطق المصدر والاستخدام. قد لا يذهبان في الاتجاه نفسه في كل جزء. يساعدنا الفصل بين المسارين على فهم التغذية والنقل.",
    "storyEn": "Imagine two routes in a plant: xylem vessels carrying water, and phloem moving sugars between source and use areas. They may not go the same direction in every part. Separating the two routes helps us understand nutrition and transport.",
    "quiz": [
      {
        "q": "كيف يصعد الماء إلى أعلى الشجرة؟",
        "o": [
          "بسحب التبخر من الأوراق",
          "بمضخة في الجذر",
          "بالجاذبية"
        ],
        "a": 0
      },
      {
        "q": "ما وظيفة الثغور؟",
        "o": [
          "التنفس وتنظيم الماء",
          "امتصاص الضوء",
          "تخزين السكر"
        ],
        "a": 0
      },
      {
        "q": "ما دور أوعية الخشب؟",
        "o": [
          "نقل الماء والأملاح",
          "تكوين أسنان",
          "إنتاج حبوب لقاح فقط"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "How does water rise to the top of a tree?",
            "o": [
                  "Pulled by evaporation from the leaves",
                  "By a pump in the root",
                  "By gravity"
            ],
            "a": 0
      },
      {
            "q": "What do stomata do?",
            "o": [
                  "Gas exchange and water regulation",
                  "Absorbing light",
                  "Storing sugar"
            ],
            "a": 0
      },
      {
            "q": "What is the role of xylem vessels?",
            "o": [
                  "Carrying water and salts",
                  "Forming teeth",
                  "Only producing pollen"
            ],
            "a": 0
      }
],
    "video": "أجزاء النبات للاطفال",
    "videoEn": "parts of a plant for kids"
  },
  {
    "id": "protein",
    "src": "https://en.wikipedia.org/wiki/Protein_biosynthesis",
    "emoji": "🏭",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "صناعة البروتين",
    "titleEn": "Protein Synthesis",
    "ar": "بناء بروتين واحد في خليتك أشبه بخط إنتاج منظم: الـ DNA في النواة يحفظ الوصفة الأصلية، فتنسخها إنزيمات إلى رسالة متنقلة اسمها mRNA تخرج إلى الريبوسوم - ماكينة التصنيع - الذي يقرأ الرسالة ثلاثة أحرف بثلاثة (كودون) ويستدعي لالكودونات التي تحدد أحماضاً أمينية ينقله الـ tRNA، فتتسلسل الأحماض كخرز العقد ثم تطوى السلسلة بشكل ثلاثي الأبعاد يحدد وظيفتها. خطأ حرف واحد قد يغير البروتين كله - هكذا يسبب جين واحد فقر الدم المنجلي.",
    "en": "Building one protein in your cell is like an organized production line: DNA in the nucleus keeps the master recipe, enzymes copy it into a mobile message called mRNA that travels to the ribosome - the manufacturing machine - which reads the message three letters at a time (codons) and uses tRNA to bring amino acids specified by the codons; some codons instead signal a stop; the acids chain like beads on a necklace, then the chain folds into a 3D shape that sets its function. A one-letter error can change the whole protein - that is how a single gene causes sickle cell anemia.",
    "story": "تخيّل ريبوسوماً يقرأ رسالة mRNA ثلاثة أحرف كل مرة. تحدد كودونات كثيرة أحماضاً أمينية، وتعمل كودونات أخرى كإشارة توقف. يتكون بروتين يحتاج أيضاً إلى طي ومعالجة مناسبة ليؤدي وظيفته.",
    "storyEn": "Imagine a ribosome reading an mRNA message three letters at a time. Many codons specify amino acids, while other codons act as a stop signal. The resulting protein also needs proper folding and processing to do its job.",
    "quiz": [
      {
        "q": "أين يُصنع البروتين؟",
        "o": [
          "الريبوسوم",
          "النواة",
          "الميتوكوندريا"
        ],
        "a": 0
      },
      {
        "q": "ما الكودون؟",
        "o": [
          "ثلاثة أحرف تقرأ حمضاً أمينياً",
          "نوع من الخلايا",
          "إنزيم هضم"
        ],
        "a": 0
      },
      {
        "q": "ماذا يحدد وظيفة البروتين؟",
        "o": [
          "طيه ثلاثي الأبعاد",
          "لونه",
          "حجم الخلية"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Where is protein made?",
            "o": [
                  "The ribosome",
                  "The nucleus",
                  "The mitochondria"
            ],
            "a": 0
      },
      {
            "q": "What is a codon?",
            "o": [
                  "Three letters read as an amino acid",
                  "A type of cell",
                  "A digestive enzyme"
            ],
            "a": 0
      },
      {
            "q": "What determines a protein's function?",
            "o": [
                  "Its 3D folding",
                  "Its color",
                  "The cell's size"
            ],
            "a": 0
      }
],
    "video": "صناعة البروتين للاطفال",
    "videoEn": "protein synthesis for kids"
  },
  {
    "id": "neurons",
    "src": "https://en.wikipedia.org/wiki/Neuron",
    "emoji": "🔌",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الخلايا العصبية والمشابك",
    "titleEn": "Neurons & Synapses",
    "ar": "الخلية العصبية سلك حي: التغصنات تستقبل الإشارات، وجسم الخلية يجمعها ويقرر، والمحور - الذي قد يبلغ متراً في أعصاب ساقك - ينقل الشرارة الكهربائية بسرعة تصل 400 كم/ساعة، وغلاف الميالين حوله عازل يسرّع الإشارة كالبلاستيك حول الأسلاك. بين خلية وأختها فجوة اسمها المشبك لا يلمس فيها أحد أحداً: تُطلق ناقلات كيميائية كالدوبامين والسيروتونين تعبر الفجوة في أجزاء الألف من الثانية. التعلم هو تقوية مشابك تستخدمها كثيراً وإضعاف ما تهمله.",
    "en": "A neuron is a living wire: dendrites receive signals, the cell body sums and decides, and the axon - up to a meter long in your leg nerves - carries the electrical spark at up to 400 km/h, with a myelin sheath around it insulating and speeding the signal like plastic on wires. Between one cell and the next is a gap called the synapse where nobody touches anybody: chemical messengers like dopamine and serotonin cross the gap in thousandths of a second. Learning is strengthening synapses you use often and weakening the ones you neglect.",
    "story": "تخيّل إشارة تسير على محور خلية عصبية ثم تؤدي إلى إطلاق ناقل كيميائي عند مشبك. تستجيب الخلية التالية بحسب مستقبلاتها ومدخلات أخرى. هذا مثال لمشبك كيميائي؛ توجد أيضاً أنواع أخرى من الاتصال العصبي.",
    "storyEn": "Imagine a signal traveling along a neuron's axon and leading to the release of a chemical messenger at a synapse. The next cell responds according to its receptors and other inputs. This is an example of a chemical synapse; other kinds of neural connection also exist.",
    "quiz": [
      {
        "q": "ما وظيفة غلاف الميالين؟",
        "o": [
          "عزل وتسريع الإشارة",
          "تغذية الخلية",
          "صنع الدم"
        ],
        "a": 0
      },
      {
        "q": "كيف تعبر الإشارة المشبك؟",
        "o": [
          "بناقلات كيميائية",
          "بسلك نحاسي",
          "بلمس مباشر"
        ],
        "a": 0
      },
      {
        "q": "ماذا يحدث للمشابك عند التعلم؟",
        "o": [
          "تقوى المستخدمة منها",
          "تختفي كلها",
          "تتحول لعظام"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What does the myelin sheath do?",
            "o": [
                  "Insulates and speeds up the signal",
                  "Feeds the cell",
                  "Makes blood"
            ],
            "a": 0
      },
      {
            "q": "How does the signal cross the synapse?",
            "o": [
                  "By chemical messengers",
                  "By a copper wire",
                  "By direct touch"
            ],
            "a": 0
      },
      {
            "q": "What happens to synapses when we learn?",
            "o": [
                  "The used ones get stronger",
                  "They all disappear",
                  "They turn into bones"
            ],
            "a": 0
      }
],
    "video": "الخلية العصبية للاطفال",
    "videoEn": "neurons and synapses for kids"
  },
  {
    "id": "sleep",
    "src": "https://en.wikipedia.org/wiki/Sleep",
    "emoji": "😴",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "علم النوم",
    "titleEn": "The Science of Sleep",
    "ar": "النوم ليس إطفاءً للجسم بل وردية صيانة ليلية: تمر خلاله بمراحل تتكرر 4-5 مرات كل ليلة. النوم العميق يفرز فيه هرمون النمو ويصلح الأنسجة، ونوم حركة العين السريعة (REM) يرتب الذكريات ويحلم فيه دماغك. وأثناء نومك يفتح الدماغ قنوات غسل يجري فيها سائل ينظفه من فضلات اليوم بما فيها بروتينات مرتبطة بالزهايمر. المراهق يحتاج 8-10 ساعات لأن دماغه يُعاد بناؤه، والسهر المزمن يضعف الذاكرة والمناعة والمزاج - النوم مجاني ولا بديل عنه.",
    "en": "Sleep is not switching the body off but a nightly maintenance shift with stages repeating 4-5 times. Deep sleep releases growth hormone and repairs tissues; REM sleep organizes memories and hosts your dreams. While you sleep, the brain opens washing channels where fluid flushes out the day waste, including proteins linked to Alzheimer. A teen needs 8-10 hours because their brain is being rebuilt; chronic sleeplessness weakens memory, immunity and mood - sleep is free and has no substitute.",
    "story": "تخيّل تسجيلاً للنوم تتبدل فيه أنماط النشاط عبر مراحل متكررة. النوم ليس توقفاً تاماً للدماغ. يختلف طول المراحل وعدد الدورات بين الليالي والأشخاص، ولا نحتاج إلى تحدي الحرمان من النوم لفهم أهميته.",
    "storyEn": "Imagine a sleep recording where activity patterns shift through repeating stages. Sleep is not a complete shutdown of the brain. Stage lengths and cycle counts differ between nights and people, and we do not need sleep-deprivation challenges to understand its importance.",
    "quiz": [
      {
        "q": "في أي مرحلة نحلم غالباً؟",
        "o": [
          "نوم REM",
          "النوم العميق",
          "الاستيقاظ"
        ],
        "a": 0
      },
      {
        "q": "متى يفرز هرمون النمو غالباً؟",
        "o": [
          "النوم العميق",
          "الأكل",
          "الرياضة"
        ],
        "a": 0
      },
      {
        "q": "كم يحتاج المراهق من النوم؟",
        "o": [
          "8-10 ساعات",
          "4 ساعات",
          "12 ساعة نهاراً"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "In which stage do we usually dream?",
            "o": [
                  "REM sleep",
                  "Deep sleep",
                  "Being awake"
            ],
            "a": 0
      },
      {
            "q": "When is growth hormone mostly released?",
            "o": [
                  "Deep sleep",
                  "Eating",
                  "Exercise"
            ],
            "a": 0
      },
      {
            "q": "How much sleep does a teenager need?",
            "o": [
                  "8-10 hours",
                  "4 hours",
                  "12 daytime hours"
            ],
            "a": 0
      }
],
    "video": "لماذا ننام للاطفال",
    "videoEn": "why do we sleep for kids"
  },
  {
    "id": "allergy",
    "src": "https://en.wikipedia.org/wiki/Allergy",
    "emoji": "🤧",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الحساسية",
    "titleEn": "Allergy",
    "ar": "الحساسية هي جهازك المناعي حين يخطئ الهدف: يتعامل مع غبار اللقاح أو الفول السوداني أو الغبار كأنها غزاة خطرون، فيطلق الهيستامين الذي يسبب العطاس والحكة والدموع والطفح. الأعراض المزعجة ليست من المادة نفسها بل من هجوم مناعتك المبالغ فيه - إنذار كاذب بصوت عالٍ. في الحالات الشديدة قد يتسبب الهجوم في صدمة تأقية خطيرة تحتاج إسعافاً فورياً. العلم لا يعرف يقيناً لماذا تزيد الحساسيات في العصر الحديث، لكن نظرية النظافة ترجح أن الإفراط في التعقيم حرم مناعة الأطفال من تدريبها الطبيعي.",
    "en": "Allergy is your immune system aiming at the wrong target: it treats pollen, peanuts or dust like dangerous invaders and releases histamine, which causes sneezing, itching, tears and rashes. The annoying symptoms come not from the substance itself but from your immune system overreaction - a false alarm at full volume. In severe cases the attack can cause dangerous anaphylactic shock needing immediate care. Science does not know for certain why allergies are rising in the modern era, but the hygiene hypothesis suggests over-sterilization robbed children immunity of its natural training.",
    "story": "تخيّل شخصين يتعرضان لنفس حبوب اللقاح، فتظهر أعراض حساسية عند أحدهما دون الآخر. لا يعني هذا أن الأعراض خيال؛ طريقة الاستجابة المناعية تختلف. الأعراض الشديدة أو صعوبة التنفس تتطلب مساعدة طبية، لا اختباراً منزلياً للمسبب.",
    "storyEn": "Imagine two people exposed to the same pollen; one gets allergy symptoms and the other does not. That does not mean the symptoms are imaginary; immune responses differ. Severe symptoms or trouble breathing need medical help, not a home experiment with the trigger.",
    "quiz": [
      {
        "q": "ما المادة التي تسبب أعراض الحساسية؟",
        "o": [
          "الهيستامين",
          "الإنسولين",
          "الأدرينالين"
        ],
        "a": 0
      },
      {
        "q": "سبب أعراض الحساسية هو؟",
        "o": [
          "هجوم مناعي مبالغ فيه",
          "سم قاتل في الغبار",
          "نقص الفيتامينات"
        ],
        "a": 0
      },
      {
        "q": "ما نظرية النظافة؟",
        "o": [
          "الإفراط في التعقيم يحرم المناعة من التدريب",
          "النظافة تسبب المرض مباشرة",
          "الغسيل يسبب الحساسية"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Which substance causes allergy symptoms?",
            "o": [
                  "Histamine",
                  "Insulin",
                  "Adrenaline"
            ],
            "a": 0
      },
      {
            "q": "Allergy symptoms are caused by?",
            "o": [
                  "An exaggerated immune attack",
                  "A deadly poison in dust",
                  "Vitamin deficiency"
            ],
            "a": 0
      },
      {
            "q": "What is the hygiene hypothesis?",
            "o": [
                  "Excess sanitizing deprives the immune system of training",
                  "Cleanliness directly causes disease",
                  "Washing causes allergies"
            ],
            "a": 0
      }
],
    "video": "الحساسية للاطفال",
    "videoEn": "allergies explained for kids"
  },
  {
    "id": "teeth",
    "src": "https://en.wikipedia.org/wiki/Tooth",
    "emoji": "🦷",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الأسنان",
    "titleEn": "Teeth",
    "ar": "أسنانك أصلب ما في جسمك: المينا الخارجية أقسى من العظم، وتحتها العاج ثم اللب الحي بالأعصاب والأوعية. ترث مجموعتين في العمر: 20 سناً لبنية تبدأ بالسقوط في السادسة، ثم 32 دائمة تبقى معك - لذلك العناية بها عمرها طويل. التسوس قصة كيمياء: بكتيريا الفم تأكل السكر وتفرز حمضاً يذيب المينا شيئاً فشيئاً حتى يصل اللب فيؤلم. الفلورايد يقوي المينا، والفرشاة تكسر غشاء البكتيريا اللزج، وأضراسك مبنية للطحن وأنيابك للقطع - كل سن بشكل مهمته.",
    "en": "Your teeth are the hardest part of your body: the outer enamel is tougher than bone, with dentin beneath, then living pulp with nerves and vessels. You inherit two sets in life: 20 baby teeth that start falling at age six, then 32 permanent ones that stay - which is why caring for them is lifelong. Tooth decay is a chemistry story: mouth bacteria eat sugar and secrete acid that dissolves enamel bit by bit until it reaches the pulp and hurts. Fluoride strengthens enamel, the brush breaks the sticky bacterial film, and your molars are built for grinding while canines tear - every tooth shaped for its job.",
    "story": "تخيّل طبقة لويحة على السن تستعمل بكتيريا فيها سكريات وتنتج أحماضاً. إذا غلب فقد المعادن استعادتها قد يبدأ التسوس. الفكرة تربط بين المينا واللويحة والسلوك اليومي بدلاً من اعتبار الألم أول علامة لازمة دائماً.",
    "storyEn": "Imagine a layer of plaque on a tooth whose bacteria use sugars and produce acids. If mineral loss keeps outrunning mineral recovery, decay can begin. The idea connects enamel, plaque and daily habits, instead of treating pain as always the first necessary sign.",
    "quiz": [
      {
        "q": "ما أصلب مادة في جسمك؟",
        "o": [
          "مينا الأسنان",
          "العظام",
          "الأظافر"
        ],
        "a": 0
      },
      {
        "q": "ما سبب التسوس المباشر؟",
        "o": [
          "حمض تفرزه بكتيريا تأكل السكر",
          "السكر يذيب السن مباشرة",
          "الفرشاة القوية"
        ],
        "a": 0
      },
      {
        "q": "كم عدد الأسنان الدائمة؟",
        "o": [
          "32",
          "20",
          "28"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What is the hardest substance in your body?",
            "o": [
                  "Tooth enamel",
                  "Bones",
                  "Nails"
            ],
            "a": 0
      },
      {
            "q": "What is the direct cause of tooth decay?",
            "o": [
                  "Acid secreted by sugar-eating bacteria",
                  "Sugar dissolving the tooth directly",
                  "Hard brushing"
            ],
            "a": 0
      },
      {
            "q": "How many permanent teeth are there?",
            "o": [
                  "32",
                  "20",
                  "28"
            ],
            "a": 0
      }
],
    "video": "الأسنان للاطفال",
    "videoEn": "teeth for kids"
  },
  {
    "id": "homeostasis",
    "src": "https://en.wikipedia.org/wiki/Homeostasis",
    "emoji": "⚖️",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الاتزان الداخلي",
    "titleEn": "Homeostasis",
    "ar": "جسمك مدينة مكيفة ذاتياً اسمها الاتزان الداخلي: حرارتك تثبت قرب 37 درجة مهما كان الجو خارجاً، وسكر دمك يثبت في نطاق ضيق، وملحك وماؤك وضغطك كلها مضبوطة بأنظمة تغذية راجعة تعمل بلا توقف. المبدأ واحد: حساس يقيس، ومركز تحكم (غالباً في الدماغ أو الغدد) يقارن بالمطلوب، وأدوات تنفيذ تصحح الانحراف - تعرق إن ارتفعت الحرارة وارتعش إن انخفضت، يفرز الإنسولين إن زاد السكر. المرض كثيراً ما يكون اختلالاً في هذا الاتزان، والطب الحديث كثيراً ما يعيد ضبطه.",
    "en": "Your body is a self-air-conditioned city called homeostasis: your temperature holds near 37 degrees whatever the weather, your blood sugar stays in a narrow band, and your salt, water and pressure are all tuned by feedback systems working nonstop. The principle is one: a sensor measures, a control center (usually brain or glands) compares it to the target, and effectors correct the drift - sweat if too hot, shiver if too cold, release insulin if sugar rises. Disease is often a break in this balance, and modern medicine often works by resetting it.",
    "story": "تخيّل درجة حرارة ترتفع فيستجيب الجسم بآليات منها التعرق وتغير تدفق الدم للجلد. الاستجابة تتأثر بالظروف ولا تحافظ على رقم واحد بالضبط. الاتزان الداخلي تنظيم ضمن مجال، لا تجميد لكل القيم.",
    "storyEn": "Imagine body temperature rising, and the body responding with mechanisms like sweating and changing blood flow to the skin. The response depends on conditions and does not hold one exact number. Homeostasis is regulation within a range, not freezing every value.",
    "quiz": [
      {
        "q": "ما حرارة الجسم الطبيعية تقريباً؟",
        "o": [
          "37 درجة",
          "30 درجة",
          "42 درجة"
        ],
        "a": 0
      },
      {
        "q": "كيف يبرد الجسم نفسه؟",
        "o": [
          "بالتعرق",
          "بالارتعاش",
          "بالنوم"
        ],
        "a": 0
      },
      {
        "q": "أي هرمون يضبط سكر الدم؟",
        "o": [
          "الإنسولين",
          "الأدرينالين",
          "الميلاتونين"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Normal body temperature is about?",
            "o": [
                  "37 degrees",
                  "30 degrees",
                  "42 degrees"
            ],
            "a": 0
      },
      {
            "q": "How does the body cool itself?",
            "o": [
                  "By sweating",
                  "By shivering",
                  "By sleeping"
            ],
            "a": 0
      },
      {
            "q": "Which hormone regulates blood sugar?",
            "o": [
                  "Insulin",
                  "Adrenaline",
                  "Melatonin"
            ],
            "a": 0
      }
],
    "video": "الاتزان الداخلي للاطفال",
    "videoEn": "homeostasis for kids"
  },
  {
    "id": "electricity",
    "src": "https://en.wikipedia.org/wiki/Electricity",
    "emoji": "⚡",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الكهرباء",
    "titleEn": "Electricity",
    "kw": [
      "كهرب",
      "تيار",
      "جهد",
      "مقاوم",
      "برق",
      "electric",
      "current",
      "voltage",
      "circuit"
    ],
    "ar": "الكهرباء تشمل الشحنات الكهربائية وتأثيراتها. في سلك معدني تحمل الإلكترونات الشحنة، والتيار هو مقدار الشحنة التي تعبر نقطة في كل ثانية. البطارية توفر فرق جهد يدفع الشحنات في دائرة مغلقة، والمقاومة تحد من التيار. تتحول الطاقة الكهربائية في المصباح إلى ضوء وطاقة حرارية. لا تلمس الأسلاك المكشوفة أو مقابس الكهرباء، واطلب مساعدة شخص بالغ عند تلف جهاز.",
    "en": "Electricity includes electric charges and their effects. In a metal wire, electrons carry charge; current is the amount of charge passing a point each second. A battery supplies a voltage difference that drives charge around a closed circuit, while resistance limits the current. In a lamp, electrical energy becomes light and thermal energy. Never touch bare wires or electrical outlets; ask an adult about damaged equipment.",
    "story": "تخيّل دائرة فيها بطارية ومفتاح ومصباح. عند إغلاق المفتاح يكتمل الطريق فيمر التيار ويضيء المصباح. وعند فتحه ينقطع الطريق فينطفئ. هذا مشهد تعليمي يربط معنى الدائرة المغلقة بما تراه كل يوم، وليس تجربة مع كهرباء المنزل.",
    "storyEn": "Imagine a circuit with a battery, a switch and a lamp. When the switch closes, the path is complete, current flows and the lamp lights. When it opens, the path breaks and the lamp goes out. This is a teaching scene linking the idea of a closed circuit to what you see every day, not an experiment with home electricity.",
    "quiz": [
      {
        "q": "ما التيار الكهربائي؟",
        "o": [
          "تدفق الشحنة الكهربائية",
          "اهتزاز الذرات",
          "موجة ضوئية"
        ],
        "a": 0
      },
      {
        "q": "الدائرة تعمل فقط حين تكون؟",
        "o": [
          "مغلقة",
          "مفتوحة",
          "مبللة"
        ],
        "a": 0
      },
      {
        "q": "ماذا يحدث للطاقة الكهربائية في المصباح؟",
        "o": [
          "تتحول إلى ضوء وطاقة حرارية",
          "تختفي تماماً",
          "تتحول إلى كتلة فقط"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What is electric current?",
            "o": [
                  "A flow of electric charge",
                  "Vibrating atoms",
                  "A light wave"
            ],
            "a": 0
      },
      {
            "q": "A circuit works only when it is?",
            "o": [
                  "Closed",
                  "Open",
                  "Wet"
            ],
            "a": 0
      },
      {
            "q": "What happens to electrical energy in a lamp?",
            "o": [
                  "It turns into light and thermal energy",
                  "It disappears completely",
                  "It turns only into mass"
            ],
            "a": 0
      }
],
    "video": "الكهرباء للاطفال",
    "videoEn": "electricity for kids"
  },
  {
    "id": "magnetism",
    "src": "https://en.wikipedia.org/wiki/Magnet",
    "emoji": "🧲",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "المغناطيسية",
    "titleEn": "Magnetism",
    "kw": [
      "مغناطيس",
      "مغناط",
      "بوصل",
      "قطب",
      "magnet",
      "compass",
      "pole"
    ],
    "ar": "المغناطيس يصنع مجالاً مغناطيسياً يمكنه جذب الحديد وبعض المواد الأخرى. له قطبان شمالي وجنوبي؛ الأقطاب المتشابهة تتنافر والمختلفة تتجاذب. تتجه إبرة البوصلة مع المجال المغناطيسي للأرض. التيار في السلك يصنع مجالاً أيضاً، وتغيّر المجال خلال دائرة موصلة يمكن أن يولّد جهداً وتياراً إن كانت الدائرة مغلقة. تستخدم مولدات كهربائية كثيرة هذا الارتباط بين الكهرباء والمغناطيسية.",
    "en": "A magnet produces a magnetic field that can attract iron and some other materials. It has north and south poles; like poles repel and unlike poles attract. A compass needle aligns with the magnetic field of Earth. Current in a wire also makes a magnetic field, and a changing field through a conducting loop can induce a voltage and, if the loop is closed, a current. Many electrical generators use this link between electricity and magnetism.",
    "story": "تخيّل إبرة بوصلة حرة الحركة. حين تدير علبة البوصلة، تستطيع الإبرة أن تعود لتصطف مع مجال الأرض بدلاً من البقاء في اتجاه العلبة. وحين يقترب مغناطيس آخر يتغير اتجاه المجال عند الإبرة، فتدور. الإبرة هنا كاشف صغير لمجال لا نراه.",
    "storyEn": "Imagine a freely moving compass needle. When you rotate the compass case, the needle can swing back to align with Earth's field instead of staying with the case. And when another magnet comes near, the field at the needle changes, so it turns. The needle here is a tiny detector of a field we cannot see.",
    "quiz": [
      {
        "q": "ماذا يفعل القطبان المتشابهان؟",
        "o": [
          "يتنافران",
          "يتجاذبان",
          "يذوبان"
        ],
        "a": 0
      },
      {
        "q": "لماذا تشير البوصلة للشمال؟",
        "o": [
          "الأرض مغناطيس عملاق",
          "النجوم تسحبها",
          "الجاذبية"
        ],
        "a": 0
      },
      {
        "q": "ما الذي يمكن أن يولد تياراً في ملف موصل مغلق؟",
        "o": [
          "تغيّر المجال المغناطيسي خلاله",
          "لونه",
          "وجود قطعة خشب بجواره"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What do two like poles do?",
            "o": [
                  "Repel each other",
                  "Attract each other",
                  "Melt"
            ],
            "a": 0
      },
      {
            "q": "Why does a compass point north?",
            "o": [
                  "Earth is a giant magnet",
                  "The stars pull it",
                  "Gravity"
            ],
            "a": 0
      },
      {
            "q": "What can generate a current in a closed conducting coil?",
            "o": [
                  "A changing magnetic field through it",
                  "Its color",
                  "A piece of wood beside it"
            ],
            "a": 0
      }
],
    "video": "المغناطيس للاطفال",
    "videoEn": "magnetism for kids"
  },
  {
    "id": "optics",
    "src": "https://en.wikipedia.org/wiki/Optics",
    "emoji": "🔍",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الضوء والبصريات",
    "titleEn": "Light & Optics",
    "kw": [
      "ضوء",
      "بصري",
      "منشور",
      "عدس",
      "انعكاس",
      "انكسار",
      "light",
      "optic",
      "prism",
      "lens",
      "reflect",
      "refract"
    ],
    "ar": "سرعة الضوء في الفراغ نحو 300 ألف كيلومتر في الثانية، لكنه يبطئ حين يعبر الماء أو الزجاج - وهذا البطء هو سر الانكسار: أشعة تميل عند الانتقال بين وسطين، فيبدو القلم مكسوراً في كوب الماء. العدسات تستغل الانكسار لتجمع الأشعة أو تفرقها، وهكذا تعمل النظارات والمجاهر والتلسكوبات وكاميرا هاتفك. والألوان؟ الضوء الأبيض خليط من كل الألوان، والمنشور يفرقها لأن كل لون ينكسر بزاوية مختلفة قليلاً - وقوس المطر منشور طبيعي من ملايين قطرات المطر.",
    "en": "Light travels at about 300 thousand km per second in a vacuum, yet it slows down crossing water or glass - and this slowdown is the secret of refraction: rays bend when moving between media, making a pen look broken in a glass of water. Lenses exploit refraction to gather or spread rays, which is how glasses, microscopes, telescopes and your phone camera work. And colors? White light is a mix of all colors, and a prism separates them because each color bends at a slightly different angle - a rainbow is a natural prism of millions of raindrops.",
    "story": "تخيّل قلم رصاص مغموراً جزئياً في كوب ماء. يأتي الضوء من الجزء المغمور إلى عينك بعد عبوره الماء والهواء وتغير اتجاهه، فيبدو موضع الجزء المغمور مختلفاً. القلم لم ينكسر؛ مسار الضوء تغير. هذا مثال يومي على الانكسار الذي تستخدمه العدسات.",
    "storyEn": "Imagine a pencil half-dipped in a glass of water. Light from the dipped part reaches your eye after crossing water and air and changing direction, so the dipped part looks shifted. The pencil did not break; the light's path changed. This is an everyday example of the refraction that lenses use.",
    "quiz": [
      {
        "q": "لماذا يبدو القلم مكسوراً في الماء؟",
        "o": [
          "انكسار الضوء",
          "الماء سحري",
          "الزجاج مشوه"
        ],
        "a": 0
      },
      {
        "q": "كم سرعة الضوء في الفراغ تقريباً؟",
        "o": [
          "300 ألف كم/ثانية",
          "300 كم/ساعة",
          "سرعة الصوت"
        ],
        "a": 0
      },
      {
        "q": "ماذا يفعل المنشور بالضوء الأبيض؟",
        "o": [
          "يفرقه لألوان",
          "يخفيه",
          "يسخنه"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Why does the pencil look broken in water?",
            "o": [
                  "Refraction of light",
                  "The water is magic",
                  "The glass is warped"
            ],
            "a": 0
      },
      {
            "q": "About how fast is light in a vacuum?",
            "o": [
                  "300 thousand km/s",
                  "300 km/h",
                  "The speed of sound"
            ],
            "a": 0
      },
      {
            "q": "What does a prism do to white light?",
            "o": [
                  "Splits it into colors",
                  "Hides it",
                  "Heats it"
            ],
            "a": 0
      }
],
    "video": "انكسار الضوء للاطفال",
    "videoEn": "light and refraction for kids"
  },
  {
    "id": "motion",
    "src": "https://en.wikipedia.org/wiki/Classical_mechanics",
    "emoji": "🚀",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الحركة وقوانين نيوتن",
    "titleEn": "Motion & Newton Laws",
    "kw": [
      "حرك",
      "نيوتن",
      "سرعة",
      "تسارع",
      "قصور",
      "newton",
      "motion",
      "speed",
      "velocity",
      "inertia",
      "force"
    ],
    "ar": "تصف قوانين نيوتن حركة أجسام كثيرة في حياتنا اليومية. إذا كانت محصلة القوى صفراً يبقى الجسم ساكناً أو يتحرك بسرعة ثابتة في خط مستقيم. وللكتلة الثابتة، محصلة القوة تساوي الكتلة مضروبة في التسارع؛ فتغيير حركة كتلة أكبر يتطلب قوة أكبر عند نفس التسارع. في كل تفاعل تؤثر قوتان متساويتان ومتعاكستان على جسمين مختلفين، مثل الصاروخ وغاز العادم. لهذه القوانين حدود، وتحتاج الفيزياء إلى وصف آخر عند السرعات القريبة من سرعة الضوء أو على المقياس الذري.",
    "en": "Newton laws describe many everyday motions. When the net force is zero, an object stays at rest or moves at constant velocity in a straight line. For constant mass, net force equals mass times acceleration; giving a larger mass the same acceleration requires more force. Every interaction produces equal and opposite forces acting on different objects, such as a rocket and its exhaust. These laws have limits; motion near light speed and at atomic scales needs other descriptions.",
    "story": "تخيّل أنك في حافلة تتحرك بسرعة ثابتة ثم تبطئ. يستمر جسمك في الحركة إلى الأمام ما لم تؤثر عليه قوة تعيده مع المقعد، ولذلك يساعد حزام الأمان على إبطائه بأمان. هذا مثال على القصور الذاتي، لا على قوة خفية تدفعك إلى الأمام.",
    "storyEn": "Imagine you are in a bus moving at a steady speed, then it slows down. Your body keeps moving forward unless a force brings it back with the seat, which is why a seatbelt helps slow it safely. This is an example of inertia, not a hidden force pushing you forward.",
    "quiz": [
      {
        "q": "ماذا يقول القانون الأول؟",
        "o": [
          "الجسم يحافظ على سرعته المتجهة إذا كانت محصلة القوى صفراً",
          "القوة كتلة في تسارع",
          "لكل فعل رد فعل"
        ],
        "a": 0
      },
      {
        "q": "لماذا يصعب دفع سيارة أكثر من دراجة؟",
        "o": [
          "كتلتها أكبر فتحتاج قوة أكبر",
          "عجلاتها أثقل",
          "الهواء يقاومها"
        ],
        "a": 0
      },
      {
        "q": "كيف يصعد الصاروخ؟",
        "o": [
          "رد فعل دفع الغاز",
          "الهواء يرفعه",
          "المغناطيسية"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What does the first law say?",
            "o": [
                  "A body keeps its velocity if the net force is zero",
                  "Force is mass times acceleration",
                  "Every action has a reaction"
            ],
            "a": 0
      },
      {
            "q": "Why is a car harder to push than a bicycle?",
            "o": [
                  "Its mass is larger so it needs more force",
                  "Its wheels are heavier",
                  "The air resists it"
            ],
            "a": 0
      },
      {
            "q": "How does a rocket rise?",
            "o": [
                  "The reaction to pushing gas out",
                  "The air lifts it",
                  "Magnetism"
            ],
            "a": 0
      }
],
    "video": "قوانين نيوتن للاطفال",
    "videoEn": "newton laws of motion for kids"
  },
  {
    "id": "energy",
    "src": "https://en.wikipedia.org/wiki/Energy",
    "emoji": "🔋",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الطاقة وأشكالها",
    "titleEn": "Energy & Its Forms",
    "kw": [
      "طاقة",
      "energy",
      "kinetic",
      "potential"
    ],
    "ar": "الطاقة هي عملة الكون: لا تُخلق ولا تفنى بل تتحول من شكل لآخر - تلك القاعدة الذهبية اسمها حفظ الطاقة. بندول متأرجح يعلمك كل شيء: في الأعلى طاقة وضع (مخزنة في الارتفاع)، وقرب أسفل مساره تكون طاقة الحركة أكبر، مع إهمال الاحتكاك، ثم تعود تصعد. طعامك طاقة كيميائية تتحول لحركة وتفكير، والشمس طاقة نووية تصلنا ضوءاً فتتحول في الورقة لكيميائية. فاتورة الكهرباء؟ هي حساب تحولات الطاقة التي استخدمتها هذا الشهر.",
    "en": "Energy is the currency of the universe: it is never created or destroyed, only converted between forms - that golden rule is conservation of energy. A swinging pendulum teaches you everything: at the top it holds potential energy (stored in height), near the bottom its kinetic energy is greatest, ignoring friction, then climbs back. Your food is chemical energy turning into motion and thought; the sun is nuclear energy arriving as light and becoming chemical in a leaf. Your electricity bill? Just an account of the energy conversions you used this month.",
    "story": "تخيّل بندولاً يرتفع ثم يهبط. قرب أعلى المسار تكون سرعته صغيرة وطاقة وضعه أكبر، وقرب الأسفل تزداد سرعته. في الواقع يقل التأرجح تدريجياً لأن الطاقة تنتقل إلى الهواء والمحيط؛ الطاقة لا تختفي لمجرد أن الحركة المرئية توقفت.",
    "storyEn": "Imagine a pendulum rising and falling. Near the top of its path its speed is small and its potential energy is largest; near the bottom its speed grows. In reality the swing slowly fades because energy moves into the air and surroundings; energy does not vanish just because the visible motion stops.",
    "quiz": [
      {
        "q": "ما قانون حفظ الطاقة؟",
        "o": [
          "الطاقة تتحول ولا تفنى",
          "الطاقة تنتهي بالاستخدام",
          "الطاقة من الشمس فقط"
        ],
        "a": 0
      },
      {
        "q": "في أعلى البندول تكون الطاقة؟",
        "o": [
          "وضع",
          "حركة",
          "صوتية"
        ],
        "a": 0
      },
      {
        "q": "وحدة قياس الطاقة؟",
        "o": [
          "الجول",
          "النيوتن",
          "الوات"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What is the law of conservation of energy?",
            "o": [
                  "Energy transforms and is never destroyed",
                  "Energy runs out with use",
                  "Energy comes only from the Sun"
            ],
            "a": 0
      },
      {
            "q": "At the top of the pendulum the energy is:",
            "o": [
                  "Potential",
                  "Kinetic",
                  "Sound"
            ],
            "a": 0
      },
      {
            "q": "The unit of energy is?",
            "o": [
                  "Joule",
                  "Newton",
                  "Watt"
            ],
            "a": 0
      }
],
    "video": "أشكال الطاقة للاطفال",
    "videoEn": "forms of energy for kids"
  },
  {
    "id": "sound",
    "src": "https://en.wikipedia.org/wiki/Sound",
    "emoji": "🔊",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الصوت",
    "titleEn": "Sound",
    "kw": [
      "صوت",
      "موجة صوت",
      "صدى",
      "sound",
      "echo",
      "wave"
    ],
    "ar": "الصوت موجة اهتزازية تسافر في الهواء: جسم يهتز فيضغط جزيئات الهواء ويفرغها بالتناوب، وتنتقل هذه التضاغطات كموجة حتى تهز غشاء أذنك. سرعته في الهواء عند نحو 20 درجة مئوية حوالي 343 متراً في الثانية - لهذا ترى البرق قبل سماع الرعد بثوانٍ. الصوت يحتاج وسطاً: في الفضاء الخارجي الفارغ لا يسمع أحد صراخك فعلاً! التردد يحدد الحدة (صوت أجش أم رفيع) والشدة تحدد علوه. نطاق السمع التقريبي للشباب من 20 إلى 20 ألف ذبذبة في الثانية، ويختلف بين الأشخاص، والخفاش والدولفين يسمعان ما لا تسمع.",
    "en": "Sound is a vibration wave traveling through air: an object vibrates, squeezing and releasing air molecules in turns, and these compressions travel as a wave until they shake your eardrum. Its speed in air near 20 degrees Celsius is about 343 meters per second - which is why you see lightning seconds before hearing thunder. Sound needs a medium: in empty outer space, truly nobody can hear you scream! Frequency sets pitch (deep or shrill) and amplitude sets loudness. Young people typically hear roughly 20 to 20,000 vibrations per second, with individual differences; bats and dolphins hear what you cannot.",
    "story": "تخيّل أنك تصفق أمام جدار بعيد فتسمع صوتاً يعود بعد لحظة. انتقلت موجة الصوت إلى الجدار وانعكست ثم عادت إلى أذنك: هذا هو الصدى. يزيد التأخر كلما زاد طول الرحلة، ويمكن استخدام الفكرة لقياس المسافات.",
    "storyEn": "Imagine clapping in front of a far wall and hearing a sound come back a moment later. The sound wave traveled to the wall, reflected and returned to your ear: that is an echo. The delay grows as the trip gets longer, and the idea can be used to measure distances.",
    "quiz": [
      {
        "q": "لماذا نرى البرق قبل الرعد؟",
        "o": [
          "الضوء أسرع من الصوت",
          "الرعد يتأخر",
          "العين أقوى من الأذن"
        ],
        "a": 0
      },
      {
        "q": "هل ينتقل الصوت في الفراغ؟",
        "o": [
          "لا، يحتاج وسطاً",
          "نعم دائماً",
          "في الليل فقط"
        ],
        "a": 0
      },
      {
        "q": "ما الذي يحدد حدة الصوت؟",
        "o": [
          "التردد",
          "اللون",
          "درجة الحرارة"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Why do we see lightning before thunder?",
            "o": [
                  "Light is faster than sound",
                  "Thunder is delayed",
                  "The eye is stronger than the ear"
            ],
            "a": 0
      },
      {
            "q": "Does sound travel in a vacuum?",
            "o": [
                  "No, it needs a medium",
                  "Yes, always",
                  "Only at night"
            ],
            "a": 0
      },
      {
            "q": "What determines a sound's pitch?",
            "o": [
                  "Frequency",
                  "Color",
                  "Temperature"
            ],
            "a": 0
      }
],
    "video": "الصوت للاطفال",
    "videoEn": "sound waves for kids"
  },
  {
    "id": "heat",
    "src": "https://en.wikipedia.org/wiki/Heat",
    "emoji": "🌡️",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الحرارة والطاقة الحرارية",
    "titleEn": "Heat & Thermal Energy",
    "kw": [
      "حرار",
      "سخون",
      "برود",
      "توصيل",
      "heat",
      "thermal",
      "temperature",
      "conduction"
    ],
    "ar": "الحرارة طاقة تنتقل بسبب فرق درجة الحرارة، من الجسم الأسخن إلى الأبرد. ودرجة الحرارة ليست كمية الطاقة الكلية؛ فهي ترتبط بحركة الجسيمات وتوزيع طاقتها. تنتقل الطاقة بالتوصيل مثل ملعقة في شاي ساخن، وبالحمل مع حركة السائل أو الغاز، وبالإشعاع مثل دفء الشمس. الصفر المطلق يساوي 0 كلفن، أي نحو -273.15 درجة مئوية، ولا يمكن بلوغه عملياً. الترمس يقلل طرق انتقال الطاقة ليبقى المشروب ساخناً أو بارداً مدة أطول.",
    "en": "Heat is energy transferred because of a temperature difference, from a hotter body to a cooler one. Temperature is not the total amount of energy; it is related to particle motion and the distribution of their energy. Energy transfers by conduction, as in a spoon in hot tea; convection, carried by a moving fluid; and radiation, as with sunlight. Absolute zero is 0 kelvin, about -273.15 degrees Celsius, and cannot be reached in practice. A thermos reduces energy transfer to keep a drink hot or cold longer.",
    "story": "تخيّل ملعقة معدنية وأخرى خشبية في مشروب دافئ، تحت إشراف شخص بالغ. ينقل المعدن الطاقة إلى المقبض أسرع عادة، بينما الخشب عازل أفضل. الفكرة ليست أن المعدن يحتوي برودة أو حرارة خاصة، بل أن معدل انتقال الطاقة يختلف بين المواد.",
    "storyEn": "Imagine a metal spoon and a wooden spoon in a warm drink, with an adult supervising. Metal usually carries energy to the handle faster, while wood is a better insulator. The point is not that metal contains a special coldness or heat, but that the rate of energy transfer differs between materials.",
    "quiz": [
      {
        "q": "ما الحرارة؟",
        "o": [
          "طاقة تنتقل بسبب فرق درجة الحرارة",
          "وزن الجسم",
          "عدد الجزيئات فقط"
        ],
        "a": 0
      },
      {
        "q": "كيف تصل حرارة الشمس إلينا؟",
        "o": [
          "بالإشعاع",
          "بالتوصيل",
          "بالحمل"
        ],
        "a": 0
      },
      {
        "q": "ما قيمة الصفر المطلق تقريباً؟",
        "o": [
          "-273.15 درجة مئوية",
          "صفر مئوية",
          "100 درجة مئوية"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What is heat?",
            "o": [
                  "Energy transferred because of a temperature difference",
                  "The weight of a body",
                  "Only the number of particles"
            ],
            "a": 0
      },
      {
            "q": "How does the Sun's heat reach us?",
            "o": [
                  "By radiation",
                  "By conduction",
                  "By convection"
            ],
            "a": 0
      },
      {
            "q": "Absolute zero is approximately?",
            "o": [
                  "-273.15 Celsius",
                  "0 Celsius",
                  "100 Celsius"
            ],
            "a": 0
      }
],
    "video": "الحرارة للاطفال",
    "videoEn": "heat and temperature for kids"
  },
  {
    "id": "buoyancy",
    "src": "https://en.wikipedia.org/wiki/Buoyancy",
    "emoji": "🛟",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الطفو والكثافة",
    "titleEn": "Buoyancy & Density",
    "kw": [
      "طفو",
      "يطفو",
      "تطفو",
      "كثاف",
      "أرخميدس",
      "ارخميدس",
      "سفين",
      "buoyan",
      "float",
      "density",
      "archimedes"
    ],
    "ar": "لماذا تطفو سفينة حديدية وتغرق قطعة حديد صغيرة؟ السر في قاعدة أرخميدس: أي جسم في سائل تدفعه للأعلى قوة تعادل وزن السائل الذي يزيحه. قطعة الحديد الصلبة تزيح ماءً قليلاً فتخسر، أما السفينة المجوفة فتزيح حجماً ضخماً من الماء فيعادل وزنه وزنها فتطفو. الكثافة هي الحكم: أخف من الماء تطفو، وأثقل تغرق. الجليد أخف من الماء فيطفو - ولو كان العكس لتجمدت البحيرات من القاع وماتت الأسماك!",
    "en": "Why does an iron ship float while a small iron nail sinks? The secret is Archimedes principle: any object in a fluid is pushed up by a force equal to the weight of the fluid it displaces. A solid nail displaces little water and loses, while a hollow ship displaces a huge volume whose weight matches its own, so it floats. Density is the judge: lighter than water floats, heavier sinks. Ice is lighter than water so it floats - and if it were the opposite, lakes would freeze from the bottom and the fish would die!",
    "story": "تخيّل قطعتين لهما نفس الكتلة من مادة قابلة للتشكيل: كرة مصمتة وقارب واسع مجوف. القارب يستطيع إزاحة حجم أكبر من الماء قبل أن يمتلئ، وقد يصل إلى حالة توازن يكون فيها وزن الماء المزاح مساوياً لوزنه. هكذا نفهم أن شكل السفينة وحجم الهواء داخلها يؤثران في كثافتها المتوسطة وفي قدرتها على الطفو.",
    "storyEn": "Imagine two pieces with the same mass of a shapeable material: a solid ball and a wide hollow boat. The boat can push aside a larger volume of water before it floods, and it can reach a balance where the weight of the displaced water equals its own weight. That is how a ship's shape and the air inside it affect its average density and its ability to float.",
    "quiz": [
      {
        "q": "قوة الطفو تساوي؟",
        "o": [
          "وزن السائل المُزاح",
          "وزن الجسم",
          "حجم الجسم"
        ],
        "a": 0
      },
      {
        "q": "لماذا تطفو السفينة المجوفة؟",
        "o": [
          "تزيح ماءً كثيراً",
          "طلاؤها خفيف",
          "الهواء يدفعها"
        ],
        "a": 0
      },
      {
        "q": "ماذا يحدث لو غرق الجليد؟",
        "o": [
          "تتجمد البحيرات من القاع",
          "لا شيء",
          "يذوب أسرع"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "The buoyant force equals?",
            "o": [
                  "The weight of the displaced fluid",
                  "The weight of the object",
                  "The volume of the object"
            ],
            "a": 0
      },
      {
            "q": "Why does a hollow ship float?",
            "o": [
                  "It displaces a lot of water",
                  "Its paint is light",
                  "The air pushes it"
            ],
            "a": 0
      },
      {
            "q": "What would happen if ice sank?",
            "o": [
                  "Lakes would freeze from the bottom",
                  "Nothing",
                  "It would melt faster"
            ],
            "a": 0
      }
],
    "video": "الطفو للاطفال",
    "videoEn": "buoyancy and density for kids"
  },
  {
    "id": "machines",
    "src": "https://en.wikipedia.org/wiki/Simple_machine",
    "emoji": "⚙️",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الآلات البسيطة",
    "titleEn": "Simple Machines",
    "kw": [
      "رافع",
      "روافع",
      "عتلة",
      "بكر",
      "آلات",
      "عجلة",
      "مستوى مائل",
      "lever",
      "pulley",
      "machine",
      "wheel",
      "inclined"
    ],
    "ar": "تشمل الآلات البسيطة الرافعة والبكرة والمستوى المائل والإسفين والبرغي والعجلة والمحور. تغير هذه الأدوات مقدار القوة أو اتجاهها والمسافة التي تؤثر خلالها. قد تكسب قوة مقابل زيادة المسافة، أو تكسب سرعة ومسافة مقابل قوة أكبر. في آلة مثالية يتساوى الشغل الداخل والخارج، وفي الواقع يتحول جزء من الطاقة إلى طاقة حرارية بسبب الاحتكاك. ذراعك مثال على رافعة، والمسمار اللولبي مثال على مستوى مائل ملتف.",
    "en": "Simple machines include levers, pulleys, inclined planes, wedges, screws, and wheels with axles. They change the size or direction of a force and the distance over which it acts. A machine may trade a longer distance for less force, or trade greater force for more speed and distance. Input and output work are equal in an ideal machine; friction converts some energy to thermal energy in real machines. An arm acts as a lever, and a screw is a wrapped inclined plane.",
    "story": "تخيّل مسطرة صلبة ترتكز على نقطة ثابتة. ضع حملاً قريباً من الارتكاز واضغط على الطرف الأبعد؛ الذراع الأطول يتيح موازنة الحمل بقوة أصغر. لكن الطرف البعيد يتحرك مسافة أكبر، وفي آلة مثالية لا ينقص الشغل الكلي. هذا مشهد تعليمي لفكرة الرافعة وليس وعداً برفع أوزان دون احتياطات.",
    "storyEn": "Imagine a rigid bar resting on a fixed point. Place a load near the pivot and press the far end; the longer arm lets you balance the load with a smaller force. But the far end moves a greater distance, and in an ideal machine the total work does not shrink. This is a teaching scene about the lever idea, not a promise to lift weights without precautions.",
    "quiz": [
      {
        "q": "كم عدد الآلات البسيطة؟",
        "o": [
          "6",
          "3",
          "60"
        ],
        "a": 0
      },
      {
        "q": "ماذا تدفع مقابل كسب القوة؟",
        "o": [
          "المسافة",
          "المال",
          "الوقود"
        ],
        "a": 0
      },
      {
        "q": "الفأس مثال على؟",
        "o": [
          "الإسفين",
          "البكرة",
          "الرافعة"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "How many simple machines are there?",
            "o": [
                  "6",
                  "3",
                  "60"
            ],
            "a": 0
      },
      {
            "q": "What do you pay in exchange for gaining force?",
            "o": [
                  "Distance",
                  "Money",
                  "Fuel"
            ],
            "a": 0
      },
      {
            "q": "An axe is an example of?",
            "o": [
                  "A wedge",
                  "A pulley",
                  "A lever"
            ],
            "a": 0
      }
],
    "video": "الآلات البسيطة للاطفال",
    "videoEn": "simple machines for kids"
  },
  {
    "id": "pressure",
    "src": "https://en.wikipedia.org/wiki/Pressure",
    "emoji": "🎈",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الضغط",
    "titleEn": "Pressure",
    "kw": [
      "ضغط",
      "ضغط جوي",
      "غليان",
      "pressure",
      "atmospher",
      "boil"
    ],
    "ar": "الضغط هو مقدار القوة العمودية موزعاً على المساحة التي تؤثر فيها. عند نفس القوة، المساحة الأصغر تعني ضغطاً أكبر؛ لذلك يركز طرف الأداة الحاد القوة على مساحة صغيرة. للهواء ضغط، وفي السائل الساكن يزداد الضغط مع العمق بسبب وزن السائل فوق النقطة. يفسر فرق الضغط بعض ما نشعر به في الأذن عند الغوص، ولهذا تحتاج ممارسات الغوص إلى تدريب واحتياطات مناسبة.",
    "en": "Pressure is the normal force spread over the area on which it acts. With the same force, a smaller area means greater pressure; a sharp tool concentrates force on a small area. Air has pressure, and pressure in a liquid at rest increases with depth because of the weight of liquid above. Pressure differences explain some ear discomfort during diving, which requires suitable training and safety precautions.",
    "story": "تخيّل نفس الشخص واقفاً على الثلج بحذاء عادي ثم بحذاء ثلج عريض. الوزن نفسه تقريباً، لكن الحذاء العريض يوزعه على مساحة أكبر فيقل الضغط. لذلك يمكن أن يقل غوصه في الثلج دون أن يتغير وزنه.",
    "storyEn": "Imagine the same person standing on snow in regular shoes, then in wide snowshoes. The weight is about the same, but the wide shoe spreads it over a larger area, so the pressure drops. That is why the person may sink less without their weight changing.",
    "quiz": [
      {
        "q": "الضغط يساوي؟",
        "o": [
          "القوة على المساحة",
          "الكتلة في السرعة",
          "الحجم مضروباً"
        ],
        "a": 0
      },
      {
        "q": "لماذا تؤلم الأذن في الغوص؟",
        "o": [
          "الضغط يزيد مع العمق",
          "الماء بارد",
          "الملح"
        ],
        "a": 0
      },
      {
        "q": "كيف يقلل حذاء الثلج الواسع الضغط؟",
        "o": [
          "يوزع الوزن على مساحة أكبر",
          "يقلل كتلة الشخص",
          "يلغي الجاذبية"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Pressure equals?",
            "o": [
                  "Force over area",
                  "Mass times speed",
                  "Volume multiplied"
            ],
            "a": 0
      },
      {
            "q": "Why do ears hurt when diving?",
            "o": [
                  "Pressure increases with depth",
                  "The water is cold",
                  "The salt"
            ],
            "a": 0
      },
      {
            "q": "How does a wide snowshoe reduce pressure?",
            "o": [
                  "It spreads weight over a larger area",
                  "It reduces the person's mass",
                  "It cancels gravity"
            ],
            "a": 0
      }
],
    "video": "الضغط للاطفال",
    "videoEn": "air pressure for kids"
  },
  {
    "id": "periodic",
    "src": "https://en.wikipedia.org/wiki/Periodic_table",
    "emoji": "🧪",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "الجدول الدوري",
    "titleEn": "The Periodic Table",
    "kw": [
      "جدول دوري",
      "عناصر",
      "عنصر",
      "مندلييف",
      "periodic",
      "element",
      "mendeleev"
    ],
    "ar": "الجدول الدوري يرتب العناصر حسب العدد الذري، أي عدد البروتونات في النواة. الصفوف تسمى دورات والأعمدة مجموعات، وغالباً ما تتشابه خواص عناصر المجموعة بسبب تركيب إلكتروناتها الخارجية. يضم الجدول الحديث 118 عنصراً، منها معادن ولافلزات وأشباه فلزات. معظم عناصر المجموعة الأولى معادن قلوية نشطة، لكن الهيدروجين استثناء، وعناصر المجموعة الأخيرة غازات نبيلة ضعيفة التفاعل عادة. يساعد الجدول على توقع الخواص بدلاً من حفظ كل عنصر منفرداً.",
    "en": "The periodic table orders elements by atomic number, the number of protons in a nucleus. Rows are periods and columns are groups; elements in a group often have similar properties because of their outer electron structures. The modern table contains 118 elements, including metals, nonmetals and metalloids. Most first-group elements are reactive alkali metals, but hydrogen is an exception; the last group contains generally unreactive noble gases. The table helps predict properties instead of memorizing every element separately.",
    "story": "تخيّل أن لديك بطاقات لعناصر مختلفة، وتحاول جمع العناصر المتشابهة في أعمدة. إذا ظهر نمط متكرر وفيه مكان فارغ، فقد تتوقع خواص عنصر يملأ الفراغ. هذا يوضح قيمة الجدول الدوري: تنظيم المعلومات يمكن أن يقود إلى توقعات قابلة للاختبار، لا إلى الحفظ فقط.",
    "storyEn": "Imagine you have cards of different elements and you try grouping the similar ones into columns. If a repeating pattern appears with a gap in it, you can predict the properties of an element that fills the gap. This shows the value of the periodic table: organizing information can lead to testable predictions, not just memorizing.",
    "quiz": [
      {
        "q": "ماذا تعني المجموعة (العمود الواحد)؟",
        "o": [
          "عائلة عناصر متشابهة الخواص",
          "عناصر لها نفس اللون",
          "عناصر بنفس الوزن"
        ],
        "a": 0
      },
      {
        "q": "الغازات النبيلة تقع في؟",
        "o": [
          "العمود الأخير",
          "العمود الأول",
          "وسط الجدول"
        ],
        "a": 0
      },
      {
        "q": "على أي أساس يرتب الجدول الدوري الحديث العناصر؟",
        "o": [
          "العدد الذري",
          "اللون",
          "ترتيب اكتشافها"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What does a group (one column) mean?",
            "o": [
                  "A family of elements with similar properties",
                  "Elements with the same color",
                  "Elements with the same weight"
            ],
            "a": 0
      },
      {
            "q": "The noble gases are found in?",
            "o": [
                  "The last column",
                  "The first column",
                  "The middle of the table"
            ],
            "a": 0
      },
      {
            "q": "The modern periodic table orders elements by?",
            "o": [
                  "Atomic number",
                  "Color",
                  "Order of discovery"
            ],
            "a": 0
      }
],
    "video": "الجدول الدوري للاطفال",
    "videoEn": "periodic table for kids"
  },
  {
    "id": "bonds",
    "src": "https://en.wikipedia.org/wiki/Chemical_bond",
    "emoji": "🔗",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "الروابط الكيميائية",
    "titleEn": "Chemical Bonds",
    "kw": [
      "رابطة",
      "روابط",
      "جزيء",
      "جزيئ",
      "أيون",
      "تساهم",
      "فلزي",
      "bond",
      "molecule",
      "ionic",
      "covalent",
      "ion"
    ],
    "ar": "الروابط الكيميائية تربط الذرات أو الأيونات لتكوين مواد مستقرة نسبياً. في الوصف الأيوني، تفقد ذرة إلكترونات وتكتسبها أخرى، فيتجاذب الأيون الموجب والأيون السالب كهربائياً، مثل ملح الطعام. وفي الرابطة التساهمية تشترك الذرات في إلكترونات، كما في جزيء الماء. وفي المعادن تسهم إلكترونات غير محصورة بين ذرتين فقط في ترابط الشبكة وتوصيل الكهرباء. ليست كل المواد جزيئات منفصلة؛ الملح مثلاً شبكة كبيرة من الأيونات.",
    "en": "Chemical bonds hold atoms or ions together in relatively stable substances. In an ionic description, one atom loses electrons and another gains them; positive and negative ions then attract electrically, as in table salt. In a covalent bond, atoms share electrons, as in a water molecule. In metals, electrons that are not confined to a single pair of atoms help bind the lattice and conduct electricity. Not every substance consists of separate molecules: salt forms an extended ionic lattice.",
    "story": "تخيّل نموذجين: زوج ذرات يتشارك إلكترونات، وشبكة من كرات موجبة وسالبة متبادلة. الأول يساعدنا على تصور الرابطة التساهمية، والثاني على تصور الملح الأيوني. النماذج رموز تعليمية وليست صوراً حرفية للإلكترونات أو لأحجام الذرات الحقيقية.",
    "storyEn": "Imagine two models: a pair of atoms sharing electrons, and a lattice of alternating positive and negative balls. The first helps us picture a covalent bond, the second an ionic salt. The models are teaching symbols, not literal pictures of electrons or true atom sizes.",
    "quiz": [
      {
        "q": "الرابطة الأيونية تعتمد على؟",
        "o": [
          "إعطاء وأخذ إلكترونات",
          "مشاركة إلكترونات",
          "مجال مغناطيسي"
        ],
        "a": 0
      },
      {
        "q": "ملح الطعام يتكون برابطة؟",
        "o": [
          "أيونية",
          "تساهمية",
          "فلزية"
        ],
        "a": 0
      },
      {
        "q": "بريق المعادن وتوصيلها سببهما؟",
        "o": [
          "بحر الإلكترونات الحرة",
          "ثقل النواة",
          "الغاز المحبوس"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "An ionic bond is based on?",
            "o": [
                  "Giving and taking electrons",
                  "Sharing electrons",
                  "A magnetic field"
            ],
            "a": 0
      },
      {
            "q": "Table salt is held together by which bond?",
            "o": [
                  "Ionic",
                  "Covalent",
                  "Metallic"
            ],
            "a": 0
      },
      {
            "q": "Metals' shine and conductivity come from?",
            "o": [
                  "A sea of free electrons",
                  "The heavy nucleus",
                  "Trapped gas"
            ],
            "a": 0
      }
],
    "video": "الروابط الكيميائية للاطفال",
    "videoEn": "chemical bonds for kids"
  },
  {
    "id": "acidbase",
    "src": "https://en.wikipedia.org/wiki/Acid",
    "emoji": "🍋",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "الأحماض والقواعد",
    "titleEn": "Acids & Bases",
    "kw": [
      "حمض",
      "أحماض",
      "احماض",
      "قاعدة",
      "قواعد",
      "قاعدي",
      "حموضة",
      "قلوي",
      "acid",
      "base",
      "alkali",
      "ph"
    ],
    "ar": "تصف الحموضة والقاعدية سلوك المواد في المحاليل. في الماء تزيد الأحماض تركيز أيونات الهيدرونيوم، ويمكن للقواعد استقبال بروتونات. عند 25 درجة مئوية يكون المحلول المتعادل عند pH يساوي 7، والحمضي أقل من 7 والقاعدي أعلى منه؛ وعادة تعرض الرسوم التعليمية المجال من 0 إلى 14. تفاعل حمض وقاعدة قد ينتج ماء وملحاً، ويتوقف الناتج على المواد المتفاعلة. لا نتعرف على مادة مجهولة بتذوقها أو لمسها؛ نتعلم من الملصقات والكواشف المناسبة تحت إشراف.",
    "en": "Acidity and basicity describe how substances behave in solutions. In water, acids increase the concentration of hydronium ions, and bases can accept protons. At 25 degrees Celsius, a neutral solution has pH 7, an acidic one below 7, and a basic one above 7; teaching charts commonly show a range from 0 to 14. An acid-base reaction may produce water and a salt, depending on the reactants. Never identify an unknown substance by tasting or touching it; use labels and suitable indicators with supervision.",
    "story": "تخيّل كاشفاً يتغير لونه بحسب حموضة المحلول. يعطي اللون معلومة عن خواص المحلول دون الحاجة إلى تذوقه أو لمسه. دور الكاشف هو تحويل خاصية لا نراها مباشرة إلى إشارة يمكن ملاحظتها، مع الالتزام بقواعد أمان المعمل.",
    "storyEn": "Imagine an indicator that changes color with the acidity of a solution. Its color tells you about the solution's properties without tasting or touching it. An indicator's job is to turn something we cannot see directly into a signal we can observe, while following lab safety rules.",
    "quiz": [
      {
        "q": "ماذا يعني pH أقل من 7؟",
        "o": [
          "المادة حمضية",
          "المادة قاعدية",
          "المادة ماء نقي"
        ],
        "a": 0
      },
      {
        "q": "ماذا ينتج عن تعادل حمض مع قاعدة؟",
        "o": [
          "ماء وملح",
          "غاز فقط",
          "ضوء"
        ],
        "a": 0
      },
      {
        "q": "أي حمض في المعدة؟",
        "o": [
          "الهيدروكلوريك",
          "الكبريتيك",
          "الستريك"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What does a pH below 7 mean?",
            "o": [
                  "The substance is acidic",
                  "The substance is basic",
                  "The substance is pure water"
            ],
            "a": 0
      },
      {
            "q": "What is produced when an acid neutralizes a base?",
            "o": [
                  "Water and a salt",
                  "Only a gas",
                  "Light"
            ],
            "a": 0
      },
      {
            "q": "Which acid is found in the stomach?",
            "o": [
                  "Hydrochloric",
                  "Sulfuric",
                  "Citric"
            ],
            "a": 0
      }
],
    "video": "الاحماض والقواعد للاطفال",
    "videoEn": "acids and bases for kids"
  },
  {
    "id": "reactions",
    "src": "https://en.wikipedia.org/wiki/Chemical_reaction",
    "emoji": "⚗️",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "التفاعلات الكيميائية",
    "titleEn": "Chemical Reactions",
    "kw": [
      "تفاعل",
      "تفاعلات",
      "احتراق",
      "صدأ",
      "أكسدة",
      "reaction",
      "combustion",
      "rust",
      "oxidation"
    ],
    "ar": "التفاعل الكيميائي هو إعادة ترتيب أثاث الذرات: الروابط القديمة تنكسر وروابط جديدة تولد، والذرات نفسها لا تفنى ولا تزيد - قانون حفظ الكتلة. حرق الخشب تفاعل: كربون الخشب يلتقي أكسجين الهواء فيصعدان ثاني أكسيد الكربون وبخاراً ويبقى رماد. وصدأ الحديد تفاعل بطيء مع الأكسجين والماء. بعض التفاعلات يحتاج شرارة أو حرارة ليبدأ (طاقة التنشيط) كعود الكبريت، وبعضها يتسارع بوجود وسيط اسمه العامل الحفاز - وهو ما تفعله الإنزيمات في جسمك تماماً.",
    "en": "A chemical reaction is rearranging the furniture of atoms: old bonds break and new ones form, while the atoms themselves never vanish or multiply - the law of conservation of mass. Burning wood is a reaction: wood carbon meets air oxygen and they leave as carbon dioxide and vapor, leaving ash. Rusting iron is a slow reaction with oxygen and water. Some reactions need a spark or heat to start (activation energy), like a matchstick, and some speed up with a helper called a catalyst - exactly what the enzymes in your body do.",
    "story": "تخيّل نموذجاً بست كرات يمثل أربع ذرات هيدروجين وذرتي أكسجين. أعد ترتيب الكرات لتكوين جزيئين من الماء دون حذف كرة أو إضافتها. هذا يوضح معنى موازنة المعادلة الكيميائية: عدد ذرات كل عنصر قبل التفاعل وبعده متساوٍ، حتى عندما تتغير الروابط والخواص.",
    "storyEn": "Imagine a model with six balls standing for four hydrogen atoms and two oxygen atoms. Rearrange the balls to make two water molecules without removing or adding a single ball. This shows what balancing a chemical equation means: the number of atoms of each element before and after the reaction is equal, even when bonds and properties change.",
    "quiz": [
      {
        "q": "ماذا يقول قانون حفظ الكتلة؟",
        "o": [
          "الذرات لا تفنى في التفاعل",
          "الكتلة تتضاعف دائماً",
          "الغازات ليست مادة"
        ],
        "a": 0
      },
      {
        "q": "صدأ الحديد تفاعل مع؟",
        "o": [
          "الأكسجين والماء",
          "الضوء فقط",
          "الملح فقط"
        ],
        "a": 0
      },
      {
        "q": "ما وظيفة العامل الحفاز؟",
        "o": [
          "تسريع التفاعل دون أن يُستهلك",
          "إيقاف التفاعل",
          "تبريد الوعاء"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What does the law of conservation of mass say?",
            "o": [
                  "Atoms are not destroyed in a reaction",
                  "Mass always doubles",
                  "Gases are not matter"
            ],
            "a": 0
      },
      {
            "q": "Iron rusts by reacting with?",
            "o": [
                  "Oxygen and water",
                  "Light only",
                  "Salt only"
            ],
            "a": 0
      },
      {
            "q": "What does a catalyst do?",
            "o": [
                  "Speeds the reaction without being consumed",
                  "Stops the reaction",
                  "Cools the flask"
            ],
            "a": 0
      }
],
    "video": "التفاعلات الكيميائية للاطفال",
    "videoEn": "chemical reactions for kids"
  },
  {
    "id": "states",
    "src": "https://en.wikipedia.org/wiki/State_of_matter",
    "emoji": "🧊",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "حالات المادة",
    "titleEn": "States of Matter",
    "kw": [
      "حالة",
      "حالات",
      "صلب",
      "سائل",
      "غاز",
      "تبخر",
      "تكاثف",
      "انصهار",
      "تجمد",
      "بلازما",
      "solid",
      "liquid",
      "gas",
      "state",
      "evaporat",
      "melt",
      "freez"
    ],
    "ar": "للصلب شكل وحجم محددان تقريباً، وللسائل حجم محدد لكنه يأخذ شكل الوعاء، والغاز ينتشر ليملأ الوعاء. في الصلب تهتز الجسيمات قرب مواضعها، وفي السائل تتحرك بالنسبة إلى بعضها، وفي الغاز تكون المسافات بينها أكبر عادة. تتغير الحالة بتغير درجة الحرارة أو الضغط؛ ومن التحولات الانصهار والتجمد والتبخر والتكاثف والتسامي. تغير حالة الماء لا يحول جزيء H2O إلى عنصرين جديدين. والبلازما حالة متأينة تحتوي جسيمات مشحونة وتوجد في النجوم وبعض المصابيح.",
    "en": "A solid has an approximately fixed shape and volume; a liquid has a fixed volume but takes its container shape; a gas expands to fill its container. Solid particles vibrate near their positions, liquid particles move relative to one another, and gas particles are usually much farther apart. Temperature or pressure changes can cause melting, freezing, evaporation, condensation or sublimation. A phase change of water does not turn an H2O molecule into new elements. Plasma is an ionized state containing charged particles, found in stars and some lamps.",
    "story": "تخيّل مكعب ثلج يتحول إلى ماء ثم إلى بخار. تبقى المادة ماء في هذه التحولات، لكن ترتيب الجزيئات وحركتها والمسافات بينها تتغير. إذا عاد البخار إلى سائل نسمي التحول تكاثفاً. الرسوم التي تعرض كرات ملونة هي وسيلة لفهم الحركة، وليست قياساً لأحجام الجزيئات.",
    "storyEn": "Imagine an ice cube turning to water then to vapor. The substance stays water through these changes, but the arrangement, motion and spacing of its molecules change. When vapor returns to liquid we call the change condensation. Drawings that show colored balls are a way to understand the motion, not a measurement of molecule sizes.",
    "quiz": [
      {
        "q": "ما الفرق الأساسي بين حالات المادة؟",
        "o": [
          "طاقة حركة الجزيئات",
          "نوع الذرات",
          "لون المادة"
        ],
        "a": 0
      },
      {
        "q": "التسامي هو تحول؟",
        "o": [
          "صلب إلى غاز مباشرة",
          "غاز إلى سائل",
          "سائل إلى صلب"
        ],
        "a": 0
      },
      {
        "q": "البلازما توجد في؟",
        "o": [
          "الشمس والنجوم",
          "ماء البحر",
          "الجليد"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What is the basic difference between states of matter?",
            "o": [
                  "The energy of the particles' motion",
                  "The type of atoms",
                  "The substance's color"
            ],
            "a": 0
      },
      {
            "q": "Sublimation is the change from?",
            "o": [
                  "Solid to gas directly",
                  "Gas to liquid",
                  "Liquid to solid"
            ],
            "a": 0
      },
      {
            "q": "Plasma is found in?",
            "o": [
                  "The Sun and stars",
                  "Sea water",
                  "Ice"
            ],
            "a": 0
      }
],
    "video": "حالات المادة للاطفال",
    "videoEn": "states of matter for kids"
  },
  {
    "id": "solutions",
    "src": "https://openstax.org/books/chemistry-2e/pages/11-1-the-dissolution-process",
    "emoji": "🥤",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "المحاليل والمخاليط",
    "titleEn": "Solutions & Mixtures",
    "kw": [
      "محلول",
      "محاليل",
      "مخلوط",
      "مخاليط",
      "ذوبان",
      "إذابة",
      "تركيز",
      "solut",
      "mixtur",
      "dissolv",
      "concentration"
    ],
    "ar": "عندما يذوب السكر في الماء تتوزع جزيئاته بين جزيئات الماء لتكوين محلول متجانس. الماء هو المذيب والسكر هو المذاب؛ السكر لم يختفِ ولم يتحول إلى ماء. بعض المواد لا تمتزج بالماء جيداً، مثل الزيت، لأن قوى التجاذب بين الجزيئات مختلفة. للمذاب حد للذوبان عند درجة حرارة معينة، وعند بلوغه يسمى المحلول مشبعاً. تؤثر درجة الحرارة في سرعة الذوبان وفي كمية ما يذوب، لكن تأثيرها ليس واحداً لكل المواد.",
    "en": "When sugar dissolves in water, its molecules spread among water molecules to make a homogeneous solution. Water is the solvent and sugar is the solute; the sugar has neither vanished nor turned into water. Some substances, such as oil, do not mix well with water because their intermolecular attractions differ. A solute has a solubility limit at a given temperature; a solution at that limit is saturated. Temperature can affect both dissolving rate and solubility, but not in the same way for every substance.",
    "story": "تخيّل كوب ماء وسكراً يذوب فيه. لا ترى الحبيبات بعد امتزاج المحلول، لكن جزيئات السكر ما زالت موجودة موزعة خلال الماء. وإذا تغيرت الظروف فقد يتبلور جزء من المذاب مرة أخرى. الذوبان لا يعني اختفاء المادة أو فناءها.",
    "storyEn": "Imagine a glass of water with sugar dissolving in it. You no longer see the grains after the solution mixes, but the sugar molecules are still there, spread through the water. And if conditions change, part of the solute may crystallize again. Dissolving does not mean the matter vanished or was destroyed.",
    "quiz": [
      {
        "q": "لماذا يذوب الملح في الماء؟",
        "o": [
          "الماء قطبي يجذب الأيونات",
          "الملح يتبخر",
          "الملح يتحول لغاز"
        ],
        "a": 0
      },
      {
        "q": "ماذا يحدث عند التشبع؟",
        "o": [
          "لا يذوب مزيد من المذاب",
          "يتجمد المحلول",
          "يتغير لون الماء"
        ],
        "a": 0
      },
      {
        "q": "لماذا لا يختلط الزيت بالماء؟",
        "o": [
          "لأنه غير قطبي",
          "لأنه أثقل",
          "لأنه ساخن"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Why does salt dissolve in water?",
            "o": [
                  "Water is polar and attracts the ions",
                  "The salt evaporates",
                  "The salt turns to gas"
            ],
            "a": 0
      },
      {
            "q": "What happens at saturation?",
            "o": [
                  "No more solute dissolves",
                  "The solution freezes",
                  "The water changes color"
            ],
            "a": 0
      },
      {
            "q": "Why does oil not mix with water?",
            "o": [
                  "Because it is nonpolar",
                  "Because it is heavier",
                  "Because it is hot"
            ],
            "a": 0
      }
],
    "video": "المحاليل للاطفال",
    "videoEn": "solutions and mixtures for kids"
  },
  {
    "id": "metals",
    "src": "https://en.wikipedia.org/wiki/Metal",
    "emoji": "🔩",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "المعادن",
    "titleEn": "Metals",
    "kw": [
      "معدن",
      "معادن",
      "فلز",
      "فلزات",
      "حديد",
      "نحاس",
      "ذهب",
      "سبيكة",
      "metal",
      "iron",
      "copper",
      "gold",
      "alloy"
    ],
    "ar": "من صفات معادن كثيرة اللمعان وتوصيل الحرارة والكهرباء وقابلية التشكيل. يساعد نموذج الرابطة الفلزية على تفسير ذلك: إلكترونات متحركة تسهم في ترابط شبكة من المراكز الأيونية. تختلف المعادن في الصلابة والكثافة والنشاط الكيميائي؛ الحديد مثلاً يتعرض للصدأ في وجود الماء والأكسجين. السبيكة مزيج ذو خواص فلزية يحتوي أكثر من عنصر، أحدها معدن عادة. خلط العناصر يغير الخواص، لكنه لا يجعل كل سبيكة أقوى من كل مكوناتها دائماً.",
    "en": "Many metals are shiny, conduct heat and electricity, and can be shaped. The metallic-bond model helps explain this: mobile electrons help bind a lattice of ion cores. Metals differ in hardness, density and chemical reactivity; iron, for example, rusts in the presence of water and oxygen. An alloy is a material with metallic properties containing more than one element, usually including a metal. Combining elements changes properties, but does not make every alloy stronger than all of its ingredients.",
    "story": "تخيّل أنك تختار مادة لسلك، وأخرى لأداة تتحمل الاحتكاك. قد تفضل النحاس في السلك لتوصيله الجيد، بينما تختار سبيكة مناسبة للأداة لصلابتها. اختيار المادة يعتمد على الوظيفة، فلا يوجد معدن واحد هو الأفضل في كل شيء.",
    "storyEn": "Imagine choosing a material for a wire, and another for a tool that must withstand friction. You might prefer copper for the wire because it conducts well, while choosing a suitable alloy for the tool because of its hardness. Choosing a material depends on the job; no single metal is best at everything.",
    "quiz": [
      {
        "q": "ما سر توصيل المعادن للكهرباء؟",
        "o": [
          "إلكتروناتها الحرة",
          "ثقل ذراتها",
          "لمعانها"
        ],
        "a": 0
      },
      {
        "q": "لماذا يبقى الذهب لامعاً؟",
        "o": [
          "لا يتفاعل مع الأكسجين",
          "لأنه سائل",
          "لأنه نادر"
        ],
        "a": 0
      },
      {
        "q": "البرونز سبيكة من؟",
        "o": [
          "النحاس والقصدير",
          "الحديد والفحم",
          "الذهب والفضة"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Why do metals conduct electricity?",
            "o": [
                  "Their free electrons",
                  "Their heavy atoms",
                  "Their shine"
            ],
            "a": 0
      },
      {
            "q": "Why does gold stay shiny?",
            "o": [
                  "It does not react with oxygen",
                  "Because it is liquid",
                  "Because it is rare"
            ],
            "a": 0
      },
      {
            "q": "Bronze is an alloy of?",
            "o": [
                  "Copper and tin",
                  "Iron and coal",
                  "Gold and silver"
            ],
            "a": 0
      }
],
    "video": "المعادن للاطفال",
    "videoEn": "metals for kids"
  },
  {
    "id": "organic",
    "src": "https://en.wikipedia.org/wiki/Organic_chemistry",
    "emoji": "🧫",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "كيمياء الكربون",
    "titleEn": "Carbon Chemistry",
    "kw": [
      "عضوي",
      "عضوية",
      "كربون",
      "هيدروكربون",
      "بلاستيك",
      "ماس",
      "جرافيت",
      "organic",
      "carbon",
      "plastic",
      "diamond",
      "graphite"
    ],
    "ar": "عنصر واحد يبني كيمياء الحياة كلها: الكربون. ذرته تملك أربع أيادٍ، فتتشابك في سلاسل وحلقات وأغصان لا تنتهي - أكثر من عشرة ملايين مركب عضوي معروف، من الميثان إلى الحمض النووي. البنزين والغاز والشمع هيدروكربونات: كربون وهيدروجين فقط. والبلاستيك سلاسل كربونية طويلة (بوليمرات) صنعها الإنسان. وأغرب شيء: الماس والجرافيت كلاهما كربون خالص! الفرق فقط في الترتيب - روابط رباعية صلبة في كل اتجاه فتصنع أقسى مادة، أو صفائح سداسية تنزلق فوق بعضها فتصنع قلم الرصاص. الترتيب يصنع القدر.",
    "en": "One element builds all the chemistry of life: carbon. Its atom has four hands, linking into endless chains, rings and branches - over ten million known organic compounds, from methane to DNA. Gasoline, gas and wax are hydrocarbons: carbon and hydrogen only. Plastic is long carbon chains (polymers) made by humans. Strangest of all: diamond and graphite are both pure carbon! The difference is only arrangement - rigid four-way bonds in every direction making the hardest material, or hexagonal sheets sliding over each other making pencil lead. Arrangement makes destiny.",
    "story": "تخيّل ذرات كربون كقطع بناء تستطيع صنع أربع روابط. يمكن ترتيبها في سلاسل أو حلقات ثم إضافة عناصر مثل الهيدروجين والأكسجين. هذه المرونة تساعد على تفسير تنوع المركبات العضوية من مواد الوقود إلى جزيئات الحياة. النموذج المعروض لحلقة البنزين مثال لبنية حلقية، وليس مادة للتعامل المنزلي.",
    "storyEn": "Imagine carbon atoms as building pieces that can make four bonds each. They can be arranged in chains or rings, then elements like hydrogen and oxygen are added. This flexibility helps explain the variety of organic compounds, from fuels to the molecules of life. The displayed benzene-ring model is an example of a ring structure, not a substance for home handling.",
    "quiz": [
      {
        "q": "كم رابطة تكوّن ذرة الكربون؟",
        "o": [
          "أربعاً",
          "اثنتين",
          "ستاً"
        ],
        "a": 0
      },
      {
        "q": "الماس والجرافيت كلاهما؟",
        "o": [
          "كربون خالص",
          "فحم مضغوط",
          "معدنان"
        ],
        "a": 0
      },
      {
        "q": "ماذا أسقطت تجربة فوهلر؟",
        "o": [
          "فكرة القوة الحيوية",
          "الجدول الدوري",
          "نظرية الذرة"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "How many bonds does a carbon atom form?",
            "o": [
                  "Four",
                  "Two",
                  "Six"
            ],
            "a": 0
      },
      {
            "q": "Diamond and graphite are both?",
            "o": [
                  "Pure carbon",
                  "Compressed coal",
                  "Two metals"
            ],
            "a": 0
      },
      {
            "q": "What did Wohler's experiment overturn?",
            "o": [
                  "The idea of vital force",
                  "The periodic table",
                  "Atomic theory"
            ],
            "a": 0
      }
],
    "video": "كيمياء الكربون للاطفال",
    "videoEn": "organic chemistry for kids"
  },
  {
    "id": "electrochem",
    "src": "https://en.wikipedia.org/wiki/Electrochemistry",
    "emoji": "🔋",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "الكيمياء الكهربائية",
    "titleEn": "Electrochemistry",
    "kw": [
      "كهروكيمي",
      "بطارية",
      "خلية جلفانية",
      "تحليل كهربائي",
      "electrochem",
      "battery",
      "electrolysis",
      "galvanic"
    ],
    "ar": "تربط الكيمياء الكهربائية بين التفاعلات الكيميائية والطاقة الكهربائية. في الخلية التي تعمل كبطارية تدفع تفاعلات الأكسدة والاختزال الإلكترونات عبر الدائرة الخارجية، وتتحرك الأيونات في الإلكتروليت للمحافظة على انتقال الشحنة. في التحليل الكهربائي تستخدم طاقة كهربائية لدفع تفاعل غير تلقائي. بعض البطاريات قابلة لإعادة الشحن بعكس تفاعلاتها المناسبة، لكن البطاريات غير المخصصة للشحن قد تتلف أو تتمزق إذا حاولنا شحنها. لا تفتح البطاريات أو تصنع خلايا أو غازات في المنزل؛ هذا النموذج للتعلم.",
    "en": "Electrochemistry connects chemical reactions and electrical energy. In a cell operating as a battery, oxidation and reduction reactions drive electrons through the external circuit, while ions move in the electrolyte to support charge transfer. Electrolysis uses electrical energy to drive a nonspontaneous reaction. Some batteries can be recharged by reversing suitable reactions, but trying to recharge a nonrechargeable battery can damage or rupture it. Do not open batteries or make cells or gases at home; this model is for learning.",
    "story": "تخيّل مسارين داخل نموذج خلية: إلكترونات تعبر سلكاً خارجياً، وأيونات تتحرك داخل الإلكتروليت. لا يكفي أن نرسم سلكاً لشرح البطارية؛ انتقال الأيونات داخلها جزء ضروري أيضاً. هكذا نربط ما يحدث في الدائرة بما يحدث في المادة، دون فتح بطارية حقيقية.",
    "storyEn": "Imagine two paths inside a cell model: electrons crossing an external wire, and ions moving through the electrolyte. Drawing a wire alone is not enough to explain a battery; the movement of ions inside it is also essential. That is how we connect what happens in the circuit with what happens in the material, without opening a real battery.",
    "quiz": [
      {
        "q": "ماذا يحدث داخل البطارية؟",
        "o": [
          "تفاعل كيميائي يدفع الإلكترونات",
          "تخزين شرارات",
          "ضغط غاز"
        ],
        "a": 0
      },
      {
        "q": "التحليل الكهربائي هو؟",
        "o": [
          "تفكيك مادة بالكهرباء",
          "شحن هاتف",
          "تسخين سلك"
        ],
        "a": 0
      },
      {
        "q": "على اسم مَن سُميت وحدة الجهد؟",
        "o": [
          "فولتا",
          "غالفاني",
          "أينشتاين"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What happens inside a battery?",
            "o": [
                  "A chemical reaction pushes electrons",
                  "Sparks are stored",
                  "Gas is compressed"
            ],
            "a": 0
      },
      {
            "q": "Electrolysis is?",
            "o": [
                  "Breaking down a substance with electricity",
                  "Charging a phone",
                  "Heating a wire"
            ],
            "a": 0
      },
      {
            "q": "The volt unit is named after whom?",
            "o": [
                  "Volta",
                  "Galvani",
                  "Einstein"
            ],
            "a": 0
      }
],
    "video": "البطارية للاطفال",
    "videoEn": "how batteries work for kids"
  },
  {
    "id": "gases",
    "src": "https://en.wikipedia.org/wiki/Gas",
    "emoji": "🎈",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "الغازات والهواء",
    "titleEn": "Gases & Air",
    "kw": [
      "غاز",
      "غازات",
      "هواء",
      "أكسجين",
      "اكسجين",
      "نيتروجين",
      "هيليوم",
      "gas",
      "air",
      "oxygen",
      "nitrogen",
      "helium"
    ],
    "ar": "الغاز حالة من المادة لا تملك شكلاً أو حجماً ثابتاً، بل تنتشر لتملأ الوعاء. جسيماته متباعدة وتتحرك باستمرار، واصطداماتها بجدران الوعاء تفسر ضغطه. الهواء خليط من غازات، وليس فراغاً أو غازاً واحداً. تختلف سرعة الجسيمات بحسب كتلتها ودرجة الحرارة، لذلك لا توجد سرعة واحدة لكل الغازات. وعند مقارنة غازين في نفس الظروف يمكن أن تساعد الكثافة على تفسير طفو بالون أو هبوطه.",
    "en": "A gas has no fixed shape or volume and expands to fill its container. Its widely spaced particles move continuously, and collisions with the walls explain gas pressure. Air is a mixture of gases, not empty space or a single gas. Particle speeds depend on mass and temperature, so there is no one speed for all gases. Comparing gas densities under the same conditions helps explain why a balloon rises or falls.",
    "story": "تخيّل غازاً داخل وعاء مغلق. حتى لو بدا الوعاء ساكناً، تتحرك جسيماته وتصطدم بالجدران. عند تسخين الغاز في وعاء صلب ثابت الحجم تزداد طاقة الحركة ويزداد الضغط عادة. النموذج يبطئ الحركة ويكبر الجسيمات كي نراها؛ ليس تصويراً بمقياس حقيقي.",
    "storyEn": "Imagine a gas inside a closed container. Even if the container looks still, its particles move and collide with the walls. When the gas is heated in a rigid container of fixed volume, the kinetic energy grows and the pressure usually rises. The model slows the motion and enlarges the particles so we can see them; it is not drawn to a real scale.",
    "quiz": [
      {
        "q": "ماذا يفعل الغاز في وعاء؟",
        "o": [
          "ينتشر ليملأه",
          "يبقى في ركن واحد دائماً",
          "لا يملك كتلة"
        ],
        "a": 0
      },
      {
        "q": "أي غاز يرفع البالون؟",
        "o": [
          "الهيليوم",
          "الأكسجين",
          "ثاني أكسيد الكربون"
        ],
        "a": 0
      },
      {
        "q": "ما الذي يفسر ضغط الغاز على جدار الوعاء؟",
        "o": [
          "اصطدام الجسيمات بالجدار",
          "لون الغاز",
          "غياب الجزيئات"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What does a gas do in a container?",
            "o": [
                  "Spreads to fill it",
                  "Stays in one corner forever",
                  "Has no mass"
            ],
            "a": 0
      },
      {
            "q": "Which gas lifts a balloon?",
            "o": [
                  "Helium",
                  "Oxygen",
                  "Carbon dioxide"
            ],
            "a": 0
      },
      {
            "q": "What explains the gas pressure on the container wall?",
            "o": [
                  "Particles colliding with the wall",
                  "The color of the gas",
                  "The absence of particles"
            ],
            "a": 0
      }
],
    "video": "الغازات للاطفال",
    "videoEn": "gases and air for kids"
  }
,
  {
    "id": "fractions",
    "src": "https://openstax.org/books/prealgebra-2e/pages/4-1-visualize-fractions",
    "emoji": "🥧",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "الكسور",
    "titleEn": "Fractions",
    "kw": [
      "كسور",
      "الكسر",
      "بسط",
      "مقام",
      "fraction",
      "numerator",
      "denominator"
    ],
    "ar": "الكسر يصف أجزاء من كلّ مقسوم إلى أجزاء متساوية. في الكسر 3/4 المقام 4 يخبرنا إلى كم جزء متساوٍ قسمنا الكل، والبسط 3 يخبرنا كم جزءاً أخذنا. الكسور المتكافئة مثل 1/2 و2/4 لها نفس القيمة لأننا ضربنا البسط والمقام في العدد نفسه. إذا كان البسط أكبر من المقام فالكسر غير حقيقي ويمكن كتابته عدداً كسرياً مثل 5/4 = 1 و1/4. تقسيم الكل إلى أجزاء غير متساوية لا يعطي كسراً صحيحاً عن هذه الأجزاء.",
    "en": "A fraction describes parts of a whole divided into equal parts. In 3/4 the denominator 4 says how many equal parts the whole is split into, and the numerator 3 says how many parts we take. Equivalent fractions like 1/2 and 2/4 have the same value because numerator and denominator were multiplied by the same number. When the numerator is larger than the denominator the fraction is improper and can be written as a mixed number, like 5/4 = 1 and 1/4. Splitting a whole into unequal parts does not give a correct fraction of those parts.",
    "story": "تخيّل قرصاً مقسوماً أربع قطع متساوية: لو أكلت قطعة واحدة فقد أخذت 1/4 بالضبط. لو قسمت كل قطعة نصفين صار عندك ثمان قطع، والقطعة نفسها صارت 2/8 وهي الكمية نفسها. لهذا تسمى 1/4 و2/8 كسرين متكافئين.",
    "storyEn": "Imagine a disc divided into four equal pieces: if you eat one piece you took exactly 1/4. If you split every piece in two you get eight pieces, and the same amount is now 2/8. That is why 1/4 and 2/8 are called equivalent fractions.",
    "quiz": [
      {
        "q": "في الكسر 3/4 ماذا يخبرنا المقام 4؟",
        "o": [
          "عدد الأجزاء المأخوذة",
          "عدد الأجزاء المتساوية في الكل",
          "حجم القرص"
        ],
        "a": 1
      },
      {
        "q": "أي كسر مكافئ للكسر 1/2؟",
        "o": [
          "2/4",
          "1/3",
          "3/2"
        ],
        "a": 0
      },
      {
        "q": "الكسر 5/4 يساوي العدد الكسري:",
        "o": [
          "4/5",
          "1 و1/4",
          "5/1"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "In the fraction 3/4 what does the denominator 4 tell us?",
            "o": [
                  "The number of parts taken",
                  "The number of equal parts in the whole",
                  "The size of the disc"
            ],
            "a": 1
      },
      {
            "q": "Which fraction is equivalent to 1/2?",
            "o": [
                  "2/4",
                  "1/3",
                  "3/2"
            ],
            "a": 0
      },
      {
            "q": "The fraction 5/4 equals which mixed number?",
            "o": [
                  "4/5",
                  "1 and 1/4",
                  "5/1"
            ],
            "a": 1
      }
],
    "video": "شرح الكسور للاطفال",
    "videoEn": "what is a fraction numerator denominator"
  },
  {
    "id": "percent",
    "src": "https://openstax.org/books/prealgebra-2e/pages/6-key-concepts",
    "emoji": "％",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "النسب المئوية",
    "titleEn": "Percents",
    "kw": [
      "نسبة مئوية",
      "نسبه مئويه",
      "النسبة المئوية",
      "النسبه المئويه",
      "المية",
      "percent",
      "percentage"
    ],
    "ar": "النسبة المئوية هي نسبة مقامها 100؛ فـ 25% تعني 25 من كل 100، أي الكسر 25/100 = 1/4. لتحويل نسبة مئوية إلى عدد عشري اقسم على 100، فـ 25% = 0.25. ولإيجاد 25% من 80 اضرب 0.25 في 80 فيكون الناتج 20. الزيادة والنقصان المئويان يقاسان من المقدار الأصلي: ارتفاع سعر من 80 إلى 100 زيادة قدرها 20/80 = 25%. الخلط بين 25% وربع الكمية شائع، وهما في الحقيقة القيمة نفسها.",
    "en": "A percent is a ratio with denominator 100: 25% means 25 out of every 100, the fraction 25/100 = 1/4. To convert a percent to a decimal divide by 100, so 25% = 0.25. To find 25% of 80, multiply 0.25 by 80 to get 20. Percent increase and decrease are measured from the original amount: a price rising from 80 to 100 is a 20/80 = 25% increase. Confusing 25% with a quarter is common, and they are in fact the same value.",
    "story": "تخيّل شبكة من 100 مربع صغير. لو لونت 25 مربعاً منها مثلت 25% دون حساب معقد. هذا سر النسبة المئوية: طريقة ثابتة للمقارنة تجعل المقام دائماً 100 مهما كان الكل الأصلي.",
    "storyEn": "Imagine a grid of 100 small squares. If you color 25 of them you have shown 25% without complicated arithmetic. That is the secret of percentages: a fixed way of comparing that always makes the denominator 100, whatever the original whole.",
    "quiz": [
      {
        "q": "25% تعني:",
        "o": [
          "25 من كل 1000",
          "25 من كل 100",
          "25 ضعف"
        ],
        "a": 1
      },
      {
        "q": "25% من 80 يساوي:",
        "o": [
          "20",
          "25",
          "40"
        ],
        "a": 0
      },
      {
        "q": "لتحويل 25% إلى عدد عشري:",
        "o": [
          "نضرب في 100",
          "نقسم على 100",
          "نطرح 100"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "25% means:",
            "o": [
                  "25 out of every 1000",
                  "25 out of every 100",
                  "25 times"
            ],
            "a": 1
      },
      {
            "q": "25% of 80 equals:",
            "o": [
                  "20",
                  "25",
                  "40"
            ],
            "a": 0
      },
      {
            "q": "To convert 25% to a decimal:",
            "o": [
                  "Multiply by 100",
                  "Divide by 100",
                  "Subtract 100"
            ],
            "a": 1
      }
],
    "video": "شرح النسبة المئوية",
    "videoEn": "what is a percent"
  },
  {
    "id": "algebra",
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/2-1-solve-equations-using-the-subtraction-and-addition-properties-of-equality",
    "emoji": "⚖️",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "حل المعادلات",
    "titleEn": "Solving Equations",
    "kw": [
      "معادلة",
      "معادلات",
      "متغير",
      "جبر",
      "equation",
      "variable",
      "solve for"
    ],
    "ar": "المعادلة ميزان متوازن: الطرفان متساويان، وما تفعله بأحدهما يجب أن تفعله بالآخر لتبقى المساواة صحيحة. لحل x + 3 = 8 نطرح 3 من الطرفين فنحصل على x = 5، وهذه خاصية الطرح للمساواة. وعندما يكون العدد مطروحاً من المتغير مثل x - 5 = 8 نضيف 5 للطرفين. الهدف دائماً عزل المتغير وحده في طرف، وبعد الحل نتحقق بالتعويض: 5 + 3 = 8 عبارة صحيحة.",
    "en": "An equation is a balanced scale: both sides are equal, and whatever you do to one side you must do to the other to keep the equality true. To solve x + 3 = 8 subtract 3 from both sides to get x = 5; this is the Subtraction Property of Equality. When a number is subtracted from the variable, as in x - 5 = 8, we add it to both sides instead. The goal is always to isolate the variable alone, then check by substitution: 5 + 3 = 8 is a true statement.",
    "story": "تخيّل مظروفاً فيه عدد مجهول من الأزرار وبجانبه 3 أزرار مكشوفة، وفي كفة الميزان المقابلة 8 أزرار. لو أزلت 3 أزرار من الطرفين معاً بقي الميزان متوازناً وعرفت أن المظروف يخفي 5. هذا كل سر حل المعادلة: العملية نفسها على الطرفين.",
    "storyEn": "Imagine an envelope hiding an unknown number of buttons, with 3 loose buttons beside it, and 8 buttons on the other side of a balance. If you remove 3 buttons from both sides together, the balance stays level and you know the envelope hides 5. That is the whole secret of solving equations: do the same operation to both sides.",
    "quiz": [
      {
        "q": "لحل x + 3 = 8 نفعل ماذا؟",
        "o": [
          "نضيف 3 للطرفين",
          "نطرح 3 من الطرفين",
          "نضرب الطرفين في 3"
        ],
        "a": 1
      },
      {
        "q": "حل x - 5 = 8 هو:",
        "o": [
          "x = 3",
          "x = 13",
          "x = 40"
        ],
        "a": 1
      },
      {
        "q": "بعد إيجاد الحل نتحقق منه بـ:",
        "o": [
          "التخمين مرة أخرى",
          "التعويض في المعادلة الأصلية",
          "تغيير إشارة المتغير"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "To solve x + 3 = 8 we do what?",
            "o": [
                  "Add 3 to both sides",
                  "Subtract 3 from both sides",
                  "Multiply both sides by 3"
            ],
            "a": 1
      },
      {
            "q": "The solution of x - 5 = 8 is:",
            "o": [
                  "x = 3",
                  "x = 13",
                  "x = 40"
            ],
            "a": 1
      },
      {
            "q": "After finding a solution we check it by:",
            "o": [
                  "Guessing again",
                  "Substituting into the original equation",
                  "Changing the variable's sign"
            ],
            "a": 1
      }
],
    "video": "حل المعادلات من الدرجة الأولى",
    "videoEn": "solving equations addition subtraction property"
  },
  {
    "id": "coordinates",
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/4-1-use-the-rectangular-coordinate-system",
    "emoji": "📍",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "نظام الإحداثيات",
    "titleEn": "The Coordinate Plane",
    "kw": [
      "احداثيات",
      "إحداثيات",
      "محور",
      "مستوى",
      "coordinate",
      "axis",
      "axes",
      "origin"
    ],
    "ar": "نظام الإحداثيات شبكة تحدد مواقع النقاط مثل الخريطة. المحور الأفقي هو محور x والعمودي هو محور y ويتقاطعان في نقطة الأصل (0,0). كل نقطة توصف بزوج مرتب (x,y): الرقم الأول يقول كم تتحرك أفقياً والثاني عمودياً، والترتيب مهم. يقسم المحوران المستوى إلى أربعة أرباع مرقمة بالأرقام الرومانية بدءاً من الأعلى يميناً وعكس عقارب الساعة. النقطة (2,1) تقع يمين الأصل بوحدتين وفوقه بوحدة واحدة.",
    "en": "The coordinate system is a grid for locating points, like a map. The horizontal number line is the x-axis, the vertical one is the y-axis, and they cross at the origin (0,0). Every point is described by an ordered pair (x,y): the first number says how far to move horizontally, the second vertically, and the order matters. The axes split the plane into four quadrants numbered with Roman numerals, starting upper right and going counterclockwise. The point (2,1) sits 2 units right of the origin and 1 unit up.",
    "story": "تخيّل أنك تصف مقعدك لصديق: الصف الثالث والكرسي الثاني. لو قلبت الترتيب وصل إلى مقعد مختلف تماماً. الزوج المرتب يعمل بالطريقة نفسها: (2,1) نقطة و(1,2) نقطة أخرى، لأن الترتيب جزء من العنوان.",
    "storyEn": "Imagine describing your seat to a friend: row three, chair two. If you swap the order, your friend reaches a completely different seat. An ordered pair works the same way: (2,1) is one point and (1,2) is another, because order is part of the address.",
    "quiz": [
      {
        "q": "أين تتقاطع محاور الإحداثيات؟",
        "o": [
          "في النقطة (1,1)",
          "في نقطة الأصل (0,0)",
          "في الربع الأول"
        ],
        "a": 1
      },
      {
        "q": "في الزوج المرتب (2,1) الرقم 2 هو:",
        "o": [
          "الإحداثي y",
          "الإحداثي x",
          "المسافة عن الأصل"
        ],
        "a": 1
      },
      {
        "q": "النقطة (3,-2) تقع في الربع:",
        "o": [
          "الأول",
          "الثاني",
          "الرابع"
        ],
        "a": 2
      }
    ],
    "quizEn": [
      {
            "q": "Where do the coordinate axes meet?",
            "o": [
                  "At the point (1,1)",
                  "At the origin (0,0)",
                  "In the first quadrant"
            ],
            "a": 1
      },
      {
            "q": "In the ordered pair (2,1) the number 2 is:",
            "o": [
                  "The y-coordinate",
                  "The x-coordinate",
                  "The distance from the origin"
            ],
            "a": 1
      },
      {
            "q": "The point (3,-2) lies in which quadrant?",
            "o": [
                  "First",
                  "Second",
                  "Fourth"
            ],
            "a": 2
      }
],
    "video": "المستوى الاحداثي شرح",
    "videoEn": "rectangular coordinate system quadrants"
  },
  {
    "id": "circles",
    "src": "https://openstax.org/books/prealgebra-2e/pages/c-geometric-formulas",
    "emoji": "⭕",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "الدائرة",
    "titleEn": "Circles",
    "kw": [
      "دائرة",
      "دوائر",
      "محيط",
      "نصف القطر",
      "قطر الدائرة",
      "circle",
      "radius",
      "diameter",
      "circumference"
    ],
    "ar": "الدائرة هي كل النقاط التي تبعد المسافة نفسها عن نقطة المركز، وتسمى هذه المسافة نصف القطر r. القطر d أطول وتر في الدائرة، يمر بالمركز ويساوي ضعف نصف القطر: d = 2r. المحيط هو المسافة حول الدائرة ويحسب بالعلاقة C = 2πr أو C = πd. المساحة A = πr² أي تقريباً 3.14 مضروبة في مربع نصف القطر. π نسبة ثابتة لكل دائرة: محيطها مقسوماً على قطرها مهما كان حجمها.",
    "en": "A circle is all points at the same distance from a center point; that distance is the radius r. The diameter d is the longest chord, passing through the center, and equals twice the radius: d = 2r. The circumference, the distance around the circle, is C = 2πr or C = πd. The area is A = πr², roughly 3.14 times the radius squared. π is a fixed ratio for every circle: its circumference divided by its diameter, whatever the size.",
    "story": "ثبّت طرف حبل في الأرض وشدّ الطرف الآخر وامشِ حوله؛ سترسم دائرة لأن كل نقطة على البعد نفسه من المركز. لهذا تظهر الدوائر في العجلات والأطباق: نقطة مركزية ومسافة ثابتة.",
    "storyEn": "Fix one end of a rope in the ground, pull the other end tight and walk around it; you will draw a circle because every point is the same distance from the center. That is why circles appear in wheels and plates: a center point and a fixed distance.",
    "quiz": [
      {
        "q": "القطر يساوي:",
        "o": [
          "نصف نصف القطر",
          "ضعف نصف القطر",
          "محيط الدائرة"
        ],
        "a": 1
      },
      {
        "q": "محيط الدائرة يحسب بـ:",
        "o": [
          "C = 2πr",
          "A = πr²",
          "C = r²"
        ],
        "a": 0
      },
      {
        "q": "π هي نسبة:",
        "o": [
          "المساحة إلى القطر",
          "المحيط إلى القطر",
          "القطر إلى نصف القطر"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "The diameter equals:",
            "o": [
                  "Half the radius",
                  "Twice the radius",
                  "The circumference"
            ],
            "a": 1
      },
      {
            "q": "The circumference of a circle is found with:",
            "o": [
                  "C = 2πr",
                  "A = πr²",
                  "C = r²"
            ],
            "a": 0
      },
      {
            "q": "π is the ratio of:",
            "o": [
                  "Area to diameter",
                  "Circumference to diameter",
                  "Diameter to radius"
            ],
            "a": 1
      }
],
    "video": "محيط الدائرة ومساحتها",
    "videoEn": "circle circumference radius diameter formula"
  },
  {
    "id": "solids",
    "src": "https://openstax.org/books/prealgebra-2e/pages/c-geometric-formulas",
    "emoji": "🧊",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "الأجسام المجسمة",
    "titleEn": "Solids: Volume and Area",
    "kw": [
      "مجسم",
      "مجسمات",
      "حجم",
      "مساحة السطح",
      "مكعب",
      "volume",
      "surface area",
      "cube",
      "sphere"
    ],
    "ar": "الحجم يقيس كم يتسع الجسم من الداخل، والمساحة السطحية تقيس مجموع مساحات أوجهه الخارجية. حجم المكعب ضلع س هو س³، ومساحته السطحية 6س² لأن له ستة أوجه مربعة متساوية. حجم الأسطوانة πr²h أي مساحة القاعدة في الارتفاع، وحجم الكرة 4/3 πr³ ومساحتها السطحية 4πr². وحدة الحجم مكعبة لأنها تضرب ثلاثة أبعاد، ووحدة المساحة مربعة لأنها تضرب بعدين. مضاعفة الضلع لا تضاعف الحجم؛ بل تجعله 8 أضعاف في المكعب.",
    "en": "Volume measures how much a solid holds inside; surface area measures the total area of its outside faces. The volume of a cube with side s is s³, and its surface area is 6s² because it has six equal square faces. A cylinder has volume πr²h, base area times height; a sphere has volume 4/3 πr³ and surface area 4πr². Volume units are cubic because they multiply three dimensions; area units are square because they multiply two. Doubling the side does not double the volume: a cube grows to 8 times its volume.",
    "story": "تخيّل مكعباً ضلعه 2 سم. لن يتسع لقطعتين من مكعب الـ 1 سم بل لثماني قطع كاملة، لأن الحجم يتضاعف في الأبعاد الثلاثة معاً. لهذا تبدو زيادات الأحجام أكبر بكثير مما نتوقع.",
    "storyEn": "Imagine a cube with a 2 cm edge. It will not hold two of the 1 cm cubes but eight whole ones, because volume multiplies in all three dimensions together. That is why size increases look much bigger than we expect.",
    "quiz": [
      {
        "q": "حجم مكعب ضلعه 3 يساوي:",
        "o": [
          "9",
          "27",
          "18"
        ],
        "a": 1
      },
      {
        "q": "المساحة السطحية تقيس:",
        "o": [
          "ما بداخل الجسم",
          "مجموع مساحات الأوجه الخارجية",
          "وزن الجسم"
        ],
        "a": 1
      },
      {
        "q": "وحدة قياس الحجم تكون:",
        "o": [
          "متراً",
          "متراً مربعاً",
          "متراً مكعباً"
        ],
        "a": 2
      }
    ],
    "quizEn": [
      {
            "q": "The volume of a cube with edge 3 equals:",
            "o": [
                  "9",
                  "27",
                  "18"
            ],
            "a": 1
      },
      {
            "q": "Surface area measures:",
            "o": [
                  "What is inside the solid",
                  "The sum of the outer face areas",
                  "The solid's weight"
            ],
            "a": 1
      },
      {
            "q": "Volume is measured in:",
            "o": [
                  "Meters",
                  "Square meters",
                  "Cubic meters"
            ],
            "a": 2
      }
],
    "video": "الحجم والمساحة السطحية",
    "videoEn": "volume and surface area of solids formulas"
  },
  {
    "id": "probability",
    "src": "https://openstax.org/books/prealgebra-2e/pages/5-5-averages-and-probability",
    "emoji": "🎲",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "الاحتمال",
    "titleEn": "Probability",
    "kw": [
      "احتمال",
      "احتمالات",
      "نرد",
      "probability",
      "dice",
      "chance"
    ],
    "ar": "احتمال الحدث هو عدد النواتج المرغوبة مقسوماً على عدد كل النواتج الممكنة. عند رمي حجر نرد منتظم له 6 أوجه، احتمال ظهور العدد 4 هو 1/6، واحتمال عدد زوجي 3/6 = 1/2. نكتب الاحتمال كسراً أو عدداً عشرياً بين 0 (مستحيل) و1 (مؤكد). كلمة منتظم مهمة: القانون البسيط يفترض نواتج متساوية الاحتمال، وحجر ملعوب أو عملة منحرفة يغيران الحساب. الاحتمال يصف التوقع على المدى الطويل ولا يعد بنتيجة رمية واحدة.",
    "en": "The probability of an event is the number of favorable outcomes divided by the total number of possible outcomes. Rolling a fair six-sided die, the probability of a 4 is 1/6, and of an even number is 3/6 = 1/2. We write probability as a fraction or decimal between 0 (impossible) and 1 (certain). The word fair matters: the simple rule assumes equally likely outcomes, and a loaded die or biased coin changes the calculation. Probability describes the long-run expectation and does not promise the result of a single roll.",
    "story": "تخيّل طبقاً فيه 3 موزات وتفاحتان وتختار قطعة عشوائياً دون نظر. احتمال اختيار موزة 3/5 لأن 3 من أصل 5 قطع موز. كلما أعدت التجربة مرات كثيرة اقتربت نسبة الموز من 0.6، وهذا ما يعنيه الاحتمال عملياً.",
    "storyEn": "Imagine a plate with 3 bananas and 2 apples, and you pick a piece randomly without looking. The probability of picking a banana is 3/5 because 3 out of 5 pieces are bananas. The more times you repeat the experiment, the closer the banana share gets to 0.6, and that is what probability means in practice.",
    "quiz": [
      {
        "q": "احتمال ظهور عدد زوجي عند رمي نرد منتظم:",
        "o": [
          "1/6",
          "1/2",
          "1/3"
        ],
        "a": 1
      },
      {
        "q": "الاحتمال قيمة بين:",
        "o": [
          "0 و100",
          "0 و1",
          "1 و6"
        ],
        "a": 1
      },
      {
        "q": "القانون البسيط للاحتمال يفترض أن النواتج:",
        "o": [
          "متساوية الاحتمال",
          "كبيرة العدد",
          "مرتبة تصاعدياً"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "The probability of an even number when rolling a fair die:",
            "o": [
                  "1/6",
                  "1/2",
                  "1/3"
            ],
            "a": 1
      },
      {
            "q": "A probability value lies between:",
            "o": [
                  "0 and 100",
                  "0 and 1",
                  "1 and 6"
            ],
            "a": 1
      },
      {
            "q": "The simple probability rule assumes the outcomes are:",
            "o": [
                  "Equally likely",
                  "Large in number",
                  "In ascending order"
            ],
            "a": 0
      }
],
    "video": "شرح الاحتمالات",
    "videoEn": "basic probability definition"
  },
  {
    "id": "statistics",
    "src": "https://openstax.org/books/prealgebra-2e/pages/5-5-averages-and-probability",
    "emoji": "📊",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "المتوسط والوسيط والمنوال",
    "titleEn": "Mean, Median, Mode",
    "kw": [
      "متوسط",
      "وسيط",
      "منوال",
      "احصاء",
      "إحصاء",
      "mean",
      "median",
      "mode",
      "average"
    ],
    "ar": "المتوسط الحسابي هو مجموع القيم مقسوماً على عددها؛ للأعداد 2,3,3,8 المتوسط 16/4 = 4. الوسيط هو القيمة الوسطى بعد الترتيب تصاعدياً: نصف القيم لا يزيد عنه ونصفها لا يقل؛ وعندما يكون العدد زوجياً نأخذ متوسط القيمتين الوسطيين، فللقائمة نفسها الوسيط 3. المنوال هو القيمة الأكثر تكراراً وهو هنا 3، وقد لا يوجد منوال أو يوجد أكثر من واحد. المتوسط قد يتأثر بقيمة متطرفة: العدد 8 رفع المتوسط إلى 4 بينما نصف القيم 3 أو أقل. اختيار المقياس المناسب يعتمد على السؤال والبيانات.",
    "en": "The mean is the sum of the values divided by how many there are; for 2,3,3,8 the mean is 16/4 = 4. The median is the middle value after sorting: half the values are at or below it and half at or above; with an even count take the mean of the two middle values, so here the median is 3. The mode is the most frequent value, 3 in this set, and a data set can have no mode or several. The mean can be pulled by an extreme value: the 8 lifted the mean to 4 while half the values are 3 or less. Choosing the right measure depends on the question and the data.",
    "story": "افترض خمس صديقات أطوالهن 59 و60 و65 و68 و70 بوصة وقفن مرتبات. من تقف في المنتصف طولها 65 هو الوسيط، لكن المتوسط يجمع الأطوال كلها ويوزعها بالتساوي. كل مقياس من الثلاثة يجيب سؤالاً مختلفاً عن المجموعة نفسها.",
    "storyEn": "Suppose five friends with heights 59, 60, 65, 68 and 70 inches stood in order. The one in the middle, at 65, is the median, but the mean adds all the heights and shares them equally. Each of the three measures answers a different question about the same group.",
    "quiz": [
      {
        "q": "متوسط الأعداد 2,3,3,8 يساوي:",
        "o": [
          "3",
          "4",
          "8"
        ],
        "a": 1
      },
      {
        "q": "الوسيط هو:",
        "o": [
          "القيمة الأكثر تكراراً",
          "القيمة الوسطى بعد الترتيب",
          "مجموع القيم"
        ],
        "a": 1
      },
      {
        "q": "المنوال للأعداد 2,3,3,8 هو:",
        "o": [
          "3",
          "8",
          "لا يوجد"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "The mean of 2,3,3,8 equals:",
            "o": [
                  "3",
                  "4",
                  "8"
            ],
            "a": 1
      },
      {
            "q": "The median is:",
            "o": [
                  "The most frequent value",
                  "The middle value after sorting",
                  "The sum of the values"
            ],
            "a": 1
      },
      {
            "q": "The mode of 2,3,3,8 is:",
            "o": [
                  "3",
                  "8",
                  "There is none"
            ],
            "a": 0
      }
],
    "video": "المتوسط والوسيط والمنوال",
    "videoEn": "mean median mode explained"
  },
  {
    "id": "functions",
    "src": "https://openstax.org/books/college-algebra-2e/pages/3-1-functions-and-function-notation",
    "emoji": "🔢",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "الدوال",
    "titleEn": "Functions",
    "kw": [
      "دالة",
      "دوال",
      "تابع",
      "function",
      "input",
      "output"
    ],
    "ar": "الدالة علاقة تعطي لكل مدخل مخرجاً واحداً بالضبط. لو كان المدخل صنف الطعام والمخرج سعره فهذه دالة، لأن كل صنف في القائمة له سعر واحد؛ أما لو عكسنا وجعلنا المدخل السعر فقد يشترك صنفان في السعر نفسه فيصبح للمدخل الواحد مخرجان ولا تبقى دالة. نكتب f(x) لتعني مخرج الدالة عند المدخل x، وتقييم الدالة يعطي نتيجة واحدة لكل مدخل. مجموعة المداخل المسموحة تسمى المجال والمخرجات الممكنة المدى. يمكن للمخرج نفسه أن يتكرر لمدخلين مختلفين دون أن تفسد الدالة.",
    "en": "A function is a relation in which each input value leads to exactly one output value. If the input is a menu item and the output is its price, that is a function because each item has one price; reversing it breaks, since two items can share a price, giving one input two outputs. We write f(x) for the output of the function at input x, and evaluating a function always produces one result per input. The allowed inputs form the domain, the possible outputs the range. The same output may repeat for two different inputs without breaking the function.",
    "story": "تخيّل آلة عصير: تدخل تفاحة فيخرج عصير تفاح. الآلة لا تستطيع مع المدخل نفسه إخراج عصير تفاح وبرتقال معاً؛ المدخل الواحد له مخرج واحد. هذه القاعدة البسيطة هي قلب تعريف الدالة.",
    "storyEn": "Imagine a juice machine: an apple goes in, apple juice comes out. The machine cannot produce both apple and orange juice from the same input; one input has one output. This simple rule is the heart of the definition of a function.",
    "quiz": [
      {
        "q": "الدالة علاقة يقابل فيها كل مدخل:",
        "o": [
          "مخرجين على الأقل",
          "مخرجاً واحداً بالضبط",
          "أي عدد من المخرجات"
        ],
        "a": 1
      },
      {
        "q": "f(x) تعني:",
        "o": [
          "ضرب f في x",
          "مخرج الدالة عند المدخل x",
          "مقلوب x"
        ],
        "a": 1
      },
      {
        "q": "المجال هو مجموعة:",
        "o": [
          "المداخل المسموحة",
          "المخرجات الممكنة",
          "الأعداد الأولية"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "A function is a relation in which each input corresponds to:",
            "o": [
                  "At least two outputs",
                  "Exactly one output",
                  "Any number of outputs"
            ],
            "a": 1
      },
      {
            "q": "f(x) means:",
            "o": [
                  "f multiplied by x",
                  "The function's output at input x",
                  "The reciprocal of x"
            ],
            "a": 1
      },
      {
            "q": "The domain is the set of:",
            "o": [
                  "Allowed inputs",
                  "Possible outputs",
                  "Prime numbers"
            ],
            "a": 0
      }
],
    "video": "ما هي الدالة",
    "videoEn": "what is a function one output"
  },
  {
    "id": "ratios",
    "src": "https://openstax.org/books/prealgebra-2e/pages/6-5-solve-proportions-and-their-applications",
    "emoji": "⚖️",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "النسب والتناسب",
    "titleEn": "Ratios and Proportions",
    "kw": [
      "نسبة",
      "تناسب",
      "نسب رياضية",
      "ratio",
      "proportion"
    ],
    "ar": "النسبة تقارن كميتين؛ نسبة كرتين حمراوين إلى 3 زرقاوين هي 2:3 وتكتب أيضاً الكسر 2/3. التناسب معادلة تقول إن نسبتين متساويتان مثل 1/2 = 4/8 وتقرأ: 1 إلى 2 كما 4 إلى 8. في التناسب a/b = c/d تكون حواصل الضرب التبادلي متساوية: a×d = b×c، وهذا أساس حل كثير من المسائل. عند مقارنة كميات لها وحدات يجب الحفاظ على ترتيب المقارنة نفسه في الطرفين، كالطلاب في البسط والمعلمين في المقام. النسبة 2:3 تصف جزءاً إلى جزء؛ أما الحمر من الكل فهي 2 من 5 أي 2/5.",
    "en": "A ratio compares two quantities; 2 red counters to 3 blue counters is the ratio 2:3, also written as the fraction 2/3. A proportion is an equation stating two ratios are equal, like 1/2 = 4/8, read as 1 is to 2 as 4 is to 8. In the proportion a/b = c/d the cross products are equal: a×d = b×c, which is how many problems are solved. When comparing quantities with units, keep the comparison order the same on both sides, such as students in numerators and teachers in denominators. The ratio 2:3 is part to part; the red share of the whole is 2 out of 5, the fraction 2/5.",
    "story": "تخيّل وصفة عصير تحتاج كوبي ماء لكل 3 ملاعق سكر. لو ضاعفت الوصفة تحتاج 4 أكواب لكل 6 ملاعق لأن النسبة ثابتة. هذا هو التناسب: نسبتان مختلفتان في الأرقام لكنهما متساويتان في القيمة.",
    "storyEn": "Imagine a juice recipe that needs 2 cups of water for every 3 spoons of sugar. If you double the recipe you need 4 cups for every 6 spoons, because the ratio stays the same. That is proportion: two ratios with different numbers but equal value.",
    "quiz": [
      {
        "q": "نسبة كرتين حمراوين إلى 3 زرقاوين هي:",
        "o": [
          "3:2",
          "2:3",
          "2:5"
        ],
        "a": 1
      },
      {
        "q": "في التناسب a/b = c/d يكون:",
        "o": [
          "a+b = c+d",
          "a×d = b×c",
          "a×b = c×d"
        ],
        "a": 1
      },
      {
        "q": "حصة الكرات الحمراء من الكل في نسبة 2:3 هي:",
        "o": [
          "2/3",
          "2/5",
          "3/5"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "The ratio of 2 red balls to 3 blue balls is:",
            "o": [
                  "3:2",
                  "2:3",
                  "2:5"
            ],
            "a": 1
      },
      {
            "q": "In the proportion a/b = c/d we have:",
            "o": [
                  "a+b = c+d",
                  "a×d = b×c",
                  "a×b = c×d"
            ],
            "a": 1
      },
      {
            "q": "The red balls' share of the whole in a 2:3 ratio is:",
            "o": [
                  "2/3",
                  "2/5",
                  "3/5"
            ],
            "a": 1
      }
],
    "video": "النسبة والتناسب",
    "videoEn": "ratios and proportions cross products"
  }
,
  {
    "id": "integers",
    "src": "https://openstax.org/books/prealgebra-2e/pages/3-1-introduction-to-integers",
    "emoji": "🌡️",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "الأعداد الصحيحة",
    "titleEn": "Integers",
    "kw": [
      "اعداد صحيحة",
      "أعداد صحيحة",
      "سالب",
      "موجب",
      "عدد سالب",
      "integer",
      "negative number"
    ],
    "ar": "الأعداد الصحيحة تشمل الأعداد الموجبة والصفر والأعداد السالبة. على خط الأعداد تقع الموجبة يمين الصفر والسالبة يساره، والصفر نفسه ليس موجباً ولا سالباً. نستخدم السالب في الواقع: درجة حرارة تحت الصفر، أو رصيد بنكي مسحوب بأكثر من الموجود، أو غواصة على عمق 500 قدم نكتب موضعها -500. كلما اتجهنا يميناً على خط الأعداد كبرت القيمة، فالعدد -2 أكبر من -5 رغم أن 5 أكبر من 2. القيمة المطلقة للعدد هي بعده عن الصفر دون اتجاه، فـ |−3| = 3.",
    "en": "Integers include positive numbers, zero and negative numbers. On a number line, positives sit right of zero and negatives left of it; zero itself is neither positive nor negative. We use negatives in real life: temperatures below zero, a bank balance overdrawn, or a submarine 500 feet down written as -500. Moving right on the number line increases value, so -2 is greater than -5 even though 5 is greater than 2. The absolute value of a number is its distance from zero without direction, so |−3| = 3.",
    "story": "تخيّل مصعداً يبدأ من الدور الأرضي صفر. الأدوار فوقه موجبة، والجراج تحته سالب: الدور -2 أسفل -1 مباشرة. كلما نزلت أكثر صار الرقم السالب أصغر رغم أنك ابتعدت عن الصفر. هذا هو الفرق بين البعد عن الصفر والقيمة نفسها.",
    "storyEn": "Imagine an elevator starting at the ground floor, zero. The floors above are positive, and the garage below is negative: floor -2 is directly below -1. The farther down you go, the smaller the negative number becomes, even though you moved farther from zero. That is the difference between distance from zero and the value itself.",
    "quiz": [
      {
        "q": "أين تقع الأعداد السالبة على خط الأعداد؟",
        "o": [
          "يمين الصفر",
          "يسار الصفر",
          "فوق الصفر"
        ],
        "a": 1
      },
      {
        "q": "أي عدد أكبر: -2 أم -5؟",
        "o": [
          "-2",
          "-5",
          "متساويان"
        ],
        "a": 0
      },
      {
        "q": "القيمة المطلقة |−3| تساوي:",
        "o": [
          "-3",
          "3",
          "0"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "Where are negative numbers on the number line?",
            "o": [
                  "Right of zero",
                  "Left of zero",
                  "Above zero"
            ],
            "a": 1
      },
      {
            "q": "Which number is larger: -2 or -5?",
            "o": [
                  "-2",
                  "-5",
                  "They are equal"
            ],
            "a": 0
      },
      {
            "q": "The absolute value |-3| equals:",
            "o": [
                  "-3",
                  "3",
                  "0"
            ],
            "a": 1
      }
],
    "video": "الأعداد الصحيحة السالبة والموجبة",
    "videoEn": "integers on a number line"
  },
  {
    "id": "decimals",
    "src": "https://openstax.org/books/prealgebra-2e/pages/5-1-decimals",
    "emoji": "🔟",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "الأعداد العشرية",
    "titleEn": "Decimals",
    "kw": [
      "عشري",
      "عشرية",
      "فاصلة عشرية",
      "decimal",
      "tenths",
      "hundredths"
    ],
    "ar": "الكتابة العشرية طريقة لإظهار أجزاء من كل يكون مقامها قوى العدد عشرة. الرقم 0.1 يساوي 1/10 ويقرأ عُشر واحد، و0.01 يساوي 1/100 ويقرأ جزء من مئة. أول خانة يمين الفاصلة هي العُشر، والثانية الجزء من مئة، والثالثة الجزء من ألف. لاحظ أن ألف أكبر من واحد لكن الجزء من ألف أصغر من واحد؛ حرفا th في نهاية الاسم الإنجليزي يعنيان كسراً. نقرأ 5.03 خمسة وثلاثة أجزاء من مئة، وهي نفس قيمة الكسر 5 و3/100.",
    "en": "Decimal notation shows parts of a whole whose denominators are powers of ten. The number 0.1 equals 1/10 and reads one tenth, and 0.01 equals 1/100, one hundredth. The first place right of the decimal point is tenths, the second hundredths, the third thousandths. Notice that a thousand is bigger than one, but a thousandth is smaller than one; the th ending in English names signals a fraction. We read 5.03 as five and three hundredths, the same value as the mixed number 5 and 3/100.",
    "story": "تخيّل قرشاً واحداً من عملة مقسومة مئة قرش. القرش الواحد هو 1/100 من الجنيه، فنكتبه 0.01. لو دفعت 5 جنيهات و3 قروش فقد دفعت 5.03 بالضبط، وهنا يظهر أن الأعداد العشرية ما هي إلا كسور مقامها عشرة أو مئة أو ألف.",
    "storyEn": "Imagine one piaster from a pound divided into a hundred piasters. One piaster is 1/100 of a pound, so we write it 0.01. If you paid 5 pounds and 3 piasters you paid exactly 5.03, and here we see that decimal numbers are simply fractions with a denominator of ten, a hundred or a thousand.",
    "quiz": [
      {
        "q": "الرقم 0.01 يساوي:",
        "o": [
          "1/10",
          "1/100",
          "1/1000"
        ],
        "a": 1
      },
      {
        "q": "أول خانة يمين الفاصلة العشرية هي:",
        "o": [
          "العشرات",
          "الأعشار",
          "الآحاد"
        ],
        "a": 1
      },
      {
        "q": "نقرأ 5.03:",
        "o": [
          "خمسة وثلاثة أعشار",
          "خمسة وثلاثة أجزاء من مئة",
          "خمسون وثلاثة"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "The number 0.01 equals:",
            "o": [
                  "1/10",
                  "1/100",
                  "1/1000"
            ],
            "a": 1
      },
      {
            "q": "The first place right of the decimal point is:",
            "o": [
                  "Tens",
                  "Tenths",
                  "Ones"
            ],
            "a": 1
      },
      {
            "q": "We read 5.03 as:",
            "o": [
                  "Five and three tenths",
                  "Five and three hundredths",
                  "Fifty and three"
            ],
            "a": 1
      }
],
    "video": "الاعداد العشرية شرح",
    "videoEn": "decimal place value tenths hundredths"
  },
  {
    "id": "orderops",
    "src": "https://openstax.org/books/prealgebra-2e/pages/2-1-use-the-language-of-algebra",
    "emoji": "🧮",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "ترتيب العمليات",
    "titleEn": "Order of Operations",
    "kw": [
      "ترتيب العمليات",
      "اولوية العمليات",
      "أولوية",
      "order of operations",
      "precedence"
    ],
    "ar": "بدون ترتيب متفق عليه للعمليات قد يحمل التعبير الواحد معنيين مختلفين. القاعدة: نبسط ما داخل الأقواس أولاً، ثم الأسس، ثم الضرب والقسمة من اليسار إلى اليمين، ثم الجمع والطرح من اليسار إلى اليمين. مثال: في 2 + 3×4 نضرب أولاً فنحصل على 2 + 12 = 14، وليس 20 كما لو جمعنا أولاً. القيمة المطلقة تعامل كالأقواس: نبسط ما داخلها قبل غيرها. الاتفاق على هذا الترتيب يجعل للتعبير قيمة واحدة يفهمها الجميع.",
    "en": "Without an agreed order of operations one expression could have two meanings. The rule: simplify inside parentheses first, then exponents, then multiply and divide left to right, then add and subtract left to right. Example: in 2 + 3×4 we multiply first, giving 2 + 12 = 14, not 20 as if we added first. Absolute value bars act like parentheses: simplify inside them before anything else. Agreeing on this order gives every expression one value that everyone reads the same way.",
    "story": "تخيّل صديقين يحسبان 2 + 3×4. الأول جمع فحصل على 5×4 = 20، والثاني ضرب أولاً فحصل على 2 + 12 = 14. لا يمكن أن يكون كلاهما صحيحاً؛ لهذا اتفق علماء الرياضيات على الترتيب، والإجابة الصحيحة 14.",
    "storyEn": "Imagine two friends computing 2 + 3×4. The first added and got 5×4 = 20; the second multiplied first and got 2 + 12 = 14. They cannot both be right, and that is why mathematicians agreed on an order. The correct answer is 14.",
    "quiz": [
      {
        "q": "في 2 + 3×4 الناتج الصحيح:",
        "o": [
          "20",
          "14",
          "24"
        ],
        "a": 1
      },
      {
        "q": "ما العملية الأولى في الترتيب؟",
        "o": [
          "الجمع",
          "الأقواس",
          "الطرح"
        ],
        "a": 1
      },
      {
        "q": "عند تساوي الأولوية بين الضرب والقسمة نعمل:",
        "o": [
          "من اليمين لليسار",
          "من اليسار لليمين",
          "بالتخمين"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "In 2 + 3×4 the correct result is:",
            "o": [
                  "20",
                  "14",
                  "24"
            ],
            "a": 1
      },
      {
            "q": "What comes first in the order of operations?",
            "o": [
                  "Addition",
                  "Parentheses",
                  "Subtraction"
            ],
            "a": 1
      },
      {
            "q": "When multiplication and division have equal priority we work:",
            "o": [
                  "Right to left",
                  "Left to right",
                  "By guessing"
            ],
            "a": 1
      }
],
    "video": "ترتيب العمليات الحسابية",
    "videoEn": "order of operations explained"
  },
  {
    "id": "exponents",
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/6-2-use-multiplication-properties-of-exponents",
    "emoji": "✖️",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "الأسس",
    "titleEn": "Exponents",
    "kw": [
      "اسس",
      "أسس",
      "قوة",
      "اس",
      "exponent",
      "power of"
    ],
    "ar": "الترميز الأسي اختصار للضرب المتكرر: a أس n تعني a مضروبة في نفسها n مرة، ونسمي a الأساس وn الأس. فمثلاً 2³ = 2×2×2 = 8، ونقرؤها اثنان أس ثلاثة أو اثنان تكعيب. عند ضرب قوتين لهما نفس الأساس نجمع الأسس: a²·a³ = a⁵ لأن الناتج خمسة عوامل a. وللقوة المرفوعة لقوة نضرب الأسس: (a²)³ = a⁶. تذكر أن 2³ ليست 2×3؛ الأس يعد مرات الضرب لا مقدار الضرب في العدد نفسه مرة واحدة.",
    "en": "Exponential notation shortens repeated multiplication: a to the power n means a multiplied by itself n times; a is the base and n the exponent. For example 2³ = 2×2×2 = 8, read as two to the third power or two cubed. Multiplying two powers with the same base adds the exponents: a²·a³ = a⁵ because the product has five factors of a. Raising a power to a power multiplies the exponents: (a²)³ = a⁶. Remember 2³ is not 2×3; the exponent counts repeated multiplications.",
    "story": "تخيّل مكعباً ضلعه وحدتان: فيه 2×2×2 = 8 مكعبات صغيرة، أي 2³. لهذا نسمي القوة الثالثة تكعيباً، ونسمي الثانية تربيعاً لأنها مساحة مربع. الأسس تحول الضرب الطويل إلى كتابة قصيرة أنيقة.",
    "storyEn": "Imagine a cube with side 2 units: it holds 2×2×2 = 8 small cubes, which is 2³. That is why we call the third power cubing, and the second power squaring, because it is the area of a square. Exponents turn long multiplication into short, tidy writing.",
    "quiz": [
      {
        "q": "2³ تساوي:",
        "o": [
          "6",
          "8",
          "9"
        ],
        "a": 1
      },
      {
        "q": "a²·a³ تساوي:",
        "o": [
          "a⁵",
          "a⁶",
          "a¹"
        ],
        "a": 0
      },
      {
        "q": "في a أس n نسمي a:",
        "o": [
          "الأس",
          "الأساس",
          "الناتج"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "2³ equals:",
            "o": [
                  "6",
                  "8",
                  "9"
            ],
            "a": 1
      },
      {
            "q": "a²·a³ equals:",
            "o": [
                  "a⁵",
                  "a⁶",
                  "a¹"
            ],
            "a": 0
      },
      {
            "q": "In a to the power n, we call a:",
            "o": [
                  "The exponent",
                  "The base",
                  "The result"
            ],
            "a": 1
      }
],
    "video": "الاسس والقوى شرح",
    "videoEn": "exponents product property explained"
  },
  {
    "id": "scinotation",
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/6-7-integer-exponents-and-scientific-notation",
    "emoji": "🔬",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "الترميز العلمي",
    "titleEn": "Scientific Notation",
    "kw": [
      "ترميز علمي",
      "صيغة علمية",
      "scientific notation"
    ],
    "ar": "الترميز العلمي يكتب الأعداد الضخمة أو الدقيقة في صورة a×10ⁿ حيث a عدد قيمته المطلقة بين 1 و10 وn عدد صحيح. العدد 4000 يصبح 4×10³ لأن الفاصلة تحركت ثلاث خانات يساراً، و0.004 يصبح 4×10⁻³ لأنها تحركت ثلاث خانات يميناً. الأس الموجب يعني عدداً كبيراً والسالب يعني عدداً أصغر من واحد. للعودة إلى الصورة العادية نحرك الفاصلة بمقدار الأس: يميناً للموجب ويساراً للسالب. هذه الصيغة تريح العلماء من كتابة صفوف طويلة من الأصفار.",
    "en": "Scientific notation writes very large or very small numbers as a×10ⁿ where the absolute value of a is at least 1 and less than 10 and n is an integer. The number 4000 becomes 4×10³ because the decimal point moved three places left, and 0.004 becomes 4×10⁻³ because it moved three places right. A positive exponent means a large number; a negative exponent means a number below one. To convert back we move the decimal point by the exponent: right for positive, left for negative. This form saves scientists from writing long strings of zeros.",
    "story": "تخيّل أنك تكتب المسافة إلى نجم بعيد: رقم فيه عشرون صفراً. في الترميز العلمي تكتبها في سطر واحد مثل 9.46×10¹⁵ متراً. الصيغة المختصرة ليست تقريباً جديداً للعدد، بل إعادة كتابة دقيقة لقيمته نفسها.",
    "storyEn": "Imagine writing the distance to a far star: a number with twenty zeros. In scientific notation you write it in one line, like 9.46×10¹⁵ meters. The short form is not a new approximation of the number; it is an exact rewrite of the same value.",
    "quiz": [
      {
        "q": "4000 في الترميز العلمي:",
        "o": [
          "4×10³",
          "40×10²",
          "4×10⁻³"
        ],
        "a": 0
      },
      {
        "q": "الأس السالب في a×10ⁿ يعني عدداً:",
        "o": [
          "كبيراً جداً",
          "أصغر من واحد",
          "سالب القيمة"
        ],
        "a": 1
      },
      {
        "q": "9.12×10⁴ تساوي:",
        "o": [
          "91200",
          "0.000912",
          "9.12"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "4000 in scientific notation:",
            "o": [
                  "4×10³",
                  "40×10²",
                  "4×10⁻³"
            ],
            "a": 0
      },
      {
            "q": "A negative exponent in a×10ⁿ means a number:",
            "o": [
                  "Very large",
                  "Smaller than one",
                  "Negative in value"
            ],
            "a": 1
      },
      {
            "q": "9.12×10⁴ equals:",
            "o": [
                  "91200",
                  "0.000912",
                  "9.12"
            ],
            "a": 0
      }
],
    "video": "الترميز العلمي شرح",
    "videoEn": "scientific notation conversion"
  },
  {
    "id": "angles",
    "src": "https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem",
    "emoji": "📐",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "الزوايا",
    "titleEn": "Angles",
    "kw": [
      "زاوية",
      "زوايا",
      "درجة",
      "angle",
      "degree"
    ],
    "ar": "تتكون الزاوية من شعاعين يشتركان في نقطة البداية، ونسمي كل شعاع ضلعاً والنقطة المشتركة رأس الزاوية. نقيس الزوايا بالدرجات ونكتب m∠A لقياس الزاوية A. الزاويتان المتتامتان مجموعهما 90 درجة، والمتكاملتان مجموعهما 180 درجة؛ فالزاوية 50 تتام مع 40 وتتكامل مع 130. الزاوية القائمة 90 درجة تماماً، والمستقيمة 180 درجة. عند معرفة زاوية واحدة من زوج متكامل نطرح من 180 لنجد الأخرى.",
    "en": "An angle is formed by two rays sharing a common endpoint; each ray is a side and the common endpoint is the vertex. We measure angles in degrees and write m∠A for the measure of angle A. Two angles are complementary when their measures sum to 90 degrees, and supplementary when they sum to 180 degrees; so 50 is complementary to 40 and supplementary to 130. A right angle is exactly 90 degrees and a straight angle is 180 degrees. Given one angle of a supplementary pair, subtract from 180 to find the other.",
    "story": "تخيّل عقارب ساعة: عند الثالثة تماماً يصنع العقربان زاوية قائمة 90 درجة. وعند السادسة يصبحان على استقامة واحدة 180 درجة. كل دورة كاملة 360 درجة، وهي وحدة القياس التي اتفق عليها الناس منذ القدم.",
    "storyEn": "Imagine the hands of a clock: at exactly 3 o'clock the hands make a right angle of 90 degrees. At 6 o'clock they form a straight line of 180 degrees. A full turn is 360 degrees, the unit of measurement people agreed on long ago.",
    "quiz": [
      {
        "q": "رأس الزاوية هو:",
        "o": [
          "منتصف الضلع",
          "النقطة المشتركة للشعاعين",
          "نهاية الشعاع"
        ],
        "a": 1
      },
      {
        "q": "متممة الزاوية 50° هي:",
        "o": [
          "40°",
          "130°",
          "50°"
        ],
        "a": 0
      },
      {
        "q": "مجموع الزاويتين المتكاملتين:",
        "o": [
          "90°",
          "180°",
          "360°"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "The vertex of an angle is:",
            "o": [
                  "The middle of a side",
                  "The shared point of the two rays",
                  "The end of a ray"
            ],
            "a": 1
      },
      {
            "q": "The complement of a 50° angle is:",
            "o": [
                  "40°",
                  "130°",
                  "50°"
            ],
            "a": 0
      },
      {
            "q": "Two supplementary angles add up to:",
            "o": [
                  "90°",
                  "180°",
                  "360°"
            ],
            "a": 1
      }
],
    "video": "انواع الزوايا شرح",
    "videoEn": "complementary and supplementary angles"
  },
  {
    "id": "perimeter",
    "src": "https://openstax.org/books/prealgebra-2e/pages/9-4-use-properties-of-rectangles-triangles-and-trapezoids",
    "emoji": "🖼️",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "المحيط والمساحة",
    "titleEn": "Perimeter and Area",
    "kw": [
      "محيط",
      "مساحة مستطيل",
      "محيط المستطيل",
      "perimeter",
      "area of"
    ],
    "ar": "المحيط هو المسافة حول الشكل، والمساحة هي مقدار المنطقة التي يغطيها. محيط المستطيل P = 2L + 2W أي ضعف الطول زائد ضعف العرض، ومساحته A = L×W. مستطيل طوله 32 متراً وعرضه 20 متراً محيطه 104 أمتار ومساحته 640 متراً مربعاً. لاحظ الفرق في الوحدات: المحيط طول فوحدة مفردة، والمساحة وحدات مربعة لأنها عدد المربعات وحدة الضلع التي تملأ الشكل. بساط 2×3 قدم فيه 6 مربعات قدمية، وهذه فكرة المساحة ببساطة.",
    "en": "Perimeter is the distance around a shape; area is the size of the region it covers. The perimeter of a rectangle is P = 2L + 2W, twice the length plus twice the width, and its area is A = L×W. A rectangle 32 meters by 20 meters has perimeter 104 meters and area 640 square meters. Notice the units differ: perimeter is a length with a plain unit, while area uses square units because it counts the unit squares filling the shape. A 2 by 3 foot rug holds 6 square feet, which is the idea of area in one picture.",
    "story": "تخيّل أنك تشتري بلاطاً لغرفة وسياجاً لحديقة. البلاط يحتاج المساحة لأنه يغطي الأرض، والسياج يحتاج المحيط لأنه يحيط بالحافة فقط. خلط المفهومين يعني شراء كمية خاطئة من الاثنين.",
    "storyEn": "Imagine buying tiles for a room and a fence for a garden. The tiles need area because they cover the floor; the fence needs perimeter because it surrounds the edge only. Mixing the two ideas means buying the wrong amount of both.",
    "quiz": [
      {
        "q": "محيط مستطيل 32×20 متراً:",
        "o": [
          "52 متراً",
          "104 أمتار",
          "640 متراً"
        ],
        "a": 1
      },
      {
        "q": "المساحة تقاس بـ:",
        "o": [
          "وحدات مكعبة",
          "وحدات مربعة",
          "وحدات طول"
        ],
        "a": 1
      },
      {
        "q": "مساحة المستطيل تساوي:",
        "o": [
          "2L + 2W",
          "L × W",
          "L + W"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "The perimeter of a 32×20 meter rectangle:",
            "o": [
                  "52 meters",
                  "104 meters",
                  "640 meters"
            ],
            "a": 1
      },
      {
            "q": "Area is measured in:",
            "o": [
                  "Cubic units",
                  "Square units",
                  "Units of length"
            ],
            "a": 1
      },
      {
            "q": "The area of a rectangle equals:",
            "o": [
                  "2L + 2W",
                  "L × W",
                  "L + W"
            ],
            "a": 1
      }
],
    "video": "المحيط والمساحة شرح",
    "videoEn": "perimeter and area of a rectangle"
  },
  {
    "id": "slope",
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/4-4-understand-slope-of-a-line",
    "emoji": "📈",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "ميل الخط المستقيم",
    "titleEn": "Slope of a Line",
    "kw": [
      "ميل",
      "ميل الخط",
      "slope",
      "rise over run"
    ],
    "ar": "ميل الخط المستقيم هو نسبة التغير الرأسي إلى التغير الأفقي، ونرمز له بالحرف m ونحسبه m = rise/run. الميل 1/2 يعني صعود وحدة واحدة لكل وحدتين أفقياً. الخطوط الصاعدة يميناً لها ميل موجب، والنازلة يميناً ميل سالب، والخط الأفقي ميله صفر لأن الارتفاع لا يتغير. يمكن إيجاد الميل من نقطتين على الخط بحساب فرق الإحداثيين y على فرق الإحداثيين x. الخط الرأسي حالة خاصة: ميله غير معرف لأن المقام صفر.",
    "en": "The slope of a line is the ratio of vertical change to horizontal change, written m and computed as m = rise/run. A slope of 1/2 means rising one unit for every two units across. Lines rising to the right have positive slope, lines falling to the right have negative slope, and a horizontal line has slope zero because the rise does not change. You can find the slope from two points by dividing the difference of the y-coordinates by the difference of the x-coordinates. A vertical line is a special case: its slope is undefined because the denominator would be zero.",
    "story": "تخيّل منحدراً للدراجات: كلما تقدمت مترين ارتفعت متراً واحداً، فميله 1/2. لافتات الطرق تستخدم النسبة نفسها لتحذير السائقين من الانحدارات الحادة. الميل هو طريقة الرياضيات لوصف شدة الانحدار برقم واحد.",
    "storyEn": "Imagine a bicycle ramp: every two meters forward you rise one meter, so its slope is 1/2. Road signs use the same ratio to warn drivers of steep descents. Slope is mathematics' way of describing steepness with a single number.",
    "quiz": [
      {
        "q": "الميل يساوي:",
        "o": [
          "run/rise",
          "rise/run",
          "rise × run"
        ],
        "a": 1
      },
      {
        "q": "ميل الخط الأفقي:",
        "o": [
          "صفر",
          "واحد",
          "غير معرف"
        ],
        "a": 0
      },
      {
        "q": "ميل 1/2 يعني:",
        "o": [
          "صعود 2 لكل 1 أفقياً",
          "صعود 1 لكل 2 أفقياً",
          "هبوط 1 لكل 2"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "Slope equals:",
            "o": [
                  "run/rise",
                  "rise/run",
                  "rise × run"
            ],
            "a": 1
      },
      {
            "q": "The slope of a horizontal line:",
            "o": [
                  "Zero",
                  "One",
                  "Undefined"
            ],
            "a": 0
      },
      {
            "q": "A slope of 1/2 means:",
            "o": [
                  "Rise 2 for every 1 across",
                  "Rise 1 for every 2 across",
                  "Drop 1 for every 2"
            ],
            "a": 1
      }
],
    "video": "ميل الخط المستقيم",
    "videoEn": "slope rise over run"
  },
  {
    "id": "primes",
    "src": "https://openstax.org/books/prealgebra-2e/pages/2-5-prime-factorization-and-the-least-common-multiple",
    "emoji": "🌳",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "الأعداد الأولية والتحليل",
    "titleEn": "Primes and Factorization",
    "kw": [
      "عدد اولي",
      "أعداد أولية",
      "تحليل",
      "عامل",
      "prime",
      "factorization",
      "factor tree"
    ],
    "ar": "العدد الأولي عدد صحيح أكبر من واحد عوامله الوحيدة هي 1 ونفسه، مثل 2 و3 و5 و7 و11. العدد المؤلف له أكثر من عاملين، والعدد 1 ليس أولياً ولا مؤلفاً لأن له عاملاً واحداً فقط. كل عدد مؤلف يكتب حاصل ضرب أعداد أولية بطريقة وحيدة تسمى التحليل إلى العوامل الأولية. شجرة العوامل طريقة منظمة: نفرع العدد إلى عاملين، ونكمل تفريع غير الأولي حتى تنتهي كل الفروع بأعداد أولية؛ فـ 36 = 2×2×3×3. يساعد التحليل في تبسيط الكسور وإيجاد المضاعف المشترك الأصغر.",
    "en": "A prime number is a counting number greater than 1 whose only factors are 1 and itself, like 2, 3, 5, 7, 11. A composite number has more than two factors, and 1 is neither prime nor composite because it has only one factor. Every composite number can be written as a unique product of primes, called its prime factorization. The factor tree is an organized method: branch the number into two factors and keep branching any non-prime until every branch ends in a prime; so 36 = 2×2×3×3. Factorization helps simplify fractions and find least common multiples.",
    "story": "تخيّل أنك تفكك 36 قطعة حلوى إلى مجموعات متساوية بكل الطرق الممكنة. في النهاية تكتشف أن كل التقسيمات ترجع إلى اللبنات نفسها: 2×2×3×3. الأعداد الأولية هي لبنات البناء التي تصنع منها كل الأعداد الأخرى بالضرب.",
    "storyEn": "Imagine breaking 36 candies into equal groups in every possible way. In the end you find that every arrangement goes back to the same building blocks: 2×2×3×3. Prime numbers are the building blocks from which all other numbers are made by multiplication.",
    "quiz": [
      {
        "q": "أي عدد أولي؟",
        "o": [
          "9",
          "13",
          "21"
        ],
        "a": 1
      },
      {
        "q": "العدد 1 يعتبر:",
        "o": [
          "أولياً",
          "مؤلفاً",
          "ليس أولياً ولا مؤلفاً"
        ],
        "a": 2
      },
      {
        "q": "التحليل الأولي للعدد 36:",
        "o": [
          "2×2×3×3",
          "4×9",
          "6×6"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Which number is prime?",
            "o": [
                  "9",
                  "13",
                  "21"
            ],
            "a": 1
      },
      {
            "q": "The number 1 is considered:",
            "o": [
                  "Prime",
                  "Composite",
                  "Neither prime nor composite"
            ],
            "a": 2
      },
      {
            "q": "The prime factorization of 36:",
            "o": [
                  "2×2×3×3",
                  "4×9",
                  "6×6"
            ],
            "a": 0
      }
],
    "video": "الاعداد الاولية والتحليل",
    "videoEn": "prime factorization factor tree"
  },
  {
    "id": "pythagoras",
    "src": "https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem",
    "emoji": "📏",
    "cat": "رياضيات",
    "catEn": "Math",
    "title": "نظرية فيثاغورس",
    "titleEn": "The Pythagorean Theorem",
    "kw": [
      "فيثاغورس",
      "وتر",
      "مثلث قائم",
      "pythagorean",
      "hypotenuse"
    ],
    "ar": "في المثلث القائم يسمى الضلع المقابل للزاوية القائمة الوتر وهو أطول الأضلاع، ويسمى الضلعان الآخران الساقين. تنص نظرية فيثاغورس على أن مربع الوتر يساوي مجموع مربعي الساقين: a² + b² = c². مثال شهير: المثلث 3-4-5 لأن 9 + 16 = 25. نستخدم النظرية لإيجاد ضلع مجهول: لو كانت الساقان 3 و4 فالوتر جذر 25 أي 5. النظرية خاصة بالمثلثات القائمة فقط، ولا تنطبق على غيرها.",
    "en": "In a right triangle the side opposite the right angle is the hypotenuse, the longest side, and the other two sides are the legs. The Pythagorean Theorem states that the square of the hypotenuse equals the sum of the squares of the legs: a² + b² = c². A famous example is the 3-4-5 triangle because 9 + 16 = 25. We use the theorem to find a missing side: with legs 3 and 4 the hypotenuse is the square root of 25, which is 5. The theorem applies only to right triangles, not to others.",
    "story": "تخيّل نجاراً يبني إطار باب ويريد التأكد أن الزاوية قائمة. يقيس 3 وحدات على ضلع و4 على الضلع الآخر، فإذا كان القطر 5 بالضبط كانت الزاوية قائمة. هذه خدعة عملية قديمة مبنية على النظرية نفسها.",
    "storyEn": "Imagine a carpenter building a door frame who wants to be sure the corner is a right angle. He measures 3 units along one side and 4 along the other; if the diagonal is exactly 5, the corner is right. This is an old practical trick built on the same theorem.",
    "quiz": [
      {
        "q": "الوتر هو الضلع:",
        "o": [
          "المقابل للزاوية القائمة",
          "الأقصر",
          "المجاور للقائمة"
        ],
        "a": 0
      },
      {
        "q": "في مثلث 3-4-5 مربع الوتر يساوي:",
        "o": [
          "12",
          "25",
          "49"
        ],
        "a": 1
      },
      {
        "q": "النظرية تنطبق على:",
        "o": [
          "كل مثلث",
          "المثلث القائم فقط",
          "المربعات"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "The hypotenuse is the side:",
            "o": [
                  "Opposite the right angle",
                  "The shortest",
                  "Adjacent to the right angle"
            ],
            "a": 0
      },
      {
            "q": "In a 3-4-5 triangle the square of the hypotenuse equals:",
            "o": [
                  "12",
                  "25",
                  "49"
            ],
            "a": 1
      },
      {
            "q": "The theorem applies to:",
            "o": [
                  "Every triangle",
                  "Only right triangles",
                  "Squares"
            ],
            "a": 1
      }
],
    "video": "نظرية فيثاغورس شرح",
    "videoEn": "pythagorean theorem explained"
  }
,
  {
    "id": "newton",
    "src": "https://openstax.org/books/college-physics-2e/pages/4-2-newtons-first-law-of-motion-inertia",
    "emoji": "🏒",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "قانون نيوتن الأول: القصور الذاتي",
    "titleEn": "Newton's First Law: Inertia",
    "kw": [
      "نيوتن",
      "قانون نيوتن الاول",
      "قانون نيوتن الأول",
      "القصور الذاتي",
      "العطالة",
      "inertia",
      "newton first law"
    ],
    "ar": "ينص قانون نيوتن الأول على أن الجسم الساكن يبقى ساكناً، والجسم المتحرك يبقى متحركاً بسرعة ثابتة، ما لم تؤثر عليه قوة خارجية صافية. أي تغيير في السرعة، سواء في مقدارها أو اتجاهها، لا بد أن يكون له سبب هو قوة. الجسم الذي ينزلق على الأرض يتباطأ بسبب قوة الاحتكاك، وليس لأن الحركة تنتهي من تلقاء نفسها. في طاولة الهوكي الهوائية يسير القرص مسافة طويلة لأن الاحتكاك يكاد ينعدم. خاصية بقاء الجسم على حالته تسمى القصور الذاتي، ويقيسها مقدار الكتلة. الكتلة لا تتغير بتغير المكان، فهي نفسها على الأرض وعلى القمر.",
    "en": "Newton's first law says a body at rest stays at rest, and a body in motion stays in motion at constant velocity, unless a net external force acts on it. Any change in velocity, in size or direction, needs a cause, and that cause is a force. An object sliding along the floor slows down because of friction, not because motion dies out by itself. On an air hockey table the puck glides far because friction is almost removed. The tendency of a body to keep its state of motion is called inertia, and it is measured by mass. Mass does not change with location: it is the same on Earth and on the Moon.",
    "story": "في ملعب الهوكي الهوائي، شغّل أحمد الهواء فانطلق القرص بعد دفعة صغيرة وبقي يمضي بالسرعة نفسها تقريباً. ثم أغلق الهواء فتوقف القرص بعد مسافة قصيرة. لم يختفِ شيء من القرص، لكن الاحتكاك عاد ليبطئه. هذا المشهد يلخص القانون: القوة هي سبب تغيّر الحركة، لا سبب استمرارها.",
    "storyEn": "On an air hockey table, Ahmed turned on the air and the disc glided after a small push, keeping nearly the same speed. Then he turned the air off and the disc stopped after a short distance. Nothing about the disc disappeared, but friction returned to slow it. This scene sums up the law: force is what changes motion, not what keeps it going.",
    "quiz": [
      {
        "q": "الجسم المتحرك على سطح عديم الاحتكاك تماماً ولا قوة عليه:",
        "o": [
          "يتوقف بسرعة",
          "يستمر بالسرعة نفسها",
          "يتسارع وحده"
        ],
        "a": 1
      },
      {
        "q": "يقاس القصور الذاتي للجسم بـ:",
        "o": [
          "لونه",
          "كتلته",
          "موقعه"
        ],
        "a": 1
      },
      {
        "q": "أيهما كتلته أكبر: كيلوغرام من القطن أم كيلوغرام من الذهب؟",
        "o": [
          "الذهب",
          "القطن",
          "متساويتان"
        ],
        "a": 2
      }
    ],
    "quizEn": [
      {
            "q": "A body moving on a perfectly frictionless surface with no force on it:",
            "o": [
                  "Stops quickly",
                  "Keeps the same speed",
                  "Accelerates on its own"
            ],
            "a": 1
      },
      {
            "q": "A body's inertia is measured by:",
            "o": [
                  "Its color",
                  "Its mass",
                  "Its location"
            ],
            "a": 1
      },
      {
            "q": "Which has more mass: a kilogram of cotton or a kilogram of gold?",
            "o": [
                  "Gold",
                  "Cotton",
                  "They are equal"
            ],
            "a": 2
      }
],
    "video": "قانون نيوتن الأول القصور الذاتي",
    "videoEn": "Newton first law inertia"
  },
  {
    "id": "friction",
    "src": "https://openstax.org/books/college-physics-2e/pages/5-1-friction",
    "emoji": "🧱",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الاحتكاك",
    "titleEn": "Friction",
    "kw": [
      "احتكاك",
      "قوة الاحتكاك",
      "الاحتكاك الساكن",
      "الاحتكاك الحركي",
      "friction",
      "static friction",
      "kinetic friction"
    ],
    "ar": "الاحتكاك قوة تقاوم الحركة النسبية بين سطحين متلامسين، ويكون موازياً للسطح وعكس اتجاه الحركة أو محاولة الحركة. إذا كان السطحان يتحركان بالنسبة لبعضهما فهو احتكاك حركي، وإذا كانا ساكنين فهو احتكاك ساكن. الاحتكاك الساكن يزيد ليساوي دفعتك حتى لحظة معينة، ثم ينزلق الجسم فجأة. وبعد أن يبدأ الجسم بالحركة يكون الاحتكاك الحركي عادةً أقل من الحد الأقصى للاحتكاك الساكن، فمن الأسهل إبقاء الصندوق متحركاً من تحريكه أول مرة. كلما ضغط السطحان على بعضهما أكثر زاد الاحتكاك. القاعدتان في الكتاب: fs ≤ μs·N للساكن، وfk = μk·N للحركي، حيث N القوة العمودية.",
    "en": "Friction is a force that opposes relative motion between surfaces in contact. It acts parallel to the surface and against the motion, or the attempted motion. If the two surfaces slide past each other it is kinetic friction, and if they are at rest it is static friction. Static friction rises to match your push, up to a limit, and then the object suddenly slips. Once it moves, kinetic friction is usually smaller than the maximum static friction, so keeping a crate moving is easier than starting it. The harder the surfaces are pressed together, the larger the friction. The textbook rules are fs ≤ μs·N for static and fk = μk·N for kinetic, where N is the normal force.",
    "story": "ليلى تحاول دفع صندوق ثقيل على أرضية الخرسانة. تدفع أكثر فأكثر ولا يتحرك، لأن الاحتكاك الساكن يزيد مع دفعتها. فجأة ينزلق الصندوق، وبعدها تشعر أن دفعه أسهل. هذا هو الفرق بين الاحتكاك الساكن والحركي. وعندما وضعت صندوقاً آخر فوقه صار الدفع أصعب لأن الضغط على السطح زاد.",
    "storyEn": "Laila tries to push a heavy box across a concrete floor. She pushes harder and harder and it does not move, because static friction grows with her push. Suddenly the box slides, and after that pushing feels easier. That is the difference between static and kinetic friction. When she stacked another box on top, pushing got harder because the pressure on the surface increased.",
    "quiz": [
      {
        "q": "اتجاه قوة الاحتكاك يكون:",
        "o": [
          "مع اتجاه الحركة",
          "عكس الحركة أو محاولة الحركة",
          "عمودياً على السطح"
        ],
        "a": 1
      },
      {
        "q": "الاحتكاك الحركي مقارنة بالساكن عادةً:",
        "o": [
          "أقل",
          "أكبر",
          "متساوٍ دائماً"
        ],
        "a": 0
      },
      {
        "q": "ماذا يحدث للاحتكاك عند زيادة الضغط بين السطحين؟",
        "o": [
          "يقل",
          "يزيد",
          "لا يتأثر"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "The direction of the friction force is:",
            "o": [
                  "With the direction of motion",
                  "Opposite the motion or attempted motion",
                  "Perpendicular to the surface"
            ],
            "a": 1
      },
      {
            "q": "Kinetic friction compared to static friction is usually:",
            "o": [
                  "Smaller",
                  "Larger",
                  "Always equal"
            ],
            "a": 0
      },
      {
            "q": "What happens to friction when the pressure between two surfaces increases?",
            "o": [
                  "It decreases",
                  "It increases",
                  "It is unaffected"
            ],
            "a": 1
      }
],
    "video": "الاحتكاك الساكن والحركي",
    "videoEn": "static and kinetic friction"
  },
  {
    "id": "momentum",
    "src": "https://openstax.org/books/college-physics-2e/pages/8-1-linear-momentum-and-force",
    "emoji": "🏈",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "كمية الحركة (الزخم)",
    "titleEn": "Linear Momentum",
    "kw": [
      "كمية الحركة",
      "الزخم",
      "momentum",
      "p=mv",
      "linear momentum"
    ],
    "ar": "كمية الحركة الخطية هي حاصل ضرب كتلة الجسم في سرعته: p = m·v. ووحدتها في النظام الدولي كجم·م/ث. كلما زادت الكتلة أو السرعة زادت كمية الحركة، وهي كمية متجهة في اتجاه السرعة. مثال الكتاب: لاعب كتلته 110 كجم يجري بسرعة 8.00 م/ث كمية حركته 880 كجم·م/ث، بينما كرة كتلتها 0.410 كجم بسرعة 25.0 م/ث كمية حركتها نحو 10.3 كجم·م/ث فقط. لذلك لا تؤثر الكرة كثيراً في حركة اللاعب عندما يمسكها. وقد صاغ نيوتن قانونه الثاني بدلالة كمية الحركة: القوة الصافية = التغير في كمية الحركة ÷ الزمن، أي Fnet = Δp/Δt.",
    "en": "Linear momentum is the product of an object's mass and velocity: p = m·v. Its SI unit is kg·m/s. The greater the mass or the velocity, the greater the momentum, and it is a vector pointing the same way as the velocity. The textbook example: a 110 kg football player running at 8.00 m/s has 880 kg·m/s of momentum, while a 0.410 kg football at 25.0 m/s has only about 10.3 kg·m/s. So catching the ball barely changes the player's motion. Newton actually stated his second law in terms of momentum: net force equals the change in momentum divided by the time it takes, Fnet = Δp/Δt.",
    "story": "سارة سألت أخاها: لو رميت لك كرة سريعة وجاءني صديقك الثقيل يركض ببطء، من الأصعب إيقافه؟ ضحك وقال: الكرة أسرع، لكن صديقك كتلته أكبر بمئات المرات، فكمية حركته أكبر بكثير. الكتلة والسرعة معاً هما اللذان يصنعان كمية الحركة.",
    "storyEn": "Sara asked her brother: if I throw you a fast ball and your heavy friend comes running slowly, which is harder to stop? He laughed and said: the ball is faster, but your friend is hundreds of times heavier, so his momentum is much bigger. Mass and speed together make momentum.",
    "quiz": [
      {
        "q": "ما صيغة كمية الحركة؟",
        "o": [
          "p = m + v",
          "p = m·v",
          "p = m/v"
        ],
        "a": 1
      },
      {
        "q": "وحدة كمية الحركة في النظام الدولي:",
        "o": [
          "نيوتن",
          "كجم·م/ث",
          "جول"
        ],
        "a": 1
      },
      {
        "q": "أي من الآتي يعطي كمية حركة أكبر؟",
        "o": [
          "كتلة أكبر بالسرعة نفسها",
          "كتلة أصغر بالسرعة نفسها",
          "سرعة صفر"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "What is the formula for momentum?",
            "o": [
                  "p = m + v",
                  "p = m·v",
                  "p = m/v"
            ],
            "a": 1
      },
      {
            "q": "The SI unit of momentum is:",
            "o": [
                  "Newton",
                  "kg·m/s",
                  "Joule"
            ],
            "a": 1
      },
      {
            "q": "Which gives more momentum?",
            "o": [
                  "A larger mass at the same speed",
                  "A smaller mass at the same speed",
                  "Zero speed"
            ],
            "a": 0
      }
],
    "video": "كمية الحركة والزخم",
    "videoEn": "linear momentum physics"
  },
  {
    "id": "mole",
    "src": "https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept",
    "emoji": "⚖️",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "المول والكتلة المولية",
    "titleEn": "The Mole and Molar Mass",
    "kw": [
      "المول",
      "مول",
      "الكتلة المولية",
      "عدد افوجادرو",
      "عدد أفوجادرو",
      "mole",
      "molar mass",
      "avogadro"
    ],
    "ar": "المول وحدة لكمية المادة، مثل الزوج والدستة، لكنه يعدّ عدداً هائلاً من الجسيمات: نحو 6.022 × 10²³ كياناً محدداً مثل الذرات أو الجزيئات أو الوحدات الصيغية، وهذا الرقم يسمى عدد أفوجادرو. الكتلة المولية هي كتلة مول واحد من المادة بالجرام، ووحدتها جم/مول، وهي تساوي عددياً الكتلة الذرية أو الصيغية بوحدة amu. مثلاً مول من الكربون-12 كتلته 12 جم. والكتلة الصيغية تحسب بجمع الكتل الذرية لكل الذرات في الصيغة: كلوريد الصوديوم NaCl كتلته الصيغية 58.44 amu أي 58.44 جم/مول، والأسبرين C₉H₈O₄ كتلته 180.15 amu. وللتحويل من الكتلة إلى عدد الجسيمات نقسم على الكتلة المولية لنحصل على المولات، ثم نضرب في عدد أفوجادرو.",
    "en": "The mole is a unit for an amount of substance, like a pair or a dozen, but it counts a huge number of particles: approximately 6.022 × 10²³ specified entities such as atoms, molecules or formula units, called Avogadro's number. Molar mass is the mass of one mole of a substance in grams, in g/mol, and it equals numerically the atomic or formula mass in amu. For example, a mole of carbon-12 weighs 12 g. Formula mass is found by adding the average atomic masses of all atoms in the formula: sodium chloride NaCl is 58.44 amu, so 58.44 g/mol, and aspirin C₉H₈O₄ is 180.15 amu. To go from mass to number of particles, divide by molar mass to get moles, then multiply by Avogadro's number.",
    "story": "في المعمل، طلبت المعلمة من هدى وزن 58.44 جراماً من ملح الطعام. سألت هدى: لماذا هذا الرقم بالذات؟ ابتسمت المعلمة وقالت: لأنه كتلة مول واحد من NaCl، أي 6.022 × 10²³ وحدة صيغية. الميزان يساعدنا على عدّ ما لا يمكن عدّه بالعين.",
    "storyEn": "In the lab, the teacher asked Hoda to weigh 58.44 grams of table salt. Hoda asked: why this exact number? The teacher smiled and said: because it is the mass of one mole of NaCl, that is 6.022 × 10²³ formula units. The scale helps us count what the eye cannot count.",
    "quiz": [
      {
        "q": "كم جسيماً في مول واحد تقريباً؟",
        "o": [
          "6.022 × 10²³",
          "6.022 × 10²",
          "100"
        ],
        "a": 0
      },
      {
        "q": "الكتلة المولية للكربون-12 هي:",
        "o": [
          "6 جم/مول",
          "12 جم/مول",
          "24 جم/مول"
        ],
        "a": 1
      },
      {
        "q": "للتحويل من الكتلة إلى المولات نقوم بـ:",
        "o": [
          "الضرب في الكتلة المولية",
          "القسمة على الكتلة المولية",
          "الجمع"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "About how many particles are in one mole?",
            "o": [
                  "6.022 × 10²³",
                  "6.022 × 10²",
                  "100"
            ],
            "a": 0
      },
      {
            "q": "The molar mass of carbon-12 is:",
            "o": [
                  "6 g/mol",
                  "12 g/mol",
                  "24 g/mol"
            ],
            "a": 1
      },
      {
            "q": "To convert from mass to moles we:",
            "o": [
                  "Multiply by the molar mass",
                  "Divide by the molar mass",
                  "Add"
            ],
            "a": 1
      }
],
    "video": "المول والكتلة المولية",
    "videoEn": "mole concept chemistry"
  },
  {
    "id": "isotopes",
    "src": "https://openstax.org/books/chemistry-2e/pages/2-3-atomic-structure-and-symbolism",
    "emoji": "⚛️",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "العدد الذري والنظائر",
    "titleEn": "Atomic Number and Isotopes",
    "kw": [
      "نظائر",
      "النظائر",
      "العدد الذري",
      "العدد الكتلي",
      "isotope",
      "isotopes",
      "atomic number",
      "mass number"
    ],
    "ar": "تتكون الذرة من نواة صغيرة فيها بروتونات موجبة ونيوترونات متعادلة، يحيط بها حيّز كبير فيه إلكترونات سالبة. عدد البروتونات هو العدد الذري Z، وهو الذي يحدد هوية العنصر: أي ذرة فيها 6 بروتونات هي كربون. مجموع البروتونات والنيوترونات هو العدد الكتلي A، فعدد النيوترونات = A − Z. الذرة المتعادلة فيها إلكترونات بقدر البروتونات. إذا فقدت إلكتروناً صارت أيوناً موجباً، وإذا اكتسبته صارت أيوناً سالباً. النظائر ذرات للعنصر نفسه لها العدد الذري نفسه وأعداد كتلية مختلفة؛ فالمغنيسيوم له ثلاثة نظائر أعدادها الكتلية 24 و25 و26 وكلها العدد الذري 12.",
    "en": "An atom has a tiny nucleus of positive protons and neutral neutrons, surrounded by a much larger volume holding negative electrons. The number of protons is the atomic number Z, and it defines the element: any atom with six protons is carbon. Protons plus neutrons make the mass number A, so neutrons = A − Z. A neutral atom has as many electrons as protons. If it loses an electron it becomes a positive ion, and if it gains one it becomes a negative ion. Isotopes are atoms of the same element with the same atomic number but different mass numbers; magnesium has three isotopes with mass numbers 24, 25 and 26, all with atomic number 12.",
    "story": "في حصة الكيمياء أعطى المعلم نور بطاقات: بروتونات 12 ونيوترونات 12، ثم بطاقات: بروتونات 12 ونيوترونات 14. سألها: هل هما عنصران مختلفان؟ فكرت نور وقالت: لا، عدد البروتونات واحد فهما مغنيسيوم، لكنهما نظيران مختلفان.",
    "storyEn": "In chemistry class the teacher handed Nour cards: 12 protons and 12 neutrons, then cards: 12 protons and 14 neutrons. He asked her: are these two different elements? Nour thought and said: no, the proton count is the same, so both are magnesium, but they are two different isotopes.",
    "quiz": [
      {
        "q": "ما الذي يحدد هوية العنصر؟",
        "o": [
          "عدد النيوترونات",
          "عدد البروتونات",
          "عدد الإلكترونات فقط"
        ],
        "a": 1
      },
      {
        "q": "عدد النيوترونات يساوي:",
        "o": [
          "A + Z",
          "A − Z",
          "Z"
        ],
        "a": 1
      },
      {
        "q": "النظائر هي ذرات لعنصر واحد تختلف في:",
        "o": [
          "العدد الذري",
          "عدد النيوترونات",
          "هوية العنصر"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "What determines an element's identity?",
            "o": [
                  "The number of neutrons",
                  "The number of protons",
                  "Only the number of electrons"
            ],
            "a": 1
      },
      {
            "q": "The number of neutrons equals:",
            "o": [
                  "A + Z",
                  "A − Z",
                  "Z"
            ],
            "a": 1
      },
      {
            "q": "Isotopes are atoms of one element that differ in:",
            "o": [
                  "Atomic number",
                  "Number of neutrons",
                  "Element identity"
            ],
            "a": 1
      }
],
    "video": "العدد الذري والنظائر",
    "videoEn": "atomic number and isotopes"
  },
  {
    "id": "reactionrate",
    "src": "https://openstax.org/books/chemistry-2e/pages/12-1-chemical-reaction-rates",
    "emoji": "⏱️",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "سرعة التفاعل الكيميائي",
    "titleEn": "Chemical Reaction Rates",
    "kw": [
      "سرعة التفاعل",
      "معدل التفاعل",
      "reaction rate",
      "rate of reaction",
      "instantaneous rate"
    ],
    "ar": "سرعة التفاعل الكيميائي هي مقدار التغير في كمية المادة المتفاعلة أو الناتجة في وحدة الزمن، كما أن السرعة العادية هي المسافة في وحدة الزمن. في المحاليل نعبر عنها بالتركيز، فتكون السرعة = −Δ[متفاعل]/Δt. نضرب في −1 لأن تركيز المتفاعل يقل، ونتفق على أن تكون السرعة موجبة. في مثال تحلل فوق أكسيد الهيدروجين تقل السرعة مع الزمن، أي أن التفاعل يبطؤ كلما استُهلك المتفاعل. السرعة المتوسطة تحسب على فترة زمنية، والسرعة اللحظية هي سرعة التفاعل عند لحظة محددة، وتساوي القيمة السالبة لميل المماس لمنحنى تركيز هذا المتفاعل مع الزمن، والسرعة الابتدائية هي اللحظية عند بداية التفاعل.",
    "en": "The rate of a chemical reaction is the change in the amount of a reactant or product per unit time, just as speed is distance per unit time. In solutions we use concentration, so rate = −Δ[reactant]/Δt. We multiply by −1 because reactant concentration falls, and by convention rates are positive. In the textbook example of hydrogen peroxide decomposing, the rate decreases over time, so the reaction slows as the reactant is used up. The average rate is found over a time interval; the instantaneous rate is the rate at one moment, equal to the negative slope of the tangent to this reactant concentration-time curve, and the initial rate is the instantaneous rate at the start.",
    "story": "بينما كانت ريم تراقب فقاعات في كوب، لاحظت أنها تكثر في البداية ثم تقل. سألت معلمتها، فقالت: التفاعل يسير بسرعة أعلى عندما يكون المتفاعل كثيراً ثم يبطؤ كلما قل. مثل سيارة تقترب من إشارة وتخفف سرعتها حتى تقف.",
    "storyEn": "While Reem watched bubbles in a glass, she noticed they were many at first and then fewer. She asked her teacher, who said: the reaction goes faster when there is more reactant, then slows as it runs out. Like a car approaching a traffic light and easing off until it stops.",
    "quiz": [
      {
        "q": "سرعة التفاعل هي:",
        "o": [
          "التغير في الكمية لكل وحدة زمن",
          "حجم الوعاء",
          "درجة اللون"
        ],
        "a": 0
      },
      {
        "q": "السرعة اللحظية تساوي على منحنى التركيز مع الزمن:",
        "o": [
          "مساحة تحت المنحنى",
          "سالب ميل المماس لتركيز المتفاعل",
          "قيمة التركيز نفسه"
        ],
        "a": 1
      },
      {
        "q": "في مثال فوق أكسيد الهيدروجين، مع مرور الزمن السرعة:",
        "o": [
          "تقل",
          "تزيد",
          "ثابتة"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Reaction rate is:",
            "o": [
                  "The change in amount per unit time",
                  "The volume of the flask",
                  "The shade of the color"
            ],
            "a": 0
      },
      {
            "q": "On a concentration-versus-time curve, the instantaneous rate equals:",
            "o": [
                  "The area under the curve",
                  "The negative slope of the tangent to the reactant's concentration",
                  "The concentration value itself"
            ],
            "a": 1
      },
      {
            "q": "In the hydrogen peroxide example, as time passes the rate:",
            "o": [
                  "Decreases",
                  "Increases",
                  "Stays constant"
            ],
            "a": 0
      }
],
    "video": "سرعة التفاعل الكيميائي",
    "videoEn": "chemical reaction rate"
  },
  {
    "id": "mitosis",
    "src": "https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle",
    "emoji": "🔬",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "دورة الخلية والانقسام المتساوي",
    "titleEn": "The Cell Cycle and Mitosis",
    "kw": [
      "الانقسام المتساوي",
      "دورة الخلية",
      "انقسام الخلية",
      "mitosis",
      "cell cycle",
      "cell division"
    ],
    "ar": "دورة الخلية سلسلة مرتبة من النمو وانقسام الخلية تنتج خليتين بنتين متطابقتين. لها طوران رئيسيان: الطور البيني، تنمو فيه الخلية وينسخ DNA، والطور الانقسامي. الطور البيني له ثلاث مراحل: G1 تنمو فيها الخلية وتجمع مكونات DNA والطاقة، وS ينسخ فيها DNA فتتكون كروماتيدات شقيقة متصلة بالسنترومير، وG2 تستعد فيها للانقسام. الانقسام المتساوي (الميتوزي) مراحله: الطور التمهيدي، ثم التمهيدي المتأخر، ثم الاستوائي حيث تصطف الكروموسومات على المستوى الاستوائي، ثم الانفصالي، ثم النهائي حيث تتكون أغلفة نووية جديدة. وبعده يحدث انقسام السيتوبلازم لتنفصل الخليتان.",
    "en": "The cell cycle is an ordered series of growth and division events that produces two identical daughter cells. It has two major phases: interphase, when the cell grows and replicates DNA, and the mitotic phase. Interphase has three stages: G1, where the cell grows and collects building blocks and energy; S, where DNA is replicated to form sister chromatids joined at the centromere; and G2, where the cell makes final preparations. Mitosis proceeds through prophase, prometaphase, metaphase, where chromosomes line up on the metaphase plate, anaphase, and telophase, where new nuclear envelopes form. Cytokinesis then splits the cytoplasm so the two cells separate.",
    "story": "تحت المجهر شاهدت منى خلايا في طرف جذر بصل. في إحداها الكروموسومات تصطف في صف في وسط الخلية، وفي أخرى تتحرك مجموعتان نحو القطبين. قالت المعلمة: الأولى في الطور الاستوائي والثانية في الانفصالي. كل خطوة مرتبة لتنتج خليتين متطابقتين.",
    "storyEn": "Under the microscope, Mona watched cells in an onion root tip. In one, the chromosomes line up in a row at the cell's middle; in another, two sets move toward the poles. The teacher said: the first is in metaphase and the second in anaphase. Every step is ordered to produce two identical cells.",
    "quiz": [
      {
        "q": "ماذا يحدث في المرحلة S؟",
        "o": [
          "ينسخ DNA",
          "تنفصل الخليتان",
          "تختفي النواة نهائياً"
        ],
        "a": 0
      },
      {
        "q": "في الطور الاستوائي الكروموسومات:",
        "o": [
          "تصطف في وسط الخلية",
          "تتجه إلى القطبين",
          "تتحلل"
        ],
        "a": 0
      },
      {
        "q": "الانقسام المتساوي ينتج:",
        "o": [
          "4 خلايا مختلفة",
          "خليتين بنتين متطابقتين",
          "خلية واحدة فقط"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "What happens in the S phase?",
            "o": [
                  "DNA is copied",
                  "The two cells separate",
                  "The nucleus disappears forever"
            ],
            "a": 0
      },
      {
            "q": "In metaphase the chromosomes:",
            "o": [
                  "Line up in the middle of the cell",
                  "Head to the poles",
                  "Break down"
            ],
            "a": 0
      },
      {
            "q": "Mitosis produces:",
            "o": [
                  "4 different cells",
                  "Two identical daughter cells",
                  "Only one cell"
            ],
            "a": 1
      }
],
    "video": "الانقسام المتساوي الميتوزي",
    "videoEn": "mitosis stages"
  },
  {
    "id": "osmosis",
    "src": "https://openstax.org/books/biology-2e/pages/5-2-passive-transport",
    "emoji": "💧",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الانتشار والخاصية الأسموزية",
    "titleEn": "Diffusion and Osmosis",
    "kw": [
      "الخاصية الاسموزية",
      "الخاصية الأسموزية",
      "اسموزية",
      "أسموزية",
      "الانتشار",
      "osmosis",
      "diffusion",
      "passive transport"
    ],
    "ar": "الأغشية الخلوية شبه نافذة: تسمح لبعض المواد بالمرور دون غيرها. النقل السلبي يحدث دون أن تبذل الخلية طاقة، وتنتقل فيه المواد من التركيز الأعلى إلى الأقل. الانتشار هو انتقال مادة من منطقة تركيزها عالٍ إلى منطقة تركيزها منخفض حتى يتساوى التركيز، وأكسجين وثاني أكسيد الكربون ينتشران عبر الغشاء بهذه الطريقة. الأسموزية حالة خاصة من الانتشار تخص الماء فقط عبر غشاء شبه نافذ. إذا كان السائل الخارجي أقل أسموزية من داخل الخلية (هيبوتوني) يدخل الماء إلى الخلية، وإذا كان أعلى (هيبرتوني) يخرج منها، وإذا تساوى (أيزوتوني) فلا صافي حركة.",
    "en": "Cell membranes are selectively permeable: they let some substances through but not others. Passive transport needs no energy from the cell, and substances move from higher to lower concentration. Diffusion is the movement of a substance from an area of high concentration to low until the concentration is equal; oxygen and carbon dioxide cross membranes this way. Osmosis is a special case of diffusion that moves only water across a semipermeable membrane. If the outside fluid has lower osmolarity than the cell (hypotonic), water enters the cell; if it is higher (hypertonic), water leaves; and if equal (isotonic), there is no net movement.",
    "story": "وضعت فرح شريحة بطاطس في ماء مالح وأخرى في ماء عذب. بعد وقت صارت الأولى طرية والثانية متماسكة. شرحت المعلمة: في الماء المالح يخرج الماء من الخلايا، وفي الماء العذب يدخل. الحركة الصافية للماء هنا نحو الجهة الأكثر ذائبات التي لا تعبر الغشاء.",
    "storyEn": "Farah placed a potato slice in salt water and another in fresh water. After a while the first went soft and the second stayed firm. The teacher explained: in salt water, water leaves the cells; in fresh water, it enters. The net movement of water here is toward the side with more solutes that cannot cross the membrane.",
    "quiz": [
      {
        "q": "الانتشار هو انتقال المواد من:",
        "o": [
          "التركيز الأقل إلى الأعلى",
          "التركيز الأعلى إلى الأقل",
          "دون أي اتجاه"
        ],
        "a": 1
      },
      {
        "q": "الأسموزية تخص حركة:",
        "o": [
          "الماء عبر غشاء شبه نافذ",
          "الأملاح فقط",
          "البروتينات فقط"
        ],
        "a": 0
      },
      {
        "q": "في وسط هيبوتوني حول الخلية، الماء:",
        "o": [
          "يدخل إلى الخلية",
          "يخرج من الخلية",
          "لا يتحرك"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "Diffusion is the movement of substances from:",
            "o": [
                  "Lower concentration to higher",
                  "Higher concentration to lower",
                  "With no direction"
            ],
            "a": 1
      },
      {
            "q": "Osmosis concerns the movement of:",
            "o": [
                  "Water across a semipermeable membrane",
                  "Salts only",
                  "Proteins only"
            ],
            "a": 0
      },
      {
            "q": "In a hypotonic solution around a cell, water:",
            "o": [
                  "Enters the cell",
                  "Leaves the cell",
                  "Does not move"
            ],
            "a": 0
      }
],
    "video": "الانتشار والخاصية الأسموزية",
    "videoEn": "diffusion and osmosis"
  },
  {
    "id": "meiosis",
    "src": "https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis",
    "emoji": "🧫",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "الانقسام الاختزالي (الميوزي)",
    "titleEn": "Meiosis",
    "kw": [
      "الانقسام الاختزالي",
      "الميوزي",
      "ميوسس",
      "meiosis",
      "gametes",
      "haploid",
      "diploid"
    ],
    "ar": "التكاثر الجنسي يحتاج إلى اتحاد مشيجين، كل منهما فيه مجموعة واحدة من الكروموسومات (أحادي المجموعة)، فتتكون زيجوت فيه مجموعتان (ثنائي المجموعة). لو لم تُختزل المجموعات إلى النصف في المشيجات لتضاعف عددها في كل جيل. الانقسام الاختزالي انقسام نووي يكوّن خلايا أحادية المجموعة من خلية ثنائية. فيه نسخ واحد للكروموسومات يتبعه انقسامان: الاختزالي الأول والثاني. في الطور التمهيدي الأول تتزاوج الكروموسومات المتماثلة ويحدث العبور بين كروماتيداتها غير الشقيقة. الناتج النهائي أربع خلايا بنات أحادية المجموعة. والعبور والاصطفاف العشوائي في الطور الاستوائي الأول مصدران أساسيان للتنوع الوراثي.",
    "en": "Sexual reproduction requires two gametes, each with one set of chromosomes (haploid), uniting into a zygote with two sets (diploid). If the number of sets were not halved in gametes, it would double with every generation. Meiosis is the nuclear division that forms haploid cells from a diploid cell. It has one round of chromosome replication followed by two divisions, meiosis I and meiosis II. In prophase I homologous chromosomes pair up and crossing over occurs between non-sister chromatids. The result is four haploid daughter cells. Crossing over and random alignment at metaphase I are major sources of genetic variation.",
    "story": "سألت ياسمين: لماذا لا أشبه أختي تماماً رغم أن أبوينا واحد؟ شرحت المعلمة: كل مشيج يحمل خليطاً مختلفاً من كروموسومات الأبوين بسبب العبور والاصطفاف العشوائي. لذلك يصنع الانقسام الاختزالي أربع خلايا أحادية المجموعة وتسهم هذه العمليات في تنوعها الوراثي.",
    "storyEn": "Yasmin asked: why do I not look exactly like my sister though we have the same parents? The teacher explained: each gamete carries a different mix of the parents' chromosomes because of crossing over and random alignment. That is why meiosis makes four haploid cells and these processes contribute to their genetic variety.",
    "quiz": [
      {
        "q": "عدد الخلايا الناتجة من الانقسام الاختزالي:",
        "o": [
          "اثنتان",
          "أربع",
          "ثمانٍ"
        ],
        "a": 1
      },
      {
        "q": "الخلايا الناتجة تكون:",
        "o": [
          "ثنائية المجموعة",
          "أحادية المجموعة",
          "بلا كروموسومات"
        ],
        "a": 1
      },
      {
        "q": "العبور يحدث بين:",
        "o": [
          "كروماتيدات غير شقيقة لكروموسومات متماثلة",
          "النواة والغشاء",
          "الخليتين البنتين"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "The number of cells produced by meiosis:",
            "o": [
                  "Two",
                  "Four",
                  "Eight"
            ],
            "a": 1
      },
      {
            "q": "The resulting cells are:",
            "o": [
                  "Diploid",
                  "Haploid",
                  "Without chromosomes"
            ],
            "a": 1
      },
      {
            "q": "Crossing over happens between:",
            "o": [
                  "Non-sister chromatids of homologous chromosomes",
                  "The nucleus and the membrane",
                  "The two daughter cells"
            ],
            "a": 0
      }
],
    "video": "الانقسام الاختزالي الميوزي",
    "videoEn": "meiosis explained"
  },
  {
    "id": "emspectrum",
    "src": "https://openstax.org/books/college-physics-2e/pages/24-3-the-electromagnetic-spectrum",
    "emoji": "📡",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الطيف الكهرومغناطيسي",
    "titleEn": "The Electromagnetic Spectrum",
    "kw": [
      "الطيف الكهرومغناطيسي",
      "موجات كهرومغناطيسية",
      "موجات الراديو",
      "الأشعة السينية",
      "electromagnetic spectrum",
      "em waves",
      "x-rays",
      "radio waves"
    ],
    "ar": "الموجات الكهرومغناطيسية تصنف حسب تردداتها وأطوالها الموجية إلى راديو وميكروويف وتحت حمراء وضوء مرئي وفوق بنفسجية وأشعة سينية وأشعة غاما. كلها تسير في الفراغ بسرعة الضوء c وتخضع للعلاقة c = f·λ، لذلك كلما زاد التردد قصر الطول الموجي. الضوء المرئي جزء ضيق من الطيف تستجيب له العين. وكلما قصر الطول الموجي أمكن تمييز تفاصيل أصغر. والمادة الشفافة لنوع منها قد تكون معتمة لنوع آخر: الزجاج شفاف للضوء المرئي لكنه معتم غالباً للأشعة فوق البنفسجية، والجلد معتم للضوء لكنه شفاف للأشعة السينية. وموجات الراديو تنتج من تيارات في أسلاك ودوائر.",
    "en": "Electromagnetic waves are classified by frequency and wavelength into radio, microwave, infrared, visible light, ultraviolet, X-rays and gamma rays. All travel in vacuum at the speed of light c and obey c = f·λ, so the higher the frequency, the shorter the wavelength. Visible light is the narrow part of the spectrum the human eye responds to. The shorter the wavelength, the smaller the detail it can resolve. Something transparent to one type can be opaque to another: glass is transparent to visible light but largely opaque to ultraviolet, and skin is opaque to visible light but transparent to X-rays. Radio waves are produced by currents in wires and circuits.",
    "story": "في حصة العلوم سألت المعلمة: لماذا تمر الأشعة السينية عبر الجلد ولا يمر الضوء؟ فكّر كريم ثم قال: لأن لكل نوع من الأمواج تردداً وطولاً مختلفاً، فتتفاعل المادة معه بشكل مختلف. أجابت: صحيح، لهذا يرى الطبيب العظام بالأشعة ولا يراها بعينه.",
    "storyEn": "In science class the teacher asked: why do X-rays pass through skin while light does not? Karim thought, then said: because each kind of wave has a different frequency and wavelength, so matter interacts with it differently. She answered: correct, and that is why a doctor sees bones with X-rays and not with the naked eye.",
    "quiz": [
      {
        "q": "العلاقة بين التردد والطول الموجي للموجات الكهرومغناطيسية:",
        "o": [
          "كلما زاد التردد قصر الطول الموجي",
          "كلما زاد التردد زاد الطول الموجي",
          "لا علاقة بينهما"
        ],
        "a": 0
      },
      {
        "q": "الزجاج العادي بالنسبة للأشعة فوق البنفسجية:",
        "o": [
          "شفاف تماماً",
          "معتم إلى حد كبير",
          "يتحول إلى راديو"
        ],
        "a": 1
      },
      {
        "q": "سرعة جميع الموجات الكهرومغناطيسية في الفراغ هي:",
        "o": [
          "مختلفة",
          "سرعة الضوء c",
          "صفر"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "The relationship between frequency and wavelength of electromagnetic waves:",
            "o": [
                  "Higher frequency means shorter wavelength",
                  "Higher frequency means longer wavelength",
                  "No relationship"
            ],
            "a": 0
      },
      {
            "q": "Ordinary glass with respect to ultraviolet is:",
            "o": [
                  "Completely transparent",
                  "Largely opaque",
                  "It turns into radio"
            ],
            "a": 1
      },
      {
            "q": "The speed of all electromagnetic waves in a vacuum is:",
            "o": [
                  "Different",
                  "The speed of light c",
                  "Zero"
            ],
            "a": 1
      }
],
    "video": "الطيف الكهرومغناطيسي",
    "videoEn": "electromagnetic spectrum"
  }
,
  {
    "id": "torque",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "عزم القوة",
    "titleEn": "Torque",
    "emoji": "⚙️",
    "src": "https://openstax.org/books/college-physics-2e/pages/9-2-the-second-condition-for-equilibrium",
    "kw": [
      "عزم القوة",
      "عزم الدوران",
      "torque",
      "lever arm"
    ],
    "ar": "عزم القوة يقيس قدرة القوة على تغيير حركة الدوران حول نقطة مختارة. مقداره τ = F·r⊥، حيث r⊥ هو أقصر مسافة عمودية من محور الدوران إلى خط عمل القوة. وحدته نيوتن·متر. عند الدفع عمودياً على باب بقوة 40 نيوتن وعلى بعد 0.8 متر من المفصلة، يكون العزم 32 نيوتن·متر. لذلك يسهل فتح الباب من المقبض البعيد عن المفصلة مقارنة بالدفع قربها. نميز بين اتجاه مع عقارب الساعة واتجاه عكسها. وللاتزان يلزم أن تكون محصلة القوى الخارجية صفراً، وكذلك محصلة العزوم حول النقطة نفسها صفراً.",
    "en": "Torque measures how effectively a force changes rotation about a chosen point. Its magnitude is τ = F·r⊥, where r⊥ is the shortest perpendicular distance from the pivot to the line of action of the force. Its unit is newton metre. Pushing perpendicular to a door with 40 N at 0.8 m from its hinge gives 32 N·m of torque. That is why pushing at the handle is easier than pushing near the hinge. Clockwise and counterclockwise torques have opposite signs. Equilibrium requires both zero net external force and zero net external torque, with all torques calculated about the same point.",
    "story": "تخيّل باباً ثقيلاً. دفعه سامي قرب المفصلة فلم يفتح بسهولة، ثم دفع بالقوة نفسها عند المقبض فدار. لم تزد القوة، لكن ذراعها العمودي زاد، فزاد عزمها.",
    "storyEn": "Imagine a heavy door. Samy pushed near the hinge and it would not open easily, then he pushed with the same force at the handle and it swung. The force did not grow, but its perpendicular lever arm did, so its torque grew.",
    "quiz": [
      {
        "q": "وحدة العزم هي:",
        "o": [
          "نيوتن·متر",
          "كجم",
          "متر/ث"
        ],
        "a": 0
      },
      {
        "q": "بقوة 40 نيوتن وذراع عمودي 0.8 متر، العزم:",
        "o": [
          "50",
          "32 نيوتن·متر",
          "0.02"
        ],
        "a": 1
      },
      {
        "q": "للاتزان يجب أن تكون محصلة العزوم:",
        "o": [
          "صفراً",
          "موجبة دائماً",
          "أكبر ما يمكن"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "The unit of torque is:",
            "o": [
                  "Newton·meter",
                  "kg",
                  "m/s"
            ],
            "a": 0
      },
      {
            "q": "With a force of 40 N and a perpendicular lever arm of 0.8 m, the torque is:",
            "o": [
                  "50",
                  "32 N·m",
                  "0.02"
            ],
            "a": 1
      },
      {
            "q": "For equilibrium the net torque must be:",
            "o": [
                  "Zero",
                  "Always positive",
                  "As large as possible"
            ],
            "a": 0
      }
],
    "video": "عزم القوة",
    "videoEn": "Torque"
  },
  {
    "id": "density",
    "cat": "فيزياء",
    "catEn": "Physics",
    "title": "الكثافة: الكتلة والحجم",
    "titleEn": "Density: Mass and Volume",
    "emoji": "⚙️",
    "src": "https://openstax.org/books/college-physics-2e/pages/11-2-density",
    "kw": [
      "كثافة",
      "الكثافة",
      "density",
      "mass per volume"
    ],
    "ar": "الكثافة هي الكتلة لكل وحدة حجم: ρ = m/V، ووحدتها في النظام الدولي كجم/م³. يمكن لجسمين أن يشغلا الحجم نفسه لكن تختلف كتلتهما لأن كثافتيهما مختلفتان. كما أن كيلوجراماً من الريش وكيلوجراماً من الطوب لهما الكتلة نفسها، لكن الريش يشغل حجماً أكبر. كثافة الماء المرجعية في هذا الدرس نحو 1000 كجم/م³، أي 1 جم/سم³. يمكن أن تساعد الكثافة في التعرف على المادة. كثافة الغازات أقل بكثير من كثافة السوائل والمواد الصلبة لأن جسيمات الغاز تفصل بينها مساحات كبيرة. انتبه للوحدات قبل القسمة، فالكثافة ليست الكتلة وحدها.",
    "en": "Density is mass per unit volume: ρ = m/V, with SI unit kg/m³. Two objects can occupy the same volume yet have different masses because their densities differ. A kilogram of feathers and a kilogram of bricks have the same mass, but the feathers occupy more volume. A reference density for water in this lesson is about 1000 kg/m³, or 1 g/cm³. Density can help identify a material. Gases are far less dense than liquids and solids because gas particles are separated by large empty spaces. Check the units before dividing: density is not mass alone.",
    "story": "تخيّل مكعبين بالحجم نفسه، أحدهما خفيف والآخر ثقيل. وضعت مريم كلاً منهما على الميزان. الحجم لم يتغير بينهما، لذلك كانت الكتلة الأكبر دليلاً على كثافة أكبر.",
    "storyEn": "Imagine two cubes of the same size, one light and one heavy. Mariam placed each on a scale. The volume did not change between them, so the larger mass was evidence of a greater density.",
    "quiz": [
      {
        "q": "الكثافة تساوي:",
        "o": [
          "الكتلة/الحجم",
          "الحجم/الكتلة",
          "الكتلة × الحجم"
        ],
        "a": 0
      },
      {
        "q": "وحدة الكثافة في النظام الدولي:",
        "o": [
          "كجم/م³",
          "نيوتن",
          "متر"
        ],
        "a": 0
      },
      {
        "q": "كتلة 200 جم وحجم 100 سم³ تعطي كثافة:",
        "o": [
          "0.5",
          "2 جم/سم³",
          "300"
        ],
        "a": 1
      }
    ],
    "quizEn": [
      {
            "q": "Density equals:",
            "o": [
                  "Mass / volume",
                  "Volume / mass",
                  "Mass × volume"
            ],
            "a": 0
      },
      {
            "q": "The SI unit of density is:",
            "o": [
                  "kg/m³",
                  "Newton",
                  "Meter"
            ],
            "a": 0
      },
      {
            "q": "A mass of 200 g and a volume of 100 cm³ give a density of:",
            "o": [
                  "0.5",
                  "2 g/cm³",
                  "300"
            ],
            "a": 1
      }
],
    "video": "الكثافة: الكتلة والحجم",
    "videoEn": "Density: Mass and Volume"
  },
  {
    "id": "catalysts",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "المحفزات وطاقة التنشيط",
    "titleEn": "Catalysts and Activation Energy",
    "emoji": "🧪",
    "src": "https://openstax.org/books/chemistry-2e/pages/12-7-catalysis",
    "kw": [
      "المحفزات",
      "المحفز",
      "عامل حفاز",
      "طاقة التنشيط",
      "catalyst",
      "catalysis",
      "activation energy"
    ],
    "ar": "المحفز مادة تزيد سرعة التفاعل دون أن تُستهلك في محصلته النهائية. قد تشارك في خطوات التفاعل، لكنها تتجدد في النهاية. تعمل بتوفير مسار تفاعل بديل له حاجز طاقة تنشيط أقل. في مخطط الطاقة يبدأ المسار المحفز وغير المحفز عند طاقة المتفاعلات نفسها وينتهيان عند طاقة النواتج نفسها؛ الذي يتغير هو الطريق بينهما. المحفز المتجانس في الطور نفسه مع المتفاعلات، أما غير المتجانس ففي طور مختلف، وغالباً يوفر سطحاً صلباً تلتصق عليه المتفاعلات وتتفاعل ثم تغادره النواتج. الرسم هنا تشبيهي ولا يمثل تفاعلاً بعينه.",
    "en": "A catalyst increases reaction rate without being consumed in the overall reaction. It can participate in individual steps but is regenerated at the end. It provides an alternative reaction pathway with a lower activation-energy barrier. In an energy diagram, catalyzed and uncatalyzed routes start at the same reactant energy and end at the same product energy; what changes is the route between them. A homogeneous catalyst is in the same phase as the reactants. A heterogeneous catalyst is in a different phase, often a solid surface where reactants adsorb, react and then leave as products. This diagram is schematic, not a particular reaction.",
    "story": "تخيّل مسارين لعبور تل: أحدهما يعلو كثيراً والآخر يمر عبر ممر أقل ارتفاعاً. البداية والنهاية لم تتغيرا، لكن عبور المسار الأقل أسهل. هذا تشبيه لفكرة المحفز، وليس معنى ذلك أنه يضيف طاقة للتفاعل.",
    "storyEn": "Imagine two paths over a hill: one climbs high, the other goes through a lower pass. The start and end are unchanged, but crossing the lower path is easier. This is an analogy for what a catalyst does; it does not mean the catalyst adds energy to the reaction.",
    "quiz": [
      {
        "q": "المحفز يوفر مساراً بطاقة تنشيط:",
        "o": [
          "أقل",
          "أعلى دائماً",
          "لا نهائية"
        ],
        "a": 0
      },
      {
        "q": "هل يستهلك المحفز في محصلة التفاعل؟",
        "o": [
          "نعم دائماً",
          "لا، يتجدد",
          "يتحول كله إلى ناتج"
        ],
        "a": 1
      },
      {
        "q": "المحفز المتجانس يكون:",
        "o": [
          "في الطور نفسه مع المتفاعلات",
          "في طور مختلف دائماً",
          "غازاً فقط"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "A catalyst provides a path with activation energy that is:",
            "o": [
                  "Lower",
                  "Always higher",
                  "Infinite"
            ],
            "a": 0
      },
      {
            "q": "Is the catalyst used up in the overall reaction?",
            "o": [
                  "Yes, always",
                  "No, it is regenerated",
                  "It all turns into product"
            ],
            "a": 1
      },
      {
            "q": "A homogeneous catalyst is:",
            "o": [
                  "In the same phase as the reactants",
                  "Always in a different phase",
                  "Only a gas"
            ],
            "a": 0
      }
],
    "video": "المحفزات وطاقة التنشيط",
    "videoEn": "Catalysts and Activation Energy"
  },
  {
    "id": "equilibrium",
    "cat": "كيمياء",
    "catEn": "Chemistry",
    "title": "الاتزان الكيميائي الديناميكي",
    "titleEn": "Dynamic Chemical Equilibrium",
    "emoji": "🧪",
    "src": "https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria",
    "kw": [
      "الاتزان الكيميائي",
      "اتزان ديناميكي",
      "chemical equilibrium",
      "dynamic equilibrium",
      "reversible reaction"
    ],
    "ar": "التفاعل العكوس يمكن أن يسير في اتجاه تكوين النواتج وفي اتجاه استعادة المتفاعلات، ونستخدم له السهم ⇌. عند الاتزان تتساوى سرعتا التفاعل الأمامي والعكسي، فتظل تراكيز المتفاعلات والنواتج ثابتة مع الزمن تحت الظروف نفسها. هذا لا يعني أن التفاعل توقف، بل تستمر العمليتان بالسرعة نفسها. كما لا يعني أن تركيز المتفاعل يساوي تركيز الناتج؛ بعض الأنظمة عند الاتزان غنية بالنواتج وبعضها بالمتفاعلات. ويمكن لتغيرات فيزيائية مثل التبخر والتكاثف في وعاء مغلق أن تصل أيضاً إلى اتزان ديناميكي.",
    "en": "A reversible reaction can proceed both toward products and back toward reactants, represented by ⇌. At equilibrium the forward and reverse reaction rates are equal, so reactant and product concentrations stay constant over time under unchanged conditions. This does not mean the reaction stopped: both processes continue at the same rate. Nor does it mean reactant and product concentrations are equal. Some equilibrium systems contain mostly products and others mostly reactants. Physical processes such as evaporation and condensation in a sealed vessel can also reach dynamic equilibrium.",
    "story": "تخيّل شخصين يتبادلان كرات: كل منهما يرسل كرة ويستقبل كرة في الوقت نفسه. يظل عدد الكرات عند كل منهما ثابتاً رغم استمرار الحركة. هذا تشبيه للاتزان الديناميكي، لا لسكون الجزيئات.",
    "storyEn": "Imagine two people exchanging balls: each sends a ball and receives a ball at the same time. The number of balls each holds stays constant even though the movement never stops. This is an analogy for dynamic equilibrium, not for molecules freezing still.",
    "quiz": [
      {
        "q": "عند الاتزان تتساوى:",
        "o": [
          "سرعتا الاتجاهين",
          "تراكيز كل المواد بالضرورة",
          "كتل كل الجزيئات"
        ],
        "a": 0
      },
      {
        "q": "الاتزان الديناميكي يعني:",
        "o": [
          "توقف كل حركة",
          "استمرار الاتجاهين بالسرعة نفسها",
          "اختفاء المتفاعلات"
        ],
        "a": 1
      },
      {
        "q": "السهم الدال على تفاعل عكوس:",
        "o": [
          "⇌",
          "+",
          "÷"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "At equilibrium, what is equal?",
            "o": [
                  "The rates of the two directions",
                  "Necessarily the concentrations of all substances",
                  "The masses of all particles"
            ],
            "a": 0
      },
      {
            "q": "Dynamic equilibrium means:",
            "o": [
                  "All motion stops",
                  "Both directions continue at the same rate",
                  "The reactants disappear"
            ],
            "a": 1
      },
      {
            "q": "The arrow showing a reversible reaction is:",
            "o": [
                  "⇌",
                  "+",
                  "÷"
            ],
            "a": 0
      }
],
    "video": "الاتزان الكيميائي الديناميكي",
    "videoEn": "Dynamic Chemical Equilibrium"
  },
  {
    "id": "activetransport",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "النقل النشط ومضخة الصوديوم والبوتاسيوم",
    "titleEn": "Active Transport",
    "emoji": "🌱",
    "src": "https://openstax.org/books/biology-2e/pages/5-3-active-transport",
    "kw": [
      "النقل النشط",
      "مضخة الصوديوم",
      "مضخة البوتاسيوم",
      "active transport",
      "sodium potassium pump"
    ],
    "ar": "تحتاج الخلية إلى طاقة لنقل مواد عكس تدرجها الكهروكيميائي. التدرج الكهروكيميائي يجمع أثر فرق التركيز وفرق الشحنة عبر الغشاء. في النقل النشط الأولي تعتمد المضخة مباشرة على ATP. مثالها مضخة الصوديوم والبوتاسيوم في الخلايا الحيوانية: تنقل ثلاثة أيونات صوديوم إلى الخارج مقابل أيوني بوتاسيوم إلى الداخل، وتساعد في الحفاظ على الفروق التي تحتاجها الخلية. النقل النشط الثانوي لا يستهلك ATP مباشرة عند الناقل، بل يستخدم طاقة تدرج صنعه النقل الأولي. لذلك لا يصح القول إن كل نقل نشط يستخدم ATP مباشرة في كل خطوة.",
    "en": "Cells need energy to move substances against their electrochemical gradients. An electrochemical gradient combines a concentration difference with a charge difference across the membrane. In primary active transport, a pump depends directly on ATP. The sodium-potassium pump in animal cells moves three sodium ions out for every two potassium ions moved in, helping maintain the differences the cell needs. Secondary active transport does not use ATP directly at its transporter: it uses energy in a gradient established by primary transport. So not every active-transport step consumes ATP directly.",
    "story": "تخيّل عاملاً يرفع كرات إلى أعلى منحدر باستخدام طاقة. بعد ذلك يمكن لطاقة نزول بعضها أن تساعد في رفع حمولة أخرى. هذا تشبيه للفرق بين ضخ أولي يستهلك الطاقة مباشرة ونقل ثانوي يستفيد من تدرج سابق.",
    "storyEn": "Imagine a worker carrying balls up a slope using energy. After that, the energy of some balls rolling back down can help lift another load. This is an analogy for the difference between primary pumping that spends energy directly and secondary transport that uses a gradient built earlier.",
    "quiz": [
      {
        "q": "مضخة الصوديوم والبوتاسيوم تنقل في الدورة:",
        "o": [
          "3 صوديوم للخارج و2 بوتاسيوم للداخل",
          "3 صوديوم للداخل و2 بوتاسيوم للخارج",
          "الماء فقط"
        ],
        "a": 0
      },
      {
        "q": "النقل النشط الأولي يعتمد مباشرة على:",
        "o": [
          "ATP",
          "ضوء القمر",
          "الانتشار وحده"
        ],
        "a": 0
      },
      {
        "q": "النقل الثانوي يستفيد من:",
        "o": [
          "تدرج صنعه نقل أولي",
          "انعدام الطاقة",
          "اختفاء الغشاء"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "The sodium-potassium pump moves per cycle:",
            "o": [
                  "3 sodium out and 2 potassium in",
                  "3 sodium in and 2 potassium out",
                  "Only water"
            ],
            "a": 0
      },
      {
            "q": "Primary active transport depends directly on:",
            "o": [
                  "ATP",
                  "Moonlight",
                  "Diffusion alone"
            ],
            "a": 0
      },
      {
            "q": "Secondary transport makes use of:",
            "o": [
                  "A gradient built by primary transport",
                  "The absence of energy",
                  "The disappearance of the membrane"
            ],
            "a": 0
      }
],
    "video": "النقل النشط ومضخة الصوديوم والبوتاسيوم",
    "videoEn": "Active Transport"
  },
  {
    "id": "transpiration",
    "cat": "أحياء",
    "catEn": "Biology",
    "title": "النتح وصعود الماء في النبات",
    "titleEn": "Transpiration and Water Transport",
    "emoji": "🌱",
    "src": "https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants",
    "kw": [
      "النتح",
      "صعود الماء",
      "الخشب",
      "الثغور",
      "transpiration",
      "xylem",
      "stomata"
    ],
    "ar": "النتح فقد الماء بالتبخر من أسطح الأوراق، وهو محرك رئيسي لصعود الماء في أوعية الخشب. يسبب تبخر الماء شدّاً يسحب الماء من الجذور نحو الأوراق. يساعد تماسك جزيئات الماء بعضها مع بعض والتصاقها بجدران الأوعية في الحفاظ على عمود الماء. يتحرك الماء من جهد مائي أعلى إلى أقل، ويتأثر الجهد بالمذابات والضغط والجاذبية وعوامل أخرى. تنظم الخلايا الحارسة فتح الثغور وغلقها؛ ففتحها يسمح بتبادل الغازات لكنه يزيد فقد الماء. حركة الماء المدفوعة بالنتح عملية سلبية لا تحتاج ATP مباشرة لتحريك الماء، مع أن تنظيم النبات لها يشمل عمليات حيوية أخرى.",
    "en": "Transpiration is water loss by evaporation from leaf surfaces and is a main driver of water movement in xylem. Evaporation creates tension that pulls water from roots toward leaves. Cohesion between water molecules and adhesion to vessel walls help maintain the water column. Water moves from higher to lower water potential, which depends on solutes, pressure, gravity and other factors. Guard cells regulate stomatal opening: open stomata permit gas exchange but also increase water loss. Transpiration-driven water movement is passive and does not require ATP directly to move the water, although plant regulation involves other biological processes.",
    "story": "تخيّل قطرة تتبع طريقها من التربة إلى الجذر ثم الساق فالورقة. عند الثغر تتبخر إلى الهواء. ليست هناك مضخة قلب في الشجرة؛ تبخر الماء وشد العمود المتماسك يساعدان في سحب ماء آخر من الأسفل.",
    "storyEn": "Imagine a droplet following its path from the soil into the root, then the stem, then the leaf. At the stoma it evaporates into the air. A tree has no heart pump; the evaporation of water and the pull on the cohesive column help draw more water up from below.",
    "quiz": [
      {
        "q": "النسيج الذي يصعد فيه الماء أساساً هو:",
        "o": [
          "الخشب",
          "العظم",
          "العصب"
        ],
        "a": 0
      },
      {
        "q": "الخلايا الحارسة تنظم:",
        "o": [
          "فتح الثغور وغلقها",
          "عدد الكواكب",
          "لون التربة"
        ],
        "a": 0
      },
      {
        "q": "يتحرك الماء نحو جهد مائي:",
        "o": [
          "أقل",
          "أعلى دائماً",
          "لا علاقة له بالجهد"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "The tissue in which water mainly rises is:",
            "o": [
                  "The xylem (wood)",
                  "Bone",
                  "Nerve"
            ],
            "a": 0
      },
      {
            "q": "Guard cells regulate:",
            "o": [
                  "The opening and closing of stomata",
                  "The number of planets",
                  "The color of the soil"
            ],
            "a": 0
      },
      {
            "q": "Water moves toward a water potential that is:",
            "o": [
                  "Lower",
                  "Always higher",
                  "Unrelated to potential"
            ],
            "a": 0
      }
],
    "video": "النتح وصعود الماء في النبات",
    "videoEn": "Transpiration and Water Transport"
  },
  {
    "id": "moonphases",
    "cat": "فلك",
    "catEn": "Astronomy",
    "title": "أطوار القمر",
    "titleEn": "Phases of the Moon",
    "emoji": "🌙",
    "src": "https://openstax.org/books/astronomy-2e/pages/4-5-phases-and-motions-of-the-moon",
    "kw": [
      "أطوار القمر",
      "اطوار القمر",
      "المحاق",
      "البدر",
      "moon phases",
      "lunar phases",
      "new moon",
      "full moon"
    ],
    "ar": "القمر لا يضيء من ذاته، بل يعكس ضوء الشمس. في الوضع المعتاد تضيء الشمس نصفه، لكننا نرى أجزاء مختلفة من هذا النصف أثناء دورانه حول الأرض. هذه هي الأطوار، وليست ظلاً تلقيه الأرض عليه. في المحاق يكون الجانب المضيء بعيداً عنا، وفي البدر يتجه إلينا. عند التربيع الأول أو الأخير نرى نصف القرص مضيئاً. تتكرر الأطوار كل نحو 29.5 يوماً، بينما دورته بالنسبة للنجوم نحو 27.3 يوماً؛ يختلف الرقمان لأن الأرض تتحرك حول الشمس أيضاً. الرسم يوضح الوضع من أعلى ولا يقيس الأحجام أو المسافات الحقيقية.",
    "en": "The Moon does not make its own light: it reflects sunlight. Normally the Sun illuminates half of it, but as the Moon orbits Earth we see different fractions of that lit half. These are the phases, not Earth casting a shadow on the Moon. At new moon the lit side faces away from us; at full moon it faces us. At first or third quarter we see half the disk illuminated. Phases repeat about every 29.5 days, whereas the orbit relative to the stars takes about 27.3 days. The difference arises because Earth also moves around the Sun. The top-down model is not to scale.",
    "story": "رسمت سلمى شكل القمر عدة ليالٍ. ظنت أولاً أن الأرض تحجب ضوءه كل مرة، ثم تخيلت كرة نصفها مضاء تتحرك حولها. أدركت أن الذي يتغير هو الجزء المضيء الذي تراه من موقعها.",
    "storyEn": "Salma drew the Moon's shape over several nights. At first she thought Earth blocked its light every time, then she imagined a half-lit ball moving around her. She realized that what changes is the lit part she sees from where she stands.",
    "quiz": [
      {
        "q": "سبب الأطوار هو:",
        "o": [
          "تغير الجزء المضيء الذي نراه",
          "ظل الأرض كل ليلة",
          "ضوء يصنعه القمر"
        ],
        "a": 0
      },
      {
        "q": "دورة تكرر الأطوار نحو:",
        "o": [
          "29.5 يوماً",
          "24 ساعة",
          "365 يوماً"
        ],
        "a": 0
      },
      {
        "q": "عند التربيع نرى من القرص مضيئاً:",
        "o": [
          "نصفه",
          "كله",
          "لا شيء"
        ],
        "a": 0
      }
    ],
    "quizEn": [
      {
            "q": "The cause of the phases is:",
            "o": [
                  "The changing lit part we see",
                  "Earth's shadow every night",
                  "Light the Moon makes"
            ],
            "a": 0
      },
      {
            "q": "The phases repeat in a cycle of about:",
            "o": [
                  "29.5 days",
                  "24 hours",
                  "365 days"
            ],
            "a": 0
      },
      {
            "q": "At a quarter phase we see the disc:",
            "o": [
                  "Half lit",
                  "Fully lit",
                  "Not lit at all"
            ],
            "a": 0
      }
],
    "video": "أطوار القمر",
    "videoEn": "Phases of the Moon"
  }
];
const MENTOR_ANSWERS = [
  {
    "keys": [
      "الذكاء الاصطناعي",
      "artificial intelligence",
      "ai بأسلوب",
      "ai simply"
    ],
    "src": "https://en.wikipedia.org/wiki/Artificial_intelligence",
    "ar": "الذكاء الاصطناعي هو أن نعلّم الكمبيوتر أن يتعلّم من الأمثلة بدل أن نكتب له كل خطوة.\n\nتخيّل أنك تعلّم طفلاً صغيراً معنى \"قطة\": لا تعطيه تعريفاً قاموسياً، بل تريه صوراً كثيرة لقطط حتى يبدأ يميّزها وحده. كذلك الذكاء الاصطناعي: نعطيه آلاف الأمثلة (صور، نصوص، أصوات) فيستخرج الأنماط المشتركة، ثم يستطيع التعامل مع حالات جديدة لم يرها من قبل.\n\nأمثلة من حياتك: توصيات يوتيوب، الترجمة الفورية، وأدوات التعرف على الصور.\n\nالفكرة باختصار: بيانات كثيرة + خوارزمية تتعلم الأنماط = قدرة على التنبؤ والإجابة. حدوده: لا \"يفهم\" كما يفهم الإنسان وقد يخطئ بثقة، لذلك نراجع إجاباته دائماً.",
    "en": "Artificial intelligence means teaching a computer to learn from examples instead of writing every rule by hand.\n\nThink of teaching a small child what a \"cat\" is: you do not give a dictionary definition, you show many cat pictures until the child recognizes cats alone. AI works the same way: we feed it thousands of examples (images, text, audio), it finds the shared patterns, and then handles new cases it never saw.\n\nExamples from your life: YouTube recommendations, instant translation, and image-recognition tools.\n\nIn short: lots of data + a pattern-learning algorithm = the ability to predict and answer. Its limits: it does not \"understand\" like a human and can be confidently wrong, so always double-check."
  },
  {
    "keys": [
      "الطاقة المتجددة",
      "renewable energy",
      "بحث عن الطاقة"
    ],
    "src": "https://en.wikipedia.org/wiki/Renewable_energy",
    "ar": "إليك مخطط بحث قصير وجاهز للتوسعة:\n\n1) المقدمة: تعريف الطاقة المتجددة (شمس، رياح، ماء، حرارة باطن الأرض، كتلة حيوية) ولماذا أصبحت قضية مركزية مع تغيّر المناخ.\n2) المشكلة: الاعتماد على الوقود الأحفوري، انبعاثات الكربون، واستنزاف الموارد.\n3) الأنواع والتقنيات: كيف تعمل الخلايا الشمسية وتوربينات الرياح، ومقارنة مبسطة من حيث التكلفة والكفاءة.\n4) الواقع المحلي: إمكانات مصر في الطاقة الشمسية (مجمع بنبان بأسوان) ومشاريع الرياح في خليج السويس.\n5) التحديات: تخزين الطاقة، تكلفة البنية التحتية، وتقلب الإنتاج.\n6) الخاتمة والتوصيات: الطاقة المتجددة ليست خياراً بيئياً فقط بل اقتصادياً، واقتراحات لمستقبل البحث.\n\nنصيحة للتوثيق: استخدم تقارير IEA وIRENA ووزارة الكهرباء المصرية كمصادر.",
    "en": "Here is a short research outline ready to expand:\n\n1) Introduction: what renewable energy is (solar, wind, hydro, geothermal, biomass) and why it became central with climate change.\n2) The problem: fossil-fuel dependence, carbon emissions, resource depletion.\n3) Types and technologies: how solar cells and wind turbines work, with a simple cost/efficiency comparison.\n4) Local context: Egypt solar potential (the Benban complex in Aswan) and wind projects in the Gulf of Suez.\n5) Challenges: energy storage, infrastructure cost, variable output.\n6) Conclusion and recommendations: renewables are an economic choice, not only environmental, plus suggestions for further research.\n\nSourcing tip: use IEA and IRENA reports and Egypt Ministry of Electricity as references."
  },
  {
    "keys": [
      "التعلّم الإلكتروني",
      "التعلم الالكتروني",
      "online learning",
      "التقليدي"
    ],
    "src": "https://en.wikipedia.org/wiki/Distance_education",
    "ar": "سأدافع عن الطرفين ثم أعطيك حكماً متوازناً:\n\nمع التعلّم الإلكتروني: مرونة في الوقت والمكان، وصول لمحتوى عالمي مجاني، تعلّم ذاتي الإيقاع يناسب سرعة كل طالب، وأدوات تفاعلية (كويزات، محاكاة، مرشدون أذكياء).\n\nضده: ضعف التفاعل الإنساني والانضباط الذاتي، مشاكل الاتصال والأجهزة، صعوبة التقييم العادل، واحتياج الأطفال الصغار لإشراف مباشر.\n\nالحكم: ليس \"أيهما أفضل\" بل \"أيهما أنسب لأي هدف\". التعلّم الإلكتروني يتفوق في الوصول والمرونة والتخصيص، والتقليدي يتفوق في التنشئة الاجتماعية والانضباط والمهارات العملية. الأقوى حالياً هو النموذج المختلط (Blended Learning) الذي يجمع مزايا الاثنين.\n\nدورك الآن: اختر طرفاً وسأجادلك فيه بالأدلة.",
    "en": "I will argue both sides, then give you a balanced verdict:\n\nFor online learning: flexible time and place, free access to world-class content, self-paced progress that fits each learner, and interactive tools (quizzes, simulations, AI mentors).\n\nAgainst it: weaker human interaction and self-discipline, connectivity and device gaps, harder fair assessment, and young children needing direct supervision.\n\nVerdict: the real question is not \"which is better\" but \"which fits which goal\". Online wins on access, flexibility and personalization; classrooms win on socialization, discipline and hands-on skills. The strongest model today is blended learning, combining both.\n\nYour turn: pick a side and I will debate you with evidence."
  },
  {
    "keys": [
      "الإحباط",
      "الشغف",
      "unmotivated",
      "passion",
      "فقدان"
    ],
    "src": "https://en.wikipedia.org/wiki/Motivation",
    "ar": "لو حاسس بالإحباط أو إن الشغف قل، ده إحساس يستحق الاهتمام، ومش دليل إنك فشلت. اختار خطوة صغيرة يمكن تنفيذها اليوم، وخد راحة مناسبة، وحاول تقلل المقارنة بالآخرين. ممكن تبدأ بعشر دقائق في مهمة واحدة بدل مطالبة نفسك بكل شيء مرة واحدة. الكلام مع شخص تثق فيه قد يساعد. لو الإحساس مستمر أو مأثر على حياتك، اطلب دعم مختص؛ والمرشد هنا يقدم دعماً تعليمياً عاماً وليس علاجاً نفسياً.",
    "en": "Feeling discouraged or less interested deserves care; it does not mean you have failed. Choose one small step for today, allow yourself rest, and try to reduce comparisons with others. Ten minutes on one task can be a gentler start than demanding everything at once. Talking to someone you trust may help. If this persists or affects daily life, seek professional support; this mentor offers general encouragement, not mental-health treatment."
  },
  {
    "keys": [
      "الخلية النباتية",
      "plant cell",
      "والحيوانية"
    ],
    "src": "https://en.wikipedia.org/wiki/Cell_(biology)",
    "ar": "الفرق في ثلاث نقاط أساسية: الخلية النباتية لها جدار خلوي صلب من السليلوز يعطي النبات شكله الثابت، وفيها بلاستيدات خضراء تُصنع الغذاء من ضوء الشمس، وفجوة كبيرة تخزن الماء. أما الخلية الحيوانية فبلا جدار (غشاء مرن فقط) وبلا بلاستيدات، لذلك تتحرك وتتبدل أشكالها بحرية أكبر. والاثنتان تتشاركان النواة والميتوكوندريا والغشاء.",
    "en": "The difference is three core things: plant cells have a rigid cellulose cell wall that gives plants their fixed shape, green chloroplasts that make food from sunlight, and a large water-storing vacuole. Animal cells have no wall (only a flexible membrane) and no chloroplasts, so they move and change shape more freely. Both share a nucleus, mitochondria and a membrane."
  },
  {
    "keys": [
      "كم عدد الخلايا",
      "how many cells",
      "37 تريليون"
    ],
    "src": "https://en.wikipedia.org/wiki/Cell_(biology)",
    "ar": "جسم الإنسان البالغ فيه نحو 37 تريليون خلية، وليست كلها بالحجم نفسه: خلايا الدم الحمراء أصغر من أن تُرى بالعين وهي الأكثر عدداً، بينما قد يمتد محور الخلية العصبية أكثر من متر. وفي كل ثانية يموت ويتجدد ملايين الخلايا دون أن تشعر.",
    "en": "An adult human body holds about 37 trillion cells, and they are not all the same size: red blood cells are microscopic and the most numerous, while a neuron axon can stretch over a meter. Every second, millions of cells die and are replaced without you noticing."
  },
  {
    "keys": [
      "الجين والكروموسوم",
      "gene and chromosome",
      "الفرق بين الجين"
    ],
    "src": "https://en.wikipedia.org/wiki/DNA",
    "ar": "الجين منطقة من DNA لها دور في إنتاج بروتين أو RNA وظيفي. والكروموسوم بنية طويلة تحمل DNA وبروتينات، ويضم جينات كثيرة ومناطق أخرى. لذلك لا يساوي الجين كروموسوماً كاملاً، ولا تعني كل صفة وجود جين واحد يحددها وحده.",
    "en": "A gene is a DNA region involved in producing a protein or functional RNA. A chromosome is a long structure of DNA and proteins containing many genes and other regions. A gene is not a whole chromosome, and a trait is not necessarily determined by just one gene."
  },
  {
    "keys": [
      "البصمة الوراثية",
      "dna fingerprint",
      "تحليل الحمض"
    ],
    "src": "https://en.wikipedia.org/wiki/DNA",
    "ar": "البصمة الوراثية هي مقارنة مقاطع متكررة من الـ DNA تختلف من شخص لآخر (إلا التوائم المتماثلة). تُؤخذ عينة من شعرة أو لعاب، تُضخَّم المقاطع المميزة، ثم تُقارن الأنماط. تُستخدم في الطب الشرعي واختبارات النسب، ودقتها تتجاوز 99.9% عند اتباع الإجراءات الصحيحة.",
    "en": "DNA fingerprinting compares repeated DNA segments that differ between people (except identical twins). A sample from hair or saliva is collected, the distinctive segments are amplified, and the patterns are compared. It is used in forensics and paternity testing, with accuracy above 99.9% when procedures are followed."
  },
  {
    "keys": [
      "الذرة فارغة",
      "empty space",
      "ذرة فارغة"
    ],
    "src": "https://en.wikipedia.org/wiki/Atom",
    "ar": "لو كانت نواة الذرة بحجم حبة عنب في وسط ملعب، لكانت الإلكترونات ذرات غبار في المدرجات؛ أي أن 99.99% من حجم الذرة فراغ. إذن لماذا لا تخترق الأشياء بعضها؟ لأن الإلكترونات تتنافر كهربائياً، وهذا التنافر هو ما يجعل الطاولة صلبة تحت يدك رغم أنها \"فارغة\" في معظمها.",
    "en": "If the nucleus were a grape in the middle of a stadium, the electrons would be dust motes in the stands; 99.99% of an atom is empty space. So why do things not pass through each other? Because electrons repel each other electrically, and that repulsion is what makes a table feel solid under your hand even though it is mostly \"empty\"."
  },
  {
    "keys": [
      "النظائر",
      "isotope",
      "نظير"
    ],
    "src": "https://en.wikipedia.org/wiki/Atom",
    "ar": "النظائر هي نسخ من العنصر نفسه لها العدد نفسه من البروتونات لكن عدداً مختلفاً من النيوترونات. الكربون-12 والكربون-14 نظيران: الأول مستقر، والثاني مشع ويتحلل ببطء، ولهذا يستخدمه العلماء لتحديد عمر الآثار العضوية حتى نحو 50 ألف سنة.",
    "en": "Isotopes are versions of the same element with the same number of protons but different numbers of neutrons. Carbon-12 and carbon-14 are isotopes: the first is stable, the second is radioactive and decays slowly, which is why scientists use it to date organic remains up to about 50,000 years."
  },
  {
    "keys": [
      "كم مرة ينبض",
      "ينبض القلب",
      "heartbeat",
      "نبض القلب"
    ],
    "src": "https://en.wikipedia.org/wiki/Heart",
    "ar": "قلبك ينبض نحو 60-100 مرة في الدقيقة أثناء الراحة، أي قرابة 100 ألف نبضة في اليوم، ونحو 3 مليارات نبضة في عمر كامل. وفي كل نبضة يضخ نحو 70 مل من الدم، فيدور دمك كله في جسمك كل دقيقة تقريباً.",
    "en": "Your heart beats about 60-100 times per minute at rest, roughly 100,000 beats a day and around 3 billion in a lifetime. Each beat pumps about 70 ml of blood, so your entire blood supply circulates through your body about once a minute."
  },
  {
    "keys": [
      "صوت دقات",
      "لماذا نسمع دقات",
      "لوب دوب",
      "lub dub"
    ],
    "src": "https://en.wikipedia.org/wiki/Heart",
    "ar": "صوت \"لَب دَب\" الذي نسمعه ليس انقباض العضلة نفسه، بل ارتطام الصمامات: الصمامان بين الأذينين والبطينين يُغلقان مع بداية الضخ (لَب)، ثم يُغلق صماما الشريانين الكبيرين عند انتهائها (دَب). الصمامات أبواب باتجاه واحد تمنع الدم من الرجوع للخلف.",
    "en": "The \"lub-dub\" you hear is not the muscle contracting but the valves snapping shut: the valves between atria and ventricles close as pumping starts (\"lub\"), then the big artery valves close as it ends (\"dub\"). Valves are one-way doors that keep blood from flowing backward."
  },
  {
    "keys": [
      "لماذا تدور الكواكب",
      "why do planets orbit",
      "لا تسقط في الشمس"
    ],
    "src": "https://en.wikipedia.org/wiki/Solar_System",
    "ar": "الكواكب تسقط نحو الشمس فعلاً، لكنها تتحرك جانبياً بسرعة كبيرة جداً فتفوتها في كل مرة؛ هذا هو المدار. جاذبية الشمس تشدها للداخل وسرعتها الجانبية تحملها للأمام، فينتج مسار شبه دائري مستمر منذ مليارات السنين بلا محرك.",
    "en": "Planets actually are falling toward the Sun, but they also move sideways so fast that they keep missing it; that is an orbit. The Sun gravity pulls them in while their sideways speed carries them past, producing a stable near-circular path that has run for billions of years with no engine."
  },
  {
    "keys": [
      "كوكب تاسع",
      "ninth planet",
      "بلوتو"
    ],
    "src": "https://en.wikipedia.org/wiki/Solar_System",
    "ar": "بلوتو كان الكوكب التاسع حتى عام 2006، ثم أعاد الاتحاد الفلكي الدولي تصنيفه \"كوكباً قزماً\" لأنه لم يُنظّف مداره من أجسام أخرى. لكن حسابات حديثة ترجّح وجود \"كوكب تاسع\" حقيقي أكبر من الأرض في أطراف المجموعة الشمسية لم يُرصد بعد؛ لغز مفتوح.",
    "en": "Pluto was the ninth planet until 2006, when the International Astronomical Union reclassified it as a dwarf planet because it has not cleared its orbit of other bodies. But recent calculations suggest a real \"Planet Nine\", larger than Earth, may lurk at the edge of the solar system; still unobserved, an open mystery."
  },
  {
    "keys": [
      "لماذا يطفو الجليد",
      "why does ice float",
      "الجليد يطفو"
    ],
    "src": "https://en.wikipedia.org/wiki/Properties_of_water",
    "ar": "معظم المواد تنكمش عند التجمد، لكن الماء يتمدد: جزيئاته تصطف في بلورات سداسية فيها فراغات، فتنخفض كثافة الجليد عن كثافة الماء السائل فيطفو. هذه الخاصية تنقذ الحياة على الأرض: الجليد يطفو على سطح البحار والبحيرات فيعزل الماء تحته وتستمر الكائنات حية في الشتاء.",
    "en": "Most substances shrink when they freeze, but water expands: its molecules lock into hexagonal crystals with gaps, making ice less dense than liquid water, so it floats. This property saves life on Earth: ice floats on seas and lakes, insulating the water below so creatures survive the winter."
  },
  {
    "keys": [
      "الماء أزرق",
      "why is water blue",
      "لون البحر"
    ],
    "src": "https://en.wikipedia.org/wiki/Properties_of_water",
    "ar": "الماء النقي أزرق فاتح جداً بشكل طبيعي، لأنه يمتص الأطوال الموجية الحمراء من الضوء أكثر من الزرقاء. في الكوب لا يُلاحظ ذلك، لكن في الأعماق الكبيرة يظهر اللون. أما اختلاف ألوان البحار (فيروزي، أخضر) فسببه إضافات: عوالق وطحالب وانعكاس قاع البحر والسماء.",
    "en": "Pure water is naturally a very faint blue because it absorbs red wavelengths of light more than blue ones. A glass is too small to notice, but great depths show the color. The varying colors of seas (turquoise, green) come from extras: sediments, algae, and reflections of the seabed and sky."
  },
  {
    "keys": [
      "الفرق بين التكرار",
      "recursion vs iteration",
      "التكرار والاستدعاء"
    ],
    "src": "https://en.wikipedia.org/wiki/Recursion_(computer_science)",
    "ar": "التكرار (loop) ينفذ الخطوة نفسها مراراً حتى شرط النهاية، مثل العد من 1 إلى 100. أما الاستدعاء الذاتي فتحل فيه الدالة نسخة أصغر من المشكلة حتى تصل لحالة تافهة، مثل المضروب: ‏n! = n × (n-1)!‎. كل مشكلة تُحل بأي منهما، لكن الاستدعاء الذاتي أوضح للمسائل المتشعبة كأشجار الملفات.",
    "en": "A loop repeats the same step until an end condition, like counting 1 to 100. Recursion has a function solve a smaller copy of the problem until it reaches a trivial case, like factorial: n! = n x (n-1)!. Any problem solvable one way is solvable the other, but recursion is clearer for branching problems like file trees."
  },
  {
    "keys": [
      "أمثلة حقيقية للاستدعاء",
      "recursion examples",
      "أين يستخدم الاستدعاء"
    ],
    "src": "https://en.wikipedia.org/wiki/Recursion_(computer_science)",
    "ar": "حولك في كل مكان: البحث في مجلدات داخل مجلدات، ضغط الملفات، خوارزمية الفرز السريع (Quicksort)، شجرة القرارات في ألعاب الشطرنج، وحتى رسم أشكال الفركتال الطبيعية كندفة الثلج والقرنبيط الروماني.",
    "en": "It is all around you: searching folders inside folders, file compression, quicksort, chess decision trees, and even drawing natural fractals like snowflakes and Romanesco broccoli."
  },
  {
    "keys": [
      "الكتلة والوزن",
      "mass and weight",
      "الفرق بين الوزن والكتلة"
    ],
    "src": "https://en.wikipedia.org/wiki/Gravity",
    "ar": "الكتلة هي كمية المادة فيك ولا تتغير أينما ذهبت، وتقاس بالكيلوغرام. أما الوزن فهو قوة جذب الكوكب لهذه الكتلة، ويتغير: وزنك على القمر سدس وزنك على الأرض، وعلى المشتري نحو ضعفيه ونصف، بينما كتلتك ثابتة في الثلاثة.",
    "en": "Mass is the amount of matter in you and never changes wherever you go; it is measured in kilograms. Weight is the pull a planet exerts on that mass, so it changes: your weight on the Moon is one sixth of Earth and on Jupiter about 2.5 times, while your mass stays the same on all three."
  },
  {
    "keys": [
      "لماذا يطفو رواد",
      "why do astronauts float",
      "انعدام الجاذبية"
    ],
    "src": "https://en.wikipedia.org/wiki/Gravity",
    "ar": "لا توجد منطقة \"بلا جاذبية\" في المحطة الفضائية؛ جاذبية الأرض هناك نحو 90% من قيمتها على السطح. رواد الفضاء يطفون لأنهم في سقوط حر مستمر: المحطة وروادها يسقطون معاً نحو الأرض بالتسارع نفسه، فيطفون بالنسبة لبعضهم.",
    "en": "There is no \"zero gravity\" at the space station; Earth gravity there is about 90% of its surface value. Astronauts float because they are in continuous free fall: the station and its crew fall toward Earth together at the same acceleration, so they float relative to each other."
  },
  {
    "keys": [
      "الشبكة العصبية والدماغ",
      "brain and neural network",
      "تشبه الدماغ"
    ],
    "src": "https://en.wikipedia.org/wiki/Artificial_neural_network",
    "ar": "التشابه مستوحى لا مطابق: الدماغ فيه نحو 86 مليار خلية عصبية تتواصل بإشارات كهربائية وكيميائية، والشبكة الاصطناعية فيها \"عصبونات\" رياضية بسيطة بأوزان عددية. الشبكة الاصطناعية تتفوق في الحساب المتكرر الهائل، لكن الدماغ أعمق بكثير: وعي ومشاعر وإبداع، وبطاقة لا تتجاوز 20 واط.",
    "en": "The resemblance is inspired, not identical: the brain has about 86 billion neurons communicating with electrical and chemical signals, while an artificial network has simple mathematical \"neurons\" with numeric weights. Artificial networks win at massive repeated calculation, but the brain is far deeper: consciousness, emotions, creativity, all on about 20 watts."
  },
  {
    "keys": [
      "كيف تتعلم الشبكة",
      "how do neural networks learn",
      "تدريب الشبكة"
    ],
    "src": "https://en.wikipedia.org/wiki/Artificial_neural_network",
    "ar": "التعلم هو تعديل الأوزان بالتدريج: تعرض الشبكة مثالاً وتخمّن، نقارن التخمين بالإجابة الصحيحة ونحسب الخطأ، ثم نعدّل الأوزان قليلاً في الاتجاه الذي يقلّله (اسمها: الانتشار الخلفي مع النزول التدرجي). بعد ملايين الأمثلة تصبح التخمينات دقيقة في الحالات الجديدة.",
    "en": "Learning is gradual weight adjustment: the network sees an example and guesses, we compare the guess to the right answer and measure the error, then nudge every weight slightly in the direction that reduces it (backpropagation with gradient descent). After millions of examples its guesses become accurate on new cases."
  },
  {
    "keys": [
      "كل البكتيريا ضارة",
      "are all bacteria",
      "بكتيريا نافعة"
    ],
    "src": "https://en.wikipedia.org/wiki/Bacteria",
    "ar": "لا، ليست كل البكتيريا ضارة. أنواع كثيرة غير ضارة أو تشارك في وظائف مثل تخمر الغذاء وتحلل المواد. وبعضها قد يسبب المرض بحسب النوع والموضع وحالة الجسم. لذلك نتجنب قاعدة تقول إن كل الميكروبات أعداء أو إن كل ميكروب موجود في الجسم مفيد دائماً.",
    "en": "No, not all bacteria are harmful. Many are harmless or contribute to food fermentation and decomposition. Others can cause disease depending on species, location and body conditions. Avoid both extremes: not all microbes are enemies, and not every microbe in the body is always beneficial."
  },
  {
    "keys": [
      "المضادات الحيوية",
      "antibiotic",
      "مقاومة المضادات"
    ],
    "src": "https://en.wikipedia.org/wiki/Bacteria",
    "ar": "تعمل المضادات الحيوية على بكتيريا معينة، ولا تعالج الفيروسات المسببة لنزلات البرد. الاستخدام غير المناسب قد يسهم في مقاومة المضادات. استخدمها فقط حسب وصف الطبيب، واتبع الجرعة والمدة الموصوفتين، ولا تشارك دواءك أو تستخدم بقايا علاج قديم.",
    "en": "Antibiotics act against particular bacteria, not the viruses causing colds. Inappropriate use can contribute to resistance. Use them only as prescribed, follow the prescribed dose and duration, and do not share them or use leftover medicine."
  },
  {
    "keys": [
      "الصوت والضوء",
      "sound and light",
      "الفرق بين الصوت والضوء"
    ],
    "src": "https://en.wikipedia.org/wiki/Wave",
    "ar": "كلاهما موجة لكن من نوعين: الصوت موجة ميكانيكية تحتاج وسطاً (هواء أو ماء أو معدن) تهتز جزيئاته، ولهذا لا ينتقل في الفضاء الفارغ. الضوء موجة كهرومغناطيسية لا تحتاج وسطاً وتسير في الفراغ بسرعة 300 ألف كم/ث. لهذا نرى البرق قبل سماع الرعد، ونرى النجوم ولا نسمعها.",
    "en": "Both are waves but of two kinds: sound is a mechanical wave that needs a medium (air, water, metal) whose molecules vibrate, so it cannot cross empty space. Light is an electromagnetic wave needing no medium, crossing vacuum at 300,000 km/s. That is why we see lightning before hearing thunder, and see stars but never hear them."
  },
  {
    "keys": [
      "لماذا السماء زرقاء",
      "why is the sky blue",
      "السماء زرقاء"
    ],
    "src": "https://en.wikipedia.org/wiki/Wave",
    "ar": "ضوء الشمس خليط من كل الألوان، وعند دخوله الغلاف الجوي تتناثر الأطوال الموجية القصيرة (الأزرق) عن جزيئات الهواء أكثر بكثير من الطويلة (الأحمر)، ويسمى ذلك تشتت رايلي، فتصلك زرقة متناثرة من كل اتجاه. وعند الغروب يعبر الضوء طبقة هواء أطول فلا يبقى منه إلا الأحمر والبرتقالي.",
    "en": "Sunlight is a mix of all colors, and when it enters the atmosphere the short wavelengths (blue) scatter off air molecules far more than the long ones (red), called Rayleigh scattering, so scattered blue reaches you from every direction. At sunset light crosses more air, leaving only red and orange."
  },
  {
    "keys": [
      "أقوى شكل",
      "strongest shape",
      "لماذا المثلث"
    ],
    "src": "https://en.wikipedia.org/wiki/Triangle",
    "ar": "المثلث هو الشكل الوحيد الذي لا يتشوه دون تغيير أطوال أضلاعه: المربع يمكن أن يميل ويصير معيناً، أما المثلث فأضلاعه الثلاثة تحبس زواياه تماماً. لهذا تراه في الجسور والأبراج وأعمدة الكهرباء والرافعات؛ المهندسون يحولون أي هيكل إلى شبكة مثلثات لجعله صلباً.",
    "en": "The triangle is the only shape that cannot deform without changing its side lengths: a square can lean into a rhombus, but a triangle three sides lock its angles completely. That is why you see it in bridges, towers, power pylons and cranes; engineers turn any structure into a mesh of triangles to make it rigid."
  },
  {
    "keys": [
      "فيثاغورس",
      "pythagoras",
      "الوتر"
    ],
    "src": "https://en.wikipedia.org/wiki/Triangle",
    "ar": "في المثلث القائم: مربع الوتر يساوي مجموع مربعي الضلعين ‏a² + b² = c²‎. أهميتها عملية قبل أن تكون نظرية: بها قاس المصريون القدماء الزوايا القائمة للأهرامات بحبل بعقد 3-4-5، وبها اليوم يعمل تحديد المواقع بالأقمار الصناعية وحساب المسافات في ألعاب الفيديو.",
    "en": "In a right triangle: the square of the hypotenuse equals the sum of the squares of the other two sides (a2 + b2 = c2). Its importance is practical before theoretical: ancient Egyptians used a 3-4-5 knotted rope to lay out right angles for the pyramids, and today GPS positioning and video-game distance math run on it."
  },
  {
    "keys": [
      "كم لتر",
      "180 لتر",
      "تنقي الدم",
      "how much blood"
    ],
    "src": "https://en.wikipedia.org/wiki/Kidney",
    "ar": "نحو 180 لتراً يومياً هو حجم تقريبي للراشح الكلوي عند بالغ سليم، وليس حجم الدم المار بالكليتين. يعاد امتصاص معظم السائل والمواد اللازمة، فيخرج مقدار أصغر بكثير كبول. تختلف الكمية بحسب الشخص والظروف والحالة الصحية، ولا نستخدم الرقم لتحديد كمية شرب مناسبة لكل الناس.",
    "en": "About 180 liters per day is an approximate healthy-adult filtrate volume, not the volume of blood passing through the kidneys. Most fluid and needed substances are reabsorbed, leaving a much smaller urine volume. Amounts vary with person, conditions and health; this number does not prescribe one drinking amount for everyone."
  },
  {
    "keys": [
      "الفشل الكلوي",
      "kidney failure",
      "غسيل الكلى",
      "dialysis"
    ],
    "src": "https://www.nhs.uk/conditions/kidney-disease/treatment/",
    "ar": "قد يؤدي ضعف الكلى إلى تراكم فضلات وسوائل واضطراب أملاح، وتختلف شدته وأسبابه. يختار فريق طبي العلاج بحسب الحالة، وقد يشمل أدوية أو غسيلاً كلوياً أو زرعاً أو رعاية داعمة. ليس شرب ماء أكثر علاجاً عاماً؛ بعض المرضى يحتاجون إلى تقليل السوائل. الأعراض أو التشخيص الشخصي يحتاجان طبيباً، لا إجابة تعليمية عامة.",
    "en": "Kidney dysfunction can cause waste and fluid buildup and electrolyte problems, with varying causes and severity. A medical team chooses care that may include medicines, dialysis, transplantation or supportive treatment. Drinking more water is not a universal treatment; some patients need fluid restriction. Symptoms and personal treatment require a clinician, not a general educational answer."
  },
  {
    "keys": [
      "لماذا الأوراق خضراء",
      "why are leaves green",
      "لون الأوراق"
    ],
    "src": "https://en.wikipedia.org/wiki/Photosynthesis",
    "ar": "لأن الكلوروفيل يمتص الضوء الأحمر والأزرق بقوة ليستخدمهما في صنع الغذاء، بينما يعكس اللون الأخضر فتراه عيناك. أي أن خضرة الورقة هي \"بقايا\" ضوء لم يحتجها النبات. وفي الخريف يتوقف إنتاج الكلوروفيل فيختفي الأخضر وتظهر ألوان كانت مخفية طوال الصيف: الأصفر والبرتقالي.",
    "en": "Because chlorophyll strongly absorbs red and blue light to make food, but reflects green light back to your eyes. So a leaf green color is literally the light the plant did not want. In autumn chlorophyll production stops, the green fades, and colors hidden all summer appear: yellow and orange."
  },
  {
    "keys": [
      "هل النبات يتنفس",
      "do plants breathe",
      "النبات ليلاً"
    ],
    "src": "https://en.wikipedia.org/wiki/Photosynthesis",
    "ar": "نعم، النبات يتنفس مثلنا طوال الوقت: يحرق جزءاً من السكر الذي صنعه للحصول على طاقة، فيستهلك أكسجين ويطلق CO2. لكنه نهاراً يقوم بالبناء الضوئي بمعدل أعلى بكثير فيكون صافي النتيجة إطلاق أكسجين. أما في الليل فلا ضوء ولا بناء ضوئي، فيصبح النبات مستهلكاً للأكسجين فقط - ولهذا لا يُنصح بكثرة النباتات في غرف النوم المغلقة.",
    "en": "Yes, plants respire like us all the time: they burn some of the sugar they made to get energy, consuming oxygen and releasing CO2. But by day photosynthesis runs much faster, so the net result is oxygen release. At night there is no light and no photosynthesis, so the plant becomes a pure oxygen consumer - one reason not to fill a closed bedroom with plants."
  },
  {
    "keys": [
      "الزهايمر",
      "alzheimer",
      "فقدان الذاكرة"
    ],
    "src": "https://en.wikipedia.org/wiki/Nervous_system",
    "ar": "ألزهايمر مرض يؤثر في الذاكرة ووظائف التفكير، لكنه ليس التفسير الوحيد للنسيان. لا يمكن تشخيصه من سؤال أو عرض واحد. قد تساعد الرعاية والعلاجات المناسبة في إدارة أعراض وحالات معينة، ويحتاج تغير الذاكرة المستمر أو المتفاقم إلى تقييم طبي.",
    "en": "Alzheimer disease affects memory and thinking, but is not the only cause of forgetfulness. It cannot be diagnosed from one question or symptom. Appropriate care and treatments can help manage particular symptoms and situations; persistent or worsening memory changes deserve clinical assessment."
  },
  {
    "keys": [
      "لماذا نشعر بالألم",
      "why do we feel pain",
      "فائدة الألم"
    ],
    "src": "https://en.wikipedia.org/wiki/Nervous_system",
    "ar": "الألم نظام إنذار لا نستطيع العيش بدونه: مستقبلات خاصة في الجلد ترسل إشارة عاجلة عبر الأعصاب إلى الحبل الشوكي والدماغ تقول \"خطر هنا\". المصابون بمرض نادر لا يشعرون فيه بالألم يتعرضون لحروق وكسور خطيرة دون أن ينتبهوا. فالألم ليس عدواً بل حارساً مزعجاً يحميك - ما لم يستمر بلا سبب، وحينها يستحق زيارة الطبيب.",
    "en": "Pain is an alarm system we cannot live without: special receptors in the skin send an urgent signal through nerves to the spinal cord and brain saying \"danger here\". People with a rare condition that removes pain suffer serious burns and fractures without noticing. So pain is not an enemy but an annoying guard protecting you - unless it persists for no reason, and then it deserves a doctor visit."
  },
  {
    "keys": [
      "لماذا نتجشأ",
      "تقلقل المعدة",
      "stomach growls",
      "لماذا تصدر المعدة"
    ],
    "src": "https://en.wikipedia.org/wiki/Human_digestive_system",
    "ar": "قد تأتي أصوات البطن من حركة الغازات والسوائل أثناء انقباضات الجهاز الهضمي، ولا تعني الجوع وحده. التجشؤ خروج هواء من المعدة عبر الفم، وهو ليس نفس صوت قرقرة البطن. إذا صاحبت الأعراض آلام شديدة أو مستمرة أو علامات مقلقة فاطلب تقييماً طبياً.",
    "en": "Bowel sounds can come from gas and fluid moving during digestive contractions, not just hunger. Burping is air leaving the stomach through the mouth, which is different from abdominal gurgling. Severe or persistent pain or other concerning symptoms need medical assessment."
  },
  {
    "keys": [
      "لماذا يستغرق الهضم",
      "how long does digestion",
      "مدة هضم الطعام"
    ],
    "src": "https://en.wikipedia.org/wiki/Human_digestive_system",
    "ar": "تستغرق رحلة الطعام الكاملة 24-72 ساعة: 2-4 ساعات في المعدة، ونحو 5 ساعات في الأمعاء الدقيقة للامتصاص، والباقي في الأمعاء الغليظة لاستعادة الماء. السرعة تختلف بحسب الأكل: الدهون أبطأ، والألياف تسرّع المرور، والماء يمر خلال دقائق. لهذا يشعرك طبق سلطة بالخفة وطبق مقليات بالثقل.",
    "en": "The full food journey takes 24-72 hours: 2-4 hours in the stomach, about 5 hours in the small intestine for absorption, and the rest in the large intestine reclaiming water. Speed varies with the meal: fats slow things down, fiber speeds passage, and water passes in minutes. That is why a salad feels light and fried food feels heavy."
  },
  {
    "keys": [
      "فصائل الدم",
      "blood type",
      "من يتبرع لمن",
      "فصيلة الدم"
    ],
    "src": "https://en.wikipedia.org/wiki/Blood",
    "ar": "في وصف نقل كريات الدم الحمراء، يستخدم أحياناً تعبير المتبرع العام لفصيلة O سالب بالنسبة إلى نظامي ABO وRhD. لكنه لا يعني أن خلاياها بلا أي مستضدات، ولا يغني عن اختبارات التوافق والاعتبارات الطبية الأخرى. نقل البلازما له قواعد مختلفة؛ لا نحدد أهلية نقل دم حقيقي من جدول مبسط.",
    "en": "For red-cell transfusion, O negative is sometimes called a universal donor in relation to ABO and RhD. That does not mean its cells lack every antigen or remove the need for compatibility testing and other clinical considerations. Plasma transfusion follows different rules; a simple chart cannot decide a real transfusion."
  },
  {
    "keys": [
      "لماذا الدم أحمر",
      "why is blood red",
      "لون الدم"
    ],
    "src": "https://en.wikipedia.org/wiki/Blood",
    "ar": "لونه من الهيموغلوبين: بروتين في الخلايا الحمراء فيه ذرات حديد تمسك الأكسجين، والحديد المرتبط بالأكسجين يعكس ضوءاً أحمر فاقعاً. الدم الغني بالأكسجين (الشرايين) أحمر فاتح، والفقير منه (الأوردة) أحمر داكن يبدو أزرق تحت الجلد بسبب طريقة عبور الضوء لبشرتك - لكنه أحمر دائماً، فلا يوجد دم أزرق.",
    "en": "The color comes from hemoglobin: a protein in red cells with iron atoms that grip oxygen, and oxygen-bound iron reflects bright red light. Oxygen-rich blood (arteries) is bright red, oxygen-poor blood (veins) is dark red and looks blue under skin because of how light crosses your skin - but it is always red; there is no blue blood."
  },
  {
    "keys": [
      "لماذا للميتوكوندريا dna",
      "mitochondrial dna",
      "أمومي",
      "وراثة الأم"
    ],
    "src": "https://en.wikipedia.org/wiki/Organelle",
    "ar": "تدعم أدلة عديدة أن الميتوكوندريا نشأت من أسلاف بكتيرية في شراكة تطورية قديمة. احتفاظها بجزء من مادتها الوراثية أحد الأدلة على هذا الأصل. في البشر تورث الميتوكوندريا عادة عبر الأم، ولذلك يفيد DNA الميتوكوندريا في دراسة سلالات أمومية؛ لا يصف وحده كل أسلاف الشخص.",
    "en": "Evidence supports mitochondria originating from bacterial ancestors in an ancient evolutionary partnership. Retaining some genetic material is one clue to this origin. In humans mitochondria are normally inherited maternally, making their DNA useful for studying maternal lineages; it does not describe all of a person ancestry."
  },
  {
    "keys": [
      "كيف يلتئم الجرح",
      "how do wounds heal",
      "التئام"
    ],
    "src": "https://en.wikipedia.org/wiki/Tissue_(biology)",
    "ar": "تتداخل في التئام الجرح عمليات وقف النزيف والالتهاب وبناء نسيج جديد وإعادة تشكيله. قد تتكون ندبة تختلف عن النسيج الأصلي، ولا تكون دائماً أقوى منه. زمن الشفاء يتغير بحسب الجرح والصحة والعناية؛ الجرح العميق أو النزيف المستمر أو علامات العدوى يحتاج إلى مساعدة طبية.",
    "en": "Wound healing involves overlapping processes of bleeding control, inflammation, tissue formation and remodeling. A scar differs from the original tissue and is not automatically stronger. Healing time depends on the wound, health and care; deep wounds, ongoing bleeding or infection signs need medical attention."
  },
  {
    "keys": [
      "لماذا يطقطق",
      "knuckles crack",
      "طقطقة الأصابع"
    ],
    "src": "https://en.wikipedia.org/wiki/Human_skeleton",
    "ar": "قد يرتبط صوت فرقعة المفاصل بتغيرات في الضغط وتكوّن تجاويف غازية في السائل الزليلي، وليس بالضرورة باحتكاك العظام. لا نستنتج من الصوت وحده إصابة أو سلامة كاملة. إذا كان معه ألم أو تورم أو حدث بعد إصابة، تجنب إجبار المفصل واطلب رأي مختص.",
    "en": "Joint cracking can involve pressure changes and gas-cavity formation in synovial fluid, not necessarily bones rubbing. Sound alone does not prove injury or complete safety. If pain, swelling or an injury is involved, do not force the joint and seek professional advice."
  },
  {
    "keys": [
      "هل ينمو العظ",
      "bone growth",
      "نمو العظام",
      "تطول",
      "زيادة الطول"
    ],
    "src": "https://en.wikipedia.org/wiki/Human_skeleton",
    "ar": "تسهم صفائح نمو غضروفية قرب أطراف العظام الطويلة في زيادة طولها أثناء النمو. تنغلق هذه الصفائح في أوقات تختلف بحسب الشخص والعظمة وعوامل هرمونية، لا بعد مدة واحدة ثابتة من البلوغ للجميع. لا يمكن تحديد طول نهائي أو تشخيص تأخر نمو من شرح عام.",
    "en": "Cartilaginous growth plates near the ends of long bones help them lengthen during development. Closure timing varies by person, bone and hormonal factors, not one fixed interval after puberty for everyone. A general explanation cannot predict final height or diagnose a growth concern."
  },
  {
    "keys": [
      "لماذا العضلات تؤلم",
      "muscle soreness",
      "وجع العضلات بعد الرياضة"
    ],
    "src": "https://en.wikipedia.org/wiki/Muscular_system",
    "ar": "قد يظهر ألم عضلي متأخر بعد مجهود غير معتاد، وتشارك فيه تغيرات مجهرية واستجابة التهابية. الألم ليس مقياساً ضرورياً لنمو العضلة ولا علامة يجب السعي إليها. الراحة المناسبة والعودة التدريجية للنشاط مهمتان، أما الألم الشديد أو التورم أو الضعف غير المعتاد فيحتاج تقييماً طبياً.",
    "en": "Delayed muscle soreness can follow unfamiliar exercise and involves microscopic changes and inflammation. Pain is not a required measure of muscle growth or something to chase. Appropriate recovery and a gradual return matter; severe pain, swelling or unusual weakness needs clinical assessment."
  },
  {
    "keys": [
      "ما أقوى عضلة في الجسم",
      "strongest muscle",
      "أقوى عضلة"
    ],
    "src": "https://en.wikipedia.org/wiki/Muscular_system",
    "ar": "لا توجد عضلة واحدة تفوز بكل معاني القوة. تختلف المقارنة إذا قسنا القوة المطلقة أو القوة بالنسبة للحجم أو الشغل المستمر. القلب يؤدي عملاً ضخماً في ضخ الدم، وعضلات الفك تولد قوى كبيرة للعض، لكن عبارة \"الأقوى دائماً\" تعتمد على تعريف السؤال.",
    "en": "No single muscle wins every definition of strength. The comparison changes with absolute force, force relative to size or sustained work. The heart performs substantial pumping work and jaw muscles generate strong bite forces, but strongest depends on how the question is defined."
  },
  {
    "keys": [
      "ضيق التنفس",
      "shortness of breath",
      "الربو",
      "asthma"
    ],
    "src": "https://www.nhs.uk/symptoms/shortness-of-breath/",
    "ar": "ضيق التنفس له أسباب مختلفة، ولا يمكن افتراض أنه ربو من السؤال وحده. إذا كانت صعوبة التنفس شديدة أو مفاجئة، أو تعجز عن الكلام، أو يوجد ازرقاق أو إغماء أو ألم صدر شديد، اطلب خدمات الطوارئ المحلية فوراً وأخبر شخصاً بالغاً قريباً. حتى لو كان أخف لكنه جديد أو متكرر، اطلب تقييماً طبياً بدلاً من التشخيص الذاتي. سلامتك أهم من متابعة الدرس.",
    "en": "Shortness of breath has several possible causes; this question alone cannot establish asthma. Severe or sudden breathing difficulty, inability to speak, blue lips, fainting or severe chest pain requires local emergency help immediately; tell a nearby trusted adult. New or recurring milder symptoms also need medical assessment rather than self-diagnosis. Your safety matters more than continuing the lesson.",
    "urgent": true
  },
  {
    "keys": [
      "كم أكسجين نستهلك",
      "how much oxygen",
      "استهلاك الأكسجين"
    ],
    "src": "https://en.wikipedia.org/wiki/Respiratory_system",
    "ar": "تستهلك الخلايا الأكسجين في تفاعلات تساعد على إنتاج ATP، ويتغير الاستهلاك مع النشاط والعمر وحالة الجسم. لا يوجد عدد لترات يومي واحد يناسب الجميع. فقدان التنفس أو عدم الاستجابة حالة طارئة؛ اطلب خدمات الطوارئ المحلية واتبع إرشادات المجيب فوراً.",
    "en": "Cells use oxygen in reactions that help produce ATP, and consumption varies with activity, age and condition. There is no single daily volume for everyone. Absent breathing or unresponsiveness is an emergency; contact local emergency services and follow dispatcher instructions immediately."
  },
  {
    "keys": [
      "هل اللقاحات آمنة",
      "are vaccines safe",
      "أضرار اللقاح"
    ],
    "src": "https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-vaccine-safety",
    "ar": "تخضع اللقاحات لاختبارات ومراقبة مستمرة للسلامة. قد تسبب آثاراً جانبية مثل ألم موضع الحقن أو حرارة خفيفة، وتوجد آثار خطيرة ممكنة لكنها نادرة جداً. تختلف المخاطر والموانع بحسب اللقاح والشخص، فلا يوجد رقم واحد لكل اللقاحات. اسأل مقدم الرعاية عن جدولك وحالتك، واطلب المساعدة عند تفاعل غير متوقع أو شديد.",
    "en": "Vaccines undergo safety testing and ongoing monitoring. Side effects can include injection-site soreness or mild fever; serious side effects are possible but very rare. Risks and contraindications differ by vaccine and person, so there is no one rate for all vaccines. Ask a healthcare professional about your schedule and situation, and seek help for an unexpected or severe reaction."
  },
  {
    "keys": [
      "لماذا نصاب بالبرد",
      "why do we catch colds",
      "البرد والإنفلونزا"
    ],
    "src": "https://en.wikipedia.org/wiki/Immune_system",
    "ar": "الزكام والإنفلونزا فيروسات تتسلل عبر الأنف والحلق، ولا يقتلها أي مضاد حيوي لأنها ليست بكتيريا. أعراضك (حرارة، سيلان، كحة) ليست من الفيروس نفسه بل من هجوم مناعتك عليه. ولماذا نمرض أكثر في الشتاء؟ ليس البرد نفسه بل اجتماع الناس في أماكن مغلقة وجفاف الهواء الذي يساعد الفيروس على الطيران أبعد. النوم والتهوية وغسل اليدين أقوى وقاية حقيقية.",
    "en": "Colds and flu are viruses sneaking in through the nose and throat, and no antibiotic kills them because they are not bacteria. Your symptoms (fever, runny nose, cough) come not from the virus itself but from your immune attack on it. And why do we get sick more in winter? Not the cold itself, but people crowding indoors and dry air that helps the virus fly farther. Sleep, ventilation and hand-washing are the strongest real protection."
  },
  {
    "keys": [
      "لماذا أشبه أبي",
      "لماذا أشبه أمي",
      "why do i look like my parents",
      "أشبه والدي"
    ],
    "src": "https://en.wikipedia.org/wiki/Heredity",
    "ar": "ترث نسخاً جينية من الوالدين، وتتفاعل هذه النسخ مع بعضها ومع البيئة أثناء النمو. بعض الأنماط البسيطة يوصف بالسيادة والتنحي، بينما صفات كثيرة مثل ملامح الوجه تشارك فيها عوامل متعددة. التشابه مع أحد الوالدين لا يعني أن الصفة جاءت من جين واحد فقط.",
    "en": "You inherit gene copies from your parents, and their effects interact with one another and with the environment. Some simple patterns involve dominance and recessiveness, while many traits such as facial features involve multiple factors. Resembling a parent does not imply that one gene alone caused the trait."
  },
  {
    "keys": [
      "لماذا يختلف الإخوة",
      "why do siblings look different",
      "أخي لا يشبهني"
    ],
    "src": "https://en.wikipedia.org/wiki/Heredity",
    "ar": "عادة يرث الإخوة توليفات مختلفة من النسخ الجينية بسبب إعادة التركيب والتوزيع أثناء تكوين الخلايا الجنسية. يشترك الإخوة الأشقاء في المتوسط في نحو نصف التباينات الجينية الموروثة القابلة للمقارنة، وليس معنى ذلك أن نصف جيناتهم فقط متشابه. معظم DNA البشر متشابه أصلاً، وتؤثر البيئة والنمو أيضاً في الاختلافات.",
    "en": "Siblings usually inherit different allele combinations through recombination and assortment during gamete formation. Full siblings share about half their inherited variable genetic material on average; this does not mean that only half their genes are alike. Most human DNA is already shared, and environment and development also affect differences."
  },
  {
    "keys": [
      "هل الإنسان جاء من القرد",
      "did humans come from monkeys",
      "الإنسان والقردة"
    ],
    "src": "https://en.wikipedia.org/wiki/Evolution",
    "ar": "لا، العلم لا يقول ذلك. الإنسان والقردة الحالية أقارب اشتركوا في سلف قديم عاش قبل ملايين السنين، ثم تفرع كل خط في اتجاه - مثل أبناء العمومة، لا مثل الأب والابن. القردة الحالية ليست أجدادنا ولم \"تتوقف عن التطور\"؛ هي خط ناجح في بيئته كما نحن خط ناجح في بيئتنا.",
    "en": "No, science does not say that. Humans and today apes are relatives who shared an ancient common ancestor millions of years ago, then each line branched its own way - like cousins, not like parent and child. Modern apes are not our ancestors and did not \"stop evolving\"; they are a successful line in their environment, just as we are in ours."
  },
  {
    "keys": [
      "لماذا رقبة الزرافة طويلة",
      "why do giraffes have long necks",
      "رقبة الزرافة"
    ],
    "src": "https://en.wikipedia.org/wiki/Evolution",
    "ar": "تطورت أعناق الزرافات عبر أجيال من الاختلاف الموروث والانتقاء وعوامل أخرى. الوصول إلى الغذاء والمنافسة على التكاثر من التفسيرات التي يدرسها العلماء، ولا نختزل التاريخ كله في قصة واحدة مؤكدة. المهم أن الفرد لا يورث عنقاً أطول لمجرد أنه مده خلال حياته.",
    "en": "Giraffe necks evolved through generations of heritable variation, selection and other factors. Feeding access and reproductive competition are explanations researchers study, not a single fully settled story. An individual does not pass on a longer neck simply because it stretched during its lifetime."
  },
  {
    "keys": [
      "ماذا لو انقرض النحل",
      "what if bees went extinct",
      "انقراض النحل"
    ],
    "src": "https://en.wikipedia.org/wiki/Ecology",
    "ar": "تساعد النحل وأنواع أخرى من الملقحات على تكاثر نباتات كثيرة وإنتاج محاصيل مهمة. فقدها قد يقلل إنتاج بعض المحاصيل ويغير شبكات بيئية، لكنه لا يعني اختفاء كل طعام البشر؛ نباتات مثل القمح تعتمد على الرياح. تختلف درجة الاعتماد على التلقيح الحيواني من محصول لآخر.",
    "en": "Bees and other pollinators help many plants reproduce and support important crops. Their loss can reduce some yields and alter ecological networks, but would not remove all human food; plants such as wheat rely on wind. Dependence on animal pollination differs by crop."
  },
  {
    "keys": [
      "ما السلسلة الغذائية",
      "what is a food chain",
      "سلسلة الغذاء"
    ],
    "src": "https://en.wikipedia.org/wiki/Ecology",
    "ar": "السلسلة الغذائية هي طريق الطاقة في الطبيعة: تبدأ بالشمس، يلتقطها النبات ويصنع غذاء، يأكله العاشب، يأكل المفترسُ العاشبَ، وحين يموت أي منهم تعيد المحللات كالبكتيريا والفطريات عناصره إلى التربة لتغذي نباتاً جديداً. في الحقيقة هي شبكة متشابكة لا سلسلة واحدة، وكل حلقة فيها تحمل وزن الباقي.",
    "en": "A food chain is the path of energy through nature: it starts with the sun, plants capture it and make food, herbivores eat the plants, predators eat the herbivores, and when anything dies, decomposers like bacteria and fungi return its elements to the soil to feed new plants. In reality it is a tangled web, not a single chain, and every link carries the weight of the rest."
  },
  {
    "keys": [
      "لماذا نمضغ الطعام جيداً",
      "why chew food well",
      "أهمية المضغ"
    ],
    "src": "https://en.wikipedia.org/wiki/Enzyme",
    "ar": "لأن الهضم يبدأ في الفم: المضغ يطحن الطعام لقطع صغيرة بسطح أكبر، ولعابك يحمل إنزيم الأميلاز الذي يبدأ تفتيت النشا إلى سكريات قبل البلع أصلاً. من يبتلع بسرعة يرسل لأمعائه كتلاً كبيرة يعمل عليها الجسم أطول، فيشعر بالثقل. القاعدة القديمة صحيحة علمياً: امضغ جيداً، تريح معدتك.",
    "en": "Because digestion starts in the mouth: chewing grinds food into small pieces with more surface area, and your saliva carries the enzyme amylase that starts chopping starch into sugars before you even swallow. Fast swallowers send large chunks that the body works on longer, so they feel heavy. The old rule is scientifically right: chew well and spare your stomach."
  },
  {
    "keys": [
      "ما الإنزيم",
      "what are enzymes",
      "ما هي الإنزيمات"
    ],
    "src": "https://en.wikipedia.org/wiki/Enzyme",
    "ar": "الإنزيم عامل حفاز حيوي يخفض حاجز طاقة التنشيط ويسرع تفاعلاً دون استهلاكه في المحصلة. معظم الإنزيمات بروتينات، وتوجد أيضاً جزيئات RNA حفازة. شكل الموقع النشط وظروف الوسط يؤثران في نشاطه، وتشبيه القفل والمفتاح مفيد لكنه ليس وصفاً حرفياً جامداً لكل إنزيم.",
    "en": "An enzyme is a biological catalyst that lowers an activation barrier and speeds a reaction without being consumed overall. Most are proteins, while some RNA molecules are also catalytic. Active-site structure and conditions affect activity; the lock-and-key analogy is useful but not a rigid literal description of every enzyme."
  },
  {
    "keys": [
      "الفرق بين الفيروس والبكتيريا",
      "difference between virus and bacteria",
      "فيروس أم بكتيريا"
    ],
    "src": "https://en.wikipedia.org/wiki/Virus",
    "ar": "البكتيريا كائنات حية كاملة: خلايا تأكل وتتكاثر وحدها، وبعضها نافع كبكتيريا الزبادي، ويقتل الضار منها المضادُ الحيوي. الفيروس ليس خلية بل شريط مادة وراثية في غلاف، لا يتكاثر إلا بخطف خلية، ولا يؤثر فيه المضاد الحيوي إطلاقاً. لهذا يصف الطبيب مضاداً لعدوى بكتيرية ولا يصفه للزكام الفيروسي.",
    "en": "Bacteria are complete living things: cells that eat and multiply on their own; some are helpful like yogurt bacteria, and antibiotics kill the harmful ones. A virus is not a cell but a strip of genetic material in a shell; it multiplies only by hijacking a cell, and antibiotics do nothing to it. That is why a doctor prescribes an antibiotic for a bacterial infection but never for a viral cold."
  },
  {
    "keys": [
      "هل الفيروس كائن حي",
      "are viruses alive",
      "هل الفيروسات حية"
    ],
    "src": "https://en.wikipedia.org/wiki/Virus",
    "ar": "الفيروسات تحمل مادة وراثية وتتطور، لكنها لا تتكاثر بصورة مستقلة عن خلايا مضيفة. لذلك يختلف تصنيفها ككائنات حية بحسب تعريف الحياة المستخدم. المهم أن نعرف خصائصها وحدودها بدلاً من تقديم سؤال التعريف كحقيقة محسومة عند الجميع.",
    "en": "Viruses carry genetic material and evolve, but cannot reproduce independently of host cells. Whether they count as living depends on the definition of life. Understanding these properties is more useful than treating a definition debate as settled for everyone."
  },
  {
    "keys": [
      "هل نستخدم 10% من الدماغ",
      "do we use 10 percent of our brain",
      "عشرة بالمئة من العقل"
    ],
    "src": "https://en.wikipedia.org/wiki/Brain",
    "ar": "خرافة مشهورة وغير صحيحة. تصوير الدماغ الحديث يظهر أن كل مناطقه تعمل، حتى أثناء النوم؛ فالدماغ يستهلك 20% من طاقتك ولا يعقل أن يدفع الجسم هذا الثمن لعضو معطل 90% منه. ولو أصيبت منطقة صغيرة بجلطة لفقد الإنسان وظيفة كاملة كالكلام أو الرؤية. الحقيقة الأجمل: نستخدم الدماغ كله، والتدريب يجعله أقوى.",
    "en": "A famous myth that is not true. Modern brain imaging shows every region works, even during sleep; the brain consumes 20% of your energy and it makes no sense for the body to pay that price for an organ that is 90% idle. And if a small area is hit by a stroke, the person loses a whole function like speech or sight. The nicer truth: we use all of the brain, and training makes it stronger."
  },
  {
    "keys": [
      "لماذا نحلم",
      "why do we dream",
      "ما الأحلام"
    ],
    "src": "https://en.wikipedia.org/wiki/Brain",
    "ar": "لا يوجد جواب نهائي بعد، لكن الأبحاث تشير إلى أن الدماغ في النوم يرتب يومه: ينقل المهم إلى الذاكرة طويلة المدى، ويتخلص من الزائد، ويعيد تشغيل المواقف بمشاهد مشوهة. الأحلام تحدث غالباً في نوم حركة العين السريعة حين يكون الدماغ نشطاً كأنه مستيقظ. هي باختصار \"الوردية الليلية\" لصيانة عقلك.",
    "en": "There is no final answer yet, but research suggests the sleeping brain is tidying its day: moving what matters into long-term memory, clearing out the extra, and replaying situations in distorted scenes. Dreams happen mostly in REM sleep, when the brain is as active as if awake. They are, in short, the night shift of your mind maintenance crew."
  },
  {
    "keys": [
      "خداع بصري",
      "optical illusion",
      "لماذا نرى أوهاماً"
    ],
    "src": "https://en.wikipedia.org/wiki/Sense",
    "ar": "لأن عينك لا ترسل صورة جاهزة، بل دماغك هو من يبني الصورة من إشارات، وهو يحزر بقواعد اختصرها من تجربته: الظل يعني عمقاً، والخطوط المتقاربة تعني بعداً. الخدعة البصرية مصممة لتستغل هذه الحزرات فيستنتج الدماغ الشيء الخطأ. الوهم ليس ضعفاً بل دليل أن دماغك مفسر سريع يعمل طوال الوقت.",
    "en": "Because your eye does not send a ready-made picture; your brain builds the image from signals, guessing with rules it learned from experience: shadow means depth, converging lines mean distance. An optical illusion is designed to exploit those guesses so the brain concludes the wrong thing. Illusions are not a weakness but proof that your brain is a fast interpreter working all the time."
  },
  {
    "keys": [
      "كم حاسة للإنسان",
      "how many senses",
      "عدد الحواس"
    ],
    "src": "https://en.wikipedia.org/wiki/Sense",
    "ar": "أكثر من خمس! بالإضافة إلى البصر والسمع والشم والذوق واللمس، لديك حس التوازن من الأذن الداخلية (به تشعر بالدوار)، وحس موضع الجسم الذي يجعلك تلمس أنفك وأنت مغمض، وحساس الحرارة والبرودة، وحس الألم. بعض العلماء يعدون أكثر من عشرين حاسة فرعية. الحواس الخمس مجرد القائمة التي ورثناها من أرسطو.",
    "en": "More than five! Beyond sight, hearing, smell, taste and touch, you have balance from the inner ear (which makes you feel dizzy), body-position sense that lets you touch your nose with closed eyes, heat and cold senses, and pain. Some scientists count over twenty sub-senses. The five are just the list we inherited from Aristotle."
  },
  {
    "keys": [
      "ما الهرمونات",
      "what are hormones",
      "ما هي الهرمونات"
    ],
    "src": "https://en.wikipedia.org/wiki/Endocrine_system",
    "ar": "الهرمونات رسائل كيميائية تفرزها الغدد الصماء في الدم فتصل كل الجسم: الإنسولين يقول للخلايا \"خذوا السكر\"، والأدرينالين يقول \"استعدوا للخطر\"، والميلاتونين يقول \"حان وقت النوم\". هي أبطأ من الإشارات العصبية لكن أثرها أطول، ولذلك تضبط العمليات الكبيرة: النمو، المزاج، النوم، الجوع، والبلوغ.",
    "en": "Hormones are chemical messages the endocrine glands release into the blood to reach the whole body: insulin tells cells \"take up sugar\", adrenaline says \"get ready for danger\", and melatonin says \"time to sleep\". They are slower than nerve signals but longer lasting, so they run the big processes: growth, mood, sleep, hunger and puberty."
  },
  {
    "keys": [
      "لماذا نطول في المراهقة",
      "why do teens grow fast",
      "طفرة النمو"
    ],
    "src": "https://en.wikipedia.org/wiki/Endocrine_system",
    "ar": "لأن الغدة النخامية في المراهقة تطلق موجات قوية من هرمون النمو، وتنضم إليه هرمونات البلوغ، فتنشط صفائح النمو عند أطراف العظام الطويلة وتضيف طبقات جديدة بسرعة قد تصل إلى 9 سم في السنة. لذلك يحتاج المراهق نوماً أكثر (الهرمون يفرز غالباً في النوم العميق) وأكلاً أكثر لبناء كل هذا العظم والعضل.",
    "en": "Because the pituitary gland in the teen years releases strong waves of growth hormone, joined by puberty hormones, so the growth plates at the ends of long bones switch on and add new layers fast - up to 9 cm a year. That is why teens need more sleep (the hormone is released mostly in deep sleep) and more food to build all that bone and muscle."
  },
  {
    "keys": [
      "كيف يصنع النحل العسل",
      "how do bees make honey",
      "صناعة العسل"
    ],
    "src": "https://en.wikipedia.org/wiki/Pollination",
    "ar": "تجمع النحلة الرحيق من مئات الأزهار وتخزنه في معدة عسلية خاصة تبدأ إنزيماتها تحويل السكريات. في الخلية تمرره النحلات من فم لفم لتتركز، ثم تفرغه في أقراص شمعية وتروّح عليه بأجنحتها حتى يتبخر الماء ويثقل، فتختمه بالشمع. عسلك المعلب هو رحيق أزهار عولج بالإنزيمات وجفف بأجنحة آلاف النحلات.",
    "en": "A bee gathers nectar from hundreds of flowers and stores it in a special honey stomach whose enzymes start converting the sugars. Back in the hive, bees pass it mouth to mouth to concentrate it, then empty it into wax combs and fan it with their wings until the water evaporates and it thickens, then seal it with wax. Your jar of honey is flower nectar processed by enzymes and dried by the wings of thousands of bees."
  },
  {
    "keys": [
      "لماذا الزهور ملونة",
      "why are flowers colorful",
      "ألوان الزهور"
    ],
    "src": "https://en.wikipedia.org/wiki/Pollination",
    "ar": "قد ترتبط ألوان الأزهار وروائحها بجذب ملقحات تستجيب لإشارات مختلفة. لا توجد قاعدة لون واحدة لكل نحلة أو فراشة، ولا نقول إن النبات يصمم إعلاناً بوعي. يساعد الانتقاء عبر الأجيال على تفسير وجود إشارات تعزز فرص التلقيح في بيئة معينة.",
    "en": "Flower colors and scents can attract pollinators responding to different cues. There is no single color rule for every bee or butterfly, and plants do not consciously design advertisements. Selection over generations helps explain signals that improve pollination opportunities in a particular environment."
  },
  {
    "keys": [
      "لماذا نتعرق",
      "why do we sweat",
      "فائدة العرق"
    ],
    "src": "https://en.wikipedia.org/wiki/Skin",
    "ar": "التعرق نظام التكييف في جسمك: حين ترتفع حرارتك تفرز الغدد العرقية سائلاً على الجلد، وحين يتبخر يأخذ الحرارة معه فيبردك - نفس فكرة تبريد القِرب الفخارية للماء. لهذا العرق أنفع في الجو الجاف من الرطب، لأن الرطوبة العالية تعيق التبخر. وخوفك أو توترك يعرقك أيضاً لأن الجسم يستعد لمجهود.",
    "en": "Sweating is your body air conditioning: when your temperature rises, sweat glands release fluid on the skin, and as it evaporates it carries heat away and cools you - the same idea as clay pots cooling water. That is why sweat works better in dry than humid air, because high humidity blocks evaporation. Fear and stress make you sweat too, because the body is preparing for effort."
  },
  {
    "keys": [
      "لماذا يتجعد الجلد في الماء",
      "why does skin wrinkle in water",
      "تجعد الأصابع"
    ],
    "src": "https://en.wikipedia.org/wiki/Skin",
    "ar": "تجعد أصابع اليد في الماء يرتبط باستجابة عصبية وتغير في الأوعية تحت الجلد، وليس مجرد انتفاخ الجلد بالماء. توجد فرضيات عن فائدة التجاعيد في التعامل مع أشياء مبتلة، لكن لا نعرض كل تفسير وظيفي كحقيقة محسومة. هذا مثال على الفرق بين ملاحظة ظاهرة واختبار تفسيرها.",
    "en": "Water-induced finger wrinkling involves a nerve response and changes in vessels beneath the skin, not just skin swelling with water. Improved wet grip has been proposed as a benefit, but not every functional explanation is settled. This shows the difference between observing a phenomenon and testing its explanation."
  },
  {
    "keys": [
      "لماذا ينبض القلب",
      "why does the heart beat"
    ],
    "src": "https://en.wikipedia.org/wiki/Circulatory_system",
    "ar": "النبض هو صوت واهتزاز عملية الضخ نفسها: القلب عضلة تنقبض بإشارة كهربائية تنطلق من منظم خطى طبيعي فيها، فتدفع الدم في الشرايين في موجات - وأنت تقيس النبض في معصمك فأنت تحس بتلك الموجات. معدل طبيعي للمراهق 60-100 نبضة بالراحة، ويزيد بالرياضة لأن عضلاتك تطلب أكسجيناً أكثر فيضخ القلب أسرع.",
    "en": "The pulse is the feel of pumping itself: the heart is a muscle contracting on an electrical signal from its natural pacemaker, pushing blood through arteries in waves - when you measure your pulse at the wrist you are feeling those waves. A normal teen rate is 60-100 beats at rest, rising with exercise because your muscles order more oxygen so the heart pumps faster."
  },
  {
    "keys": [
      "كم يضخ القلب",
      "how much blood does the heart pump",
      "كمية الدم التي يضخها"
    ],
    "src": "https://en.wikipedia.org/wiki/Circulatory_system",
    "ar": "يتغير حجم الدم الذي يضخه القلب بحسب حجم الجسم والنشاط والحالة الصحية. يمكن أن يضخ قلب بالغ في الراحة عدة لترات في الدقيقة، ويزداد الضخ مع حاجة الأنسجة. الأرقام اليومية الكبيرة تقديرات تعتمد على المعدل المفترض، وليست كمية واحدة ثابتة لكل إنسان.",
    "en": "Cardiac output varies with body size, activity and health. An adult heart at rest can pump several liters per minute, increasing output with tissue demand. Large daily totals are estimates based on an assumed rate, not one fixed amount for every person."
  },
  {
    "keys": [
      "بكتيريا الأمعاء",
      "gut bacteria"
    ],
    "src": "https://en.wikipedia.org/wiki/Microbiota",
    "ar": "تسهم بعض ميكروبات الأمعاء في تفكيك مكونات غذائية وإنتاج مركبات تتفاعل مع الجسم. تأثيرها على الصحة يختلف حسب المجتمع الميكروبي والغذاء وعوامل أخرى. لا يصح افتراض أنها توفر وحدها كل الفيتامينات التي نحتاجها، أو اختيار مكمل أو مضاد حيوي بناء على وصف عام للميكروبيوم.",
    "en": "Some gut microbes break down food components and make compounds that interact with the body. Effects on health depend on the community, diet and other factors. We should not assume they alone supply every needed vitamin or choose supplements or antibiotics from a general description of the microbiome."
  },
  {
    "keys": [
      "هل كل البكتيريا ضارة",
      "are all bacteria bad",
      "هل البكتيريا مفيدة"
    ],
    "src": "https://en.wikipedia.org/wiki/Microbiota",
    "ar": "لا، ليست كل البكتيريا ضارة. أنواع كثيرة غير ضارة أو تشارك في وظائف مثل تخمر الغذاء وتحلل المواد. وبعضها قد يسبب المرض بحسب النوع والموضع وحالة الجسم. لذلك نتجنب قاعدة تقول إن كل الميكروبات أعداء أو إن كل ميكروب موجود في الجسم مفيد دائماً.",
    "en": "No, not all bacteria are harmful. Many are harmless or contribute to food fermentation and decomposition. Others can cause disease depending on species, location and body conditions. Avoid both extremes: not all microbes are enemies, and not every microbe in the body is always beneficial."
  },
  {
    "keys": [
      "الفرق بين الفطر والنبات",
      "difference between fungi and plants",
      "هل الفطر نبات"
    ],
    "src": "https://en.wikipedia.org/wiki/Fungus",
    "ar": "لا، الفطر أقرب إليك منه إلى النبات! النبات يصنع غذاءه من الضوء بالكلوروفيل الأخضر، أما الفطر فلا كلوروفيل فيه ولا يعرف الضوء: يفرز إنزيمات تهضم ما حوله ثم يمتص الخلاصة. وجدار خلاياه من الكيتين - مادة صدف الجمبري - لا من السليلوز النباتي. جينياً، الفطر والحيوان في فرع واحد من شجرة الحياة.",
    "en": "No, a fungus is closer to you than to a plant! A plant makes its food from light with green chlorophyll, while a fungus has no chlorophyll and does not know light: it secretes enzymes that digest its surroundings and absorbs the broth. Its cell walls are chitin - the stuff of shrimp shells - not plant cellulose. Genetically, fungi and animals sit on the same branch of the tree of life."
  },
  {
    "keys": [
      "أكبر كائن حي",
      "largest organism",
      "أكبر كائن على الأرض"
    ],
    "src": "https://en.wikipedia.org/wiki/Fungus",
    "ar": "يعتمد الجواب على معنى الأكبر: الكتلة أم المساحة أم طول كائن واحد أو مستعمرة. توجد فطريات تمتد خيوطها على مساحات واسعة جداً، كما توجد أشجار وحيوانات ومستعمرات ضخمة. لذلك من الأدق تحديد معيار القياس بدلاً من إعلان فائز واحد في كل المقارنات.",
    "en": "The answer depends on whether largest means mass, area, length or a single individual versus a colony. Some fungi spread thread networks over very large areas, and trees, animals and colonies can also be enormous. Define the measurement instead of declaring one winner for every comparison."
  },
  {
    "keys": [
      "كيف يصعد الماء للشجرة",
      "how does water climb trees",
      "صعود الماء في النبات"
    ],
    "src": "https://en.wikipedia.org/wiki/Plant",
    "ar": "بلا مضخة: أوراق الشجرة تتبخر منها قطرات الماء عبر الثغور، فتسحب كل قطرةٌ راحلةٌ القطرةَ التي خلفها - سلسلة جزيئات ماء متماسكة تمتد من الورقة إلى الجذر في أوعية الخشب كحبل لا ينقطع. بهذه الآلية تصعد أشجار السكويا الماء 100 متر، بقوة شمسية مجانية ولا محرك.",
    "en": "With no pump: leaves evaporate water through stomata, and each departing droplet pulls the one behind it - a cohesive chain of water molecules running from leaf to root in the xylem like an unbroken rope. This is how sequoias lift water 100 meters, on free solar power and no engine."
  },
  {
    "keys": [
      "هل النبات يأكل التراب",
      "do plants eat soil",
      "من أين يأتي وزن الشجرة"
    ],
    "src": "https://en.wikipedia.org/wiki/Plant",
    "ar": "تأتي ذرات كربون كثيرة في مادة النبات من ثاني أكسيد الكربون الذي يثبته بالبناء الضوئي. تمتص الجذور الماء والأملاح من الوسط، ولا يعني ذلك أن التراب يتحول مباشرة إلى خشب. يعتمد نمو النبات على مواد وطاقة وظروف متعددة، لا على عنصر واحد فقط.",
    "en": "Much plant carbon comes from carbon dioxide fixed in photosynthesis. Roots absorb water and minerals, but soil does not simply turn directly into wood. Plant growth depends on multiple materials, energy and conditions, not one ingredient alone."
  },
  {
    "keys": [
      "لغة الجينات",
      "genetic code",
      "ما الشفرة الوراثية"
    ],
    "src": "https://en.wikipedia.org/wiki/Protein_biosynthesis",
    "ar": "في ترجمة البروتين يقرأ الريبوسوم كودونات mRNA، وكل منها ثلاثة أحرف. تحدد كودونات أحماضاً أمينية، بينما تعطي أخرى إشارة توقف. توجد 64 توليفة ممكنة من أربعة أحرف في مجموعات ثلاثية. الشفرة متشابهة جداً بين الكائنات مع وجود استثناءات، وليست كل توليفة اسماً لحمض أميني مختلف.",
    "en": "During protein translation a ribosome reads three-letter mRNA codons. Some specify amino acids and others signal a stop. Four letters in groups of three give 64 possible combinations. The code is very similar across organisms with exceptions, and not every codon names a different amino acid."
  },
  {
    "keys": [
      "كيف يصنع الجسم البروتين",
      "how does the body make protein",
      "بناء البروتين"
    ],
    "src": "https://en.wikipedia.org/wiki/Protein_biosynthesis",
    "ar": "في خلية بشرية ذات نواة، ينسخ الجين إلى RNA وتجهز رسالة mRNA لتقرأها الريبوسومات. تساعد جزيئات tRNA على إحضار الأحماض الأمينية المناسبة، ثم تطوى السلسلة وقد تحتاج معالجة إضافية. بعض الكودونات إشارات توقف، وليست كلها أوامر لإضافة حمض أميني.",
    "en": "In a nucleated human cell, a gene is transcribed into RNA and an mRNA message is prepared for ribosomes to read. tRNA helps deliver appropriate amino acids, and the resulting chain folds and may need further processing. Some codons are stop signals rather than instructions to add an amino acid."
  },
  {
    "keys": [
      "ما الدوبامين",
      "what is dopamine",
      "هرمون السعادة"
    ],
    "src": "https://en.wikipedia.org/wiki/Neuron",
    "ar": "الدوبامين ليس \"هرمون سعادة\" كما يشاع بل ناقل عصبي للدافع والتوقع: يفرزه دماغك حين تتوقع مكافأة قريبة فيدفعك للسعي إليها. وسائل التواصل صُممت لتستغله: كل إشعار وشريط جديد يعطي جرعة توقّع صغيرة فتبقى تمرر. فهمك لهذه الآلية أول خطوة لتملك انتباهك بدل أن يملكه التطبيق.",
    "en": "Dopamine is not a \"happiness hormone\" as rumored but a neurotransmitter of drive and anticipation: your brain releases it when you expect a reward soon, pushing you to seek it. Social media is designed to exploit it: every notification and fresh feed gives a small dose of anticipation so you keep scrolling. Understanding this machinery is the first step to owning your attention instead of the app owning it."
  },
  {
    "keys": [
      "لماذا الميالين مهم",
      "what is myelin",
      "غلاف الميالين"
    ],
    "src": "https://en.wikipedia.org/wiki/Neuron",
    "ar": "الميالين غلاف عازل حول أجزاء من محاور عصبية معينة يساعد على تسريع انتقال الإشارة. يتيح انتقالها بين العقد بدلاً من تنشيط كل نقطة بالطريقة نفسها. ليست كل الخلايا العصبية مغمدة بالميالين، ولا نستطيع حساب أثر تدريب واحد على الميالين من شعورنا وحده.",
    "en": "Myelin insulates segments of certain axons and helps speed signal transmission between nodes. Not every neuron is myelinated, and a person cannot measure a training session effect on myelin from how it feels. It is one part of the nervous system, not a complete explanation for learning."
  },
  {
    "keys": [
      "هل السهر مضر",
      "is staying up late harmful",
      "أضرار السهر"
    ],
    "src": "https://en.wikipedia.org/wiki/Sleep",
    "ar": "النوم الكافي المنتظم مهم للانتباه والمزاج والتعلم. يحتاج المراهقون عادة وقت نوم أطول من البالغين، وقد يتأخر توقيت نومهم طبيعياً. لا يعني السهر في ليلة واحدة مرضاً، لكن نقص النوم المتكرر أو صعوبة النوم المستمرة يستحقان الاهتمام والمساعدة المناسبة دون لوم نفسك.",
    "en": "Enough regular sleep matters for attention, mood and learning. Teens typically need more sleep than adults and can naturally have later sleep timing. One late night does not mean illness, but recurring sleep loss or persistent sleep difficulty deserves attention and appropriate support without self-blame."
  },
  {
    "keys": [
      "لماذا نتثاءب",
      "why do we yawn",
      "التثاؤب"
    ],
    "src": "https://en.wikipedia.org/wiki/Sleep",
    "ar": "لا يوجد تفسير واحد محسوم لكل أسباب التثاؤب أو كونه معدياً. يدرسه العلماء من جوانب فسيولوجية واجتماعية متعددة، ومن المهم التمييز بين الفرضية والنتيجة المؤكدة. قول \"لا نعرف بعد\" جزء طبيعي من العلم، وليس فشلاً في التعلم.",
    "en": "There is no single settled explanation for every cause of yawning or why it can be contagious. Researchers study physiological and social ideas, and hypotheses should not be presented as established facts. Saying we do not know yet is a normal part of science, not a failure to learn."
  },
  {
    "keys": [
      "لماذا أعطس في الربيع",
      "why do i sneeze in spring",
      "حساسية الربيع"
    ],
    "src": "https://en.wikipedia.org/wiki/Allergy",
    "ar": "قد تسبب حبوب اللقاح أعراض حساسية عند بعض الأشخاص، مثل العطس وحكة العينين وسيلان الأنف. لكن العطس لا يثبت وحده الحساسية، وقد تكون له أسباب أخرى. إذا استمرت الأعراض أو أثرت في حياتك، اسأل مقدم رعاية عن التقييم والعلاج المناسبين. صعوبة التنفس الشديدة تستدعي مساعدة عاجلة.",
    "en": "Pollen can trigger allergy symptoms such as sneezing, itchy eyes and a runny nose in some people. Sneezing alone does not prove allergy and has other causes. Persistent or disruptive symptoms warrant advice about suitable assessment and care. Severe breathing difficulty needs urgent help."
  },
  {
    "keys": [
      "حساسية الفول السوداني",
      "peanut allergy",
      "حساسية الطعام"
    ],
    "src": "https://www.nhs.uk/conditions/anaphylaxis/",
    "ar": "حساسية الطعام قد تكون خطيرة، وقد يصل التفاعل إلى التأق. إذا حدث تورم مفاجئ في اللسان أو الحلق، أو صعوبة تنفس أو إغماء بعد تعرض محتمل، اطلب خدمات الطوارئ المحلية فوراً. إذا وُصف للشخص حاقن أدرينالين ذاتي، يستخدمه فوراً حسب تعليماته وخطة طبيبه ولا ينتظر تحسن الأعراض وحدها. أخبر شخصاً بالغاً قريباً؛ هذه ليست حالة للاستمرار في الدردشة.",
    "en": "Food allergy can be serious and can progress to anaphylaxis. Sudden tongue or throat swelling, breathing difficulty or fainting after a possible exposure requires local emergency help immediately. If an adrenaline auto-injector has been prescribed, use it promptly according to its instructions and the care plan rather than waiting for symptoms to pass. Tell a nearby trusted adult; this is not a situation to continue chatting.",
    "urgent": true
  },
  {
    "keys": [
      "لماذا تتسوس الأسنان",
      "why do teeth decay",
      "سبب التسوس"
    ],
    "src": "https://en.wikipedia.org/wiki/Tooth",
    "ar": "السكر لا يذيب السن مباشرة كما يظن كثيرون - البكتيريا هي الفاعل: مستعمرات في فمك تأكل بقايا السكر وتفرز حمضاً يذيب المينا أقسى مادة في جسمك، طبقة بعد طبقة حتى يصل اللب الحي فيبدأ الألم. لذلك عدد مرات السكر أهم من كميته (مشروب يُرتشف ساعات أخطر من حلوى تُؤكل مرة)، والفرشاة مساءً أهمها لأن اللعاب الحامي يقل في النوم.",
    "en": "Sugar does not dissolve the tooth directly as many think - bacteria do the work: colonies in your mouth eat sugar leftovers and secrete acid that dissolves enamel, the hardest substance in your body, layer after layer until it reaches the living pulp and pain begins. That is why the number of sugar exposures matters more than the amount (a drink sipped for hours is worse than a sweet eaten once), and the evening brush matters most because protective saliva drops during sleep."
  },
  {
    "keys": [
      "لماذا حرارة الجسم 37",
      "why is body temperature 37",
      "حرارة الجسم الطبيعية"
    ],
    "src": "https://en.wikipedia.org/wiki/Homeostasis",
    "ar": "ليست حرارة الجسم رقماً واحداً ثابتاً؛ تتغير بحسب الشخص ووقت اليوم وطريقة القياس وعوامل أخرى. يساعد مركز التنظيم في الوطاء واستجابات مثل التعرق والارتعاش وتغير الأوعية على بقائها ضمن مجال مناسب. وجود حرارة أو تغير في القياس وحده لا يكفي لتشخيص السبب أو تحديد علاج.",
    "en": "Body temperature is not one fixed number; it varies with the person, time of day, measurement method and other factors. Hypothalamic regulation, sweating, shivering and vessel responses help keep it within a suitable range. A temperature reading alone cannot diagnose a cause or determine treatment."
  },
  {
    "keys": [
      "لماذا نرتعش من البرد",
      "why do we shiver",
      "الارتعاش"
    ],
    "src": "https://en.wikipedia.org/wiki/Homeostasis",
    "ar": "الارتعاش تدفئة طوارئ: حين يقيس دماغك انخفاض الحرارة يأمر عضلاتك بانقباضات سريعة متتالية لا إرادية - وكل انقباضة عضلية تحرق طاقة فتنتج حرارة. إنه نفس مبدأ التدفئة بالرياضة، لكن أوتوماتيكياً. يصاحبه انقباض الأوعية في الأطراف لتوفير الحرارة للقلب والدماغ، ولهذا تبرد أصابعك أولاً وتزرق شفتاك.",
    "en": "Shivering is emergency heating: when your brain measures falling temperature it orders your muscles into rapid involuntary contractions - and every muscle contraction burns energy producing heat. It is the same principle as warming up by exercise, but automatic. It comes with vessels narrowing in the limbs to save heat for heart and brain, which is why your fingers get cold first and your lips turn blue."
  },
  {
    "keys": [
      "لماذا تصعق الكهرباء",
      "why does electricity shock",
      "الصعقة الكهربائية"
    ],
    "src": "https://en.wikipedia.org/wiki/Electricity",
    "ar": "تحدث الصعقة عندما يمر تيار عبر الجسم. تتوقف خطورتها على المسار والمدة وشدة التيار وظروف أخرى، وقد تكون كهرباء المنزل قاتلة. لا تلمس سلكاً مكشوفاً أو مقبساً، سواء كانت يدك جافة أو مبتلة. ابتعد عن الجهاز التالف واطلب مساعدة شخص بالغ مختص.",
    "en": "A shock occurs when current passes through the body. Danger depends on its path, duration, size and other conditions; household electricity can be fatal. Never touch exposed wiring or outlets, with dry or wet hands. Stay away from damaged equipment and ask a qualified adult for help."
  },
  {
    "keys": [
      "التيار المستمر والمتردد",
      "ac dc difference",
      "فرق التيار"
    ],
    "src": "https://en.wikipedia.org/wiki/Electricity",
    "ar": "التيار المستمر يسير في اتجاه واحد، بينما يتبدل اتجاه التيار المتردد دورياً. تردد 50 هرتز يعني 50 دورة كاملة في الثانية، وليس 50 تغيير اتجاه فقط. تساعد المحولات على رفع الجهد أو خفضه في أنظمة التيار المتردد، ما يفيد نقل الطاقة.",
    "en": "Direct current flows in one direction, while alternating current changes direction periodically. A frequency of 50 hertz means 50 complete cycles per second, not just 50 reversals. Transformers can raise or lower AC voltage, which is useful in power transmission."
  },
  {
    "keys": [
      "لماذا يلتصق المغناطيس بالثلاجة",
      "why do magnets stick to fridges",
      "مغناطيس الثلاجة"
    ],
    "src": "https://en.wikipedia.org/wiki/Magnet",
    "ar": "ينجذب المغناطيس إلى أبواب تحتوي مواد حديدية مناسبة، لأن المجال يؤثر في ترتيب مناطقها المغناطيسية. ليست كل أبواب الثلاجات كذلك، لذلك قد لا يلتصق المغناطيس ببعضها. ولا تنجذب كل المعادن مثل الحديد؛ النحاس والألومنيوم لا يتصرفان مثله.",
    "en": "A magnet sticks to doors containing suitable iron-based materials because its field affects their magnetic domains. Not every fridge door has that response, so some do not hold magnets. Not all metals behave like iron; copper and aluminum respond differently."
  },
  {
    "keys": [
      "هل المغناطيس يضر الهاتف",
      "do magnets damage phones",
      "مغناطيس قرب الجوال"
    ],
    "src": "https://en.wikipedia.org/wiki/Magnet",
    "ar": "يعتمد تأثير المغناطيس على قوته وعلى مكونات الجهاز. لا يكفي أن نقول إن كل مغناطيس آمن أو إن كل مغناطيس يمسح البيانات. أبعد المغناطيسات القوية عن الأجهزة، واتبع تعليمات الشركة المصنعة، ولا تستخدم الهاتف لاختبار قوة مغناطيس.",
    "en": "The effect depends on magnet strength and the components of the device. It is not accurate to say every magnet is safe or every magnet erases data. Keep strong magnets away from devices, follow manufacturer guidance, and do not use a phone to test a magnet."
  },
  {
    "keys": [
      "لماذا قوس المطر",
      "why do rainbows form",
      "كيف يتكون قوس قزح"
    ],
    "src": "https://en.wikipedia.org/wiki/Optics",
    "ar": "قوس المطر درس بصريات عملاق في السماء: شعاع الشمس يدخل قطرة المطر فينكسر ويتفرق لألوان، ثم ينعكس داخلها ويخرج منكسراً مرة أخرى. كل لون يخرج بزاوية ثابتة، فترى قوساً دائرياً بترتيب ألوان دائم. شروط مشاهدته: الشمس خلفك والمطر أمامك. وكل شخص يرى قوسه الخاص - لأن القطرات التي ترسل اللون لعينيك تختلف عن تلك التي لجارك!",
    "en": "A rainbow is a giant optics lesson in the sky: sunlight enters a raindrop, refracts and splits into colors, reflects inside, then exits refracting again. Each color exits at a fixed angle, so you see a circular arc with a permanent color order. Viewing conditions: sun behind you, rain in front. And everyone sees their own rainbow - the drops sending color to your eyes differ from your neighbor drops!"
  },
  {
    "keys": [
      "لماذا تبدو الملعقة مكسورة في الماء",
      "why does a spoon look bent in water",
      "انكسار الملعقة"
    ],
    "src": "https://en.wikipedia.org/wiki/Optics",
    "ar": "يتغير اتجاه الضوء عند انتقاله بين الماء والهواء، فتبدو صورة الجزء المغمور في موضع مختلف عن الجزء الخارجي. الملعقة نفسها لم تنكسر؛ مسار الضوء هو الذي تغير. يسمى هذا الانكسار، وتستخدم العدسات الفكرة نفسها لتغيير مسارات الأشعة.",
    "en": "Light changes direction when it passes between water and air, so the submerged part appears displaced relative to the part outside. The spoon has not broken; the light path has changed. This is refraction, also used by lenses to redirect rays."
  },
  {
    "keys": [
      "لماذا ننقذع عند الفرملة",
      "why do we lurch when braking",
      "القصور الذاتي"
    ],
    "src": "https://en.wikipedia.org/wiki/Classical_mechanics",
    "ar": "هذا مثال على القصور الذاتي. قبل الفرملة تتحرك مع الحافلة؛ وعند تباطؤها يميل جسمك إلى الحفاظ على سرعته إلى أن تؤثر فيه قوة. يساعد حزام الأمان على إبطاء الجسم مع المركبة بدلاً من ارتطامه بما أمامه.",
    "en": "This is inertia. Before braking you move with the bus; as it slows, your body tends to keep its velocity until a force acts on it. A seat belt helps slow your body with the vehicle instead of letting it hit what is in front."
  },
  {
    "keys": [
      "كيف يصعد الصاروخ في الفراغ",
      "how do rockets work in space",
      "الصاروخ والفضاء"
    ],
    "src": "https://en.wikipedia.org/wiki/Classical_mechanics",
    "ar": "الصاروخ لا يحتاج إلى دفع الهواء. يندفع غاز العادم إلى الخلف فيؤثر الصاروخ والغاز بقوتين متساويتين ومتعاكستين على جسمين مختلفين. لهذا يمكن للصاروخ العمل في الفراغ.",
    "en": "A rocket does not need to push against air. Exhaust is expelled backward, and the rocket and gas exert equal and opposite forces on different bodies. This is why a rocket can work in a vacuum."
  },
  {
    "keys": [
      "هل الطاقة تنتهي",
      "does energy run out",
      "الطاقة لا تفنى"
    ],
    "src": "https://en.wikipedia.org/wiki/Energy",
    "ar": "في النظام المعزول تبقى الطاقة الكلية محفوظة، لكنها قد تنتقل إلى المحيط وتنتشر. مثلاً تتحول طاقة البطارية إلى ضوء وطاقة حرارية. عندما نقول إن الوقود نفد، نقصد أن مصدر الطاقة المفيدة المتاح لنا استُهلك، وليس أن الطاقة اختفت من الوجود.",
    "en": "Total energy is conserved in an isolated system, but it can spread into the surroundings. Battery energy can become light and thermal energy. When we say fuel has run out, we mean the available useful source has been used, not that energy has vanished."
  },
  {
    "keys": [
      "من أين تأتي طاقة أجسامنا",
      "where does body energy come from",
      "طاقة الجسم"
    ],
    "src": "https://en.wikipedia.org/wiki/Energy",
    "ar": "يحصل جسمك على طاقة كيميائية من الغذاء، وتستخدم الخلايا تفاعلات لإنتاج ATP الذي يساعدها على أداء وظائفها. يأتي جزء كبير من طاقة شبكتنا الغذائية في الأصل من ضوء الشمس الذي تلتقطه النباتات بالبناء الضوئي. ثم تنتقل الطاقة عبر الغذاء وتتحول إلى حركة ووظائف جسمية وطاقة حرارية.",
    "en": "Your body gets chemical energy from food, and cells use reactions to produce ATP for their work. Much of the energy in our food web originally comes from sunlight captured by plants in photosynthesis. It then moves through food and becomes movement, body functions and thermal energy."
  },
  {
    "keys": [
      "لماذا نسمع صدى",
      "why do we hear echoes",
      "الصدى"
    ],
    "src": "https://en.wikipedia.org/wiki/Sound",
    "ar": "الصدى صوتك عائداً إليك: الموجة الصوتية تسافر وتصطدم بجدار صلب كجبل أو مبنى بعيد فترتد. إن كان الجدار أبعد من نحو 17 متراً، يصل الصدى بعد عُشر الثانية فيسمعه دماغك كصوت مستقل. في الغرف الصغيرة يرتد الصوت أسرع من أن يفصله دماغك فيندمج مع الأصل - لهذا يبدو صوتك في الحمام أجمل: أصداء قريبة تضخم الغناء!",
    "en": "An echo is your voice coming back to you: the sound wave travels, hits a hard far wall like a mountain or building, and bounces back. If the wall is farther than about 17 meters, the echo arrives after a tenth of a second and your brain hears it as a separate sound. In small rooms sound bounces back faster than your brain can separate, so it merges with the original - which is why your voice sounds better in the shower: close echoes amplifying the singing!"
  },
  {
    "keys": [
      "هل الصوت يسافر في الفضاء",
      "can sound travel in space",
      "الصوت في الفضاء"
    ],
    "src": "https://en.wikipedia.org/wiki/Sound",
    "ar": "لا. الصوت موجة تحتاج جزيئات تهتز وتناقل الاهتزاز، والفضاء الخارجي فراغ شبه تام بلا هواء - فلا وسط يحمل الموجة. انفجار بجوارك في الفضاء ستراه ولا تسمعه. لهذا يتواصل رواد الفضاء بالراديو: موجات كهرومغناطيسية لا تحتاج وسطاً وتعبر الفراغ بسرعة الضوء. أفلام الخيال التي تسمع فيها دوي السفن الفضائية تجامل الجمهور لا الفيزياء.",
    "en": "No. Sound is a wave that needs vibrating particles passing the shake along, and outer space is a near-perfect vacuum with no air - no medium to carry the wave. An explosion beside you in space would be seen, not heard. That is why astronauts talk by radio: electromagnetic waves need no medium and cross vacuum at light speed. Sci-fi movies with booming spaceships flatter the audience, not the physics."
  },
  {
    "keys": [
      "لماذا المعدن بارد الملمس",
      "why does metal feel cold",
      "المعدن بارد"
    ],
    "src": "https://en.wikipedia.org/wiki/Heat",
    "ar": "إذا كان المعدن والخشب في غرفة واحدة مدة كافية فقد يكونان عند نفس درجة الحرارة. لكن المعدن ينقل الطاقة من جلدك عادة أسرع من الخشب، فيبدو أبرد. الإحساس باللمس لا يقيس درجة الحرارة وحدها؛ يتأثر أيضاً بسرعة انتقال الطاقة. لا تختبر ذلك بلمس أجسام ساخنة.",
    "en": "Metal and wood left in the same room long enough may have the same temperature. Metal usually transfers energy away from your skin faster, so it feels cooler. Touch depends on the rate of energy transfer as well as temperature. Never test this by touching hot objects."
  },
  {
    "keys": [
      "كيف يحافظ الترمس على الحرارة",
      "how does a thermos work",
      "الترمس"
    ],
    "src": "https://en.wikipedia.org/wiki/Heat",
    "ar": "يقلل الفراغ بين جدارَي الترمس انتقال الطاقة بالتوصيل والحمل، ويقلل السطح العاكس الإشعاع. ويساعد الغطاء والعزل في تقليل الانتقال عبر الفتحة والحوائط. العزل لا يوقف الانتقال تماماً، لكنه يبطئه، سواء كان المشروب ساخناً أو بارداً.",
    "en": "A vacuum between thermos walls reduces conduction and convection, and reflective surfaces reduce radiation. The lid and insulation reduce transfer through the opening and walls. Insulation does not stop energy transfer completely; it slows it for both hot and cold drinks."
  },
  {
    "keys": [
      "لماذا نطفو في البحر الميت",
      "why do we float in the dead sea",
      "البحر الميت"
    ],
    "src": "https://en.wikipedia.org/wiki/Buoyancy",
    "ar": "الماء شديد الملوحة أكثف من الماء العذب. لذلك يحتاج الجسم إلى إزاحة حجم أصغر منه ليحصل على قوة طفو توازن وزنه، فيطفو جزء أكبر منه فوق السطح. عندما تطفو ساكناً تكون قوة الطفو مساوية لوزنك، لا أكبر منه.",
    "en": "Very salty water is denser than fresh water. A body therefore needs to displace less of it for buoyancy to balance its weight, leaving more of the body above the surface. When you float at rest, buoyancy equals your weight; it is not greater."
  },
  {
    "keys": [
      "لماذا تطفو السفينة الفولاذية",
      "why do steel ships float",
      "طفو السفن الفولاذية"
    ],
    "src": "https://en.wikipedia.org/wiki/Buoyancy",
    "ar": "تحتوي السفينة على حيز كبير من الهواء، فتكون كثافتها المتوسطة مع محتوياتها أقل من كثافة الماء وهي سليمة ومحملة ضمن حدودها. تغوص حتى تزيح ماء يساوي وزنه وزنها فتتوازن القوى. إذا دخل ماء كثير أو زاد الحمل فقد لا تتمكن من إزاحة ما يكفي قبل الغرق.",
    "en": "A ship encloses much air, making the average density of the intact ship and its contents less than water within its loading limits. It settles until it displaces its own weight in water and the forces balance. Flooding or overloading can prevent it from displacing enough water before sinking."
  },
  {
    "keys": [
      "كيف ترفع البكرة أثقالاً",
      "how do pulleys lift heavy loads",
      "البكرة"
    ],
    "src": "https://en.wikipedia.org/wiki/Simple_machine",
    "ar": "في نظام بكرات مثالي تتحدد فائدة القوة بعدد أجزاء الحبل التي تدعم الحمل، لا بعدد البكرات المتحركة وحده. إذا حمله جزءان متساويا الشد نحتاج تقريباً نصف القوة، لكننا نسحب ضعفي مسافة الرفع. وفي الواقع يزيد الاحتكاك القوة المطلوبة.",
    "en": "In an ideal pulley system, mechanical advantage depends on the number of rope segments supporting the load, not just the number of moving pulleys. Two equally tensioned supporting segments need about half the force but twice the pulling distance. Friction increases the required force in real systems."
  },
  {
    "keys": [
      "هل الرافعة توفر الشغل",
      "does a lever save work",
      "الرافعة والشغل"
    ],
    "src": "https://en.wikipedia.org/wiki/Simple_machine",
    "ar": "لا، وهذه الخدعة الجميلة: الرافعة توفر القوة لا الشغل. بذراع طويل ترفع صخرة ثقيلة بقوة صغيرة، لكن يدك تتحرك مسافة كبيرة والصخرة ترتفع قليلاً - وحاصل ضرب القوة في المسافة (الشغل) ثابت في الطرفين. كل الآلات البسيطة تحكمها هذه المعادلة، والاحتكاك يجعلك تدفع أكثر قليلاً في الواقع. الفيزياء لا تعرف الحصول على شيء مقابل لا شيء.",
    "en": "No, and that is the beautiful trick: a lever saves force, not work. With a long arm you lift a heavy rock with small force, but your hand travels a large distance while the rock rises a little - and force times distance (work) is equal on both sides. Every simple machine obeys this equation, and friction makes you pay slightly more in reality. Physics knows no something for nothing."
  },
  {
    "keys": [
      "لماذا يغلي الماء أسرع في الجبل",
      "why does water boil faster on mountains",
      "الغليان والارتفاع"
    ],
    "src": "https://en.wikipedia.org/wiki/Pressure",
    "ar": "عند ضغط جوي أقل يغلي الماء عند درجة حرارة أقل من 100 مئوية. لا توجد درجة واحدة لكل الجبال؛ القيمة تتوقف على الضغط والارتفاع. ولذلك قد يستغرق الطعام وقتاً أطول لينضج في ماء يغلي على ارتفاع، لأن الماء أبرد من الماء المغلي عند مستوى البحر.",
    "en": "At lower atmospheric pressure, water boils below 100 degrees Celsius. There is no single boiling temperature for every mountain; it depends on pressure and altitude. Food can therefore take longer to cook in boiling water at altitude because that water is cooler than boiling water at sea level."
  },
  {
    "keys": [
      "لماذا نستخدم حذاء الثلج",
      "why snowshoes work",
      "حذاء الثلج"
    ],
    "src": "https://en.wikipedia.org/wiki/Pressure",
    "ar": "حذاء الثلج درس ضغط عملي: وزنك ثابت، لكن توزيعه على مساحة عريضة يخفض الضغط على الثلج فلا يتحمله... بل يتحملك! بالحذاء العادي تتركز القوة على مساحة صغيرة فينهار الثلج تحتك وتغوص. الجمل يمشي الصحراء بنفس المبدأ: قوائمه العريضة توزع وزنه فلا يغوص في الرمال. والدبابات تستخدم جنازير عريضة لنفس السبب تماماً.",
    "en": "Snowshoes are applied pressure physics: your weight is constant, but spreading it over a wide area lowers the pressure on the snow so it holds you. In ordinary shoes the force concentrates on a small area, the snow collapses and you sink. The camel walks the desert by the same principle: wide feet spreading its weight so it does not sink in sand. And tanks use wide tracks for exactly the same reason."
  },
  {
    "keys": [
      "لماذا الجدول الدوري اسمه دوري",
      "why is the periodic table called periodic",
      "سبب تسمية الجدول الدوري"
    ],
    "src": "https://en.wikipedia.org/wiki/Periodic_table",
    "ar": "لأن خواص العناصر تظهر أنماطاً متكررة عند ترتيبها حسب العدد الذري. ترتبط الأنماط بتوزيع الإلكترونات، خصوصاً إلكترونات الغلاف الخارجي. لذلك تتشابه عناصر كثيرة في العمود الواحد، لكن الجدول ليس قاعدة تقول إن كل عنصر مطابق لجاره.",
    "en": "Element properties show repeating patterns when ordered by atomic number. These patterns are linked to electron arrangements, especially outer electrons. Many elements in a column therefore behave similarly, although the table does not mean neighboring elements are identical."
  },
  {
    "keys": [
      "أثقل عنصر في الطبيعة",
      "heaviest natural element",
      "ما هو أثقل عنصر"
    ],
    "src": "https://en.wikipedia.org/wiki/Periodic_table",
    "ar": "اليورانيوم، وعدده الذري 92، هو أثقل عنصر يوجد طبيعياً بكميات معتبرة. توجد آثار طبيعية ضئيلة جداً لبعض العناصر الأثقل أيضاً، لذلك عبارة \"كل ما بعد اليورانيوم صناعي فقط\" ليست دقيقة. يعتمد الحديث عن الأثقل على هل نقصد الوفرة الطبيعية أم عنصراً صُنع ولو للحظات.",
    "en": "Uranium, atomic number 92, is the heaviest element occurring naturally in substantial quantities. Tiny natural traces of some heavier elements also occur, so saying everything beyond uranium is exclusively artificial is not precise. The answer depends on whether we mean natural abundance or an element produced even briefly."
  },
  {
    "keys": [
      "لماذا الماء H2O",
      "why is water h2o",
      "معنى h2o"
    ],
    "src": "https://en.wikipedia.org/wiki/Chemical_bond",
    "ar": "H2O تعني أن جزيء الماء مبني من ذرتي هيدروجين وذرة أكسجين واحدة مرتبطة تساهمياً. الأكسجين يحتاج إلكترونين ليكمل مداره الخارجي، وكل هيدروجين يحتاج واحداً - صفقة عادلة: ذرة أكسجين + ذرتا هيدروجين = الجميع سعداء. والشكل المنحني للجزيء (104.5 درجة) يجعله قطبي الشحنات، ومن تلك القطبية تنبع كل خواص الماء السحرية: إذابة الأملاح، طفو الجليد، وصعوده في النباتات.",
    "en": "H2O means a water molecule is built from two hydrogen atoms and one oxygen atom covalently bonded. Oxygen needs two electrons to complete its outer shell, and each hydrogen needs one - a fair deal: one oxygen + two hydrogens = everyone happy. The molecule bent shape (104.5 degrees) makes it charge-polar, and from that polarity spring all water magic properties: dissolving salts, floating ice, and climbing up plants."
  },
  {
    "keys": [
      "لماذا الماس صلب والجرافيت طري",
      "why is diamond hard and graphite soft",
      "فرق الماس والجرافيت"
    ],
    "src": "https://en.wikipedia.org/wiki/Organic_chemistry",
    "ar": "الماس والجرافيت صورتان مختلفتان للكربون. في الماس ترتبط الذرات في شبكة ثلاثية الأبعاد شديدة الصلابة، وفي الجرافيت تتكون طبقات تنزلق فوق بعضها بسهولة أكبر. ليست الذرات وحدها هي التي تحدد الخواص، بل طريقة ارتباطها وترتيبها أيضاً.",
    "en": "Diamond and graphite are different forms of carbon. Diamond has a very hard three-dimensional bonded network, while graphite forms sheets that slide past one another more easily. Properties depend on the way atoms bond and are arranged, not only on which atoms are present."
  },
  {
    "keys": [
      "لماذا الصابون ينظف",
      "how does soap clean",
      "كيف ينظف الصابون"
    ],
    "src": "https://en.wikipedia.org/wiki/Acid",
    "ar": "للصابون جزء يتفاعل جيداً مع الماء وآخر مع المواد الدهنية. يساعد ذلك على تشتيت الدهون في تجمعات صغيرة يمكن للماء حملها بعيداً مع الغسل. ليست كل الأوساخ شيئاً واحداً، ولا نتذوق الصابون أو المنظفات للتعرف عليها.",
    "en": "Soap has one part that interacts well with water and another that interacts with grease. This helps disperse grease in small structures that water can carry away during washing. Dirt is not one single substance, and we never identify soap or cleaners by tasting them."
  },
  {
    "keys": [
      "لماذا يتفجر الخل مع البيكربونات",
      "why do vinegar and baking soda react",
      "الخل وصودا الخبز"
    ],
    "src": "https://en.wikipedia.org/wiki/Acid",
    "ar": "يتفاعل حمض الخل مع البيكربونات، وينتج من التفاعل ثاني أكسيد الكربون، وهو سبب الفقاعات، إلى جانب الماء وملح ذائب. الفوران لا يعني احتراقاً. هذا شرح للتفاعل، وليس دعوة لخلط مواد منزلية؛ لا تخلط المنظفات أو تغلق وعاء يحدث فيه تصاعد غاز.",
    "en": "Acetic acid reacts with bicarbonate, producing carbon dioxide bubbles along with water and a dissolved salt. Fizzing is not the same as burning. This explains a reaction; it is not an invitation to mix household products. Never mix cleaners or seal a vessel in which gas is being produced."
  },
  {
    "keys": [
      "لماذا يصدأ الحديد",
      "why does iron rust",
      "الصدأ"
    ],
    "src": "https://en.wikipedia.org/wiki/Chemical_reaction",
    "ar": "الصدأ تفاعل بطيء ومثابر: حديد + أكسجين + ماء = أكسيد حديد بني هش. الماء والملح يسرّعانه كثيراً - لهذا تصدأ السيارات قرب البحر أسرع. بعكس الألومنيوم الذي يتأكسد أيضاً لكن طبقة أكسيده متماسكة تحميه، طبقة الصدأ متشققة فتدخل الرطوبة أعمق فأعمق حتى يتفتت المعدن. الحلول كلها كيمياء: الطلاء يعزل، والجلفنة تكسو بالزنك، والستانلس ستيل سبيكة بكروم يصنع درع أكسيد حامياً.",
    "en": "Rust is a slow stubborn reaction: iron + oxygen + water = crumbly brown iron oxide. Water and salt speed it greatly - which is why cars rust faster near the sea. Unlike aluminum, which also oxidizes but whose oxide layer is coherent and protective, rust layer cracks and lets moisture deeper and deeper until the metal crumbles. The solutions are all chemistry: paint isolates, galvanization coats with zinc, and stainless steel is an alloy whose chromium builds a protective oxide shield."
  },
  {
    "keys": [
      "لماذا الشمعة تنطفئ في البرطمان",
      "why does a candle go out in a jar",
      "الشمعة والبرطمان"
    ],
    "src": "https://en.wikipedia.org/wiki/Chemical_reaction",
    "ar": "يحتاج لهب الشمعة إلى وقود وأكسجين ودرجة حرارة مناسبة. في حيز مغلق صغير يقل الأكسجين المتاح للاحتراق حتى لا يستطيع اللهب الاستمرار. هذا يوضح دور الأكسجين، ولا يتطلب تجربة منزلية بالنار أو الزجاج الساخن.",
    "en": "A candle flame needs fuel, oxygen and a suitable temperature. In a small enclosed space, available oxygen decreases until the flame can no longer keep burning. This explains the role of oxygen without requiring a home experiment with fire or hot glass."
  },
  {
    "keys": [
      "لماذا الثلج الجاف يدخن",
      "why does dry ice smoke",
      "الثلج الجاف"
    ],
    "src": "https://en.wikipedia.org/wiki/State_of_matter",
    "ar": "الثلج الجاف ثاني أكسيد كربون صلب يتحول إلى غاز مباشرة عند الضغط الجوي المعتاد. يبرد الهواء المحيط فيتكثف جزء من بخار الماء إلى قطرات دقيقة تبدو كضباب؛ الغاز نفسه غير مرئي. يسبب الثلج الجاف حروق برودة، وتراكم غازه قد يزيح الأكسجين، فلا نتعامل معه دون مختص.",
    "en": "Dry ice is solid carbon dioxide that changes directly to gas at ordinary atmospheric pressure. It cools nearby air so some water vapor condenses into tiny fog droplets; the gas itself is invisible. Dry ice can cause cold burns and its gas can displace oxygen, so it requires expert handling."
  },
  {
    "keys": [
      "لماذا يغلي الماء",
      "why does water boil",
      "نقطة الغليان"
    ],
    "src": "https://en.wikipedia.org/wiki/State_of_matter",
    "ar": "يبدأ الغليان عندما يساوي ضغط بخار السائل الضغط المحيط، فتستطيع فقاعات البخار التكون داخله. يغلي الماء النقي قرب 100 درجة مئوية عند ضغط جوي عادي. تقل درجة غليانه عند ضغط أقل وتزيد عند ضغط أعلى.",
    "en": "Boiling occurs when the vapor pressure of a liquid matches the surrounding pressure, allowing vapor bubbles to form within it. Pure water boils near 100 degrees Celsius at ordinary atmospheric pressure. Its boiling temperature decreases at lower pressure and increases at higher pressure."
  },
  {
    "keys": [
      "لماذا الماء البارد يذيب سكراً أقل",
      "why does cold water dissolve less sugar",
      "السكر في الماء البارد"
    ],
    "src": "https://openstax.org/books/chemistry-2e/pages/11-1-the-dissolution-process",
    "ar": "تزداد ذوبانية السكر في الماء عادة مع ارتفاع درجة الحرارة، لكن المقدار يعتمد على درجات الحرارة المستخدمة. سرعة الذوبان والذوبانية مختلفتان: الأولى تعني كم يستغرق الذوبان، والثانية أقصى كمية تذوب عند ظروف محددة. لا نعمم سلوك السكر على كل المواد؛ ذوبانية بعض الغازات تقل عند التسخين.",
    "en": "Sugar solubility in water generally increases with temperature, but the size of the change depends on the temperatures compared. Dissolving rate and solubility differ: one is how fast dissolution occurs, the other the maximum amount that dissolves under specified conditions. Not every substance behaves like sugar; many gases become less soluble as temperature rises."
  },
  {
    "keys": [
      "هل البنزين يذوب في الماء",
      "does gasoline dissolve in water",
      "الزيت والماء"
    ],
    "src": "https://openstax.org/books/chemistry-2e/pages/11-1-the-dissolution-process",
    "ar": "البنزين خليط هيدروكربونات لا يمتزج جيداً بالماء؛ قوى التجاذب في الخليط لا تساعد على تكوين محلول متجانس. قاعدة \"المتشابه يذيب المتشابه\" دليل مفيد، وليست قانوناً يعني انعدام الذوبان تماماً. لا نستخدم الوقود في تجارب منزلية؛ فهو قابل للاشتعال وضار عند الاستنشاق.",
    "en": "Gasoline is a hydrocarbon mixture that does not mix well with water; the intermolecular interactions do not favor a homogeneous solution. Like dissolves like is a useful guide, not a law meaning absolutely zero solubility. Fuel is flammable and harmful to inhale, so it is not a home experiment material."
  },
  {
    "keys": [
      "لماذا الحديد مغناطيسي والنحاس لا",
      "why is iron magnetic but copper is not",
      "المعادن والمغناطيس"
    ],
    "src": "https://en.wikipedia.org/wiki/Metal",
    "ar": "الحديد يستطيع تكوين مناطق تتجه فيها التأثيرات المغناطيسية للإلكترونات معاً. يمكن اصطفاف هذه المناطق فيظهر تجاذب قوي مع المغناطيس. النحاس لا يملك نفس السلوك الحديدي المغناطيسي؛ ولا يعني ذلك أنه بلا أي استجابة للمجال في كل الظروف.",
    "en": "Iron can form domains in which electron magnetic effects align. Alignment of these domains can produce strong magnetic attraction. Copper does not have that ferromagnetic behavior; this does not mean it has no response to a magnetic field under every possible condition."
  },
  {
    "keys": [
      "لماذا الذهب لا يصدأ",
      "why does gold not rust",
      "الذهب لا يتأكسد"
    ],
    "src": "https://en.wikipedia.org/wiki/Metal",
    "ar": "الذهب ضعيف التفاعل مع الأكسجين والماء في الظروف العادية، لذلك لا يكوّن الصدأ الذي نراه على الحديد. لكن مقاومة التفاعل ليست حصانة من كل مادة أو ظرف. هذه الخاصية تساعد على بقاء سطحه لامعاً، وهي واحدة من أسباب استخدامه في الحلي وبعض التوصيلات.",
    "en": "Gold reacts little with oxygen and water under ordinary conditions, so it does not form the rust seen on iron. Low reactivity does not mean immunity to every chemical or condition. This helps its surface remain shiny and is one reason for its use in jewelry and some electrical contacts."
  },
  {
    "keys": [
      "كيف تشحن البطارية",
      "how does charging a battery work",
      "شحن البطارية"
    ],
    "src": "https://en.wikipedia.org/wiki/Electrochemistry",
    "ar": "في البطارية القابلة للشحن، تدفع طاقة من الشاحن تفاعلات مناسبة في الاتجاه الذي يعيد تخزين الطاقة الكيميائية. لا تعود كل بطارية إلى حالتها الأصلية تماماً؛ تحدث تغيرات جانبية وتقل السعة مع الاستخدام. لا تحاول شحن بطارية غير مخصصة للشحن، واستخدم الشاحن المناسب فقط.",
    "en": "In a rechargeable battery, energy from the charger drives suitable reactions in the direction that stores chemical energy again. Restoration is not perfectly complete; side changes occur and capacity declines with use. Never recharge a battery not designed for it, and use the appropriate charger."
  },
  {
    "keys": [
      "من أين يأتي الكلور",
      "where does chlorine come from",
      "صناعة الكلور"
    ],
    "src": "https://en.wikipedia.org/wiki/Electrochemistry",
    "ar": "يمكن إنتاج الكلور صناعياً بالتحليل الكهربائي لمحلول ملحي في خلايا مصممة لهذا الغرض، مع نواتج أخرى منها الهيدروجين وهيدروكسيد الصوديوم. تختلف النواتج والظروف حسب تصميم الخلية وتركيز المحلول. الكلور غاز سام والهيدروجين قابل للاشتعال؛ هذا شرح صناعي وليس تجربة منزلية.",
    "en": "Industry can produce chlorine by electrolyzing brine in purpose-built cells, with other products including hydrogen and sodium hydroxide. Products and conditions depend on cell design and solution concentration. Chlorine is toxic and hydrogen is flammable; this is an industrial explanation, not a home experiment."
  },
  {
    "keys": [
      "لماذا يطير بالون الهيليوم",
      "why do helium balloons float",
      "الهيليوم"
    ],
    "src": "https://en.wikipedia.org/wiki/Gas",
    "ar": "الهيليوم أقل كثافة من الهواء عند ظروف مماثلة. إذا كان وزن البالون والغاز بداخله أقل من وزن الهواء الذي يزيحانه، تكون قوة الطفو أكبر من الوزن فيرتفع. لابد من حساب وزن غلاف البالون أيضاً، لا مقارنة الغاز وحده. لا تستنشق الهيليوم؛ فهو يزيح الأكسجين الضروري للتنفس.",
    "en": "Helium is less dense than air under comparable conditions. If the balloon and its contents weigh less than the air they displace, buoyancy exceeds their weight and they rise. The envelope weight matters too; comparing the gases alone is not enough. Do not inhale helium; it displaces oxygen needed for breathing."
  },
  {
    "keys": [
      "لماذا يتغير الصوت مع الهيليوم",
      "why does helium change your voice",
      "صوت الهيليوم"
    ],
    "src": "https://en.wikipedia.org/wiki/Gas",
    "ar": "تتغير سرعة الصوت في الهيليوم فتتغير ترددات الرنين في المجرى الصوتي، فيختلف طابع الصوت. ليس الأمر مجرد زيادة تردد اهتزاز الأحبال الصوتية. لكن استنشاق الهيليوم قد يمنع وصول الأكسجين الكافي للجسم، لذلك لا تجربه من بالون أو أسطوانة. يمكن فهم الفكرة من الشرح والنماذج الآمنة.",
    "en": "Sound travels differently in helium, changing resonances of the vocal tract and the character of the voice. It is not simply an increase in vocal-cord vibration frequency. Inhaling helium can deprive the body of oxygen, so do not try it from a balloon or cylinder. Learn the idea through explanation and safe models instead."
  },
  {
    "keys": [
      "لماذا نحتاج الأكسجين للتنفس",
      "why do we need oxygen to breathe",
      "أهمية الأكسجين"
    ],
    "src": "https://en.wikipedia.org/wiki/Gas",
    "ar": "تستخدم خلايا كثيرة الأكسجين في التنفس الخلوي للمساعدة على إنتاج ATP من الطاقة الكيميائية في الغذاء. يكون الأكسجين مستقبل الإلكترونات الأخير في سلسلة نقل الإلكترونات، ويتكون الماء. التنفس الخلوي سلسلة تفاعلات مضبوطة بالإنزيمات، وليس لهباً يحترق داخل الجسم.",
    "en": "Many cells use oxygen in cellular respiration to help make ATP from the chemical energy of food. Oxygen is the final electron acceptor in the electron transport chain, forming water. Cellular respiration is a series of enzyme-controlled reactions, not a flame burning inside the body."
  },
  {
    "keys": [
      "هل الكربون عنصر حي",
      "is carbon alive",
      "لماذا الكربون أساس الحياة"
    ],
    "src": "https://en.wikipedia.org/wiki/Organic_chemistry",
    "ar": "الكربون عنصر وليس كائناً حياً. يستطيع تكوين أربع روابط وبناء سلاسل وحلقات وهياكل متنوعة، ولذلك يدخل في البروتينات والدهون والسكريات والحمض النووي. هذا يفسر أهميته للحياة المعروفة لنا، ولا يثبت أن أي كيمياء بديلة للحياة مستحيلة.",
    "en": "Carbon is an element, not a living organism. It can form four bonds and build varied chains, rings and structures, so it is part of proteins, fats, carbohydrates and DNA. This explains its importance to known life; it does not prove that every alternative chemistry for life is impossible."
  }
,
  {
    "keys": [
      "ما الفرق بين البسط والمقام",
      "what is the difference between numerator and denominator",
      "البسط والمقام"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/4-1-visualize-fractions",
    "ar": "المقام أسفل الكسر يخبرك إلى كم جزء متساوٍ قسمنا الكل، والبسط أعلى الكسر يخبرك كم جزءاً أخذنا. في 3/4 قسمنا الكل أربعة أجزاء وأخذنا ثلاثة. إن قلبت المكانين تغير المعنى: 4/3 كسر غير حقيقي أكبر من واحد صحيح.",
    "en": "The denominator at the bottom says into how many equal parts the whole is split, and the numerator on top says how many parts we take. In 3/4 the whole is split into four parts and we take three. Swapping them changes the meaning: 4/3 is an improper fraction larger than one whole."
  },
  {
    "keys": [
      "كيف أحول النسبة المئوية إلى كسر",
      "how do I convert a percent to a fraction",
      "تحويل النسبة لكسر"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/6-key-concepts",
    "ar": "اكتب النسبة على مقام 100 ثم بسّط الكسر إن أمكن: 25% تصبح 25/100 أي 1/4. وللتحويل إلى عدد عشري اقسم على 100 فتصبح 0.25. تذكر أن 25% و1/4 و0.25 ثلاث طرق لكتابة القيمة نفسها.",
    "en": "Write the percent over 100 and simplify if possible: 25% becomes 25/100, which is 1/4. To get a decimal divide by 100 to get 0.25. Remember that 25%, 1/4 and 0.25 are three ways to write the same value."
  },
  {
    "keys": [
      "كيف أحل معادلة بسيطة",
      "how do I solve a simple equation",
      "حل معادلة خطوة بخطوة"
    ],
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/2-1-solve-equations-using-the-subtraction-and-addition-properties-of-equality",
    "ar": "عامل المعادلة كميزان: ما تفعله بطرف افعله بالطرف الآخر. لحل x + 3 = 8 اطرح 3 من الطرفين فتحصل على x = 5، ولحل x - 5 = 8 أضف 5 للطرفين فتحصل على x = 13. ثم تحقق بالتعويض في المعادلة الأصلية لتتأكد أن العبارة صحيحة.",
    "en": "Treat the equation like a balance: whatever you do to one side, do to the other. To solve x + 3 = 8 subtract 3 from both sides to get x = 5; to solve x - 5 = 8 add 5 to both sides to get x = 13. Then check by substituting into the original equation to confirm a true statement."
  },
  {
    "keys": [
      "ما هي نقطة الأصل",
      "what is the origin in coordinates",
      "نقطة الاصل"
    ],
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/4-1-use-the-rectangular-coordinate-system",
    "ar": "نقطة الأصل هي النقطة (0,0) حيث يتقاطع محورا x وy. منها نقيس التحرك: يميناً أو يساراً حسب إشارة x، وأعلى أو أسفل حسب إشارة y. تقاطع المحورين يقسم المستوى إلى أربعة أرباع مرقمة بالأرقام الرومانية.",
    "en": "The origin is the point (0,0) where the x-axis and y-axis intersect. From it we measure movement: right or left by the sign of x, up or down by the sign of y. The crossing axes split the plane into four quadrants numbered with Roman numerals."
  },
  {
    "keys": [
      "ما هو باي",
      "what is pi in a circle",
      "ثابت باي"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/c-geometric-formulas",
    "ar": "π هو نسبة محيط أي دائرة إلى قطرها، وهي ثابتة مهما كان حجم الدائرة. قيمته تقريباً 3.14 لكنها عدد غير نسبي لا تنتهي أرقامه. منه تأتي صيغتا المحيط C = πd والمساحة A = πr².",
    "en": "π is the ratio of any circle circumference to its diameter, constant whatever the circle size. Its value is about 3.14, but it is an irrational number whose digits never end. It gives the formulas C = πd for circumference and A = πr² for area."
  },
  {
    "keys": [
      "ما الفرق بين الحجم والمساحة",
      "what is the difference between volume and area",
      "الحجم والمساحة السطحية"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/c-geometric-formulas",
    "ar": "المساحة تقيس سطحاً مستوياً أو وجهاً وتضرب بعدين فوحدتها مربعة. الحجم يقيس ما يتسع له المجسم ويضرب ثلاثة أبعاد فوحدته مكعبة. مثال: مكعب ضلعه 3 مساحته السطحية 54 وحدة مربعة وحجمه 27 وحدة مكعبة.",
    "en": "Area measures a flat surface or face by multiplying two dimensions, so its unit is square. Volume measures what a solid holds by multiplying three dimensions, so its unit is cubic. Example: a cube of side 3 has surface area 54 square units and volume 27 cubic units."
  },
  {
    "keys": [
      "هل النرد طريقة عادلة للقرعة",
      "is a die a fair way to choose randomly",
      "عدالة النرد"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/5-5-averages-and-probability",
    "ar": "حجر النرد المنتظم يعطي كل وجه من أوجهه الستة الاحتمال نفسه 1/6، وهذا ما يجعله عادلاً. لكن حجراً غير متزن أو طريقة رمي متحيزة قد تكسر هذا الافتراض. حساب الاحتمال البسيط يبدأ دائماً بشرط تساوي النواتج.",
    "en": "A fair die gives each of its six faces the same probability, 1/6, which is what makes it fair. A badly weighted die or a biased throw can break that assumption. Basic probability calculation always starts from the condition of equally likely outcomes."
  },
  {
    "keys": [
      "متى أستخدم الوسيط بدل المتوسط",
      "when should I use the median instead of the mean",
      "الوسيط والمتوسط"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/5-5-averages-and-probability",
    "ar": "المتوسط يجمع كل القيم ويوزعها بالتساوي، لكن قيمة متطرفة واحدة قد تسحبه بعيداً عن معظم البيانات. الوسيط هو القيمة الوسطى بعد الترتيب فيصف المنتصف حتى مع وجود قيم شاذة. لذلك تستخدم الإحصاءات الوسيط أحياناً للدخل والأسعار.",
    "en": "The mean pools all values and shares them equally, but one extreme value can drag it away from most of the data. The median is the middle value after sorting, so it describes the center even with outliers. That is why statistics sometimes report median income or prices."
  },
  {
    "keys": [
      "ما معنى الدالة",
      "what does a function mean in math",
      "تعريف الدالة"
    ],
    "src": "https://openstax.org/books/college-algebra-2e/pages/3-1-functions-and-function-notation",
    "ar": "الدالة قاعدة تربط كل مدخل بمخرج واحد بالضبط. لو أعطى مدخل واحد مخرجين مختلفين فالعلاقة ليست دالة. نكتب f(x) ونقرؤها: قيمة الدالة عند x، والمجال مجموعة المداخل المسموحة والمدى مجموعة المخرجات.",
    "en": "A function is a rule that pairs each input with exactly one output. If one input leads to two different outputs, the relation is not a function. We write f(x), read as the function value at x; the domain is the set of allowed inputs and the range the set of outputs."
  },
  {
    "keys": [
      "كيف أتحقق من تناسب",
      "how do I check whether two ratios form a proportion",
      "التحقق من التناسب"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/6-5-solve-proportions-and-their-applications",
    "ar": "قارن حواصل الضرب التبادلي: في a/b = c/d يجب أن يتساوى a×d مع b×c. مثلاً 1/2 = 4/8 تناسب صحيح لأن 1×8 = 2×4 = 8. إن اختلف الناتجان فالنسبتان غير متساويتين. واحفظ ترتيب الوحدات نفسه في الطرفين عند المقارنة.",
    "en": "Compare cross products: in a/b = c/d you need a×d equal to b×c. For example 1/2 = 4/8 is a true proportion because 1×8 = 2×4 = 8. If the products differ, the ratios are not equal. Keep unit order the same on both sides when comparing."
  },
  {
    "keys": [
      "ما هي الكسور المتكافئة",
      "what are equivalent fractions",
      "تكافؤ الكسور"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/4-1-visualize-fractions",
    "ar": "الكسور المتكافئة لها القيمة نفسها رغم اختلاف الأرقام، مثل 1/2 و2/4 و3/6. نحصل عليها بضرب البسط والمقام في العدد نفسه أو قسمتهما عليه. على الرسم كلها تظلل الجزء نفسه من الكل.",
    "en": "Equivalent fractions have the same value despite different numbers, like 1/2, 2/4 and 3/6. We get them by multiplying numerator and denominator by the same number, or dividing both. On a diagram they all shade the same part of the whole."
  },
  {
    "keys": [
      "كيف أحسب نسبة مئوية من مبلغ",
      "how do I find a percent of an amount",
      "حساب نسبة من مبلغ"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/6-key-concepts",
    "ar": "حوّل النسبة إلى عدد عشري ثم اضرب: 25% من 80 هي 0.25 × 80 = 20. وللخصومات اطرح الناتج من السعر الأصلي. تذكر أن الزيادة أو النقصان يقاسان دائماً نسبة إلى المقدار الأصلي.",
    "en": "Convert the percent to a decimal and multiply: 25% of 80 is 0.25 × 80 = 20. For discounts, subtract the result from the original price. Remember that increase or decrease is always measured against the original amount."
  },
  {
    "keys": [
      "ماذا يعني المتغير في الجبر",
      "what does a variable mean in algebra",
      "معنى المتغير"
    ],
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/2-1-solve-equations-using-the-subtraction-and-addition-properties-of-equality",
    "ar": "المتغير حرف يمثل عدداً مجهولاً أو متغيراً، مثل x في المعادلة x + 3 = 8. حل المعادلة يعني إيجاد القيمة التي تجعل الطرفين متساويين، وهنا x = 5. التحقق بالتعويض يؤكد أن القيمة صحيحة.",
    "en": "A variable is a letter standing for an unknown or changing number, like x in x + 3 = 8. Solving the equation means finding the value that makes both sides equal, here x = 5. Checking by substitution confirms the value is right."
  },
  {
    "keys": [
      "لماذا الترتيب مهم في الزوج المرتب",
      "why does order matter in an ordered pair",
      "ترتيب الزوج المرتب"
    ],
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/4-1-use-the-rectangular-coordinate-system",
    "ar": "لأن الرقم الأول يقيس التحرك على محور x والثاني على محور y. النقطة (2,1) يمين الأصل وحدتين وفوقه وحدة، بينما (1,2) يمينه وحدة وفوقه وحدتين؛ نقطتان مختلفتان. لهذا يسمى زوجاً مرتباً.",
    "en": "Because the first number measures movement along the x-axis and the second along the y-axis. The point (2,1) is 2 right and 1 up from the origin, while (1,2) is 1 right and 2 up; two different points. That is why it is called an ordered pair."
  },
  {
    "keys": [
      "ما الفرق بين نصف القطر والقطر",
      "what is the difference between radius and diameter",
      "نصف القطر والقطر"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/c-geometric-formulas",
    "ar": "نصف القطر r هو المسافة من المركز إلى أي نقطة على الدائرة. القطر d وتر يمر بالمركز ويصل طرفين متقابلين، ويساوي ضعف نصف القطر: d = 2r. المحيط C = πd = 2πr، فمعرفة أحدهما تكفي لحساب الباقي.",
    "en": "The radius r is the distance from the center to any point on the circle. The diameter d is a chord through the center joining opposite points, equal to twice the radius: d = 2r. Since C = πd = 2πr, knowing one of them is enough to compute the rest."
  },
  {
    "keys": [
      "كم وجهاً للمكعب",
      "how many faces does a cube have",
      "اوجه المكعب"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/c-geometric-formulas",
    "ar": "للمكعب 6 أوجه مربعة متساوية و12 حرفاً و8 رؤوس. مساحته السطحية 6س² لأن كل وجه مساحته س²، وحجمه س³. هذه الحقائق تفسر لماذا مضاعفة الضلع تضاعف الحجم ثماني مرات لا مرتين.",
    "en": "A cube has 6 equal square faces, 12 edges and 8 vertices. Its surface area is 6s² because each face has area s², and its volume is s³. These facts explain why doubling the side multiplies the volume by eight, not two."
  },
  {
    "keys": [
      "هل الاحتمال يتنبأ بالرمية القادمة",
      "does probability predict the next roll",
      "توقع الاحتمال"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/5-5-averages-and-probability",
    "ar": "لا. احتمال 1/6 لكل وجه يعني أنه على عدد كبير من الرميات نتوقع تقارب نسبة كل وجه من 1/6، لكنه لا يحدد نتيجة الرمية القادمة. الرميات مستقلة: ظهور 6 ثلاث مرات متتالية لا يغير احتمال الرمية التالية في نرد منتظم.",
    "en": "No. A probability of 1/6 per face means that over many rolls we expect each face near 1/6 of the time, but it does not fix the next roll. Rolls are independent: three sixes in a row do not change the next roll probability in a fair die."
  },
  {
    "keys": [
      "ما هو المنوال",
      "what is the mode in statistics",
      "تعريف المنوال"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/5-5-averages-and-probability",
    "ar": "المنوال هو القيمة الأكثر تكراراً في البيانات. قد لا يوجد منوال إذا تساوت التكرارات، وقد يوجد أكثر من منوال إذا تشاركت قيم أعلى تكرار. في القائمة 2,3,5,8,8,8,15 المنوال هو 8.",
    "en": "The mode is the value that occurs most often in the data. There may be no mode if frequencies tie, and more than one mode if values share the highest frequency. In the list 2,3,5,8,8,8,15 the mode is 8."
  },
  {
    "keys": [
      "هل كل علاقة دالة",
      "is every relation a function",
      "العلاقة والدالة"
    ],
    "src": "https://openstax.org/books/college-algebra-2e/pages/3-1-functions-and-function-notation",
    "ar": "لا. الدالة حالة خاصة: كل مدخل يقابل مخرجاً واحداً بالضبط. علاقة أسماء الأشخاص بأعمارهم دالة إذا كان لكل شخص عمر واحد، لكن ربط العمر بالأسماء قد يعطي مدخلاً واحداً مخرجات كثيرة فلا يكون دالة. يجوز تكرار المخرج نفسه لمدخلين.",
    "en": "No. A function is a special case: each input is paired with exactly one output. Matching people to their ages is a function if each person has one age, but reversing it may give one input many outputs and fail. Repeating the same output for two inputs is allowed."
  },
  {
    "keys": [
      "ما الفرق بين النسبة والكسر",
      "what is the difference between a ratio and a fraction",
      "النسبة والكسر"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/6-5-solve-proportions-and-their-applications",
    "ar": "الكسر يصف جزءاً من كل، والنسبة تقارن كميتين وقد تكون جزءاً إلى جزء. نسبة كرتين حمراوين إلى 3 زرقاوين هي 2:3، لكن حصة الحمر من الكل 2/5. انتبه لنوع المقارنة قبل كتابة الكسر، وحافظ على ترتيب الوحدات نفسه في الطرفين.",
    "en": "A fraction describes a part of a whole, while a ratio compares two quantities and may be part to part. Two red counters to three blue is the ratio 2:3, but the red share of the whole is 2/5. Notice which comparison you mean before writing a fraction, and keep unit order consistent."
  }
,
  {
    "keys": [
      "هل الصفر موجب أم سالب",
      "is zero positive or negative",
      "الصفر على خط الاعداد"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/3-1-introduction-to-integers",
    "ar": "الصفر ليس موجباً ولا سالباً؛ هو نقطة الفصل بينهما على خط الأعداد. الأعداد الموجبة يمينه والسالبة يساره، وكلما اتجهنا يميناً كبرت القيمة. لذلك يكون -2 أكبر من -5 رغم أن 5 أكبر من 2.",
    "en": "Zero is neither positive nor negative; it is the dividing point between them on the number line. Positives lie to its right and negatives to its left, and moving right always increases value. That is why -2 is greater than -5 even though 5 is greater than 2."
  },
  {
    "keys": [
      "ما هي القيمة المطلقة",
      "what is absolute value",
      "المسافة عن الصفر"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/3-1-introduction-to-integers",
    "ar": "القيمة المطلقة للعدد هي بعده عن الصفر على خط الأعداد دون اعتبار للاتجاه، فـ |−3| = 3 و|3| = 3. في العمليات نبسط ما داخل رمز القيمة المطلقة أولاً تماماً كما نفعل مع الأقواس.",
    "en": "The absolute value of a number is its distance from zero on the number line regardless of direction, so |−3| = 3 and |3| = 3. In calculations we simplify inside absolute value bars first, just as we do with parentheses."
  },
  {
    "keys": [
      "كيف أقرأ العدد العشري",
      "how do I read a decimal number",
      "قراءة العشرية"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/5-1-decimals",
    "ar": "اقرأ الجزء الصحيح ثم قل و، ثم اقرأ الكسر باسم آخر خانة فيه: 5.03 خمسة وثلاثة أجزاء من مئة. الخانة الأولى يمين الفاصلة أعشار والثانية أجزاء من مئة والثالثة أجزاء من ألف. تذكر أن الجزء من ألف أصغر من واحد رغم أن الألف عدد كبير.",
    "en": "Read the whole part, say and, then read the fraction by the name of its last place: 5.03 is five and three hundredths. The first place right of the point is tenths, the second hundredths, the third thousandths. Remember that a thousandth is smaller than one even though a thousand is large."
  },
  {
    "keys": [
      "ما الفرق بين العُشر والعشرات",
      "what is the difference between tenths and tens",
      "العشر والعشرات"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/5-1-decimals",
    "ar": "العشرات خانة يسار الفاصلة وتعني مجموعات من عشرة، أما الأعشار فأول خانة يمين الفاصلة وتعني أجزاء العشرة من الواحد. ففي 20.2 الرقم 2 الأول عشرون والثاني عشران من واحد. لاحظ أن الأعشار أصغر من الواحد بينما العشرات أكبر منه.",
    "en": "The tens place sits left of the decimal point and means groups of ten, while tenths is the first place right of the point and means tenths of one. In 20.2 the first 2 is twenty and the second is two tenths. Tenths are smaller than one while tens are larger."
  },
  {
    "keys": [
      "لماذا نضرب قبل الجمع",
      "why do we multiply before adding",
      "سبب ترتيب العمليات"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/2-1-use-the-language-of-algebra",
    "ar": "لأن الرياضيات تحتاج اتفاقاً يجعل للتعبير معنى واحداً. بدون الترتيب قد يقرأ شخص 2 + 3×4 كـ 14 وآخر كـ 20. الاتفاق: الأقواس أولاً ثم الأسس ثم الضرب والقسمة من اليسار ثم الجمع والطرح من اليسار. بهذا يحصل الجميع على النتيجة نفسها.",
    "en": "Because mathematics needs an agreement that gives each expression one meaning. Without the order, one person reads 2 + 3×4 as 14 and another as 20. The agreement: parentheses first, then exponents, then multiply and divide left to right, then add and subtract left to right. That way everyone gets the same result."
  },
  {
    "keys": [
      "كيف أحسب تعبيرا فيه أقواس",
      "how do I evaluate an expression with parentheses",
      "حساب الاقواس"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/2-1-use-the-language-of-algebra",
    "ar": "ابدأ بأعمق قوس من الداخل للخارج، ثم الأسس، ثم الضرب والقسمة من اليسار، ثم الجمع والطرح من اليسار. مثال: 2 + 3×(4−1) نحسب القوس أولاً فتصبح 2 + 3×3 = 2 + 9 = 11. اتباع الخطوات بالترتيب هو نصف الحل.",
    "en": "Start with the innermost parentheses and work outward, then exponents, then multiply and divide left to right, then add and subtract left to right. Example: 2 + 3×(4−1) becomes 2 + 3×3 = 2 + 9 = 11. Following the steps in order is half the solution."
  },
  {
    "keys": [
      "ماذا يعني الأس",
      "what does an exponent mean",
      "معنى القوة"
    ],
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/6-2-use-multiplication-properties-of-exponents",
    "ar": "الأس يخبرك كم مرة تضرب الأساس في نفسه: 2³ تعني 2×2×2 = 8 وليست 2×3. الأساس هو العدد المتكرر والأس هو عدد مرات التكرار. وعند ضرب قوتين بنفس الأساس نجمع الأسس: a²·a³ = a⁵.",
    "en": "An exponent tells you how many times to multiply the base by itself: 2³ means 2×2×2 = 8, not 2×3. The base is the repeated number and the exponent counts the repeats. When multiplying powers with the same base, add the exponents: a²·a³ = a⁵."
  },
  {
    "keys": [
      "هل 2 أس 3 تساوي 6",
      "does 2 to the 3 equal 6",
      "خطأ شائع في الاسس"
    ],
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/6-2-use-multiplication-properties-of-exponents",
    "ar": "لا، 2³ = 2×2×2 = 8. الخطأ الشائع هو ضرب الأساس في الأس مرة واحدة، لكن الأس يعني تكرار الضرب. تذكر أن 2² مربع مساحة ضلعه 2 و2³ حجم مكعب ضلعه 2، وكلاهما أكبر من الضرب البسيط في 2.",
    "en": "No, 2³ = 2×2×2 = 8. The common mistake is multiplying the base by the exponent once, but the exponent means repeated multiplication. Remember that 2² is the area of a square of side 2 and 2³ the volume of a cube of side 2; both exceed simply doubling."
  },
  {
    "keys": [
      "متى نستخدم الترميز العلمي",
      "when do we use scientific notation",
      "فائدة الترميز العلمي"
    ],
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/6-7-integer-exponents-and-scientific-notation",
    "ar": "نستخدمه للأعداد الضخمة أو الدقيقة جداً كالمسافات الفلكية أو أحجام الذرات. نكتب العدد a×10ⁿ حيث a بين 1 و10: مثلاً 4000 = 4×10³ و0.004 = 4×10⁻³. الأس الموجب للأعداد الكبيرة والسالب لما هو أصغر من واحد.",
    "en": "We use it for very large or very small numbers, like astronomical distances or atomic sizes. We write the number as a×10ⁿ with a between 1 and 10: for example 4000 = 4×10³ and 0.004 = 4×10⁻³. A positive exponent marks large numbers, a negative one marks numbers below one."
  },
  {
    "keys": [
      "كيف أحول من الترميز العلمي",
      "how do I convert from scientific notation",
      "تحويل الترميز العلمي"
    ],
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/6-7-integer-exponents-and-scientific-notation",
    "ar": "انظر إلى الأس: حرك الفاصلة يميناً بعدد الأس إن كان موجباً ويساراً إن كان سالباً. فـ 9.12×10⁴ تصبح 91200 و9.12×10⁻⁴ تصبح 0.000912. املأ الخانات الفارغة بالأصفار.",
    "en": "Look at the exponent: move the decimal point right by the exponent if positive and left if negative. So 9.12×10⁴ becomes 91200 and 9.12×10⁻⁴ becomes 0.000912. Fill empty places with zeros."
  },
  {
    "keys": [
      "ما الفرق بين المتتامة والمتكاملة",
      "what is the difference between complementary and supplementary angles",
      "زوايا متتامة ومتكاملة"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem",
    "ar": "المتتامة زاويتان مجموعهما 90 درجة مثل 50 و40، والمتكاملة زاويتان مجموعهما 180 درجة مثل 120 و60. سهل التذكر: التتمة تكمل الزاوية القائمة، والتكامل يكمل الخط المستقيم. لا يشترط أن تكون الزاويتان متجاورتين؛ الشرط هو المجموع فقط.",
    "en": "Complementary angles sum to 90 degrees like 50 and 40; supplementary angles sum to 180 degrees like 120 and 60. An easy memory aid: complements complete a right angle, supplements complete a straight line. The angles need not be adjacent; only the sum matters."
  },
  {
    "keys": [
      "كيف أجد مكملة زاوية",
      "how do I find the supplement of an angle",
      "ايجاد المكملة"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem",
    "ar": "اطرح قياس الزاوية من 180 درجة. مكملة 65 درجة هي 180 − 65 = 115 درجة. وللتتمة اطرح من 90: تتمة 65 هي 25 درجة. تحقق دائماً بجمع الزوج لترى المجموع الصحيح.",
    "en": "Subtract the angle measure from 180 degrees. The supplement of 65 degrees is 180 − 65 = 115 degrees. For the complement subtract from 90: the complement of 65 is 25 degrees. Always check by adding the pair to see the correct sum."
  },
  {
    "keys": [
      "ما الفرق بين المحيط والمساحة",
      "what is the difference between perimeter and area",
      "المحيط والمساحة"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/9-4-use-properties-of-rectangles-triangles-and-trapezoids",
    "ar": "المحيط مسافة الحد حول الشكل ويقاس بوحدة طول، والمساحة مقدار ما يغطيه الشكل وتقاس بوحدة مربعة. للمستطيل: المحيط 2L + 2W والمساحة L×W. مثال عملي: السياج يحسب بالمحيط والبلاط بالمساحة.",
    "en": "Perimeter is the distance of the boundary around a shape, measured in a length unit; area is how much the shape covers, measured in square units. For a rectangle: perimeter 2L + 2W and area L×W. A practical example: fencing uses perimeter while tiling uses area."
  },
  {
    "keys": [
      "كيف أحسب مساحة مستطيل",
      "how do I find the area of a rectangle",
      "حساب المساحة"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/9-4-use-properties-of-rectangles-triangles-and-trapezoids",
    "ar": "اضرب الطول في العرض: مستطيل 32×20 متراً مساحته 640 متراً مربعاً. تخيل ملء الشكل بمربعات ضلعها وحدة واحدة؛ عددها هو المساحة. لهذا تكون الوحدة مربعة وليست مفردة.",
    "en": "Multiply length by width: a 32 by 20 meter rectangle has area 640 square meters. Imagine filling the shape with unit squares; their count is the area. That is why the unit is square rather than plain."
  },
  {
    "keys": [
      "كيف أحسب الميل من نقطتين",
      "how do I find slope from two points",
      "حساب الميل"
    ],
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/4-4-understand-slope-of-a-line",
    "ar": "الميل هو فرق إحداثيي y مقسوماً على فرق إحداثيي x: m = (y2 − y1)/(x2 − x1). الصاعد يميناً موجب والنازل سالب والأفقي صفر. انتبه لترتيب الطرح نفسه في البسط والمقام حتى لا يتغير الإشارة.",
    "en": "Slope is the difference of the y-coordinates divided by the difference of the x-coordinates: m = (y2 − y1)/(x2 − x1). Rising to the right is positive, falling is negative, horizontal is zero. Keep the subtraction order the same in numerator and denominator so the sign stays correct."
  },
  {
    "keys": [
      "هل الخط الرأسي له ميل",
      "does a vertical line have a slope",
      "ميل الخط الراسي"
    ],
    "src": "https://openstax.org/books/elementary-algebra-2e/pages/4-4-understand-slope-of-a-line",
    "ar": "ميله غير معرف، لأن التغير الأفقي صفر فيصبح المقام صفراً والقسمة على الصفر غير معرفة. الخط الأفقي بالمقابل ميله صفر لأن الارتفاع لا يتغير. هذا فرق مهم: صفر ليس كغير المعرف.",
    "en": "Its slope is undefined, because the horizontal change is zero, making the denominator zero and division by zero undefined. A horizontal line, by contrast, has slope zero since the rise does not change. This distinction matters: zero is not the same as undefined."
  },
  {
    "keys": [
      "هل 1 عدد أولي",
      "is 1 a prime number",
      "هل الواحد اولي"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/2-4-find-multiples-and-factors",
    "ar": "لا. العدد الأولي يجب أن يكون أكبر من واحد وله عاملان فقط: 1 ونفسه. العدد 1 له عامل واحد فقط، فهو ليس أولياً ولا مؤلفاً. أصغر عدد أولي هو 2، وهو الأولي الزوجي الوحيد.",
    "en": "No. A prime must be greater than 1 and have exactly two factors: 1 and itself. The number 1 has only one factor, so it is neither prime nor composite. The smallest prime is 2, the only even prime."
  },
  {
    "keys": [
      "كيف أستخدم شجرة العوامل",
      "how do I use a factor tree",
      "شجرة العوامل"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/2-5-prime-factorization-and-the-least-common-multiple",
    "ar": "اكتب العدد ثم فرعه إلى عاملين، وكرر مع كل عامل غير أولي حتى تنتهي الفروع بأعداد أولية. مثال: 36 تتفرع 4×9 ثم 4 إلى 2×2 و9 إلى 3×3، فيكون التحليل 2×2×3×3. الناتج النهائي لا يتغير مهما بدأت بزوج عوامل مختلف.",
    "en": "Write the number, branch it into two factors, and repeat for any non-prime factor until every branch ends in a prime. Example: 36 branches to 4×9, then 4 to 2×2 and 9 to 3×3, giving 2×2×3×3. The final factorization is the same whatever factor pair you start with."
  },
  {
    "keys": [
      "متى أستخدم نظرية فيثاغورس",
      "when do I use the pythagorean theorem",
      "استخدام فيثاغورس"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem",
    "ar": "استخدمها فقط في المثلث القائم لإيجاد ضلع مجهول: a² + b² = c² حيث c الوتر. إن عرفت الساقين 3 و4 فالوتر جذر 25 أي 5. وإن عرفت وتراً وساقاً اطرح المربعين ثم خذ الجذر. لا تنطبق على المثلثات غير القائمة.",
    "en": "Use it only in a right triangle to find a missing side: a² + b² = c² where c is the hypotenuse. Given legs 3 and 4, the hypotenuse is the square root of 25, which is 5. Given the hypotenuse and one leg, subtract the squares and take the root. It does not apply to non-right triangles."
  },
  {
    "keys": [
      "ما هو الوتر",
      "what is the hypotenuse",
      "تعريف الوتر"
    ],
    "src": "https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem",
    "ar": "الوتر هو الضلع المقابل للزاوية القائمة في المثلث القائم، وهو دائماً أطول أضلاعه. الضلعان الآخران يسميان الساقين وهما اللذان يصنعان الزاوية القائمة. في نظرية فيثاغورس يكون مربع الوتر هو c² في الطرف المفرد.",
    "en": "The hypotenuse is the side opposite the right angle in a right triangle, and it is always the longest side. The other two sides are the legs, the ones forming the right angle. In the Pythagorean Theorem, its square is the lone c² side of the equation."
  }
,
  {
    "keys": [
      "لماذا يتوقف الجسم المنزلق",
      "لماذا تتوقف الكرة",
      "why does a sliding object stop",
      "why do things stop moving"
    ],
    "src": "https://openstax.org/books/college-physics-2e/pages/4-2-newtons-first-law-of-motion-inertia",
    "ar": "يتوقف الجسم المنزلق بسبب قوة الاحتكاك، وهي قوة خارجية تعمل عكس اتجاه حركته. حسب قانون نيوتن الأول، لو انعدم الاحتكاك تماماً لاستمر الجسم بالسرعة نفسها في خط مستقيم. لذلك يسير قرص الهوكي الهوائي مسافة أطول بكثير عندما يعمل الهواء ويقل الاحتكاك.",
    "en": "A sliding object stops because of friction, an external force that acts against its motion. By Newton's first law, if friction were completely removed the object would keep going at the same speed in a straight line. That is why an air hockey puck travels much farther when the air is on and friction is low."
  },
  {
    "keys": [
      "ما الفرق بين الكتلة والوزن",
      "mass vs weight",
      "difference between mass and weight",
      "what is inertia",
      "ما هو القصور الذاتي"
    ],
    "src": "https://openstax.org/books/college-physics-2e/pages/4-2-newtons-first-law-of-motion-inertia",
    "ar": "القصور الذاتي هو ميل الجسم للبقاء على حالة حركته، وتقيسه الكتلة. الكتلة هي كمية المادة في الجسم ولا تتغير بتغير المكان، فهي نفسها على الأرض وعلى القمر. أما الوزن فيتغير مع الجاذبية، وهذه نقطة فرق مهمة بين المفهومين.",
    "en": "Inertia is a body's tendency to keep its state of motion, and mass measures it. Mass is the amount of matter in an object and does not change with location: it is the same on Earth and on the Moon. Weight, on the other hand, changes with gravity, which is the key difference between the two ideas."
  },
  {
    "keys": [
      "لماذا الصندوق صعب البدء وأسهل بعد الحركة",
      "الاحتكاك الساكن والحركي",
      "static vs kinetic friction",
      "why is it harder to start moving a heavy box"
    ],
    "src": "https://openstax.org/books/college-physics-2e/pages/5-1-friction",
    "ar": "الاحتكاك الساكن يستجيب لدفعتك فيزيد ليساويها حتى حد معين، وعندها ينزلق الجسم. بعد أن يتحرك يصبح الاحتكاك الحركي عادةً أقل من الحد الأقصى للاحتكاك الساكن، لأن نقاط التلامس بين السطحين تقل. لذلك يكون إبقاء الصندوق متحركاً أسهل من تحريكه أول مرة.",
    "en": "Static friction responds to your push, rising to match it up to a limit, and then the object slips. Once it is moving, kinetic friction is usually smaller than the maximum static friction because there are fewer points of contact. That is why keeping a crate moving is easier than getting it started."
  },
  {
    "keys": [
      "هل الاحتكاك مفيد",
      "فائدة الاحتكاك",
      "is friction useful",
      "why do we need friction",
      "المشي على الجليد"
    ],
    "src": "https://openstax.org/books/college-physics-2e/pages/5-1-friction",
    "ar": "نعم، الاحتكاك يقاوم الحركة لكنه يسمح لنا أيضاً بالتحرك: لهذا نكاد لا نستطيع المشي على الجليد. وهو يعتمد على نوع المادتين، فالحذاء ذو النعل المطاطي ينزلق أقل من النعل الجلدي كما يذكر الكتاب.",
    "en": "Yes. Friction opposes motion, but it also lets us move: that is why walking on ice is so hard. It depends on the materials involved, so rubber-soled shoes slip less than leather-soled ones, as the textbook notes."
  },
  {
    "keys": [
      "ما هي كمية الحركة",
      "ما هو الزخم",
      "what is momentum",
      "what is linear momentum",
      "p = mv"
    ],
    "src": "https://openstax.org/books/college-physics-2e/pages/8-1-linear-momentum-and-force",
    "ar": "كمية الحركة هي كتلة الجسم مضروبة في سرعته: p = m·v. وهي كمية متجهة في اتجاه السرعة، ووحدتها كجم·م/ث. لاعب كتلته 110 كجم يجري بسرعة 8 م/ث تساوي كمية حركته 880 كجم·م/ث، أكبر بنحو 85 مرة من كرة سريعة خفيفة.",
    "en": "Momentum is an object's mass times its velocity: p = m·v. It is a vector pointing along the velocity, with unit kg·m/s. A 110 kg player running at 8 m/s has 880 kg·m/s of momentum, about 85 times that of a fast, light football."
  },
  {
    "keys": [
      "علاقة القوة بكمية الحركة",
      "قانون نيوتن الثاني وكمية الحركة",
      "force and momentum",
      "newton second law momentum",
      "F = delta p over delta t"
    ],
    "src": "https://openstax.org/books/college-physics-2e/pages/8-1-linear-momentum-and-force",
    "ar": "قانون نيوتن الثاني بصيغته الأعم: القوة الصافية تساوي التغير في كمية الحركة مقسوماً على الزمن، Fnet = Δp/Δt. وإذا كانت الكتلة ثابتة يتحول إلى الصيغة المألوفة Fnet = m·a.",
    "en": "Newton's second law in its most general form: net force equals the change in momentum divided by the time over which it changes, Fnet = Δp/Δt. When mass is constant this becomes the familiar Fnet = m·a."
  },
  {
    "keys": [
      "ما هو المول",
      "ما هو عدد افوجادرو",
      "what is a mole",
      "what is avogadro number",
      "avogadro"
    ],
    "src": "https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept",
    "ar": "المول وحدة لكمية المادة تحتوي على 6.02214076 × 10²³ كياناً محدداً بالضبط (مثل الذرات أو الجزيئات أو الوحدات الصيغية)، وهذا العدد هو ثابت أفوجادرو. فكرته مثل الدستة: اسم لعدد معين، لكنه كبير جداً حتى يناسب الذرات الصغيرة.",
    "en": "A mole is a unit for an amount of substance containing exactly 6.02214076 × 10²³ specified entities (such as atoms, molecules or formula units), a number called Avogadro's constant. The idea is like a dozen: a name for a fixed count, just a very large one to suit tiny atoms."
  },
  {
    "keys": [
      "كيف أحسب الكتلة المولية",
      "الكتلة المولية",
      "how to calculate molar mass",
      "molar mass of nacl",
      "formula mass"
    ],
    "src": "https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept",
    "ar": "اجمع الكتل الذرية لكل الذرات في الصيغة. مثلاً NaCl كتلته الصيغية 58.44 amu، فكتلته المولية 58.44 جم/مول. الكتلة المولية تساوي عددياً الكتلة الصيغية بوحدة amu، لكن وحدتها جم/مول.",
    "en": "Add up the average atomic masses of all atoms in the formula. For example, NaCl has a formula mass of 58.44 amu, so its molar mass is 58.44 g/mol. Molar mass equals the formula mass in amu numerically, but its unit is g/mol."
  },
  {
    "keys": [
      "ما هي النظائر",
      "ما معنى نظير",
      "what are isotopes",
      "define isotope",
      "isotopes of magnesium"
    ],
    "src": "https://openstax.org/books/chemistry-2e/pages/2-3-atomic-structure-and-symbolism",
    "ar": "النظائر ذرات للعنصر نفسه لها العدد الذري نفسه، أي عدد البروتونات نفسه، لكن عدد النيوترونات يختلف فيختلف العدد الكتلي. مثال من الكتاب: المغنيسيوم له ثلاثة نظائر أعدادها الكتلية 24 و25 و26 وكلها عددها الذري 12.",
    "en": "Isotopes are atoms of the same element with the same atomic number, meaning the same number of protons, but different numbers of neutrons and so different mass numbers. A textbook example: magnesium has three isotopes with mass numbers 24, 25 and 26, all with atomic number 12."
  },
  {
    "keys": [
      "كيف أحسب عدد النيوترونات",
      "عدد النيوترونات",
      "how many neutrons",
      "how to find number of neutrons",
      "mass number minus atomic number"
    ],
    "src": "https://openstax.org/books/chemistry-2e/pages/2-3-atomic-structure-and-symbolism",
    "ar": "عدد النيوترونات = العدد الكتلي A ناقص العدد الذري Z. مثال: اليود العدد الذري 53 والعدد الكتلي 127، فنيوتروناته 127 − 53 = 74.",
    "en": "Number of neutrons = mass number A minus atomic number Z. Example: iodine has atomic number 53 and mass number 127, so it has 127 − 53 = 74 neutrons."
  },
  {
    "keys": [
      "ما هي سرعة التفاعل",
      "كيف تقاس سرعة التفاعل",
      "what is reaction rate",
      "how is reaction rate measured",
      "rate of reaction"
    ],
    "src": "https://openstax.org/books/chemistry-2e/pages/12-1-chemical-reaction-rates",
    "ar": "سرعة التفاعل هي التغير في كمية متفاعل أو ناتج في وحدة الزمن. في المحاليل نستخدم التركيز: السرعة = −Δ[المتفاعل]/Δt. ويمكن قياسها عملياً بتتبع خاصية تتغير مع الزمن، مثل الحجم أو الضغط للغازات، أو امتصاص الضوء للمواد الملونة.",
    "en": "Reaction rate is the change in the amount of a reactant or product per unit time. In solutions we use concentration: rate = −Δ[reactant]/Δt. In practice it is measured by following a property that changes over time, such as volume or pressure for gases, or light absorption for coloured substances."
  },
  {
    "keys": [
      "ما الفرق بين السرعة المتوسطة واللحظية",
      "السرعة اللحظية",
      "average vs instantaneous rate",
      "initial rate",
      "instantaneous rate"
    ],
    "src": "https://openstax.org/books/chemistry-2e/pages/12-1-chemical-reaction-rates",
    "ar": "السرعة المتوسطة تحسب على فترة زمنية كاملة، أما اللحظية فهي سرعة التفاعل عند لحظة واحدة وتساوي القيمة السالبة لميل المماس لمنحنى تركيز هذا المتفاعل مع الزمن عند تلك اللحظة. والسرعة الابتدائية هي اللحظية عند زمن الصفر عندما يبدأ التفاعل.",
    "en": "The average rate is calculated over a whole time interval, while the instantaneous rate is the rate at a single moment, equal to the negative slope of the tangent to this reactant concentration-time curve at that moment. The initial rate is the instantaneous rate at time zero when the reaction starts."
  },
  {
    "keys": [
      "ما هي مراحل الانقسام المتساوي",
      "مراحل الميتوزي",
      "stages of mitosis",
      "phases of mitosis",
      "prophase metaphase anaphase telophase"
    ],
    "src": "https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle",
    "ar": "مراحل الانقسام المتساوي بالترتيب: التمهيدي، ثم التمهيدي المتأخر، ثم الاستوائي، ثم الانفصالي، ثم النهائي. في الاستوائي تصطف الكروموسومات في وسط الخلية، وفي النهائي تصل إلى القطبين وتتكون أغلفة نووية جديدة. بعدها يحدث انقسام السيتوبلازم.",
    "en": "The stages of mitosis in order are prophase, prometaphase, metaphase, anaphase and telophase. In metaphase chromosomes line up in the middle of the cell, and in telophase they reach the poles and new nuclear envelopes form. Cytokinesis then divides the cytoplasm."
  },
  {
    "keys": [
      "ما هو الطور البيني",
      "ماذا يحدث في الطور البيني",
      "what is interphase",
      "g1 s g2 phases"
    ],
    "src": "https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle",
    "ar": "الطور البيني هو الجزء من دورة الخلية الذي تنمو فيه الخلية وتستعد للانقسام. له ثلاث مراحل: G1 نمو وتجميع للمكونات والطاقة، وS ينسخ فيها DNA، وG2 استعداد أخير للانقسام.",
    "en": "Interphase is the part of the cell cycle where the cell grows and prepares to divide. It has three stages: G1 for growth and gathering building blocks and energy, S where DNA is replicated, and G2 for final preparation for division."
  },
  {
    "keys": [
      "ما هي الخاصية الاسموزية",
      "ما هي الأسموزية",
      "what is osmosis",
      "define osmosis"
    ],
    "src": "https://openstax.org/books/biology-2e/pages/5-2-passive-transport",
    "ar": "الأسموزية انتقال الماء الحر عبر غشاء شبه نافذ وفق تدرج تركيزه، وهي حالة خاصة من الانتشار. الماء ينتقل من منطقة فيها ماء حر أكثر إلى منطقة فيها ماء حر أقل، أي نحو الجهة التي فيها مذابات أكثر. والغشاء يحد من انتشار المذابات.",
    "en": "Osmosis is the movement of free water through a semipermeable membrane according to its concentration gradient, and it is a special case of diffusion. Water moves from where there is more free water to where there is less, which, for solutes unable to cross this membrane under these conditions, means toward the side with more solutes. The membrane limits the diffusion of the solutes."
  },
  {
    "keys": [
      "ما الفرق بين هيبوتوني وهيبرتوني",
      "محلول هيبوتوني",
      "hypotonic hypertonic isotonic",
      "difference between hypotonic and hypertonic"
    ],
    "src": "https://openstax.org/books/biology-2e/pages/5-2-passive-transport",
    "ar": "هذه المصطلحات تقارن أسموزية السائل الخارجي بأسموزية الخلية. هيبوتوني: السائل الخارجي أقل أسموزية فيدخل الماء إلى الخلية. هيبرتوني: أعلى أسموزية فيخرج الماء منها. أيزوتوني: متساويان.",
    "en": "These terms compare the osmolarity of the outside fluid with that of the cell. Hypotonic: the outside fluid has lower osmolarity, so water enters the cell. Hypertonic: it is higher, so water leaves the cell. Isotonic: they are equal."
  },
  {
    "keys": [
      "ما هو الانقسام الاختزالي",
      "ما هو الميوزي",
      "what is meiosis",
      "meiosis definition"
    ],
    "src": "https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis",
    "ar": "الانقسام الاختزالي انقسام نووي يكوّن خلايا أحادية المجموعة من خلية ثنائية المجموعة. فيه نسخ واحد للكروموسومات يتبعه انقسامان، وينتج أربع خلايا بنات. وهو ضروري كي لا يتضاعف عدد الكروموسومات في كل جيل بعد الإخصاب.",
    "en": "Meiosis is a nuclear division that forms haploid cells from a diploid cell. It has one round of chromosome replication followed by two divisions, and produces four daughter cells. It is needed so chromosome number does not double each generation after fertilization."
  },
  {
    "keys": [
      "ما الفرق بين الميتوزي والميوزي",
      "الفرق بين الانقسام المتساوي والاختزالي",
      "mitosis vs meiosis",
      "difference between mitosis and meiosis"
    ],
    "src": "https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis",
    "ar": "الانقسام المتساوي ينتج خليتين بنتين متطابقتين وراثياً مع الخلية الأم وبالعدد نفسه من المجموعات. أما الاختزالي فيبدأ بخلية ثنائية المجموعة وينتج أربع خلايا أحادية المجموعة، ويحدث فيه تزاوج للكروموسومات المتماثلة وعبور، وهذا يخلق تنوعاً وراثياً.",
    "en": "Mitosis produces two daughter cells genetically identical to the parent, at the same ploidy level. Meiosis starts with a diploid cell and produces four haploid cells, with pairing of homologous chromosomes and crossing over, which creates genetic variation."
  },
  {
    "keys": [
      "ما هو الطيف الكهرومغناطيسي",
      "ترتيب الموجات الكهرومغناطيسية",
      "what is the electromagnetic spectrum",
      "em spectrum order",
      "types of electromagnetic waves"
    ],
    "src": "https://openstax.org/books/college-physics-2e/pages/24-3-the-electromagnetic-spectrum",
    "ar": "هو تصنيف الموجات الكهرومغناطيسية حسب تردداتها وأطوالها الموجية: الراديو، الميكروويف، تحت الحمراء، الضوء المرئي، فوق البنفسجية، الأشعة السينية، ثم أشعة غاما، من التردد الأقل إلى الأعلى. كلها تسير في الفراغ بسرعة الضوء، وكلما زاد التردد قصر الطول الموجي.",
    "en": "It is the classification of electromagnetic waves by frequency and wavelength: radio, microwave, infrared, visible light, ultraviolet, X-rays and gamma rays, from lowest frequency to highest. All travel in vacuum at the speed of light, and the higher the frequency, the shorter the wavelength."
  },
  {
    "keys": [
      "ما الفرق بين الاشعة السينية واشعة غاما",
      "اشعة غاما",
      "x-rays vs gamma rays",
      "what are gamma rays"
    ],
    "src": "https://openstax.org/books/college-physics-2e/pages/24-3-the-electromagnetic-spectrum",
    "ar": "أشعة غاما لها الخصائص نفسها للأشعة السينية بالتردد نفسه، والفرق في المصدر فقط. وعند الترددات الأعلى تصبح أشعة غاما أكثر نفاذية وأشد ضرراً بالأنسجة الحية، لذلك يلزم التعامل معها بحذر شديد.",
    "en": "Gamma rays have characteristics identical to X-rays of the same frequency; they differ only in source. At higher frequencies gamma rays are more penetrating and more damaging to living tissue, so they must be handled with great care."
  }
,
  {
    "keys": [
      "كيف أحسب عزم القوة",
      "ما هو عزم القوة",
      "how to calculate torque",
      "torque formula"
    ],
    "ar": "مقدار العزم = القوة × ذراعها العمودي: τ = F·r⊥. الذراع هو أقصر مسافة من نقطة الدوران إلى خط عمل القوة، وليس دائماً طول الجسم كله. مثال: 40 نيوتن × 0.8 متر = 32 نيوتن·متر.",
    "en": "Torque magnitude is force times the perpendicular lever arm: τ = F·r⊥. The arm is the shortest distance from the pivot to the force line, not necessarily the whole object length. For example, 40 N × 0.8 m = 32 N·m.",
    "src": "https://openstax.org/books/college-physics-2e/pages/9-2-the-second-condition-for-equilibrium"
  },
  {
    "keys": [
      "لماذا مقبض الباب بعيد عن المفصلة",
      "door handle hinge torque",
      "why is a door handle far from the hinge"
    ],
    "ar": "كلما زاد ذراع القوة العمودي زاد العزم لنفس القوة. لذلك يعطي الدفع عند المقبض البعيد عن المفصلة تأثيراً دورانياً أكبر من الدفع قرب المفصلة.",
    "en": "A longer perpendicular lever arm gives more torque for the same force. Pushing at the handle far from the hinge therefore gives more turning effect than pushing near the hinge.",
    "src": "https://openstax.org/books/college-physics-2e/pages/9-2-the-second-condition-for-equilibrium"
  },
  {
    "keys": [
      "كيف أحسب الكثافة",
      "ما هي الكثافة",
      "how to calculate density",
      "density formula"
    ],
    "ar": "اقسم الكتلة على الحجم: ρ = m/V. جسم كتلته 200 جم وحجمه 100 سم³ كثافته 2 جم/سم³. احتفظ بوحدات متسقة، ولا تخلط الجرام بالكيلوجرام دون تحويل.",
    "en": "Divide mass by volume: ρ = m/V. An object of mass 200 g and volume 100 cm³ has density 2 g/cm³. Keep consistent units rather than mixing grams and kilograms without converting.",
    "src": "https://openstax.org/books/college-physics-2e/pages/11-2-density"
  },
  {
    "keys": [
      "هل الجسم الأكبر أكثف",
      "bigger object denser",
      "is a bigger object always denser"
    ],
    "ar": "ليس بالضرورة. الكثافة نسبة الكتلة إلى الحجم، وليست الحجم وحده. كيلوجرام الريش يشغل حجماً أكبر من كيلوجرام الطوب، مع أن الكتلة واحدة، لأن كثافة الريش أقل.",
    "en": "Not necessarily. Density is the ratio of mass to volume, not volume alone. A kilogram of feathers occupies more space than a kilogram of bricks at the same mass because the feathers have lower density.",
    "src": "https://openstax.org/books/college-physics-2e/pages/11-2-density"
  },
  {
    "keys": [
      "كيف يعمل المحفز",
      "ما هو المحفز",
      "how does a catalyst work",
      "what is a catalyst"
    ],
    "ar": "يوفر المحفز مسار تفاعل بديلاً بطاقة تنشيط أقل، فيزيد سرعة التفاعل. قد يدخل في بعض الخطوات لكنه يتجدد، فلا يستهلك في المحصلة. لا يغير طاقتي البداية والنهاية للتفاعل نفسه.",
    "en": "A catalyst provides an alternative pathway with lower activation energy, increasing reaction rate. It can participate in steps but is regenerated and is not consumed overall. It does not change the starting and ending energies of the same reaction.",
    "src": "https://openstax.org/books/chemistry-2e/pages/12-7-catalysis"
  },
  {
    "keys": [
      "المحفز المتجانس وغير المتجانس",
      "homogeneous vs heterogeneous catalyst",
      "types of catalyst"
    ],
    "ar": "المحفز المتجانس في الطور نفسه مع المتفاعلات. غير المتجانس في طور مختلف، مثل سطح صلب تتفاعل عليه مواد غازية أو سائلة. المهم أن المحفز يتجدد في نهاية المسار.",
    "en": "A homogeneous catalyst is in the same phase as the reactants. A heterogeneous catalyst is in a different phase, such as a solid surface where gases or liquids react. In either case the catalyst is regenerated.",
    "src": "https://openstax.org/books/chemistry-2e/pages/12-7-catalysis"
  },
  {
    "keys": [
      "هل يتوقف التفاعل عند الاتزان",
      "does reaction stop at equilibrium",
      "what is dynamic equilibrium"
    ],
    "ar": "لا. يستمر التفاعلان الأمامي والعكسي بالسرعة نفسها، لذلك لا تتغير التراكيز مع الزمن تحت الظروف نفسها. كلمة ديناميكي تعني أن التحول مستمر رغم ثبات المقادير الكلية.",
    "en": "No. The forward and reverse reactions continue at equal rates, so concentrations do not change with time under unchanged conditions. Dynamic means conversion continues even though the overall amounts stay steady.",
    "src": "https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria"
  },
  {
    "keys": [
      "هل التراكيز متساوية عند الاتزان",
      "equal concentrations at equilibrium",
      "are equilibrium concentrations equal"
    ],
    "ar": "ليس بالضرورة. المتساوي هو سرعتا الاتجاهين، لا التراكيز. قد يوجد عند الاتزان نواتج أكثر أو متفاعلات أكثر أو كميات ملحوظة من الاثنين.",
    "en": "Not necessarily. The rates are equal, not the concentrations. At equilibrium there may be mostly products, mostly reactants or appreciable amounts of both.",
    "src": "https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria"
  },
  {
    "keys": [
      "كيف تعمل مضخة الصوديوم والبوتاسيوم",
      "sodium potassium pump ratio",
      "how does the sodium potassium pump work"
    ],
    "ar": "تعتمد المضخة على ATP وتنقل 3 أيونات Na+ إلى خارج الخلية مقابل 2 من K+ إلى الداخل. هذا مثال على النقل النشط الأولي ويساعد في الحفاظ على التدرج الكهروكيميائي.",
    "en": "The pump uses ATP and moves 3 Na+ ions out of the cell for every 2 K+ ions moved in. It is primary active transport and helps maintain the electrochemical gradient.",
    "src": "https://openstax.org/books/biology-2e/pages/5-3-active-transport"
  },
  {
    "keys": [
      "النقل النشط الأولي والثانوي",
      "primary vs secondary active transport",
      "does active transport always directly use atp"
    ],
    "ar": "الأولي يعتمد مباشرة على ATP. الثانوي يستخدم الطاقة المخزنة في تدرج كهروكيميائي صنعه الأولي، ولا يحتاج ATP مباشرة عند الناقل الثانوي. كلاهما يعتمد في النهاية على مصدر للطاقة.",
    "en": "Primary transport depends directly on ATP. Secondary transport uses energy stored in an electrochemical gradient established by primary transport, without ATP directly at the secondary carrier. Both ultimately depend on an energy source.",
    "src": "https://openstax.org/books/biology-2e/pages/5-3-active-transport"
  },
  {
    "keys": [
      "كيف يصعد الماء في الشجرة",
      "how does water rise in trees",
      "cohesion tension theory"
    ],
    "ar": "التبخر من الورقة يولد شدّاً يسحب الماء في الخشب من الجذور. تماسك جزيئات الماء والتصاقها بالجدران يساعدان في بقاء عمود الماء متصلاً. تسمى هذه فكرة التماسك والشد.",
    "en": "Evaporation at leaves creates tension that pulls water up xylem from the roots. Cohesion between water molecules and adhesion to walls help keep the column intact. This is the cohesion-tension explanation.",
    "src": "https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants"
  },
  {
    "keys": [
      "ما دور الثغور في النتح",
      "stomata and transpiration",
      "guard cells function"
    ],
    "ar": "الثغور فتحات تنظم الخلايا الحارسة فتحها وغلقها. عند فتحها تدخل غازات لازمة لوظائف الورقة، لكن بخار الماء يخرج أيضاً. لذلك يوازن النبات بين تبادل الغازات وتقليل فقد الماء.",
    "en": "Stomata are pores whose opening and closing are regulated by guard cells. Opening them allows gas exchange for leaf functions but also lets water vapour escape. Plants balance gas exchange against water loss.",
    "src": "https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants"
  },
  {
    "keys": [
      "لماذا تتغير أطوار القمر",
      "ما سبب أطوار القمر",
      "why does the moon have phases",
      "cause of lunar phases"
    ],
    "ar": "لأننا نرى نسباً مختلفة من نصف القمر المضاء بالشمس أثناء دورانه حول الأرض. الأطوار المعتادة ليست ظل الأرض. عند المحاق يتجه النصف المضيء بعيداً عنا، وعند البدر يتجه نحونا.",
    "en": "We see different fractions of the Moon's sunlit half as it orbits Earth. Ordinary phases are not Earth's shadow. At new moon the lit half faces away from us, and at full moon it faces toward us.",
    "src": "https://openstax.org/books/astronomy-2e/pages/4-5-phases-and-motions-of-the-moon"
  },
  {
    "keys": [
      "لماذا شهر القمر 29.5 وليس 27.3",
      "lunar month 29.5 vs 27.3",
      "synodic vs sidereal month"
    ],
    "ar": "الدورة بالنسبة للنجوم نحو 27.3 يوماً، لكن الأرض تتحرك حول الشمس خلال هذه المدة. يحتاج القمر إلى حركة إضافية لاستعادة الوضع نفسه بالنسبة للشمس والأرض، فتتكرر الأطوار بعد نحو 29.5 يوماً.",
    "en": "An orbit relative to the stars takes about 27.3 days, but Earth moves around the Sun during that time. The Moon must travel farther to regain the same Sun-Earth geometry, so phases repeat after about 29.5 days.",
    "src": "https://openstax.org/books/astronomy-2e/pages/4-5-phases-and-motions-of-the-moon"
  }
,
{
  "keys": [
    "لماذا الخلية صغيرة",
    "why are cells so small"
  ],
  "src": "https://en.wikipedia.org/wiki/Cell_(biology)",
  "ar": "قد تتساءل: لماذا لا نكون خلية واحدة ضخمة بدل مليارات الخلايا الصغيرة؟ السبب هندسي: عندما تكبر الخلية يزداد حجمها أسرع بكثير من مساحة غشائها، والغشاء هو بوابة الغذاء والأكسجين والفضلات. لو صارت الخلية كبيرة جداً لما كفاها سطحها لتغذية داخلها. لهذا تكبر الكائنات بزيادة عدد خلاياها لا حجمها، وجسمك بدأ خلية واحدة ثم صار تريليونات الخلايا المتعاونة.",
  "en": "You might wonder: why are we not one huge cell instead of billions of tiny ones? The reason is geometry: as a cell grows, its volume increases much faster than its membrane area, and the membrane is the gate for food, oxygen and waste. A cell that grows too large cannot feed its inside through its surface. That is why organisms grow by adding more cells, not bigger ones, and your body started as one cell and became trillions of cooperating cells."
},
{
  "keys": [
    "هل الدي ان ايه مثل الخطة الكاملة",
    "is dna a blueprint"
  ],
  "src": "https://en.wikipedia.org/wiki/DNA",
  "ar": "يشبه الناس الحمض النووي بـ\"مخطط\" الجسم، لكن التشبيه ناقص: المخطط يحدد كل تفصيلة مسبقاً، أما الجينات فأشبه بوصفة تتفاعل مع البيئة. نفس الجينات قد تُنتج نتائج مختلفة حسب التغذية والحرارة والتجارب، وبعض الجينات تعمل أو تصمت حسب إشارات من حولها. فالحمض النووي دليل تعليمات حي، وليس خريطة جامدة تقرر كل شيء مسبقاً.",
  "en": "People compare DNA to a body \"blueprint\", but the comparison falls short: a blueprint fixes every detail in advance, while genes are more like a recipe that interacts with the environment. The same genes can produce different results depending on nutrition, temperature and experiences, and some genes switch on or off by signals around them. DNA is a living instruction manual, not a rigid map that decides everything ahead of time."
},
{
  "keys": [
    "هل الذرة فراغ",
    "is the atom mostly empty"
  ],
  "src": "https://en.wikipedia.org/wiki/Atom",
  "ar": "صحيح أن نواة الذرة صغيرة جداً مقارنة بحجمها الكلي، لكن فكرة \"الذرة فراغ\" مضللة: الإلكترونات ليست كرات تدور في مدارات كوكبية، بل سحابة احتمالات كمومية تملأ الفراغ حول النواة بمجالات فعالة. لهذا لا تخترق الأشياء بعضها رغم هذا \"الفراغ\"؛ الطاولة صلبة لأن سحب الإلكترونات تتنافر، لا لأن المادة ممتلئة تماماً.",
  "en": "It is true that the nucleus is tiny compared to the whole atom, but the idea that \"the atom is empty\" is misleading: electrons are not balls orbiting like planets, but clouds of quantum probability that fill the space around the nucleus with effective fields. That is why solid objects do not pass through each other despite this \"emptiness\"; the table is solid because electron clouds repel, not because matter is completely full."
},
{
  "keys": [
    "هل القلب يتعب",
    "does the heart get tired",
    "لماذا لا تتعب عضلة القلب"
  ],
  "src": "https://en.wikipedia.org/wiki/Heart",
  "ar": "عضلة القلب تعمل بلا توقف من قبل ولادتك إلى آخر عمرك، فلماذا لا \"تتعب\" كعضلة ذراعك بعد تمرين؟ لأنها نسيج خاص: خلاياها مليئة بالميتوكوندريا (مصانع الطاقة) بنسبة أعلى بكثير من أي عضلة أخرى، وتصلها إمدادات دم غنية ومستمرة عبر الشرايين التاجية. كما أنها تعمل بإيقاع منتظم بلا انقباضات قصوى مرهقة. لكنها ليست خارقة؛ تحتاج نوماً وتغذية ورياضة معتدلة لتبقى قوية.",
  "en": "The heart muscle works nonstop from before birth to the end of life, so why does it not \"tire\" like your arm after exercise? Because it is special tissue: its cells are packed with far more mitochondria (energy factories) than any other muscle, and it receives a rich continuous blood supply through the coronary arteries. It also works in a steady rhythm without exhausting maximal contractions. But it is not superhuman; it needs sleep, nutrition and moderate exercise to stay strong."
},
{
  "keys": [
    "لماذا بلوتو ليس كوكبا",
    "why is pluto not a planet"
  ],
  "src": "https://en.wikipedia.org/wiki/Solar_System",
  "ar": "لم يُحذف بلوتو عقاباً، بل لأن تعريف \"الكوكب\" نضج. سنة 2006 اتفق الفلكيون على ثلاثة شروط: أن يدور حول الشمس، وأن يكون كروياً بفعل جاذبيته، وأن يكون قد \"نظّف\" مداره من الأجسام المماثلة. بلوتو يحقق الشرطين الأولين لكنه يشارك مداره آلاف الأجسام في حزام كايبر، فصنّف \"كوكباً قزماً\". الاكتشافات الجديدة أحياناً تجبرنا على تحديث التصنيفات القديمة، وهذه قوة العلم لا ضعفه.",
  "en": "Pluto was not removed as a punishment; the definition of \"planet\" matured. In 2006 astronomers agreed on three conditions: orbiting the Sun, being round under its own gravity, and having \"cleared\" its orbit of similar bodies. Pluto meets the first two but shares its orbit with thousands of Kuiper Belt objects, so it was reclassified as a \"dwarf planet\". New discoveries sometimes force us to update old categories, and that is the strength of science, not a weakness."
},
{
  "keys": [
    "لماذا الماء ضروري للحياة",
    "why is water essential for life"
  ],
  "src": "https://en.wikipedia.org/wiki/Properties_of_water",
  "ar": "لماذا يبحث العلماء عن الماء أولاً عند البحث عن حياة خارج الأرض؟ لأن الماء يجمع صفات نادرة: قطبيّته تجعله مذيباً ممتازاً ينقل المواد داخل الخلايا، وحرارته النوعية العالية تحمي الكائنات من تقلبات الحرارة، وتمدده عند التجمد يجعل الجليد يطفو فيعزل البحيرات ويحمي ما تحتها. قلّة من السوائل تجمع كل هذه الخصال معاً، فالماء ليس مجرد سائل، بل بيئة كاملة للكيمياء الحيوية.",
  "en": "Why do scientists look for water first when searching for life beyond Earth? Because water combines rare traits: its polarity makes it an excellent solvent that carries substances inside cells, its high specific heat protects organisms from temperature swings, and expanding when frozen makes ice float, insulating lakes and protecting what lives below. Few liquids combine all these properties; water is not just a liquid, it is a whole environment for biochemistry."
},
{
  "keys": [
    "متى استخدم الاستدعاء الذاتي",
    "when to use recursion"
  ],
  "src": "https://en.wikipedia.org/wiki/Recursion_(computer_science)",
  "ar": "الاستدعاء الذاتي ليس دائماً الحل الأفضل رغم أناقته. استخدمه عندما تكون المشكلة \"متشابهة ذاتياً\" بطبيعتها: شجرة ملفات داخلها مجلدات، أو قائمة تنقسم نصفين، أو متاهة تُحل فرعاً فرعاً. تجنّبه عندما تكون الحلقة البسيطة أوضح وأسرع، أو عندما تكون العمليات عميقة جداً فتمتلئ ذاكرة الاستدعاءات. القاعدة: إذا كان وصف المشكلة نفسه يحتوي \"ثم كرر نفس الشيء على الجزء الأصغر\"، فالاستدعاء الذاتي غالباً أنسب.",
  "en": "Recursion is not always the best solution despite its elegance. Use it when the problem is naturally \"self-similar\": a file tree containing folders, a list splitting in half, or a maze solved branch by branch. Avoid it when a simple loop is clearer and faster, or when calls go very deep and fill the call stack. The rule: if describing the problem itself contains \"then repeat the same thing on the smaller part\", recursion is usually the right fit."
},
{
  "keys": [
    "لماذا القمر لا يسقط على الارض",
    "why does the moon not fall",
    "لماذا لا يسقط القمر"
  ],
  "src": "https://en.wikipedia.org/wiki/Gravity",
  "ar": "القمر يسقط فعلاً نحو الأرض كل لحظة! لكنه يتحرك جانبياً بسرعة كبيرة جداً، فيسقط ويفوت الأرض في الوقت نفسه باستمرار، فتكون النتيجة مداراً. تخيّل أنك ترمي حجراً أفقياً: كلما رميته أسرع سقط أبعد. لو رميته بسرعة هائلة لسقط حول الأرض كلها دون أن يصيبها. هذه فكرة نيوتن العبقرية: المدار هو سقوط مستمر لا يصل أبداً.",
  "en": "The Moon really is falling toward Earth every moment! But it moves sideways so fast that it keeps falling and missing Earth at the same time, and the result is an orbit. Imagine throwing a stone horizontally: the faster you throw, the farther it falls. Throw it fast enough and it falls around the whole Earth without hitting it. This was Newton's brilliant idea: an orbit is a perpetual fall that never arrives."
},
{
  "keys": [
    "هل الشبكة العصبية تفهم",
    "do neural networks understand"
  ],
  "src": "https://en.wikipedia.org/wiki/Artificial_neural_network",
  "ar": "سؤال عميق! الشبكة العصبية الاصطناعية ممتازة في اكتشاف الأنماط الإحصائية: ترى آلاف صور القطط فتتعلم ملامح مشتركة. لكن هل \"تفهم\" ما القطة كما تفهمها أنت؟ لا دليل على ذلك؛ فهي قد تصنف صورة مشوّشة قليلاً خطأً بثقة عالية، أو تنخدع بأنماط عرضية في بيانات التدريب. لهذا نسميها \"تعلم آلي\" لا \"فهم آلي\"، ونراجع مخرجاتها خاصة في القرارات المهمة.",
  "en": "A deep question! An artificial neural network is excellent at finding statistical patterns: show it thousands of cat pictures and it learns shared features. But does it \"understand\" what a cat is the way you do? There is no evidence for that; it may confidently misclassify a slightly distorted image, or be fooled by accidental patterns in training data. That is why we call it \"machine learning\" not \"machine understanding\", and we review its outputs, especially for important decisions."
},
{
  "keys": [
    "هل كل البكتيريا ضارة",
    "are all bacteria harmful"
  ],
  "src": "https://en.wikipedia.org/wiki/Bacteria",
  "ar": "الانطباع الشائع أن البكتيريا = مرض، لكن الحقيقة أجمل بكثير: أقل من 1% من أنواع البكتيريا تسبب أمراضاً للبشر. الباقي إما غير ضار أو نافع بشكل أساسي: بكتيريا أمعائك تساعد على الهضم وصناعة فيتامينات، وبكتيريا التربة تعيد تدوير العناصر الغذائية، وبعضها يصنع الزبادي والجبن. بل إن جهازك المناعي \"يتدرّب\" جزئياً بفضل التعرض المعتدل للميكروبات النافعة.",
  "en": "The common impression is bacteria = disease, but the truth is far nicer: less than 1% of bacterial species cause disease in humans. The rest are either harmless or fundamentally helpful: gut bacteria aid digestion and make vitamins, soil bacteria recycle nutrients, and some make yogurt and cheese. Your immune system even \"trains\" partly thanks to moderate exposure to helpful microbes."
},
{
  "keys": [
    "ما الفرق بين الموجة الطولية والمستعرضة",
    "longitudinal vs transverse wave"
  ],
  "src": "https://en.wikipedia.org/wiki/Wave",
  "ar": "الفرق في اتجاه الاهتزاز مقارنة باتجاه انتشار الموجة. في الموجة المستعرضة (كموجة حبل تهزه يدك) يهتز الوسط عمودياً على اتجاه الانتشار: الحبل يتحرك لأعلى وأسفل بينما الموجة تمشي أفقياً. في الموجة الطولية (كالصوت في الهواء) يهتز الوسط بالتوازي مع الانتشار: تضاغطات وتخلخلات تتبادل في نفس اتجاه المسير. موجات الماء سطحياً خليط من الاثنين، فالجزيئات تتحرك في مسارات شبه دائرية.",
  "en": "The difference is the vibration direction compared to the wave's travel direction. In a transverse wave (like a rope you shake) the medium vibrates perpendicular to travel: the rope moves up and down while the wave runs horizontally. In a longitudinal wave (like sound in air) the medium vibrates parallel to travel: compressions and rarefactions alternate along the direction of motion. Water surface waves mix both, so particles move in near-circular paths."
},
{
  "keys": [
    "لماذا المثلث صلب",
    "why are triangles rigid"
  ],
  "src": "https://en.wikipedia.org/wiki/Triangle",
  "ar": "خذ أربعة أعواد واصنع مربعاً بمفاصل في الزوايا: سينهار شكله بسهولة رغم ثبات أطوال الأضلاع. جرّب ثلاثة أعواد: مستحيل تغيير شكل المثلث دون تغيير طول ضلع! هذا لأن زوايا المثلث محددة تماماً بأطوال أضلاعه الثلاثة (تطابق الأضلاع الثلاثة)، بينما المربع يحتاج شرطاً إضافياً. لهذا ترى المثلثات في أبراج الكهرباء والجسور والرافعات: الصلابة الهندسية بلا وزن إضافي.",
  "en": "Take four sticks and hinge them into a square: its shape collapses easily even with fixed side lengths. Try three sticks: you cannot change a triangle's shape without changing a side length! This is because a triangle's angles are fully determined by its three side lengths (side-side-side congruence), while a square needs an extra condition. That is why you see triangles in power pylons, bridges and cranes: geometric rigidity with no added weight."
},
{
  "keys": [
    "لماذا لدينا كليتان",
    "why do we have two kidneys"
  ],
  "src": "https://en.wikipedia.org/wiki/Kidney",
  "ar": "يمكن للإنسان أن يعيش حياة طبيعية تماماً بكلية واحدة سليمة، وهذا ما يجعل التبرع بالكلى ممكناً. فلماذا اثنتان؟ جزء من الجواب \"نسخة احتياطية\" طبيعية: عضو حيوي بهذه الأهمية يستحق هامش أمان. وعملياً تتقاسم الكليتان عبء ترشيح نحو 180 لتراً من سوائل الجسم يومياً، فإذا فقدت إحداهما تكبر الأخرى وتزيد كفاءتها لتعويض النقص. تعدد الأعضاء الحيوية نمط متكرر في التصميم البيولوجي: الرئتان أيضاً مثال.",
  "en": "A person can live a completely normal life with one healthy kidney, which is what makes kidney donation possible. So why two? Part of the answer is a natural \"backup copy\": an organ this vital deserves a safety margin. In practice the two kidneys share the load of filtering about 180 liters of body fluid daily, and if one is lost the other grows and raises its efficiency to compensate. Redundant vital organs are a recurring pattern in biological design: the lungs are another example."
},
{
  "keys": [
    "هل النبات يتنفس",
    "do plants breathe"
  ],
  "src": "https://en.wikipedia.org/wiki/Photosynthesis",
  "ar": "نعم! خطأ شائع أن النبات \"يصنع\" الأكسجين فقط. الحقيقة أن النبات يقوم بعمليتين: البناء الضوئي (نهاراً، في الضوء) يستهلك ثاني أكسيد الكربون ويصنع السكر والأكسجين، والتنفس الخلوي (طوال الوقت، ليلاً ونهاراً) يحرق جزءاً من ذلك السكر للحصول على طاقة مثلنا تماماً. الميزان الكلي في النهار لصالح إطلاق الأكسجين، لكن في الليل يستهلك النبات أكسجين مثلنا. فلا تتفاجأ: النبات كائن حي يحتاج طاقة كما نحتاجها.",
  "en": "Yes! A common mistake is thinking plants only \"make\" oxygen. In fact plants run two processes: photosynthesis (daytime, in light) consumes carbon dioxide and makes sugar and oxygen, and cellular respiration (all the time, day and night) burns part of that sugar for energy just like us. The net daytime balance favors releasing oxygen, but at night plants consume oxygen like we do. Do not be surprised: a plant is a living thing that needs energy just as we do."
},
{
  "keys": [
    "ما الفرق بين العصب والخلية العصبية",
    "nerve vs neuron"
  ],
  "src": "https://en.wikipedia.org/wiki/Nervous_system",
  "ar": "كثيرون يخلطون بينهما. الخلية العصبية (العصبون) هي الخلية الواحدة المتخصصة في نقل الإشارات الكهربائية والكيميائية. أما العصب الذي يقصده الأطباء فهو \"كابل\" كامل يضم حزماً من محاور آلاف الخلايا العصبية ملفوفة بأنسجة ضامة وأوعية دموية، مثل الكابل الكهربائي الذي يضم أسلاكاً كثيرة في غلاف واحد. فعندما يقال \"التهاب عصب\" فالمقصود الحزمة الكاملة لا خلية واحدة.",
  "en": "Many people mix these up. The neuron is the single specialized cell that carries electrical and chemical signals. The \"nerve\" doctors talk about is a whole \"cable\": bundles of axons from thousands of neurons wrapped in connective tissue and blood vessels, like an electrical cable holding many wires in one sheath. So \"nerve inflammation\" refers to the whole bundle, not one cell."
},
{
  "keys": [
    "لماذا لا تهضم المعدة نفسها",
    "why does the stomach not digest itself"
  ],
  "src": "https://en.wikipedia.org/wiki/Human_digestive_system",
  "ar": "المعدة تحتوي حمضاً قوياً وإنزيمات تهضم اللحم، فلماذا لا تهضم جدارها؟ الجواب في ثلاث دفاعات: طبقة مخاط سميكة تغطي الجدار وتعزل الحمض، وخلايا تفرز البيكربونات التي تعادل الحمض قرب السطح، وتجدد سريع جداً لخلايا البطانة (كل أيام قليلة). عندما يضعف هذا التوازن، كما مع بعض البكتيريا أو مسكنات الألم طويلة الاستخدام، قد يبدأ الحمض بإيذاء الجدار فعلاً، وهنا تظهر مشكلة القرحة.",
  "en": "The stomach holds strong acid and enzymes that digest meat, so why does it not digest its own wall? The answer is three defenses: a thick mucus layer coating the wall and keeping acid away, cells secreting bicarbonate that neutralizes acid near the surface, and extremely fast renewal of the lining cells (every few days). When this balance weakens, as with some bacteria or long-term painkiller use, acid can indeed start harming the wall, and that is how ulcers begin."
},
{
  "keys": [
    "لماذا الدم ازرق في العروق",
    "is blood blue in veins"
  ],
  "src": "https://en.wikipedia.org/wiki/Blood",
  "ar": "لا! الدم أحمر دائماً داخل جسمك، في الشرايين والأوردة معاً. دم الأوردة أغمق قليلاً فقط لأنه حمل أقل من الأكسجين. فلماذا تبدو العروق زرقاء من الخارج؟ خدعة بصرية: الجلد يمتص ويبعثر الضوء بطريقة تجعل الأوردة العميقة تبدو زرقاء مائلة للخضرة لأعيننا، خاصة على البشرة الفاتحة. إن كنت شككت يوماً في صديق يقول \"دمي أزرق\"، فأنت الآن تعرف التفسير.",
  "en": "No! Blood is always red inside your body, in arteries and veins alike. Venous blood is just slightly darker because it carries less oxygen. So why do veins look blue from outside? An optical trick: skin absorbs and scatters light in a way that makes deep veins appear bluish-green to our eyes, especially on lighter skin. If a friend ever told you \"my blood is blue\", you now know the explanation."
},
{
  "keys": [
    "لماذا الميتوكوندريا لها دي ان ايه خاص",
    "why do mitochondria have their own dna"
  ],
  "src": "https://en.wikipedia.org/wiki/Organelle",
  "ar": "من أغرب حقائق البيولوجيا: الميتوكوندريا تحمل حمضاً نووياً خاصاً بها منفصلاً عن حمض النواة! التفسير المقبول علمياً (نظرية التكافل الداخلي): قبل نحو ملياري سنة، ابتلعت خلية بدائية كبيرة بكتيريا صغيرة قادرة على حرق الأكسجين، وبدل هضمها أقامتا شراكة دائمة. عبر أجيال لا تحصى فقدت البكتيريا معظم جيناتها وصارت عضية، لكنها احتفظت ببقايا جينومها القديم. دليل إضافي: الميتوكوندريا تنقسم بنفسها كما تنقسم البكتيريا!",
  "en": "One of the strangest facts in biology: mitochondria carry their own DNA, separate from the nucleus! The accepted scientific explanation (endosymbiotic theory): about two billion years ago, a large primitive cell engulfed a small oxygen-burning bacterium, and instead of digesting it, the two formed a permanent partnership. Over countless generations the bacterium lost most of its genes and became an organelle, but kept remnants of its ancient genome. Extra evidence: mitochondria divide on their own, just like bacteria do!"
},
{
  "keys": [
    "كيف تتخصص الخلايا",
    "how do cells specialize",
    "لماذا تتخصص الخلايا"
  ],
  "src": "https://en.wikipedia.org/wiki/Tissue_(biology)",
  "ar": "كل خلايا جسمك تحمل نفس الحمض النووي تقريباً، فكيف تصبح خلية عصبية وأخرى عضلية؟ السر ليس في المكتبة بل في الكتب المفتوحة: كل خلية \"تقرأ\" مجموعة مختلفة من الجينات وتصمت الباقي، وفق إشارات كيميائية تصلها أثناء النمو من موقعها وجيرانها. خلية الكبد تفتح جينات هضم السموم، وخلية العضلة تفتح جينات الانقباض. هذا ما يسميه العلماء التمايز الخلوي: نفس التعليمات، اختيارات مختلفة.",
  "en": "Nearly all your cells carry the same DNA, so how does one become a neuron and another a muscle cell? The secret is not the library but which books are open: each cell \"reads\" a different set of genes and silences the rest, guided by chemical signals from its location and neighbors during development. A liver cell opens detoxification genes; a muscle cell opens contraction genes. Scientists call this cell differentiation: same instructions, different choices."
},
{
  "keys": [
    "هل العظام مادة ميتة",
    "are bones dead",
    "هل العظم حي"
  ],
  "src": "https://en.wikipedia.org/wiki/Human_skeleton",
  "ar": "منظر الهيكل العظمي في المتاحف يوحي أن العظام مادة جافة ميتة، لكن العظم الحي نسيج نابض: به خلايا تبني وأخرى تهدم باستمرار، وأوعية دموية وأعصاب، ونخاع يصنع ملايين خلايا الدم كل ثانية. بل يعيد عظمك تجديد نفسه بالكامل تقريباً كل عشر سنوات. ولهذا السبب يلتئم الكسر: الأنسجة الحية تعيد بناء الجسر العظمي عبر أسابيع. العظم حي بكل معنى الكلمة.",
  "en": "Skeletons in museums make bones look like dry dead matter, but living bone is vibrant tissue: it has cells that constantly build and others that break down, blood vessels and nerves, and marrow making millions of blood cells every second. Your skeleton almost fully renews itself about every ten years. That is also why fractures heal: living tissue rebuilds the bony bridge over weeks. Bone is alive in every sense of the word."
},
{
  "keys": [
    "لماذا ترتعش العضلات بعد التمرين",
    "why do muscles shake after exercise",
    "الم العضلات بعد الرياضة"
  ],
  "src": "https://en.wikipedia.org/wiki/Muscular_system",
  "ar": "الوجع الذي تشعر به بعد يوم أو يومين من تمرين جديد ليس \"حمض اللاكتيك المحترق\" كما يشاع؛ اللاكتيك يختفي خلال ساعات. التفسير الحالي: تمزقات مجهرية صغيرة في ألياف العضلة مع التحمل غير المعتاد، يتبعها التهاب بسيط وإصلاح يجعل الألياف أقوى من قبل. هذا الألم المؤجل طبيعي ومؤقت، لكن الألم الحاد المفاجئ أثناء التمرين قصة أخرى تستحق التوقف. الراحة والترطيب والتدرج في الحمل أفضل صديق لعضلاتك.",
  "en": "The soreness you feel a day or two after a new workout is not \"burning lactic acid\" as commonly said; lactate clears within hours. The current explanation: tiny microscopic tears in muscle fibers from unaccustomed load, followed by mild inflammation and repair that leaves the fibers stronger than before. This delayed soreness is normal and temporary, but sharp sudden pain during exercise is another story worth stopping for. Rest, hydration and gradual progression are your muscles' best friends."
},
{
  "keys": [
    "لماذا نلهث بعد الجري",
    "why do we pant after running"
  ],
  "src": "https://en.wikipedia.org/wiki/Respiratory_system",
  "ar": "عندما تركض تحتاج عضلاتك طاقة أكثر، فتزيد حرق السكر ومعه استهلاك الأكسجين وإنتاج ثاني أكسيد الكربون. يرتفع مستوى CO2 في الدم، فيرسل الدماغ أمراً بتسريع التنفس للتخلص منه وإدخال أكسجين جديد. اللهاث بعد التوقف هو \"سداد الدين\": جسمك يعوض نقص الأكسجين الذي تراكم أثناء الجهد ويعيد التوازن الكيميائي. لهذا يهدأ نفسك تدريجياً، لا فجأة.",
  "en": "When you run, your muscles need more energy, so they burn more sugar, consuming more oxygen and producing more carbon dioxide. Rising CO2 in the blood makes the brain order faster breathing to expel it and bring in fresh oxygen. Panting after you stop is \"paying the debt\": your body makes up the oxygen shortfall that built up during effort and restores chemical balance. That is why your breathing settles gradually, not suddenly."
},
{
  "keys": [
    "كيف يتذكر الجسم المرض",
    "how does the body remember a disease",
    "ذاكرة المناعة"
  ],
  "src": "https://en.wikipedia.org/wiki/Immune_system",
  "ar": "عندما يهاجمك ميكروب لأول مرة يحتاج جهازك المناعي أياماً لصناعة أسلحة مناسبة (أجسام مضادة)، فتمرض أثناء الانتظار. لكن بعد المعركة يحتفظ الجسم بـ\"خلايا ذاكرة\" متخصصة في ذلك الميكروب تحديداً، تعيش سنوات أحياناً. عند اللقاء الثاني تهاجم الخلايا المدربة خلال ساعات قبل أن تشعر بأي عرض. هذه الذاكرة المناعية هي فكرة اللقاحات كلها: تدريب آمن بلا معركة حقيقية.",
  "en": "When a microbe attacks you for the first time, your immune system needs days to build suitable weapons (antibodies), so you get sick while waiting. But after the battle, the body keeps specialized \"memory cells\" for that exact microbe, sometimes for years. On the second encounter, trained cells attack within hours before you feel any symptom. This immune memory is the whole idea of vaccines: safe training without a real battle."
},
{
  "keys": [
    "لماذا نشبه اهلنا",
    "why do we look like our parents",
    "لماذا اشبه ابي"
  ],
  "src": "https://en.wikipedia.org/wiki/Heredity",
  "ar": "ترث من كل والد نسخة واحدة من كل جين، فتحمل نسختين لكل صفة تقريباً. أحياناً تغلب إحدى النسختين (سائدة) على الأخرى (متنحية)، وأحياناً يمتزج تأثيرهما. النتيجة: تشبه والديك لكنك لست نسخة من أحدهما، لأن كل طفل يحصل على خلطة فريدة من نسخ الجينات، حتى الإخوة الأشقاء يختلفون! ويتدخل البيئة أيضاً: التغذية والشمس والعادات تؤثر في كيفية ظهور الصفات.",
  "en": "You inherit one copy of each gene from each parent, so you carry two copies of nearly every trait. Sometimes one copy dominates (dominant) over the other (recessive), and sometimes their effects blend. The result: you resemble your parents but are a copy of neither, because each child gets a unique mix of gene copies; even full siblings differ! Environment also plays a role: nutrition, sun and habits affect how traits show up."
},
{
  "keys": [
    "هل الانسان تطور من القردة",
    "did humans evolve from monkeys"
  ],
  "src": "https://en.wikipedia.org/wiki/Evolution",
  "ar": "الصياغة الدقيقة مختلفة: نظرية التطور لا تقول إن الإنسان تطور من القرود الحالية، بل إن الإنسان والقرود الحالية تشترك في سلف مشترك عاش قبل ملايين السنين، مثل أبناء عمومة يشتركون في جد واحد ولا ينحدر أحدهم من الآخر. الأدلة متقاطعة من الحفريات والتشريح المقارن والحمض النووي الذي يظهر تشابهاً يتجاوز 98% مع الشمبانزي. العلم يصف \"كيف\" تغيرت الكائنات عبر الزمن، وهو من أكثر النظريات اختباراً في التاريخ.",
  "en": "The precise wording differs: evolution does not say humans came from today's monkeys, but that humans and today's apes share a common ancestor that lived millions of years ago, like cousins sharing one grandparent, neither descending from the other. Evidence converges from fossils, comparative anatomy, and DNA showing over 98% similarity with chimpanzees. Science describes \"how\" living things changed over time, and it is among the most tested theories in history."
},
{
  "keys": [
    "ماذا يحدث لو انقرض نوع",
    "what happens if a species goes extinct"
  ],
  "src": "https://en.wikipedia.org/wiki/Ecology",
  "ar": "الشبكة الغذائية أشبه بقوس حجري: أزل حجراً صغيراً فقد يصمد القوس، أزل حجراً محورياً فينهار كله. عندما يختفي نوع مفترس مثلاً، قد تنفجر أعداد فرائسه فتأكل النباتات بشراهة، فيتغير المشهد كله. العلماء يسمون الأنواع ذات التأثير الكبير \"أنواعاً مفصلية\". المشكلة أننا لا نعرف دائماً أي الأنواع مفصلية إلا بعد فقدانها، لذلك يقول علماء البيئة: حماية التنوع هي تأمين على استقرار النظام كله.",
  "en": "A food web is like a stone arch: remove one small stone and the arch may hold; remove a keystone and it collapses. When a predator disappears, its prey may explode in numbers and devour the plants, changing the whole landscape. Scientists call high-impact species \"keystone species\". The problem is we often do not know which species are keystones until we lose them, so ecologists say: protecting diversity is insurance for the stability of the whole system."
},
{
  "keys": [
    "لماذا لا يعمل الانزيم في حرارة عالية",
    "why do enzymes stop in heat"
  ],
  "src": "https://en.wikipedia.org/wiki/Enzyme",
  "ar": "الإنزيم بروتين مطوي بدقة كأنه مفتاح ثلاثي الأبعاد، وشكله هو سر عمله: الجيب الفعال يمسك المادة المتفاعلة تماماً كما تمسك القفل مفتاحه. عندما ترتفع الحرارة كثيراً تنهار الروابط الضعيفة الممسكة بالطيّة، فيفقد الإنزيم شكله (يسمى ذلك فقد التطبيع) ويصبح كمفتاح ذاب وتغيّرت أسنانه. القفل لم يتغير، لكن المفتاح لم يعد يطابقه. لهذا الحمى الشديدة خطيرة: إنزيمات الجسم نفسها في خطر.",
  "en": "An enzyme is a precisely folded protein, like a three-dimensional key, and its shape is the secret of its work: the active pocket grips the reactant exactly as a lock grips its key. When heat rises too much, the weak bonds holding the fold collapse, the enzyme loses its shape (called denaturation) and becomes like a melted key with distorted teeth. The lock has not changed, but the key no longer matches. That is why severe fever is dangerous: the body's own enzymes are at risk."
},
{
  "keys": [
    "هل الفيروس كائن حي",
    "are viruses alive"
  ],
  "src": "https://en.wikipedia.org/wiki/Virus",
  "ar": "سؤال حيّر العلماء طويلاً، والجواب الأمين: يعتمد على تعريفك للحياة! الفيروس يملك مادة وراثية ويتطور، لكنه لا يستطيع التكاثر أو إنتاج طاقة بمفرده؛ يحتاج خطف مصنع خلية كاملة. لا خلايا له، ولا استقلاب، ولا نمو. لهذا يصفه كثير من العلماء بأنه \"على حافة الحياة\": كيان بين الكيمياء والبيولوجيا. الجدل نفسه يعلّمنا أن تعريفاتنا البشرية أحياناً أضيق من تنوع الطبيعة.",
  "en": "A question that puzzled scientists for long, and the honest answer: it depends on your definition of life! A virus has genetic material and evolves, but it cannot reproduce or make energy alone; it needs to hijack a whole cell's machinery. It has no cells, no metabolism, no growth. That is why many scientists describe it as \"on the edge of life\": an entity between chemistry and biology. The debate itself teaches us that human definitions are sometimes narrower than nature's variety."
},
{
  "keys": [
    "هل نستخدم 10 بالمئة من الدماغ",
    "do we use 10 percent of the brain"
  ],
  "src": "https://en.wikipedia.org/wiki/Brain",
  "ar": "هذه من أشهر الخرافات العلمية! تصوير الدماغ الحديث يظهر أن كل مناطق الدماغ تقريباً تنشط خلال يوم واحد، حتى أثناء النوم. الدماغ يستهلك 20% من طاقة الجسم رغم أنه 2% من وزنه؛ سيكون هدراً تطورياً هائلاً أن نحمل عضواً غالياً 90% منه بلا فائدة. أصل الأسطورة غير مؤكد، لكنها انتشرت لأنها فكرة مغرية: قوى خفية تنتظر الإطلاق. الحقيقة الأجمل: دماغك كله يعمل من أجلك بالفعل.",
  "en": "This is one of the most famous science myths! Modern brain imaging shows that nearly all brain regions activate over the course of a single day, even during sleep. The brain consumes 20% of the body's energy while being 2% of its weight; it would be a huge evolutionary waste to carry an expensive organ that is 90% useless. The myth's origin is uncertain, but it spread because it is a tempting idea: hidden powers waiting to be unlocked. The more beautiful truth: your whole brain already works for you."
},
{
  "keys": [
    "كم عدد الحواس",
    "how many senses do we have"
  ],
  "src": "https://en.wikipedia.org/wiki/Sense",
  "ar": "تعلمنا في الصغر أن الحواس خمس، لكن علماء الأعصاب يعدّون أكثر من عشرين! هل شعرت بحرارة كوب دون لمسه؟ الإحساس بالحرارة حاسة مستقلة. هل أغمضت عينيك وعرفت أين يدك؟ هذا الإحساس بوضع الأطراف. توازنك دون أن تقع؟ حاسة التوازن في الأذن الداخلية. وهناك الإحساس بالوقت، والجوع، والألم الداخلي. الحواس الخمس الشهيرة مجرد المدخل المدرسي المبسط لعالم أوسع بكثير من المستشعرات.",
  "en": "We learned as children that there are five senses, but neuroscientists count more than twenty! Have you felt a cup's heat without touching it? Thermoception is its own sense. Have you closed your eyes and known where your hand is? That is proprioception. Your balance while not falling? The vestibular sense in your inner ear. There are also senses of time, hunger and internal pain. The famous five are just the simplified school entrance to a much wider world of sensors."
},
{
  "keys": [
    "ما الفرق بين الهرمون والعصب",
    "hormone vs nerve signal"
  ],
  "src": "https://en.wikipedia.org/wiki/Endocrine_system",
  "ar": "تخيّل أن الجسم يحتاج إرسال رسالتين: \"اهرب الآن!\" و\"انمُ تدريجياً خلال سنوات\". الأولى عاجلة فتسافر بالأعصاب: إشارة كهربائية بسرعة مئات الكيلومترات في الساعة تصل نقطة محددة بدقة. الثانية بطيئة فتسافر بالهرمونات: رسائل كيميائية تسبح في الدم فتصل الجسم كله وتستمر تأثيراتها ساعات أو سنوات. الجهازان يتكاملان: الجهاز العصبي للسرعة والدقة، والغدد الصماء للرسائل الواسعة طويلة الأمد.",
  "en": "Imagine the body needs to send two messages: \"run now!\" and \"grow gradually over years\". The first is urgent, so it travels by nerves: an electrical signal at hundreds of kilometers per hour reaching an exact point precisely. The second is slow, so it travels by hormones: chemical messages swimming in the blood, reaching the whole body with effects lasting hours or years. The two systems complement each other: the nervous system for speed and precision, the endocrine system for broad long-term messages."
},
{
  "keys": [
    "ماذا يحدث لو اختفت النحل",
    "what if bees disappeared"
  ],
  "src": "https://en.wikipedia.org/wiki/Pollination",
  "ar": "العبارة الشائعة مبالغ فيها قليلاً، لكن الخطر حقيقي: نحو ثلث محاصيلنا الغذائية يعتمد جزئياً أو كلياً على الملقحات، خاصة الفواكه والخضراوات والمكسرات. لو اختفت النحل فلن نجوع فوراً (القمح والأرز يلقحهما الهواء)، لكن ستفقر موائدنا وترتفع أسعار غذائنا كثيراً. الخبر الجيد: حماية الملقحات ممكنة بتقليل المبيدات الضارة وزراعة أزهار محلية. حتى حديقة صغيرة بأزهار متنوعة تساعد.",
  "en": "The popular phrase is slightly exaggerated, but the danger is real: about a third of our food crops depend partly or fully on pollinators, especially fruits, vegetables and nuts. If bees vanished we would not starve immediately (wheat and rice are wind-pollinated), but our tables would grow poor and food prices would rise sharply. The good news: protecting pollinators is possible by cutting harmful pesticides and planting local flowers. Even a small garden with varied flowers helps."
},
{
  "keys": [
    "لماذا يتجعد الجلد في الماء",
    "why does skin wrinkle in water"
  ],
  "src": "https://en.wikipedia.org/wiki/Skin",
  "ar": "كان التفسير القديم أن الجلد \"يمتص الماء وينتفخ\"، لكن العلم الحديث كشف قصة أذكى: التجعيد رد فعل عصبي نشط، فالأعصاب تضيّق الأوعية الدموية في أطراف الأصابع فتنكمش وتتجعد. الدليل: من لديه تلف في أعصاب أصابعه لا يتجعد جلده في الماء! والمفاجأة أن التجاعيد قد تكون مفيدة: تشبه نقوش إطارات السيارات، تساعد على الإمساك بالأشياء المبللة بثبات أكبر. تطور صغير عملي في أطراف أصابعك.",
  "en": "The old explanation was that skin \"absorbs water and swells\", but modern science revealed a smarter story: wrinkling is an active nerve response; nerves narrow the blood vessels in the fingertips so they shrink and wrinkle. The proof: people with nerve damage in their fingers do not wrinkle in water! The surprise is that the wrinkles may be useful: like tire treads, they help grip wet objects more firmly. A small practical adaptation in your fingertips."
},
{
  "keys": [
    "ما الفرق بين الشريان والوريد",
    "artery vs vein"
  ],
  "src": "https://en.wikipedia.org/wiki/Circulatory_system",
  "ar": "القاعدة البسيطة: الشرايين تخرج من القلب، والأوردة تعود إليه. لاحظ أنني لم أقل \"دم مؤكسج وغير مؤكسج\"، لأن هناك استثناء شهيراً: الشريان الرئوي يحمل دماً غير مؤكسج من القلب إلى الرئتين! الفرق البنيوي منطقي: الشرايين تواجه ضغط الضخ المباشر فجدرانها سميكة عضلية مرنة، بينما الأوردة تعمل بضغط منخفض فجدرانها أرق وبها صمامات تمنع رجوع الدم، خاصة في الساقين ضد الجاذبية.",
  "en": "The simple rule: arteries leave the heart, veins return to it. Notice I did not say \"oxygenated vs deoxygenated blood\", because there is a famous exception: the pulmonary artery carries deoxygenated blood from heart to lungs! The structural difference is logical: arteries face the direct pumping pressure so their walls are thick, muscular and elastic, while veins work at low pressure so their walls are thinner with valves preventing backflow, especially in the legs against gravity."
},
{
  "keys": [
    "هل البكتيريا في جسمي كثيرة",
    "how many bacteria live in us"
  ],
  "src": "https://en.wikipedia.org/wiki/Microbiota",
  "ar": "رقم مدهش: جسمك يحمل بكتيريا بعدد يقارب عدد خلاياك البشرية نفسه (تقديرات حديثة ترجح نسبة تقارب 1:1)، معظمها في الأمعاء. هذا المجتمع الضخم ليس ركاباً صامتين: يساعد في هضم الألياف، ويصنع فيتامينات، ويدرّب المناعة، ويؤثر حتى في المزاج عبر \"محور الأمعاء والدماغ\". الميكروبيوم الخاص بك بصمة فريدة مثل بصمة إصبعك، يتشكل منذ ولادتك ويتأثر بغذائك ونمط حياتك.",
  "en": "An astonishing figure: your body carries bacteria in a number close to your own human cell count (recent estimates suggest roughly 1:1), mostly in the gut. This huge community is not silent passengers: it helps digest fiber, makes vitamins, trains immunity, and even affects mood through the \"gut-brain axis\". Your microbiome is a unique fingerprint like your fingerprint, shaped since birth and influenced by your diet and lifestyle."
},
{
  "keys": [
    "هل الفطر نبات",
    "are fungi plants"
  ],
  "src": "https://en.wikipedia.org/wiki/Fungus",
  "ar": "رغم أن الفطر ينمو من الأرض كالنباتات، فهو أقرب إلينا نحن الحيوانات منه إلى النباتات! الدلائل: جدر خلاياه من الكيتين (مادة هياكل الحشرات) لا السليلوز، ولا يقوم بالبناء الضوئي بل يهضم غذاءه خارجياً ثم يمتصه كما نفعل تقريباً، وجينومه أقرب لجينومنا. للفطريات مملكة مستقلة، ودورها عالمي: تفكيك الأوراق الميتة وإعادة تدوير الغابات كلها، وشبكاتها تحت الأرض تصل الأشجار ببعضها.",
  "en": "Although mushrooms grow from the ground like plants, fungi are closer to us animals than to plants! The evidence: their cell walls are made of chitin (the material of insect shells) not cellulose, they do not photosynthesize but digest food externally then absorb it much like we do, and their genome is closer to ours. Fungi are their own kingdom, with a global role: breaking down dead leaves and recycling entire forests, with underground networks connecting trees to each other."
},
{
  "keys": [
    "كيف يشرب النبات",
    "how do plants drink"
  ],
  "src": "https://en.wikipedia.org/wiki/Plant",
  "ar": "بلا قلب ولا مضخة، كيف يصل الماء إلى قمة شجرة بارتفاع مبنى؟ الجواب في ثلاث قوى متعاونة: التبخر من الثغور الورقية يشد عمود الماء لأعلى (النتح)، وتماسك جزيئات الماء ببعضها يجعل العمود كأنه خيط متصل لا ينقطع، والتصاق الماء بجدران أوعية الخشب الرفيعة يساعد على الصعود. هذه القوى الفيزيائية البسيطة معاً ترفع مئات اللترات يومياً في شجرة كبيرة، بلا قطرة وقود واحدة.",
  "en": "With no heart and no pump, how does water reach the top of a building-tall tree? The answer is three cooperating forces: evaporation from leaf stomata pulls the water column upward (transpiration), cohesion between water molecules keeps the column like an unbroken thread, and adhesion to the thin xylem vessel walls helps the climb. These simple physical forces together lift hundreds of liters daily in a big tree, without a single drop of fuel."
},
{
  "keys": [
    "من اين تاتي الاحماض الامينية",
    "where do amino acids come from"
  ],
  "src": "https://en.wikipedia.org/wiki/Protein_biosynthesis",
  "ar": "جسمك يحتاج 20 حمضاً أمينياً لبناء بروتيناته، لكنه يستطيع صناعة 11 منها فقط داخلياً. التسعة الباقية تسمى \"أساسية\" لأنها يجب أن تأتي من طعامك: اللحوم والبيض والبقول والمكسرات. هذا هو المعنى العلمي الدقيق لعبارة \"بروتين كامل\": طعام يوفر التسعة كلها. ولهذا تتكامل وجبات مثل الأرز مع العدس: كل منهما يكمل أحماض الآخر الناقصة. التنوع في الطعام ليس ترفاً، بل كيمياء حيوية عملية.",
  "en": "Your body needs 20 amino acids to build its proteins, but it can only make 11 of them internally. The remaining nine are called \"essential\" because they must come from your food: meat, eggs, legumes and nuts. This is the precise scientific meaning of \"complete protein\": food providing all nine. That is why meals like rice with lentils complement each other: each fills the other's missing acids. Variety in food is not a luxury; it is practical biochemistry."
},
{
  "keys": [
    "كم سرعة الاشارة العصبية",
    "how fast are nerve signals"
  ],
  "src": "https://en.wikipedia.org/wiki/Neuron",
  "ar": "ليس كلها بالسرعة نفسها! إشارات الألم الحاد واللمس تسافر في ألياف مغلفة بالميالين بسرعة قد تتجاوز 400 كيلومتر في الساعة، بينما إشارات الألم المزمن البطيئة تزحف بأقل من كيلومترين في الساعة. هذا الفارق يفسر ظاهرة مألوفة: عندما تصطدم قدمك بحرف السرير تشعر أولاً بالصدمة الحادة فوراً، ثم بعد ثانية يصلك الوجع العميق المزعج. إشارتان بسرعتين مختلفتين على طريقين مختلفين!",
  "en": "Not all signals travel at the same speed! Sharp pain and touch signals race through myelin-wrapped fibers at over 400 km/h, while dull chronic pain signals crawl at under 2 km/h. This difference explains a familiar phenomenon: when your foot hits the bed's edge you feel the sharp impact instantly, then a second later the deep annoying ache arrives. Two signals at two speeds on two different routes!"
},
{
  "keys": [
    "لماذا نحلم",
    "why do we dream"
  ],
  "src": "https://en.wikipedia.org/wiki/Sleep",
  "ar": "الجواب العلمي الأمين: لا نعرف يقيناً بعد! لكن الفرضيات المرشحة رائعة: معالجة الذكريات اليومية ونقل المهم منها إلى التخزين طويل الأمد، وتنظيم المشاعر بإعادة تشغيل المواقف الصعبة في بيئة آمنة، و\"تنظيف\" الروابط العصبية الزائدة. المؤكد أن الحرمان من نوم الأحلام (مرحلة REM) يضر التعلم والمزاج، وأن الدماغ أثناء الأحلام نشط بقدر نشاطه مستيقظاً. الأحلام ليست ضجيجاً عشوائياً؛ لها وظيفة نكتشفها تدريجياً.",
  "en": "The honest scientific answer: we do not know for certain yet! But the leading hypotheses are fascinating: processing the day's memories and moving important ones to long-term storage, regulating emotions by replaying hard situations in a safe environment, and \"pruning\" excess neural connections. What is certain: being deprived of dream sleep (REM) harms learning and mood, and the dreaming brain is as active as when awake. Dreams are not random noise; they have a function we are gradually discovering."
},
{
  "keys": [
    "لماذا يهاجم الجسم حبوب اللقاح",
    "why does the body attack pollen"
  ],
  "src": "https://en.wikipedia.org/wiki/Allergy",
  "ar": "الحساسية خطأ في التعرف، لا ضعف في المناعة. نظامك المناعي صُمم ليكون حذراً، وأحياناً يصنّف بالخطأ مادة مسالمة تماماً (حبوب لقاح، فول سوداني، وبر قطة) كتهديد خطير، فيطلق الهيستامين وأسلحة الالتهاب كاملة: عطاس وحكة ودموع. لماذا يحدث الخطأ لبعض الناس؟ مزيج من الوراثة والتعرض المبكر والبيئة. فرضية \"النظافة\" تقترح أن قلة التعرض الميكروبي في الصغر قد تربك تدريب الجهاز المناعي.",
  "en": "Allergy is a recognition error, not weak immunity. Your immune system is designed to be cautious, and sometimes it wrongly classifies a completely harmless substance (pollen, peanuts, cat dander) as a serious threat, releasing histamine and the full inflammation arsenal: sneezing, itching and tears. Why does the error happen to some people? A mix of genetics, early exposure and environment. The \"hygiene hypothesis\" suggests too little microbial exposure in childhood may confuse immune training."
},
{
  "keys": [
    "لماذا لا تلتئم الاسنان كالعظام",
    "why do teeth not heal like bones"
  ],
  "src": "https://en.wikipedia.org/wiki/Tooth",
  "ar": "سؤال ممتاز يكشف فرقاً جوهرياً: العظم نسيج حي مليء بالخلايا البنّاءة والأوعية الدموية، فيعيد بناء نفسه بعد الكسر. أما مينا الأسنان، وهي أصلب مادة في جسمك، فقد صنعتها خلايا خاصة (أرومات مينائية) تختفي تماماً بعد بزوغ السن، فلا يتبقى من يصلحها! العاج تحتها يستطيع ترميمات محدودة، لكن المينا المفقودة لا تعود. لهذا الوقاية بالفلورايد والتنظيف أثمن من أي علاج لاحق.",
  "en": "An excellent question revealing a core difference: bone is living tissue full of builder cells and blood vessels, so it rebuilds after a break. Tooth enamel, the hardest substance in your body, was made by special cells (ameloblasts) that vanish completely once the tooth erupts, leaving no one to repair it! The dentin beneath can do limited repairs, but lost enamel never returns. That is why prevention with fluoride and cleaning is worth more than any later treatment."
},
{
  "keys": [
    "كيف يحافظ الجسم على حرارته",
    "how does the body keep its temperature"
  ],
  "src": "https://en.wikipedia.org/wiki/Homeostasis",
  "ar": "جسمك يعمل كمنزل بثرموستات ذكي: حساس في الدماغ (تحت المهاد) يقيس حرارة الدم باستمرار ويقارنها بالقيمة المستهدفة 37 تقريباً. إن ارتفعت: أوعية الجلد تتسع وتتعرق الغدد لتبريد بالتبخير. إن انخفضت: الأوعية تضيق وترتجف العضلات لتوليد حرارة. هذا النمط، حساس + مقارنة + استجابة معاكسة، يسمى التغذية الراجعة السلبية، وهو المحرك السري وراء ثبات السكر والضغط والحموضة أيضاً.",
  "en": "Your body works like a house with a smart thermostat: a sensor in the brain (the hypothalamus) constantly measures blood temperature and compares it to the target value near 37 degrees. If it rises: skin vessels widen and sweat glands cool by evaporation. If it drops: vessels narrow and muscles shiver to generate heat. This pattern, sensor + comparison + opposite response, is called negative feedback, and it is the hidden engine behind stable blood sugar, pressure and acidity too."
},
{
  "keys": [
    "لماذا لا تصعق العصافير على الاسلاك",
    "why do birds not get shocked on wires"
  ],
  "src": "https://en.wikipedia.org/wiki/Electricity",
  "ar": "المشهد شائع: عصافير تصطف بأمان على أسلاك الضغط العالي. السر أن الكهرباء تبحث عن فرق في الجهد، لا مجرد سلك مشحون. العصفور يقف برجليه على السلك نفسه، فكلتا رجليه عند الجهد نفسه تقريباً، فلا يمر تيار يُذكر عبر جسمه. الخطر يأتي إذا لمس سلكين مختلفين أو سلكاً وعموداً مؤرضاً معاً: حينها يصبح جسمه طريقاً بين جهدين مختلفين. لهذا يقفون على سلك واحد ولا يقتربون من عمود!",
  "en": "A common sight: birds sitting safely on high-voltage wires. The secret is that electricity seeks a difference in voltage, not just a charged wire. The bird stands with both feet on the same wire, so both feet are at nearly the same voltage, and almost no current crosses its body. Danger comes if it touches two different wires, or a wire and a grounded pole together: then its body becomes a path between two different voltages. That is why they sit on one wire and stay away from the pole!"
},
{
  "keys": [
    "لماذا الارض مغناطيس",
    "why is earth a magnet"
  ],
  "src": "https://en.wikipedia.org/wiki/Magnet",
  "ar": "لب الأرض الخارجي محيط ضخم من حديد منصهر سائل يدور ويتحرك باستمرار. الحركة الدوارة للمعدن الموصل تولد تيارات كهربائية هائلة، والتيارات تولد حقولاً مغناطيسية، فيصبح كوكبنا كله دينامو عملاق. النتيجة: مجال مغناطيسي يحمينا من الرياح الشمسية القاتلة ويوجه بوصلات الملاحة. دليل حركته: القطب المغناطيسي الشمالي \"يتجول\" بضعة كيلومترات كل سنة، وخرائط الملاحة تُحدَّث بسببه دورياً.",
  "en": "Earth's outer core is a huge ocean of liquid molten iron that spins and flows constantly. The swirling motion of the conductive metal generates enormous electric currents, and currents generate magnetic fields, making our whole planet a giant dynamo. The result: a magnetic field that shields us from deadly solar wind and guides navigation compasses. Evidence it moves: the magnetic north pole \"wanders\" several kilometers each year, and navigation charts are updated because of it."
},
{
  "keys": [
    "لماذا السماء زرقاء",
    "why is the sky blue"
  ],
  "src": "https://en.wikipedia.org/wiki/Optics",
  "ar": "ضوء الشمس الأبيض خليط من كل الألوان، وعندما يعبر الغلاف الجوي يتناثر بجزيئات الهواء الدقيقة. المفاجأة أن التناثر ليس عادلاً: الأزرق القصير الموجة يتناثر بقوة تفوق الأحمر بنحو خمس مرات، فيصلنا الأزرق المتناثر من كل اتجاهات السماء. وعند الغروب يقطع الضوء مسافة أطول في الغلاف الجوي فيتناثر الأزرق كله قبل الوصول، فلا يبقى لعينيك إلا البرتقالي والأحمر. سماء النهار وسماء الغروب نفس الفيزياء بزاويتين!",
  "en": "White sunlight is a mix of all colors, and as it crosses the atmosphere it scatters off tiny air molecules. The surprise is that scattering is not fair: short-wavelength blue scatters about five times more strongly than red, so scattered blue reaches us from every direction in the sky. At sunset the light cuts a longer path through the atmosphere, all the blue scatters away before arriving, and only orange and red remain for your eyes. The noon sky and sunset sky are the same physics from two angles!"
},
{
  "keys": [
    "لماذا نحتاج حزام الامان",
    "why do we need seatbelts"
  ],
  "src": "https://en.wikipedia.org/wiki/Classical_mechanics",
  "ar": "قانون نيوتن الأول يجيب: جسمك المتحرك بسرعة السيارة يريد الاستمرار بالسرعة نفسها عندما تتوقف السيارة فجأة. بدون حزام، لا قوة توقفك إلا الزجاج أو لوحة القيادة، والقوة الناتجة عن توقف مفاجئ هائلة لأن التوقف يحدث في أجزاء الثانية. الحزام يفعل شيئين ذكيين: يوزع قوة التوقف على أقوى عظامك (الصدر والحوض)، ويطيل زمن التوقف قليلاً فيقلل القوة كثيراً. إنه فيزياء تنقذ أرواحاً.",
  "en": "Newton's first law answers: your body moving at the car's speed wants to keep that speed when the car stops suddenly. Without a belt, only the windshield or dashboard stops you, and the force from a sudden stop is enormous because the stop happens in fractions of a second. The belt does two smart things: it spreads the stopping force over your strongest bones (chest and pelvis), and it lengthens the stopping time slightly, cutting the force greatly. It is physics saving lives."
},
{
  "keys": [
    "هل الطاقة تفنى",
    "can energy be destroyed"
  ],
  "src": "https://en.wikipedia.org/wiki/Energy",
  "ar": "قانون حفظ الطاقة من أرسخ قوانين الفيزياء: الطاقة لا تُخلق ولا تفنى، فقط تتحول بين الصور. لكن لماذا نقول إذن \"أهدَرنا طاقة\"؟ المعنى الدقيق: الطاقة تحولت إلى صورة أقل فائدة. المصباح القديم يحول الكهرباء إلى ضوء وكثير من الحرارة العشوائية، وهذه الحرارة طاقة \"منخفضة الجودة\" يصعب استرجاعها. فعبارة \"وفّر الطاقة\" تعني علمياً: حافظ على الطاقة في صور مفيدة قبل أن تتبدد حرارة عشوائية في الكون.",
  "en": "Energy conservation is one of physics' firmest laws: energy is never created or destroyed, only converted between forms. So why do we say \"we wasted energy\"? The precise meaning: energy shifted to a less useful form. An old bulb converts electricity into light plus lots of random heat, and that heat is \"low-quality\" energy that is hard to recover. So \"save energy\" scientifically means: keep energy in useful forms before it dissipates as random heat in the universe."
},
{
  "keys": [
    "لماذا يختلف صوتي في التسجيل",
    "why does my voice sound different recorded"
  ],
  "src": "https://en.wikipedia.org/wiki/Sound",
  "ar": "كلنا نفاجأ بصوتنا في التسجيلات ونكرهه أحياناً! السبب فيزيائي جميل: أنت تسمع صوتك بطريقين معاً، عبر الهواء كما يسمعه الآخرون، وعبر عظام جمجمتك التي تنقل الاهتزازات المنخفضة مباشرة لأذنك الداخلية. الطريق العظمي يضخّم الترددات الغليظة، فيبدو صوتك لك أعمق مما هو. التسجيل يلتقط طريق الهواء فقط: صوتك الحقيقي كما يسمعه العالم. الخبر الجيد: صوتك الحقيقي طبيعي، فقط لم تعتد عليه أنت.",
  "en": "We are all surprised by our recorded voice and sometimes dislike it! The reason is lovely physics: you hear your voice two ways at once, through air as others hear it, and through your skull bones carrying low vibrations directly to your inner ear. The bone path amplifies deep frequencies, making your voice sound deeper to you than it is. The recording captures only the air path: your real voice as the world hears it. The good news: your real voice is normal; you are just not used to it."
},
{
  "keys": [
    "ما الفرق بين الحرارة ودرجة الحرارة",
    "heat vs temperature"
  ],
  "src": "https://en.wikipedia.org/wiki/Heat",
  "ar": "كثيرون يستخدمون الكلمتين كمترادفتين، لكن الفرق جوهري: درجة الحرارة تقيس متوسط طاقة حركة الجزيئات، أما الحرارة فهي الطاقة المنتقلة نفسها من جسم أسخن لأبرد. مثال مقنع: شرارة ألعاب نارية حرارتها تتجاوز ألف درجة لكنها لا تحرقك لأن كتلتها ضئيلة فطاقتها الكلية تافهة، بينما حمام ماء دافئ بأربعين درجة يحمل طاقة هائلة لضخامة عدد جزيئاته. الميزان يقيس المفرد، والطاقة الكلية تقيس المجموع.",
  "en": "Many use the two words interchangeably, but the difference is fundamental: temperature measures the average kinetic energy of particles, while heat is the energy actually transferred from a hotter to a colder body. A convincing example: a sparkler spark exceeds a thousand degrees yet does not burn you because its mass is tiny so its total energy is trivial, while a warm bath at forty degrees carries enormous energy from its huge number of molecules. The thermometer measures the average; total energy measures the sum."
},
{
  "keys": [
    "لماذا تطفو السفينة الحديدية",
    "why does an iron ship float"
  ],
  "src": "https://en.wikipedia.org/wiki/Buoyancy",
  "ar": "مفارقة ظاهرية: الحديد أثقل من الماء بثمانية أضعاف، فكيف تطفو حاملة طائرات؟ مبدأ أرخميدس يجيب: الطفو يعتمد على كثافة الجسم الكلية مقارنة بالماء، لا كثافة مادته. السفينة حديد مجوف مليء هواء، فكثافتها المتوسطة (حديد + هواء) أقل من الماء. اصنع من الطين كرة فتغرق، ثم شكّلها قارباً مجوفاً فتطفو بنفس الكمية! الشكل الذي يحصر الهواء هو البطل، ولهذا تغرق السفينة إذا امتلأت بالماء: فقدت هواءها المنقذ.",
  "en": "An apparent paradox: iron is eight times denser than water, so how does an aircraft carrier float? Archimedes' principle answers: floating depends on the object's overall density compared to water, not its material's density. A ship is hollow iron full of air, so its average density (iron + air) is less than water. Make a clay ball and it sinks; shape the same clay into a hollow boat and it floats! The shape trapping air is the hero, and that is why a ship sinks when it fills with water: it lost its life-saving air."
},
{
  "keys": [
    "هل الرافعة تعطي قوة مجانية",
    "do levers give free force"
  ],
  "src": "https://en.wikipedia.org/wiki/Simple_machine",
  "ar": "الرافعة تبدو سحراً: طفل يرفع صخرة بعصا طويلة! لكن الفيزياء لا تعطي شيئاً مجاناً. القانون الذهبي للآلات: ما تكسبه قوة تدفعه مسافة. بدأب الرافعة الطويلة تدفع يدك مسافة كبيرة جداً لتحريك الصخرة سنتيمترات؛ الشغل (قوة × مسافة) متساوٍ في الطرفين. الآلات البسيطة لا تخلق طاقة، بل تعيد توزيعها بذكاء: بكرة تغير الاتجاه، وإسفين يجمع القوة في حدّ ضيق، وبرغي يحول الدوران تقدماً قوياً. ذكاء هندسي، لا خرق للفيزياء.",
  "en": "A lever looks like magic: a child lifting a boulder with a long stick! But physics gives nothing for free. The golden rule of machines: what you gain in force you pay in distance. With a long lever your hand travels a huge distance to move the boulder centimeters; the work (force × distance) is equal on both ends. Simple machines do not create energy, they redistribute it cleverly: a pulley changes direction, a wedge concentrates force into a narrow edge, a screw turns rotation into powerful advance. Engineering cleverness, not a physics loophole."
},
{
  "keys": [
    "لماذا السكين الحادة تقطع اسهل",
    "why do sharp knives cut easier"
  ],
  "src": "https://en.wikipedia.org/wiki/Pressure",
  "ar": "يبدو بديهياً لكن الفيزياء وراءه جميلة: الضغط = القوة ÷ المساحة. بقوة يدك نفسها، السكين الحاد يجمعها كلها على حافة بمساحة شبه معدومة، فيصبح الضغط على الخلية الأولى من الطماطم هائلاً فتنفصل. السكين الكليل يوزع القوة نفسها على مساحة أكبر فضغطه أضعف فيهرس بدل أن يقطع. المبدأ نفسه يفسر الإبرة والمسمار وحوافر الجمل العريضة التي تمنع غوصها في الرمل: تحكم في المساحة تتحكم في الضغط.",
  "en": "It seems obvious, but the physics behind it is beautiful: pressure = force ÷ area. With the same hand force, a sharp knife concentrates it all on a nearly zero-area edge, so the pressure on the tomato's first cells is enormous and they part. A dull knife spreads the same force over a larger area, weakening the pressure so it crushes instead of cutting. The same principle explains needles, nails, and the camel's wide hooves that stop it sinking in sand: control the area and you control the pressure."
},
{
  "keys": [
    "من رتب الجدول الدوري",
    "who arranged the periodic table"
  ],
  "src": "https://en.wikipedia.org/wiki/Periodic_table",
  "ar": "قصة رائعة عن قوة التنظيم: سنة 1869 رتب الروسي مندليف العناصر المعروفة في جدول حسب كتلها وخصائصها المتشابهة. المفاجأة العبقرية: ترك خانات فارغة متعمداً وتوقع وجود عناصر لم تكتشف بعد، وتنبأ بخصائصها بالتفصيل! عندما اكتشف العلماء الغاليوم والجرمانيوم لاحقاً وطابقت خصائصهما توقعاته المدهشة، صار الجدول خريطة علمية موثوقة. مندليف لم يصف الواقع فقط؛ استخدم نمطه للتنبؤ بالمجهول، وهذا جوهر العلم.",
  "en": "A great story about the power of organization: in 1869 the Russian Mendeleev arranged the known elements in a table by mass and similar properties. The stroke of genius: he deliberately left empty cells and predicted undiscovered elements, forecasting their properties in detail! When scientists later discovered gallium and germanium and their properties amazingly matched his predictions, the table became a trusted scientific map. Mendeleev did not just describe reality; he used its pattern to predict the unknown, and that is the heart of science."
},
{
  "keys": [
    "لماذا تترابط الذرات",
    "why do atoms bond"
  ],
  "src": "https://en.wikipedia.org/wiki/Chemical_bond",
  "ar": "القاعدة الدافعة لكل الروابط: الأنظمة تفضل الطاقة الأقل، والذرة \"الأكثر استقراراً\" هي التي يكتمل غلافها الخارجي بالإلكترونات (قاعدة الثمانية غالباً). الصوديوم المتلهف للتخلص من إلكترون وحيد يلتقي الكلور المتلهف لاكتسابه، فتولد رابطة أيونية وملح طعام. ذرتا هيدروجين تتشاركان إلكترونيهما برابطة تساهمية بدل التنازل الكامل. الروابط ليست عصاً تربط كرات كما في النماذج المدرسية، بل سحب إلكترونية مشتركة أو منقولة تحقق استقراراً طاقياً.",
  "en": "The driving rule behind every bond: systems prefer lower energy, and the \"most stable\" atom has a complete outer electron shell (often the octet rule). Sodium, eager to shed one electron, meets chlorine, eager to gain it, producing an ionic bond and table salt. Two hydrogen atoms share their electrons in a covalent bond instead of giving one up fully. Bonds are not sticks linking balls as in school models; they are shared or transferred electron clouds achieving energy stability."
},
{
  "keys": [
    "لماذا الليمون حامض والصابون قاعدي",
    "why is lemon sour and soap slippery"
  ],
  "src": "https://en.wikipedia.org/wiki/Acid",
  "ar": "لسانك كاشف كيميائي بدائي! طعم الحموض اللاذع هو إحساسك الفعلي بأيونات الهيدروجين (H+) التي تطلقها الأحماض في الماء، وانزلاق الصابون ومرارته إحساسك بالقواعد التي تطلق أيونات الهيدروكسيد (OH-). الرقم الهيدروجيني pH يقيس هذا: أقل من 7 حمضي، أعلى منه قاعدي، و7 متعادل كالماء النقي. وعندما يلتقي حمض بقاعدة يتعادلان فيولد ماء وملح: لذلك يريح مضاد الحموضة معدة متلهبة، فهو قاعدة تواجه حمضاً زائداً.",
  "en": "Your tongue is a primitive chemical detector! The sour sting of acids is you actually sensing hydrogen ions (H+) that acids release in water, and soap's slipperiness and bitterness is you sensing bases releasing hydroxide ions (OH-). The pH scale measures this: below 7 acidic, above 7 basic, and 7 neutral like pure water. When an acid meets a base they neutralize into water and salt: that is why an antacid relieves a burning stomach, a base facing excess acid."
},
{
  "keys": [
    "هل الحرق والصدأ نفس الشيء",
    "are burning and rusting the same"
  ],
  "src": "https://en.wikipedia.org/wiki/Chemical_reaction",
  "ar": "مفاجأة: نعم، كلاهما أكسدة! الاحتراق أكسدة سريعة عنيفة تطلق طاقتها دفعة واحدة فنرى لهباً وحرارة، والصدأ أكسدة بطيئة للحديد مع الأكسجين والماء تطلق الطاقة نفسها تقريباً موزعة على شهور فلا نشعر بها. حتى \"حرق\" السكر في خلاياك أكسدة مسيطر عليها بالإنزيمات. الفرق بين الثلاثة في السرعة والتحكم، لا في الكيمياء الجوهرية. وهذا يفسر لماذا يتحكم الغلاف والطلاء في الصدأ: يقطعان وصول الأكسجين والماء.",
  "en": "Surprise: yes, both are oxidation! Burning is fast violent oxidation releasing its energy at once, so we see flame and heat, while rust is slow oxidation of iron with oxygen and water, releasing nearly the same energy spread over months so we never feel it. Even \"burning\" sugar in your cells is enzyme-controlled oxidation. The difference between the three is speed and control, not the core chemistry. That is why coating and paint control rust: they cut off oxygen and water."
},
{
  "keys": [
    "هل توجد حالة رابعة للمادة",
    "is there a fourth state of matter"
  ],
  "src": "https://en.wikipedia.org/wiki/State_of_matter",
  "ar": "نعم، وهي حولك أكثر مما تظن! سخّن غازاً بما يكفي وتنتزع إلكتروناته فتتحول شوربة أيونات وإلكترونات حرة تسمى بلازما. النجوم كلها بلازما، والبرق قناة بلازما لحظية، وأضواء النيون وشاشات البلازما القديمة تستغلها. وهناك حالات أغرب في الظروف القصوى: مكثفات بوز-أينشتاين قرب الصفر المطلق تتصرف كموجة كمومية واحدة عملاقة. حالات المادة المعروفة الآن تتجاوز عشراً، والثلاث المدرسية مجرد ما نصادفه في حياتنا اليومية.",
  "en": "Yes, and it is around you more than you think! Heat a gas enough to strip its electrons and it becomes a soup of ions and free electrons called plasma. All stars are plasma, lightning is a momentary plasma channel, and neon lights and old plasma screens exploit it. There are even stranger states under extreme conditions: Bose-Einstein condensates near absolute zero behaving as one giant quantum wave. Known states of matter now exceed ten; the three school states are just what we meet in daily life."
},
{
  "keys": [
    "لماذا يذوب الملح اسرع في الماء الساخن",
    "why does salt dissolve faster in hot water"
  ],
  "src": "https://openstax.org/books/chemistry-2e/pages/11-1-the-dissolution-process",
  "ar": "ملاحظة مطبخية يومية وراءها فيزياء جزيئية. الذوبان معركة: جزيئات الماء القطبية تحيط بأيونات الملح وتنتزعها من البلورة واحداً واحداً. في الماء الساخن تتحرك الجزيئات بعنف أسرع، فتهاجم سطح البلورة بمعدل أعلى وتجرف الأيونات المنفصلة بعيداً قبل عودتها. التحريك يساعد للسبب نفسه: يجدد الماء الملامس للبلورة. لكن انتبه: الحرارة تسرّع ذوبان معظم الأملاح، بينما الغازات تذوب أقل في الماء الساخن، لهذا تفقد الصودا غازها أسرع دافئة.",
  "en": "A daily kitchen observation with molecular physics behind it. Dissolving is a battle: polar water molecules surround salt ions and pull them off the crystal one by one. In hot water molecules move faster and more violently, attacking the crystal surface at a higher rate and sweeping freed ions away before they return. Stirring helps for the same reason: it renews the water touching the crystal. But note: heat speeds dissolving for most salts, while gases dissolve less in hot water, which is why warm soda loses its fizz faster."
},
{
  "keys": [
    "لماذا المعادن توصل الكهرباء",
    "why do metals conduct electricity"
  ],
  "src": "https://en.wikipedia.org/wiki/Metal",
  "ar": "السر في \"بحر الإلكترونات\": في المعدن، تترك الذرات إلكتروناتها الخارجية حرة التجوال بين الأيونات كغاز إلكتروني مشترك. عندما توصل بطارية، تندفع هذه الإلكترونات الحرة باتجاه واحد فيولد التيار فوراً. هذا البحر نفسه يفسر لماذا المعادن توصل الحرارة أيضاً (الإلكترونات تنقل الطاقة)، ولماذا تلمع (تعكس الضوء بكفاءة)، ولماذا تُطرق وتُسحب دون كسر (الأيونات تنزلق لكن البحر يبقى ممسكاً بها). خاصية واحدة وراء كل \"معدنيتها\".",
  "en": "The secret is the \"sea of electrons\": in a metal, atoms release their outer electrons to roam freely among the ions like a shared electron gas. Connect a battery and these free electrons drift in one direction, making current instantly. This same sea explains why metals conduct heat (electrons carry the energy), why they shine (efficient light reflection), and why they bend and stretch without breaking (ions slide while the sea still grips them). One property behind everything \"metallic\"."
},
{
  "keys": [
    "لماذا الكربون اساس الحياة",
    "why is carbon the basis of life"
  ],
  "src": "https://en.wikipedia.org/wiki/Organic_chemistry",
  "ar": "لماذا اختارت الحياة الكربون دون غيره؟ لأنه الأعقد ترابطاً بين كل العناصر: أربع روابط قوية مرنة، يكوّن سلاسل وحلقات وفروعاً بأطوال لا نهائية، ويرتبط بأخيه الكربون بقوة نادرة تسمح ببناء هياكل ضخمة مستقرة في حرارة الماء. السيليكون أقرب منافس نظرياً، لكن روابطه أضعف وأقل مرونة، وثاني أكسيد السيليكون صخر صلب لا غاز يخرج بالزفير! جزيء واحد من الحمض النووي يحمل ملايين ذرات الكربون المترابطة: لا عنصر آخر يحتمل مكتبة حياة بهذا الحجم.",
  "en": "Why did life choose carbon over everything else? Because it is the most versatile bonder of all elements: four strong flexible bonds, forming chains, rings and branches of endless lengths, and it bonds to fellow carbon with rare strength, allowing huge stable structures in water's temperature. Silicon is the closest theoretical rival, but its bonds are weaker and less flexible, and silicon dioxide is hard rock, not an exhaled gas! A single DNA molecule holds millions of bonded carbons: no other element can bear a library of life this size."
},
{
  "keys": [
    "كيف تخزن البطارية الكهرباء",
    "how does a battery store electricity"
  ],
  "src": "https://en.wikipedia.org/wiki/Electrochemistry",
  "ar": "مفهوم شائع خاطئ: البطارية لا \"تخزن إلكترونات\" كخزان ماء! البطارية تخزن طاقة كيميائية في ترتيب موادها: تفاعل كيميائي \"يريد\" الحدوث لكنه مفصول داخلياً، فلا يتم إلا عبر دائرة خارجية، فيضطر الإلكترونات للمرور بجهازك في طريقها. الشحن يعكس التفاعل ويعيد المواد لحالتها العالية الطاقة، كمن يعيد رفع صخرة لقمة تلة لتتدحرج لاحقاً. لهذا تموت البطاريات مع الشحنات: كل دورة تبطئ قليلاً قدرة موادها على العودة.",
  "en": "A common misconception: a battery does not \"store electrons\" like a water tank! A battery stores chemical energy in the arrangement of its materials: a chemical reaction that \"wants\" to happen but is internally separated, so it can only proceed through an external circuit, forcing electrons through your device on their way. Charging reverses the reaction and returns the materials to their high-energy state, like lifting a boulder back up a hill to roll down later. That is why batteries die over charges: each cycle slightly reduces their materials' ability to return."
},
{
  "keys": [
    "لماذا ينكمش البالون في الثلاجة",
    "why does a balloon shrink in the fridge"
  ],
  "src": "https://en.wikipedia.org/wiki/Gas",
  "ar": "تجربة بيتية بسيطة تشرح قانون الغازات: خذ بالوناً منفوخاً إلى الثلاجة وشاهده ينكمش أمامك. جزيئات الهواء في الداخل تفقد طاقة حركتها مع البرودة، فتضرب جدار البالون أضعف وأقل، فينضغط البالون المرن حتى يتوازن الضغط من جديد بحجم أصغر. أخرجه للدفء فيستعيد انتفاخه! العلاقة رياضية دقيقة: الحجم يتناسب طردياً مع درجة الحرارة المطلقة عند ثبات الضغط. منطاد الهواء الساخن يعمل بالعكس تماماً: سخّن الهواء فيتمدد ويخف فيطير.",
  "en": "A simple home experiment explains the gas laws: take an inflated balloon to the fridge and watch it shrink. The air molecules inside lose kinetic energy to the cold, hitting the balloon wall weaker and less often, so the flexible balloon compresses until pressure rebalances at a smaller volume. Bring it back to warmth and it re-inflates! The relationship is mathematically precise: volume is proportional to absolute temperature at constant pressure. A hot air balloon works exactly in reverse: heat the air, it expands, lightens, and flies."
},
{
  "keys": [
    "لماذا لا نقسم على صفر",
    "why cant we divide by zero"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/4-1-visualize-fractions",
  "ar": "ليس حظراً اعتباطياً بل استحالة منطقية! القسمة سؤال ضرب معكوس: 12 ÷ 3 = 4 لأن 4 × 3 = 12. جرّب الآن: 12 ÷ 0 = ؟ يعني: أي عدد مضروب في صفر يعطي 12؟ لا يوجد، فكل شيء مضروب في صفر يعطي صفراً. وأسوأ: صفر ÷ صفر يناسبه كل عدد ممكن! عملية بلا جواب أو بأجوبة لا نهائية ليست عملية حسابية، لهذا \"استبعدها\" الرياضيون من التعريف. في البرمجة نفس القصة: القسمة على صفر خطأ يوقف البرنامج لأن المعالج لا يجد جواباً يعيده.",
  "en": "Not an arbitrary ban but a logical impossibility! Division is an inverse multiplication question: 12 ÷ 3 = 4 because 4 × 3 = 12. Now try: 12 ÷ 0 = ? means: what number times zero gives 12? None exists, since everything times zero gives zero. Worse: zero ÷ zero fits every possible number! An operation with no answer or infinitely many answers is not a calculation, which is why mathematicians excluded it from the definition. In programming it is the same story: division by zero is an error because the processor finds no answer to return."
},
{
  "keys": [
    "كيف تخدعنا النسب المئوية",
    "how do percentages trick us"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/6-key-concepts",
  "ar": "النسب المئوية أداة عرض قوية يمكن أن تضلل بلا كذب مباشر! مثال شهير: دواء \"يقلل خطر المرض 50%\" يبدو مذهلاً، حتى تعرف أن الخطر الأصلي 2 من مليون فصار 1 من مليون: خمسون بالمئة من لا شيء تقريباً! والعكس: \"زاد الخطر 100%\" مرعب حتى تعرف أنه صار 2 من مليون بدل واحد. القاعدة الذهبية: اسأل دائماً \"نسبة ماذا من ماذا؟\" واطلب الأرقام المطلقة مع النسب. الوعي بالنسب سلاح ضد التضليل الإعلاني والإخباري.",
  "en": "Percentages are a powerful display tool that can mislead without outright lying! A famous example: a drug that \"cuts disease risk by 50%\" sounds amazing until you learn the original risk was 2 in a million becoming 1 in a million: fifty percent of nearly nothing! Conversely, \"risk doubled by 100%\" is terrifying until you learn it went from 1 in a million to 2. The golden rule: always ask \"percent of what, out of what?\" and demand absolute numbers alongside percentages. Percentage literacy is a weapon against advertising and news spin."
},
{
  "keys": [
    "متى ساستخدم المعادلات في حياتي",
    "when will I use equations in real life"
  ],
  "src": "https://openstax.org/books/elementary-algebra-2e/pages/2-1-solve-equations-using-the-subtraction-and-addition-properties-of-equality",
  "ar": "سؤال مشروع! الحقيقة: قلّة سيحلون x+5=12 على ورقة بعد المدرسة، لكن التفكير الجبري يتسلل لحياتك يومياً دون أن تسميه. حساب \"كم أدفع إذا قسمت الفاتورة مع أصدقائي مع خصم؟\" معادلة. \"كم لتر بنزين أحتاج لرحلة بميزانية محددة؟\" معادلة. حتى \"متى أنطلق لأصل في الموعد؟\" معادلة سرعة وزمن. الجبر ليس حفظ رموز، بل تدريب عقلك على عكس العمليات وعزل المجهول: مهارة تفكير تستعملها كلما خططت أو قارنت أو قدّرت.",
  "en": "A fair question! The truth: few will solve x+5=12 on paper after school, but algebraic thinking sneaks into your life daily without being named. Calculating \"how much do I pay splitting a bill with friends after a discount?\" is an equation. \"How much fuel for a trip on a set budget?\" An equation. Even \"when should I leave to arrive on time?\" is a speed-time equation. Algebra is not memorizing symbols; it trains your mind to reverse operations and isolate the unknown: a thinking skill you use whenever you plan, compare or estimate."
},
{
  "keys": [
    "من اخترع الاحداثيات",
    "who invented coordinates"
  ],
  "src": "https://openstax.org/books/elementary-algebra-2e/pages/4-1-use-the-rectangular-coordinate-system",
  "ar": "القصة المشهورة (وقد تكون مزخرفة) أن ديكارت كان راقداً مريضاً يراقب ذبابة على سقف غرفته، وفكر: كيف أصف موقعها بدقة لشخص آخر؟ أدرك أن رقمين يكفيان: بعدها عن جدارين متعامدين. هكذا وُلد نظام الإحداثيات الكارتيزية الذي غيّر الرياضيات للأبد: فجأة صار كل شكل هندسي معادلة، وكل معادلة رسمة. بدونه لا خرائط GPS (إحداثيات على كرة)، ولا رسوم ألعاب الفيديو (إحداثيات على شاشة)، ولا رسوم البيانات. فكرة بسيطة غيرت العالم: كل موقع عنوان من أرقام.",
  "en": "The famous story (possibly embellished) says Descartes lay sick watching a fly on his ceiling and wondered: how do I describe its exact position to someone else? He realized two numbers suffice: its distance from two perpendicular walls. Thus the Cartesian coordinate system was born, changing mathematics forever: suddenly every geometric shape became an equation, and every equation a drawing. Without it: no GPS maps (coordinates on a sphere), no video game graphics (coordinates on a screen), no data charts. A simple idea that changed the world: every location is an address of numbers."
},
{
  "keys": [
    "ما سر الرقم ط",
    "what is the secret of pi"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/c-geometric-formulas",
  "ar": "باي (π ≈ 3.14159) من أغرب الأرقام في الوجود: خذ أي دائرة في الكون، عملة معدنية أو كوكباً، واقسم محيطها على قطرها تحصل على الرقم نفسه دائماً أبداً! ثابت كوني لا يتغير. والأغرب أن أرقامه العشرية لا تنتهي ولا تتكرر بنمط، وقد حسبه العلماء لعشرات التريليونات من الخانات دون نمط. كان يعتقد البعض أنه نسبة بسيطة مثل 22/7، لكن ثبت رياضياً أنه عدد غير نسبي لا يُكتب كسراً أبداً. رقم بسيط التعريف، لا نهائي الغموض.",
  "en": "Pi (π ≈ 3.14159) is one of the strangest numbers in existence: take any circle in the universe, a coin or a planet, divide its circumference by its diameter and you get the same number, always, forever! A cosmic constant that never changes. Stranger still, its decimals never end and never repeat a pattern; scientists have computed tens of trillions of digits finding none. Some believed it was a simple ratio like 22/7, but it is mathematically proven irrational, never writable as a fraction. A number with a simple definition and infinite mystery."
},
{
  "keys": [
    "لماذا الفقاعات كروية",
    "why are bubbles spherical"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/c-geometric-formulas",
  "ar": "الطبيعة مهندسة اقتصادية عبقرية! فقاعة الصابون تغلّف حجماً معيناً من الهواء بغشاء سائل، وشد الغشاء يسعى دائماً لتقليل مساحته. والحقيقة الرياضية المدهشة: الكرة هي الشكل الذي يحيط أي حجم معطى بأصغر مساحة سطح ممكنة على الإطلاق. لهذا تتجمع الفقاعات كرات، وقطرات الماء في الفضاء كرات مثالية، وحتى خلايا الرغوة المتجاورة تشترك في أوجهها بزوايا دقيقة لتوزيع الأسطح بأقل مادة. الجمال الكروي هنا ليس صدفة: إنه الحل الأمثل رياضياً.",
  "en": "Nature is a brilliantly economical engineer! A soap bubble wraps a fixed volume of air in a liquid film, and the film's tension always seeks to minimize its area. The astonishing mathematical fact: the sphere is the shape that encloses any given volume with the smallest possible surface area. That is why bubbles gather as spheres, water drops in space are perfect balls, and even neighboring foam cells share their faces at precise angles to distribute surfaces with the least material. Spherical beauty here is no coincidence: it is the mathematically optimal solution."
},
{
  "keys": [
    "هل العملة تتذكر الرميات السابقة",
    "does a coin remember previous flips"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/5-5-averages-and-probability",
  "ar": "مغالطة المقامر الشهيرة: إذا ظهرت صورة خمس مرات متتالية، نشعر بقوة أن الكتابة \"مستحقة\" الآن. لكن العملة لا ذاكرة لها إطلاقاً! كل رمية مستقلة واحتمالها 50/50 مهما سبقها. ما يحيّرنا أن سلسلة \"صورة صورة صورة صورة صورة\" تبدو مستحيلة، بينما احتمالها يساوي تماماً احتمال أي تسلسل محدد آخر من خمس رميات. الرياضيات تعد بشيء آخر: على ملايين الرميات تميل النسب الكلية للتوازن، لكن بلا أي \"تعويض\" في الرميات القادمة. الماضي لا يدفع فواتير المستقبل في الاحتمالات.",
  "en": "The famous gambler's fallacy: after five heads in a row, we strongly feel tails is now \"due\". But a coin has no memory whatsoever! Each flip is independent at 50/50 regardless of history. What confuses us is that \"heads heads heads heads heads\" looks impossible, while its probability equals exactly that of any other specific five-flip sequence. Mathematics promises something else: over millions of flips the overall ratios tend to balance, but with no \"compensation\" in upcoming flips. The past pays no bills for the future in probability."
},
{
  "keys": [
    "متى يكذب المتوسط",
    "when does the average lie"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/5-5-averages-and-probability",
  "ar": "المتوسط الحسابي أمين في مجموعات متجانسة، لكنه يضلل فظيعاً مع القيم المتطرفة! المثال الكلاسيكي: دخل تسعة أشخاص في مقهى 5000 جنيه شهرياً، فيدخل ميليونير بدخله مليون، ف\"يصبح\" متوسط دخل المقهى 104 آلاف بينما لا أحد فيه قريب من هذا الرقم! هنا يأتي الوسيط لينقذ الحقيقة: دخل الشخص الأوسط ما زال 5000. القاعدة: عند وجود قيم شاذة ضخمة (دخل، أسعار عقارات) اطلب الوسيط، وعند التجانس (درجات حرارة أيام) المتوسط ممتاز. اختيار المقياس نفسه قرار صادق أو مخادع أحياناً.",
  "en": "The arithmetic mean is honest in uniform groups, but it misleads badly with extreme values! The classic example: nine people in a café earn 5000 monthly, then a millionaire walks in earning a million, and the café's \"average income\" becomes 104 thousand while nobody there is near that figure! Here the median rescues the truth: the middle person's income is still 5000. The rule: with huge outliers (income, property prices) ask for the median; with uniformity (daily temperatures) the mean is excellent. Choosing the measure itself is sometimes an honest or deceptive decision."
},
{
  "keys": [
    "ما فائدة الدوال في الواقع",
    "what are functions good for"
  ],
  "src": "https://openstax.org/books/college-algebra-2e/pages/3-1-functions-and-function-notation",
  "ar": "الدالة فكرة أعمق من الرموز: إنها آلة علاقة، تدخل لها شيئاً فتعيد نتيجة مضمونة بالقاعدة نفسها. حياتك مليئة بها دون تسمية: أجرة التاكسي دالة في المسافة (عداد يحسب بقاعدة ثابتة)، وقت الطبخ دالة في وزن اللحم، استهلاك جوالك للبطارية دالة في ساعات الشاشة. قوة الدوال أنها بمجرد فهمها تتنبأ: عرف القاعدة مرة، تستطيع حساب أي حالة جديدة. كل علم وكل اقتصاد وكل برنامج حاسوب مبني على فكرة \"المدخل يحدد المخرج\".",
  "en": "A function is a deeper idea than symbols: it is a relationship machine; feed it something and it returns a guaranteed result by the same rule. Your life is full of them unnamed: taxi fare is a function of distance (a meter computing by a fixed rule), cooking time a function of meat weight, your phone's battery drain a function of screen hours. The power of functions is prediction: learn the rule once and you can compute any new case. Every science, economy and computer program is built on the idea \"input determines output\"."
},
{
  "keys": [
    "كيف تستخدم الخرائط النسب",
    "how do maps use ratios"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/6-5-solve-proportions-and-their-applications",
  "ar": "خريطتك في جيبك درس نسب متكامل! عبارة \"مقياس 1:100000\" تعني: كل سنتيمتر على الورق يقابل 100000 سنتيمتر (كيلومتر كامل) على الأرض. النسبة هنا عقد بين الراسم والقارئ: المسافات النسبية محفوظة، فيمكنك قياس المسافة بين مدينتين بمسطرتك وضربها في المقياس لتعرف المسافة الحقيقية. المبدأ نفسه في مجسمات المعماريين ورسوم الهندسة وصور الميكروسكوب المكبرة: عالم مصغّر أو مكبّر بثوابت نسبية دقيقة. حتى تكبير صورة في جوالك نسبة تتغير أمامك.",
  "en": "The map in your pocket is a complete lesson in ratios! The phrase \"scale 1:100000\" means: every centimeter on paper stands for 100000 centimeters (a full kilometer) on the ground. The ratio is a contract between mapmaker and reader: relative distances are preserved, so you can measure between two cities with your ruler and multiply by the scale for the real distance. The same principle in architects' models, engineering drawings and magnified microscope images: a shrunken or enlarged world with precise proportional constants. Even zooming a photo on your phone is a ratio changing before you."
},
{
  "keys": [
    "لماذا سالب في سالب موجب",
    "why is negative times negative positive"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/3-1-introduction-to-integers",
  "ar": "من أكثر القواعد غموضاً للطلاب، وهذا تفسير بديهي: تخيل الضرب في سالب واحد كأمر \"اعكس الاتجاه\". موجب × موجب: امشِ للأمام كما أنت. موجب × سالب: امشِ للأمام ثم اعكس، فتصير للخلف. سالب × سالب: كنت متجهاً للخلف ثم جاء أمر \"اعكس\"، فعدت للأمام! تفسير آخر بالأنماط: 3×(-2)=-6، 2×(-2)=-4، 1×(-2)=-2، 0×(-2)=0... لاحظ النتيجة تزيد 2 كل خطوة، فالخطوة المنطقية التالية (-1)×(-2) يجب أن تكمل النمط: +2. الرياضيات تكمل أنماطها باتساق، والاتساق يفرض القاعدة.",
  "en": "One of the most mysterious rules for students, and here is an intuitive explanation: think of multiplying by negative one as the command \"reverse direction\". Positive × positive: walk forward as you are. Positive × negative: walk forward then reverse, you end up backward. Negative × negative: you were facing backward then came \"reverse\", so you face forward again! Another explanation by patterns: 3×(-2)=-6, 2×(-2)=-4, 1×(-2)=-2, 0×(-2)=0... notice the result rises by 2 each step, so the logical next step (-1)×(-2) must continue the pattern: +2. Mathematics completes its patterns consistently, and consistency forces the rule."
},
{
  "keys": [
    "لماذا الفاصلة العشرية مهمة",
    "why does the decimal point matter"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/5-1-decimals",
  "ar": "خطأ بفاصلة واحدة غيّر تاريخاً طبياً: جرعة دواء تُكتب 1.0 تُقرأ أحياناً 10 فيتضاعف الدواء عشر مرات، ولهذا تمنع بروتوكولات السلامة كتابة \"الصفر التابع\" الآن. الفاصلة العشرية ليست زخرفة: إنها الحد بين العالم الصحيح وعالم الأجزاء، وكل خانة يمينها عُشر سابقتها. عندما تدفع 9.99 بدل 99.9 تشعر بالفرق في محفظتك! تقدير الناتج قبل الحساب (هل الجواب قريب من 10 أم 100؟) أفضل حارس ضد أخطاء الفاصلة.",
  "en": "A single decimal point error changed medical history: a drug dose written 1.0 was sometimes read as 10, multiplying the medicine tenfold, which is why safety protocols now ban the \"trailing zero\". The decimal point is not decoration: it is the border between the world of wholes and the world of parts, and each place right of it is a tenth of the previous one. When you pay 9.99 instead of 99.9 you feel the difference in your wallet! Estimating the result before calculating (is the answer near 10 or 100?) is the best guard against point errors."
},
{
  "keys": [
    "من قرر ترتيب العمليات",
    "who decided the order of operations"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/2-1-use-the-language-of-algebra",
  "ar": "لم يفرضه أحد من علٍ، بل استقر كاتفاق ضروري مثل قيادة السيارات على يمين الطريق. المبرر العميق أنه ليس اعتباطياً تماماً: الضرب جمع متكرر، فمن الطبيعي \"تفكيكه\" قبل الجمع لأنه العملية الأكثر تكثيفاً، والأسس ضرب متكرر فتسبق الضرب للسبب نفسه، والأقواس استثناء معلن يعطل الهرم عندما نريد. الحاسوب والآلة الحاسبة والرياضيون كلهم يتبعون الاتفاق نفسه، ولو خالفته دولتان لتعارضت حساباتهما. إنه دستور عالمي صامت للأرقام.",
  "en": "Nobody imposed it from above; it settled as a necessary convention, like driving on the right side of the road. The deeper justification is that it is not fully arbitrary: multiplication is repeated addition, so \"unpacking\" it before addition is natural since it is the denser operation; exponents are repeated multiplication so they precede it for the same reason; parentheses are a declared exception suspending the hierarchy when we want. Computers, calculators and mathematicians all follow the same convention, and if two countries disagreed their calculations would clash. It is a silent global constitution for numbers."
},
{
  "keys": [
    "لماذا اي عدد اس صفر واحد",
    "why is anything to the zero power one"
  ],
  "src": "https://openstax.org/books/elementary-algebra-2e/pages/6-2-use-multiplication-properties-of-exponents",
  "ar": "يبدو غامضاً: كيف يكون 5⁰ = 1 وأنا لم أضرب شيئاً؟ الأنماط تجيب بإقناع: 5³=125، 5²=25، 5¹=5... لاحظ أننا نقسم على 5 كلما نقص الأس واحداً: 125÷5=25، 25÷5=5. الخطوة التالية إجبارية: 5÷5=1، إذن 5⁰=1. أي نتيجة أخرى تحطم قوانين الأسس كلها (مثل قاعدة جمع الأسس عند الضرب). حتى الصفر نفسه: 0⁰ حالة خاصة يتعامل معها الرياضيون بحذر شديد حسب السياق. القاعدة ليست مزاجاً، بل إلزام من اتساق النظام كله.",
  "en": "It seems mysterious: how does 5⁰ = 1 when nothing was multiplied? Patterns answer convincingly: 5³=125, 5²=25, 5¹=5... notice we divide by 5 each time the exponent drops by one: 125÷5=25, 25÷5=5. The next step is forced: 5÷5=1, so 5⁰=1. Any other result would shatter all exponent laws (like adding exponents when multiplying). Even zero itself: 0⁰ is a special case mathematicians handle with great care depending on context. The rule is not a whim; it is compelled by the consistency of the whole system."
},
{
  "keys": [
    "لماذا يستخدم العلماء الترميز العلمي",
    "why do scientists use scientific notation"
  ],
  "src": "https://openstax.org/books/elementary-algebra-2e/pages/6-7-integer-exponents-and-scientific-notation",
  "ar": "لأن الكون يرفض الأرقام المريحة! المسافة لأقرب نجم 40 تريليون كيلومتر، وكتلة ذرة الهيدروجين 0.00000000000000000000000167 جرام. كتابة هذه الأصفار ليست مملة فحسب بل خطرة: صفر زائد أو ناقص يعني خطأً بعشرة أضعاف. الترميز العلمي يفصل الأمرين: الرقم الدقيق (9.46) عن المقام (10¹⁵)، فيظهر حجم الفرق بين نجم وذرة بنظرة واحدة: 31 مرتبة! كما يجعل الضرب والقسمة سهلاً بجمع الأسس وطرحها. أداة نجاة للعقول في كون هائل المقاييس.",
  "en": "Because the universe refuses comfortable numbers! The distance to the nearest star is 40 trillion kilometers, and a hydrogen atom's mass is 0.00000000000000000000000167 grams. Writing these zeros is not just boring but dangerous: one extra or missing zero means a tenfold error. Scientific notation separates the two: the precise figure (9.46) from the magnitude (10¹⁵), so the size gap between a star and an atom appears at a glance: 31 orders of magnitude! It also makes multiplication and division easy by adding and subtracting exponents. A survival tool for minds in a universe of immense scales."
},
{
  "keys": [
    "لماذا الدائرة 360 درجة",
    "why is a circle 360 degrees"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem",
  "ar": "لماذا ليست 100 مثلاً؟ الجواب تراث بابلي عمره 4000 سنة! البابليون استخدموا نظام عد ستيني الأساس وربطوا الدائرة بسنتهم (نحو 360 يوماً آنذاك) ومسار الشمس اليومي. لكن الرقم صمد لسبب رياضي عملي: 360 من أكثر الأعداد قابلية للقسمة في الوجود، يقبل القسمة على 2 و3 و4 و5 و6 و8 و9 و10 و12 و15... جرّب تقسيم 100 درجة إلى ثلاثة أثلاث! مرونة التقسيم جعلته مثالياً للملاحين والفلكيين والمعماريين، فبقي حتى اليوم رغم كل ثورات القياس الأخرى.",
  "en": "Why not 100, for example? The answer is 4000-year-old Babylonian heritage! The Babylonians used a base-60 number system and linked the circle to their year (about 360 days then) and the sun's daily path. But the number survived for a practical mathematical reason: 360 is among the most divisible numbers in existence, accepting division by 2, 3, 4, 5, 6, 8, 9, 10, 12, 15... try splitting a 100-degree circle into thirds! That divisibility made it ideal for sailors, astronomers and architects, so it remains today despite every other measurement revolution."
},
{
  "keys": [
    "هل المحيط الاكبر يعني مساحة اكبر",
    "does bigger perimeter mean bigger area"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/9-4-use-properties-of-rectangles-triangles-and-trapezoids",
  "ar": "فخ شائع: الظن أن المحيط الأكبر يعني مساحة أكبر تلقائياً. الحقيقة أنهما مستقلان! مربع 10×10 محيطه 40 ومساحته 100، لكن مستطيلاً نحيلاً 1×19 محيطه 40 أيضاً ومساحته 19 فقط. يمكنك رفع المحيط بلا حدود بتمويج الحواف بينما المساحة بالكاد تتغير! الحقيقة الهندسية العميقة: لمحيط معين، أكبر مساحة ممكنة تحققها الدائرة دائماً (ثم المربع بين المستطيلات). لهذا تعرف الأمم القديمة أن الأرض الدائرية الشكل هي الأثمن مساحةً لسورها.",
  "en": "A common trap: assuming a bigger perimeter automatically means a bigger area. In truth they are independent! A 10×10 square has perimeter 40 and area 100, but a thin 1×19 rectangle has perimeter 40 too with area only 19. You can raise the perimeter endlessly by wiggling the edges while the area barely changes! The deep geometric fact: for a given perimeter, the largest possible area is always the circle's (then the square among rectangles). That is why ancient peoples knew circular land was the most area-valuable for its fence."
},
{
  "keys": [
    "ماذا يعني الميل السالب",
    "what does negative slope mean"
  ],
  "src": "https://openstax.org/books/elementary-algebra-2e/pages/4-4-understand-slope-of-a-line",
  "ar": "الميل باختصار: اتجاه ومقدار تغير. الموجب يقول \"القيمتان تصعدان معاً\": كلما زادت ساعات التدريب زادت اللياقة. السالب يقول \"واحدة تصعد فتهبط الأخرى\": كلما زادت السرعة قل زمن الرحلة. والصفر خط مستوٍ: لا علاقة، كطولك مقابل درجاتك. والميل غير المعرف (خط رأسي) يقول: المدخل لا يتغير أصلاً. قراءة الميل في أي رسم بياني تعطيك القصة كاملة بلمحة: هل العلاقة طردية أم عكسية، وكم هي حادة؟ لغة واحدة تفهمها الاقتصادات والفيزياء والطب.",
  "en": "Slope in short: direction and amount of change. Positive says \"the two values rise together\": more training hours, more fitness. Negative says \"one rises so the other falls\": more speed, less trip time. Zero is a level line: no relationship, like your height versus your grades. And undefined slope (a vertical line) says: the input never changes at all. Reading slope in any chart gives you the whole story at a glance: is the relationship direct or inverse, and how steep? One language understood by economics, physics and medicine."
},
{
  "keys": [
    "لماذا الاعداد الاولية مهمة",
    "why do prime numbers matter"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/2-5-prime-factorization-and-the-least-common-multiple",
  "ar": "ليست لعبة رياضية عبثية: حياتك الرقمية محمية بها! تشفير حسابك البنكي ورسائلك يعتمد على حقيقة غريبة: ضرب عددين أوليين ضخمين سهل (ثوانٍ بالحاسوب)، لكن تفكيك ناتجهما الضخم إلى عامليه شبه مستحيل عملياً (مليارات السنين للحواسيب الحالية). باب مغلق باتجاه واحد يحمي أسرارك! والأعداد الأولية ما زالت تخبئ ألغازاً عمرها قرون، مثل حدسية الأعداد الأولية التوأم، يتنافس أعظم العقول على حلها. أبسط الأرقام تعريفاً، أكثرها أسراراً.",
  "en": "Not a pointless math game: your digital life is protected by them! Your bank account and message encryption rely on a strange fact: multiplying two huge primes is easy (seconds for a computer), but factoring their huge product back into its two factors is practically impossible (billions of years for current computers). A one-way locked door guarding your secrets! Primes still hide centuries-old puzzles, like the twin prime conjecture, that the greatest minds compete to solve. The simplest numbers to define, the richest in secrets."
},
{
  "keys": [
    "هل فيثاغورس اول من اكتشف النظرية",
    "did pythagoras discover the theorem"
  ],
  "src": "https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem",
  "ar": "المفاجأة التاريخية: لا! ألواح بابلية أقدم من فيثاغورس بألف سنة تسجل ثلاثيات مثل (3،4،5) وتطبقها في قياس الأراضي، والبناؤون المصريون استخدموا حبالاً معقودة لصناعة زوايا قائمة دقيقة للأهرامات، والهندوس والصينيون عرفوها مستقلاً. فما فضل فيثاغورس إذن؟ يُنسب لمدرسته إنتاج أول برهان عام منظم: الانتقال من \"القاعدة تعمل في أمثلتنا\" إلى \"القاعدة صحيحة لكل مثلث قائم في الكون\". الفرق بين الحرفي والرياضي هو البرهان، وهذه اللحظة ولادة الرياضيات الإثباتية.",
  "en": "The historical surprise: no! Babylonian tablets a thousand years older than Pythagoras record triples like (3,4,5) and apply them in land surveying, Egyptian builders used knotted ropes to make precise right angles for pyramids, and Indian and Chinese mathematicians knew it independently. So what was Pythagoras' contribution? His school is credited with the first organized general proof: moving from \"the rule works in our examples\" to \"the rule is true for every right triangle in the universe\". The difference between a craftsman and a mathematician is proof, and that moment is the birth of proof-based mathematics."
},
{
  "keys": [
    "لماذا تبدو الاشياء توقف وحدها",
    "why do things seem to stop on their own"
  ],
  "src": "https://openstax.org/books/college-physics-2e/pages/4-2-newtons-first-law-of-motion-inertia",
  "ar": "تجربتنا اليومية تخدعنا: ادفع كتاباً فيتوقف، فنستنتج خطأً أن \"الحركة تحتاج دفعاً مستمراً\" كما ظن الفلاسفة ألفي سنة. الحقيقة العكسية: الكتاب يتوقف لأن قوة خفية (الاحتكاك) توقفه، لا لأن الدفع نفد! في الفضاء حيث لا احتكاك يُذكر، تسافر مركبة فوياجر منذ 1977 بلا محرك وستكمل ملايين السنين بسرعتها نفسها. نيوتن قلب المنطق: الحركة المنتظمة لا تحتاج تفسيراً؛ التغير فيها وحده هو ما يحتاج قوة. هذا الانقلاب أسس الفيزياء الحديثة كلها.",
  "en": "Daily experience deceives us: push a book and it stops, so we wrongly conclude \"motion needs continuous pushing\" as philosophers believed for two thousand years. The truth is reversed: the book stops because a hidden force (friction) stops it, not because the push ran out! In space where friction is negligible, the Voyager probe has traveled since 1977 with no engine and will continue millions of years at the same speed. Newton inverted the logic: steady motion needs no explanation; only change in motion needs a force. This inversion founded all of modern physics."
},
{
  "keys": [
    "هل الاحتكاك عدو دائما",
    "is friction always an enemy"
  ],
  "src": "https://openstax.org/books/college-physics-2e/pages/5-1-friction",
  "ar": "نلعن الاحتكاك عندما يهدر وقود السيارات، لكن تخيل عالماً بلا احتكاك ثانية واحدة: لن تستطيع المشي (قدماك تنزلقان بلا قبضة)، ولا الإمساك بكوب (يفلت كأنه صابون)، ولا توقف سيارة (الفرامل احتكاك!)، ولا حتى ربط حذائك (العقدة تُحل). حتى كتابتك بالقلم احتكاك بين الرصاص والورق. الحكمة الهندسية ليست إلغاء الاحتكاك بل إدارته: نزيده حيث نريد قبضة (إطارات، أرضيات ملاعب) ونقلله حيث نريد انسياباً (محركات، مفاصل صناعية). إنه صديق وعدو، والفن في التوظيف.",
  "en": "We curse friction when it wastes car fuel, but imagine a world without it for one second: you could not walk (your feet would slip with no grip), nor hold a cup (it slips like soap), nor stop a car (brakes are friction!), nor even tie your shoes (the knot undoes itself). Even writing with a pencil is friction between graphite and paper. Engineering wisdom is not eliminating friction but managing it: we raise it where we want grip (tires, playground floors) and lower it where we want glide (engines, artificial joints). It is friend and foe, and the art is in the deployment."
},
{
  "keys": [
    "لماذا يتراجع المدفع للخلف",
    "why does a cannon recoil"
  ],
  "src": "https://openstax.org/books/college-physics-2e/pages/8-1-linear-momentum-and-force",
  "ar": "حفظ الزخم يجيب بجمال: قبل الإطلاق، المدفع والقذيفة ساكنان فالزخم الكلي صفر. لحظة الانفجار تندفع القذيفة للأمام بزخم هائل، ولا مفر للكون: يجب أن يبقى المجموع صفراً، فيندفع المدفع للخلف بزخم معاكس مساوٍ. لاحظ التفصيلة الذكية: الزخم = كتلة × سرعة، والمدفع أثقل بكثير، فسرعته الراجعة أصغر بكثير من سرعة القذيفة بنفس النسبة. الصاروخ \"مدفع ممتاز\" يقذف غازات باستمرار، ولهذا لا يحتاج شيئاً يدفع ضده في الفضاء: يدفع غازاته الخاصة ويتقدم بالارتداد.",
  "en": "Momentum conservation answers beautifully: before firing, cannon and shell are still, so total momentum is zero. At the blast the shell surges forward with huge momentum, and the universe has no escape: the sum must stay zero, so the cannon surges backward with equal opposite momentum. Note the clever detail: momentum = mass × speed, and the cannon is far heavier, so its recoil speed is far smaller than the shell's by the same ratio. A rocket is an \"excellent cannon\" firing gas continuously, which is why it needs nothing to push against in space: it pushes its own gases and advances by recoil."
},
{
  "keys": [
    "لماذا اخترع الكيميائيون المول",
    "why did chemists invent the mole"
  ],
  "src": "https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept",
  "ar": "لأنهم يواجهون مشكلة فريدة: التعامل مع أعداد لا تُحصى من الجسيمات بأدوات وزن عادية! ذرة واحدة أخف من أن توزن بأي ميزان، لكن التفاعلات تحدث ذرة بذرة وجزيئاً بجزيء. الحل العبقري: وحدة \"جملة\" تربط المجهري بالملموس. كما نشتري البيض بالدستة لا بالحبة، يعدّ الكيميائي بالمول: مول واحد من أي مادة = 6.022×10²³ جسيم، وكتلته بالجرامات هي ببساطة كتلته الذرية أو الجزيئية نفسها! جسر سحري: أوزن بالجرام، واحسب بالذرات.",
  "en": "Because chemists face a unique problem: handling uncountable numbers of particles with ordinary weighing tools! A single atom is too light for any scale, yet reactions happen atom by atom and molecule by molecule. The brilliant solution: a \"bulk\" unit linking the microscopic to the tangible. Just as we buy eggs by the dozen not by the piece, the chemist counts by the mole: one mole of any substance = 6.022×10²³ particles, and its mass in grams is simply its atomic or molecular mass itself! A magic bridge: weigh in grams, count in atoms."
},
{
  "keys": [
    "كيف نعرف عمر الاثار القديمة",
    "how do we know the age of ancient artifacts"
  ],
  "src": "https://openstax.org/books/chemistry-2e/pages/2-3-atomic-structure-and-symbolism",
  "ar": "بالساعات الذرية المدمجة في كل كائن حي! الكربون 14 نظير مشع يتكون في الغلاف الجوي باستمرار، تمتصه النباتات في البناء الضوئي ويصل إلينا بالغذاء بنسبة ثابتة. لحظة موت الكائن يتوقف الاستيراد، وتبدأ الذرات المشعة بالاضمحلال بإيقاع دقيق معروف: يفقد نصفها كل 5730 سنة. قس الكربون 14 المتبقي في عظمة أو بردية، واحسب كم نصف عمر مر، فتحصل على عمرها! هكذا عرفنا أعمار المومياءات والمخطوطات وأدوات الصيد الأولى: كيمياء تقرأ التاريخ.",
  "en": "Through atomic clocks built into every living thing! Carbon-14, a radioactive isotope, forms constantly in the atmosphere; plants absorb it in photosynthesis and it reaches us through food at a steady ratio. The moment an organism dies, importing stops, and the radioactive atoms start decaying at a precise known rhythm: half of them gone every 5730 years. Measure the carbon-14 left in a bone or papyrus, count how many half-lives passed, and you get its age! That is how we learned the ages of mummies, manuscripts and the first hunting tools: chemistry reading history."
},
{
  "keys": [
    "لماذا نحفظ الطعام في الثلاجة",
    "why do we refrigerate food"
  ],
  "src": "https://openstax.org/books/chemistry-2e/pages/12-1-chemical-reaction-rates",
  "ar": "الثلاجة سلاحك في معركة كيميائية خفية: فساد الطعام تفاعلات كيميائية وأيض بكتيري، وقاعدة التقريب الشهيرة تقول إن خفض الحرارة 10 درجات يبطئ معظم التفاعلات للنصف تقريباً! الجزيئات الباردة تتحرك أبطأ فتتصادم أقل وبطاقة أدنى، فقليل منها يتجاوز \"حاجز طاقة التنشيط\" اللازم للتفاعل. التجميد أكثر صرامة: يحبس الماء جليداً فتتوقف حركة الجزيئات والبكتيريا شبه كلياً. كل قاعدة حفظ طعام (تبريد، تجفيف، تمليح، تفريغ هواء) هي استراتيجية لخنق تفاعل أو ميكروب.",
  "en": "Your fridge is a weapon in a hidden chemical war: food spoilage is chemical reactions plus bacterial metabolism, and the famous rule of thumb says lowering temperature by 10 degrees roughly halves most reaction rates! Cold molecules move slower, collide less often and with lower energy, so few of them cross the \"activation energy barrier\" needed to react. Freezing is stricter: it locks water as ice, nearly halting molecule and microbe movement. Every food preservation rule (cooling, drying, salting, vacuum sealing) is a strategy to choke a reaction or a microbe."
},
{
  "keys": [
    "لماذا تنقسم الخلايا",
    "why do cells divide"
  ],
  "src": "https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle",
  "ar": "ثلاثة أسباب تحكم قرار الانقسام: النمو (كنت خلية واحدة فصرت تريليونات)، والترميم (جرحك يلتئم بخلايا جديدة تعوض التالف)، والاستبدال الدوري (خلايا جلدك وبطانة أمعائك تتجدد باستمرار؛ تفقد ملايين الخلايا كل يوم وتُعوَّض!). المدهش أن الانقسام المتساوي يضمن أن كل خلية ابنة تحصل على نسخة كاملة طبق الأصل من الكروموسومات الـ46: الخلية تنسخ مكتبتها الجينية كاملة ثم توزع نسختين متطابقتين بعدالة معمارية مذهلة. الخطأ في هذه العدالة نادرة مكلفة، لذلك تحرسها نقاط تفتيش صارمة.",
  "en": "Three reasons govern the decision to divide: growth (you were one cell and became trillions), repair (your wound heals with new cells replacing damaged ones), and routine replacement (your skin and gut lining cells renew constantly; you lose millions of cells daily and they are replaced!). Amazingly, mitosis guarantees each daughter cell a full identical copy of the 46 chromosomes: the cell copies its entire genetic library then distributes two identical sets with stunning architectural fairness. Errors in this fairness are rare and costly, which is why strict checkpoints guard it."
},
{
  "keys": [
    "لماذا تذبل الخضروات في الماء المالح",
    "why do vegetables wilt in salt water"
  ],
  "src": "https://openstax.org/books/biology-2e/pages/5-2-passive-transport",
  "ar": "تجربة مطبخ تكشف قوة خفية عظيمة: غشاء الخلية النباتية \"شبه منفذ\"، يعبر الماء بحرية ويعيق الأملاح. في الماء المالح الخارجي، تركيز الماء الحر خارج الخلية أقل من داخلها، فينسحب الماء خارجاً بحثاً عن التوازن، وتفقد الخلية انتفاخها فيذبل الخس. في الماء النقي يحدث العكس: يتدفق الماء داخلاً فتنتفش الخلايا وتصبح مقرمشة! هذه \"الأسموزية\" هي نفسها سبب أن شرب ماء البحر عطش قاتل: يسحب الماء من خلاياك بدل سقيها.",
  "en": "A kitchen experiment revealing a great hidden force: the plant cell membrane is \"semipermeable\", letting water cross freely while blocking salts. In salt water outside, the free water concentration outside the cell is lower than inside, so water withdraws outward seeking balance, the cell loses its turgor and the lettuce wilts. In pure water the opposite happens: water flows in, cells plump up and become crisp! This same \"osmosis\" is why drinking seawater is deadly thirst: it pulls water out of your cells instead of watering them."
},
{
  "keys": [
    "لماذا نشبه اخوتنا ولا نطابقهم",
    "why do siblings look alike but not identical"
  ],
  "src": "https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis",
  "ar": "الانقسام الاختزالي مصنع خلط وراثي عبقري يعمل في مرحلتين: أولاً \"العبور\": الكروموسومات المتجانسة (نسخة أبيك ونسخة أمك من الكروموسوم نفسه) تتبادل قطعاً فعلياً قبل الانفصال، فتولد كروموسومات هجينة لم توجد في أحد من قبل! ثانياً: التوزيع العشوائي لكل زوج على حدة، وحساب الاحتمالات يعطي أكثر من 8 ملايين تشكيلة ممكنة من الأب، ومثلها من الأم: أي طفل هو واحد من تريليونات الاحتمالات. أشقاؤك إذن خلطات مختلفة من الورثة نفسها، والتوائم المتماثلة وحدها تشارك الخلطة الكاملة.",
  "en": "Meiosis is a genius genetic mixing factory working in two stages: first \"crossing over\": homologous chromosomes (your father's copy and mother's copy of the same chromosome) physically swap segments before separating, generating hybrid chromosomes that never existed before! Second: random distribution of each pair independently, and probability math gives over 8 million possible combinations from the father, and as many from the mother: any child is one of trillions of possibilities. Your siblings are different shuffles of the same inheritance, and only identical twins share the complete shuffle."
},
{
  "keys": [
    "كيف نرى الاشعة السينية ما لا نراه",
    "how do x rays see what we cannot"
  ],
  "src": "https://openstax.org/books/college-physics-2e/pages/24-3-the-electromagnetic-spectrum",
  "ar": "الطيف الكهرومغناطيسي عائلة واحدة بشخصيات مختلفة: كلها موجات ضوء، لكن بطول موجي يحدد سلوكها. العين ترى نافذة ضيقة منها فقط. الأشعة السينية قصيرة الموجة عالية الطاقة: تخترق اللحم الناعم وتمتصها العظام الكثيفة أكثر، فيظهر الهيكل ظلاً على الفيلم. والأشعة تحت الحمراء تشعر بها جلدك دفئاً، والراديوية الطويلة تعبر الجدران بلا أذى لضعف طاقتها. نفس الفيزياء، حجج اختراق مختلفة: الطاقة العالية تخترق وتؤذي، والمنخفضة تعبر بسلام. لذلك نحتمي من السينية ونعانق موجات الراديو.",
  "en": "The electromagnetic spectrum is one family with different personalities: all are light waves, but wavelength decides behavior. The eye sees only a narrow window of them. X-rays are short-wavelength and high-energy: they penetrate soft flesh while dense bone absorbs them more, so the skeleton appears as a shadow on film. Infrared you feel as warmth on your skin, and long radio waves pass through walls harmlessly due to their weak energy. Same physics, different penetrating arguments: high energy pierces and harms, low energy passes peacefully. That is why we shield from X-rays and embrace radio waves."
},
{
  "keys": [
    "لماذا مقبض الباب بعيد عن المفصلة",
    "why is the door handle far from the hinge"
  ],
  "src": "https://openstax.org/books/college-physics-2e/pages/9-2-the-second-condition-for-equilibrium",
  "ar": "لاحظها في بيتك: كل مقابض الأبواب في العالم عند الحافة البعيدة عن المفصلات، وليست صدفة تصميمية! العزم = القوة × الذراع العمودية، فكلما ابتعد نقطة التأثير عن محور الدوران تضاعفت فعالية قوتك. جرّب دفع الباب قرب مفصلته: تحتاج قوة مضاعفة عدة مرات للنتيجة نفسها. المهندسون يوزعون المقابض والمفاتيح والرافعات على هذا المبدأ، وأدواتك في المطبخ (فتاحة، كسارة بندق) روافع عزم مقنّعة. الفيزياء مختبئة في تصميم كل يد تمسكها.",
  "en": "Notice it in your home: every door handle in the world sits at the edge far from the hinges, and that is no design coincidence! Torque = force × perpendicular lever arm, so the farther the point of application from the rotation axis, the more your force multiplies. Try pushing the door near its hinge: you need several times the force for the same result. Engineers distribute handles, wrenches and levers on this principle, and your kitchen tools (can opener, nutcracker) are disguised torque levers. Physics hides in the design of every handle you grip."
},
{
  "keys": [
    "لماذا يطفو الجبل الجليدي",
    "why does an iceberg float"
  ],
  "src": "https://openstax.org/books/college-physics-2e/pages/11-2-density",
  "ar": "جليد الماء حالة شاذة مدهشة: معظم المواد تتقلص وتزداد كثافة عند التجمد فتغوص في سائلها، لكن الماء يتمدد عند التجمد! بلورة الجليد السداسية ترتب الجزيئات بفراغات أكبر، فتنخفض كثافة الجليد إلى نحو 92% من كثافة الماء، فيطفو مع غمر 90% منه تحت السطح: هنا جاءت عبارة \"قمة جبل الجليد\"! والأعمق: لو غاص الجليد كباقي المواد لتجمدت البحيرات من القاع صعوداً وماتت أسماكها شتاءً. غرابة الماء هذه ليست تفصيلة؛ إنها سبب بقاء الحياة المائية في المناخات الباردة.",
  "en": "Water ice is an astonishing anomaly: most substances shrink and densify when freezing, sinking in their own liquid, but water expands when it freezes! Ice's hexagonal crystal arranges molecules with larger gaps, dropping ice's density to about 92% of water's, so it floats with 90% submerged: hence the phrase \"tip of the iceberg\"! And deeper still: if ice sank like everything else, lakes would freeze from the bottom up and their fish would die each winter. This quirk of water is no detail; it is why aquatic life survives cold climates."
},
{
  "keys": [
    "كيف يسرع المحفز دون ان يستهلك",
    "how does a catalyst speed up without being consumed"
  ],
  "src": "https://openstax.org/books/chemistry-2e/pages/12-7-catalysis",
  "ar": "تخيل عبور جبل بين واديين: السير فوق القمة متعب وبطيء، والنفق أسرع بكثير. المحفز \"ينقب نفقاً\": يوفر للتفاعل مساراً كيميائياً بديلاً بطاقة تنشيط أقل، فيعبر عدد أكبر بكثير من الجزيئات في الثانية نفسها. والأجمل: المحفز يشارك مؤقتاً ثم يخرج من نهاية المسار كما دخل، جاهزاً لجولة جديدة، فحفنة صغيرة منه تعالج ملايين الجزيئات. إنزيماتك محفزات حيوية: بدونها تحتاج تفاعلات هضمك سنوات بدل ثوانيها، أي أن الحياة نفسها بإيقاعها الحالي مستحيلة بلا تحفيز.",
  "en": "Imagine crossing a mountain between two valleys: walking over the summit is tiring and slow, while a tunnel is far faster. A catalyst \"digs a tunnel\": it offers the reaction an alternative chemical path with lower activation energy, so far more molecules cross per second. Even better: the catalyst participates briefly then exits the path's end as it entered, ready for another round, so a small pinch of it processes millions of molecules. Your enzymes are biological catalysts: without them your digestion reactions would need years instead of seconds; life at its current pace is impossible without catalysis."
},
{
  "keys": [
    "كيف يتزن التفاعل",
    "how does a reaction reach balance"
  ],
  "src": "https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria",
  "ar": "المفهوم الخاطئ الشائع: أن الاتزان الكيميائي يعني \"توقف\" التفاعل. الحقيقة أجمل: اتزان ديناميكي! عند الاتزان يستمر التفاعل الأمامي والعكسي بلا توقف لكن بسرعتين متساويتين تماماً، فتبقى التراكيز ثابتة كميزان متحرك. تخيل مصعدين في مول: الناس تصعد وتنزل باستمرار، لكن عدد الأدوار يبقى ثابتاً عندما يتساوى الصاعدون بالنازلين. وقاعدة لوشاتلييه العملية: أزعج الاتزان (زد مادة أو ارفع حرارة) فينزاح النظام لمقاومة إزعاجك. التفاعلات \"تقاوم التغيير\" كما تقاومه الأنظمة الحية.",
  "en": "The common misconception: chemical equilibrium means the reaction \"stopped\". The truth is lovelier: dynamic equilibrium! At equilibrium the forward and reverse reactions continue nonstop at exactly equal rates, so concentrations stay constant like a moving balance. Imagine escalators in a mall: people go up and down constantly, but each floor's crowd stays steady when risers equal descenders. And Le Chatelier's practical rule: disturb the equilibrium (add a substance or raise heat) and the system shifts to resist your disturbance. Reactions \"resist change\" just as living systems do."
},
{
  "keys": [
    "لماذا تحتاج الخلية مضخات",
    "why do cells need pumps"
  ],
  "src": "https://openstax.org/books/biology-2e/pages/5-3-active-transport",
  "ar": "الانتشار والأسموزية مجانيان: الجزيئات تنساب من التركيز العالي للمنخفض بلا طاقة، ككرة تتدحرج منحدراً. لكن الخلية تحتاج أحياناً العكس تماماً: دفع مواد ضد التدرج، كمن يدحرج الكرة صعوداً! هنا تعمل مضخة الصوديوم والبوتاسيوم، أشهر مضخاتك: في كل دورة تستهلك جزيء ATP واحداً لطرد 3 صوديوم خارجاً وسحب 2 بوتاسيوم داخلاً، ضد إرادة التدرجات. هذه المضخة الصغيرة وحدها تلتهم ثلث طاقة جسمك في الراحة! ثمن التدرجات المخزنة التي تشغّل أعصابك وعضلاتك وامتصاص غذائك.",
  "en": "Diffusion and osmosis are free: molecules glide from high to low concentration with no energy, like a ball rolling downhill. But the cell sometimes needs the exact opposite: pushing substances against the gradient, like rolling the ball uphill! Here works the sodium-potassium pump, your most famous pump: each cycle burns one ATP molecule to expel 3 sodium ions and pull in 2 potassium ions, against the gradients' will. This tiny pump alone devours a third of your body's resting energy! The price of the stored gradients that run your nerves, muscles and food absorption."
},
{
  "keys": [
    "لماذا تتعرق النباتات",
    "why do plants sweat"
  ],
  "src": "https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants",
  "ar": "النتح ليس هدراً للماء كما يبدو، بل محرك الشجرة الحقيقي! كل جزيء يتبخر من ثغرة ورقية يشد السلسلة المتماسكة فوقه، فيصعد ماء جديد من الجذور حاملاً معادن التربة الغذائية. النتيجة ثلاثية: نقل الغذاء من الجذر للأعلى، وتبريد الورقة في الحر (تكييف هواء مجاني!)، وفتح الثغور للتنفس الضوئي وامتصاص ثاني أكسيد الكربون. شجرة كبيرة \"تتعرق\" مئات اللترات يومياً صيفاً، وغابات كاملة كالأمازون تولّد بهذه الآلية سحبها وأمطارها الخاصة: النتح يصنع الطقس.",
  "en": "Transpiration is not a waste of water as it seems; it is the tree's real engine! Every molecule evaporating from a leaf stoma pulls the cohesive chain above it, drawing fresh water up from the roots carrying soil minerals. The triple result: transporting food from root to top, cooling the leaf in heat (free air conditioning!), and opening stomata for photosynthetic breathing and carbon dioxide intake. A big tree \"sweats\" hundreds of liters daily in summer, and whole forests like the Amazon use this mechanism to generate their own clouds and rain: transpiration makes weather."
},
{
  "keys": [
    "لماذا نرى وجها واحدا للقمر",
    "why do we see only one side of the moon"
  ],
  "src": "https://openstax.org/books/astronomy-2e/pages/4-5-phases-and-motions-of-the-moon",
  "ar": "المفاجأة أولاً: القمر يدور حول نفسه! لكنه يكمل دورته الذاتية في 29.5 يوماً بالضبط، وهي المدة نفسها التي يدور بها حول الأرض، فكأنه راقص يستدير حول شريكه وهو يواجهه دائماً. هذه المصادفة ليست صدفة: جاذبية الأرض \"شدّت\" انتفاخ القمر المدّي عبر ملايين السنين حتى أبطأت دورانه للتزامن التام، ظاهرة اسمها القفل المدّي وهي شائعة في أقمار النظام الشمسي. الوجه الخفي ظل مجهولاً للبشر حتى صوّرته مركبة سوفييتية 1959: تضاريس أكثر فوهات بلا \"بحار\" داكنة!",
  "en": "First surprise: the Moon does spin! But it completes one rotation in exactly 29.5 days, the same period it orbits Earth, like a dancer circling a partner while always facing them. This coincidence is no coincidence: Earth's gravity tugged the Moon's tidal bulge over millions of years until it slowed its spin to perfect synchrony, a phenomenon called tidal locking, common among solar system moons. The far side stayed unknown to humans until a Soviet probe photographed it in 1959: more cratered terrain without the dark \"seas\"!"
}
];
