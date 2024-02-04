import{eL as e,A as t,eM as a,S as s,c4 as n,L as i,o as r,p as o,eN as l,E as d,cf as c,cg as m,ch as p,cj as h,cd as g,a0 as S,ab as u,F as f,az as I,bl as P,w as v,B as O,aA as A,d$ as y,dX as R,K as b,e0 as k,g as w,t as E,aP as T,bA as x}from"./detailed_results-47f39951.chunk.js";import{a as B,t as C,m as G,b as M,c as D,L as H,r as W,U as j,T as F,Y as J,Z as L,_ as N,$ as U,a1 as V,a0 as _,s as z,I as K}from"./preset_utils-15b31d83.chunk.js";import{s as $}from"./apl_utils-53d487bc.chunk.js";const X=B({fieldName:"startingRage",label:"Starting Rage",labelTooltip:"Initial rage at the start of each iteration."}),Y=C({fieldName:"shout",values:[{color:"c79c6e",value:e.WarriorShoutNone},{actionId:t.fromSpellId(47436),value:e.WarriorShoutBattle},{actionId:t.fromSpellId(469),value:e.WarriorShoutCommanding}]}),Z=G({fieldName:"useShatteringThrow",id:t.fromSpellId(64382)}),q={items:[{id:48430,enchant:3818,gems:[41380,40130]},{id:47116},{id:48454,enchant:3852,gems:[40119]},{id:45496,enchant:3605,gems:[40130]},{id:48450,enchant:3832,gems:[40167,40119]},{id:47570,enchant:3850,gems:[40167,0]},{id:48452,enchant:3860,gems:[40167,0]},{id:47072,enchant:3599,gems:[40130,36767]},{id:49904,enchant:3822,gems:[40130,40167,36767]},{id:49907,enchant:3232,gems:[40167,36767]},{id:45471,gems:[40167]},{id:47731},{id:47216},{id:47080},{id:45876,enchant:3788,gems:[40130]},{id:45877,enchant:3849,gems:[40119,40119]},{id:47660}]},Q={items:[{id:40546,enchant:3818,gems:[41380,40034]},{id:40387},{id:39704,enchant:3852,gems:[40034]},{id:40722,enchant:3605},{id:44e3,enchant:3832,gems:[40034,40015]},{id:39764,enchant:3850,gems:[0]},{id:40545,enchant:3860,gems:[40034,0]},{id:39759,enchant:3601,gems:[40008,36767]},{id:40589,enchant:3822},{id:39717,enchant:3232,gems:[40089]},{id:40370},{id:40718},{id:40257},{id:44063,gems:[36767,40089]},{id:40402,enchant:3788},{id:40400,enchant:3849},{id:41168,gems:[36767]}]},ee={items:[{id:46166,enchant:3818,gems:[41380,40008]},{id:45485,gems:[40008]},{id:46167,enchant:3852,gems:[40008]},{id:45496,enchant:3605,gems:[40023]},{id:46162,enchant:3832,gems:[40008,40008]},{id:45111,enchant:3850,gems:[0]},{id:45487,enchant:3860,gems:[40008,40008,0]},{id:45139,enchant:3601,gems:[40008]},{id:46169,enchant:3822,gems:[40088,40008]},{id:45988,enchant:3232,gems:[36767,36767]},{id:45471,gems:[45880]},{id:45247},{id:45158},{id:46021},{id:45442,enchant:3788,gems:[40034]},{id:45587,enchant:3849,gems:[36767]},{id:45137,enchant:3608}]},te={items:[{id:48433,enchant:3818,gems:[41380,40130]},{id:47133,gems:[40130]},{id:48455,enchant:3852,gems:[40119]},{id:47549,enchant:3605,gems:[40119]},{id:46968,enchant:3832,gems:[40130,49110,36767]},{id:47111,enchant:3850,gems:[40130,0]},{id:48453,enchant:3860,gems:[40167,0]},{id:47076,enchant:3599,gems:[40130,36767,36767]},{id:48447,enchant:3822,gems:[40130,40119]},{id:47003,enchant:3232,gems:[40130,40119]},{id:45471,gems:[40167]},{id:47157,gems:[40130]},{id:45158},{id:47088},{id:47506,enchant:3788,gems:[40167]},{id:46964,enchant:3849,gems:[40119]},{id:47660}]},ae={items:[{id:50640,enchant:3818,gems:[41380,40130]},{id:50682,gems:[40130]},{id:51224,enchant:3852,gems:[40130]},{id:50718,enchant:3605,gems:[40119]},{id:51220,enchant:3832,gems:[40130,40119]},{id:50611,enchant:3850,gems:[40119,0]},{id:51222,enchant:3860,gems:[40119,0]},{id:50691,enchant:3599,gems:[40130,36767,0]},{id:51223,enchant:3822,gems:[40167,40119]},{id:50625,enchant:3232,gems:[40167,40119]},{id:50622,gems:[40130]},{id:50642,gems:[40130]},{id:50364},{id:50344},{id:50738,enchant:3788,gems:[40119]},{id:50729,enchant:3849,gems:[40130]},{id:51834,gems:[36767]}]},se={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:47440}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{schedule:{schedule:"29s, 209s",innerAction:{castSpell:{spellId:{spellId:12975}}}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"30"}}}},castSpell:{spellId:{tag:1,spellId:47450}}}},{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:47488}}}},{action:{castSpell:{spellId:{spellId:57823}}}},{action:{condition:{auraShouldRefresh:{sourceUnit:{type:"Self"},auraId:{spellId:47440},maxOverlap:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:47440}}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:47502},maxOverlap:{const:{val:"2s"}}}},castSpell:{spellId:{spellId:47502}}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:47437},maxOverlap:{const:{val:"2s"}}}},castSpell:{spellId:{spellId:25203}}}},{action:{castSpell:{spellId:{spellId:47498}}}}]},ne=M("P1 PreRaid Preset",{items:[{id:42549,enchant:3818,gems:[41380,40015]},{id:40679},{id:37814,enchant:3852},{id:37728,enchant:3605},{id:39611,enchant:1953,gems:[40008,40008]},{id:37620,enchant:3850,gems:[0]},{id:39622,enchant:3860,gems:[40034,0]},{id:37379,enchant:3601,gems:[40034,36767]},{id:43500,enchant:3822,gems:[40034]},{id:44201,enchant:3232},{id:37784},{id:37186},{id:37220},{id:44063,gems:[36767,40089]},{id:37401,enchant:3788},{id:43085,enchant:3849},{id:41168,gems:[36767]}]}),ie=M("P4 PreRaid Preset",q),re=M("P1 Preset",Q),oe=M("P2 Preset",ee),le=M("P3 Preset",te),de=M("P4 Preset",ae),ce=D("Default APL",se),me=H("Simple Cooldowns",s.SpecProtectionWarrior,a.create()),pe={name:"Standard",data:n.create({talentsString:"2500030023-302-053351225000012521030113321",glyphs:i.create({major1:r.GlyphOfBlocking,major2:r.GlyphOfVigilance,major3:r.GlyphOfDevastate,minor1:o.GlyphOfCharge,minor2:o.GlyphOfThunderClap,minor3:o.GlyphOfCommand})})},he={name:"UA",data:n.create({talentsString:"35023301230051002020120002-2-05035122500000252",glyphs:i.create({major1:r.GlyphOfRevenge,major2:r.GlyphOfHeroicStrike,major3:r.GlyphOfSweepingStrikes,minor1:o.GlyphOfCharge,minor2:o.GlyphOfThunderClap,minor3:o.GlyphOfCommand})})},ge=l.create({shout:e.WarriorShoutCommanding,useShatteringThrow:!1,startingRage:0}),Se=d.create({battleElixir:c.ElixirOfExpertise,guardianElixir:m.ElixirOfProtection,food:p.FoodDragonfinFilet,defaultPotion:h.IndestructiblePotion,prepopPotion:h.IndestructiblePotion,thermalSapper:!0,fillerExplosive:g.ExplosiveSaroniteBomb}),ue=W(s.SpecProtectionWarrior,{cssClass:"protection-warrior-sim-ui",cssScheme:"warrior",knownIssues:[],epStats:[S.StatStamina,S.StatStrength,S.StatAgility,S.StatAttackPower,S.StatExpertise,S.StatMeleeHit,S.StatMeleeCrit,S.StatMeleeHaste,S.StatArmor,S.StatBonusArmor,S.StatArmorPenetration,S.StatDefense,S.StatBlock,S.StatBlockValue,S.StatDodge,S.StatParry,S.StatResilience,S.StatNatureResistance,S.StatShadowResistance,S.StatFrostResistance],epPseudoStats:[u.PseudoStatMainHandDps],epReferenceStat:S.StatAttackPower,displayStats:[S.StatHealth,S.StatArmor,S.StatBonusArmor,S.StatStamina,S.StatStrength,S.StatAgility,S.StatAttackPower,S.StatExpertise,S.StatMeleeHit,S.StatMeleeCrit,S.StatMeleeHaste,S.StatArmorPenetration,S.StatDefense,S.StatBlock,S.StatBlockValue,S.StatDodge,S.StatParry,S.StatResilience,S.StatNatureResistance,S.StatShadowResistance,S.StatFrostResistance],defaults:{gear:le.gear,epWeights:f.fromMap({[S.StatArmor]:.174,[S.StatBonusArmor]:.155,[S.StatStamina]:2.336,[S.StatStrength]:1.555,[S.StatAgility]:2.771,[S.StatAttackPower]:.32,[S.StatExpertise]:1.44,[S.StatMeleeHit]:1.432,[S.StatMeleeCrit]:.925,[S.StatMeleeHaste]:.431,[S.StatArmorPenetration]:1.055,[S.StatBlock]:1.32,[S.StatBlockValue]:1.373,[S.StatDodge]:2.606,[S.StatParry]:2.649,[S.StatDefense]:3.305},{[u.PseudoStatMainHandDps]:6.081}),consumes:Se,talents:pe.data,specOptions:ge,raidBuffs:I.create({giftOfTheWild:P.TristateEffectImproved,powerWordFortitude:P.TristateEffectImproved,abominationsMight:!0,swiftRetribution:!0,bloodlust:!0,strengthOfEarthTotem:P.TristateEffectImproved,leaderOfThePack:P.TristateEffectImproved,sanctifiedRetribution:!0,devotionAura:P.TristateEffectImproved,stoneskinTotem:P.TristateEffectImproved,icyTalons:!0,retributionAura:!0,thorns:P.TristateEffectImproved,shadowProtection:!0}),partyBuffs:v.create({}),individualBuffs:O.create({blessingOfKings:!0,blessingOfMight:P.TristateEffectImproved,blessingOfSanctuary:!0}),debuffs:A.create({sunderArmor:!0,mangle:!0,vindication:!0,faerieFire:P.TristateEffectImproved,insectSwarm:!0,bloodFrenzy:!0,judgementOfLight:!0,heartOfTheCrusader:!0,frostFever:P.TristateEffectImproved})},playerIconInputs:[Y,Z],includeBuffDebuffInputs:[j],excludeBuffDebuffInputs:[],otherInputs:{inputs:[F,J,L,N,U,V,_,X,z]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[pe,he],rotations:[ce,me],gear:[ne,ie,re,oe,le,de]},autoRotation:e=>ce.rotation.rotation,simpleRotation:(e,t,a)=>{let[s,n]=$(a);const i=y.fromJsonString('{"action":{"castSpell":{"spellId":{"spellId":47440}}},"doAtValue":{"const":{"val":"-10s"}}}'),r=R.fromJsonString('{"condition":{"cmp":{"op":"OpGe","lhs":{"currentRage":{}},"rhs":{"const":{"val":"30"}}}},"castSpell":{"spellId":{"tag":1,"spellId":47450}}}'),o=R.fromJsonString('{"castSpell":{"spellId":{"spellId":47488}}}'),l=R.fromJsonString('{"castSpell":{"spellId":{"spellId":57823}}}'),d=R.fromJsonString('{"condition":{"auraShouldRefresh":{"sourceUnit":{"type":"Self"},"auraId":{"spellId":47440},"maxOverlap":{"const":{"val":"3s"}}}},"castSpell":{"spellId":{"spellId":47440}}}'),c=R.fromJsonString('{"condition":{"auraShouldRefresh":{"auraId":{"spellId":47502},"maxOverlap":{"const":{"val":"2s"}}}},"castSpell":{"spellId":{"spellId":47502}}}'),m=R.fromJsonString('{"condition":{"auraShouldRefresh":{"auraId":{"spellId":47437},"maxOverlap":{"const":{"val":"2s"}}}},"castSpell":{"spellId":{"spellId":25203}}}'),p=R.fromJsonString('{"castSpell":{"spellId":{"spellId":47498}}}');return s.push(i),n.push(...[r,o,l,d,c,m,p].filter((e=>e))),b.create({prepullActions:s,priorityList:n.map((e=>k.create({action:e})))})},raidSimPresets:[{spec:s.SpecProtectionWarrior,tooltip:"Protection Warrior",defaultName:"Protection",iconUrl:w(E.ClassWarrior,2),talents:pe.data,specOptions:ge,consumes:Se,defaultFactionRaces:{[T.Unknown]:x.RaceUnknown,[T.Alliance]:x.RaceHuman,[T.Horde]:x.RaceOrc},defaultGear:{[T.Unknown]:{},[T.Alliance]:{1:re.gear,2:oe.gear,3:le.gear,4:de.gear},[T.Horde]:{1:re.gear,2:oe.gear,3:le.gear,4:de.gear}}}]});class fe extends K{constructor(e,t){super(e,t,ue)}}export{fe as P};
//# sourceMappingURL=sim-b54803ab.chunk.js.map
