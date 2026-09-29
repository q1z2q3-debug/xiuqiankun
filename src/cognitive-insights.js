var COG_CORE_INSIGHTS = {
  '大安·太阳': {
    title: '盛夏古木',
    insight: '如千年古树立于盛夏正午，根系深扎土中，枝叶繁茂遮天。此刻你的**本心**（树根）极度稳固，**敏感度**（枝叶）全面扩张，能感知到环境的每一丝变化。**动力**（树干汁液）奔涌向上，**走向**（树冠朝向）明确指向阳光。这是一个"稳定到膨胀"的状态——稳固是优势，但膨胀本身成为新的风险。古木若只向上生长不顾根基承载，终有倾倒之日。',
    season: '盛夏正午——稳定中孕育着过度的扩张冲动',
    tension: '稳固与膨胀的张力',
    advice: '顺势而为，但设边界。你的根基足够深，可以承受扩张，但要定期回望树根，确认土壤没有板结。',
    dims: { awareness: 1, existence: 1, coupling: 1, identity: 1, letting: -1, direction: 1, energy: 1, action: 1, rhythm: 1 }
  },
  '大安·少阳': {
    title: '初春嫩芽',
    insight: '如古木在初春抽出的第一缕嫩芽，裹着越冬的褐色芽鳞，内里却是翠绿的生机。此刻你的**本心**依然古木般沉稳，但**敏感度**开始从冬眠中苏醒，**动力**从冰封的土壤里缓缓回升。**走向**不再固守原地，而是试探着向光的方向偏移。这是一个"稳定中孕育变化"的过渡期——既有古木的定力，又有新芽的渴望。',
    season: '初春回暖——稳定中孕育温和的生长冲动',
    tension: '守成与试探的张力',
    advice: '以古木之稳托新芽之探。不必急于全面展开，让变化从最有把握的维度开始渗透。',
    dims: { awareness: 1, existence: 1, coupling: 1, identity: 0, letting: 0, direction: 1, energy: 0, action: 0, rhythm: 0 }
  },
  '大安·平衡': {
    title: '四季常青',
    insight: '如古木在四季轮转中始终保持同样的苍翠，不随春花秋叶而盛衰。此刻你的**本心**与**敏感度**、**动力**与**走向**达成一种精妙的均衡——既非扩张也非收敛，而是悬停在一个自洽的节点上。**连接感**（树皮与空气的交换）平稳，**放手力**（落叶的意愿）适中，**身份感**（年轮的记忆）清晰但不执着。这是大安最理想的"纯安"状态——各维度和谐共振。',
    season: '春分秋分——各维度和谐共振的均衡点',
    tension: '无显著张力，内在自洽',
    advice: '维持现状即是胜利。此刻不宜扰动任何维度，让各股力量在无声中自我调适。',
    dims: { awareness: 0, existence: 1, coupling: 0, identity: 0, letting: 0, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '大安·少阴': {
    title: '深秋落叶',
    insight: '如古木在深秋开始落叶，叶片从翠绿转为金黄，纷纷归于树根。**敏感度**（叶片的感知）逐渐收敛，**动力**（汁液流动）向下沉降，**走向**（树冠朝向）开始回望根部。但**本心**（树干）依然稳固——落叶不是死亡，是古木保存能量的智慧。**连接感**（树皮与空气）变得稀疏，**放手力**（落叶的自然）增强，这是一个"稳定中内收"的整理期。',
    season: '深秋初霜——稳定中能量开始向内沉降',
    tension: '收缩与保存的张力',
    advice: '顺势内收，以守代攻。此刻的收敛是为了下一个生长季的蓄力，不要误以为是衰败。',
    dims: { awareness: -1, existence: 1, coupling: -1, identity: 0, letting: 1, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '大安·太阴': {
    title: '寒冬古木',
    insight: '如古木在寒冬褪去所有叶片，枝干裸露于风雪之中。此刻你的**敏感度**降至最低（无叶可感），**动力**几近停滞（汁液凝固），**走向**完全内指（枝干蜷缩）。但**本心**——那根扎入冻土的根系——依然在无声中呼吸。古木的寒冬不是死亡，是生命选择了最深沉的等待。**身份感**（年轮的沉淀）反而因褪去一切外在而更加清晰。',
    season: '深冬寒夜——稳定到极致的内缩与等待',
    tension: '外在沉寂与内在坚守的张力',
    advice: '深守本心，任外界风雪呼啸。此刻任何扩张都是徒劳，唯有根系在冻土下的微弱呼吸是真实的。',
    dims: { awareness: -1, existence: 1, coupling: -1, identity: 1, letting: 1, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '大安·悬置': {
    title: '雾中古木',
    insight: '如古木被晨雾笼罩，枝叶模糊，轮廓隐约可见但细节尽失。此刻你的**敏感度**、**动力**、**走向**都被雾气稀释，只剩**本心**（树干）在雾中若隐若现地矗立。**连接感**（树皮与雾气的水汽交换）变得稀薄而不可捉摸，**放手力**（雾气的不执着）异常高涨——因为没有什么可执着的。这是大安最不"安"的状态——稳定感被不确定性侵蚀。',
    season: '晨雾弥漫——稳定感被不确定性侵蚀',
    tension: '确定与不确定的张力',
    advice: '不急于驱散迷雾，让古木在雾中静默站立。此刻不宜做任何需要清晰判断的决策。',
    dims: { awareness: 0, existence: 1, coupling: 0, identity: 0, letting: 1, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '大安·杂化': {
    title: '风雨古木',
    insight: '如古木在风雨交加中，一侧枝叶被狂风压弯，另一侧却迎雨舒展。**敏感度**在不同方向上截然相反——对某些信号极度敏感，对另一些全然麻木。**动力**在枝干间冲撞，形成内部的涡流。**走向**被风雨撕扯得支离破碎，没有一个统一的方向。但**本心**（树干）依然在风雨中屹立——这是大安最考验根基的状态：外在混乱，内在仍要求稳。',
    season: '风雨交加——稳定遭遇外在混乱的冲击',
    tension: '统一与分裂的张力',
    advice: '以树干之稳应对枝叶之乱。不必试图统一所有矛盾的方向，先确认根基无损，再逐一梳理。',
    dims: { awareness: 1, existence: 1, coupling: -1, identity: -1, letting: -1, direction: 1, energy: 1, action: -1, rhythm: 0 }
  },

  '留连·太阳': {
    title: '盛夏深潭',
    insight: '如深潭在盛夏正午，水面平静如镜，水底却涌动着看不见的暗流。此刻你的**本心**（潭底）虽然深潜，但**敏感度**（水面反光）全面扩张，能映照天空的每一朵云。**动力**（暗流）在深处加速，**走向**（水流方向）被表面的平静掩盖。留连的"缓"在太阳态下变成了一种"深层的活跃"——表面不动声色，内里波涛汹涌。',
    season: '盛夏正午——深层的暗流被表面的平静掩盖',
    tension: '表面与深层的张力',
    advice: '不要轻信水面的平静。此刻的暗流正在积蓄力量，顺势而为但要设防——水满则溢。',
    dims: { awareness: 1, existence: -1, coupling: -1, identity: -1, letting: 1, direction: 1, energy: 1, action: 1, rhythm: 1 }
  },
  '留连·少阳': {
    title: '初春解冻',
    insight: '如深潭在初春开始解冻，冰层边缘出现裂纹，潭水从冰下缓缓渗出。**敏感度**从冰封的隔绝中苏醒，**动力**（暗流）开始试探性地流动，**走向**（水流方向）从完全停滞转向轻微偏移。留连的"缓"在这个相位下有了"松动"的迹象——不是突然的破冰，而是裂纹的缓慢扩展。',
    season: '初春回暖——冰封开始松动，暗流试探性流动',
    tension: '停滞与松动的张力',
    advice: '让裂纹自然扩展，不要急于破冰。此刻的松动是真实的，但力量还不足以支撑大的行动。',
    dims: { awareness: 0, existence: -1, coupling: -1, identity: 0, letting: 1, direction: 1, energy: 0, action: 0, rhythm: 0 }
  },
  '留连·平衡': {
    title: '四季深潭',
    insight: '如深潭在四季轮转中始终保持着同样的水位——不增不减，不浊不清。此刻你的**本心**（潭底泥沙）与**敏感度**（水面）达成一种默契：你不搅动我，我不淹没你。**动力**（暗流）与**走向**（水流方向）处于一种精妙的平衡——暗流在潭底打转却不外溢，方向在封闭中循环却不突破。',
    season: '四季如一——封闭中的自洽循环',
    tension: '封闭与开放的张力',
    advice: '接受封闭即是当下最优解。强行打开潭口可能引入浑浊，保持循环即是净化。',
    dims: { awareness: 0, existence: -1, coupling: 0, identity: 0, letting: 1, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '留连·少阴': {
    title: '深秋沉水',
    insight: '如深潭在深秋水位下降，水面缩进岸边的芦苇丛中，露出潮湿的淤泥。**敏感度**（水面面积）收缩，**动力**（暗流）减速，**走向**（水流方向）指向更深处。留连的"缓"在这个相位下变成"下沉"——不是停滞，而是向更深、更暗、更不可见的地方移动。',
    season: '深秋水位下降——向更深更暗处沉降',
    tension: '可见与不可见的张力',
    advice: '顺应下沉的趋势，但不要溺于淤泥。此刻向深处去是为了寻找更纯净的源头。',
    dims: { awareness: -1, existence: -1, coupling: 0, identity: 0, letting: 1, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '留连·太阴': {
    title: '寒冬冰潭',
    insight: '如深潭在寒冬完全封冻，冰层厚到可以承载行人。此刻你的**敏感度**被冰层完全隔绝，**动力**在冰下凝固成静止的水柱，**走向**失去所有方向——只有向下，但深处也是黑暗。**本心**（潭底泥沙）在冰封中被遗忘，**身份感**（潭的边界）因冰层的扩展而变得模糊——是潭还是冰？',
    season: '深冬封冻——隔绝、凝固、失去边界',
    tension: '存在与消融的张力',
    advice: '在冰层下保持泥沙的呼吸。此刻任何破冰的企图都可能引发冰裂，等待是唯一的智慧。',
    dims: { awareness: -1, existence: -1, coupling: -1, identity: -1, letting: 1, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '留连·悬置': {
    title: '雾中深潭',
    insight: '如深潭被浓雾笼罩，水面与空气融为一体，分不清哪里是水、哪里是雾。**敏感度**被雾气稀释成无边界的感知，**动力**（暗流）在雾中迷失方向，**走向**（水流方向）在雾的旋转中消失。留连的"缓"在悬置态下变成"悬浮"——不在水中，不在空中，而在一个无重力的夹缝里。',
    season: '晨雾弥漫——水与雾的边界消失',
    tension: '实体与虚空的张力',
    advice: '不急于确认自己的位置。此刻的悬浮是过渡期，等待雾散自然见水。',
    dims: { awareness: 0, existence: -1, coupling: 0, identity: 0, letting: 1, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '留连·杂化': {
    title: '风雨深潭',
    insight: '如深潭在暴雨中，一侧雨水砸出密集的水花，另一侧却被岸边的古木遮挡。**敏感度**在不同方向截然相反——对雨滴极度敏感，对古木遮蔽区全然麻木。**动力**（雨水+暗流+风的合力）形成混乱的漩涡，**走向**（水流方向）被三种力量撕扯。留连的"缓"在杂化态下变成"被动的混乱"——不主动搅动，却被外界搅得不得安宁。',
    season: '暴雨倾盆——被动卷入外在的混乱',
    tension: '被动与混乱的张力',
    advice: '承认混乱是此刻的真实状态，不要试图用"缓"来逃避。找出最混乱的维度，优先稳定它。',
    dims: { awareness: 1, existence: -1, coupling: 1, identity: -1, letting: 1, direction: 1, energy: 1, action: -1, rhythm: 0 }
  },

  '速喜·太阳': {
    title: '盛夏烈焰',
    insight: '如烈焰在盛夏正午燃烧到最旺，火焰的颜色从橙红转为白炽，温度高到连空气都在颤抖。此刻你的**动力**（火焰高度）全面爆发，**敏感度**（火焰对风的反应）极度敏锐，**走向**（火焰的舔舐方向）明确指向所有可燃之物。速喜的"快"在太阳态下变成"炽烈"——不是快速的喜悦，而是燃烧到失控边缘的狂喜。',
    season: '盛夏正午——燃烧到白炽的狂喜',
    tension: '燃烧与焚毁的张力',
    advice: '享受此刻的炽烈，但要预设防火边界。最旺的火焰离灰烬只有一步之遥。',
    dims: { awareness: 1, existence: 1, coupling: 1, identity: 1, letting: -1, direction: 1, energy: 1, action: 1, rhythm: 1 }
  },
  '速喜·少阳': {
    title: '初春火苗',
    insight: '如初春的第一缕火苗，在残冬的枯枝间试探性地跳跃。**动力**（火苗高度）尚不高，但**敏感度**（对风的反应）已经敏锐——春风一吹，火焰便欢快地舞蹈。**走向**（火焰蔓延方向）沿着枯枝缓慢推进，留下一条黑色的痕迹。速喜的"快"在这个相位下是"初生的快"——带着试探和不确定，但潜力已经可见。',
    season: '初春回暖——试探性燃烧的初生喜悦',
    tension: '试探与绽放的张力',
    advice: '给火苗足够的空间和氧气。此刻不宜压制，也不宜加速——让它按自己的节奏生长。',
    dims: { awareness: 1, existence: 1, coupling: 1, identity: 0, letting: -1, direction: 1, energy: 0, action: 0, rhythm: 0 }
  },
  '速喜·平衡': {
    title: '四季温火',
    insight: '如篝火在四季轮转中始终保持着同样的高度——不猛不弱，不烫不凉。**动力**（火焰高度）稳定，**敏感度**（对风的反应）适中，**走向**（火焰蔓延方向）可控。速喜的"快"在这个相位下被驯服了——不是狂喜的爆发，而是温热的持久。**放手力**（不再添柴的意愿）与**行动力**（添柴的动作）达成默契：维持，但不扩张。',
    season: '四季如一——被驯服的温热喜悦',
    tension: '维持与扩张的张力',
    advice: '保持当前的温度即是最佳策略。添柴太多会过旺，撤柴太多会熄灭。',
    dims: { awareness: 0, existence: 1, coupling: 0, identity: 0, letting: 0, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '速喜·少阴': {
    title: '深秋余烬',
    insight: '如篝火在深秋逐渐熄灭，火焰退化为暗红的余烬，偶尔迸出一两点火星。**动力**（火焰高度）急剧下降，**敏感度**（对风的反应）减弱，**走向**（火焰蔓延方向）收缩到只剩中心的一点温热。速喜的"快"在这个相位下变成"余韵"——不是喜悦的终结，而是喜悦换一种形式存在：从可见的火焰转为可感的温度。',
    season: '深秋降温——从火焰退化为余烬',
    tension: '消逝与转化的张力',
    advice: '不急于复燃，让余烬的温度自然散去。此刻的余韵比强行复燃更接近真实。',
    dims: { awareness: -1, existence: 1, coupling: -1, identity: 0, letting: 0, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '速喜·太阴': {
    title: '寒冬死灰',
    insight: '如篝火在寒冬彻底熄灭，只剩一堆苍白的灰烬，偶尔被风吹起一阵烟尘。**动力**完全消失，**敏感度**降至只对强风有反应，**走向**失去所有方向——只有向上飘散的烟尘。速喜的"快"在这个相位下变成"灰烬的飞散"——曾经炽烈的喜悦，如今只剩轻盈的虚无。',
    season: '深冬寒夜——从灰烬到虚无',
    tension: '虚无与记忆的张力',
    advice: '接受灰烬的状态。此刻强行复燃只会得到短暂的虚火，不如让灰烬归于尘土。',
    dims: { awareness: -1, existence: 1, coupling: -1, identity: 1, letting: 1, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '速喜·悬置': {
    title: '雾中烟火',
    insight: '如烟火在浓雾中发射，火焰的光被雾气散射成模糊的光晕。**动力**（火焰高度）尚可，但**敏感度**（对风的反应）被雾气干扰得混乱，**走向**（火焰蔓延方向）在雾中消失。速喜的"快"在悬置态下变成"模糊的绽放"——你知道喜悦在发生，但看不清它在哪里、要去哪里。',
    season: '晨雾弥漫——喜悦在雾中模糊绽放',
    tension: '清晰与模糊的张力',
    advice: '不急于确认喜悦的形状。让烟火在雾中自行消散，此刻的模糊是真实的。',
    dims: { awareness: 0, existence: 1, coupling: 0, identity: 0, letting: 1, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '速喜·杂化': {
    title: '风雨烈焰',
    insight: '如篝火在暴风雨中，一侧被雨水浇得滋滋冒烟，另一侧却在风助下燃得更旺。**敏感度**在不同方向截然相反——对风极度敏感，对雨全然抵抗。**动力**被撕扯成两个极端：一半是蒸发的白汽，一半是炽烈的火焰。**走向**（火焰蔓延方向）完全不可预测。速喜的"快"在杂化态下变成"撕裂的快"——喜悦被外力撕成两半。',
    season: '风雨交加——喜悦被外力撕裂',
    tension: '撕裂与完整的张力',
    advice: '接受喜悦的两面性。不要试图统一矛盾——此刻的撕裂本身就是真实的状态。',
    dims: { awareness: 1, existence: 1, coupling: -1, identity: -1, letting: -1, direction: 1, energy: 1, action: -1, rhythm: 0 }
  },

  '赤口·太阳': {
    title: '盛夏利刃',
    insight: '如利刃在盛夏正午反射阳光，刀锋的光芒刺眼到无法直视。**动力**（挥刀的速度）全面爆发，**敏感度**（对障碍的反应）极度敏锐，**走向**（劈砍方向）明确指向所有阻碍之物。赤口的"争"在太阳态下变成"切割"——不是争论的交锋，而是刀锋对骨骼的精准解剖。**身份感**（刀锋的锋利度）膨胀到认为自己是唯一的存在。',
    season: '盛夏正午——利刃反射白炽光芒',
    tension: '切割与完整的张力',
    advice: '确认你的刀锋指向正确的目标。此刻的切割力是真实的，但误伤无辜的后果也是真实的。',
    dims: { awareness: 1, existence: -1, coupling: -1, identity: -1, letting: -1, direction: 1, energy: 1, action: 1, rhythm: 1 }
  },
  '赤口·少阳': {
    title: '初春磨刀',
    insight: '如铁匠在初春开始磨刀，石粉飞溅，刀锋从钝到利的过渡。**动力**（磨刀的速度）不急不缓，**敏感度**（对刀锋曲线的感知）在磨砺中逐渐敏锐，**走向**（刀刃朝向）从钝圆的侧面转向锋利的正面。赤口的"争"在这个相位下是"准备中的争"——不是已经投入战斗，而是在为战斗做准备。',
    season: '初春回暖——从钝到利的磨刀声',
    tension: '钝与利的张力',
    advice: '享受磨刀的过程，不要急于试刀。此刻的钝是为了未来的利。',
    dims: { awareness: 1, existence: -1, coupling: -1, identity: 0, letting: -1, direction: 1, energy: 0, action: 0, rhythm: 0 }
  },
  '赤口·平衡': {
    title: '四季匕首',
    insight: '如匕首在四季轮转中始终保持着同样的锋利——不更钝，不更利，不锈不亮。**动力**（挥动的速度）稳定，**敏感度**（对障碍的反应）适中，**走向**（劈砍方向）可控。赤口的"争"在这个相位下被驯服了——不是战斗的激情，而是常备的警觉。**放手力**（收刀的意愿）与**行动力**（拔刀的动作）达成默契：随时准备，但不轻启。',
    season: '四季如一——常备的警觉而非战斗',
    tension: '警觉与轻启的张力',
    advice: '保持刀锋的锋利，但不要轻易拔出。此刻的威慑力比实际的切割更有价值。',
    dims: { awareness: 0, existence: -1, coupling: 0, identity: 0, letting: 0, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '赤口·少阴': {
    title: '深秋卷刃',
    insight: '如利刃在深秋开始卷刃，刀锋从直线变成锯齿，切割时发出撕裂的声音。**动力**（挥刀的速度）减慢，**敏感度**（对障碍的反应）迟钝，**走向**（劈砍方向）开始回避硬物。赤口的"争"在这个相位下变成"回避的争"——不是正面的交锋，而是选择软柿子。',
    season: '深秋降温——刀锋卷刃后的回避',
    tension: '交锋与回避的张力',
    advice: '承认刀锋已钝，不要硬砍。此刻的回避不是懦弱，是对工具的尊重。',
    dims: { awareness: -1, existence: -1, coupling: 0, identity: 0, letting: 0, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '赤口·太阴': {
    title: '寒冬锈刀',
    insight: '如利刃在寒冬被弃置，刀锋结满红褐色的锈斑，曾经的光芒被铁锈吞噬。**动力**完全消失，**敏感度**降至只对自己生锈的缓慢过程有反应，**走向**失去所有方向——只有向下坠落，被重力拉入泥土。赤口的"争"在这个相位下变成"锈的沉默"——曾经最锋利的存在，如今连切割自己的锈迹都做不到。',
    season: '深冬寒夜——被铁锈吞噬的沉默',
    tension: '锋利与锈蚀的张力',
    advice: '接受锈蚀的状态。此刻任何拔刀的动作都会让锈斑脱落、刀身断裂。',
    dims: { awareness: -1, existence: -1, coupling: -1, identity: -1, letting: 1, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '赤口·悬置': {
    title: '雾中刀光',
    insight: '如利刃在浓雾中挥动，刀光被雾气散射成模糊的银弧。**动力**（挥刀的速度）尚可，但**敏感度**（对障碍的反应）被雾气干扰得混乱，**走向**（劈砍方向）在雾中消失。赤口的"争"在悬置态下变成"盲目的挥砍"——你知道自己在战斗，但看不清敌人在哪里。',
    season: '晨雾弥漫——盲目的挥砍',
    tension: '战斗与盲目的张力',
    advice: '停止挥砍，等待雾散。此刻的盲目攻击只会伤及无辜或空耗体力。',
    dims: { awareness: 0, existence: -1, coupling: 0, identity: 0, letting: 1, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '赤口·杂化': {
    title: '风雨刀舞',
    insight: '如刀客在暴风雨中起舞，雨水模糊了刀光，狂风改变了刀路。**敏感度**在不同方向截然相反——对风声极度敏感，对雨声全然抵抗。**动力**被撕扯成两个极端：一半是风助的加速，一半是雨阻的减速。**走向**（刀路方向）完全不可预测。赤口的"争"在杂化态下变成"混乱的舞蹈"——不是战斗，是求生。',
    season: '风雨交加——混乱中的求生之舞',
    tension: '混乱与秩序的张力',
    advice: '不求统一刀路，只求不被风雨击倒。此刻的混乱是真实的环境，适应它而非征服它。',
    dims: { awareness: 1, existence: -1, coupling: 1, identity: -1, letting: -1, direction: 1, energy: 1, action: -1, rhythm: 0 }
  },

  '小吉·太阳': {
    title: '盛夏和风',
    insight: '如和风在盛夏正午吹拂，带着花香的温度，不急不躁地掠过皮肤。**动力**（风速）温和但全面，**敏感度**（对温度的反应）舒适，**走向**（风向）明确但不强势。小吉的"和"在太阳态下变成"煦暖的和"——不是妥协的调和，而是阳光般自然的融合。',
    season: '盛夏正午——煦暖而全面的融合',
    tension: '融合与淹没的张力',
    advice: '享受此刻的煦暖，但不要试图温暖所有人。和风的边界在于——它吹过，但不改变万物。',
    dims: { awareness: 1, existence: 1, coupling: 1, identity: 1, letting: 1, direction: 1, energy: 1, action: 1, rhythm: 1 }
  },
  '小吉·少阳': {
    title: '初春微风',
    insight: '如初春的第一缕微风，从南边的窗口吹入，带着解冻土壤的湿润气息。**动力**（风速）尚弱，但**敏感度**（对气味的反应）已经敏锐——你能闻到风中的泥土味。**走向**（风向）从单一的南风向四周扩散。小吉的"和"在这个相位下是"初生的和"——带着试探，但潜力可见。',
    season: '初春回暖——试探性的温和融合',
    tension: '试探与扩散的张力',
    advice: '让微风自然扩散，不要急于扇动。此刻的温和是真实的，但力量还不足以改变大局。',
    dims: { awareness: 1, existence: 1, coupling: 1, identity: 0, letting: 1, direction: 1, energy: 0, action: 0, rhythm: 0 }
  },
  '小吉·平衡': {
    title: '四季清风',
    insight: '如清风在四季轮转中始终保持着同样的温度和湿度——不冷不热，不干不湿。**动力**（风速）稳定，**敏感度**（对温度的反应）适中，**走向**（风向）可控。小吉的"和"在这个相位下是"常态的和"——不是特殊的恩赐，而是日常的背景。',
    season: '四季如一——常态的背景之和',
    tension: '背景与突出的张力',
    advice: '把此刻的和当作呼吸一样自然。不必感恩，不必珍惜——它就是存在本身。',
    dims: { awareness: 0, existence: 1, coupling: 0, identity: 0, letting: 1, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '小吉·少阴': {
    title: '深秋凉风',
    insight: '如秋风在深秋开始变凉，从温和转向刺骨，带着落叶的萧瑟。**动力**（风速）不减，但**温度**下降，**走向**（风向）开始转向北方。小吉的"和"在这个相位下变成"凉薄的和"——不是温暖的融合，而是疏离的共存。',
    season: '深秋降温——从温暖到凉薄的疏离',
    tension: '温暖与凉薄的张力',
    advice: '接受凉薄是"和"的另一种形态。此刻的疏离不是决裂，是季节的自然更替。',
    dims: { awareness: -1, existence: 1, coupling: -1, identity: 0, letting: 1, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '小吉·太阴': {
    title: '寒风刺骨',
    insight: '如寒风在寒冬彻底变成刺骨的利刃，切割皮肤，穿透衣物。**动力**（风速）可能不强，但**温度**的杀伤力极大，**走向**（风向）只有一个目的——带走所有热量。小吉的"和"在这个相位下变成"冻的和"——不是融合的和谐，而是被冻结的静止。',
    season: '深冬寒夜——冻的静止而非融合',
    tension: '静止与死亡的张力',
    advice: '在冻的静止中保持内部的温暖。此刻的"和"不是与外界融合，是与自己和解。',
    dims: { awareness: -1, existence: 1, coupling: -1, identity: 1, letting: 1, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '小吉·悬置': {
    title: '雾中风息',
    insight: '如和风在浓雾中失去方向，雾气太重，风推不动，只能在原地打转。**动力**（风速）被雾气阻尼，**敏感度**（对温度的反应）被雾气稀释，**走向**（风向）在雾中消失。小吉的"和"在悬置态下变成"无力的和"——你想融合，但找不到融合的对象。',
    season: '晨雾弥漫——想融合却找不到对象',
    tension: '融合与孤独的张力',
    advice: '不急于寻找融合的对象。让风在雾中休息，此刻的孤独是过渡期。',
    dims: { awareness: 0, existence: 1, coupling: 0, identity: 0, letting: 1, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '小吉·杂化': {
    title: '风雨交加的和',
    insight: '如和风在暴风雨中，一侧被狂风撕成碎片，另一侧却在雨幕中保持温柔。**敏感度**在不同方向截然相反——对风极度敏感，对雨全然抵抗。**动力**被撕扯成两个极端：一半是暴风的怒吼，一半是细雨的轻吟。**走向**（风向）完全不可预测。小吉的"和"在杂化态下变成"碎片化的和"——不是统一的融合，是局部的妥协。',
    season: '风雨交加——碎片化的局部妥协',
    tension: '统一与碎片的张力',
    advice: '接受碎片化的和。不要试图统一所有矛盾——此刻的局部妥协本身就是智慧。',
    dims: { awareness: 1, existence: 1, coupling: -1, identity: -1, letting: 1, direction: 1, energy: 1, action: -1, rhythm: 0 }
  },

  '空亡·太阳': {
    title: '盛夏虚空',
    insight: '如盛夏正午的虚空，阳光炽烈到让影子消失，万物在强光下失去轮廓。**动力**（光的强度）全面爆发，但**敏感度**（对阴影的感知）完全丧失——没有阴影就没有深度。**走向**（光线方向）明确指向正下方，但正下方只有虚无。空亡的"空"在太阳态下变成"满溢的空"——不是无物的空，是被过度填充后的窒息。',
    season: '盛夏正午——被过度填充后的窒息之空',
    tension: '满溢与虚空的张力',
    advice: '承认此刻的满溢是另一种形式的空。强光之下，万物平等地失去轮廓——包括你自己。',
    dims: { awareness: 1, existence: -1, coupling: -1, identity: -1, letting: 1, direction: 1, energy: 1, action: 1, rhythm: 1 }
  },
  '空亡·少阳': {
    title: '初春融冰',
    insight: '如初春冰面开始融化，裂缝中出现第一缕活水，但冰层依然覆盖着大部分水面。**动力**（融化的速度）缓慢但可见，**敏感度**（对温度变化的反应）敏锐——你能感觉到冰下的流动。**走向**（水流方向）从冰层的裂缝中向外渗透。空亡的"空"在这个相位下是"正在形成的空"——不是绝对的虚无，是冰与水的过渡期。',
    season: '初春回暖——冰与水的过渡期',
    tension: '实体与虚空的张力',
    advice: '欣赏裂缝中的活水，但不要急于破冰。此刻的空正在形成，给它时间。',
    dims: { awareness: 1, existence: -1, coupling: -1, identity: 0, letting: 1, direction: 1, energy: 0, action: 0, rhythm: 0 }
  },
  '空亡·平衡': {
    title: '四季空洞',
    insight: '如洞穴在四季轮转中始终保持着同样的黑暗——不深不浅，不明不暗，不冷不热。**动力**（洞内气流）稳定，**敏感度**（对光线的反应）适中，**走向**（气流方向）循环。空亡的"空"在这个相位下是"常态的空"——不是特殊的缺失，而是存在的背景。',
    season: '四季如一——常态的黑暗背景',
    tension: '背景与前景的张力',
    advice: '把此刻的空当作画布。画布本身不是画，但没有画布就没有画。',
    dims: { awareness: 0, existence: -1, coupling: 0, identity: 0, letting: 1, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '空亡·少阴': {
    title: '深秋陷落',
    insight: '如洞穴在深秋开始下沉，洞顶的石块松动，地面出现新的裂缝。**动力**（下沉的速度）缓慢但持续，**敏感度**（对震动的反应）增强——你能听到石块摩擦的声音。**走向**（下沉方向）指向更深的黑暗。空亡的"空"在这个相位下变成"扩大的空"——不是静止的虚无，是正在吞噬更多的虚空。',
    season: '深秋降温——正在扩大的虚空',
    tension: '稳定与崩塌的张力',
    advice: '在扩大的虚空中保持站立。此刻的下沉不是结束，是洞穴在寻找新的形状。',
    dims: { awareness: -1, existence: -1, coupling: 0, identity: 0, letting: 1, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '空亡·太阴': {
    title: '寒冬深渊',
    insight: '如洞穴在寒冬彻底坍塌，入口被冰雪封死，内部只剩绝对的黑暗和寂静。**动力**完全消失，**敏感度**降至只对温度有反应，**走向**失去所有方向——只有向下，但深处也是同样的黑暗。空亡的"空"在这个相位下变成"深渊的空"——不是可以填充的容器，是不可测量的缺失。',
    season: '深冬寒夜——不可测量的深渊之空',
    tension: '存在与缺失的张力',
    advice: '在深渊中保持呼吸。此刻的空是不可测量的，但你的呼吸是可测量的——它是你与空之间的边界。',
    dims: { awareness: -1, existence: -1, coupling: -1, identity: -1, letting: 1, direction: -1, energy: -1, action: -1, rhythm: -1 }
  },
  '空亡·悬置': {
    title: '雾中空穴',
    insight: '如洞穴被浓雾灌满，雾气从洞口涌入，填满所有缝隙，让洞穴变成雾的一部分。**动力**（气流）被雾气阻尼，**敏感度**（对光线的反应）被雾气稀释，**走向**（气流方向）在雾中消失。空亡的"空"在悬置态下变成"被填充的空"——你想保留虚空，但外界不断涌入。',
    season: '晨雾弥漫——被外界填充的虚空',
    tension: '保留与涌入的张力',
    advice: '接受被填充的空。此刻的雾气不是入侵，是虚空与外界达成的新平衡。',
    dims: { awareness: 0, existence: -1, coupling: 0, identity: 0, letting: 1, direction: 0, energy: 0, action: 0, rhythm: 0 }
  },
  '空亡·杂化': {
    title: '风雨废墟',
    insight: '如洞穴在暴风雨中，一侧被雨水冲刷出新的通道，另一侧却在狂风中被封死。**敏感度**在不同方向截然相反——对水极度敏感，对风全然抵抗。**动力**被撕扯成两个极端：一半是水的侵蚀，一半是风的堆积。**走向**（洞穴变化方向）完全不可预测。空亡的"空"在杂化态下变成"动态的空"——不是静止的缺失，是被外力不断重塑的虚空。',
    season: '风雨交加——被外力不断重塑的虚空',
    tension: '重塑与坚守的张力',
    advice: '接受动态的空。不要试图阻止侵蚀或堆积——此刻的空本身就是变化的产物。',
    dims: { awareness: 1, existence: -1, coupling: 1, identity: -1, letting: 1, direction: 1, energy: 1, action: -1, rhythm: 0 }
  }
};

// 类别映射：每种问事关注的维度和解读方式
var COG_CATEGORY_FOCUS = {
  '问事': {
    focus: ['方向','能量','行动倾向'],
    lens: '事态本身的走向',
    advicePrefix: '此刻的事态'
  },
  '感情': {
    focus: ['觉知','纯粹存在','体感耦合'],
    lens: '关系的温度与深度',
    advicePrefix: '此刻的关系'
  },
  '事业': {
    focus: ['方向','能量','自我识别'],
    lens: '事业的势能与发展',
    advicePrefix: '此刻的事业'
  },
  '财运': {
    focus: ['能量','行动倾向','时间节律'],
    lens: '财富的流动与时机',
    advicePrefix: '此刻的财富'
  },
  '健康': {
    focus: ['纯粹存在','体感耦合','放手力'],
    lens: '身体的觉知与调养',
    advicePrefix: '此刻的身体'
  },
  '出行': {
    focus: ['方向','时间节律','觉知'],
    lens: '行程的方向与安全',
    advicePrefix: '此刻的行程'
  },
  '寻人': {
    focus: ['觉知','方向','能量'],
    lens: '寻找的线索与方位',
    advicePrefix: '此刻的寻找'
  },
  '失物': {
    focus: ['觉知','体感耦合','时间节律'],
    lens: '物品的归属与时机',
    advicePrefix: '此刻的失物'
  }
};

// 动态断语生成函数
function generateCogAdvice(palaceName, phaseName, category, vector) {
  var key = palaceName + '·' + phaseName;
  var core = COG_CORE_INSIGHTS[key];
  if (!core) core = COG_CORE_INSIGHTS['大安·杂化']; // fallback
  
  var cat = COG_CATEGORY_FOCUS[category];
  if (!cat) cat = COG_CATEGORY_FOCUS['问事'];
  
  // 提取该类别关注的维度值
  var focusValues = [];
  var focusNames = [];
  for (var i = 0; i < cat.focus.length; i++) {
    var dimIdx = COG_DIM_NAMES.indexOf(cat.focus[i]);
    if (dimIdx >= 0) {
      focusValues.push(vector[dimIdx]);
      focusNames.push(cat.focus[i]);
    }
  }
  
  // 构建类别特定建议
  var catAdvice = cat.advicePrefix + '处于' + core.season + '。';
  
  // 根据关注维度的值生成具体建议
  var posCount = 0, negCount = 0, zeroCount = 0;
  for (var i = 0; i < focusValues.length; i++) {
    if (focusValues[i] === 1) posCount++;
    else if (focusValues[i] === -1) negCount++;
    else zeroCount++;
  }
  
  if (posCount >= 2) {
    catAdvice += '你关注的' + cat.lens + '正处于扩张期，适合积极推进，但注意防过刚。';
  } else if (negCount >= 2) {
    catAdvice += '你关注的' + cat.lens + '正处于收敛期，适合收缩保存，等待转机。';
  } else if (zeroCount >= 2) {
    catAdvice += '你关注的' + cat.lens + '正处于悬置期，不宜急动，宜观察待机。';
  } else {
    catAdvice += '你关注的' + cat.lens + '处于交织状态，适合分而治之，逐个维度调整。';
  }
  
  return {
    title: core.title,
    insight: core.insight,
    season: core.season,
    tension: core.tension,
    advice: core.advice,
    categoryAdvice: catAdvice,
    categoryFocus: cat.focus,
    focusValues: focusValues
  };
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COG_CORE_INSIGHTS, COG_CATEGORY_FOCUS, generateCogAdvice };
}