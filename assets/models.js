/* EduBridge 3D models - three.js r147 (MIT), vendored locally, no CDN.
   Simple labeled primitive-based models, drag to rotate, gentle auto-spin.
   Tap (or click) a labeled part to see its name.
   Exposes: window.EB3D.available(id), window.EB3D.mount(id, container, lang) */
(function(){
'use strict';

var MODELS = {};

// Plain-language notes: each tappable part gets a name and a learning point.
var PART_NOTES = {};
function note(keys, ar, en){ keys.split('|').forEach(function(k){ PART_NOTES[k]=[ar,en]; }); }
note('Cell membrane','ينظم ما يدخل الخلية وما يخرج منها.','Controls what enters and leaves the cell.');
note('Nucleus|Nucleus - stores the DNA','يحفظ معظم DNA في هذه الخلية ويساعد على تنظيم نشاطها.','Holds most DNA in this cell and helps regulate its activity.');
note('Nucleolus','يساعد في تجميع وحدات الريبوسوم التي تصنع البروتين.','Helps assemble ribosome subunits used in protein production.');
note('Mitochondria - the powerhouse|Mitochondrion - power station','تساعد على تحويل طاقة الغذاء إلى ATP الذي تستخدمه الخلية.','Helps convert food energy into ATP used by the cell.');
note('Ribosome - protein factory|Ribosome - the machine','يقرأ رسالة mRNA ويربط الأحماض الأمينية لبناء بروتين.','Reads mRNA and joins amino acids to build a protein.');
note('Sugar-phosphate strand','يشكل دعامة شريط DNA ويحمل ترتيب القواعد.','Forms the DNA backbone that supports the sequence of bases.');
note('Nitrogen bases (A-T and C-G)','ترتيبها يحمل المعلومات الوراثية، وتتزاوج A مع T وC مع G.','Their sequence carries genetic information; A pairs with T and C with G.');
note('Nucleus - protons and neutrons','يحوي البروتونات والنيوترونات ومعظم كتلة الذرة.','Contains protons and neutrons and most of the atom mass.');
note('Energy level (shell)','يمثل مستوى طاقة ممكناً للإلكترون، لا سكة صلبة يدور عليها.','Represents a possible electron energy level, not a solid orbital track.');
note('Electron|An electron flowing in the wire','جسيم سالب الشحنة؛ حركته في السلك تنقل الشحنة الكهربائية.','A negatively charged particle; its motion in a wire carries electric charge.');
note('Heart muscle|Heart - the pump','تنقبض لتدفع الدم عبر الأوعية إلى الرئتين وبقية الجسم.','Contracts to move blood through vessels to the lungs and body.');
note('Aorta','ينقل الدم من البطين الأيسر إلى الدورة الدموية في الجسم.','Carries blood from the left ventricle into the body circulation.');
note('Pulmonary artery','ينقل الدم من القلب إلى الرئتين ليتبادل الغازات.','Carries blood from the heart to the lungs for gas exchange.');
note('Oxygen atom|Oxygen','تمثل الكرة ذرة أكسجين؛ عدد ذراته محفوظ عند إعادة ترتيب الروابط.','This ball represents an oxygen atom; its count is conserved as bonds rearrange.');
note('Hydrogen atom|Hydrogen','تمثل الكرة ذرة هيدروجين؛ يرتبط اثنان منها مع أكسجين في الماء.','This ball represents hydrogen; two hydrogen atoms bond with oxygen in water.');
note('Covalent bond','تربط ذرات تشترك في إلكترونات.','Holds atoms together through shared electrons.');
note('The Sun|The sun - energy source|The Sun - energy source','نجم يطلق ضوءاً وطاقة تصل إلى الأرض؛ ليس حجمه هنا بمقياس حقيقي.','A star releasing light and energy that reaches Earth; sizes here are not to scale.');
note('Mercury','يمثل عطارد، أقرب الكواكب إلى الشمس، ويدور حولها.','Represents Mercury, the closest planet to the Sun, orbiting it.');
note('Venus','يمثل الزهرة، الكوكب الثاني من الشمس، ويدور حولها.','Represents Venus, the second planet from the Sun, orbiting it.');
note('Earth','يمثل الأرض التي تدور حول الشمس ويعيش عليها الإنسان.','Represents Earth orbiting the Sun, the home of humans.');
note('Mars','يمثل المريخ، الكوكب الرابع في ترتيب البعد عن الشمس.','Represents Mars, fourth in distance from the Sun.');
note('Jupiter','يمثل المشتري، أكبر كواكب المجموعة الشمسية.','Represents Jupiter, the largest planet in the Solar System.');
note('Saturn','يمثل زحل الذي تدور حوله حلقات من جسيمات كثيرة.','Represents Saturn, surrounded by rings made of many particles.');
note('Kidney','ترشح الدم وتضبط الماء والأملاح وتكون البول.','Filters blood, regulates water and salts, and forms urine.');
note('Hilum - vessel entry','منطقة تمر عبرها الأوعية والحالب عند الكلية.','The region through which vessels and the ureter pass at the kidney.');
note('Leaf|Leaf - the light kitchen','تلتقط الضوء وتتيح تبادل الغازات لدعم البناء الضوئي.','Captures light and allows gas exchange for photosynthesis.');
note('Chloroplast - the food factory','يستخدم ضوء الشمس في تفاعلات البناء الضوئي لتكوين سكريات.','Uses light in photosynthesis reactions that produce sugars.');
note('Light rays','تمثل طاقة الضوء التي يمكن أن تمتصها صبغات البناء الضوئي.','Represent light energy that photosynthetic pigments can absorb.');
note('Water from the roots|A water droplet climbing by evaporation','يمثل انتقال الماء في أوعية الخشب، ويساعد النتح على سحبه إلى الأوراق.','Represents water moving through xylem, helped by the pull from transpiration.');
note('CO2 enters','يوفر الكربون الذي يدخل في تكوين السكريات بالبناء الضوئي.','Supplies carbon used to build sugars in photosynthesis.');
note('Oxygen leaves','يمثل الأكسجين المنطلق من تفاعلات البناء الضوئي.','Represents oxygen released during photosynthesis.');
note('Brain - command center','يعالج المعلومات وينسق كثيراً من وظائف الجسم وسلوكه.','Processes information and coordinates many body functions and behaviors.');
note('Spinal cord - the main cable','ينقل إشارات بين الدماغ والجسم ويسهم في منعكسات سريعة.','Relays signals between brain and body and supports rapid reflexes.');
note('Nerves - signal wires','تحمل الإشارات بين الجهاز العصبي وأجزاء الجسم.','Carry signals between the nervous system and body parts.');
note('Blood vessel|Vessel network - 100,000 km','يوفر مساراً لانتقال الدم والمواد التي يحملها.','Provides a route for blood and the materials it carries.');
note('Endoplasmic reticulum - transport roads','يساعد في تصنيع ومعالجة بروتينات أو دهون ونقلها، حسب نوعه.','Helps make, process and transport proteins or lipids, depending on its type.');
note('Golgi apparatus - the post office','يعدل بعض منتجات الخلية ويفرزها ويجهزها للنقل.','Modifies, sorts and packages some cell products for transport.');
note('Lysosome - cleanup crew','يستخدم إنزيمات لتفكيك مواد وأجزاء خلوية غير لازمة.','Uses enzymes to break down materials and unneeded cell parts.');
note('Spine','يدعم الجسم ويحمي الحبل الشوكي ويساعد على الحركة.','Supports the body, protects the spinal cord and allows movement.');
note('Arm bones|Upper arm bone|Forearm bone','تدعم الطرف وتعمل كروافع تحركها العضلات عند المفاصل.','Support the limb and act as levers moved by muscles at joints.');
note('Femur and leg','تدعم وزن الجسم وتساعد العضلات على المشي والحركة.','Support body weight and help muscles produce walking and movement.');
note('Cardiac muscle - never tires','تؤدي انقباضات إيقاعية تضخ الدم؛ وتحتاج هي أيضاً إلى الأكسجين.','Makes rhythmic contractions that pump blood; it also needs oxygen.');
note('Trachea','يمر الهواء خلالها في طريقه إلى الشعب الهوائية والرئتين.','Carries air toward the bronchi and lungs.');
note('Bronchus','يوصل الهواء من القصبة الهوائية إلى الرئة.','Carries air from the trachea into a lung.');
note('Left lung|Right lung','تحتوي حويصلات يتبادل فيها الأكسجين وثاني أكسيد الكربون مع الدم.','Contains alveoli where oxygen and carbon dioxide exchange with blood.');
note('Diaphragm - the breathing pump','تغير انقباضاته حجم التجويف الصدري فتساعد على دخول الهواء.','Its contraction changes chest volume and helps draw air in.');
note('Virus - an invader','يحتاج إلى خلية مضيفة كي ينسخ مادته ويصنع نسخاً جديدة.','Needs a host cell to copy its genetic material and make new virus particles.');
note('Virus spikes - entry keys|Entry spikes','تساعد بعض الفيروسات على الارتباط بخلايا مضيفة مناسبة.','Help some viruses attach to suitable host cells.');
note('Immune cell - body soldier|White cell - immune soldier','تشارك في الدفاع المناعي بطرق تختلف بحسب نوع الخلية.','Participates in immune defense in ways that depend on the cell type.');
note('Immune cell nucleus','يحتوي DNA الذي تستخدمه الخلية في تنظيم وظائفها.','Contains DNA used to regulate the cell functions.');
note('Antibody - guided missile|Antibodies attacking by mistake','يرتبط بهدف محدد؛ وقد تكون الاستجابة لمادة غير ضارة في الحساسية.','Binds a specific target; in allergy the response can involve a harmless substance.');
note('Chromosome from dad|Chromosome from mom','يحمل جينات موروثة من أحد الوالدين، وليس وصفة لصفة واحدة فقط.','Carries genes inherited from one parent, not a recipe for only one trait.');
note('Their blend in the child','يرمز لاجتماع نسخ جينية من الوالدين؛ الكروموسومات لا تذوب في كروموسوم ممزوج.','Symbolizes inherited gene copies from both parents; chromosomes do not melt into a blended one.');
note('Tree of life trunk - the common ancestor|Evolutionary branch|Modern species at a branch tip','موضعه في الشجرة يوضح صلة القرابة والتفرع من أسلاف مشتركة.','Its place on the tree represents relatedness and branching from common ancestors.');
note('Enzyme - the accelerator','يسرع تفاعلاً بخفض حاجز طاقة التنشيط دون استهلاكه في المحصلة.','Speeds a reaction by lowering its activation barrier without being consumed overall.');
note('Active site - the lock cavity','ترتبط عنده الركيزة وتحدث خطوات التفاعل الذي يحفزه الإنزيم.','Binds the substrate and supports steps of the enzyme-catalyzed reaction.');
note('Substrate - the fitting key','هي المادة التي يرتبط بها الإنزيم ويحولها في التفاعل.','The material an enzyme binds and changes during the reaction.');
note('Virus protein shell','يحمي المادة الوراثية للفيروس ويساعد على تنظيم جسيمه.','Protects viral genetic material and forms the particle structure.');
note('Genetic material inside|Bare DNA loop, no nucleus','يحمل التعليمات الوراثية اللازمة لوظائف الكائن أو لتكاثر الفيروس.','Carries genetic instructions for the organism or for viral reproduction.');
note('Left hemisphere - language and logic|Right hemisphere - creativity','يسهم مع النصف الآخر في شبكات مترابطة؛ اللغة والإبداع ليسا محصورين في نصف واحد.','Works with the other hemisphere in connected networks; language and creativity are not confined to one side.');
note('Eyeball','يجمع الضوء وتستقبل شبكيته الإشارات البصرية.','Collects light; the retina detects visual signals.');
note('Optic nerve - the image cable','ينقل إشارات الشبكية إلى الدماغ، لا صورة فوتوغرافية جاهزة.','Carries retinal signals to the brain, not a finished photograph.');
note('Pituitary - orchestra conductor','تفرز هرمونات تنظم وظائف، منها نمو الجسم وعمل بعض الغدد الأخرى.','Releases hormones regulating functions including growth and some other glands.');
note('Thyroid - burn speed','تفرز هرمونات تساعد على تنظيم معدل الأيض.','Releases hormones that help regulate metabolic rate.');
note('Adrenal - adrenaline','تفرز هرمونات منها الأدرينالين الذي يشارك في استجابة الإجهاد.','Releases hormones including adrenaline involved in the stress response.');
note('Pancreas - insulin','يفرز هرمونات منها الإنسولين للمساعدة في ضبط سكر الدم.','Releases hormones including insulin to help regulate blood glucose.');
note('Petals - colorful ads','قد تجذب ألوانها وروائحها الملقحات إلى الزهرة.','Their colors and scents may attract pollinators to a flower.');
note('Stigma - the female part','يستقبل حبوب اللقاح عند طرف العضو الأنثوي في الزهرة.','Receives pollen at the tip of the female floral structure.');
note('Anther - pollen grains','ينتج حبوب اللقاح ويطلقها.','Produces and releases pollen.');
note('Stem|Stem - transport column','يدعم النبات وتحمل أوعيته الماء والسكريات بين أجزائه.','Supports the plant; its vessels move water and sugars between parts.');
note('The bee - the courier','قد تنقل حبوب اللقاح بين أزهار أثناء جمع الغذاء.','Can transfer pollen between flowers while collecting food.');
note('Epidermis - the renewing shield','تشكل حاجزاً خارجياً يساعد على حماية الجسم وتقليل فقد الماء.','Forms an outer barrier helping protect the body and reduce water loss.');
note('Dermis - nerves, glands, fingerprints','تضم أوعية وأعصاباً وغدداً تدعم الإحساس ووظائف الجلد.','Contains vessels, nerves and glands supporting sensation and skin functions.');
note('Sweat gland - body cooler','تنتج عرقاً يساعد تبخره على تبريد الجسم.','Produces sweat whose evaporation helps cool the body.');
note('Hair growing from a dermis follicle','تنمو من بصيلة، ويمكن أن تسهم في الحماية والإحساس.','Grows from a follicle and can contribute to protection and sensation.');
note('The gut - microbiome home','يستضيف ميكروبات يتفاعل بعضها مع الغذاء والجسم.','Hosts microbes, some of which interact with food and the body.');
note('Helpful bacteria working for you','تشارك أنواع منها في تفكيك مواد غذائية لا نهضمها وحدنا.','Some species help break down food materials we cannot digest alone.');
note('Mushroom stem','يحمل الجسم الثمري ويرفع مواضع إنتاج الأبواغ.','Supports the fruiting body and raises spore-producing structures.');
note('The cap - only the visible part','جزء من الجسم الثمري يرتبط بإنتاج الأبواغ ونشرها.','Part of the fruiting body associated with spore production and dispersal.');
note('Mycelium threads underground','تنمو في الوسط وتمتص المغذيات بعد هضمها خارجياً.','Grow through a substrate and absorb nutrients after external digestion.');
note('mRNA - the copied recipe','يحمل تسلسلاً يقرأه الريبوسوم أثناء بناء البروتين.','Carries a sequence read by a ribosome during protein synthesis.');
note('Amino acid in the growing chain','يرتبط بأحماض أمينية أخرى لبناء سلسلة بروتينية.','Joins other amino acids to form a protein chain.');
note('Cell body - decision center','يحوي النواة ويدمج إشارات واردة إلى الخلية العصبية.','Contains the nucleus and integrates incoming neuronal signals.');
note('Axon - the signal cable','ينقل إشارات من الخلية العصبية نحو خلايا أخرى.','Carries signals away from a neuron toward other cells.');
note('Myelin sheath - speeding insulator','يعزل أجزاء من المحور ويساعد على تسريع انتقال الإشارة.','Insulates axon segments and helps signals travel faster.');
note('The next neuron','تستقبل إشارات من خلايا أخرى وقد تولد استجابة جديدة.','Receives signals from other cells and may generate a new response.');
note('Light sleep - drifting in|Deeper sleep|Deep sleep - repair and growth hormone|REM - dreams and memory filing','يمثل مرحلة من النوم تتغير فيها أنماط نشاط الدماغ والجسم.','Represents a sleep stage with changing patterns of brain and body activity.');
note('The cycle repeats 4-5 times nightly','يرمز إلى تتابع مراحل النوم في دورات يختلف عددها ومدتها بين الأشخاص والليالي.','Represents sleep stages cycling, with counts and lengths varying by person and night.');
note('Pollen grain - an innocent|Pollen spikes','تحمل حبوب اللقاح خلايا تكاثرية نباتية، وقد تثير الحساسية لدى بعض الناس.','Pollen carries plant reproductive cells and may trigger allergies in some people.');
note('Histamine - the alarm sound','وسيط كيميائي يشارك في أعراض مثل الحكة والعطس في الحساسية.','A chemical mediator involved in allergy symptoms such as itching and sneezing.');
note('Dentin under the enamel','نسيج يدعم المينا ويحيط باللب داخل السن.','A tissue supporting enamel and surrounding the tooth pulp.');
note('Living pulp - nerves and vessels','يحوي أوعية وأعصاباً تدعم حيوية السن وإحساسه.','Contains vessels and nerves supporting the living tooth and its sensation.');
note('Internal thermometer|37 degrees - the balance point|The bulb','رمز لقياس درجة الحرارة وتنظيمها؛ حرارة الجسم الطبيعية ليست رقماً ثابتاً للجميع.','A symbol for temperature sensing and regulation; normal body temperature is not one fixed value for everyone.');
note('Smallest copy - the stop case','توقف الاستدعاء المتكرر عندما يتحقق شرط النهاية.','Stops recursive calls once the base condition is met.');
note('Input cell - receives data|Hidden cell - finds patterns|Output cell - announces the decision','يمثل وحدة حسابية تحول مدخلات إلى خرج باستخدام أوزان ودالة، وليس خلية حية.','A computational unit converting inputs to an output using weights and a function, not a living cell.');
note('A connection with a learned weight','يضبط وزنها مقدار تأثير إشارة على الوحدة التالية أثناء الحساب.','Its weight controls how much a signal affects the next computational unit.');
note('Bacterial cell wall','يدعم شكل الخلية ويحميها من بعض الإجهادات.','Supports cell shape and protects against some stresses.');
note('Vibration source','يبدأ الاهتزاز الذي تنتقل آثاره كموجة.','Starts a vibration whose disturbance travels as a wave.');
note('Equilateral - all angles 60|Right-angled - has a 90 angle|Isosceles - two equal sides','يتيح فحص خصائص الأضلاع والزوايا في هذا النوع من المثلثات.','Lets you examine side and angle properties of this triangle type.');
note('Battery - the push source','توفر فرق جهد يساعد على دفع الشحنة حول دائرة مغلقة.','Provides a voltage difference that helps move charge around a closed circuit.');
note('Bulb - current becomes light','يحول طاقة كهربائية إلى ضوء وطاقة حرارية؛ التيار نفسه لا يتحول إلى مادة ضوئية.','Converts electrical energy to light and thermal energy; current itself is not used up as light.');
note('North pole|South pole','يمثل أحد قطبي المغناطيس؛ المتشابهان يتنافران والمختلفان يتجاذبان.','One magnetic pole; like poles repel and unlike poles attract.');
note('Glass prism','يغير مسار الضوء ويفرق ألواناً مختلفة بزوايا مختلفة.','Changes light direction and disperses colors at different angles.');
note('Rocket body','يحمل أجزاء الصاروخ ويتسارع تحت تأثير محصلة القوى عليه.','Holds rocket components and accelerates under the net force acting on it.');
note('Nose cone','مقدمة انسيابية تساعد على تقليل مقاومة الهواء أثناء الطيران في الغلاف الجوي.','A streamlined front helping reduce air drag during atmospheric flight.');
note('Suspension bar','يثبت موضع تعليق البندول في هذا النموذج.','Holds the pendulum suspension point in this model.');
note('Pendulum string','يقيد حركة الثقل ويؤثر فيه بقوة شد نحو نقطة التعليق.','Constrains the bob and exerts tension toward the suspension point.');
note('Fast hot particle|Slow cold particle|Hot gas - fast particles|Cold gas - slow particles','يمثل اختلاف متوسط طاقة حركة الجسيمات؛ لا تملك كل جسيمات الغاز السرعة نفسها.','Represents a difference in average particle kinetic energy; gas particles do not all share one speed.');
note('Water','السائل المزاح يوفر قوة طفو إلى أعلى على الجسم المغمور.','The displaced liquid provides an upward buoyant force on an immersed body.');
note('Fulcrum','نقطة يرتكز عليها ذراع الرافعة ويدور حولها.','The support point around which the lever arm turns.');
note('Lever arm','ينقل القوة؛ تؤثر المسافة عن الارتكاز في عزمها.','Transmits force; distance from the fulcrum affects its torque.');
note('Big weight near the fulcrum|Small far force - balances it!','العزم يساوي القوة في البعد العمودي؛ قد توازن قوة صغيرة أبعد حملاً أكبر أقرب.','Torque is force times perpendicular distance; a smaller distant force can balance a larger nearby load.');
note('Bouncing gas particle','تمثل اصطداماته بالجدار مساهمة في ضغط الغاز.','Its collisions with the wall represent contributions to gas pressure.');
note('Reactive metals - first column','معادن المجموعة الأولى نشطة عادة؛ الهيدروجين في موضع المجموعة استثناء.','Group-one metals are generally reactive; hydrogen in that group position is an exception.');
note('Noble gases - last column','عناصر ضعيفة التفاعل عادة بسبب تركيب إلكتروناتها الخارجية.','Generally unreactive elements because of their outer electron structure.');
note('Each row is a period = new electron shell','الدورة صف في الجدول المرتب حسب العدد الذري؛ الشكل هنا مخطط مبسط.','A period is a row in the atomic-number-ordered table; this is a simplified diagram.');
note('The transferred electron','يرمز إلى انتقال شحنة يؤدي إلى تكوين أيونات متجاذبة كهربائياً.','Symbolizes charge transfer leading to electrically attracting ions.');
note('Acidic - below 7|Basic - above 7|Neutral - pure water 7','يقارن pH بالمحلول المتعادل عند 25 درجة مئوية؛ هذا رسم تعليمي للمقياس.','Compares pH with a neutral solution at 25 degrees Celsius; this is a teaching scale.');
note('Glass beaker','وعاء يحمل المحلول ويتيح ملاحظة توزيع الجسيمات.','A container holding the solution so particle distribution can be observed.');
note('Water - the universal solvent','يذيب مواد كثيرة لكنه لا يذيب كل المواد.','Dissolves many substances, but not every substance.');
note('A sugar molecule dissolving','يتفرق بين جزيئات الماء دون أن يختفي أو يتحول إلى ماء.','Spreads among water molecules without vanishing or turning into water.');
note('Positive ion cores in a lattice','ترمز لمراكز أيونية تترابط في المعدن بمساهمة الإلكترونات المتحركة.','Represent ion cores held in metallic bonding with mobile electrons.');
note('Free electrons - an electron sea','تسهم حركتها في نقل الشحنة والطاقة عبر المعدن.','Their motion helps carry charge and energy through the metal.');
note('Carbon - four bonds','يبني روابط تساهمية متنوعة، منها حلقات كربونية مثل هذا النموذج.','Forms varied covalent structures, including carbon rings like this model.');
note('Shared electrons circling the whole ring','الدائرة رمز لإلكترونات غير محصورة في رابطة واحدة؛ ليست مدار جسيمات مرسوماً حرفياً.','The circle symbolizes delocalized electrons, not a literal particle orbit.');
note('Battery cell','تستخدم تفاعلات كيميائية لتوفير فرق جهد في دائرة خارجية.','Uses chemical reactions to provide voltage in an external circuit.');
note('Negative electrode overflowing with electrons|Positive electrode craving them','يمثل قطباً تحدث عنده تفاعلات نقل إلكترونات أثناء عمل الخلية.','Represents an electrode where electron-transfer reactions occur during cell operation.');
note('A closed vessel - the air around us is real gas|Closed vessel with gas','يحصر جسيمات الغاز؛ اصطدامها بجدرانه يسبب ضغطاً عليها.','Confines gas particles whose wall collisions exert pressure.');
note('Nitrogen - 78% of air|Oxygen - 21%|Argon - the inert gas|Helium - lighter than air','يمثل نوعاً من جسيمات الغاز؛ الألوان والأعداد والأحجام هنا رمزية وليست نسب الهواء الحقيقية.','Represents a gas species; colors, counts and sizes are symbolic, not actual air proportions.');
note('A color bent at its own angle|White beam in - a mix of all colors','يمثل مسار الضوء في نموذج يشرح الانكسار وتفريق الألوان.','Represents a light path in a diagram explaining refraction and color dispersion.');
note('A lamp lit by the chemical reaction','يحول جزءاً من الطاقة الكهربائية في الدائرة إلى ضوء وطاقة حرارية.','Converts part of the circuit electrical energy into light and thermal energy.');
note('A particle vibrating in place - waves carry energy, not matter','يهتز قرب موضعه بينما تنتقل الموجة خلال الوسط.','Oscillates near its position while the wave travels through the medium.');
note('A pressure wave traveling the air|Speaker cone vibrating','يسبب اهتزاز المصدر تضاغطات وتخلخلات تنتقل خلال الهواء.','Source vibration creates compressions and rarefactions that travel through air.');
note('Alveolus - where oxygen crosses','يوفر سطحاً رقيقاً لتبادل الأكسجين وثاني أكسيد الكربون مع الدم.','Provides a thin surface for oxygen and carbon dioxide exchange with blood.');
note('Attachment pili','تساعد بعض البكتيريا على الالتصاق بالأسطح.','Help some bacteria attach to surfaces.');
note('Biceps - bends the arm|Triceps - straightens the arm','تشد العظام عند انقباضها فتسهم في حركة مفصل المرفق.','Pulls on bones when contracting, helping move the elbow joint.');
note('Blood carries messages everywhere','يحمل هرمونات تصل إلى خلايا هدف تملك مستقبلات مناسبة.','Carries hormones to target cells with suitable receptors.');
note('Blood returning for oxygen|Oxygenated blood leaving','يرمز إلى حركة الدم بين القلب والرئتين والجسم؛ اللون تعليمي والدم ليس أزرق.','Symbolizes blood moving between heart, lungs and body; the color is schematic and blood is not blue.');
note('Brain folds - more surface area','تتيح مساحة أكبر من القشرة داخل حيز الجمجمة.','Allow more cortical surface area within the skull.');
note('Brainstem - vital functions','يسهم في تنظيم وظائف تلقائية ومنها التنفس.','Helps regulate automatic functions including breathing.');
note('Cerebellum - balance and movement','يساعد على تنسيق الحركة والتوازن والتعلم الحركي.','Helps coordinate movement, balance and motor learning.');
note('Chemical messenger crossing the synapse','يرتبط بمستقبلات في خلية أخرى ليسهم في نقل الإشارة.','Binds receptors on another cell to help transmit a signal.');
note('Sodium gives an electron|Chlorine receives it','يوضح النموذج تكوين أيونات موجبة وسالبة تتجاذب كهربائياً.','The model illustrates formation of positively and negatively charged ions that attract electrically.');
note('Connective tissue - binds and supports','يربط الأنسجة أو يدعمها، وله أنواع بخصائص مختلفة.','Binds or supports tissues, with several types having different properties.');
note('Crown - coated in enamel, the hardest in the body','جزء السن الظاهر؛ تحمي المينا سطحه أثناء المضغ.','The visible part of the tooth; enamel protects its chewing surface.');
note('Dendrites receive signals','تستقبل مدخلات من خلايا أخرى وتنقل أثرها نحو جسم الخلية.','Receive inputs from other cells and convey their effects toward the cell body.');
note('Direction of energy flow','السهم يوضح انتقال الطاقة من المصدر إلى الكائن الذي يستخدمها.','The arrow shows energy passing from a source to an organism using it.');
note('Earth - its gravity pulls everything|Gravity field reaches every direction','يمثل تأثير الجاذبية في الأجسام ذات الكتلة حول الأرض.','Represents the gravitational influence on masses around Earth.');
note('Epithelial tissue - covers and lines','يغطي أسطحاً ويبطن تجاويف، وقد يسهم في الحماية والامتصاص والإفراز.','Covers surfaces and lines spaces, with roles including protection, absorption and secretion.');
note('Esophagus - pushes food down','تحرك انقباضات جداره الطعام نحو المعدة.','Contractions of its wall move food toward the stomach.');
note('Exhaust gases thrown back - the action|Reaction: pushed upward','يمثل أحد طرفي تفاعل الصاروخ وغاز العادم بقوتين متساويتين ومتعاكستين.','Represents one side of the rocket-exhaust interaction with equal and opposite forces.');
note('Fat layer - insulation and energy','تخزن طاقة وتسهم في العزل والحماية.','Stores energy and contributes to insulation and cushioning.');
note('Field lines leave north, enter south','خارج المغناطيس تشير الخطوط من الشمال إلى الجنوب؛ الخطوط رموز لاتجاه المجال.','Outside a magnet, lines point north to south; they symbolize field direction.');
note('Flagellum - the propeller','يساعد بعض الخلايا البكتيرية على الحركة في السائل.','Helps some bacterial cells move through liquid.');
note('Gas: free molecules|Liquid: sliding molecules|Solid: packed molecules','يرمز إلى ترتيب الجسيمات وحركتها في إحدى حالات المادة.','Represents particle arrangement and motion in one state of matter.');
note('Herbivore - eats the plant|Predator - eats the herbivore','يحصل على مادة وطاقة من الغذاء، وينقل جزءاً منها عبر الشبكة الغذائية.','Gets matter and energy from food, passing some onward through the food web.');
note('Hollow body lighter than water - floats|Solid heavier block - sinks','تقارن كثافته المتوسطة بكثافة السائل؛ وعند الطفو الساكن تتوازن قوة الطفو والوزن.','Its average density is compared with the fluid; at rest afloat, buoyancy balances weight.');
note('Indicator drop points to the medium','يشير موضعه إلى قيمة على مقياس الحموضة، وليس قطرة تتحرك بهذه الطريقة في المعمل.','Its position points to a pH value; a real indicator drop does not move this way.');
note('Ions crossing the solution','تنقل الشحنة داخل الإلكتروليت لتستمر الخلية في العمل.','Carry charge through the electrolyte so the cell can keep operating.');
note('Iris - controls the light opening','تغير قطر الحدقة للتحكم في مقدار الضوء الداخل.','Changes pupil diameter to regulate how much light enters.');
note('Iron piece pulled by the field','تمثل مادة حديدية يمكن أن تنجذب نحو مجال مغناطيسي مناسب.','Represents an iron-based material that can be attracted by a suitable magnetic field.');
note('Large intestine - reclaims water','يمتص الماء والأملاح المتبقية ويساعد على تكوين البراز.','Absorbs remaining water and salts and helps form feces.');
note('Lens - focuses light','تغير اتجاه الضوء للمساعدة على تركيزه على الشبكية.','Refracts light to help focus it on the retina.');
note('Muscle tissue - contracts and moves','يولد قوة بانقباض خلاياه ليسهم في الحركة ووظائف أخرى.','Generates force through cell contraction for movement and other functions.');
note('Nervous tissue - carries signals','يستقبل المعلومات ويعالجها وينقل الإشارات بين مناطق الجسم.','Receives and processes information and transmits signals through the body.');
note('Pelvis - protects and supports','ينقل أحمالاً ويدعم أعضاء الحوض ويحمي بعض أجزائه.','Transfers loads, supports pelvic organs and protects some pelvic structures.');
note('Piston pressing the gas','يغير حجم الحيز المتاح للغاز؛ ويتأثر الضغط بالحرارة والحجم وكمية الغاز.','Changes available gas volume; pressure also depends on temperature and amount of gas.');
note('Plant - the producer','يستخدم البناء الضوئي لتحويل طاقة الضوء إلى طاقة كيميائية في مادة عضوية.','Uses photosynthesis to convert light energy into chemical energy in organic matter.');
note('Platelet - plugs wounds','تشارك في تكوين سدادة وبدء عمليات توقف النزيف.','Helps form a plug and initiate processes that stop bleeding.');
note('Red cell - carries oxygen','يحمل هيموغلوبين يرتبط بالأكسجين لينقله إلى الأنسجة.','Contains hemoglobin that binds oxygen for delivery to tissues.');
note('Renal artery - blood in|Renal vein - clean blood out','يمثل طريق الدم إلى الكلية أو منها ضمن دورتها الدموية.','Represents a route for blood entering or leaving the kidney circulation.');
note('Ribs - protect heart and lungs','تساعد على حماية أعضاء الصدر وتتحرك مع التنفس.','Help protect chest organs and move during breathing.');
note('Root - anchors the tooth in bone','يثبت السن في الفك عبر أنسجة الدعم المحيطة.','Anchors the tooth in the jaw through surrounding support tissues.');
note('Roots - absorb water and minerals','تمتص الماء والأملاح وتساعد على تثبيت النبات.','Absorb water and minerals and help anchor the plant.');
note('Shiver if it falls|Sweat if it rises','يمثل استجابة تساعد على ضبط الحرارة: الارتعاش يولد طاقة حرارية وتبخر العرق يبرد الجلد.','Represents temperature regulation: shivering generates thermal energy and sweat evaporation cools skin.');
note('Skull - protects the brain','يحيط بالدماغ ويساعد على حمايته من إصابات.','Surrounds the brain and helps protect it from injury.');
note('Small intestine - absorbs food (6 meters!)','تستكمل كثيراً من الهضم وتمتص معظم المغذيات.','Completes much of digestion and absorbs most nutrients.');
note('Stomach - churns food in acid','تخلط الطعام وتضيف حمضاً وإنزيمات للمساعدة على الهضم.','Mixes food and adds acid and enzymes to aid digestion.');
note('The Moon - always falling toward us, never arriving','تسهم جاذبية الأرض في تغيير اتجاه سرعته فيبقى في مدار حولها.','Earth gravity changes its velocity direction, helping keep it in orbit.');
note('The bob - potential up high, kinetic down low','تتبادل طاقة الوضع وطاقة الحركة أثناء التأرجح؛ النموذج يهمل فقد الاحتكاك.','Exchanges potential and kinetic energy while swinging; this model ignores frictional loss.');
note('The function calls a smaller itself','يمثل استدعاء الدالة لنفسها على مسألة أصغر وصولاً إلى حالة توقف.','Represents a function calling itself on a smaller problem until reaching a base case.');
note('The wire - electron highway|Wire - the closed circuit path','يوفر مساراً موصلاً للشحنة في الدائرة.','Provides a conducting path for charge in the circuit.');
note('Ureter - carries urine to the bladder','ينقل البول من الكلية إلى المثانة بانقباضات في جداره.','Moves urine from kidney to bladder through wall contractions.');

note('Uranus','يمثل أورانوس، الكوكب السابع في ترتيب البعد عن الشمس.','Represents Uranus, seventh in distance from the Sun.');
note('Neptune','يمثل نبتون، الكوكب الثامن في ترتيب البعد عن الشمس.','Represents Neptune, eighth in distance from the Sun.');
note('The whole - a divided disk','قرص واحد مقسوم يمثل الكل الذي نأخذ الكسر منه.','One divided disk representing the whole we take the fraction from.');
note('A shaded part - numerator','جزء مظلل من الأجزاء المتساوية؛ عددها هو البسط.','A shaded equal part; the count of shaded parts is the numerator.');
note('A dividing line - denominator','يقسم الكل إلى أجزاء متساوية؛ عددها هو المقام.','Splits the whole into equal parts; their count is the denominator.');
note('The full grid - 100 squares','يمثل الكل مقسوماً إلى 100 جزء متساوٍ لتسهيل النسبة المئوية.','Represents the whole split into 100 equal parts to make percents easy.');
note('One square of a hundred - 1%','خانة واحدة من مئة تساوي 1% من الكل.','One square out of a hundred equals 1% of the whole.');
note('The balance post','يثبت الميزان عند المنتصف ليقارن الكفتين.','Holds the beam at the middle to compare both pans.');
note('The balanced beam','تبقى مستوية عندما يتساوى الطرفان، مثل المعادلة الصحيحة.','Stays level when both sides are equal, like a true equation.');
note('The left pan','تحمل طرف المعادلة الأيسر x + 2.','Carries the left side of the equation, x + 2.');
note('The right pan','تحمل الطرف الأيمن وهو 5 وحدات.','Carries the right side, 5 units.');
note('Envelope x - the unknown','يخفي عدد الوحدات المجهول الذي نريد إيجاده.','Hides the unknown number of units we want to find.');
note('An exposed unit - one','وحدة مكشوفة تضاف إلى المجهول في الطرف الأيسر.','A visible unit added to the unknown on the left side.');
note('A weight unit - one','تمثل واحداً من الوحدات الخمس في الطرف الأيمن.','Represents one of the five units on the right side.');
note('The x-axis - horizontal','يقيس التحرك يميناً ويساراً من نقطة الأصل.','Measures movement right and left from the origin.');
note('The y-axis - vertical','يقيس التحرك أعلى وأسفل من نقطة الأصل.','Measures movement up and down from the origin.');
note('The origin (0,0)','نقطة تقاطع المحورين التي تبدأ منها القياسات.','The axes crossing point where measurements start.');
note('The point (2,1)','تقع يمين الأصل وحدتين وفوقه وحدة واحدة.','Sits 2 units right of the origin and 1 unit up.');
note('The circumference C = 2πr','المسافة حول الدائرة؛ تساوي π مضروبة في القطر.','The distance around the circle; equals π times the diameter.');
note('The center','النقطة التي تبعد عنها كل نقاط الدائرة مسافة متساوية.','The point equally distant from every point of the circle.');
note('The radius r','المسافة من المركز إلى أي نقطة على الدائرة.','The distance from the center to any point on the circle.');
note('The diameter d = 2r','وتر يمر بالمركز ويساوي ضعف نصف القطر.','A chord through the center, equal to twice the radius.');
note('A slice of the area A = πr²','جزء من مساحة الدائرة التي تساوي π في مربع نصف القطر.','A slice of the circle area, which equals π times the radius squared.');
note('Cube - V = s³','مجسم بستة أوجه مربعة؛ حجمه الضلع مكعباً.','A solid with six square faces; its volume is the side cubed.');
note('Sphere - V = 4/3 πr³','مجسم كروي تماماً؛ حجمه أربعة أثلاث π في مكعب نصف القطر.','A perfectly round solid; its volume is four thirds π times the radius cubed.');
note('Cylinder - V = πr²h','حجمه مساحة القاعدة الدائرية مضروبة في الارتفاع.','Its volume is the circular base area times the height.');
note('A square face - surface area s²','وجه واحد من ستة أوجه متساوية تكوّن المساحة السطحية.','One of six equal faces that make up the surface area.');
note('A fair die - 6 faces','كل وجه من أوجهه الستة له الاحتمال نفسه 1/6.','Each of its six faces has the same probability, 1/6.');
note('A face pip - one outcome','نقطة على وجه النرد تمثل نتيجة واحدة ممكنة.','A pip on a die face represents one possible outcome.');
note('A possible outcome - 1 of 6','نتيجة واحدة من ست نتائج متساوية الاحتمال.','One outcome out of six equally likely outcomes.');
note('Value 2','أصغر قيمة في مجموعة البيانات.','The smallest value in the data set.');
note('Value 3 - median and mode','القيمة الوسطى بعد الترتيب، وهي أيضاً الأكثر تكراراً.','The middle value after sorting, and also the most frequent.');
note('Value 8 - the outlier','قيمة كبيرة تسحب المتوسط للأعلى دون بقية القيم.','A large value that pulls the mean up away from the rest.');
note('The mean line 4','مجموع القيم 16 مقسوماً على عددها 4.','The sum of values, 16, divided by their count, 4.');
note('The function f - the rule machine','تحول كل مدخل إلى مخرج واحد بالضبط.','Turns each input into exactly one output.');
note('The input x','القيمة التي تدخل الدالة ليعمل عليها.','The value fed into the function.');
note('The input arrow','يوضح اتجاه دخول القيمة إلى الدالة.','Shows the direction of the value entering the function.');
note('The single output f(x)','النتيجة الوحيدة التي تعطيها الدالة للمدخل x.','The single result the function gives for input x.');
note('The output arrow','يوضح خروج النتيجة الوحيدة من الدالة.','Shows the single result leaving the function.');
note('A forbidden second output','لو حدث لكسرت قاعدة الدالة: مخرج واحد لكل مدخل.','If it happened it would break the function rule: one output per input.');
note('The prohibition mark','يشير إلى أن المخرج الثاني غير مسموح في الدالة.','Marks that a second output is not allowed in a function.');
note('A red counter - part of the ratio','يمثل جزءاً من المقارنة: عدد الحمر 2.','Represents one part of the comparison: the red count is 2.');
note('A blue counter - part of the ratio','يمثل الجزء الآخر من المقارنة: عدد الزرق 3.','Represents the other part of the comparison: the blue count is 3.');
note('The whole line - 5 counters','كل الكرات معاً خمس؛ حصة الحمر من الكل 2/5.','All counters together are five; the red share of the whole is 2/5.');
note('The number line','يمتد في الاتجاهين ويرتب الأعداد حسب قيمتها.','Extends both directions and orders numbers by value.');
note('A negative number - left of zero','قيمة أصغر من الصفر مثل درجة حرارة تحت الصفر.','A value below zero, like a subzero temperature.');
note('A positive number - right of zero','قيمة أكبر من الصفر، وتكبر كلما ابتعدت يميناً.','A value above zero, growing as you move right.');
note('Zero - neither positive nor negative','نقطة الفصل بين الموجب والسالب على الخط.','The dividing point between positive and negative.');
note('The direction of decreasing values','تصغر القيم كلما اتجهنا يساراً على الخط.','Values decrease as you move left on the line.');
note('One whole','الوحدة الكاملة التي تقسم إلى أعشار وأجزاء من مئة.','The whole unit split into tenths and hundredths.');
note('One tenth - 0.1','عُشر الواحد، وعشرة منها تصنع واحداً صحيحاً.','One tenth of the whole; ten of them make one.');
note('One hundredth - 0.01','جزء واحد من مئة جزء متساوٍ من الواحد.','One part of a hundred equal parts of the whole.');
note('Parentheses first','أول خطوة في ترتيب العمليات: بسط ما داخل الأقواس.','First step of the order: simplify inside parentheses.');
note('Then exponents','الخطوة الثانية: احسب القوى بعد الأقواس.','Second step: evaluate powers after parentheses.');
note('Then multiply and divide','الخطوة الثالثة: الضرب والقسمة من اليسار لليمين.','Third step: multiply and divide left to right.');
note('Finally add and subtract','آخر خطوة: الجمع والطرح من اليسار لليمين.','Last step: add and subtract left to right.');
note('One factor 2 of three','واحد من ثلاثة عوامل متماثلة في 2³ = 8.','One of the three equal factors in 2³ = 8.');
note('The base 2 repeated 3 times','الأساس هو العدد المتكرر والأس عدد التكرارات.','The base is the repeated number, the exponent the count.');
note('A huge star - positive exponent','الأعداد الضخمة تكتب بأس موجب مثل 10⁹.','Huge numbers use a positive exponent like 10⁹.');
note('A tiny atom - negative exponent','الأعداد الأصغر من واحد تكتب بأس سالب مثل 10⁻⁹.','Numbers below one use a negative exponent like 10⁻⁹.');
note('Moving the decimal point by the exponent','الأس يخبرك كم خانة تحرك الفاصلة وأي اتجاه.','The exponent tells how many places to move the point and which way.');
note('The vertex','النقطة المشتركة بين ضلعي الزاوية حيث يقاس فتحها.','The shared endpoint of the angle sides where it is measured.');
note('A side of the angle - a ray','شعاع يبدأ من الرأس ويكون أحد ضلعي الزاوية.','A ray starting at the vertex forming one side of the angle.');
note('An acute angle - under 90 degrees','فتحتها أصغر من القائمة، بين الصفر و90 درجة.','Its opening is below a right angle, between 0 and 90 degrees.');
note('A right angle - 90 degrees','فتحتها 90 درجة تماماً مثل زاوية الورقة.','Its opening is exactly 90 degrees, like a page corner.');
note('An obtuse angle - between 90 and 180','فتحتها أكبر من القائمة وأصغر من المستقيمة.','Its opening exceeds a right angle but is below a straight one.');
note('A unit square - counts the area','مربع ضلعه وحدة؛ عدد المربعات هو المساحة.','A square of side one; counting these squares gives the area.');
note('A perimeter edge','حد من حدود الشكل؛ مجموع أطوالها هو المحيط.','One boundary of the shape; their total length is the perimeter.');
note('The horizontal axis - run','يقيس التغير الأفقي بين نقطتين على الخط.','Measures the horizontal change between two points on the line.');
note('The vertical axis - rise','يقيس التغير الرأسي بين نقطتين على الخط.','Measures the vertical change between two points on the line.');
note('The straight line','ميله ثابت في كل نقطة ويساوي rise على run.','Its slope is constant everywhere, equal to rise over run.');
note('The rise = 1','التغير الرأسي بين النقطتين المختارتين هنا وحدة واحدة.','The vertical change between the two chosen points, one unit here.');
note('The run = 2','التغير الأفقي بين النقطتين المختارتين هنا وحدتان.','The horizontal change between the two chosen points, two units here.');
note('A point on the line','أي نقطتين على الخط تعطيان الميل نفسه.','Any two points on the line give the same slope.');
note('The number 36','عدد مؤلف نحلله إلى عوامله الأولية.','A composite number we break into prime factors.');
note('A tree branch','يربط العدد بعامليه في كل خطوة من التحليل.','Connects a number to its two factors at each step.');
note('The factor 4 - composite','عامل غير أولي يحتاج مزيداً من التفريع.','A non-prime factor needing further branching.');
note('The factor 9 - composite','عامل غير أولي يتفرع إلى 3×3.','A non-prime factor that branches into 3×3.');
note('Prime number 2','عامل أولي؛ أصغر الأعداد الأولية والزوجي الوحيد منها.','A prime factor; the smallest prime and the only even one.');
note('Prime number 3','عامل أولي ينهي هذا الفرع من الشجرة.','A prime factor ending this branch of the tree.');
note('The leg a = 3','أحد الضلعين المحيطين بالزاوية القائمة.','One of the two sides forming the right angle.');
note('The leg b = 4','الضلع الثاني المحيط بالزاوية القائمة.','The second side forming the right angle.');
note('The hypotenuse c = 5','الضلع المقابل للقائمة وأطول أضلاع المثلث.','The side opposite the right angle and the longest side.');
note('One square of a² = 9','وحدة من وحدات مساحة مربع الساق القصيرة.','One unit of area of the short leg square.');
note('One square of b² = 16','وحدة من وحدات مساحة مربع الساق الطويلة.','One unit of area of the long leg square.');
note('Air hockey table - almost no friction','يوضح أن غياب الاحتكاك تقريباً يجعل الجسم يستمر في حركته.','Shows that removing almost all friction lets an object keep moving.');
note('Rough patch - friction slows the puck','الاحتكاك قوة خارجية تغيّر السرعة، فتبطئ القرص هنا.','Friction is an external force that changes speed, slowing the puck here.');
note('The puck - the moving object','جسم كتلته تحدد قصوره الذاتي، ويحافظ على حركته ما لم تؤثر عليه قوة صافية.','Its mass sets its inertia, and it keeps its motion unless a net force acts.');
note('Velocity arrow - constant when no net force acts','يبين اتجاه السرعة ومقدارها، وتبقى ثابتة حين لا توجد قوة صافية.','Shows the direction and size of velocity, which stays constant with no net force.');
note('The floor - the contact surface','السطح الذي يلامس الجسم ويولّد الاحتكاك معه.','The surface touching the object, which produces friction with it.');
note('The crate - the pushed object','الجسم الذي يقاوم احتكاك السطح، وزيادة كتلته تزيد قوة الضغط على السطح.','The object that friction resists; adding mass increases the pressing force on the surface.');
note('Surface bumps - part of the cause of friction','السطحان خشنان عند التكبير، وهذا جزء من سبب الاحتكاك إلى جانب قوى التجاذب بين الجزيئات.','Surfaces are rough up close, which is part of why friction occurs, along with attraction between molecules.');
note('Push force - the attempted motion','الدفع الذي يحاول تحريك الجسم، والاحتكاك الساكن يزيد ليساويه حتى حد معين.','The push trying to move the object; static friction rises to match it up to a limit.');
note('Friction force - opposes the motion','تعمل موازية للسطح وعكس اتجاه الحركة أو محاولة الحركة.','Acts parallel to the surface and against the motion or attempted motion.');
note('Normal force N - the surface pushing up on the object','قوة عمودية على السطح تدخل في قانون الاحتكاك: كلما كبرت زاد الاحتكاك.','A force perpendicular to the surface used in the friction rule: the larger it is, the larger the friction.');
note('The player - large mass, 110 kg','كتلته الكبيرة تجعل كمية حركته كبيرة حتى مع سرعة أقل.','His large mass gives him a large momentum even at a lower speed.');
note('The football - small mass, 0.410 kg','كتلتها الصغيرة تجعل كمية حركتها صغيرة رغم سرعتها العالية.','Its small mass keeps its momentum small despite its high speed.');
note('Player velocity arrow 8.00 m/s - slow','السرعة في الصيغة p = m·v؛ الاتجاه هو اتجاه كمية الحركة.','The v in p = m·v; its direction is the direction of the momentum.');
note('Ball velocity arrow 25.0 m/s - faster','سرعتها أكبر لكن الكتلة صغيرة، فالناتج أقل بكثير.','Its speed is greater but the mass is small, so the product is much smaller.');
note('Player momentum bar - 880 kg·m/s','نتيجة 110 كجم × 8.00 م/ث، أي كمية حركة كبيرة.','The result of 110 kg × 8.00 m/s, a large momentum.');
note('Ball momentum bar - 10.3 kg·m/s, tiny by comparison','نتيجة 0.410 كجم × 25.0 م/ث؛ لذلك لا تغير الكرة حركة اللاعب كثيراً.','The result of 0.410 kg × 25.0 m/s, so the ball barely changes the player\'s motion.');
note('The balance platform','نستخدم الميزان لقياس الكتلة وتحويلها إلى عدد المولات عبر الكتلة المولية.','A balance measures mass, which we convert to moles using molar mass.');
note('One mole of carbon-12 - mass 12 g','الكتلة المولية للكربون-12 هي 12 جم/مول.','The molar mass of carbon-12 is 12 g/mol.');
note('One mole of NaCl - mass 58.44 g','الكتلة الصيغية 58.44 amu تعني 58.44 جم لكل مول.','A formula mass of 58.44 amu means 58.44 g per mole.');
note('One mole of aspirin C9H8O4 - mass 180.15 g','جمع كتل 9 ذرات كربون و8 هيدروجين و4 أكسجين يعطي 180.15.','Adding 9 carbon, 8 hydrogen and 4 oxygen atom masses gives 180.15.');
note('6.022 × 10²³ particles in each mole','عدد أفوجادرو: هو ما يجعل المول عدداً ثابتاً من الجسيمات.','Avogadro\'s number: what makes a mole a fixed count of particles.');
note('Isotope Mg-24 - mass number 24','العدد الكتلي 24 = 12 بروتوناً + 12 نيوتروناً.','Mass number 24 = 12 protons + 12 neutrons.');
note('Isotope Mg-25 - mass number 25','العدد الكتلي 25 = 12 بروتوناً + 13 نيوتروناً.','Mass number 25 = 12 protons + 13 neutrons.');
note('Isotope Mg-26 - mass number 26','العدد الكتلي 26 = 12 بروتوناً + 14 نيوتروناً.','Mass number 26 = 12 protons + 14 neutrons.');
note('Proton - 12 in every magnesium atom','عدد البروتونات هو العدد الذري، وهو الذي يحدد هوية العنصر.','The proton count is the atomic number, and it defines the element.');
note('Neutron - the number changes between isotopes','اختلاف عدد النيوترونات هو ما يصنع النظائر المختلفة للعنصر نفسه.','Different neutron counts are what make different isotopes of the same element.');
note('Time axis','يمثل الزمن الذي نقيس عنده التركيز.','Represents the time at which concentration is measured.');
note('Concentration axis','يمثل تركيز المتفاعل الذي يقل أثناء التفاعل.','Represents the reactant concentration, which falls during the reaction.');
note('Concentration curve - falls as the reactant is used up','انحدارها يقل مع الزمن، أي أن التفاعل يبطؤ.','Its steepness decreases over time, meaning the reaction slows.');
note('Tangent line - its negative slope is the instantaneous rate','سالب ميل المماس لتركيز المتفاعل هنا هو سرعة اختفائه اللحظية.','The negative tangent slope here is the instantaneous reactant disappearance rate.');
note('A single moment on the curve','نقطة محددة نحسب عندها السرعة اللحظية.','A chosen point where the instantaneous rate is found.');
note('Interphase cell - grows and copies DNA','طور النمو ونسخ DNA قبل الانقسام (G1 وS وG2).','The growth and DNA-copying phase before division (G1, S, G2).');
note('Nucleus holding the copied DNA','يحمل DNA المنسوخ الذي سيوزع على الخليتين البنتين.','Holds the copied DNA that will be shared between the two daughter cells.');
note('Cell in metaphase','مرحلة تصطف فيها الكروموسومات في الوسط.','The stage where chromosomes line up in the middle.');
note('Chromosome on the metaphase plate - lined up in the middle','اصطفافها يضمن توزيعاً منتظماً على الخليتين.','Lining up helps ensure an even split into the two cells.');
note('Spindle fibre - pulls the chromosomes','ألياف المغزل تنظم حركة الكروموسومات أثناء الانقسام.','Spindle fibres orchestrate chromosome movement during division.');
note('Cell in anaphase','مرحلة تنفصل فيها الكروماتيدات الشقيقة نحو قطبين.','The stage where sister chromatids separate toward the poles.');
note('Sister chromatid moving to one pole','نسخة من الكروموسوم تتجه إلى أحد قطبي الخلية.','One copy of the chromosome heading to one pole of the cell.');
note('Sister chromatid moving to the other pole','النسخة الشقيقة تتجه إلى القطب المقابل.','Its sister copy heading to the opposite pole.');
note('Identical daughter cell after division','ناتج الانقسام المتساوي: متطابقة وراثياً مع الخلية الأم.','A product of mitosis, genetically identical to the parent cell.');
note('Second identical daughter cell','الخلية البنت الثانية من الانقسام نفسه.','The second daughter cell from the same division.');
note('New nucleus - formed in telophase','تتكون أغلفة نووية جديدة حول الكروموسومات في الطور النهائي.','New nuclear envelopes form around the chromosomes in telophase.');
note('Second new nucleus','نواة الخلية البنت الثانية.','The nucleus of the second daughter cell.');
note('The container - water on both sides','يوضح أن الماء موجود على جانبي الغشاء بتراكيز مختلفة من المذابات.','Shows water on both sides of the membrane with different amounts of solute.');
note('Semipermeable membrane - lets water pass, limits solutes','الغشاء شبه النافذ هو سبب الأسموزية: يمرر الماء ويحد من المذابات.','The semipermeable membrane is what makes osmosis possible: it passes water and limits solutes.');
note('Solute particle - does not cross the membrane easily','جسيمات المذاب تقلل تركيز الماء الحر على جانبها.','Solute particles lower the free-water concentration on their side.');
note('Free water molecule','جزيء الماء ينتقل نحو الجهة الأقل ماءً حراً.','Water moves toward the side with less free water.');
note('Net water movement - toward the side with more solutes','اتجاه الحركة الصافية للماء في الأسموزية.','The direction of net water movement in osmosis.');
note('Diploid cell - the starting point','الخلية الأم ثنائية المجموعة، يبدأ منها الانقسام الاختزالي.','The parent diploid cell where meiosis starts.');
note('Chromosome - homologous pairs share a colour','الأزواج المتماثلة تحمل الجينات نفسها في المواضع نفسها.','Homologous pairs carry the same genes in the same positions.');
note('Meiosis I then meiosis II','انقسامان متتاليان بعد نسخ واحد للكروموسومات.','Two successive divisions after one round of chromosome copying.');
note('Haploid cell - one of four','الناتج النهائي: أربع خلايا في كل منها مجموعة واحدة.','The final result: four cells, each with one set of chromosomes.');
note('One chromosome from each homologous pair','اختزال العدد إلى النصف يمنع تضاعفه في الأجيال.','Halving the number stops it doubling across generations.');
note('Radio waves - wavelength gets shorter as frequency rises','تنتج من تيارات في أسلاك ودوائر وهي الأطول موجة هنا.','Produced by currents in wires and circuits; the longest wavelength here.');
note('Microwaves - wavelength gets shorter as frequency rises','أعلى ترددات يمكن إنتاجها من تيارات في دوائر أجهزة.','The highest frequencies that circuits and devices can produce.');
note('Infrared - wavelength gets shorter as frequency rises','ينتج عادة من الحركة الحرارية واهتزاز وتدوير الذرات والجزيئات.','Usually produced by thermal motion and vibration and rotation of atoms and molecules.');
note('Visible light - wavelength gets shorter as frequency rises','الجزء الضيق الذي تستجيب له العين البشرية.','The narrow segment the human eye responds to.');
note('Ultraviolet - wavelength gets shorter as frequency rises','يعني فوق البنفسجي: تمتد ترددات أعلى من الضوء البنفسجي.','Means above violet: frequencies extending upward from violet light.');
note('X-rays - wavelength gets shorter as frequency rises','تنتج مثلاً في تفريغ كهربائي عالي الجهد، وتنفذ من الجلد.','Created for example in a high-voltage discharge, and pass through skin.');
note('Gamma rays - wavelength gets shorter as frequency rises','تماثل السينية بالتردد نفسه وتختلف في المصدر، وقد تضر الأنسجة الحية.','Same as X-rays of equal frequency, differing in source, and can damage living tissue.');
function expandedLabel(label){
  var n=PART_NOTES[label.en];
  var names = {'Left hemisphere - language and logic':['النصف الأيسر من المخ','Left cerebral hemisphere'],'Right hemisphere - creativity':['النصف الأيمن من المخ','Right cerebral hemisphere'],'Cardiac muscle - never tires':['عضلة القلب','Cardiac muscle'],'37 degrees - the balance point':['تنظيم درجة الحرارة','Temperature regulation'],'Their blend in the child':['وراثة من الوالدين - رمز تعليمي','Inheritance from both parents - schematic'],'Nitrogen - 78% of air':['نيتروجين - تمثيل رمزي','Nitrogen - symbolic'],'Oxygen - 21%':['أكسجين - تمثيل رمزي','Oxygen - symbolic'],'Bulb - current becomes light':['المصباح','Lamp'],'Each row is a period = new electron shell':['الدورة - صف من العناصر','Period - a row of elements']};
  names['Negative electrode overflowing with electrons']=['القطب السالب','Negative electrode']; names['Positive electrode craving them']=['القطب الموجب','Positive electrode'];
  var nn=names[label.en]||[label.ar,label.en];
  return n ? {ar:nn[0]+'\n'+n[0], en:nn[1]+'\n'+n[1]} : label;
}

// ---- helpers ----
function sph(r, color, x, y, z, opts){
  var geo = new THREE.SphereGeometry(r, 28, 22);
  var mat = new THREE.MeshStandardMaterial(Object.assign({color:color, roughness:0.55, metalness:0.08}, opts||{}));
  var m = new THREE.Mesh(geo, mat);
  m.position.set(x||0, y||0, z||0);
  return m;
}
function cyl(r, len, color, x1,y1,z1, x2,y2,z2){
  var geo = new THREE.CylinderGeometry(r, r, len, 10);
  var mat = new THREE.MeshStandardMaterial({color:color, roughness:0.6});
  var m = new THREE.Mesh(geo, mat);
  var a = new THREE.Vector3(x1,y1,z1), b = new THREE.Vector3(x2,y2,z2);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.lookAt(b);
  m.rotateX(Math.PI/2);
  return m;
}
function ring(r, color, opacity){
  var geo = new THREE.TorusGeometry(r, 0.015, 8, 90);
  var mat = new THREE.MeshBasicMaterial({color:color, transparent:true, opacity:opacity||0.35});
  return new THREE.Mesh(geo, mat);
}
// tag a part with a tappable bilingual label
function L(mesh, ar, en){ mesh.userData.label = {ar:ar, en:en}; return mesh; }

// ---- models (each returns {group, animate(t), legend:{ar:[],en:[]}}) ----

MODELS.cell = function(){
  var g = new THREE.Group();
  g.add(L(sph(2.0, 0x7c3aed, 0,0,0, {transparent:true, opacity:0.18, roughness:0.3}), 'الغشاء الخلوي','Cell membrane'));
  g.add(L(sph(0.62, 0xf59e0b, -0.35, 0.15, 0), 'النواة','Nucleus'));
  g.add(L(sph(0.2, 0xb45309, -0.35, 0.15, 0.45), 'النوية','Nucleolus'));
  [[0.9,0.55,0.3],[-0.9,-0.7,0.5],[0.7,-0.85,-0.4]].forEach(function(p){
    g.add(L(sph(p[2]?0.3:0.3, 0x0d9488, p[0], p[1], p[2]), 'الميتوكوندريا - مصنع الطاقة','Mitochondria - the powerhouse'));
  });
  [[1.0,-0.2,0.8],[-1.1,0.6,-0.6],[0.2,1.0,-0.7]].forEach(function(p){
    g.add(L(sph(0.13, 0xef4444, p[0], p[1], p[2]), 'الريبوسوم - مصنع البروتين','Ribosome - protein factory'));
  });
  return { group:g, animate:function(t){ g.rotation.y = t*0.00035; },
    legend:{ ar:['البنفسجي الشفاف: الغشاء الخلوي','البرتقالي: النواة','الأخضر: الميتوكوندريا (مصنع الطاقة)','الأحمر: الريبوسومات'],
             en:['Transparent purple: cell membrane','Orange: nucleus','Green: mitochondria (powerhouse)','Red: ribosomes'] } };
};

MODELS.dna = function(){
  var g = new THREE.Group();
  var N = 14, rise = 0.34, radius = 0.75, turn = Math.PI/5;
  for(var i=0;i<N;i++){
    var y = i*rise - (N*rise)/2, a = i*turn;
    var x1 = Math.cos(a)*radius,       z1 = Math.sin(a)*radius;
    var x2 = Math.cos(a+Math.PI)*radius, z2 = Math.sin(a+Math.PI)*radius;
    g.add(L(sph(0.16, 0x2563eb, x1,y,z1), 'سلسلة السكر والفوسفات','Sugar-phosphate strand'));
    g.add(L(sph(0.16, 0x7c3aed, x2,y,z2), 'سلسلة السكر والفوسفات','Sugar-phosphate strand'));
    g.add(L(cyl(0.045, radius*2-0.28, 0xf59e0b, x1*0.86,y,z1*0.86, x2*0.86,y,z2*0.86), 'القواعد النيتروجينية (A-T و C-G)','Nitrogen bases (A-T and C-G)'));
  }
  return { group:g, animate:function(t){ g.rotation.y = t*0.00045; },
    legend:{ ar:['الأزرق والبنفسجي: سلسلتا السكر والفوسفات','البرتقالي: القواعد النيتروجينية (A-T و C-G)'],
             en:['Blue & purple: the two sugar-phosphate strands','Orange: nitrogen base pairs (A-T and C-G)'] } };
};

MODELS.atom = function(){
  var g = new THREE.Group();
  g.add(L(sph(0.45, 0xef4444, 0,0,0), 'النواة - بروتونات ونيوترونات','Nucleus - protons and neutrons'));
  var shells = [1.1, 1.7, 2.3], eCount=[2, 4, 4], electrons=[];
  shells.forEach(function(r, si){
    var rg = ring(r, 0x94a3b8);
    rg.rotation.x = Math.PI/2 + si*0.35;
    g.add(L(rg, 'مستوى طاقة (غلاف)','Energy level (shell)'));
    for(var i=0;i<eCount[si];i++){
      var e = sph(0.11, 0x2563eb, 0,0,0);
      e.userData = {r:r, speed:0.0011 - si*0.00025, phase:i*(Math.PI*2/eCount[si]), tilt:si*0.35, label:{ar:'إلكترون', en:'Electron'}};
      electrons.push(e); g.add(e);
    }
  });
  return { group:g, animate:function(t){
      electrons.forEach(function(e){
        var a = t*e.userData.speed + e.userData.phase, r = e.userData.r;
        e.position.set(Math.cos(a)*r, Math.sin(a)*r*Math.sin(e.userData.tilt), Math.sin(a)*r*Math.cos(e.userData.tilt));
      });
    },
    legend:{ ar:['الأحمر: النواة (بروتونات ونيوترونات)','الأزرق: الإلكترونات تدور في مستويات الطاقة'],
             en:['Red: the nucleus (protons and neutrons)','Blue: electrons orbiting energy levels'] } };
};

MODELS.heart = function(){
  var g = new THREE.Group();
  var pts = [];
  for(var i=0;i<=20;i++){
    var t = i/20, y = -1.1 + t*2.2;
    var r = 0.12 + Math.sin(Math.min(1, t*1.25)*Math.PI)*0.85*(1-t*0.15);
    if(t>0.86) r *= 1-(t-0.86)*3.2;
    pts.push(new THREE.Vector2(Math.max(0.05,r), y));
  }
  var heart = new THREE.Mesh(new THREE.LatheGeometry(pts, 36), new THREE.MeshStandardMaterial({color:0xdc2626, roughness:0.45}));
  heart.rotation.x = Math.PI;
  g.add(L(heart, 'عضلة القلب','Heart muscle'));
  g.add(L(cyl(0.14, 0.8, 0x2563eb, 0.15,1.05,0, 0.45,1.7,0.1), 'الشريان الأورطي (الأبهر)','Aorta'));
  g.add(L(cyl(0.12, 0.7, 0x7c3aed, -0.2,1.0,0, -0.5,1.6,-0.1), 'الشريان الرئوي','Pulmonary artery'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0004; var s=1+Math.sin(t*0.004)*0.03; heart.scale.set(s,s,s); },
    legend:{ ar:['الأحمر: عضلة القلب','الأزرق: الأورطي (دم مؤكسج)','البنفسجي: الشريان الرئوي','لاحظ النبضة!'],
             en:['Red: heart muscle','Blue: aorta (oxygenated blood)','Purple: pulmonary artery','Watch it beat!'] } };
};

MODELS.water = function(){
  var g = new THREE.Group();
  g.add(L(sph(0.62, 0xef4444, 0,0,0), 'ذرة الأكسجين','Oxygen atom'));
  var ang = 104.5*Math.PI/180;
  g.add(L(sph(0.34, 0xf8fafc, Math.cos(ang/2)*1.0, Math.sin(ang/2)*1.0, 0), 'ذرة الهيدروجين','Hydrogen atom'));
  g.add(L(sph(0.34, 0xf8fafc, Math.cos(ang/2)*1.0, -Math.sin(ang/2)*1.0, 0), 'ذرة الهيدروجين','Hydrogen atom'));
  g.add(L(cyl(0.09, 0.85, 0x94a3b8, 0.25,0.35,0, Math.cos(ang/2)*0.78, Math.sin(ang/2)*0.78, 0), 'رابطة تساهمية','Covalent bond'));
  g.add(L(cyl(0.09, 0.85, 0x94a3b8, 0.25,-0.35,0, Math.cos(ang/2)*0.78, -Math.sin(ang/2)*0.78, 0), 'رابطة تساهمية','Covalent bond'));
  g.rotation.z = -Math.PI/2 + ang/2 + 0.5;
  return { group:g, animate:function(t){ g.rotation.y = t*0.00045; },
    legend:{ ar:['الأحمر: ذرة الأكسجين','الأبيض: ذرتا الهيدروجين','الزاوية بينهما 104.5° - سر قطبية الماء'],
             en:['Red: oxygen atom','White: two hydrogen atoms','104.5° angle - the secret of water polarity'] } };
};

MODELS.solar = function(){
  var g = new THREE.Group();
  g.add(L(sph(0.7, 0xfbbf24, 0,0,0, {emissive:0xf59e0b, emissiveIntensity:0.6}), 'الشمس','The Sun'));
  var defs = [
    {r:1.2, size:0.10, color:0x9ca3af, speed:0.0016, ar:'عطارد', en:'Mercury'},
    {r:1.6, size:0.16, color:0xf59e0b, speed:0.0012, ar:'الزهرة', en:'Venus'},
    {r:2.1, size:0.17, color:0x2563eb, speed:0.0010, ar:'الأرض', en:'Earth'},
    {r:2.6, size:0.13, color:0xef4444, speed:0.0008, ar:'المريخ', en:'Mars'},
    {r:3.2, size:0.30, color:0xd97706, speed:0.0005, ar:'المشتري', en:'Jupiter'},
    {r:3.9, size:0.25, color:0xfde68a, speed:0.0004, ar:'زحل', en:'Saturn'},
    {r:4.6, size:0.18, color:0x67e8f9, speed:0.0003, ar:'أورانوس', en:'Uranus'},
    {r:5.3, size:0.17, color:0x2563eb, speed:0.0002, ar:'نبتون', en:'Neptune'}
  ];
  var planets = [];
  defs.forEach(function(d){
    var rg = ring(d.r, 0x94a3b8, 0.22); rg.rotation.x = Math.PI/2; g.add(rg);
    var p = sph(d.size, d.color, d.r, 0, 0);
    p.userData = {r:d.r, speed:d.speed, label:{ar:'كوكب '+d.ar, en:d.en}};
    planets.push(p); g.add(p);
  });
  return { group:g, animate:function(t){
      planets.forEach(function(p){
        var a = t*p.userData.speed;
        p.position.set(Math.cos(a)*p.userData.r, 0, Math.sin(a)*p.userData.r);
      });
    },
    legend:{ ar:['الأصفر: الشمس','الكواكب بالترتيب: عطارد، الزهرة، الأرض (أزرق)، المريخ، المشتري، زحل'],
             en:['Yellow: the Sun','Eight planets shown in order; sizes, distances and speeds are schematic.'] } };
};

MODELS.kidney = function(){
  var g = new THREE.Group();
  var body = sph(1.0, 0x991b1b, 0,0,0);
  body.scale.set(0.72, 1.12, 0.55);
  g.add(L(body, 'الكلية','Kidney'));
  var notch = sph(0.34, 0x7f1d1d, 0.5, 0, 0.12);
  notch.scale.set(0.4, 0.65, 0.5);
  g.add(L(notch, 'النقير - مدخل الأوعية','Hilum - vessel entry'));
  g.add(L(cyl(0.09, 1.7, 0xfde68a, 0.55,-0.15,0.12, 0.95,-1.8,0.2), 'الحالب - يوصل البول إلى المثانة','Ureter - carries urine to the bladder'));
  g.add(L(cyl(0.08, 1.1, 0xef4444, 1.75,0.28,0, 0.6,0.12,0.08), 'الشريان الكلوي - يدخل الدم','Renal artery - blood in'));
  g.add(L(cyl(0.09, 1.1, 0x2563eb, 1.75,-0.18,0.1, 0.6,-0.1,0.12), 'الوريد الكلوي - يخرج الدم المنقّى','Renal vein - clean blood out'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0004; },
    legend:{ ar:['العنابي: الكلية بحجم قبضة اليد','الأصفر: الحالب يوصل البول إلى المثانة','الأحمر الفاتح: الشريان الكلوي يدخل الدم','الأزرق: الوريد الكلوي يخرج الدم المنقّى'],
             en:['Dark red: the kidney, fist-sized','Yellow: the ureter carries urine to the bladder','Bright red: renal artery brings blood in','Blue: renal vein carries cleaned blood out'] } };
};

MODELS.photosynthesis = function(){
  var g = new THREE.Group();
  var leaf = new THREE.Mesh(new THREE.SphereGeometry(1.5, 28, 22), new THREE.MeshStandardMaterial({color:0x16a34a, roughness:0.6}));
  leaf.scale.set(1.3, 0.18, 0.85);
  g.add(L(leaf, 'الورقة','Leaf'));
  [[-0.8,0.15,0.2],[0.1,0.16,-0.25],[0.9,0.15,0.15],[-0.2,0.16,0.35]].forEach(function(p){
    var ch = sph(0.16, 0x065f46, p[0], p[1], p[2]);
    ch.scale.set(1, 0.6, 1);
    g.add(L(ch, 'البلاستيدة الخضراء - مصنع الغذاء','Chloroplast - the food factory'));
  });
  var sun = sph(0.42, 0xfbbf24, 0, 2.3, 0, {emissive:0xf59e0b, emissiveIntensity:0.7});
  g.add(L(sun, 'الشمس - مصدر الطاقة','The Sun - energy source'));
  [0.9, 0, -0.9].forEach(function(dx){
    g.add(L(cyl(0.03, 1.1, 0xfde68a, dx*0.5, 1.85, 0, dx, 0.35, 0.2), 'أشعة الضوء','Light rays'));
  });
  g.add(L(cyl(0.07, 0.9, 0x60a5fa, -0.4,-1.35,0, -0.25,-0.25,0), 'الماء من الجذور','Water from the roots'));
  [[-1.5,0.5],[ -1.2,0.9]].forEach(function(p){
    g.add(L(sph(0.13, 0x9ca3af, p[0], p[1], 0.1), 'ثاني أكسيد الكربون يدخل','CO2 enters'));
  });
  [[1.3,0.55],[1.65,0.95]].forEach(function(p){
    g.add(L(sph(0.13, 0x38bdf8, p[0], p[1], 0.1), 'الأكسجين يخرج','Oxygen leaves'));
  });
  return { group:g, animate:function(t){ g.rotation.y = Math.sin(t*0.0003)*0.5; var s=1+Math.sin(t*0.003)*0.04; sun.scale.set(s,s,s); },
    legend:{ ar:['الأخضر: الورقة وبداخلها البلاستيدات','الأصفر: الشمس وأشعتها','الأزرق: الماء يصعد من الجذور','الرمادي: CO2 يدخل، السماوي: الأكسجين يخرج'],
             en:['Green: leaf with chloroplasts inside','Yellow: the Sun and its rays','Blue: water rising from roots','Gray: CO2 in, light blue: oxygen out'] } };
};

MODELS.nervous = function(){
  var g = new THREE.Group();
  var brain = sph(0.8, 0xf9a8d4, 0, 1.5, 0);
  brain.scale.set(1.1, 0.85, 0.95);
  g.add(L(brain, 'الدماغ - مركز القيادة','Brain - command center'));
  [0.25, 0.45].forEach(function(r, i){
    var fold = new THREE.Mesh(new THREE.TorusGeometry(0.55+i*0.12, 0.05, 8, 40), new THREE.MeshStandardMaterial({color:0xec4899, roughness:0.6}));
    fold.position.set(0, 1.5, 0); fold.rotation.x = Math.PI/2 + i*0.5;
    g.add(L(fold, 'ثنيات الدماغ - تزيد مساحته','Brain folds - more surface area'));
  });
  g.add(L(cyl(0.16, 2.4, 0xfde68a, 0,0.75,0, 0,-1.6,0), 'الحبل الشوكي - الكابل الرئيسي','Spinal cord - the main cable'));
  [[-1.3,-0.5],[1.3,-0.5],[-1.0,-1.5],[1.0,-1.5]].forEach(function(p){
    g.add(L(cyl(0.045, 1.4, 0xf59e0b, 0,p[1]+0.55,0, p[0],p[1],0.2), 'الأعصاب - أسلاك الإشارات','Nerves - signal wires'));
  });
  return { group:g, animate:function(t){ g.rotation.y = t*0.0004; },
    legend:{ ar:['الوردي: الدماغ بثنياته','الأصفر الفاتح: الحبل الشوكي','البرتقالي: الأعصاب الممتدة للجسم'],
             en:['Pink: the folded brain','Pale yellow: spinal cord','Orange: nerves reaching the body'] } };
};

MODELS.digestion = function(){
  var g = new THREE.Group();
  var stomach = sph(0.7, 0xfda4af, 0.2, 0.9, 0);
  stomach.scale.set(1.05, 0.85, 0.7);
  g.add(L(stomach, 'المعدة - تقلب الطعام في حمض','Stomach - churns food in acid'));
  g.add(L(cyl(0.13, 1.5, 0xfbcfe8, 0.1,2.2,0, 0.15,1.35,0), 'المريء - يدفع الطعام للأسفل','Esophagus - pushes food down'));
  // intestines: coiled tube
  var pts = [];
  for(var i=0;i<=40;i++){
    var t = i/40;
    pts.push(new THREE.Vector3(Math.sin(t*Math.PI*5)*0.75, -0.2 - t*1.5, Math.cos(t*Math.PI*5)*0.45));
  }
  var tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 80, 0.14, 10, false), new THREE.MeshStandardMaterial({color:0xfb923c, roughness:0.6}));
  g.add(L(tube, 'الأمعاء الدقيقة - تمتص الغذاء (6 أمتار!)','Small intestine - absorbs food (6 meters!)'));
  g.add(L(cyl(0.12, 1.1, 0xc084fc, -0.55,0.35,0, -0.75,-0.6,0.1), 'الأمعاء الغليظة - تستعيد الماء','Large intestine - reclaims water'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0004; },
    legend:{ ar:['الوردي الغامق: المعدة','الوردي الفاتح: المريء','البرتقالي: الأمعاء الدقيقة الملتفة','البنفسجي: الأمعاء الغليظة'],
             en:['Deep pink: stomach','Pale pink: esophagus','Orange: coiled small intestine','Purple: large intestine'] } };
};

MODELS.blood = function(){
  var g = new THREE.Group();
  var vessel = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 4.4, 24, 1, true), new THREE.MeshStandardMaterial({color:0xb91c1c, transparent:true, opacity:0.22, side:THREE.DoubleSide, roughness:0.4}));
  vessel.rotation.z = Math.PI/2;
  g.add(L(vessel, 'الوعاء الدموي','Blood vessel'));
  var cells = [];
  for(var i=0;i<7;i++){
    var rbc = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.1, 20), new THREE.MeshStandardMaterial({color:0xdc2626, roughness:0.5}));
    rbc.rotation.set(Math.random()*1.5, Math.random()*3, Math.random()*1.5);
    rbc.userData = {x:-2+ i*0.62, y:Math.sin(i*2.1)*0.3, z:Math.cos(i*1.7)*0.3, label:{ar:'خلية حمراء - تحمل الأكسجين', en:'Red cell - carries oxygen'}};
    cells.push(rbc); g.add(rbc);
  }
  var wbc = sph(0.34, 0xf8fafc, 0, 0.2, -0.15);
  wbc.userData = {x:0.9, y:0.2, z:-0.15, label:{ar:'خلية بيضاء - جندي المناعة', en:'White cell - immune soldier'}};
  cells.push(wbc); g.add(wbc);
  [[-0.6,0.35,0.2],[1.6,-0.3,0.15]].forEach(function(p){
    var pl = sph(0.1, 0xf59e0b, p[0], p[1], p[2]);
    pl.userData = {x:p[0], y:p[1], z:p[2], label:{ar:'صفائح دموية - تسد الجروح', en:'Platelet - plugs wounds'}};
    cells.push(pl); g.add(pl);
  });
  return { group:g, animate:function(t){
      cells.forEach(function(c){
        var x = c.userData.x + (t*0.00045)%4.4;
        c.position.set(((x+2.2)%4.4)-2.2, c.userData.y, c.userData.z);
      });
    },
    legend:{ ar:['الأحمر: خلايا حمراء تحمل الأكسجين','الأبيض: خلية مناعية','البرتقالي: صفائح دموية','شاهدها تتدفق داخل الوعاء!'],
             en:['Red: red cells carrying oxygen','White: an immune cell','Orange: platelets','Watch them flow inside the vessel!'] } };
};

MODELS.organelles = function(){
  var g = new THREE.Group();
  g.add(L(sph(2.1, 0x7c3aed, 0,0,0, {transparent:true, opacity:0.12, roughness:0.3}), 'الغشاء الخلوي','Cell membrane'));
  g.add(L(sph(0.55, 0xf59e0b, -0.5, 0.4, 0), 'النواة - تحفظ الـ DNA','Nucleus - stores the DNA'));
  [[1.0,0.6,0.4],[-1.1,-0.6,0.5],[0.5,-1.0,-0.5]].forEach(function(p){
    g.add(L(sph(0.3, 0x0d9488, p[0],p[1],p[2]), 'الميتوكوندريا - محطة الطاقة','Mitochondrion - power station'));
  });
  // endoplasmic reticulum: flattened wavy tubes near nucleus
  [-0.1, 0.15, 0.4].forEach(function(off, i){
    var er = new THREE.Mesh(new THREE.TorusGeometry(0.75+i*0.14, 0.045, 8, 40, Math.PI*1.2), new THREE.MeshStandardMaterial({color:0x60a5fa, roughness:0.6}));
    er.position.set(-0.5+off, 0.4, -0.3+i*0.15); er.rotation.y = Math.PI/2.4;
    g.add(L(er, 'الشبكة الإندوبلازمية - طرق النقل','Endoplasmic reticulum - transport roads'));
  });
  // golgi: stacked discs
  [0, 0.16, 0.32].forEach(function(off){
    var gol = new THREE.Mesh(new THREE.CylinderGeometry(0.42-off*0.4, 0.42-off*0.4, 0.07, 20), new THREE.MeshStandardMaterial({color:0xf472b6, roughness:0.6}));
    gol.position.set(0.9, -0.3+off, 0.6);
    g.add(L(gol, 'جهاز غولجي - مكتب البريد','Golgi apparatus - the post office'));
  });
  [[-0.3,1.2,0.6],[1.3,0.1,-0.6],[-0.8,-1.2,-0.4]].forEach(function(p){
    g.add(L(sph(0.12, 0xef4444, p[0],p[1],p[2]), 'الريبوسوم - مصنع البروتين','Ribosome - protein factory'));
  });
  [[0.2,-0.6,1.0]].forEach(function(p){
    g.add(L(sph(0.2, 0xa3e635, p[0],p[1],p[2]), 'الجسيم الحال - عامل النظافة','Lysosome - cleanup crew'));
  });
  return { group:g, animate:function(t){ g.rotation.y = t*0.00035; },
    legend:{ ar:['البرتقالي: النواة','الأخضر: الميتوكوندريا','الأزرق: الشبكة الإندوبلازمية','الوردي: جهاز غولجي','الأحمر: ريبوسومات، الليموني: جسيم حال'],
             en:['Orange: nucleus','Green: mitochondria','Blue: endoplasmic reticulum','Pink: Golgi apparatus','Red: ribosomes, lime: lysosome'] } };
};

MODELS.tissues = function(){
  var g = new THREE.Group();
  function block(x, color, ar, en){
    var b = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 1.1), new THREE.MeshStandardMaterial({color:color, roughness:0.55}));
    b.position.set(x, 0, 0);
    g.add(L(b, ar, en));
  }
  block(-1.9, 0xfda4af, 'نسيج طلائي - يغطي ويبطّن','Epithelial tissue - covers and lines');
  block(-0.63, 0xfde68a, 'نسيج ضام - يربط ويدعم','Connective tissue - binds and supports');
  block(0.63, 0xef4444, 'نسيج عضلي - يتقلص ويحرك','Muscle tissue - contracts and moves');
  block(1.9, 0xc084fc, 'نسيج عصبي - ينقل الإشارات','Nervous tissue - carries signals');
  g.rotation.x = 0.35;
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; },
    legend:{ ar:['الأنواع الأربعة: طلائي، ضام، عضلي، عصبي','تتجمع الأنسجة معاً لتبني عضواً كاملاً'],
             en:['The four types: epithelial, connective, muscle, nervous','Tissues combine to build a whole organ'] } };
};

MODELS.skeleton = function(){
  var g = new THREE.Group();
  var bone = 0xf5f0e6;
  g.add(L(sph(0.5, bone, 0, 2.3, 0), 'الجمجمة - تحمي الدماغ','Skull - protects the brain'));
  g.add(L(cyl(0.12, 1.6, 0xe8e0cc, 0,1.55,0, 0,-0.2,0), 'العمود الفقري','Spine'));
  [1.35, 1.05, 0.75].forEach(function(y, i){
    var rib = new THREE.Mesh(new THREE.TorusGeometry(0.62-i*0.07, 0.05, 8, 30, Math.PI*1.6), new THREE.MeshStandardMaterial({color:bone, roughness:0.6}));
    rib.position.set(0, y, 0); rib.rotation.x = Math.PI/2; rib.rotation.z = -Math.PI*0.3;
    g.add(L(rib, 'الأضلاع - تحمي القلب والرئتين','Ribs - protect heart and lungs'));
  });
  g.add(L(cyl(0.09, 1.3, bone, -0.45,1.5,0, -1.35,0.9,0), 'عظام الذراع','Arm bones'));
  g.add(L(cyl(0.09, 1.3, bone, 0.45,1.5,0, 1.35,0.9,0), 'عظام الذراع','Arm bones'));
  g.add(L(cyl(0.11, 1.5, bone, -0.25,-0.35,0, -0.45,-1.9,0), 'عظمة الفخذ والساق','Femur and leg'));
  g.add(L(cyl(0.11, 1.5, bone, 0.25,-0.35,0, 0.45,-1.9,0), 'عظمة الفخذ والساق','Femur and leg'));
  g.add(L(sph(0.2, 0xe8e0cc, 0, -0.25, 0), 'الحوض - يحمي ويدعم','Pelvis - protects and supports'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.00035; },
    legend:{ ar:['206 عظمة: جمجمة، عمود فقري، أضلاع، أطراف','النخاع داخل العظام يصنع خلايا الدم'],
             en:['206 bones: skull, spine, ribs, limbs','Marrow inside bones makes blood cells'] } };
};

MODELS.muscles = function(){
  var g = new THREE.Group();
  // two bones (upper arm + forearm) with biceps/triceps
  g.add(L(cyl(0.14, 1.3, 0xf5f0e6, 0,1.5,0, 0,0.2,0), 'عظمة الذراع العلوية','Upper arm bone'));
  g.add(L(cyl(0.12, 1.2, 0xf5f0e6, 0,0.1,0, 0,-1.1,0.1), 'عظمة الساعد','Forearm bone'));
  var bi = sph(0.32, 0xdc2626, -0.28, 0.85, 0.1); bi.scale.set(1, 1.7, 1);
  g.add(L(bi, 'العضلة ذات الرأسين - تثني الذراع','Biceps - bends the arm'));
  var tri = sph(0.28, 0xef4444, 0.28, 0.85, -0.05); tri.scale.set(1, 1.6, 1);
  g.add(L(tri, 'العضلة ثلاثية الرؤوس - تفرد الذراع','Triceps - straightens the arm'));
  var heartM = sph(0.22, 0xbe185d, 0, 2.05, 0);
  g.add(L(heartM, 'عضلة القلب - لا تتعب أبداً','Cardiac muscle - never tires'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; var s=1+Math.sin(t*0.003)*0.08; bi.scale.set(s, 1.7, s); },
    legend:{ ar:['العظام بيضاء والعضلات حمراء','العضلات تعمل في أزواج: واحدة تثني وأخرى تفرد','شاهد العضلة ذات الرأسين تتقلص!'],
             en:['Bones white, muscles red','Muscles work in pairs: one bends, one straightens','Watch the biceps flex!'] } };
};

MODELS.respiration = function(){
  var g = new THREE.Group();
  g.add(L(cyl(0.16, 1.4, 0xfde68a, 0,2.0,0, 0,0.7,0), 'القصبة الهوائية','Trachea'));
  g.add(L(cyl(0.1, 0.9, 0xfde68a, 0,0.75,0, -0.55,0.3,0), 'الشعبة الهوائية','Bronchus'));
  g.add(L(cyl(0.1, 0.9, 0xfde68a, 0,0.75,0, 0.55,0.3,0), 'الشعبة الهوائية','Bronchus'));
  var lungL = sph(0.75, 0xf9a8d4, -0.95, -0.35, 0); lungL.scale.set(0.8, 1.25, 0.6);
  g.add(L(lungL, 'الرئة اليسرى','Left lung'));
  var lungR = sph(0.75, 0xf9a8d4, 0.95, -0.35, 0); lungR.scale.set(0.8, 1.25, 0.6);
  g.add(L(lungR, 'الرئة اليمنى','Right lung'));
  [[-0.8,-0.5],[0.9,-0.3],[0.8,-0.75]].forEach(function(p){
    g.add(L(sph(0.12, 0xfb7185, p[0], p[1], 0.35), 'حويصلة هوائية - هنا يعبر الأكسجين','Alveolus - where oxygen crosses'));
  });
  var dia = new THREE.Mesh(new THREE.SphereGeometry(1.15, 24, 12, 0, Math.PI*2, 0, Math.PI/2), new THREE.MeshStandardMaterial({color:0xc084fc, side:THREE.DoubleSide, roughness:0.6}));
  dia.position.set(0, -1.55, 0); dia.rotation.x = Math.PI;
  g.add(L(dia, 'الحجاب الحاجز - مضخة التنفس','Diaphragm - the breathing pump'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; var s=1+Math.sin(t*0.0022)*0.07; lungL.scale.set(0.8*s, 1.25*s, 0.6*s); lungR.scale.set(0.8*s, 1.25*s, 0.6*s); },
    legend:{ ar:['الوردي: الرئتان تتمددان وتنكمشان','الأصفر: القصبة والشعب الهوائية','الأحمر الفاتح: الحويصلات الهوائية','البنفسجي: الحجاب الحاجز'],
             en:['Pink: the lungs expand and contract','Yellow: trachea and bronchi','Light red: alveoli','Purple: diaphragm'] } };
};

MODELS.immunity = function(){
  var g = new THREE.Group();
  // virus with spikes
  var virus = sph(0.55, 0x84cc16, 1.2, 0.3, 0);
  g.add(L(virus, 'فيروس - غازٍ متسلل','Virus - an invader'));
  for(var i=0;i<10;i++){
    var a = i/10*Math.PI*2, b = (i%3)*0.9;
    g.add(L(sph(0.09, 0x4d7c0f, 1.2+Math.cos(a)*0.62*Math.cos(b), 0.3+Math.sin(b)*0.55, Math.sin(a)*0.62*Math.cos(b)), 'نتوءات الفيروس - مفاتيح الاختراق','Virus spikes - entry keys'));
  }
  // white blood cell
  var wbc = sph(0.6, 0xf8fafc, -1.1, -0.2, 0, {roughness:0.7});
  g.add(L(wbc, 'خلية مناعية - جندي الجسم','Immune cell - body soldier'));
  g.add(L(sph(0.25, 0xc7d2fe, -1.1, -0.2, 0.25), 'نواة الخلية المناعية','Immune cell nucleus'));
  // antibodies: Y shapes (two small cylinders)
  [[0.2,0.9],[0.5,-0.9],[-0.2,0.5]].forEach(function(p){
    var ab = new THREE.Group();
    ab.add(cyl(0.04, 0.35, 0xf59e0b, 0,0,0, 0,-0.35,0));
    ab.add(cyl(0.04, 0.3, 0xf59e0b, 0,0,0, -0.14,0.25,0));
    ab.add(cyl(0.04, 0.3, 0xf59e0b, 0,0,0, 0.14,0.25,0));
    ab.position.set(p[0], p[1], 0.4);
    L(ab.children[0], 'جسم مضاد - صاروخ موجّه','Antibody - guided missile');
    L(ab.children[1], 'جسم مضاد - صاروخ موجّه','Antibody - guided missile');
    L(ab.children[2], 'جسم مضاد - صاروخ موجّه','Antibody - guided missile');
    g.add(ab);
  });
  return { group:g, animate:function(t){ g.rotation.y = t*0.00035; virus.position.y = 0.3+Math.sin(t*0.002)*0.12; },
    legend:{ ar:['الأخضر: فيروس بنتوءاته','الأبيض: خلية مناعية','البرتقالي: أجسام مضادة على شكل Y تهاجم الفيروس'],
             en:['Green: virus with spikes','White: immune cell','Orange: Y-shaped antibodies attacking the virus'] } };
};

MODELS.genetics = function(){
  var g = new THREE.Group();
  function chrom(x, color, ar, en){
    var c = new THREE.Group();
    c.add(cyl(0.09, 0.9, color, 0,0.45,0, 0,-0.45,0));
    c.add(cyl(0.09, 0.9, color, -0.22,0.45,0, 0.22,-0.45,0));
    c.add(cyl(0.09, 0.9, color, 0.22,0.45,0, -0.22,-0.45,0));
    c.children.forEach(function(m){ L(m, ar, en); });
    c.position.x = x;
    g.add(c);
  }
  chrom(-1.3, 0x60a5fa, 'كروموسوم من الأب','Chromosome from dad');
  chrom(0, 0xf472b6, 'كروموسوم من الأم','Chromosome from mom');
  chrom(1.3, 0xa78bfa, 'خلطتكما في الطفل','Their blend in the child');
  return { group:g, animate:function(t){ g.rotation.y = t*0.00035; },
    legend:{ ar:['الأزرق: نسخة الأب، الوردي: نسخة الأم','البنفسجي: خلطتهما في الطفل - لهذا يشبههما ولا يطابقهما'],
             en:['Blue: dad copy, pink: mom copy','Purple: their blend in the child - alike but not identical'] } };
};

MODELS.evolution = function(){
  var g = new THREE.Group();
  var trunk = cyl(0.08, 2.2, 0x92400e, 0,-1.1,0, 0,1.1,0);
  g.add(L(trunk, 'جذع شجرة الحياة - السلف المشترك','Tree of life trunk - the common ancestor'));
  var tips = [[-1.1,1.3,0,0x84cc16],[0,1.6,0,0x0d9488],[1.1,1.3,0,0xf59e0b]];
  tips.forEach(function(tip){
    g.add(L(cyl(0.06, 1.3, 0x92400e, 0,0.4,0, tip[0]*0.7,tip[1]-0.25,0), 'فرع تطوري','Evolutionary branch'));
    g.add(L(sph(0.22, tip[3], tip[0], tip[1], 0), 'نوع حديث على طرف الفرع','Modern species at a branch tip'));
  });
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; },
    legend:{ ar:['كل كائنات الأرض على شجرة واحدة','الفروع تتباعد عبر ملايين السنين بالانتقاء الطبيعي'],
             en:['All Earth life on one tree','Branches diverge over millions of years by natural selection'] } };
};

MODELS.ecology = function(){
  var g = new THREE.Group();
  g.add(L(sph(0.4, 0xfbbf24, -1.5, 1.2, 0), 'الشمس - مصدر الطاقة','The sun - energy source'));
  g.add(L(sph(0.28, 0x22c55e, -1.3, -0.6, 0), 'النبات - المنتج','Plant - the producer'));
  g.add(L(sph(0.24, 0xa3e635, 0, -0.6, 0), 'العاشب - يأكل النبات','Herbivore - eats the plant'));
  g.add(L(sph(0.24, 0xef4444, 1.2, -0.6, 0), 'المفترس - يأكل العاشب','Predator - eats the herbivore'));
  function arrow(x1,x2){
    var a = new THREE.Group();
    a.add(cyl(0.03, 0.8, 0xfde68a, x1,0,0, x2,0,0));
    var cone = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.2, 10), new THREE.MeshStandardMaterial({color:0xfde68a}));
    cone.position.set(x2,0,0); cone.rotation.z = -Math.PI/2;
    a.add(cone);
    a.children.forEach(function(m){ L(m,'اتجاه انتقال الطاقة','Direction of energy flow'); });
    g.add(a);
  }
  arrow(-1.0,-0.25); arrow(0.28,0.95);
  return { group:g, animate:function(t){ g.rotation.y = Math.sin(t*0.0004)*0.4; },
    legend:{ ar:['الشمس ← نبات ← عاشب ← مفترس','السهمان: هكذا تنتقل الطاقة في السلسلة الغذائية'],
             en:['Sun -> plant -> herbivore -> predator','Arrows: how energy flows in the food chain'] } };
};

MODELS.enzymes = function(){
  var g = new THREE.Group();
  var enz = sph(0.85, 0x7c3aed, -0.3, 0, 0);
  g.add(L(enz, 'الإنزيم - المسرِّع','Enzyme - the accelerator'));
  var notch = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,0.5), new THREE.MeshStandardMaterial({color:0x241a5e}));
  notch.position.set(0.45, 0.1, 0);
  g.add(L(notch, 'الموقع النشط - تجويف القفل','Active site - the lock cavity'));
  var sub = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.4,0.4), new THREE.MeshStandardMaterial({color:0xf59e0b, roughness:0.5}));
  sub.position.set(1.6, 0.1, 0);
  g.add(L(sub, 'الركيزة - المفتاح المناسب','Substrate - the fitting key'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; sub.position.x = 1.6 - (Math.sin(t*0.0012)*0.5+0.5)*1.0; },
    legend:{ ar:['شاهد الركيزة تقترب وتلائم الموقع النشط','مفتاح واحد لقفل واحد - لهذا كل إنزيم متخصص'],
             en:['Watch the substrate approach and fit the active site','One key for one lock - that is why each enzyme specializes'] } };
};

MODELS.virus = function(){
  var g = new THREE.Group();
  var core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 0), new THREE.MeshStandardMaterial({color:0x84cc16, flatShading:true, roughness:0.5}));
  g.add(L(core, 'غلاف الفيروس البروتيني','Virus protein shell'));
  g.add(L(sph(0.3, 0xf59e0b, 0, 0, 0), 'المادة الوراثية بالداخل','Genetic material inside'));
  for(var i=0;i<12;i++){
    var a = i/12*Math.PI*2, b = (i%4)*0.7 - 1;
    g.add(L(sph(0.1, 0x4d7c0f, Math.cos(a)*0.85*Math.cos(b), Math.sin(b)*0.8, Math.sin(a)*0.85*Math.cos(b)), 'نتوءات الاقتحام','Entry spikes'));
  }
  return { group:g, animate:function(t){ g.rotation.y = t*0.0004; },
    legend:{ ar:['الأخضر الفاتح: الغلاف، البرتقالي: المادة الوراثية','النتوءات مفاتيح اقتحام الخلايا - ليست خلية ولا تتكاثر وحدها'],
             en:['Light green: shell, orange: genetic material','Spikes are cell-entry keys - not a cell, cannot multiply alone'] } };
};

MODELS.brain = function(){
  var g = new THREE.Group();
  var hL = sph(0.62, 0xf9a8d4, -0.4, 0.5, 0); hL.scale.set(1, 0.9, 1.25);
  g.add(L(hL, 'النصف الأيسر - اللغة والمنطق','Left hemisphere - language and logic'));
  var hR = sph(0.62, 0xf472b6, 0.4, 0.5, 0); hR.scale.set(1, 0.9, 1.25);
  g.add(L(hR, 'النصف الأيمن - الإبداع والخيال','Right hemisphere - creativity'));
  var cer = sph(0.35, 0xc084fc, 0, -0.25, -0.55); cer.scale.set(1.3, 0.7, 0.8);
  g.add(L(cer, 'المخيخ - التوازن والحركة','Cerebellum - balance and movement'));
  g.add(L(cyl(0.14, 0.9, 0xfde68a, 0,-0.45,-0.3, 0,-1.3,-0.2), 'جذع الدماغ - وظائف الحياة','Brainstem - vital functions'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.00035; },
    legend:{ ar:['الوردي: نصفي الدماغ الكبير','البنفسجي: المخيخ، الأصفر: جذع الدماغ','86 مليار خلية عصبية داخل هذا الحجم الصغير'],
             en:['Pink: the two hemispheres','Purple: cerebellum, yellow: brainstem','86 billion neurons inside this small size'] } };
};

MODELS.senses = function(){
  var g = new THREE.Group();
  var eye = sph(0.7, 0xf8fafc, 0, 0, 0, {roughness:0.35});
  g.add(L(eye, 'مقلة العين','Eyeball'));
  var lens = sph(0.22, 0x7dd3fc, 0, 0, 0.55, {transparent:true, opacity:0.85});
  g.add(L(lens, 'العدسة - تركز الضوء','Lens - focuses light'));
  var iris = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.06, 8, 30), new THREE.MeshStandardMaterial({color:0x0d9488}));
  iris.position.set(0, 0, 0.62);
  g.add(L(iris, 'القزحية - تتحكم في فتحة الضوء','Iris - controls the light opening'));
  g.add(L(cyl(0.16, 1.1, 0xf59e0b, 0,0,-0.6, 0,0,-1.7), 'العصب البصري - كابل الصورة','Optic nerve - the image cable'));
  return { group:g, animate:function(t){ g.rotation.y = Math.sin(t*0.0005)*0.5; },
    legend:{ ar:['الضوء يدخل من القزحية والعدسة إلى الشبكية في الخلف','العصب البصري ينقل الإشارة للدماغ ليبني الصورة'],
             en:['Light enters through iris and lens to the retina at the back','The optic nerve carries the signal to the brain to build the image'] } };
};

MODELS.endocrine = function(){
  var g = new THREE.Group();
  var glands = [
    [0, 1.6, 0, 0xf472b6, 'النخامية - قائد الأوركسترا','Pituitary - orchestra conductor'],
    [0, 1.0, 0.1, 0xfbbf24, 'الدرقية - سرعة الحرق','Thyroid - burn speed'],
    [-0.7, 0.3, 0, 0x60a5fa, 'الكظرية - الأدرينالين','Adrenal - adrenaline'],
    [0.7, 0.3, 0, 0x60a5fa, 'الكظرية - الأدرينالين','Adrenal - adrenaline'],
    [0, -0.4, 0, 0xa3e635, 'البنكرياس - الإنسولين','Pancreas - insulin']
  ];
  glands.forEach(function(gl){ g.add(L(sph(0.2, gl[3], gl[0], gl[1], gl[2]), gl[4], gl[5])); });
  var body = cyl(0.5, 2.4, 0xede9fe, 0,0.3,0, 0,0.3,0);
  body.material = new THREE.MeshStandardMaterial({color:0xc7d2fe, transparent:true, opacity:0.15});
  g.add(L(body, 'الدم يحمل الرسائل لكل الجسم','Blood carries messages everywhere'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.00035; },
    legend:{ ar:['الوردي: النخامية، الأصفر: الدرقية','الأزرق: الكظريتان، الأخضر: البنكرياس','الرسائل تسري في الدم وتصل كل خلية'],
             en:['Pink: pituitary, yellow: thyroid','Blue: adrenals, green: pancreas','Messages ride the blood to every cell'] } };
};

MODELS.pollination = function(){
  var g = new THREE.Group();
  for(var i=0;i<6;i++){
    var a = i/6*Math.PI*2;
    var petal = sph(0.32, 0xf472b6, Math.cos(a)*0.55, 0, Math.sin(a)*0.55);
    petal.scale.set(1, 0.4, 1);
    g.add(L(petal, 'البتلات - إعلانات ملونة','Petals - colorful ads'));
  }
  g.add(L(sph(0.2, 0xfbbf24, 0, 0.15, 0), 'الميسم - الجزء الأنثوي','Stigma - the female part'));
  for(var j=0;j<5;j++){
    var a2 = j/5*Math.PI*2;
    g.add(L(cyl(0.03, 0.35, 0xfde68a, Math.cos(a2)*0.3,0,Math.sin(a2)*0.3, Math.cos(a2)*0.3,0.4,Math.sin(a2)*0.3), 'المتك - حبوب اللقاح','Anther - pollen grains'));
  }
  g.add(L(cyl(0.06, 1.4, 0x22c55e, 0,-0.1,0, 0,-1.5,0), 'الساق','Stem'));
  var bee = sph(0.16, 0xfbbf24, 1.1, 0.6, 0);
  g.add(L(bee, 'النحلة - ساعية البريد','The bee - the courier'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; bee.position.x = Math.cos(t*0.0015)*1.1; bee.position.z = Math.sin(t*0.0015)*1.1; bee.position.y = 0.6+Math.sin(t*0.004)*0.15; },
    legend:{ ar:['شاهد النحلة تدور حول الزهرة','تلتصق حبوب اللقاح بها فتلقح الزهرة التالية'],
             en:['Watch the bee circle the flower','Pollen sticks to it and pollinates the next flower'] } };
};

MODELS.skin = function(){
  var g = new THREE.Group();
  function layer(y, h, color, ar, en){
    var b = new THREE.Mesh(new THREE.BoxGeometry(2.4, h, 1.3), new THREE.MeshStandardMaterial({color:color, roughness:0.6}));
    b.position.set(0, y, 0);
    g.add(L(b, ar, en));
  }
  layer(0.75, 0.35, 0xfdba9a, 'البشرة - الدرع المتجدد','Epidermis - the renewing shield');
  layer(0.15, 0.85, 0xf59e0b, 'الأدمة - أعصاب وغدد وبصمات','Dermis - nerves, glands, fingerprints');
  layer(-0.55, 0.55, 0xfde68a, 'الطبقة الدهنية - عازل وطاقة','Fat layer - insulation and energy');
  var coil = new THREE.Mesh(new THREE.TorusKnotGeometry(0.18, 0.05, 40, 6), new THREE.MeshStandardMaterial({color:0x60a5fa, roughness:0.5}));
  coil.position.set(0.6, 0.1, 0.2);
  g.add(L(coil, 'غدة عرقية - مكيف الجسم','Sweat gland - body cooler'));
  g.add(L(cyl(0.03, 0.7, 0x78350f, -0.5,1.0,0, -0.55,1.7,0), 'شعرة تنمو من بصيلة في الأدمة','Hair growing from a dermis follicle'));
  return { group:g, animate:function(t){ g.rotation.y = Math.sin(t*0.0004)*0.45; },
    legend:{ ar:['ثلاث طبقات: بشرة فوق، أدمة في المنتصف، دهون أسفل','البشرة تتجدد كل شهر تقريباً','الأزرق: غدة عرقية، البني: شعرة'],
             en:['Three layers: epidermis top, dermis middle, fat below','The epidermis renews about every month','Blue: sweat gland, brown: a hair'] } };
};

MODELS.circulation = function(){
  var g = new THREE.Group();
  var heartM = sph(0.5, 0xdc2626, 0, 0, 0); heartM.scale.set(1, 1.15, 0.9);
  g.add(L(heartM, 'القلب - المضخة','Heart - the pump'));
  var loop = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.09, 10, 48), new THREE.MeshStandardMaterial({color:0x93c5fd, roughness:0.5}));
  loop.rotation.x = Math.PI/2.6;
  g.add(L(loop, 'شبكة الأوعية - 100 ألف كم','Vessel network - 100,000 km'));
  var dots = [];
  for(var i=0;i<8;i++){
    var d = sph(0.11, i%2 ? 0xef4444 : 0x60a5fa, 0,0,0);
    L(d, i%2 ? 'دم مؤكسج يغادر القلب' : 'دم يعود ليتزود بالأكسجين', i%2 ? 'Oxygenated blood leaving' : 'Blood returning for oxygen');
    g.add(d); dots.push(d);
  }
  return { group:g, animate:function(t){ g.rotation.y = t*0.00025; heartM.scale.set(1+Math.sin(t*0.006)*0.06, 1.15+Math.sin(t*0.006)*0.06, 0.9); dots.forEach(function(d,i){ var a=t*0.0012 + i*Math.PI/4; d.position.set(Math.cos(a)*1.5, Math.sin(a)*1.5*Math.sin(Math.PI/2.6), Math.sin(a)*1.5*Math.cos(Math.PI/2.6)); }); },
    legend:{ ar:['الأحمر: دم مؤكسج، الأزرق: دم عائد','شاهد الدم يدور حول القلب - دورة لا تتوقف'],
             en:['Red: oxygenated blood, blue: returning blood','Watch blood circle the heart - a cycle that never stops'] } };
};

MODELS.microbiome = function(){
  var g = new THREE.Group();
  var tube = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.35, 12, 40), new THREE.MeshStandardMaterial({color:0xfdba9a, roughness:0.6}));
  g.add(L(tube, 'الأمعاء - بيت الميكروبيوم','The gut - microbiome home'));
  var colors = [0x22c55e, 0x60a5fa, 0xf59e0b, 0xc084fc, 0xf472b6];
  var bugs = [];
  for(var i=0;i<14;i++){
    var b = sph(0.12, colors[i%5], 0,0,0);
    L(b, 'بكتيريا نافعة تعمل لصالحك','Helpful bacteria working for you');
    g.add(b); bugs.push(b);
  }
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; bugs.forEach(function(b,i){ var a=t*0.0008+i*0.45; b.position.set(Math.cos(a)*1.1, Math.sin(a*1.3)*0.3, Math.sin(a)*1.1); }); },
    legend:{ ar:['38 تريليون بكتيريا شريكة تعيش في أمعائك','تهضم وتصنع فيتامينات وتدرب مناعتك'],
             en:['38 trillion partner bacteria live in your gut','They digest, make vitamins and train your immunity'] } };
};

MODELS.fungi = function(){
  var g = new THREE.Group();
  g.add(L(cyl(0.22, 1.1, 0xfef3c7, 0,-0.3,0, 0,0.8,0), 'ساق الفطر','Mushroom stem'));
  var cap = new THREE.Mesh(new THREE.SphereGeometry(0.85, 24, 12, 0, Math.PI*2, 0, Math.PI/2), new THREE.MeshStandardMaterial({color:0xdc2626, side:THREE.DoubleSide, roughness:0.55}));
  cap.position.set(0, 0.8, 0);
  g.add(L(cap, 'قبعة الفطر - الجزء المرئي فقط','The cap - only the visible part'));
  for(var i=0;i<7;i++){
    var a = i/7*Math.PI*2;
    g.add(L(cyl(0.03, 1.6, 0xfde68a, Math.cos(a)*0.3,-0.8,Math.sin(a)*0.3, Math.cos(a)*1.3,-1.6,Math.sin(a)*1.3), 'خيوط الميسيليوم تحت الأرض','Mycelium threads underground'));
  }
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; },
    legend:{ ar:['الفطر المرئي زهرة مؤقتة فقط','الجسم الحقيقي: شبكة ميسيليوم قد تمتد كيلومترات تحتك'],
             en:['The visible mushroom is a temporary flower','The real body: a mycelium web that may run kilometers below you'] } };
};

MODELS.plants = function(){
  var g = new THREE.Group();
  g.add(L(cyl(0.08, 1.6, 0x22c55e, 0,-0.2,0, 0,1.4,0), 'الساق - عمود النقل','Stem - transport column'));
  [[-1,0.9],[1,1.2]].forEach(function(s){
    var leaf = sph(0.35, 0x16a34a, s[0]*0.5, s[1], 0); leaf.scale.set(1.2, 0.35, 0.7);
    g.add(L(leaf, 'الورقة - مطبخ الضوء','Leaf - the light kitchen'));
  });
  [[-0.4],[0],[0.4]].forEach(function(r){
    g.add(L(cyl(0.05, 1.1, 0x92400e, 0,-0.2,0, r[0],-1.5,0.2), 'الجذور - تمتص الماء والأملاح','Roots - absorb water and minerals'));
  });
  var drop = sph(0.09, 0x60a5fa, 0, -1.3, 0.2);
  g.add(L(drop, 'قطرة ماء تصعد بالتبخر','A water droplet climbing by evaporation'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; drop.position.y = -1.3 + ((t*0.0004)%1)*2.4; },
    legend:{ ar:['الأخضر: ساق وأوراق، البني: جذور','شاهد قطرة الماء تصعد من الجذر إلى الورقة بلا مضخة'],
             en:['Green: stem and leaves, brown: roots','Watch the water droplet climb root to leaf with no pump'] } };
};

MODELS.protein = function(){
  var g = new THREE.Group();
  var ribo = sph(0.45, 0xc084fc, -1.0, -0.2, 0);
  g.add(L(ribo, 'الريبوسوم - ماكينة التصنيع','Ribosome - the machine'));
  var mrna = cyl(0.05, 1.8, 0x60a5fa, -1.0,-0.35,0, 0.8,-0.35,0);
  g.add(L(mrna, 'رسالة mRNA - الوصفة المنقولة','mRNA - the copied recipe'));
  var beads = [];
  var colors = [0xf59e0b, 0xef4444, 0x22c55e, 0x60a5fa, 0xf472b6, 0xa3e635];
  for(var i=0;i<6;i++){
    var b = sph(0.16, colors[i], 0,0,0);
    L(b, 'حمض أميني في السلسلة النامية','Amino acid in the growing chain');
    g.add(b); beads.push(b);
  }
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; beads.forEach(function(b,i){ b.position.set(-0.7+i*0.36, -0.1+Math.sin(i*0.9)*0.3+Math.sin(t*0.002+i)*0.06, Math.cos(i*0.9)*0.3); }); },
    legend:{ ar:['البنفسجي: الريبوسوم، الأزرق: رسالة mRNA','الخرز الملون: أحماض أمينية تتسلسل ثم تطوى بروتيناً'],
             en:['Purple: ribosome, blue: mRNA message','Colored beads: amino acids chaining then folding into a protein'] } };
};

MODELS.neurons = function(){
  var g = new THREE.Group();
  g.add(L(sph(0.4, 0xf9a8d4, -1.4, 0, 0), 'جسم الخلية - مركز القرار','Cell body - decision center'));
  for(var i=0;i<5;i++){
    var a = -0.8 + i*0.4;
    g.add(L(cyl(0.03, 0.8, 0xf472b6, -1.4,0,0, -2.2+Math.cos(a)*0.3, Math.sin(a)*0.9, Math.cos(a)*0.4), 'تغصنات تستقبل الإشارات','Dendrites receive signals'));
  }
  for(var s=0;s<4;s++){
    var x = -0.7 + s*0.55;
    g.add(L(cyl(0.04, 0.5, 0xfde68a, x,0,0, x+0.5,0,0), 'المحور - كابل الإشارة','Axon - the signal cable'));
    var my = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.3, 12), new THREE.MeshStandardMaterial({color:0x60a5fa, roughness:0.5}));
    my.rotation.z = Math.PI/2; my.position.set(x+0.25, 0, 0);
    g.add(L(my, 'غلاف الميالين - عازل مسرِّع','Myelin sheath - speeding insulator'));
  }
  g.add(L(sph(0.1, 0xf59e0b, 1.75, 0.1, 0), 'ناقل كيميائي يعبر المشبك','Chemical messenger crossing the synapse'));
  g.add(L(sph(0.35, 0xc084fc, 2.3, 0, 0), 'الخلية التالية','The next neuron'));
  return { group:g, animate:function(t){ g.rotation.y = Math.sin(t*0.0004)*0.4; },
    legend:{ ar:['الوردي: جسم الخلية والتغصنات','الأزرق: أغلفة ميالين تسرّع الشرارة','البرتقالي: ناقل كيميائي في فجوة المشبك'],
             en:['Pink: cell body and dendrites','Blue: myelin sheaths speeding the spark','Orange: chemical messenger in the synapse gap'] } };
};

MODELS.sleep = function(){
  var g = new THREE.Group();
  function stage(x, h, color, ar, en){
    var b = new THREE.Mesh(new THREE.BoxGeometry(0.75, h, 0.75), new THREE.MeshStandardMaterial({color:color, roughness:0.55}));
    b.position.set(x, h/2-0.8, 0);
    g.add(L(b, ar, en));
  }
  stage(-1.35, 0.5, 0xa5b4fc, 'نوم خفيف - الدخول','Light sleep - drifting in');
  stage(-0.45, 0.9, 0x818cf8, 'نوم أعمق','Deeper sleep');
  stage(0.45, 1.4, 0x4f46e5, 'النوم العميق - إصلاح وهرمون نمو','Deep sleep - repair and growth hormone');
  stage(1.35, 0.8, 0xf59e0b, 'نوم REM - أحلام وترتيب ذكريات','REM - dreams and memory filing');
  var moon = sph(0.3, 0xfef9c3, 1.35, 1.5, 0, {emissive:0x666633});
  g.add(L(moon, 'الدورة تتكرر 4-5 مرات كل ليلة','The cycle repeats 4-5 times nightly'));
  return { group:g, animate:function(t){ g.rotation.y = Math.sin(t*0.0004)*0.4; },
    legend:{ ar:['مراحل النوم الأربع في دورة واحدة','الأعمق للإصلاح، والبرتقالي REM للأحلام والذاكرة'],
             en:['The four sleep stages in one cycle','Deepest for repair, orange REM for dreams and memory'] } };
};

MODELS.allergy = function(){
  var g = new THREE.Group();
  var pollen = sph(0.45, 0xfde68a, -0.9, 0.2, 0);
  g.add(L(pollen, 'حبة لقاح - غازٍ بريء','Pollen grain - an innocent'));
  for(var i=0;i<10;i++){
    var a = i/10*Math.PI*2;
    g.add(L(sph(0.07, 0xf59e0b, -0.9+Math.cos(a)*0.5, 0.2+Math.sin(a*2)*0.2, Math.sin(a)*0.5), 'نتوءات حبة اللقاح','Pollen spikes'));
  }
  [[0.6,0.8],[0.9,-0.2],[0.5,-0.7]].forEach(function(p){
    var ab = new THREE.Group();
    ab.add(cyl(0.04, 0.35, 0xef4444, 0,0,0, 0,-0.35,0));
    ab.add(cyl(0.04, 0.28, 0xef4444, 0,0,0, -0.13,0.24,0));
    ab.add(cyl(0.04, 0.28, 0xef4444, 0,0,0, 0.13,0.24,0));
    ab.position.set(p[0], p[1], 0);
    ab.children.forEach(function(m){ L(m, 'أجسام مضادة تهاجم خطأ','Antibodies attacking by mistake'); });
    g.add(ab);
  });
  g.add(L(sph(0.16, 0xdc2626, 1.5, 0.2, 0), 'جزيء هيستامين - صوت الإنذار','Histamine - the alarm sound'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.00035; pollen.rotation.y = t*0.001; },
    legend:{ ar:['الأصفر: لقاح بريء، الأحمر: أجسام مضادة تهاجمه خطأ','الهيستامين الناتج هو سبب العطاس والحكة'],
             en:['Yellow: innocent pollen, red: antibodies attacking by mistake','The released histamine causes sneezing and itching'] } };
};

MODELS.teeth = function(){
  var g = new THREE.Group();
  var crown = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.8, 0.8, 2, 2, 2), new THREE.MeshStandardMaterial({color:0xffffff, roughness:0.25}));
  crown.position.set(0, 0.7, 0);
  g.add(L(crown, 'التاج - مغطى بالمينا الأقسى في الجسم','Crown - coated in enamel, the hardest in the body'));
  var dentin = sph(0.35, 0xfde68a, 0, 0.35, 0); dentin.scale.set(1.1, 0.8, 1);
  g.add(L(dentin, 'العاج تحت المينا','Dentin under the enamel'));
  g.add(L(sph(0.18, 0xef4444, 0, 0.35, 0.3), 'اللب الحي - أعصاب وأوعية','Living pulp - nerves and vessels'));
  g.add(L(cyl(0.14, 0.9, 0xfef3c7, -0.25,0.3,0, -0.4,-0.7,0), 'الجذر - يثبت السن في العظم','Root - anchors the tooth in bone'));
  g.add(L(cyl(0.14, 0.9, 0xfef3c7, 0.25,0.3,0, 0.4,-0.7,0), 'الجذر - يثبت السن في العظم','Root - anchors the tooth in bone'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; },
    legend:{ ar:['الأبيض: تاج المينا، الأصفر: العاج','الأحمر: اللب الحي حيث يبدأ ألم التسوس'],
             en:['White: enamel crown, yellow: dentin','Red: the living pulp where decay pain starts'] } };
};

MODELS.homeostasis = function(){
  var g = new THREE.Group();
  var tube2 = cyl(0.14, 1.8, 0xf8fafc, 0,-0.6,0, 0,1.2,0);
  g.add(L(tube2, 'مقياس الحرارة الداخلي','Internal thermometer'));
  var merc = cyl(0.08, 1.1, 0xef4444, 0,-0.6,0, 0,0.5,0);
  g.add(L(merc, '37 درجة - نقطة الاتزان','37 degrees - the balance point'));
  g.add(L(sph(0.25, 0xef4444, 0, -0.75, 0), 'مستودع القياس','The bulb'));
  var sweat = sph(0.1, 0x60a5fa, -0.7, 0.3, 0);
  g.add(L(sweat, 'تعرّق إن ارتفعت','Sweat if it rises'));
  var shiver = sph(0.1, 0xa5b4fc, 0.7, -0.1, 0);
  g.add(L(shiver, 'ارتعاش إن انخفضت','Shiver if it falls'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; sweat.position.y = 0.3+Math.sin(t*0.003)*0.08; shiver.position.x = 0.7+Math.sin(t*0.02)*0.03; },
    legend:{ ar:['الثرموستات الداخلي يثبت حرارتك قرب 37','ارتفاعاً: تعرق - انخفاضاً: ارتعاش'],
             en:['Your inner thermostat holds you near 37','Too high: sweat - too low: shiver'] } };
};

MODELS.recursion = function(){
  var g = new THREE.Group();
  var boxes = [];
  for(var i=0;i<5;i++){
    var s = 2.0 - i*0.38;
    var b = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), new THREE.MeshStandardMaterial({color:0x7c3aed, transparent:true, opacity:0.25+i*0.14, roughness:0.4}));
    g.add(L(b, i===4 ? 'أصغر نسخة - حالة التوقف' : 'الدالة تنادي نفسها بنسخة أصغر', i===4 ? 'Smallest copy - the stop case' : 'The function calls a smaller itself'));
    boxes.push(b);
  }
  return { group:g, animate:function(t){ g.rotation.y = t*0.0004; g.rotation.x = Math.sin(t*0.0005)*0.3; },
    legend:{ ar:['مكعبات داخل مكعبات: كل نداء نسخة أصغر من نفس المشكلة','في القلب حالة التوقف التي تنهي السلسلة'],
             en:['Boxes in boxes: each call is a smaller copy of the same problem','At the heart, the base case that ends the chain'] } };
};

MODELS.gravity = function(){
  var g = new THREE.Group();
  var earth = sph(0.9, 0x2563eb, 0, -0.3, 0);
  g.add(L(earth, 'الأرض - جاذبيتها تشد كل شيء','Earth - its gravity pulls everything'));
  var moon = sph(0.22, 0xd1d5db, 1.9, 0.4, 0);
  g.add(L(moon, 'القمر - يسقط نحونا باستمرار لكنه لا يصل','The Moon - always falling toward us, never arriving'));
  for(var i=0;i<3;i++){
    var ring = new THREE.Mesh(new THREE.TorusGeometry(1.3+i*0.35, 0.015, 6, 60), new THREE.MeshStandardMaterial({color:0x93c5fd, transparent:true, opacity:0.4}));
    ring.rotation.x = Math.PI/2;
    ring.position.y = -0.3;
    g.add(L(ring, 'مجال الجاذبية يمتد في كل الاتجاهات','Gravity field reaches every direction'));
  }
  return { group:g, animate:function(t){ var a=t*0.0006; moon.position.set(Math.cos(a)*1.9, 0.4+Math.sin(a*0.7)*0.2, Math.sin(a)*1.9); g.rotation.y = t*0.00015; },
    legend:{ ar:['الأزرق: الأرض، الرمادي: القمر في مداره','الجاذبية تشد الأجسام لبعضها - كلما زادت الكتلة زاد الشد'],
             en:['Blue: Earth, gray: the Moon in orbit','Gravity pulls masses together - more mass, more pull'] } };
};

MODELS.neural = function(){
  var g = new THREE.Group();
  var layers = [[-1.4,3],[0,4],[1.4,2]];
  var nodes = [];
  layers.forEach(function(L2, li){
    for(var i=0;i<L2[1];i++){
      var y = (i-(L2[1]-1)/2)*0.75;
      var n = sph(0.16, li===0?0x22c55e:(li===1?0x60a5fa:0xf472b6), L2[0], y, 0);
      L(n, li===0?'خلية إدخال - تستقبل البيانات':(li===1?'خلية خفية - تستخرج الأنماط':'خلية إخراج - تعلن القرار'), li===0?'Input cell - receives data':(li===1?'Hidden cell - finds patterns':'Output cell - announces the decision'));
      g.add(n); nodes.push({mesh:n, li:li, y:y, x:L2[0]});
    }
  });
  nodes.forEach(function(a){
    nodes.forEach(function(b){
      if(b.li===a.li+1){
        var line = cyl(0.012, 1, 0x64748b, a.x,a.y,0, b.x,b.y,0);
        line.scale.y = Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2));
        L(line, 'وصلة بوزن يتعلمه النموذج','A connection with a learned weight');
        g.add(line);
      }
    });
  });
  return { group:g, animate:function(t){ g.rotation.y = Math.sin(t*0.0004)*0.5; },
    legend:{ ar:['الأخضر: مدخلات، الأزرق: طبقات خفية، الوردي: مخرجات','كل خط وصلة لها وزن يتغير بالتعلم - هكذا تتعلم الشبكة'],
             en:['Green: inputs, blue: hidden layers, pink: outputs','Every line is a weighted connection that changes with learning'] } };
};

MODELS.bacteria = function(){
  var g = new THREE.Group();
  var cellB = new THREE.Mesh(new THREE.CapsuleGeometry(0.45, 1.1, 8, 16), new THREE.MeshStandardMaterial({color:0x84cc16, roughness:0.55}));
  cellB.rotation.z = Math.PI/2.3;
  g.add(L(cellB, 'جدار الخلية البكتيرية','Bacterial cell wall'));
  var dnaLoop = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.04, 8, 24), new THREE.MeshStandardMaterial({color:0xf59e0b}));
  g.add(L(dnaLoop, 'حلقة DNA عارية بلا نواة','Bare DNA loop, no nucleus'));
  for(var i=0;i<8;i++){
    var a = i/8*Math.PI*2;
    g.add(L(cyl(0.02, 0.3, 0x4d7c0f, Math.cos(a)*0.45*Math.cos(0.4), Math.sin(a)*0.45*0.6+0.1, Math.sin(a)*0.45), 'شعيرات التصاق','Attachment pili'));
  }
  var tail = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.035, 6, 30, Math.PI*1.4), new THREE.MeshStandardMaterial({color:0xfde68a}));
  tail.position.set(-1.0, -0.25, 0); tail.rotation.z = 0.7;
  g.add(L(tail, 'السوط - مروحة الدفع','Flagellum - the propeller'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0004; },
    legend:{ ar:['بكتيريا خلية واحدة بلا نواة - DNA حر في حلقة','السوط يدور كالمروحة لتسبح، والشعيرات للالتصاق'],
             en:['A bacterium is one cell with no nucleus - free DNA in a loop','The flagellum spins like a propeller; pili for sticking'] } };
};

MODELS.waves = function(){
  var g = new THREE.Group();
  var pts = [];
  for(var i=0;i<24;i++){
    var p = sph(0.1, i<8?0x60a5fa:(i<16?0x22c55e:0xf59e0b), 0,0,0);
    L(p, 'جزيء يهتز في مكانه - الموجة تنقل الطاقة لا المادة','A particle vibrating in place - waves carry energy, not matter');
    g.add(p); pts.push(p);
  }
  g.add(L(sph(0.18, 0xef4444, -2.6, 0, 0), 'مصدر الاهتزاز','Vibration source'));
  return { group:g, animate:function(t){ pts.forEach(function(p,i){ var x=-2.2+i*0.19; p.position.set(x, Math.sin(t*0.004 - i*0.55)*0.8, 0); }); },
    legend:{ ar:['شاهد الجزيئات تهتز صعوداً وهبوطاً ولا تنتقل','القمة والقاع والطول الموجي - صوتك وضوءك موجات'],
             en:['Watch particles bob up and down without traveling','Crest, trough, wavelength - your voice and light are waves'] } };
};

MODELS.triangles = function(){
  var g = new THREE.Group();
  function tri(pts2, color, ar, en){
    var shape = new THREE.Shape();
    shape.moveTo(pts2[0][0], pts2[0][1]);
    shape.lineTo(pts2[1][0], pts2[1][1]);
    shape.lineTo(pts2[2][0], pts2[2][1]);
    shape.lineTo(pts2[0][0], pts2[0][1]);
    var geo = new THREE.ShapeGeometry(shape);
    var m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({color:color, side:THREE.DoubleSide, transparent:true, opacity:0.85, roughness:0.5}));
    g.add(L(m, ar, en));
  }
  tri([[-1.9,-0.8],[-0.9,-0.8],[-1.4,0.35]], 0x60a5fa, 'متساوي الأضلاع - كل زواياه 60','Equilateral - all angles 60');
  tri([[-0.2,-0.8],[1.0,-0.8],[1.0,0.3]], 0xf472b6, 'قائم الزاوية - فيه زاوية 90','Right-angled - has a 90 angle');
  tri([[1.5,-0.8],[2.5,-0.8],[1.8,0.45]], 0xfbbf24, 'متساوي الساقين - ضلعان متساويان','Isosceles - two equal sides');
  g.position.x = -0.3;
  return { group:g, animate:function(t){ g.rotation.y = Math.sin(t*0.0005)*0.45; },
    legend:{ ar:['ثلاثة أنواع أساسية للمثلثات','مهما اختلف شكل المثلث: مجموع زواياه دائماً 180 درجة'],
             en:['Three basic triangle types','Whatever its shape: the angles always sum to 180 degrees'] } };
};

MODELS.electricity = function(){
  var g = new THREE.Group();
  var batt = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.7, 16), new THREE.MeshStandardMaterial({color:0x22c55e, roughness:0.5}));
  batt.position.set(-1.6, 0, 0);
  g.add(L(batt, 'البطارية - مصدر الدفع','Battery - the push source'));
  var loop = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.05, 8, 40), new THREE.MeshStandardMaterial({color:0xfbbf24, roughness:0.4}));
  g.add(L(loop, 'السلك - طريق الدائرة المغلقة','Wire - the closed circuit path'));
  var bulb = sph(0.28, 0xfef9c3, 1.6, 0, 0, {emissive:0x999944});
  g.add(L(bulb, 'المصباح - يتحول التيار لضوء','Bulb - current becomes light'));
  var dots = [];
  for(var i=0;i<10;i++){
    var d = sph(0.07, 0x60a5fa, 0,0,0);
    L(d, 'إلكترون يجري في السلك','An electron flowing in the wire');
    g.add(d); dots.push(d);
  }
  return { group:g, animate:function(t){ g.rotation.y = t*0.0002; dots.forEach(function(d,i){ var a=t*0.002+i*Math.PI/5; d.position.set(Math.cos(a)*1.1, Math.sin(a)*1.1, 0); }); bulb.material.emissiveIntensity = 0.8+Math.sin(t*0.01)*0.2; },
    legend:{ ar:['الأخضر: البطارية، الأصفر: السلك، الأزرق: إلكترونيات جارية','أغلق الدائرة يضئ المصباح - افتحها يتوقف كل شيء'],
             en:['Green: battery, yellow: wire, blue: flowing electrons','Close the circuit and the bulb lights - open it and all stops'] } };
};

MODELS.magnetism = function(){
  var g = new THREE.Group();
  var north = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.3), new THREE.MeshStandardMaterial({color:0xef4444, roughness:0.5}));
  north.position.set(0.25, 0, 0);
  g.add(L(north, 'القطب الشمالي','North pole'));
  var south = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.3), new THREE.MeshStandardMaterial({color:0x2563eb, roughness:0.5}));
  south.position.set(-0.25, 0, 0);
  g.add(L(south, 'القطب الجنوبي','South pole'));
  for(var i=0;i<4;i++){
    var r = 0.7+i*0.35;
    var loop = new THREE.Mesh(new THREE.TorusGeometry(r, 0.012, 6, 50), new THREE.MeshStandardMaterial({color:0x93c5fd, transparent:true, opacity:0.55}));
    loop.rotation.y = Math.PI/2;
    g.add(L(loop, 'خطوط المجال تخرج من الشمال وتدخل الجنوب','Field lines leave north, enter south'));
  }
  var iron = sph(0.14, 0x9ca3af, 1.6, 0.5, 0);
  g.add(L(iron, 'قطعة حديد تنجذب للمجال','Iron piece pulled by the field'));
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; iron.position.x = 1.6 - (Math.sin(t*0.001)*0.5+0.5)*0.7; },
    legend:{ ar:['الأحمر: شمالي، الأزرق: جنوبي','المتشابه يتنافر والمختلف يتجاذب - جرّب بيدك'],
             en:['Red: north, blue: south','Like poles repel, opposites attract - feel it yourself'] } };
};

MODELS.optics = function(){
  var g = new THREE.Group();
  var prism = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 0.7, 3), new THREE.MeshStandardMaterial({color:0xe0f2fe, transparent:true, opacity:0.5, roughness:0.15}));
  prism.rotation.x = Math.PI/2;
  g.add(L(prism, 'المنشور الزجاجي','Glass prism'));
  var beamIn = cyl(0.045, 1.4, 0xffffff, -2.2,0.1,0, -0.6,0.05,0);
  g.add(L(beamIn, 'شعاع أبيض داخل - خليط كل الألوان','White beam in - a mix of all colors'));
  var cols = [0xef4444, 0xf59e0b, 0xfde047, 0x22c55e, 0x60a5fa, 0xa78bfa];
  cols.forEach(function(c, i){
    g.add(L(cyl(0.022, 1.5, c, 0.45,-0.05+i*0.035,0, 1.9,-0.15+i*0.09,0), 'لون منكسر بزاويته الخاصة','A color bent at its own angle'));
  });
  return { group:g, animate:function(t){ g.rotation.y = Math.sin(t*0.0004)*0.35; },
    legend:{ ar:['الأبيض يدخل... قوس ألوان يخرج','كل لون ينكسر بزاوية مختلفة قليلاً - هكذا يولد قوس المطر'],
             en:['White goes in... a rainbow comes out','Each color bends at a slightly different angle - rainbows are born this way'] } };
};

MODELS.motion = function(){
  var g = new THREE.Group();
  var body = cyl(0.28, 1.3, 0xf8fafc, 0,0.9,0, 0,0.9,0);
  body.position.set(0, 0.3, 0); body.rotation.set(0,0,0);
  g.add(L(body, 'جسم الصاروخ','Rocket body'));
  var nose = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.5, 16), new THREE.MeshStandardMaterial({color:0xef4444}));
  nose.position.set(0, 1.2, 0);
  g.add(L(nose, 'المقدمة','Nose cone'));
  var flame = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.7, 12), new THREE.MeshStandardMaterial({color:0xf59e0b, emissive:0xcc5500, transparent:true, opacity:0.9}));
  flame.rotation.x = Math.PI; flame.position.set(0, -0.75, 0);
  g.add(L(flame, 'غازات مقذوفة للخلف - الفعل','Exhaust gases thrown back - the action'));
  var arr = new THREE.Group();
  arr.add(cyl(0.03, 0.9, 0x22c55e, 0.6,0,0, 0.6,0.9,0));
  var head = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.2, 10), new THREE.MeshStandardMaterial({color:0x22c55e}));
  head.position.set(0.6, 1.0, 0);
  arr.add(head);
  arr.children.forEach(function(m){ L(m, 'رد الفعل: دفع للأعلى','Reaction: pushed upward'); });
  g.add(arr);
  return { group:g, animate:function(t){ g.rotation.y = t*0.0003; flame.scale.y = 1+Math.sin(t*0.02)*0.25; g.position.y = Math.sin(t*0.0015)*0.3; },
    legend:{ ar:['لكل فعل رد فعل مساوٍ ومضاد','الغاز للخلف، الصاروخ للأمام - حتى في فراغ الفضاء'],
             en:['Every action has an equal opposite reaction','Gas backward, rocket forward - even in empty space'] } };
};

MODELS.energy = function(){
  var g = new THREE.Group();
  g.add(L(cyl(0.05, 2.4, 0x64748b, -1.2,1.6,0, 1.2,1.6,0), 'نقطة التعليق','Suspension bar'));
  var arm = cyl(0.035, 1.8, 0xfde68a, 0,1.6,0, 0.9,-0.1,0);
  var bob = sph(0.3, 0x7c3aed, 0.9, -0.1, 0);
  L(arm, 'خيط البندول','Pendulum string');
  L(bob, 'الثقل - طاقة وضع في الأعلى، حركة في الأسفل','The bob - potential up high, kinetic down low');
  g.add(arm); g.add(bob);
  return { group:g, animate:function(t){ var a = Math.sin(t*0.0022)*0.8; var x = Math.sin(a)*1.8, y = 1.6-Math.cos(a)*1.8; bob.position.set(x, y, 0); arm.position.set(x/2, (1.6+y)/2, 0); arm.rotation.set(0,0,Math.atan2(x, 1.6-y)); },
    legend:{ ar:['شاهد الطاقة تتحول: وضع في الأعلى، حركة في الأسفل','لا تفنى الطاقة ولا تُخلق - فقط تتبدل'],
             en:['Watch energy convert: potential up top, kinetic at bottom','Energy is never lost or created - only changed'] } };
};

MODELS.sound = function(){
  var g = new THREE.Group();
  var spk = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.6, 20, 1, true), new THREE.MeshStandardMaterial({color:0x475569, side:THREE.DoubleSide}));
  spk.rotation.z = -Math.PI/2; spk.position.set(-1.5, 0, 0);
  g.add(L(spk, 'مخروط السماعة يهتز','Speaker cone vibrating'));
  var rings = [];
  for(var i=0;i<5;i++){
    var r = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.03, 8, 30), new THREE.MeshStandardMaterial({color:0x60a5fa, transparent:true, opacity:0.8}));
    r.rotation.y = Math.PI/2;
    L(r, 'موجة ضغط تسافر في الهواء','A pressure wave traveling the air');
    g.add(r); rings.push(r);
  }
  return { group:g, animate:function(t){ g.rotation.y = t*0.0002; spk.position.x = -1.5+Math.sin(t*0.03)*0.06; rings.forEach(function(r,i){ var p = ((t*0.001+i*0.2)%1); r.position.x = -1.2+p*3.2; r.scale.setScalar(1+p*2.2); r.material.opacity = 0.85*(1-p); }); },
    legend:{ ar:['السماعة تهتز فتضغط الهواء في موجات متتابعة','الموجة تصل أذنك فيهتز الغشاء - هكذا تسمع'],
             en:['The cone vibrates, squeezing air into successive waves','A wave reaches your ear and shakes the eardrum - that is hearing'] } };
};

MODELS.heat = function(){
  var g = new THREE.Group();
  function box(x, color, ar, en){
    var b = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1.3), new THREE.MeshStandardMaterial({color:color, transparent:true, opacity:0.12, roughness:0.3}));
    b.position.set(x, 0, 0);
    g.add(L(b, ar, en));
  }
  box(-1.0, 0xef4444, 'غاز ساخن - جزيئات سريعة','Hot gas - fast particles');
  box(1.0, 0x60a5fa, 'غاز بارد - جزيئات بطيئة','Cold gas - slow particles');
  var hot = [], cold = [];
  for(var i=0;i<8;i++){
    var h = sph(0.09, 0xfca5a5, 0,0,0); L(h,'جزيء ساخن سريع','Fast hot particle'); g.add(h); hot.push(h);
    var c = sph(0.09, 0xbfdbfe, 0,0,0); L(c,'جزيء بارد بطيء','Slow cold particle'); g.add(c); cold.push(c);
  }
  return { group:g, animate:function(t){ g.rotation.y = t*0.0002; hot.forEach(function(h,i){ h.position.set(-1.0+Math.sin(t*0.006+i*2.1)*0.45, Math.sin(t*0.008+i*1.3)*0.45, Math.cos(t*0.007+i*1.7)*0.45); }); cold.forEach(function(c,i){ c.position.set(1.0+Math.sin(t*0.0015+i*2.1)*0.4, Math.sin(t*0.0018+i*1.3)*0.4, Math.cos(t*0.0016+i*1.7)*0.4); }); },
    legend:{ ar:['الحرارة هي سرعة الجزيئات - قارن الصندوقين','درجة الحرارة تقيس متوسط هذه السرعة'],
             en:['Heat is particle speed - compare the two boxes','Temperature measures their average speed'] } };
};

MODELS.buoyancy = function(){
  var g = new THREE.Group();
  var water = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.4, 1.8), new THREE.MeshStandardMaterial({color:0x3b82f6, transparent:true, opacity:0.3, roughness:0.2}));
  water.position.set(0, -0.55, 0);
  g.add(L(water, 'الماء','Water'));
  var boat = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.35, 0.35, 16, 1, true), new THREE.MeshStandardMaterial({color:0xb45309, side:THREE.DoubleSide}));
  boat.position.set(-0.7, 0.12, 0);
  g.add(L(boat, 'جسم مجوف أخف من الماء - يطفو','Hollow body lighter than water - floats'));
  var block = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), new THREE.MeshStandardMaterial({color:0x64748b}));
  block.position.set(0.9, -1.0, 0);
  g.add(L(block, 'كتلة مصمتة أثقل - تغوص','Solid heavier block - sinks'));
  return { group:g, animate:function(t){ g.rotation.y = Math.sin(t*0.0004)*0.4; boat.position.y = 0.12+Math.sin(t*0.002)*0.06; boat.rotation.z = Math.sin(t*0.0016)*0.08; },
    legend:{ ar:['الكثافة هي الحكم: أخف من الماء يطفو','السفينة تطفو لأن جوفها يزيح ماءً كثيراً'],
             en:['Density rules: lighter than water floats','A ship floats because its hull displaces lots of water'] } };
};

MODELS.machines = function(){
  var g = new THREE.Group();
  var fulcrum = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.5, 4), new THREE.MeshStandardMaterial({color:0x64748b}));
  fulcrum.position.set(0, -0.85, 0);
  g.add(L(fulcrum, 'نقطة الارتكاز','Fulcrum'));
  var armG = new THREE.Group();
  var beam = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.12, 0.3), new THREE.MeshStandardMaterial({color:0xb45309}));
  armG.add(L(beam, 'ذراع الرافعة','Lever arm'));
  var heavy = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial({color:0x334155}));
  heavy.position.set(-0.45, 0.35, 0);
  armG.add(L(heavy, 'ثقل كبير قريب من الارتكاز','Big weight near the fulcrum'));
  var light = sph(0.2, 0x22c55e, 1.3, 0.25, 0);
  armG.add(L(light, 'قوة صغيرة بعيدة - تعادله!','Small far force - balances it!'));
  armG.position.y = -0.55;
  g.add(armG);
  return { group:g, animate:function(t){ armG.rotation.z = Math.sin(t*0.0012)*0.12; g.rotation.y = Math.sin(t*0.0004)*0.4; },
    legend:{ ar:['رافعة متوازنة: ثقل كبير قريب = قوة صغيرة بعيدة','تكسب القوة وتدفع المسافة - لا شيء مجاني'],
             en:['Balanced lever: big near weight = small far force','Gain force, pay distance - nothing is free'] } };
};

MODELS.pressure = function(){
  var g = new THREE.Group();
  var tank = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2.0, 24, 1, true), new THREE.MeshStandardMaterial({color:0x93c5fd, transparent:true, opacity:0.25, side:THREE.DoubleSide}));
  g.add(L(tank, 'وعاء مغلق فيه غاز','Closed vessel with gas'));
  var piston = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.78, 0.2, 24), new THREE.MeshStandardMaterial({color:0x64748b}));
  g.add(L(piston, 'مكبس يضغط الغاز','Piston pressing the gas'));
  var ps = [];
  for(var i=0;i<10;i++){
    var p = sph(0.08, 0xfbbf24, 0,0,0); L(p,'جزيء غاز يتقافز','Bouncing gas particle'); g.add(p); ps.push(p);
  }
  return { group:g, animate:function(t){ g.rotation.y = t*0.0002; var top = 0.4+Math.sin(t*0.0012)*0.45; piston.position.y = top; ps.forEach(function(p,i){ p.position.set(Math.sin(t*0.005+i*2.3)*0.6, -0.8+((Math.sin(t*0.004+i*1.7)+1)/2)*(top+0.7), Math.cos(t*0.006+i*1.1)*0.6); }); },
    legend:{ ar:['نموذج متحرك لمكبس وغاز؛ عند ثبات الحرارة والكمية يزيد الضغط مع تقليل الحجم','الضغط قوة موزعة على مساحة'],
             en:['An animated piston and gas: at fixed temperature and amount, reducing volume raises pressure','Pressure is force spread over an area'] } };
};


MODELS.periodic = function(){
var g = new THREE.Group();
  var groups = [[1,18],[1,2,13,14,15,16,17,18],[1,2,13,14,15,16,17,18]];
  var z=1;
  function tile(n,col,row){
    var color=col===18?0xa78bfa:(col<3?0xfb923c:(col>12?0x34d399:0x60a5fa));
    var m=new THREE.Mesh(new THREE.BoxGeometry(0.16,0.16,0.08),new THREE.MeshStandardMaterial({color:color}));
    m.position.set((col-9.5)*0.19,(3-row)*0.20,0);
    g.add(L(m,'عنصر عدده الذري '+n+'\nالعدد الذري يساوي عدد بروتونات النواة.','Element with atomic number '+n+'\nAtomic number equals the number of protons in its nucleus.'));
  }
  for(var row=0;row<3;row++) groups[row].forEach(function(col){tile(z++,col,row);});
  for(var row=3;row<5;row++) for(var col=1;col<=18;col++) tile(z++,col,row);
  for(var row=5;row<7;row++){
    for(var col=1;col<=3;col++)tile(z++,col,row);
    for(var f=0;f<14;f++)tile(z++,f+4,row+3);
    for(var col=4;col<=18;col++)tile(z++,col,row);
  }
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0003)*0.25;},legend:{ar:['118 موضعاً للعناصر حسب العدد الذري؛ الأحجام والألوان تعليمية.','الأعمدة مجموعات والصفوف دورات، والصفان السفليان جزءان منفصلان للعرض.'],en:['118 element positions ordered by atomic number; colors and sizes are schematic.','Columns are groups and rows are periods; the two bottom rows are detached for display.']}};
};

MODELS.bonds = function(){
  var g = new THREE.Group();
  var na = L(sph(0.6, 0xfacc15, -1.1, 0, 0), 'الصوديوم يهب إلكتروناً','Sodium gives an electron');
  var cl = L(sph(0.7, 0x22c55e, 1.1, 0, 0), 'الكلور يستقبله','Chlorine receives it');
  g.add(na); g.add(cl);
  var e = sph(0.12, 0x38bdf8, -0.5, 0.5, 0);
  g.add(L(e,'الإلكترون المنتقل','The transferred electron'));
  return { group:g, animate:function(t){ var p = (Math.sin(t*0.0015)+1)/2; e.position.set(-0.5+1.2*p, 0.5-0.5*p, 0.2*Math.sin(t*0.006)); },
    legend:{ ar:['رابطة أيونية: هبة كاملة ثم تجاذب شحنات','هكذا يولد ملح الطعام NaCl'],
             en:['Ionic bond: a full gift then charge attraction','This is how table salt NaCl is born'] } };
};

MODELS.acidbase = function(){
  var g = new THREE.Group();
  var colors = [0xef4444,0xf43f5e,0xf97316,0xfb923c,0xfacc15,0xfde047,0xa3e635,0x22c55e,0x34d399,0x2dd4bf,0x22d3ee,0x60a5fa,0x818cf8,0xa78bfa,0xc084fc];
  for(var i=0;i<15;i++){
    var seg = new THREE.Mesh(new THREE.BoxGeometry(0.26,0.14,0.3), new THREE.MeshStandardMaterial({color:colors[i]}));
    seg.position.set((i-7)*0.3, 0, 0);
    g.add(L(seg, i<7?'حمضي - أقل من 7':(i>7?'قاعدي - أعلى من 7':'متعادل - ماء نقي 7'), i<7?'Acidic - below 7':(i>7?'Basic - above 7':'Neutral - pure water 7')));
  }
  var drop = new THREE.Mesh(new THREE.ConeGeometry(0.1,0.24,16), new THREE.MeshStandardMaterial({color:0xffffff}));
  drop.rotation.x = Math.PI; drop.position.set(-1.2, 0.4, 0);
  g.add(L(drop,'قطرة الكاشف تشير إلى الوسط','Indicator drop points to the medium'));
  return { group:g, animate:function(t){ drop.position.x = 1.6*Math.sin(t*0.0009); },
    legend:{ ar:['pH من 0 حتى 14','الليمون قرب 2 - الصابون قرب 10 - الماء 7'],
             en:['pH runs 0 to 14','Lemon near 2 - soap near 10 - water 7'] } };
};

MODELS.reactions = function(){
  var g = new THREE.Group();
  // 2 H2 + O2 -> 2 H2O
  var atoms = [];
  var h = [[-1.6,0.5],[-1.2,0.5],[-1.6,-0.5],[-1.2,-0.5]];
  var o = [[-0.2,0.1],[0.2,0.1]];
  h.forEach(function(p){ var m = L(sph(0.22,0xf8fafc,p[0],p[1],0),'هيدروجين','Hydrogen'); g.add(m); atoms.push({m:m,a:p,t:1}); });
  o.forEach(function(p){ var m = L(sph(0.32,0xef4444,p[0],p[1],0),'أكسجين','Oxygen'); g.add(m); atoms.push({m:m,a:p,t:2}); });
  // targets: two H2O molecules on the right
  var targets = [[1.0,0.6],[1.55,0.75],[1.0,-0.6],[1.55,-0.75],[1.15,0.35],[1.15,-0.35]];
  return { group:g, animate:function(t){
    var p = (Math.sin(t*0.0012)+1)/2; p = p<0.5 ? p*2 : 2-p*2;
    for(var i=0;i<atoms.length;i++){ var A=atoms[i], T=targets[i];
      A.m.position.x = A.a[0]+(T[0]-A.a[0])*p;
      A.m.position.y = A.a[1]+(T[1]-A.a[1])*p; } },
    legend:{ ar:['روابط تنكسر وروابط تتكون','الذرات نفسها لا تفنى - حفظ الكتلة'],
             en:['Bonds break and bonds form','Atoms themselves never vanish - conservation of mass'] } };
};

MODELS.states = function(){
  var g = new THREE.Group();
  var boxes = [], parts = [];
  for(var b=0;b<3;b++){
    var box = new THREE.Mesh(new THREE.BoxGeometry(1.5,1.5,1.5), new THREE.MeshStandardMaterial({color:0x94a3b8, transparent:true, opacity:0.08, side:THREE.DoubleSide}));
    box.position.set((b-1)*1.9, 0, 0);
    g.add(L(box, b===0?'صلب: جزيئات متراصة':(b===1?'سائل: جزيئات تنزلق':'غاز: جزيئات حرة'), b===0?'Solid: packed molecules':(b===1?'Liquid: sliding molecules':'Gas: free molecules')));
    for(var i=0;i<9;i++){
      var px=(i%3-1)*0.4, py=(Math.floor(i/3)-1)*0.4, pz=((i*7)%3-1)*0.4;
      var col = b===0?0x60a5fa:(b===1?0x22d3ee:0xf472b6);
      var s = sph(0.11, col, box.position.x+px*(b===2?1.6:1), py*(b===2?1.6:1), pz*(b===2?1.6:1));
      g.add(s); parts.push({m:s,b:b,x:box.position.x+px,y:py,z:pz,ph:i*0.7+b});
    }
  }
  return { group:g, animate:function(t){
    for(var i=0;i<parts.length;i++){ var P=parts[i];
      if(P.b===0){ var j=0.02; P.m.position.set(P.x+Math.sin(t*0.01+P.ph)*j, P.y+Math.cos(t*0.012+P.ph)*j, P.z); }
      else if(P.b===1){ var j2=0.09; P.m.position.set(P.x+Math.sin(t*0.003+P.ph)*j2, P.y+Math.cos(t*0.004+P.ph*2)*j2, P.z+Math.sin(t*0.0035+P.ph)*j2); }
      else { var j3=0.55; P.m.position.set(P.x+Math.sin(t*0.005+P.ph*3)*j3, P.y+Math.cos(t*0.006+P.ph*2)*j3, P.z+Math.sin(t*0.0055+P.ph)*j3); }
    } },
    legend:{ ar:['الفرق بين الحالات: طاقة حركة الجزيئات','سخّن تكسر القيود - برّد تتراص'],
             en:['States differ by molecular motion energy','Heat breaks the bonds - cool packs them'] } };
};


MODELS.solutions = function(){
  var g = new THREE.Group();
  var beaker = new THREE.Mesh(new THREE.CylinderGeometry(1.0,0.9,1.7,24,1,true), new THREE.MeshStandardMaterial({color:0x93c5fd, transparent:true, opacity:0.2, side:THREE.DoubleSide}));
  beaker.position.y = -0.1;
  g.add(L(beaker,'كأس زجاجي','Glass beaker'));
  var water = new THREE.Mesh(new THREE.CylinderGeometry(0.95,0.86,1.3,24), new THREE.MeshStandardMaterial({color:0x3b82f6, transparent:true, opacity:0.35}));
  water.position.y = -0.25;
  g.add(L(water,'الماء - المذيب العام','Water - the universal solvent'));
  var parts = [];
  for(var i=0;i<16;i++){
    var s = sph(0.07, 0xfde047, 0, 0.45, 0);
    g.add(L(s,'جزيء سكر يذوب','A sugar molecule dissolving'));
    parts.push({m:s, a:i*0.39, r:0.15+(i%5)*0.15, y:0.5-(i%7)*0.16, ph:i*0.8});
  }
  return { group:g, animate:function(t){
    var spread = (Math.sin(t*0.0008)+1)/2;
    for(var i=0;i<parts.length;i++){ var P=parts[i];
      var r = 0.12 + P.r*spread;
      P.m.position.set(Math.cos(P.a+t*0.0005)*r, 0.4 - (1-spread)*0 + P.y*spread - 0.1, Math.sin(P.a+t*0.0005)*r);
    } },
    legend:{ ar:['المذاب يتفرق بالتساوي: محلول متجانس','المتشابه يذيب المتشابه'],
             en:['Solute spreads evenly: a homogeneous solution','Like dissolves like'] } };
};

MODELS.metals = function(){
  var g = new THREE.Group();
  var cores = [];
  for(var x=-1;x<=1;x++) for(var y=-1;y<=1;y++) for(var z=-1;z<=1;z++){
    if((x+y+z)%2!==0) continue;
    var c = L(sph(0.3, 0xfb923c, x*0.75, y*0.75, z*0.75, {metalness:0.6, roughness:0.3}), 'نوى أيونية موجبة في شبكة','Positive ion cores in a lattice');
    g.add(c); cores.push(c);
  }
  var e = [];
  for(var i=0;i<14;i++){
    var s = L(sph(0.07, 0x38bdf8, Math.sin(i)*1.1, Math.cos(i*1.7)*1.1, Math.sin(i*2.3)*1.1), 'إلكترونات حرة - بحر إلكتروني','Free electrons - an electron sea');
    g.add(s); e.push({m:s, ph:i*0.9});
  }
  return { group:g, animate:function(t){
    for(var i=0;i<e.length;i++){ var E=e[i];
      E.m.position.set(Math.sin(t*0.002+E.ph)*1.15, Math.cos(t*0.0025+E.ph*1.3)*1.15, Math.sin(t*0.0022+E.ph*1.7)*1.15); } },
    legend:{ ar:['شبكة أيونات + بحر إلكترونات حرة','سر اللمعان والتوصيل الكهربائي'],
             en:['Ion lattice + free electron sea','The secret of shine and conduction'] } };
};

MODELS.organic = function(){
  var g = new THREE.Group();
  // benzene ring C6H6
  var R = 0.9, carbons = [];
  for(var i=0;i<6;i++){
    var a = i*Math.PI/3;
    var cx = Math.cos(a)*R, cy = Math.sin(a)*R;
    var c = L(sph(0.26, 0x334155, cx, cy, 0), 'كربون - أربع روابط','Carbon - four bonds');
    g.add(c); carbons.push([cx,cy]);
    var hh = L(sph(0.14, 0xf8fafc, Math.cos(a)*1.45, Math.sin(a)*1.45, 0), 'هيدروجين','Hydrogen');
    g.add(hh);
    g.add(cyl(0.045, 0.5, 0x94a3b8, cx, cy, 0, Math.cos(a)*1.35, Math.sin(a)*1.35, 0));
  }
  for(var i=0;i<6;i++){
    var n = (i+1)%6;
    g.add(cyl(0.06, Math.hypot(carbons[n][0]-carbons[i][0], carbons[n][1]-carbons[i][1]), i%2?0xf97316:0xfacc15, carbons[i][0], carbons[i][1], 0, carbons[n][0], carbons[n][1], 0));
  }
  var inner = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.05, 8, 40), new THREE.MeshBasicMaterial({color:0x38bdf8, transparent:true, opacity:0.7}));
  g.add(L(inner,'إلكترونات مشتركة تدور حول الحلقة كلها','Shared electrons circling the whole ring'));
  g.rotation.x = 0.5;
  return { group:g, animate:function(t){ inner.rotation.z = t*0.001; },
    legend:{ ar:['حلقة البنزين: 6 كربون + 6 هيدروجين','أشهر جزيء في الكيمياء العضوية'],
             en:['Benzene ring: 6 carbons + 6 hydrogens','The most famous organic molecule'] } };
};

MODELS.electrochem = function(){
  var g = new THREE.Group();
  var cell = new THREE.Mesh(new THREE.CylinderGeometry(1.1,1.0,1.5,24,1,true), new THREE.MeshStandardMaterial({color:0x93c5fd, transparent:true, opacity:0.18, side:THREE.DoubleSide}));
  cell.position.y = -0.3;
  g.add(L(cell,'خلية البطارية','Battery cell'));
  var zn = new THREE.Mesh(new THREE.BoxGeometry(0.22,1.1,0.5), new THREE.MeshStandardMaterial({color:0x94a3b8}));
  zn.position.set(-0.6, 0.1, 0);
  g.add(L(zn,'قطب سالب يفرط في الإلكترونات','Negative electrode overflowing with electrons'));
  var cu = new THREE.Mesh(new THREE.BoxGeometry(0.22,1.1,0.5), new THREE.MeshStandardMaterial({color:0xb45309}));
  cu.position.set(0.6, 0.1, 0);
  g.add(L(cu,'قطب موجب يتلهف عليها','Positive electrode craving them'));
  var wirePts = [];
  for(var i=0;i<=20;i++){ var a = i/20; wirePts.push(new THREE.Vector3(-0.6+1.2*a, 0.65+Math.sin(a*Math.PI)*0.55, 0)); }
  var wire = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(wirePts), 40, 0.03, 8), new THREE.MeshStandardMaterial({color:0xfacc15}));
  g.add(L(wire,'السلك - طريق الإلكترونات','The wire - electron highway'));
  var bulb = L(sph(0.16, 0xfef08a, 0, 1.35, 0, {emissive:0xfde047, emissiveIntensity:1}), 'مصباح يضيء بالتفاعل الكيميائي','A lamp lit by the chemical reaction');
  g.add(bulb);
  var ions = [];
  for(var i=0;i<10;i++){ var s = L(sph(0.06, i%2?0x4ade80:0xf87171, Math.sin(i*2)*0.8, -0.5, Math.cos(i*2)*0.7), 'أيونات تعبر المحلول','Ions crossing the solution'); g.add(s); ions.push({m:s, ph:i*1.1, x:Math.sin(i*2)*0.7, z:Math.cos(i*2)*0.6}); }
  return { group:g, animate:function(t){
    bulb.material.emissiveIntensity = 0.7+0.5*Math.sin(t*0.006);
    for(var i=0;i<ions.length;i++){ var I=ions[i]; I.m.position.x = I.x*Math.sin(t*0.001+I.ph); I.m.position.y = -0.5+0.2*Math.sin(t*0.002+I.ph*2); } },
    legend:{ ar:['تفاعل كيميائي يدفع الإلكترونات في السلك','الشحن يعكس التفاعل - هكذا تشحن بطاريتك'],
             en:['A chemical reaction pushes electrons through the wire','Charging reverses the reaction - how your battery charges'] } };
};

MODELS.gases = function(){
  var g = new THREE.Group();
  var box = new THREE.Mesh(new THREE.BoxGeometry(3,2.2,1.6), new THREE.MeshStandardMaterial({color:0x94a3b8, transparent:true, opacity:0.07, side:THREE.DoubleSide}));
  g.add(L(box,'وعاء مغلق - الهواء حولنا غاز حقيقي','A closed vessel - the air around us is real gas'));
  var parts = [];
  var cols = [0x60a5fa,0x60a5fa,0x60a5fa,0x60a5fa,0xef4444,0x34d399,0xfde047];
  var names = [['نيتروجين - 78% من الهواء','Nitrogen - 78% of air'],['نيتروجين - 78% من الهواء','Nitrogen - 78% of air'],['نيتروجين - 78% من الهواء','Nitrogen - 78% of air'],['نيتروجين - 78% من الهواء','Nitrogen - 78% of air'],['أكسجين - 21%','Oxygen - 21%'],['أرجون - الغاز الخامل','Argon - the inert gas'],['هيليوم - أخف من الهواء','Helium - lighter than air']];
  for(var i=0;i<18;i++){
    var k = i%7;
    var s = L(sph(0.09, cols[k], Math.sin(i*2.4)*1.2, Math.cos(i*1.9)*0.8, Math.sin(i*1.3)*0.6), names[k][0], names[k][1]);
    g.add(s);
    parts.push({m:s, vx:0.3+(i%5)*0.15, vy:0.25+(i%4)*0.18, vz:0.2+(i%3)*0.2, ph:i});
  }
  var speed = 1+1.6;
  return { group:g, animate:function(t){
    for(var i=0;i<parts.length;i++){ var P=parts[i];
      P.m.position.x = Math.sin(t*0.001*P.vx*speed+P.ph)*1.35;
      P.m.position.y = Math.cos(t*0.001*P.vy*speed+P.ph*1.7)*0.95;
      P.m.position.z = Math.sin(t*0.001*P.vz*speed+P.ph*2.3)*0.65; } },
    legend:{ ar:['جزيئات تطير حرة بسرعة 1500 كم/س','اصطداماتها هي ما نشعر به ضغطاً جوياً'],
             en:['Molecules flying free at 1500 km/h','Their collisions are what we feel as air pressure'] } };
};

// ---- Math batch 1 models ----
function bx(w,h,d,color,x,y,z,opts){var m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial(Object.assign({color:color,roughness:0.6},opts||{})));m.position.set(x||0,y||0,z||0);return m;}

MODELS.fractions = function(){
  var g=new THREE.Group();
  g.add(L(cyl(1.5,0.12,0xe2e8f0,0,-0.06,0,0,0.06,0),'الكل - قرص مقسوم','The whole - a divided disk'));
  for(var i=0;i<4;i++){
    var a0=i*Math.PI/2;
    var geo=new THREE.CylinderGeometry(1.32,1.32,0.16,24,1,false,a0,Math.PI/2);
    var m=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:i<3?0x2563eb:0xf8fafc,roughness:0.5}));
    m.position.y=0.09;
    g.add(L(m,'الجزء المظلل - البسط','A shaded part - numerator'));
  }
  g.add(L(cyl(0.02,3.0,0x94a3b8,0,0.18,-1.5,0,0.18,1.5),'خط تقسيم - المقام','A dividing line - denominator'));
  g.add(L(cyl(0.02,3.0,0x94a3b8,-1.5,0.18,0,1.5,0.18,0),'خط تقسيم - المقام','A dividing line - denominator'));
  return {group:g,animate:function(t){g.rotation.y=t*0.0004;},legend:{ar:['3 من 4 أجزاء متساوية مظللة: هذا هو الكسر 3/4.','المقام 4 يعد الأجزاء المتساوية، والبسط 3 يعد الأجزاء المأخوذة.'],en:['3 of 4 equal parts shaded: this is the fraction 3/4.','The denominator 4 counts the equal parts; the numerator 3 counts the parts taken.']}};
};

MODELS.percent = function(){
  var g=new THREE.Group();
  g.add(L(bx(3.04,0.04,3.04,0xcbd5e1,0,-0.04,0),'الشبكة الكاملة - 100 خانة','The full grid - 100 squares'));
  for(var r=0;r<10;r++)for(var c=0;c<10;c++){
    var on=r*10+c<25;
    g.add(L(bx(0.26,0.06,0.26,on?0x22c55e:0xf1f5f9,(c-4.5)*0.3,0.03,(r-4.5)*0.3),'خانة من مئة - 1%','One square of a hundred - 1%'));
  }
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.4;},legend:{ar:['25 خانة خضراء من 100: هذه هي 25%.','النسبة المئوية كسر مقامه دائماً 100.'],en:['25 green squares out of 100: that is 25%.','A percent is a fraction whose denominator is always 100.']}};
};

MODELS.algebra = function(){
  var g=new THREE.Group();
  g.add(L(cyl(0.03,1.2,0x64748b,0,-1.1,0,0,0.1,0),'عمود الميزان','The balance post'));
  g.add(L(cyl(0.025,3.4,0x475569,-1.7,0.35,0,1.7,0.35,0),'ذراع الميزان المتوازنة','The balanced beam'));
  g.add(L(bx(0.9,0.08,0.7,0xf59e0b,-1.7,0.28,0),'كفة اليسار','The left pan'));
  g.add(L(bx(0.9,0.08,0.7,0xf59e0b,1.7,0.28,0),'كفة اليمين','The right pan'));
  var env=L(bx(0.5,0.34,0.06,0xa78bfa,-1.9,0.53,0),'المظروف x - المجهول','Envelope x - the unknown');
  g.add(env);
  [-1.35,-1.1].forEach(function(x){g.add(L(sph(0.11,0x2563eb,x,0.44,0),'وحدة مكشوفة - واحد','An exposed unit - one'));});
  for(var i=0;i<5;i++)g.add(L(sph(0.11,0x22c55e,1.7+(i%3)*0.24-0.24,0.44+Math.floor(i/3)*0.22,(i%2)*0.2-0.1),'وحدة وزن - واحد','A weight unit - one'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['x + 2 = 5: الميزان متوازن، فالحل x = 3.','اطرح 2 من الطرفين معاً ليبقى التوازن.'],en:['x + 2 = 5: the beam balances, so the solution is x = 3.','Subtract 2 from both sides together to keep the balance.']}};
};

MODELS.coordinates = function(){
  var g=new THREE.Group();
  for(var i=-3;i<=3;i++){
    g.add(cyl(0.008,6,0xe2e8f0,i,-3,0,i,3,0));
    g.add(cyl(0.008,6,0xe2e8f0,-3,i,0,3,i,0));
  }
  g.add(L(cyl(0.025,6.6,0x2563eb,-3.3,0,0,3.3,0,0),'محور x - أفقي','The x-axis - horizontal'));
  g.add(L(cyl(0.025,6.6,0xdc2626,0,-3.3,0,0,3.3,0),'محور y - عمودي','The y-axis - vertical'));
  g.add(L(sph(0.1,0x0f172a,0,0,0),'نقطة الأصل (0,0)','The origin (0,0)'));
  g.add(L(sph(0.14,0x22c55e,2,1,0),'النقطة (2,1)','The point (2,1)'));
  g.add(cyl(0.012,2,0x94a3b8,0,0,0,2,0,0));
  g.add(cyl(0.012,1,0x94a3b8,2,0,0,2,1,0));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.25;},legend:{ar:['امشِ وحدتين يميناً ثم وحدة أعلى لتصل إلى (2,1).','الرقم الأول x والثاني y، والترتيب مهم.'],en:['Move 2 units right then 1 unit up to reach (2,1).','The first number is x and the second y; order matters.']}};
};

MODELS.circles = function(){
  var g=new THREE.Group();
  var circ=new THREE.Mesh(new THREE.TorusGeometry(1.6,0.03,10,96),new THREE.MeshBasicMaterial({color:0x2563eb}));
  g.add(L(circ,'محيط الدائرة C = 2πr','The circumference C = 2πr'));
  g.add(L(sph(0.1,0x0f172a,0,0,0),'المركز','The center'));
  g.add(L(cyl(0.02,1.6,0x22c55e,0,0,0,1.6,0,0),'نصف القطر r','The radius r'));
  g.add(L(cyl(0.02,3.2,0xdc2626,-1.6*Math.cos(0.5),-1.6*Math.sin(0.5),0,1.6*Math.cos(0.5),1.6*Math.sin(0.5),0),'القطر d = 2r','The diameter d = 2r'));
  var wedge=new THREE.Mesh(new THREE.CircleGeometry(1.58,32,0,Math.PI/2),new THREE.MeshBasicMaterial({color:0xf59e0b,transparent:true,opacity:0.25,side:THREE.DoubleSide}));
  g.add(L(wedge,'جزء من المساحة A = πr²','A slice of the area A = πr²'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0003)*0.2;},legend:{ar:['المحيط يساوي π مضروبة في القطر، والقطر ضعف نصف القطر.','المساحة π مضروبة في مربع نصف القطر.'],en:['Circumference is π times the diameter, and the diameter is twice the radius.','Area is π times the radius squared.']}};
};

MODELS.solids = function(){
  var g=new THREE.Group();
  g.add(L(bx(1,1,1,0x3b82f6,-1.7,0.5,0),'مكعب - V = س³','Cube - V = s³'));
  g.add(L(sph(0.62,0xf59e0b,0,0.62,0),'كرة - V = 4/3 πr³','Sphere - V = 4/3 πr³'));
  g.add(L(cyl(0.55,1.1,0x22c55e,1.7,0,0,1.7,1.1,0),'أسطوانة - V = πr²h','Cylinder - V = πr²h'));
  var face=L(bx(1.02,1.02,0.02,0xfef08a,-1.7,0.5,0.52,{transparent:true,opacity:0.55}),'وجه مربع - مساحة سطحية س²','A square face - surface area s²');
  g.add(face);
  return {group:g,animate:function(t){g.rotation.y=t*0.00045;},legend:{ar:['الحجم يقيس ما بداخل المجسم، والمساحة السطحية مجموع أوجهه.','وحدة الحجم مكعبة ووحدة المساحة مربعة.'],en:['Volume measures what is inside a solid; surface area is the sum of its faces.','Volume units are cubic and area units are square.']}};
};

MODELS.probability = function(){
  var g=new THREE.Group();
  var die=L(bx(1.1,1.1,1.1,0xf8fafc,0,0.7,0),'حجر نرد منتظم - 6 أوجه','A fair die - 6 faces');
  g.add(die);
  var pipC=0x1e293b;
  [[0,0]].forEach(function(p){g.add(L(sph(0.07,pipC,p[0],0.7,0.57+p[1]),'نقطة وجه - نتيجة','A face pip - one outcome'));});
  [[-0.28,-0.28],[0.28,0.28]].forEach(function(p){g.add(L(sph(0.07,pipC,p[0]+0.57,0.7+p[1],0),'نقطة وجه - نتيجة','A face pip - one outcome'));});
  [[-0.28,-0.28],[0,0],[0.28,0.28]].forEach(function(p){g.add(L(sph(0.07,pipC,p[0],0.7+p[1],-0.57),'نقطة وجه - نتيجة','A face pip - one outcome'));});
  for(var i=1;i<=6;i++)g.add(L(bx(0.3,0.08,0.06,0x2563eb,(i-3.5)*0.38,-0.15,1.4),'نتيجة ممكنة - 1 من 6','A possible outcome - 1 of 6'));
  return {group:g,animate:function(t){g.rotation.y=t*0.0005;},legend:{ar:['6 نتائج متساوية الاحتمال، فاحتمال كل وجه 1/6.','حجر ملعوب يكسر شرط تساوي النواتج.'],en:['6 equally likely outcomes, so each face has probability 1/6.','A loaded die breaks the equally likely condition.']}};
};

MODELS.statistics = function(){
  var g=new THREE.Group();
  var vals=[2,3,3,8],cols=[0x60a5fa,0x34d399,0x34d399,0xf59e0b],names=['قيمة 2','قيمة 3 - الوسيط والمنوال','قيمة 3 - الوسيط والمنوال','قيمة 8 - القيمة المتطرفة'];
  var namesEn=['Value 2','Value 3 - median and mode','Value 3 - median and mode','Value 8 - the outlier'];
  vals.forEach(function(v,i){
    g.add(L(bx(0.4,v*0.3,0.4,cols[i],(i-1.5)*0.65,v*0.15,0),names[i],namesEn[i]));
  });
  g.add(L(cyl(0.02,3,0xdc2626,-1.4,4*0.3,0,1.4,4*0.3,0),'خط المتوسط 4','The mean line 4'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['الأعمدة: 2,3,3,8 والخط الأحمر المتوسط 4.','الوسيط والمنوال 3؛ المتوسط تأثر بالقيمة المتطرفة 8.'],en:['Bars: 2,3,3,8 with the red mean line at 4.','Median and mode are 3; the mean was pulled by the outlier 8.']}};
};

MODELS.functions = function(){
  var g=new THREE.Group();
  var boxm=L(bx(1.3,0.9,0.9,0x7c3aed,0,0.45,0),'الدالة f - آلة القاعدة','The function f - the rule machine');
  g.add(boxm);
  g.add(L(sph(0.2,0x2563eb,-1.35,0.45,0),'المدخل x','The input x'));
  g.add(L(cyl(0.03,0.6,0x94a3b8,-1.05,0.45,0,-0.68,0.45,0),'سهم الدخول','The input arrow'));
  g.add(L(sph(0.2,0x22c55e,1.35,0.45,0),'المخرج f(x) الوحيد','The single output f(x)'));
  g.add(L(cyl(0.03,0.6,0x94a3b8,0.68,0.45,0,1.05,0.45,0),'سهم الخروج','The output arrow'));
  var bad=L(sph(0.16,0xef4444,1.15,1.1,0),'مخرج ثانٍ ممنوع','A forbidden second output');
  g.add(bad);
  g.add(L(cyl(0.02,0.8,0xef4444,1.15-0.3,1.1-0.3,0,1.15+0.3,1.1+0.3,0),'علامة المنع','The prohibition mark'));
  g.add(L(cyl(0.02,0.8,0xef4444,1.15-0.3,1.1+0.3,0,1.15+0.3,1.1-0.3,0),'علامة المنع','The prohibition mark'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['لكل مدخل مخرج واحد بالضبط؛ المخرج الثاني ممنوع.','يجوز تكرار المخرج نفسه لمدخلين مختلفين.'],en:['Each input gets exactly one output; a second output is forbidden.','The same output may repeat for two different inputs.']}};
};

MODELS.ratios = function(){
  var g=new THREE.Group();
  [[-0.5,0.5,0],[-0.5,-0.1,0]].forEach(function(p){g.add(L(sph(0.24,0xef4444,p[0],p[1],p[2]),'كرة حمراء - جزء من النسبة','A red counter - part of the ratio'));});
  [[0.35,0.7,0],[0.35,0.2,0],[0.35,-0.3,0]].forEach(function(p){g.add(L(sph(0.24,0x2563eb,p[0],p[1],p[2]),'كرة زرقاء - جزء من النسبة','A blue counter - part of the ratio'));});
  g.add(L(bx(2.4,0.06,0.06,0x94a3b8,-0.05,-0.85,0),'خط الكل - 5 كرات','The whole line - 5 counters'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['النسبة جزء إلى جزء: حمراء إلى زرقاء = 2:3.','حصة الحمر من الكل 2 من 5 أي الكسر 2/5.'],en:['The ratio is part to part: red to blue = 2:3.','The red share of the whole is 2 out of 5, the fraction 2/5.']}};
};


// ---- Math batch 2 models ----
MODELS.integers = function(){
  var g=new THREE.Group();
  g.add(L(cyl(0.02,7,0x94a3b8,-3.5,0,0,3.5,0,0),'خط الأعداد','The number line'));
  for(var i=-3;i<=3;i++){
    var c=i<0?0x60a5fa:(i>0?0xf97316:0x0f172a);
    g.add(L(sph(0.16,c,i,0,0),i<0?'عدد سالب - يسار الصفر':(i>0?'عدد موجب - يمين الصفر':'الصفر - لا موجب ولا سالب'),i<0?'A negative number - left of zero':(i>0?'A positive number - right of zero':'Zero - neither positive nor negative')));
  }
  g.add(L(cyl(0.015,2,0x22c55e,-2,0.3,0,-4.5,0.3,0),'اتجاه القيم المتناقصة','The direction of decreasing values'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['الموجبة يمين الصفر والسالبة يساره والصفر بينهما.','كلما اتجهنا يميناً كبرت القيمة، فالعدد -2 أكبر من -5.'],en:['Positives are right of zero, negatives left, zero in between.','Moving right increases value, so -2 is greater than -5.']}};
};

MODELS.decimals = function(){
  var g=new THREE.Group();
  g.add(L(bx(1,1,1,0x3b82f6,-1.9,0.5,0),'الواحد الصحيح','One whole'));
  var tenth=L(bx(1,0.1,1,0x22c55e,-0.5,0.15,0),'عُشر - 0.1','One tenth - 0.1');
  g.add(tenth);
  for(var i=1;i<10;i++)g.add(L(bx(1,0.1,1,0xd1fae5,-0.5,0.15+i*0.105,0),'عُشر - 0.1','One tenth - 0.1'));
  for(var r=0;r<10;r++)for(var c=0;c<10;c++)
    g.add(L(bx(0.095,0.095,0.06,0xf59e0b,0.95+(c-4.5)*0.1,0.55+(r-4.5)*0.1,0),'جزء من مئة - 0.01','One hundredth - 0.01'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['المكعب واحد، كل شريحة عُشر، وكل مربع صغير جزء من مئة.','عشرة أعشار تساوي واحداً، ومئة جزء من مئة تساوي واحداً.'],en:['The cube is one, each slab a tenth, each small square a hundredth.','Ten tenths make one, and a hundred hundredths make one.']}};
};

MODELS.orderops = function(){
  var g=new THREE.Group();
  var steps=[['الأقواس أولاً','Parentheses first',0x7c3aed,1.35],['ثم الأسس','Then exponents',0x2563eb,0.75],['ثم الضرب والقسمة','Then multiply and divide',0x22c55e,0.15],['أخيراً الجمع والطرح','Finally add and subtract',0xf59e0b,-0.45]];
  steps.forEach(function(s){g.add(L(bx(2.6,0.4,0.9,s[2],0,s[3],0),s[0],s[1]));});
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.25;},legend:{ar:['سلم الأولوية: ابدأ من الأعلى نزولاً.','2 + 3×4 = 14 لأن الضرب قبل الجمع.'],en:['The priority ladder: start at the top and work down.','2 + 3×4 = 14 because multiplication comes before addition.']}};
};

MODELS.exponents = function(){
  var g=new THREE.Group();
  for(var x=0;x<2;x++)for(var y=0;y<2;y++)for(var z=0;z<2;z++)
    g.add(L(bx(0.42,0.42,0.42,0x3b82f6,(x-0.5)*0.46,(y-0.5)*0.46+0.5,(z-0.5)*0.46),'عامل 2 من ثلاثة','One factor 2 of three'));
  g.add(L(bx(1.9,0.05,0.05,0x94a3b8,0,-0.15,0),'الأساس 2 يتكرر 3 مرات','The base 2 repeated 3 times'));
  return {group:g,animate:function(t){g.rotation.y=t*0.0005;},legend:{ar:['2³ مكعب من 8 مكعبات صغيرة: 2×2×2.','الأس يعد مرات الضرب المتكرر وليس 2×3.'],en:['2³ is a cube of 8 small cubes: 2×2×2.','The exponent counts repeated multiplications, not 2×3.']}};
};

MODELS.scinotation = function(){
  var g=new THREE.Group();
  g.add(L(sph(1.1,0xf59e0b,-1.6,0.2,0),'نجم ضخم - أس موجب','A huge star - positive exponent'));
  g.add(L(sph(0.06,0x22d3ee,1.7,-0.4,0),'ذرة دقيقة - أس سالب','A tiny atom - negative exponent'));
  g.add(L(cyl(0.015,2.6,0x94a3b8,-0.5,0.9,0,1.5,0.9,0),'تحريك الفاصلة بعدد الأس','Moving the decimal point by the exponent'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['a×10ⁿ: a بين 1 و10 والأس يحرك الفاصلة.','الأس الموجب لأعداد ضخمة والسالب لأعداد دقيقة.'],en:['a×10ⁿ: a is between 1 and 10, the exponent moves the point.','Positive exponents for huge numbers, negative for tiny ones.']}};
};

MODELS.angles = function(){
  var g=new THREE.Group();
  function ray(a,len,color,ar,en){
    var m=cyl(0.025,len,color,0,0,0,Math.cos(a)*len,Math.sin(a)*len,0);
    return L(m,ar,en);
  }
  g.add(L(sph(0.12,0x0f172a,0,0,0),'رأس الزاوية','The vertex'));
  g.add(ray(0,2.4,0x94a3b8,'ضلع الزاوية - شعاع','A side of the angle - a ray'));
  g.add(ray(Math.PI/6,2.2,0x22c55e,'زاوية حادة - أقل من 90','An acute angle - under 90 degrees'));
  g.add(ray(Math.PI/2,2.0,0x2563eb,'زاوية قائمة - 90 درجة','A right angle - 90 degrees'));
  g.add(ray(Math.PI*0.72,2.2,0xf59e0b,'زاوية منفرجة - بين 90 و180','An obtuse angle - between 90 and 180'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0003)*0.15;},legend:{ar:['المتتامتان مجموعهما 90 والمتكاملتان 180.','تقاس الزاوية بالدرجات عند رأسها.'],en:['Complementary angles sum to 90, supplementary to 180.','An angle is measured in degrees at its vertex.']}};
};

MODELS.perimeter = function(){
  var g=new THREE.Group();
  for(var r=0;r<2;r++)for(var c=0;c<3;c++)
    g.add(L(bx(0.96,0.06,0.96,0xdbeafe,(c-1)*1.02,0.03,(r-0.5)*1.02),'مربع وحدة - يعد المساحة','A unit square - counts the area'));
  g.add(L(bx(3.2,0.12,0.12,0xef4444,0,0.12,1.55),'ضلع المحيط','A perimeter edge'));
  g.add(L(bx(3.2,0.12,0.12,0xef4444,0,0.12,-1.55),'ضلع المحيط','A perimeter edge'));
  g.add(L(bx(0.12,0.12,2.1,0xef4444,1.55,0.12,0),'ضلع المحيط','A perimeter edge'));
  g.add(L(bx(0.12,0.12,2.1,0xef4444,-1.55,0.12,0),'ضلع المحيط','A perimeter edge'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.35;},legend:{ar:['مستطيل 3×2: المساحة 6 مربعات والمحيط 10 وحدات.','الأحمر حد المحيط والأزرق وحدات المساحة.'],en:['A 3 by 2 rectangle: area is 6 squares, perimeter 10 units.','Red marks the perimeter, blue squares the area.']}};
};

MODELS.slope = function(){
  var g=new THREE.Group();
  g.add(L(cyl(0.02,6,0xe2e8f0,-3,0,0,3,0,0),'المحور الأفقي - run','The horizontal axis - run'));
  g.add(L(cyl(0.02,3,0xe2e8f0,-3,-0.5,0,-3,2.5,0),'المحور الرأسي - rise','The vertical axis - rise'));
  var line=cyl(0.035,4.6,0x2563eb,-3,0,0,1.4,2.2,0);
  g.add(L(line,'الخط المستقيم','The straight line'));
  g.add(L(cyl(0.02,2,0x22c55e,0,1,0,0,2,0),'الارتفاع rise = 1','The rise = 1'));
  g.add(L(cyl(0.02,2,0xf59e0b,0,1,0,2,1,0),'الانتقال run = 2','The run = 2'));
  g.add(L(sph(0.1,0xef4444,0,1,0),'نقطة على الخط','A point on the line'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.2;},legend:{ar:['الميل m = الارتفاع على الانتقال = 1/2 هنا.','الصاعد يميناً موجب والأفقي صفر.'],en:['Slope m = rise over run = 1/2 here.','Rising right is positive; a horizontal line has slope zero.']}};
};

MODELS.primes = function(){
  var g=new THREE.Group();
  g.add(L(sph(0.32,0x7c3aed,0,1.3,0),'العدد 36','The number 36'));
  g.add(L(cyl(0.015,0.7,0x94a3b8,-0.15,1.05,0,-0.6,0.65,0),'فرع الشجرة','A tree branch'));
  g.add(L(cyl(0.015,0.7,0x94a3b8,0.15,1.05,0,0.6,0.65,0),'فرع الشجرة','A tree branch'));
  g.add(L(sph(0.24,0x60a5fa,-0.7,0.45,0),'العامل 4 - مؤلف','The factor 4 - composite'));
  g.add(L(sph(0.24,0x60a5fa,0.7,0.45,0),'العامل 9 - مؤلف','The factor 9 - composite'));
  var primes=[[-1.15,-0.4,'2'],[-0.45,-0.4,'2'],[0.45,-0.4,'3'],[1.15,-0.4,'3']];
  primes.forEach(function(p,i){g.add(L(sph(0.2,0x22c55e,p[0],p[1],0),'عدد أولي '+p[2],'Prime number '+p[2]));});
  g.add(L(cyl(0.015,0.7,0x94a3b8,-0.85,0.2,0,-1.15,-0.2,0),'فرع الشجرة','A tree branch'));
  g.add(L(cyl(0.015,0.7,0x94a3b8,-0.6,0.2,0,-0.45,-0.2,0),'فرع الشجرة','A tree branch'));
  g.add(L(cyl(0.015,0.7,0x94a3b8,0.6,0.2,0,0.45,-0.2,0),'فرع الشجرة','A tree branch'));
  g.add(L(cyl(0.015,0.7,0x94a3b8,0.85,0.2,0,1.15,-0.2,0),'فرع الشجرة','A tree branch'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['شجرة العوامل: 36 = 2×2×3×3.','كل فرع ينتهي بعدد أولي، والنتيجة وحيدة.'],en:['The factor tree: 36 = 2×2×3×3.','Every branch ends in a prime; the result is unique.']}};
};

MODELS.pythagoras = function(){
  var g=new THREE.Group();
  g.add(L(cyl(0.03,1.5,0x2563eb,-0.75,0,0,0.75,0,0),'الساق a = 3','The leg a = 3'));
  g.add(L(cyl(0.03,2,0x22c55e,0.75,0,0,0.75,2,0),'الساق b = 4','The leg b = 4'));
  g.add(L(cyl(0.03,2.5,0xef4444,-0.75,0,0,0.75,2,0),'الوتر c = 5','The hypotenuse c = 5'));
  for(var i=0;i<9;i++)g.add(L(bx(0.22,0.22,0.06,0xdbeafe,-1.5+(i%3)*0.25,0.11+Math.floor(i/3)*0.25,0),'مربع من a² = 9','One square of a² = 9'));
  for(var i=0;i<16;i++)g.add(L(bx(0.2,0.2,0.06,0xd1fae5,1.5+(i%4)*0.23,-0.6+Math.floor(i/4)*0.23,0),'مربع من b² = 16','One square of b² = 16'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.25;},legend:{ar:['المثلث 3-4-5: 9 + 16 = 25.','مربع الوتر يساوي مجموع مربعي الساقين.'],en:['The 3-4-5 triangle: 9 + 16 = 25.','The hypotenuse squared equals the sum of the legs squared.']}};
};

// ---- Science batch 2 models ----
function arr3(g,x1,y1,z1,x2,y2,z2,color,ar,en){
  g.add(L(cyl(0.035,Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)+(z2-z1)*(z2-z1)),color,x1,y1,z1,x2,y2,z2),ar,en));
  g.add(L(sph(0.1,color,x2,y2,z2),ar,en));
}
MODELS.newton = function(){
  var g=new THREE.Group();
  g.add(L(bx(5.4,0.12,1.6,0x93c5fd,0,-0.06,0,{transparent:true,opacity:0.85}),'طاولة هوكي هوائية - احتكاك شبه معدوم','Air hockey table - almost no friction'));
  g.add(L(bx(1.2,0.13,1.6,0x92400e,1.5,0.005,0),'منطقة خشنة - الاحتكاك يبطئ القرص','Rough patch - friction slows the puck'));
  var puck=L(cyl(0.3,0.16,0xef4444,0,0.2,0,0,0.36,0),'القرص - الجسم المتحرك','The puck - the moving object');
  g.add(puck);
  arr3(g,-2.2,0.9,0,-1.2,0.9,0,0x22c55e,'سهم السرعة - ثابتة بلا قوة صافية','Velocity arrow - constant when no net force acts');
  return {group:g,animate:function(t){var u=(t*0.0002)%1;var x=u<0.65?-2.2+3.1*u/0.65:0.9+0.9*(1-Math.exp(-3*(u-0.65)/0.35)); puck.position.x=x-0;g.rotation.y=Math.sin(t*0.0003)*0.2;},legend:{ar:['على السطح الأملس يمضي القرص بالسرعة نفسها.','عند المنطقة الخشنة يبطئ الاحتكاك القرص.'],en:['On the smooth surface the puck keeps the same speed.','On the rough patch friction slows it down.']}};
};
MODELS.friction = function(){
  var g=new THREE.Group();
  g.add(L(bx(5,0.15,1.6,0x78716c,0,-0.075,0),'الأرضية - السطح الملامس','The floor - the contact surface'));
  var crate=L(bx(1.2,1.0,1.0,0xd97706,0,0.5,0),'الصندوق - الجسم المدفوع','The crate - the pushed object');
  g.add(crate);
  for(var i=0;i<6;i++)g.add(L(sph(0.06,0x44403c,-0.5+i*0.2,0.02,0.45),'نتوءات السطح - جزء من سبب الاحتكاك','Surface bumps - part of the cause of friction'));
  arr3(g,-2.0,0.5,0,-0.75,0.5,0,0x22c55e,'قوة الدفع - محاولة الحركة','Push force - the attempted motion');
  arr3(g,1.7,0.25,0.9,0.5,0.25,0.9,0xef4444,'قوة الاحتكاك - تعاكس الحركة','Friction force - opposes the motion');
  arr3(g,0,1.1,0,0,2.1,0,0x3b82f6,'القوة العمودية N - يدفع بها السطح الجسم للأعلى','Normal force N - the surface pushing up on the object');
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['الاحتكاك الساكن يزيد ليساوي دفعتك حتى حد معين.','بعد الحركة يكون الاحتكاك الحركي أقل: fk = μk·N.'],en:['Static friction rises to match your push up to a limit.','Once moving, kinetic friction is smaller: fk = μk·N.']}};
};
MODELS.momentum = function(){
  var g=new THREE.Group();
  g.add(L(bx(0.9,0.9,0.9,0x1d4ed8,-1.8,0.45,0),'اللاعب - كتلة كبيرة 110 كجم','The player - large mass, 110 kg'));
  g.add(L(sph(0.2,0xb45309,-1.8,2.0,0),'كرة - كتلة صغيرة 0.410 كجم','The football - small mass, 0.410 kg'));
  arr3(g,-1.3,0.45,0,-0.3,0.45,0,0x22c55e,'سهم سرعة اللاعب 8.00 م/ث - بطيء','Player velocity arrow 8.00 m/s - slow');
  arr3(g,-1.4,2.0,0,0.2,2.0,0,0x16a34a,'سهم سرعة الكرة 25.0 م/ث - أسرع','Ball velocity arrow 25.0 m/s - faster');
  g.add(L(bx(0.6,2.2,0.4,0x7c3aed,1.2,1.1,0),'شريط كمية حركة اللاعب 880 كجم·م/ث','Player momentum bar - 880 kg·m/s'));
  g.add(L(bx(0.6,0.03,0.4,0xf97316,2.1,0.015,0),'شريط كمية حركة الكرة 10.3 كجم·م/ث - صغير جداً','Ball momentum bar - 10.3 kg·m/s, tiny by comparison'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['p = m·v: الكتلة والسرعة معاً تحددان كمية الحركة.','اللاعب أبطأ لكن كمية حركته أكبر بنحو 85 مرة.'],en:['p = m·v: mass and velocity together set the momentum.','The player is slower yet has about 85 times the momentum.']}};
};
MODELS.mole = function(){
  var g=new THREE.Group();
  g.add(L(bx(4.6,0.12,1.2,0x94a3b8,0,-0.06,0),'منصة الميزان','The balance platform'));
  var data=[[-1.5,0.12,0x111827,'مول من الكربون-12 - كتلته 12 جم','One mole of carbon-12 - mass 12 g'],[0,0.58,0xe5e7eb,'مول من NaCl - كتلته 58.44 جم','One mole of NaCl - mass 58.44 g'],[1.5,1.8,0xf59e0b,'مول من الأسبرين C9H8O4 - كتلته 180.15 جم','One mole of aspirin C9H8O4 - mass 180.15 g']];
  data.forEach(function(d){g.add(L(bx(0.7,d[1]*0.8+0.05,0.7,d[2],d[0],(d[1]*0.8+0.05)/2,0),d[3],d[4]));
    for(var i=0;i<8;i++)g.add(L(sph(0.05,0x38bdf8,d[0]-0.3+(i%4)*0.2,d[1]*0.8+0.15+Math.floor(i/4)*0.14,0),'6.022 × 10²³ جسيماً في كل مول','6.022 × 10²³ particles in each mole'));});
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.35;},legend:{ar:['كل كومة تمثل مولاً واحداً: العدد نفسه، والكتلة تختلف.','الكتلة المولية = الكتلة الصيغية بالجرام لكل مول.'],en:['Each pile is one mole: same count, different mass.','Molar mass = the formula mass expressed in grams per mole.']}};
};
MODELS.isotopes = function(){
  var g=new THREE.Group();
  var xs=[-2.2,0,2.2],ns=[12,13,14],names=['Mg-24','Mg-25','Mg-26'],namesAr=['Mg-24','Mg-25','Mg-26'];
  for(var k=0;k<3;k++){
    g.add(L(sph(0.04,0x94a3b8,xs[k],-1.25,0),'نظير '+namesAr[k]+' - العدد الكتلي '+(24+k),'Isotope '+names[k]+' - mass number '+(24+k)));
    for(var i=0;i<12;i++){var a=i*2.399,r=0.15+0.05*Math.sqrt(i);
      g.add(L(sph(0.11,0xf97316,xs[k]+r*Math.cos(a)*1.6,r*Math.sin(a)*1.6,0.1*(i%3-1)),'بروتون - 12 في كل ذرة مغنيسيوم','Proton - 12 in every magnesium atom'));}
    for(var j=0;j<ns[k];j++){var b=(j+0.5)*2.399+1,q=0.12+0.05*Math.sqrt(j);
      g.add(L(sph(0.11,0x94a3b8,xs[k]+q*Math.cos(b)*1.6,q*Math.sin(b)*1.6,0.1*(j%3-1)+0.08),'نيوترون - عددهم يتغير بين النظائر','Neutron - the number changes between isotopes'));}
  }
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['البروتونات 12 في الثلاثة، لذا هي المغنيسيوم نفسه.','يختلف عدد النيوترونات: 12 و13 و14.'],en:['All three have 12 protons, so all are magnesium.','The neutron count differs: 12, 13 and 14.']}};
};
MODELS.reactionrate = function(){
  var g=new THREE.Group();
  g.add(L(cyl(0.02,4,0x334155,-2,-1.2,0,2,-1.2,0),'محور الزمن','Time axis'));
  g.add(L(cyl(0.02,2.6,0x334155,-2,-1.2,0,-2,1.4,0),'محور التركيز','Concentration axis'));
  for(var i=0;i<=16;i++){var x=-2+i*0.25,y=-1.2+2.4*Math.exp(-i*0.2);
    g.add(L(sph(0.06,0x3b82f6,x,y,0),'منحنى التركيز - ينخفض مع استهلاك المتفاعل','Concentration curve - falls as the reactant is used up'));}
  var x0=-2+6*0.25,y0=-1.2+2.4*Math.exp(-1.2),sl=-2.4*0.2*Math.exp(-1.2)/0.25;
  g.add(L(cyl(0.025,2.2,0xef4444,x0-1,y0-sl,0,x0+1,y0+sl,0),'المماس - سالب ميله هو السرعة اللحظية','Tangent line - its negative slope is the instantaneous rate'));
  g.add(L(sph(0.11,0xf97316,x0,y0,0),'نقطة لحظة محددة على المنحنى','A single moment on the curve'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.25;},legend:{ar:['التركيز يقل مع الزمن فيبطؤ التفاعل.','سالب ميل المماس لتركيز المتفاعل هو السرعة اللحظية.'],en:['Concentration falls with time so the reaction slows.','The negative tangent slope is the instantaneous reactant disappearance rate.']}};
};
MODELS.mitosis = function(){
  var g=new THREE.Group();
  var cell=function(x,r,ar,en){g.add(L(sph(r,0x93c5fd,x,0,0,{transparent:true,opacity:0.2}),ar,en));};
  cell(-2.8,0.7,'خلية في الطور البيني - تنمو وينسخ DNA','Interphase cell - grows and copies DNA');
  g.add(L(sph(0.3,0x7c3aed,-2.8,0,0),'النواة تحوي DNA المنسوخ','Nucleus holding the copied DNA'));
  cell(-0.9,0.7,'خلية في الطور الاستوائي','Cell in metaphase');
  for(var i=0;i<4;i++)g.add(L(bx(0.1,0.28,0.1,0xdc2626,-0.9,-0.4+i*0.27,0),'كروموسوم على المستوى الاستوائي - يصطف في الوسط','Chromosome on the metaphase plate - lined up in the middle'));
  g.add(L(cyl(0.012,1.4,0x16a34a,-1.6,0,0,-0.2,0,0),'ألياف المغزل - تسحب الكروموسومات','Spindle fibre - pulls the chromosomes'));
  cell(0.9,0.7,'خلية في الطور الانفصالي','Cell in anaphase');
  for(var j=0;j<4;j++){g.add(L(bx(0.1,0.22,0.1,0xdc2626,0.5,-0.35+j*0.24,0),'كروماتيد شقيق يتجه إلى قطب','Sister chromatid moving to one pole'));g.add(L(bx(0.1,0.22,0.1,0xdc2626,1.3,-0.35+j*0.24,0),'كروماتيد شقيق يتجه إلى القطب الآخر','Sister chromatid moving to the other pole'));}
  g.add(L(sph(0.45,0x93c5fd,2.5,0.05,0,{transparent:true,opacity:0.25}),'خلية بنت متطابقة بعد الانقسام','Identical daughter cell after division'));
  g.add(L(sph(0.45,0x93c5fd,3.4,0.05,0,{transparent:true,opacity:0.25}),'خلية بنت ثانية متطابقة','Second identical daughter cell'));
  g.add(L(sph(0.2,0x7c3aed,2.5,0.05,0),'نواة جديدة - تكونت في الطور النهائي','New nucleus - formed in telophase'));
  g.add(L(sph(0.2,0x7c3aed,3.4,0.05,0),'نواة جديدة ثانية','Second new nucleus'));
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.2;},legend:{ar:['تنسخ الخلية DNA في الطور البيني ثم تنقسم.','تنتج خليتين بنتين متطابقتين.'],en:['The cell copies DNA in interphase, then divides.','It produces two identical daughter cells.']}};
};
MODELS.osmosis = function(){
  var g=new THREE.Group();
  g.add(L(bx(4.4,1.8,1.6,0x93c5fd,0,0.9,0,{transparent:true,opacity:0.18}),'الحاوية - ماء في جانبين','The container - water on both sides'));
  g.add(L(bx(0.06,1.8,1.6,0x16a34a,0,0.9,0,{transparent:true,opacity:0.5}),'غشاء شبه نافذ - يمرر الماء ويحد من المذابات','Semipermeable membrane - lets water pass, limits solutes'));
  for(var i=0;i<6;i++)g.add(L(sph(0.17,0xf97316,0.7+(i%3)*0.5,0.4+Math.floor(i/3)*0.5,0.2*(i%2)),'جسيم مذاب - لا يعبر الغشاء بسهولة','Solute particle - does not cross the membrane easily'));
  var w=[];
  for(var j=0;j<8;j++){var m=L(sph(0.1,0x2563eb,-1.7+(j%4)*0.35,0.4+Math.floor(j/4)*0.5,-0.2),'جزيء ماء حر','Free water molecule');w.push(m);g.add(m);}
  arr3(g,-0.9,1.9,0,0.9,1.9,0,0x2563eb,'حركة الماء الصافية - نحو الجهة الأكثر ذائبات','Net water movement - toward the side with more solutes');
  return {group:g,animate:function(t){for(var k=0;k<w.length;k++){w[k].position.x=-1.7+((k%4)*0.35+((t*0.0004+k*0.2)%1)*0.5);}g.rotation.y=Math.sin(t*0.0004)*0.3;},legend:{ar:['الماء يعبر الغشاء نحو الجهة الأكثر ذائبات.','الأسموزية حالة خاصة من الانتشار تخص الماء.'],en:['Water crosses toward the side with more solutes.','Osmosis is a special case of diffusion for water.']}};
};
MODELS.meiosis = function(){
  var g=new THREE.Group();
  g.add(L(sph(1.1,0x93c5fd,0,1.6,0,{transparent:true,opacity:0.2}),'خلية ثنائية المجموعة - البداية','Diploid cell - the starting point'));
  var cs=[0xdc2626,0xdc2626,0x2563eb,0x2563eb];
  for(var i=0;i<4;i++)g.add(L(bx(0.12,0.5,0.12,cs[i],-0.35+i*0.23,1.6,0),'كروموسوم - الزوجان المتماثلان بنفس اللون','Chromosome - homologous pairs share a colour'));
  arr3(g,0,0.5,0,0,-0.2,0,0x16a34a,'الانقسام الاختزالي الأول ثم الثاني','Meiosis I then meiosis II');
  for(var k=0;k<4;k++){var x=-2.1+k*1.4;
    g.add(L(sph(0.45,0x93c5fd,x,-1.1,0,{transparent:true,opacity:0.25}),'خلية أحادية المجموعة - واحدة من أربع','Haploid cell - one of four'));
    g.add(L(bx(0.1,0.32,0.1,(k%2?0xdc2626:0xdc2626),x-0.1,-1.1,0),'كروموسوم واحد من الزوج المتماثل','One chromosome from each homologous pair'));
    g.add(L(bx(0.1,0.32,0.1,(k<2?0x2563eb:0x2563eb),x+0.1,-1.1,0),'كروموسوم واحد من الزوج المتماثل','One chromosome from each homologous pair'));}
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.25;},legend:{ar:['خلية ثنائية المجموعة تنتج أربع خلايا أحادية المجموعة.','كل خلية تأخذ كروموسوماً واحداً من كل زوج متماثل.'],en:['One diploid cell yields four haploid cells.','Each cell gets one chromosome from each homologous pair.']}};
};
MODELS.emspectrum = function(){
  var g=new THREE.Group();
  var B=[['Radio waves','أمواج الراديو',0xdc2626,2.4],['Microwaves','ميكروويف',0xf97316,1.7],['Infrared','تحت الحمراء',0xef4444,1.2],['Visible light','الضوء المرئي',0x22c55e,0.85],['Ultraviolet','فوق البنفسجية',0x7c3aed,0.6],['X-rays','الأشعة السينية',0x0ea5e9,0.4],['Gamma rays','أشعة غاما',0x111827,0.28]];
  B.forEach(function(b,i){var y=1.8-i*0.6;
    for(var k=0;k<180;k++){var x=-2.6+k*5.2/179;g.add(L(sph(0.025,b[2],x,y+0.17*Math.sin(x*6.28/b[3]),0),b[1]+' - طول موجي أقصر كلما صعدنا في التردد',b[0]+' - wavelength gets shorter as frequency rises'));}});
  return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0004)*0.25;},legend:{ar:['من الأعلى: الراديو ثم الميكروويف ثم تحت الحمراء ثم المرئي ثم فوق البنفسجي ثم السيني ثم غاما.','كلما زاد التردد قصر الطول الموجي: c = f·λ.'],en:['From top: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.','As frequency rises wavelength shortens: c = f·λ.']}};
};

// Final seven educational schematics.
function f7label(mesh,ar,en,arRole,enRole){note(en,arRole,enRole);return L(mesh,ar,en);}
function f7part(g,mesh,ar,en,arRole,enRole){g.add(f7label(mesh,ar,en,arRole,enRole));return mesh;}
MODELS.torque=function(){
 var g=new THREE.Group();
 f7part(g,cyl(0.13,2.5,0x94a3b8,-2,-1,0,-2,1.5,0),'المفصلة - محور الدوران','Hinge - pivot','نقطة المرجع التي نحسب حولها العزم.','The reference pivot about which torque is calculated.');
 f7part(g,bx(3.6,2.3,0.12,0x8b5cf6,-0.2,0.2,0),'الباب','Door panel','ينقل الدفع إلى حركة دوران حول المفصلة.','Transfers a push into rotation about the hinge.');
 f7part(g,sph(0.14,0xfbbf24,1.3,0.15,0.18),'المقبض البعيد','Far handle','البعد الأكبر عن المفصلة يزيد ذراع القوة العمودي.','A greater distance from the hinge increases the perpendicular lever arm.');
 f7part(g,cyl(0.035,1.3,0x22c55e,1.3,0.15,1.6,1.3,0.15,0.3),'قوة عمودية على الباب','Perpendicular push','تعطي أكبر عزم لهذه القوة عند هذه المسافة.','Gives the largest torque for this force and distance.');
 f7part(g,sph(0.1,0x22c55e,1.3,0.15,0.3),'رأس سهم الدفع','Push arrow tip','يبين وصول الدفع عمودياً إلى سطح الباب.','Shows the push arriving perpendicular to the panel.');
 f7part(g,cyl(0.025,3.3,0xfbbf24,-2,-0.8,0.3,1.3,-0.8,0.3),'ذراع القوة العمودي','Perpendicular lever arm','المسافة الأقصر بين محور الدوران وخط عمل القوة.','The shortest distance between the pivot and the force line.');
 return {group:g,animate:function(t){g.rotation.y=0.35+Math.sin(t*0.0003)*0.2;},legend:{ar:['τ = F·r⊥، ووحدة العزم نيوتن·متر.','السهم الأخضر عمودي على الباب؛ الخط الذهبي ذراع القوة.'],en:['τ = F·r⊥, in newton metres.','Green push is perpendicular to the door; gold marks its lever arm.']}};
};
MODELS.density=function(){
 var g=new THREE.Group();
 [-1.5,1.5].forEach(function(x,k){
 f7part(g,bx(1.7,1.7,1.7,k?0x818cf8:0x7dd3fc,x,0,0,{transparent:true,opacity:0.15}),'حجم متساوٍ','Equal volume','الصندوقان لهما الحجم نفسه للمقارنة.','The boxes have equal volume for comparison.');
 var n=k?27:8,side=k?3:2;
 for(var i=0;i<n;i++){var a=i%side,b=Math.floor(i/side)%side,c=Math.floor(i/(side*side));
 f7part(g,sph(0.1,k?0xf97316:0x38bdf8,x+(a-(side-1)/2)*0.5,(b-(side-1)/2)*0.5,(c-(side-1)/2)*0.5),k?'كتلة أكبر في الحجم نفسه':'كتلة أقل في الحجم نفسه',k?'More mass in the same volume':'Less mass in the same volume','كل كرة تمثل وحدة كتلة متساوية، لا ذرة محددة.','Each ball represents an equal mass unit, not a particular atom.');}
 });
 return {group:g,animate:function(t){g.rotation.y=0.3+Math.sin(t*0.0003)*0.3;},legend:{ar:['المكعبان بالحجم نفسه؛ الأيمن يحتوي كتلة أكبر فهو أكثف.','ρ = m/V. الكرات وحدات كتلة تشبيهية وليست ذرات.'],en:['Same volumes; the right box has more mass and greater density.','ρ = m/V. Balls are schematic mass units, not atoms.']}};
};
MODELS.catalysts=function(){
 var g=new THREE.Group();
 f7part(g,cyl(0.02,5,0x94a3b8,-2.5,-1,0,2.5,-1,0),'تقدم التفاعل','Reaction progress','محور يصف مسار التحول، وليس الزمن بالضرورة.','The path of conversion, not necessarily elapsed time.');
 f7part(g,cyl(0.02,3,0x94a3b8,-2.5,-1,0,-2.5,2,0),'الطاقة','Energy axis','ارتفاع المسار يمثل طاقة النظام بشكل تخطيطي.','Path height represents system energy schematically.');
 for(var i=0;i<=100;i++){var u=i/100,x=-2.2+4.4*u,base=-0.5+0.4*u;
 var y=base+2*Math.sin(Math.PI*u),yc=base+0.65*Math.sin(Math.PI*u);
 f7part(g,sph(0.035,0xef4444,x,y,0),'مسار دون محفز','Uncatalyzed path','حاجز طاقة التنشيط أعلى في هذا الرسم.','Has the higher activation-energy barrier in this diagram.');
 f7part(g,sph(0.035,0x22c55e,x,yc,0.15),'مسار بمحفز','Catalyzed path','مسار بديل بحاجز أقل ونقطتي بداية ونهاية بالطاقة نفسها.','An alternative lower-barrier path with the same starting and ending energies.');}
 f7part(g,sph(0.12,0x38bdf8,-2.2,-0.5,0),'المتفاعلات','Reactant energy','بداية المسارين عند مستوى الطاقة نفسه.','Both paths begin at the same energy.');
 f7part(g,sph(0.12,0xfbbf24,2.2,-0.1,0),'النواتج','Product energy','نهاية المسارين عند مستوى الطاقة نفسه.','Both paths end at the same energy.');
 return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0003)*0.2;},legend:{ar:['الأخضر حاجزه أقل؛ المحفز يتجدد ولا يستهلك في المحصلة.','رسم تشبيهي؛ لا يمثل تفاعلاً بعينه أو عدد خطواته.'],en:['Green has a lower barrier; the catalyst is regenerated overall.','Schematic only, not a specific reaction or step count.']}};
};
MODELS.equilibrium=function(){
 var g=new THREE.Group();
 for(var i=0;i<7;i++)f7part(g,sph(0.18,0x38bdf8,-1.8+(i%3)*0.45,-0.5+Math.floor(i/3)*0.45,0),'متفاعل في خليط الاتزان','Reactant in equilibrium mixture','تركيزه ثابت إجمالاً، رغم استمرار التحول.','Its overall concentration stays steady while conversion continues.');
 for(var j=0;j<4;j++)f7part(g,sph(0.2,0xf97316,1.2+(j%2)*0.5,-0.3+Math.floor(j/2)*0.5,0),'ناتج في خليط الاتزان','Product in equilibrium mixture','ليس من الضروري أن يساوي تركيزه تركيز المتفاعل.','Its concentration need not equal the reactant concentration.');
 arr3(g,-0.7,1.4,0,0.7,1.4,0,0x22c55e,'التفاعل الأمامي','Forward reaction');
 note('Forward reaction','سرعته مساوية لسرعة العكسي عند الاتزان.','Its rate equals the reverse rate at equilibrium.');
 arr3(g,0.7,-1.2,0,-0.7,-1.2,0,0xa78bfa,'التفاعل العكسي','Reverse reaction');
 note('Reverse reaction','مستمر بالسرعة نفسها؛ الاتزان ليس توقفاً.','Continues at equal rate; equilibrium is not a stop.');
 return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0003)*0.25;},legend:{ar:['عدد الكرات تشبيهي: تساوي السرعتين لا يعني تساوي التراكيز.','السهمان يمثلان تحولاً مستمراً في الاتجاهين.'],en:['Schematic counts: equal rates do not mean equal concentrations.','Both arrows represent continuing conversion.']}};
};
MODELS.activetransport=function(){
 var g=new THREE.Group();
 f7part(g,bx(4.5,0.13,1.5,0x86efac,0,0,0,{transparent:true,opacity:0.5}),'الغشاء الخلوي','Transport membrane','يفصل داخل الخلية أسفل الرسم عن خارجها أعلاه.','Separates the cell interior below from the exterior above.');
 f7part(g,bx(0.7,1.0,0.65,0x8b5cf6,0,0,0),'مضخة Na+/K+','Na+/K+ pump','تستخدم ATP وتحافظ على فروق الأيونات.','Uses ATP to maintain ion differences.');
 for(var i=0;i<3;i++)f7part(g,sph(0.13,0xf97316,-1.2+i*0.35,1.0,0),'أيون صوديوم خارج','Sodium ion out','ثلاثة Na+ تخرج مقابل دخول اثنين من K+ في الدورة.','Three Na+ move out per cycle for two K+ moving in.');
 for(var j=0;j<2;j++)f7part(g,sph(0.15,0x38bdf8,0.9+j*0.4,-1.0,0),'أيون بوتاسيوم داخل','Potassium ion in','أيونان K+ يدخلان مقابل خروج ثلاثة Na+.','Two K+ move in for three Na+ moving out.');
 f7part(g,sph(0.25,0xfbbf24,-1.5,-0.9,0),'ATP - مصدر الطاقة','ATP energy source','يغذي النقل النشط الأولي مباشرة.','Directly powers primary active transport.');
 arr3(g,-0.6,-0.5,0,-0.6,0.7,0,0xf97316,'اتجاه الصوديوم للخارج','Sodium outward direction');note('Sodium outward direction','من الداخل أسفل الرسم إلى الخارج أعلاه.','From the interior below to the exterior above.');
 arr3(g,0.6,0.5,0,0.6,-0.7,0,0x38bdf8,'اتجاه البوتاسيوم للداخل','Potassium inward direction');note('Potassium inward direction','من الخارج أعلى الرسم إلى الداخل أسفله.','From the exterior above to the interior below.');
 return {group:g,animate:function(t){g.rotation.y=Math.sin(t*0.0003)*0.25;},legend:{ar:['أعلى الرسم خارج الخلية؛ أسفله داخلها.','في كل دورة: 3 Na+ للخارج، 2 K+ للداخل.'],en:['Exterior above, cell interior below.','Per cycle: 3 Na+ out, 2 K+ in.']}};
};
MODELS.transpiration=function(){
 var g=new THREE.Group();
 f7part(g,bx(3.8,0.22,1.3,0x92400e,0,-1.6,0),'التربة','Soil water source','يوفر الماء الذي تمتصه الجذور.','Supplies the water taken up by roots.');
 for(var i=-1;i<=1;i++)f7part(g,cyl(0.05,Math.sqrt(0.64+i*i),0xb45309,0,-0.8,0,i,-1.6,0),'جذر','Root','طريق دخول الماء من التربة إلى النبات.','The entry route for water from soil into the plant.');
 f7part(g,cyl(0.18,2.8,0x16a34a,0,-1.1,0,0,1.7,0),'الساق وأوعية الخشب','Stem xylem','قنوات تحمل عمود الماء نحو الأوراق.','Channels carrying the water column toward leaves.');
 var leaf=f7part(g,sph(0.8,0x22c55e,0.7,1.4,0),'الورقة','Transpiring leaf','سطح يتبخر منه الماء ويساعد في توليد الشد.','Water evaporates here and helps generate tension.');leaf.scale.set(1,0.35,0.7);
 var drops=[];for(var k=0;k<6;k++)drops.push(f7part(g,sph(0.07,0x38bdf8,0.22,-1.1+k*0.45,0),'ماء في الخشب','Water in xylem','التماسك والالتصاق يساعدان في استمرار العمود المائي.','Cohesion and adhesion help maintain the water column.'));
 for(var j=0;j<2;j++){var guard=f7part(g,sph(0.16,0x166534,1+j*0.35,1.45,0.4),'خلية حارسة','Stomatal guard cell','تنظم فتح الثغر وغلقه لتوازن تبادل الغازات وفقد الماء.','Regulates the pore to balance gas exchange and water loss.');guard.scale.y=1.5;}
 arr3(g,1.2,1.8,0.4,1.2,2.6,0.4,0x38bdf8,'بخار الماء الخارج','Escaping water vapour');note('Escaping water vapour','فقد الماء بالتبخر هو النتح.','Water loss by evaporation is transpiration.');
 return {group:g,animate:function(t){drops.forEach(function(d,k){d.position.y=-1.1+((k*0.45+t*0.0003)%2.7);});g.rotation.y=Math.sin(t*0.0003)*0.25;},legend:{ar:['الرسم يجمع النبات وثغراً مكبراً بشكل تشبيهي.','النتح يسحب الماء في الخشب؛ ليس مضخة تستخدم ATP مباشرة.'],en:['Schematic plant plus enlarged stomatal detail.','Transpiration pulls water through xylem, without directly pumping it with ATP.']}};
};
MODELS.moonphases=function(){
 var g=new THREE.Group();
 f7part(g,sph(0.6,0x2563eb,0,0,0),'الأرض - موضع الراصد','Earth - observer location','ننظر إلى القمر من الأرض، لا من موضع الكاميرا هنا.','Phases are seen from Earth, not from this camera position.');
 f7part(g,sph(0.5,0xfbbf24,3.4,0,0),'الشمس - جهة الضوء','Sun - light direction','تضيء الجانب الأيمن من كل قمر في هذا الرسم.','Illuminates the right-facing half of every Moon in this diagram.');
 var orbit=ring(2.0,0x94a3b8,0.4);orbit.rotation.x=Math.PI/2;g.add(orbit);
 var pos=[[2,0,'المحاق','New moon','الجانب المضيء بعيد عن الأرض.','The lit side faces away from Earth.'],[0,-2,'التربيع','Quarter moon','يرى راصد الأرض نصف القرص مضيئاً.','An Earth observer sees half the disk illuminated.'],[-2,0,'البدر','Full moon','الجانب المضيء يتجه نحو الأرض.','The lit side faces Earth.'],[0,2,'التربيع المقابل','Opposite quarter','نصف القرص مضيء أيضاً من الأرض.','Half the disk is illuminated from Earth here too.']];
 pos.forEach(function(p){
  var bright=new THREE.Mesh(new THREE.SphereGeometry(0.32,24,16,Math.PI/2,Math.PI),new THREE.MeshBasicMaterial({color:0xf1f5f9}));bright.position.set(p[0],0,p[1]);
  var dark=new THREE.Mesh(new THREE.SphereGeometry(0.32,24,16,-Math.PI/2,Math.PI),new THREE.MeshBasicMaterial({color:0x334155}));dark.position.copy(bright.position);
  f7part(g,bright,p[2],p[3],p[4],p[5]);f7part(g,dark,p[2],p[3],p[4],p[5]);
 });
 return {group:g,animate:function(t){g.rotation.x=0.25;g.rotation.y=Math.sin(t*0.00025)*0.15;},legend:{ar:['منظر علوي غير مقياسي؛ المواضع الأربعة أوقات مختلفة لا أربعة أقمار.','الشمس يميناً. تخيل المنظر من الأرض لفهم الأطوار.'],en:['Not-to-scale top view; four positions are different times, not four moons.','Sunlight from the right. Imagine the view from Earth to understand phases.']}};
};

var MAP = { cell:'cell', dna:'dna', atom:'atom', heart:'heart', water:'water', solar:'solar', kidney:'kidney', photosynthesis:'photosynthesis', nervous:'nervous', digestion:'digestion', blood:'blood', organelles:'organelles', tissues:'tissues', skeleton:'skeleton', muscles:'muscles', respiration:'respiration', immunity:'immunity', genetics:'genetics', evolution:'evolution', ecology:'ecology', enzymes:'enzymes', virus:'virus', brain:'brain', senses:'senses', endocrine:'endocrine', pollination:'pollination', skin:'skin', circulation:'circulation', microbiome:'microbiome', fungi:'fungi', plants:'plants', protein:'protein', neurons:'neurons', sleep:'sleep', allergy:'allergy', teeth:'teeth', homeostasis:'homeostasis', recursion:'recursion', gravity:'gravity', neural:'neural', bacteria:'bacteria', waves:'waves', triangles:'triangles', electricity:'electricity', magnetism:'magnetism', optics:'optics', motion:'motion', energy:'energy', sound:'sound', heat:'heat', buoyancy:'buoyancy', machines:'machines', pressure:'pressure', periodic:'periodic', bonds:'bonds', acidbase:'acidbase', reactions:'reactions', states:'states', solutions:'solutions', metals:'metals', organic:'organic', electrochem:'electrochem', gases:'gases' };

var LEGEND_FIXES={
atom:{ar:['الأحمر: نواة، والأزرق: إلكترونات.','الدوائر تمثيل لمستويات الطاقة وليست مسارات حرفية.'],en:['Red: nucleus; blue: electrons.','Circles symbolize energy levels, not literal electron paths.']},
heart:{ar:['عضلة القلب تضخ الدم؛ الألوان والأحجام رمزية.','الأبهر ينقل الدم إلى الجسم، والشريان الرئوي إلى الرئتين.'],en:['Heart muscle pumps blood; colors and sizes are schematic.','The aorta supplies the body; the pulmonary artery leads to the lungs.']},
genetics:{ar:['الأزرق والوردي يرمزان لوراثة من الوالدين.','البنفسجي رمز لاجتماع نسخ جينية، وليس اندماج كروموسومين في نسخة ممزوجة.'],en:['Blue and pink symbolize inheritance from the parents.','Purple symbolizes inherited gene copies, not chromosomes melting into one blended copy.']},
endocrine:{ar:['الوردي: النخامية، الأصفر: الدرقية، الأزرق: الكظرية، الأخضر: البنكرياس.','الهرمونات تصل عبر الدم، وتستجيب الخلايا التي تملك مستقبلات مناسبة.'],en:['Pink: pituitary; yellow: thyroid; blue: adrenals; green: pancreas.','Hormones travel in blood; cells with suitable receptors respond.']},
photosynthesis:{ar:['ورقة وبلاستيدات وضوء وماء وثاني أكسيد الكربون في مخطط مبسط.','تنتج تفاعلات البناء الضوئي مادة عضوية وتطلق الأكسجين.'],en:['A simplified diagram of leaf, chloroplasts, light, water and carbon dioxide.','Photosynthetic reactions build organic matter and release oxygen.']},
microbiome:{ar:['الحلقة تمثل الأمعاء، والكرات تمثل ميكروبات مختلفة.','تختلف المجتمعات بين الأشخاص، وليست كل الميكروبات نافعة دائماً.'],en:['The ring represents the gut and the balls different microbes.','Communities differ between people; not every microbe is always beneficial.']},
fungi:{ar:['المشروم جسم ثمري فطري ينتج أبواغاً، وليس زهرة.','الخيوط تمثل الميسيليوم الذي ينمو في الوسط ويمتص المغذيات.'],en:['A mushroom is a spore-producing fungal fruiting body, not a flower.','Threads represent mycelium growing through a substrate and absorbing nutrients.']},
teeth:{ar:['الأبيض: سطح التاج، والأصفر: العاج، والأحمر: اللب.','قد يبدأ التسوس قبل وجود ألم؛ الرسم ليس وسيلة لتشخيص سن.'],en:['White: crown surface; yellow: dentin; red: pulp.','Decay can begin before pain; this diagram cannot diagnose a tooth.']},
sleep:{ar:['أعمدة رمزية لبعض مراحل النوم.','تختلف مدد المراحل ودوراتها، ويمكن حدوث أحلام في أكثر من مرحلة.'],en:['Symbolic bars represent sleep stages.','Stage durations and cycles vary; dreaming can occur in more than one stage.']},
homeostasis:{ar:['مقياس رمزي لتنظيم درجة حرارة الجسم.','التنظيم يحافظ على مجال مناسب، لا على 37 درجة ثابتة في كل وقت.'],en:['A symbolic thermometer for body temperature regulation.','Regulation maintains a suitable range, not exactly 37 degrees at all times.']},
triangles:{ar:['نماذج لمثلث متساوي الأضلاع وقائم ومتساوي الساقين.','في الهندسة الإقليدية المستوية مجموع الزوايا الداخلية 180 درجة.'],en:['Examples of equilateral, right and isosceles triangles.','In Euclidean plane geometry their interior angles sum to 180 degrees.']},
electricity:{ar:['مخطط لدائرة وبطارية ومصباح؛ التوصيلات مبسطة.','حركة الشحنة هي التيار، وتتحول طاقة كهربائية إلى ضوء وطاقة حرارية.'],en:['A schematic circuit, battery and lamp; connections are simplified.','Moving charge is current; electrical energy becomes light and thermal energy.']},
heat:{ar:['الجسيمات في الوسط الأعلى حرارة تملك متوسط طاقة حركة أكبر في هذا النموذج.','الحرارة طاقة تنتقل بسبب فرق درجة الحرارة، وليست سرعة الجسيمات نفسها.'],en:['Particles in the hotter sample have greater average kinetic energy in this model.','Heat is energy transferred because of a temperature difference, not particle speed itself.']},
buoyancy:{ar:['تقارن الكثافة المتوسطة للجسم بكثافة السائل.','عند الطفو الساكن تتوازن قوة الطفو والوزن.'],en:['Compare the average density of the object with the fluid density.','At rest afloat, buoyancy balances weight.']},
acidbase:{ar:['رسم تعليمي شائع لمقياس pH من 0 إلى 14.','عند 25 مئوية: المتعادل 7، والحمضي أقل، والقاعدي أعلى.'],en:['A common teaching chart showing pH from 0 to 14.','At 25 Celsius: neutral is 7, acidic is lower, and basic is higher.']},
states:{ar:['الجسيمات تهتز في الصلب وتتحرك نسبياً في السائل وتتباعد أكثر في الغاز.','تغير حالة الماء لا يفكك جزيئه إلى هيدروجين وأكسجين.'],en:['Particles vibrate in a solid, move relative to each other in a liquid, and spread farther in gas.','Changing water phase does not split its molecules into hydrogen and oxygen.']},
organic:{ar:['حلقة بنزين: ست ذرات كربون وست ذرات هيدروجين.','الدائرة رمز للإلكترونات غير المتمركزة، وليست مداراً حرفياً.'],en:['Benzene ring: six carbon and six hydrogen atoms.','The circle symbolizes delocalized electrons, not a literal orbit.']},
electrochem:{ar:['تنتقل إلكترونات عبر المسار الخارجي وأيونات عبر الإلكتروليت.','يمكن عكس تفاعلات مناسبة في بطارية قابلة للشحن، وليس في كل البطاريات.'],en:['Electrons move through the external path and ions through the electrolyte.','Suitable reactions can be reversed in rechargeable batteries, not in every battery.']},
gases:{ar:['جسيمات غاز تتحرك؛ الألوان والأعداد والأحجام رمزية.','تساهم اصطدامات الجسيمات بجدار الوعاء في ضغط الغاز.'],en:['Moving gas particles; colors, counts and sizes are symbolic.','Particle collisions with vessel walls contribute to gas pressure.']}
};

Object.assign(MAP,{fractions:'fractions',percent:'percent',algebra:'algebra',coordinates:'coordinates',circles:'circles',solids:'solids',probability:'probability',statistics:'statistics',functions:'functions',ratios:'ratios'});

Object.assign(MAP,{integers:'integers',decimals:'decimals',orderops:'orderops',exponents:'exponents',scinotation:'scinotation',angles:'angles',perimeter:'perimeter',slope:'slope',primes:'primes',pythagoras:'pythagoras'});

Object.assign(MAP,{newton:'newton',friction:'friction',momentum:'momentum',mole:'mole',isotopes:'isotopes',reactionrate:'reactionrate',mitosis:'mitosis',osmosis:'osmosis',meiosis:'meiosis',emspectrum:'emspectrum'});

Object.assign(MAP,{torque:'torque',density:'density',catalysts:'catalysts',equilibrium:'equilibrium',activetransport:'activetransport',transpiration:'transpiration',moonphases:'moonphases'});

var EB3D = {
  available: function(id){ return !!MAP[id]; },
  mount: function(id, container, uiLang){
    var key = MAP[id];
    if(!key || !window.THREE) return false;
    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    } catch(e) { return false; }
    var W = container.clientWidth || 320, H = Math.min(420, Math.max(300, Math.round(W*0.75)));
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio||1));
    container.appendChild(renderer.domElement);

    var scene = new THREE.Scene();
    var cam = new THREE.PerspectiveCamera(45, W/H, 0.1, 100);
    cam.position.set(0, 0.6, key==='solar' ? 8.5 : 5.2);
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    var dl = new THREE.DirectionalLight(0xffffff, 0.9); dl.position.set(3,4,5); scene.add(dl);

    var m = MODELS[key]();
    if(LEGEND_FIXES[key])m.legend=LEGEND_FIXES[key];
    m.group.traverse(function(o){ if(o.userData && o.userData.label) o.userData.label=expandedLabel(o.userData.label); });
    scene.add(m.group);
    m.group.updateMatrixWorld(true);
    var bounds=new THREE.Box3().setFromObject(m.group);
    var maxX=Math.max(Math.abs(bounds.min.x),Math.abs(bounds.max.x));
    var maxY=Math.max(Math.abs(bounds.min.y),Math.abs(bounds.max.y));
    var maxZ=Math.max(Math.abs(bounds.min.z),Math.abs(bounds.max.z));
    var radius=Math.max(1.25,Math.sqrt(maxX*maxX+maxY*maxY+maxZ*maxZ));
    if(key==='motion')radius*=1.2;
    var halfV=cam.fov*Math.PI/360;
    var halfH=Math.atan(Math.tan(halfV)*W/H);
    var dist=radius/Math.sin(Math.min(halfV,halfH))*1.08;
    cam.position.set(0,dist*0.08,dist);
    cam.lookAt(0,0,0);

    // tooltip for part labels
    var tip = document.createElement('div');
    tip.className = 'd3-tip hidden';
    container.appendChild(tip);
    var raycaster = new THREE.Raycaster();
    var tipTimer = null;
    function showTip(x, y, label){
      tip.textContent = label[uiLang==='ar'?'ar':'en'];
      tip.classList.remove('hidden');
      tip.style.left = Math.max(4,Math.min(W-tip.offsetWidth-4,x-tip.offsetWidth/2)) + 'px';
      tip.style.top = Math.max(4,Math.min(H-tip.offsetHeight-4,y-20)) + 'px';
      clearTimeout(tipTimer);
      tipTimer = setTimeout(function(){ tip.classList.add('hidden'); }, 8000);
    }
    function tap(x, y){
      var rect = renderer.domElement.getBoundingClientRect();
      var ndc = new THREE.Vector2(((x-rect.left)/rect.width)*2-1, -((y-rect.top)/rect.height)*2+1);
      raycaster.setFromCamera(ndc, cam);
      var hits = raycaster.intersectObjects(m.group.children, true);
      // Prefer internal solid parts over translucent teaching shells.
      hits.sort(function(a,b){ var ma=a.object.material,mb=b.object.material; var ta=ma&&ma.transparent&&ma.opacity<0.35?1:0; var tb=mb&&mb.transparent&&mb.opacity<0.35?1:0; return ta-tb || a.distance-b.distance; });
      for(var i=0;i<hits.length;i++){
        var o = hits[i].object;
        while(o && !(o.userData && o.userData.label)) o = o.parent;
        if(o && o.userData && o.userData.label){ showTip(x-rect.left, y-rect.top, o.userData.label); return; }
      }
      tip.classList.add('hidden');
    }

    // drag to rotate; a short stationary press counts as a tap
    var dragging=false, px=0, py=0, dx=0, dy=0, downT=0, tiltX=0.15;
    var el = renderer.domElement;
    el.addEventListener('pointerdown', function(e){ dragging=true; px=e.clientX; py=e.clientY; dx=0; dy=0; downT=Date.now(); el.setPointerCapture(e.pointerId); });
    el.addEventListener('pointermove', function(e){
      if(!dragging) return;
      dx += Math.abs(e.clientX-px); dy += Math.abs(e.clientY-py);
      m.group.rotation.y += (e.clientX-px)*0.008;
      tiltX = Math.max(-1.2, Math.min(1.2, tiltX + (e.clientY-py)*0.005));
      px=e.clientX; py=e.clientY;
    });
    function up(e){
      if(dragging && dx+dy<7 && Date.now()-downT<450) tap(e.clientX, e.clientY);
      dragging=false;
    }
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', function(){ dragging=false; });
    el.style.touchAction = 'none';
    el.style.borderRadius = '16px';
    el.style.background = 'linear-gradient(180deg,#17123a,#241a5e)';

    var dead=false;
    function loop(t){
      if(dead) return;
      if(!document.body.contains(el)){ dead=true; renderer.dispose(); return; }
      if(!dragging) m.group.rotation.y += 0.004;
      m.group.rotation.x = tiltX;
      m.animate(t||0);
      renderer.render(scene, cam);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    return m.legend[uiLang==='ar'?'ar':'en'];
  }
};

window.EB3D = EB3D;
})();
