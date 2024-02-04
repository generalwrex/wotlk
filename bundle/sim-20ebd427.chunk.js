import{ex as e,eJ as t,ey as a,c4 as s,P as l,d as n,eK as d,E as i,ce as o,ch as p,cj as r,a0 as c,ab as m,F as g,T as I,a3 as S,az as h,bl as u,w as f,B as y,aA as R,d$ as T,dX as v,K as P,e0 as A,S as O,g as b,t as w,aP as k,bA as E}from"./detailed_results-47f39951.chunk.js";import{x as B,i as D,b as J,c as H,r as M,U as L,T as V,Y as j,Z as x,_ as W,$ as F,a1 as C,a0 as G,s as N,I as U}from"./preset_utils-15b31d83.chunk.js";import{s as K}from"./apl_utils-53d487bc.chunk.js";const _=B({fieldName:"aura",label:"Aura",values:[{name:"None",value:e.NoPaladinAura},{name:"Devotion Aura",value:e.DevotionAura},{name:"Retribution Aura",value:e.RetributionAura}]}),z=B({fieldName:"seal",label:"Seal",labelTooltip:"The seal active before encounter",values:[{name:"Vengeance",value:t.Vengeance},{name:"Command",value:t.Command}]}),$=B({fieldName:"judgement",label:"Judgement",labelTooltip:"Judgement debuff you will use on the target during the encounter.",values:[{name:"Wisdom",value:a.JudgementOfWisdom},{name:"Light",value:a.JudgementOfLight}]}),X=D({fieldName:"useAvengingWrath",label:"Use Avenging Wrath"}),Y={items:[{id:48639,enchant:3818,gems:[41380,40129]},{id:45485,gems:[40167]},{id:48637,enchant:3852,gems:[40119]},{id:45496,enchant:1951,gems:[40119]},{id:48641,enchant:1953,gems:[40166,40119]},{id:47570,enchant:3850,gems:[40166,0]},{id:48640,enchant:3860,gems:[40166,0]},{id:47072,gems:[40119,40119]},{id:49904,enchant:3822,gems:[40119,40119,40119]},{id:49907,enchant:3606,gems:[40166,40119]},{id:45471,gems:[40119]},{id:47149},{id:47080},{id:46021},{id:46097,enchant:3788,gems:[40119]},{id:46963,enchant:3849},{id:47661}]},Z={items:[{id:40581,enchant:3818,gems:[41380,36767]},{id:40387},{id:40584,enchant:3852,gems:[40008]},{id:40410,enchant:3605},{id:40579,enchant:3832,gems:[36767,40022]},{id:39764,enchant:3850,gems:[0]},{id:40580,enchant:3860,gems:[40008,0]},{id:39759,enchant:3601,gems:[40008,40008]},{id:40589,enchant:3822},{id:39717,enchant:3606,gems:[40089]},{id:40718},{id:40107},{id:44063,gems:[36767,40089]},{id:37220},{id:40345,enchant:3788},{id:40400,enchant:3849},{id:40707}]},q={items:[{id:46175,enchant:3818,gems:[41380,40088]},{id:45485,gems:[40088]},{id:46177,enchant:3852,gems:[40034]},{id:45496,enchant:3605,gems:[40034]},{id:46039,enchant:3832,gems:[36767,36767]},{id:45111,enchant:3850,gems:[0]},{id:45487,enchant:3860,gems:[40008,40008,0]},{id:45825,enchant:3601,gems:[40008]},{id:45594,enchant:3822,gems:[40034,45880,40088]},{id:45988,enchant:3606,gems:[40008,40008]},{id:45471,gems:[40088]},{id:45326},{id:45158},{id:46021},{id:45947,enchant:3788,gems:[40088]},{id:45587,enchant:3849,gems:[36767]},{id:45145}]},Q={items:[{id:49475,enchant:3878,gems:[41380,40129]},{id:47133,gems:[40119]},{id:48646,enchant:3852,gems:[40119]},{id:47549,enchant:3605,gems:[40119]},{id:46968,enchant:3832,gems:[40129,49110,40119]},{id:47111,enchant:3850,gems:[40119,0]},{id:45487,enchant:3860,gems:[40119,40119,0]},{id:47076,gems:[40129,40119,40119]},{id:48645,enchant:3822,gems:[40129,40119]},{id:47003,enchant:3606,gems:[40129,40119]},{id:47157,gems:[40119]},{id:45471,gems:[40166]},{id:45158},{id:47451},{id:46097,enchant:3788,gems:[40119]},{id:46964,enchant:3849,gems:[40119]},{id:47661}]},ee={items:[{id:50640,enchant:3818,gems:[41380,40141]},{id:50682,gems:[40119]},{id:50660,enchant:3852,gems:[40167,40119]},{id:50718,enchant:3605,gems:[40119]},{id:51265,enchant:3297,gems:[40141,40119]},{id:51901,enchant:3850,gems:[40119,0]},{id:51267,enchant:3860,gems:[40119,0]},{id:50991,enchant:3601,gems:[40141,40119,40119]},{id:49904,enchant:3822,gems:[40119,40119,40119]},{id:50625,enchant:3606,gems:[40119,40119]},{id:50642,gems:[40119]},{id:50622,gems:[40119]},{id:50364},{id:50344},{id:51893,enchant:3788,gems:[40119]},{id:50729,enchant:1071,gems:[40119]},{id:47661}]},te={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48952}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:54428}}},doAtValue:{const:{val:"-1500ms"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{spellTimeToReady:{spellId:{spellId:53595}}},rhs:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:61411}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{spellTimeToReady:{spellId:{spellId:61411}}},rhs:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:53595}}}},{action:{castSpell:{spellId:{spellId:48806}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{spellIsReady:{spellId:{spellId:61411}}}}},{not:{val:{spellIsReady:{spellId:{spellId:53595}}}}},{cmp:{op:"OpLe",lhs:{min:{vals:[{spellTimeToReady:{spellId:{spellId:61411}}},{spellTimeToReady:{spellId:{spellId:53595}}}]}},rhs:{const:{val:"350ms"}}}}]}},wait:{duration:{min:{vals:[{spellTimeToReady:{spellId:{spellId:61411}}},{spellTimeToReady:{spellId:{spellId:53595}}}]}}}}},{action:{castSpell:{spellId:{spellId:48819}}}},{action:{castSpell:{spellId:{spellId:48952}}}},{action:{castSpell:{spellId:{spellId:53408}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{spellIsReady:{spellId:{spellId:61411}}}}},{not:{val:{spellIsReady:{spellId:{spellId:53595}}}}},{not:{val:{spellIsReady:{spellId:{spellId:48819}}}}},{not:{val:{spellIsReady:{spellId:{spellId:48952}}}}},{not:{val:{spellIsReady:{spellId:{spellId:53408}}}}}]}},wait:{duration:{min:{vals:[{spellTimeToReady:{spellId:{spellId:61411}}},{spellTimeToReady:{spellId:{spellId:53595}}},{spellTimeToReady:{spellId:{spellId:48819}}},{spellTimeToReady:{spellId:{spellId:48952}}},{spellTimeToReady:{spellId:{spellId:53408}}}]}}}}}]},ae=J("P1 PreRaid Preset",{items:[{id:42549,enchant:3818,gems:[41396,49110]},{id:40679},{id:37635,enchant:3852,gems:[40015]},{id:44188,enchant:3605},{id:39638,enchant:1953,gems:[36767,40089]},{id:37682,enchant:3850,gems:[0]},{id:39639,enchant:3860,gems:[36767,0]},{id:37379,enchant:3601,gems:[40022,40008]},{id:37292,enchant:3822,gems:[40089]},{id:44243,enchant:3606},{id:37186},{id:37257},{id:44063,gems:[36767,40015]},{id:37220},{id:37179,enchant:2673},{id:43085,enchant:3849},{id:40707}]}),se=J("P4 PreRaid Preset",Y),le=J("P1 Preset",Z),ne=J("P2 Preset",q),de=J("P3 Preset",Q),ie=J("P4 Preset",ee),oe=H("Default (969)",te),pe={name:"Baseline Example",data:s.create({talentsString:"-05005135200132311333312321-511302012003",glyphs:{major1:l.GlyphOfSealOfVengeance,major2:l.GlyphOfRighteousDefense,major3:l.GlyphOfDivinePlea,minor1:n.GlyphOfSenseUndead,minor2:n.GlyphOfLayOnHands,minor3:n.GlyphOfBlessingOfKings}})},re=d.create({aura:e.RetributionAura,judgement:a.JudgementOfWisdom}),ce=i.create({flask:o.FlaskOfStoneblood,food:p.FoodDragonfinFilet,defaultPotion:r.IndestructiblePotion,prepopPotion:r.IndestructiblePotion}),me=M(O.SpecProtectionPaladin,{cssClass:"protection-paladin-sim-ui",cssScheme:"paladin",knownIssues:[],epStats:[c.StatStamina,c.StatStrength,c.StatAgility,c.StatAttackPower,c.StatMeleeHit,c.StatSpellHit,c.StatMeleeCrit,c.StatExpertise,c.StatMeleeHaste,c.StatArmorPenetration,c.StatSpellPower,c.StatArmor,c.StatBonusArmor,c.StatDefense,c.StatBlock,c.StatBlockValue,c.StatDodge,c.StatParry,c.StatResilience,c.StatNatureResistance,c.StatShadowResistance,c.StatFrostResistance],epPseudoStats:[m.PseudoStatMainHandDps],epReferenceStat:c.StatSpellPower,displayStats:[c.StatHealth,c.StatArmor,c.StatBonusArmor,c.StatStamina,c.StatStrength,c.StatAgility,c.StatAttackPower,c.StatMeleeHit,c.StatMeleeCrit,c.StatMeleeHaste,c.StatExpertise,c.StatArmorPenetration,c.StatSpellPower,c.StatSpellHit,c.StatDefense,c.StatBlock,c.StatBlockValue,c.StatDodge,c.StatParry,c.StatResilience,c.StatNatureResistance,c.StatShadowResistance,c.StatFrostResistance],modifyDisplayStats:e=>{let a=new g;return I.freezeAllAndDo((()=>{e.getMajorGlyphs().includes(l.GlyphOfSealOfVengeance)&&e.getSpecOptions().seal==t.Vengeance&&(a=a.addStat(c.StatExpertise,10*S))})),{talents:a}},defaults:{gear:de.gear,epWeights:g.fromMap({[c.StatArmor]:.07,[c.StatBonusArmor]:.06,[c.StatStamina]:1.14,[c.StatStrength]:1,[c.StatAgility]:.62,[c.StatAttackPower]:.26,[c.StatExpertise]:.69,[c.StatMeleeHit]:.79,[c.StatMeleeCrit]:.3,[c.StatMeleeHaste]:.17,[c.StatArmorPenetration]:.04,[c.StatSpellPower]:.13,[c.StatBlock]:.52,[c.StatBlockValue]:.28,[c.StatDodge]:.46,[c.StatParry]:.61,[c.StatDefense]:.54},{[m.PseudoStatMainHandDps]:3.33}),consumes:ce,talents:pe.data,specOptions:re,raidBuffs:h.create({giftOfTheWild:u.TristateEffectImproved,powerWordFortitude:u.TristateEffectImproved,strengthOfEarthTotem:u.TristateEffectImproved,arcaneBrilliance:!0,unleashedRage:!0,leaderOfThePack:u.TristateEffectRegular,icyTalons:!0,totemOfWrath:!0,demonicPactSp:500,swiftRetribution:!0,moonkinAura:u.TristateEffectRegular,sanctifiedRetribution:!0,manaSpringTotem:u.TristateEffectRegular,bloodlust:!0,thorns:u.TristateEffectImproved,devotionAura:u.TristateEffectImproved,shadowProtection:!0}),partyBuffs:f.create({}),individualBuffs:y.create({blessingOfKings:!0,blessingOfSanctuary:!0,blessingOfWisdom:u.TristateEffectImproved,blessingOfMight:u.TristateEffectImproved}),debuffs:R.create({judgementOfWisdom:!0,judgementOfLight:!0,misery:!0,faerieFire:u.TristateEffectImproved,ebonPlaguebringer:!0,totemOfWrath:!0,shadowMastery:!0,bloodFrenzy:!0,mangle:!0,exposeArmor:!0,sunderArmor:!0,vindication:!0,thunderClap:u.TristateEffectImproved,insectSwarm:!0})},playerIconInputs:[],includeBuffDebuffInputs:[L],excludeBuffDebuffInputs:[],otherInputs:{inputs:[V,j,x,W,F,C,G,_,X,$,z,N]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[pe],rotations:[oe],gear:[ae,se,le,ne,de,ie]},autoRotation:e=>oe.rotation.rotation,simpleRotation:(e,t,a)=>{let[s,l]=K(a);const n=T.fromJsonString('{"action":{"castSpell":{"spellId":{"spellId":48952}}},"doAtValue":{"const":{"val":"-3s"}}}'),d=T.fromJsonString('{"action":{"castSpell":{"spellId":{"spellId":54428}}},"doAtValue":{"const":{"val":"-1500ms"}}}');s.push(n,d);const i=v.fromJsonString('{"condition":{"cmp":{"op":"OpLe","lhs":{"spellTimeToReady":{"spellId":{"spellId":53595}}},"rhs":{"const":{"val":"3s"}}}},"castSpell":{"spellId":{"spellId":61411}}}'),o=v.fromJsonString('{"condition":{"cmp":{"op":"OpLe","lhs":{"spellTimeToReady":{"spellId":{"spellId":61411}}},"rhs":{"const":{"val":"3s"}}}},"castSpell":{"spellId":{"spellId":53595}}}'),p=v.fromJsonString('{"castSpell":{"spellId":{"spellId":48806}}}'),r=v.fromJsonString('{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":61411}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":53595}}}}},{"cmp":{"op":"OpLe","lhs":{"min":{"vals":[{"spellTimeToReady":{"spellId":{"spellId":61411}}},{"spellTimeToReady":{"spellId":{"spellId":53595}}}]}},"rhs":{"const":{"val":"350ms"}}}}]}},"wait":{"duration":{"min":{"vals":[{"spellTimeToReady":{"spellId":{"spellId":61411}}},{"spellTimeToReady":{"spellId":{"spellId":53595}}}]}}}}'),c=v.fromJsonString('{"castSpell":{"spellId":{"spellId":48819}}}'),m=v.fromJsonString('{"castSpell":{"spellId":{"spellId":48952}}}'),g=v.fromJsonString('{"castSpell":{"spellId":{"spellId":53408}}}'),I=v.fromJsonString('{"condition":{"and":{"vals":[{"gcdIsReady":{}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":61411}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":53595}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48819}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":48952}}}}},{"not":{"val":{"spellIsReady":{"spellId":{"spellId":53408}}}}}]}},"wait":{"duration":{"min":{"vals":[{"spellTimeToReady":{"spellId":{"spellId":61411}}},{"spellTimeToReady":{"spellId":{"spellId":53595}}},{"spellTimeToReady":{"spellId":{"spellId":48819}}},{"spellTimeToReady":{"spellId":{"spellId":48952}}},{"spellTimeToReady":{"spellId":{"spellId":53408}}}]}}}}');return l.push(...[i,o,p,r,c,m,g,I].filter((e=>e))),P.create({prepullActions:s,priorityList:l.map((e=>A.create({action:e})))})},raidSimPresets:[{spec:O.SpecProtectionPaladin,tooltip:"Protection Paladin",defaultName:"Protection",iconUrl:b(w.ClassPaladin,1),talents:pe.data,specOptions:re,consumes:ce,defaultFactionRaces:{[k.Unknown]:E.RaceUnknown,[k.Alliance]:E.RaceHuman,[k.Horde]:E.RaceBloodElf},defaultGear:{[k.Unknown]:{},[k.Alliance]:{1:le.gear,2:ne.gear,3:de.gear,4:ie.gear},[k.Horde]:{1:le.gear,2:ne.gear,3:de.gear,4:ie.gear}}}]});class ge extends U{constructor(e,t){super(e,t,me)}}export{ge as P};
//# sourceMappingURL=sim-20ebd427.chunk.js.map
