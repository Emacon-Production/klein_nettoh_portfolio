import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import queryString from 'query-string'
import './media.css'

const images = [
  "https://res.cloudinary.com/emacon-production/image/upload/v1601626977/Emacon%20Production/_MG_7971_ljafny.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1601626929/Emacon%20Production/IMG_0194_ehwqcg.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1601626946/Emacon%20Production/IMG_0732-HDR-Edit-Edit_yoyd9u.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1601627063/Emacon%20Production/IMG_1838_lng3qp.jpg"
]

const travelImages = [
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980218/Klein%20Nettoh%20Portfolio/travel/DJI_0045_u0mhk0.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980208/Klein%20Nettoh%20Portfolio/travel/DJI_0483_k9y0el.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980204/Klein%20Nettoh%20Portfolio/travel/sarafi_series-5201_nvq0yq.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980202/Klein%20Nettoh%20Portfolio/travel/DSC_3810_htjjtd.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980202/Klein%20Nettoh%20Portfolio/travel/DSC_6205_x8pbhj.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980201/Klein%20Nettoh%20Portfolio/travel/DJI_0499_sugkac.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980199/Klein%20Nettoh%20Portfolio/travel/DSC_6593_abebw5.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980199/Klein%20Nettoh%20Portfolio/travel/kleinNettoh-3508_orewlt.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980198/Klein%20Nettoh%20Portfolio/travel/DJI_0421_cqw96n.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980195/Klein%20Nettoh%20Portfolio/travel/DSC_6743_i6gh8e.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980190/Klein%20Nettoh%20Portfolio/travel/sarafi_series-4502_eq02ek.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980188/Klein%20Nettoh%20Portfolio/travel/DJI_0143_uwtcvs.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980187/Klein%20Nettoh%20Portfolio/travel/sarafi_series-4532_fbatyj.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980186/Klein%20Nettoh%20Portfolio/travel/DSC_1658_gduixv.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980184/Klein%20Nettoh%20Portfolio/travel/sarafi_series-5142_h05s68.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980183/Klein%20Nettoh%20Portfolio/travel/DJI_0491_wwtgjr.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980183/Klein%20Nettoh%20Portfolio/travel/DSC_6607_klhybs.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980180/Klein%20Nettoh%20Portfolio/travel/kleinNettoh-4788_xezcjb.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980179/Klein%20Nettoh%20Portfolio/travel/DSC_6072_dakhjg.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980177/Klein%20Nettoh%20Portfolio/travel/DJI_0039_i0nzyd.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980176/Klein%20Nettoh%20Portfolio/travel/saf-Paukwa-loreamatet_primary-50_pmy5wa.jpg"
]

const peopleImages = [
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980097/Klein%20Nettoh%20Portfolio/people/DSC_9033_ldlzmd.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980092/Klein%20Nettoh%20Portfolio/people/DSC_4078_gixr5s.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980090/Klein%20Nettoh%20Portfolio/people/DSC_2476_aarvjj.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980089/Klein%20Nettoh%20Portfolio/people/kleinNettoh-5041_1_iqommq.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980089/Klein%20Nettoh%20Portfolio/people/DSC_8707_jw0ith.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980086/Klein%20Nettoh%20Portfolio/people/DSC_0369_x0qily.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980086/Klein%20Nettoh%20Portfolio/people/DSC_9168_cjbwes.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980085/Klein%20Nettoh%20Portfolio/people/kleinNettoh-5684_xv0dfq.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980081/Klein%20Nettoh%20Portfolio/people/klein-4704_kyip87.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980081/Klein%20Nettoh%20Portfolio/people/DSC_9081_jcatcn.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980080/Klein%20Nettoh%20Portfolio/people/saf-Paukwa-loreamatet_primary-151_levwht.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980079/Klein%20Nettoh%20Portfolio/people/DSC_9532_wblqmr.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980074/Klein%20Nettoh%20Portfolio/people/kleinNettoh-5687_ihpjaz.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980073/Klein%20Nettoh%20Portfolio/people/DSC_3963_rhgkaq.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980072/Klein%20Nettoh%20Portfolio/people/kleinNettoh-5041_otoijt.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980072/Klein%20Nettoh%20Portfolio/people/sarafi_series-4408_zsqhex.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980065/Klein%20Nettoh%20Portfolio/people/DSC_8969_ec45ta.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980060/Klein%20Nettoh%20Portfolio/people/DSC_9977_mvqrfj.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980060/Klein%20Nettoh%20Portfolio/people/kisite_safaricom_foundation_87_of_107_d8q8tq.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980059/Klein%20Nettoh%20Portfolio/people/DSC_3376_rwwzqc.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980055/Klein%20Nettoh%20Portfolio/people/DSC_1825_olknlm.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980052/Klein%20Nettoh%20Portfolio/people/Tumoti_Kumari-1914_uanex0.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980052/Klein%20Nettoh%20Portfolio/people/nelly_karino-2052_ntcukj.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980051/Klein%20Nettoh%20Portfolio/people/DSC_1542_vfw3fr.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980051/Klein%20Nettoh%20Portfolio/people/DSC_1987_jyblz5.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980049/Klein%20Nettoh%20Portfolio/people/DSC_8628_qji7a1.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980049/Klein%20Nettoh%20Portfolio/people/DSC_8720_xguxg6.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980046/Klein%20Nettoh%20Portfolio/people/william_polong_hts_provider-2070_1_qgdgky.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980045/Klein%20Nettoh%20Portfolio/people/kleinNettoh-5682_rijv31.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980043/Klein%20Nettoh%20Portfolio/people/DSC_4315_tygy5i.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980041/Klein%20Nettoh%20Portfolio/people/kleinNettoh-5076_1_kf9lw9.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980038/Klein%20Nettoh%20Portfolio/people/Precilar_mama_sam_-1816_fwlx8d.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980035/Klein%20Nettoh%20Portfolio/people/DSC_1658_q6dj4x.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980030/Klein%20Nettoh%20Portfolio/people/kleinNettoh-4177_uawtex.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980027/Klein%20Nettoh%20Portfolio/people/kleinNettoh-4772_cdbjow.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980025/Klein%20Nettoh%20Portfolio/people/DSC_9937_pk7wem.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980020/Klein%20Nettoh%20Portfolio/people/klein-6739_mafw0m.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980018/Klein%20Nettoh%20Portfolio/people/kisite_safaricom_foundation_93_of_107_o9pxtd.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980016/Klein%20Nettoh%20Portfolio/people/Dorcas_nkachori-1806_fv031v.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980014/Klein%20Nettoh%20Portfolio/people/DSC_4084_qvom7a.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980009/Klein%20Nettoh%20Portfolio/people/DSC_8926_z9mqv2.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980006/Klein%20Nettoh%20Portfolio/people/DSC_0234_ve3uig.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667979992/Klein%20Nettoh%20Portfolio/people/kleinNettoh-3143_dnvrxj.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667979978/Klein%20Nettoh%20Portfolio/people/Meshach_Sitola-1735_wkymf9.jpg"
]

const wildlifeImages = [
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980230/Klein%20Nettoh%20Portfolio/wildlife/klein-5986_wnumig.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980229/Klein%20Nettoh%20Portfolio/wildlife/DSC_0463_mkkdqr.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980227/Klein%20Nettoh%20Portfolio/wildlife/DSC_0457_cr8exs.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980225/Klein%20Nettoh%20Portfolio/wildlife/klein-6011_uywzh3.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980221/Klein%20Nettoh%20Portfolio/wildlife/kleinNettoh-3994_cpyqq0.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980217/Klein%20Nettoh%20Portfolio/wildlife/klein-6586_t0g6ul.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980213/Klein%20Nettoh%20Portfolio/wildlife/kleinnettoh-4065_phvm1f.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980016/Klein%20Nettoh%20Portfolio/wildlife/kleinnettoh-4067_ty28mq.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980008/Klein%20Nettoh%20Portfolio/wildlife/kleinnettoh_4063_g0cylj.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980007/Klein%20Nettoh%20Portfolio/wildlife/DSC_1920_lv8b5t.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667979993/Klein%20Nettoh%20Portfolio/wildlife/kleinnettoh-4068_ucjytr.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667979990/Klein%20Nettoh%20Portfolio/wildlife/DSC_0467_uv19xb.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980229/Klein%20Nettoh%20Portfolio/wildlife/kleinNettoh-4062_v3kpxt.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980219/Klein%20Nettoh%20Portfolio/wildlife/kleinNettoh-3759_ikgp5l.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980219/Klein%20Nettoh%20Portfolio/wildlife/kleinNettoh-3742_l78ct6.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980009/Klein%20Nettoh%20Portfolio/wildlife/kleinNettoh-3745_hp6jah.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980002/Klein%20Nettoh%20Portfolio/wildlife/kleinNettoh-3737_cecvdz.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667979998/Klein%20Nettoh%20Portfolio/wildlife/kleinNettoh-4018_ktlxls.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667979989/Klein%20Nettoh%20Portfolio/wildlife/kleinNettoh-3753_xyqcyd.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667979986/Klein%20Nettoh%20Portfolio/wildlife/kleinNettoh-4008_v1tqmk.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667979985/Klein%20Nettoh%20Portfolio/wildlife/kleinNettoh-4059_g6tiuc.jpg"
]

const spacesImages = [
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980180/Klein%20Nettoh%20Portfolio/spaces/DSC_8368_1_gahxnh.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980170/Klein%20Nettoh%20Portfolio/spaces/kleinNettoh-3369_jdzgqj.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980164/Klein%20Nettoh%20Portfolio/spaces/DSC_2531_cerg5a.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980164/Klein%20Nettoh%20Portfolio/spaces/kleinNettoh-3382_hy6z8q.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980163/Klein%20Nettoh%20Portfolio/spaces/DSC_2433_wgyloa.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980163/Klein%20Nettoh%20Portfolio/spaces/Sarova_Mara_Game_Camp_-_Sundowner_5_av0aju.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980162/Klein%20Nettoh%20Portfolio/spaces/Sarova_Whitesands_-_Beach_breakfast_3_immxud.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980160/Klein%20Nettoh%20Portfolio/spaces/DSC_2567_myzywo.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980160/Klein%20Nettoh%20Portfolio/spaces/Sarova_Whitesands_-_Premier_Sea_Facing_Room_4_bjr6vq.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980159/Klein%20Nettoh%20Portfolio/spaces/Sarova_Whitesands_-_Premier_Sea_Facing_Room_1_dp8b2t.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980158/Klein%20Nettoh%20Portfolio/spaces/DSC_8423_1_rh5k3o.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980157/Klein%20Nettoh%20Portfolio/spaces/DSC_2936_r3n8op.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980156/Klein%20Nettoh%20Portfolio/spaces/DSC_8180_jucmq4.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980155/Klein%20Nettoh%20Portfolio/spaces/DSC_0113_lj6xkg.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980154/Klein%20Nettoh%20Portfolio/spaces/kleinNettoh-3376_x2yo8u.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980154/Klein%20Nettoh%20Portfolio/spaces/DSC_0036_hdrkru.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980153/Klein%20Nettoh%20Portfolio/spaces/DSC_2440_gv53f0.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980149/Klein%20Nettoh%20Portfolio/spaces/DSC_1905_z4a7et.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980145/Klein%20Nettoh%20Portfolio/spaces/DSC_2610_ipv7jf.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980145/Klein%20Nettoh%20Portfolio/spaces/DSC_2605_tr9hrk.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980139/Klein%20Nettoh%20Portfolio/spaces/Sarova_Whitesands_-_Beach_breakfast_2_fyzcca.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980138/Klein%20Nettoh%20Portfolio/spaces/Sarova_Mara_Game_Camp_-_Sundowner_2_rcz8qn.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980137/Klein%20Nettoh%20Portfolio/spaces/DSC_2920_ysjm1p.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980136/Klein%20Nettoh%20Portfolio/spaces/DSC_2792_ez1qek.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980136/Klein%20Nettoh%20Portfolio/spaces/kleinNettoh-3410_khglny.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980134/Klein%20Nettoh%20Portfolio/spaces/Sarova_Whitesands_-_Premier_Sea_Facing_Room_8_as4gvf.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980133/Klein%20Nettoh%20Portfolio/spaces/DSC_8339_1_grrj3p.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980130/Klein%20Nettoh%20Portfolio/spaces/DSC_2869_fzi7ne.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980129/Klein%20Nettoh%20Portfolio/spaces/DSC_6219_uzefgh.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980129/Klein%20Nettoh%20Portfolio/spaces/Sarova_Whitesands_-_Beach_breakfast_6_sus2ze.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980128/Klein%20Nettoh%20Portfolio/spaces/klein-6495_cpbyn2.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980126/Klein%20Nettoh%20Portfolio/spaces/DSC_2510_mnogi9.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980126/Klein%20Nettoh%20Portfolio/spaces/DSC_2264_jatlsp.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980124/Klein%20Nettoh%20Portfolio/spaces/DSC_8423_mlyvo7.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980124/Klein%20Nettoh%20Portfolio/spaces/DSC_2597_k9iezd.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980122/Klein%20Nettoh%20Portfolio/spaces/DSC_0116_fucmvf.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980119/Klein%20Nettoh%20Portfolio/spaces/DSC_8428_ysoxzb.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980118/Klein%20Nettoh%20Portfolio/spaces/Sarova_Whitesands_-_Premier_Sea_Facing_Room_6_oungvl.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980117/Klein%20Nettoh%20Portfolio/spaces/DSC_2915_zzrfrg.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980113/Klein%20Nettoh%20Portfolio/spaces/Sarova_Whitesands_-_Premier_Sea_Facing_Room_3_yw7cbs.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980111/Klein%20Nettoh%20Portfolio/spaces/DSC_6931_axj8p4.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980110/Klein%20Nettoh%20Portfolio/spaces/DSC_2585_gvdhgz.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980109/Klein%20Nettoh%20Portfolio/spaces/DSC_2902_eiloaw.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980107/Klein%20Nettoh%20Portfolio/spaces/DSC_0102_jdcfh2.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980106/Klein%20Nettoh%20Portfolio/spaces/DSC_8368_tjciqy.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980106/Klein%20Nettoh%20Portfolio/spaces/Sarova_Whitesands_-_Beach_breakfast_1_g7zelz.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980105/Klein%20Nettoh%20Portfolio/spaces/DSC_2574_mltzq0.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980105/Klein%20Nettoh%20Portfolio/spaces/DSC_8339_hxhixk.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980105/Klein%20Nettoh%20Portfolio/spaces/DSC_0110_ifu11m.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980101/Klein%20Nettoh%20Portfolio/spaces/Sarova_Whitesands_-_Beach_breakfast_4_v7dhcz.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980098/Klein%20Nettoh%20Portfolio/spaces/DSC_2254_phseav.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1667980098/Klein%20Nettoh%20Portfolio/spaces/DSC_1813_zz2hyq.jpg"
]

function Media() {
  const [type, setType] = useState();

  useEffect(() => {
    const { category } = queryString.parse(window.location.search);
    setType(category);
  }, [window.location.search])

  return (
    <div className='media'>
        <Navigation />

        {
          type === "travel" ? (
            <div className='media_content'>
              <div className='media_title'>
                  <h2>TRAVEL</h2>
                  {/* <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book.
                  </p> */}
              </div>

              <div className='media_images'>
                {
                  travelImages.map((item, index) => (
                    <img src={item} key={index}/>
                  ))
                }
              </div>
          </div>
          ) : <></> &&
          type === "people" ? (
            <div className='media_content'>
              <div className='media_title'>
                  <h2>PEOPLE</h2>
                  {/* <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book.
                  </p> */}
              </div>

              <div className='media_images'>
                {
                  peopleImages.map((item, index) => (
                    <img src={item} key={index}/>
                  ))
                }
              </div>
          </div>
          ) : <></> &&
          type === "wildlife" ? (
            <div className='media_content'>
              <div className='media_title'>
                  <h2>WILDLIFE</h2>
                  {/* <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book.
                  </p> */}
              </div>

              <div className='media_images'>
                {
                  wildlifeImages.map((item, index) => (
                    <img src={item} key={index}/>
                  ))
                }
              </div>
          </div>
          ) : <></> &&
          type === "spaces" ? (
            <div className='media_content'>
              <div className='media_title'>
                  <h2>SPACES</h2>
                  {/* <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book.
                  </p> */}
              </div>

              <div className='media_images'>
                {
                  spacesImages.map((item, index) => (
                    <img src={item} key={index}/>
                  ))
                }
              </div>
          </div>
          ) : <></>
        }
        

        <Footer />
    </div>
  )
}

export default Media