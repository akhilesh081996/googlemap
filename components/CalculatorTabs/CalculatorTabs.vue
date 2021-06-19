<template>
  <div class="shell">
    <div class="alert-overlay" v-bind:class="{ 'open-popup' : isActive }"  >
   
      <div class="alert-set" >
              <div class="cls-flex">
                <label>Do you plan on hiring more than 1 person a year?</label>
          <section><select class="input-txt-smp pad2 form-control" @change="onChange($event.target.value)" style="width: ;" v-model="Userdrp" id="ddlUser">
              <!-- <option v-bind:value="Userdrp">{{Userdrp}}</option> -->
              <option v-for="users in ddlUser" v-bind:value="users.id"> {{users.Name }} </option>
          </select></section></div>

        
 
 <span v-if="Userdrp != 2 " >

          <span v-if="Userdrp == 1 || Userdrp == '1'">
            <div class="cls-flex">
         <label> South Carolina Tax Credit Sectors?</label>
         <section><select class="input-txt-smp pad2 form-control" @change="onChange1($event.target.value)" style="width: ;" v-model="Sector" id="SectorCredit" >
            <option  selected disabled hidden >Select</option>
            <option v-for="scores in SectorCredit" v-bind:value="scores.id"> {{scores.Name }} </option>
        </select><b></b></section>
      </div>
      </span>


      <span v-if="Sectordrp == 1 || Sectordrp == 2 || Sectordrp == 3 ||Sectordrp == 4 || Sectordrp == 5 || Sectordrp == 6 || Sectordrp == 7">
        <div class="cls-flex">
        <label>Select the number of jobs created per year?</label>
        <section> 
          <select class="input-txt-smp pad2 form-control" @change="onChange2($event.target.value)" style="width: ;" v-model="Number" id="numberjob" >
          <option selected disabled hidden >Select</option>
          <option v-for="number in numberjob" v-bind:value="number.Name"> {{number.Name }} </option>
      </select><b>{{firstclaculation}}</b></section>
      </div>
    </span>


    <span v-if="Sectordrp == 8 || Sectordrp == 9 || Sectordrp == 10 || Sectordrp == 11   ">
      <div class="cls-flex">
      <label>Select the number of jobs created per year?</label>
      <section><select class="input-txt-smp pad2 form-control" @change="onChange3($event.target.value)" style="width: ;" v-model="Number" id="numberjob" >
        <option selected disabled hidden >Select</option>
        <option v-for="number in numberjob" v-bind:value="number.Name"> {{number.Name }} </option>
    </select>
    <b>{{tierpolygon4}}</b>
    <b  v-if=" (Sectordrp == 11 && Numberdrp >= 175)  || ( Sectordrp == 10 && Numberdrp >= 175) || ( Sectordrp == 9 && Numberdrp >= 175) || (Sectordrp == 8 && Numberdrp >= 175) " >
      {{tiergreater175}}
    </b>
    <b  v-if=" (Sectordrp == 11 && Numberdrp >= 100 && Numberdrp <150)  || ( Sectordrp == 10 && Numberdrp >= 100 && Numberdrp <150) || ( Sectordrp == 9 && Numberdrp >= 100 && Numberdrp <150) || (Sectordrp == 8 && Numberdrp >= 100 && Numberdrp <150) " >
      {{tiergreater175}}
    </b>
    <b  v-if=" (Sectordrp == 11 && Numberdrp >= 50 && Numberdrp <100)  || ( Sectordrp == 10 && Numberdrp >= 50 && Numberdrp <100) || ( Sectordrp == 9 && Numberdrp >= 50 && Numberdrp <100) || (Sectordrp == 8 && Numberdrp >= 50 && Numberdrp <100) " >
      {{tiergreater175}}
    </b>
    <b  v-if=" (Sectordrp == 11 && Numberdrp >= 25 && Numberdrp <50)  || ( Sectordrp == 10 && Numberdrp >= 25 && Numberdrp <50) || ( Sectordrp == 9 && Numberdrp >= 25 && Numberdrp <50) || (Sectordrp == 8 && Numberdrp >= 25 && Numberdrp <50) " >
      {{tiergreater175}}
    </b>
  </section>
    </div>
  </span>

<span v-if=" (Sectordrp == 11 && Numberdrp >= 150 && Numberdrp < 175) ||( Sectordrp == 10 && Numberdrp >= 150 && Numberdrp < 175) || (Sectordrp == 9 && Numberdrp >= 150 && Numberdrp < 175)  || (Sectordrp == 8 && Numberdrp >= 150 && Numberdrp < 175)" >
  <div class="cls-flex">
  <label>Are you willing to place these jobs in a currently vacant building?</label>
  <section><select class="input-txt-smp pad2 form-control" @change="onChange4($event.target.value)" style="width: ;" v-model="vacentrdrp" id="vacentUser">
      <option >Select</option>
      <option v-for="vacent in vacentUser" v-bind:value="vacent.id"> {{vacent.Name }} </option>
  </select>
  <b v-if="vacentrdrp == '1' " >{{tierpolygon123}}</b>
</section>
    <label v-if="vacentrdrp == '2'">Each job must pay at least [min(county table lookup per capita income, state table lookup per capital income)*1.5 per year.</label>
  </div>
</span>

<span v-if="( Sectordrp == 11 && Numberdrp >= 2    && Numberdrp < 25) || (Sectordrp == 10 && Numberdrp >= 2 && Numberdrp < 25) || (Sectordrp == 9 && Numberdrp >= 2 && Numberdrp < 25)  || (Sectordrp == 8 && Numberdrp >= 2 && Numberdrp < 25)" >
  <div class="cls-flex">
  <label>Select the number of jobs your company has worldwide?</label>
  <section><select class="input-txt-smp pad2 form-control" @change="onChange8($event.target.value)" style="width: ;" v-model="jobworldwide" id="jobsworldwide">
      <option >Select</option>
      <option v-for="job in jobsworldwide" v-bind:value="job.Name"> {{job.Name }} </option>
  </select>
  <b>{{jobworldwidecalculation}}<span>“This credit requires jobs that pay (insert table look county hourly wage rate average -> look up county name in metrolist_to_msa table to get MSA value, then using MSA value look up h_mean value where occ_title = All Occupations *1.2),  120% or more of the county’s average hourly wage rate.  For hour wages less than (insert same value), credits from $750 to $12,500 may be available for qualifying companies”.</span></b>
  </section>
  </div>
</span>


<span v-if="jobdrp > 99" >
 <label>You are not considered a small business within this program.  You will need to create more than 25 jobs at a minimum to qualify for tax credits</label>
</span>

</span>
          <span v-if="Userdrp == 2  ">
            <div class="button-set" >
              <button  @click="handleClickrestart"    >Restart</button>
              <button class="cancel-alert" v-bind:class="{ 'open-popup-quite' : isActive }"   @click="handleClick"  >Quite</button>
          </div>
        </span>

     


  <span v-if="Userdrp != 2 ">
    <span v-if="(Userdrp != 2 ) && ((Sectordrp == 1 || Sectordrp == 2 || Sectordrp == 3 ||Sectordrp == 4 || Sectordrp == 5 || Sectordrp == 6 || Sectordrp == 7) && (firstclaculation != '' && this.Numberdrp != ''))">
      <div class="button-set" >
        <button class="cancel-alert" @click="submitdata(mainInfo.countyName,userid)">Save1</button>
    </div>
  </span>
  <span v-if="(Userdrp != 2  ) &&  ((Sectordrp == 8 || Sectordrp == 9 || Sectordrp == 10 || Sectordrp == 11) && ((Numberdrp >= 175) || (Numberdrp >= 25 && Numberdrp <50) || (Numberdrp >= 50 && Numberdrp <100) || (Numberdrp >= 100 && Numberdrp <150))) ">
    <div class="button-set" >
      <button class="cancel-alert" @click="submitdata(mainInfo.countyName,userid)">Save2</button>
  </div>
</span>
  <span v-if="(Userdrp != 2) && ((Sectordrp == 8 || Sectordrp == 9 || Sectordrp == 10 ||Sectordrp == 11 ) && (tierpolygon123 != '') && (vacentrdrp != 2))">
    <div class="button-set" >
      <button class="cancel-alert" @click="submitdata(mainInfo.countyName,userid)">Save3</button>
  </div>
</span>
<span v-if="(Userdrp != 2 ) && ((Sectordrp == 8 || Sectordrp == 9 || Sectordrp == 10 ||Sectordrp == 11 ) && (jobworldwidecalculation != '') && (jobdrp < 99) )">
  <div class="button-set" >
    <button class="cancel-alert" @click="submitdata(mainInfo.countyName,userid)">Save4</button>
</div>
</span>
  </span>    
  </div>
  </div>


  
    <!--calculator shell-->
    <div v-if="!info" class="calc-shell">
      <!--Tabs-->
      <ul class="tabs">
        <li
          v-for="(tab, i) in tabs"
          :key="i"
          class="tab"
          :class="{ 'tab--active': tab.name === modelValue }"
          @click="setSelectedTab(i)"
        >
          {{ tab.text }}
        </li>
      </ul>

      <!--Cards-->
      <transition-group
        name="tr-slide"
        mode="out-in"
        tag="div"
        class="card"
        :class="{ 'hide-card-overflow': isTransitioning }"
        @before-leave="isTransitioning = true"
        @after-enter="isTransitioning = false"
      >
        <slot></slot>
        <!--
          slots should be passed as an html element(div is preferred) with the following format:
          <div v-show="activeTab === 'tab-name'" key="tab-name"> content </div>
          active tab is the v-model that binds to tab <Tabs> component
         -->
      </transition-group>
    </div>
    <!--Info shell-->
    <div
      v-else
      class="info-shell"
      :class="{
        'info-shell-no-sidebar': sidebarInfo === null || !isSideBarShown,
      }"
    >
      <button class="info-shell-btn" @click="$emit('back')">
        Back to calculator
        <img
          class="info-shell-btn-icon"
          src="~assets/icons/icon-enter.png"
          alt="enter icon"
        />
      </button>

      <!--Main info-->
      <div v-if="mainInfo" class="card main-info-card">
        <div class="info-content-container">
          <header class="main-info-header">
            <h2 class="main-header-info-title">
              {{ mainInfo.data.statename }}

            </h2>
            <div class="info-header">
              <div class="info-header__country">
                <span class="info-header-title">County</span>
                <span class="info-header-title-value">{{
                  mainInfo.countyName
                }}</span>
              </div>

              <div class="info-header__geo">
                <span class="info-header-subtitle">GEO ID</span>
                <span class="info-header-subtitle-value">{{
                  mainInfo.geoId
                }}</span>
              </div>
            </div>
          </header>

          <div v-for="i in 1" :key="i" class="info-content-main">
            <span ref="mainInfoText" class="info-content-row-text">
              Urbanized / Total Population
            </span>
            
            <span class="info-content-row-value">{{
              mainInfo.data.population
            }}</span>

            <span ref="mainInfoText" class="info-content-row-text">
              Number of people with college degree or higher / total population
            </span>
            <span class="info-content-row-value">{{
              mainInfo.data.degree
            }}</span>

            <span ref="mainInfoText" class="info-content-row-text">
              Single family unit housing structures (%)
            </span>
            <span class="info-content-row-value">{{
              mainInfo.data.single
            }}</span>

            <span ref="mainInfoText" class="info-content-row-text">
              2-9 Unit housing structures (%)
            </span>
            <span class="info-content-row-value">{{
              mainInfo.data.medium
            }}</span>

            <span ref="mainInfoText" class="info-content-row-text">
              10 or more unit housing structures (%)
            </span>
            <span class="info-content-row-value">{{
              mainInfo.data.expand
            }}</span>

            <span ref="mainInfoText" class="info-content-row-text">
              Median household income
            </span>
            <span class="info-content-row-value">{{
              mainInfo.data.income
            }}</span>

            <span ref="mainInfoText" class="info-content-row-text">
              Number of people aged 25 or older who have a bachelor's degree,<br />master's
              degree, professional school degree, or doctorate degree, divided
              by the total number of people aged 25 or older in a tract (%)
            </span>

            <span class="info-content-row-value">{{
              parseFloat(mainInfo.data.degrees * 100).toFixed(2)
            }}</span>

            <span ref="mainInfoText" class="info-content-row-text">
              The median gross rent for renter-occupied housing units with two
              bedrooms that pay cash rent (from the 2011-2015 ACS)
            </span>
            <span class="info-content-row-value">{{
              mainInfo.data.house_count
            }}</span>

            <span ref="mainInfoText" class="info-content-row-text">
              Average annualized job growth rate over the time period 2004 to
              2013 (%)
            </span>
            <span class="info-content-row-value">{{
              parseFloat(mainInfo.data.job_growth_rate * 100).toFixed(2)
            }}</span>

            <span ref="mainInfoText" class="info-content-row-text">
              Number of jobs per square mile in each tract
            </span>
            <span class="info-content-row-value">{{
              parseFloat(mainInfo.data.per_square_job).toFixed()
            }}</span>

            <span ref="mainInfoText" class="info-content-row-text">
              Number of residents per square mile
            </span>
            <span class="info-content-row-value">{{
              parseFloat(mainInfo.data.residents_count).toFixed()
            }}</span>
            
            
            <span ref="mainInfoText" class="info-content-row-text" v-if="mainInfo.data.statename == 'South Carolina'">
                Job Tax Credit Available
                <div class="pop-title">
                  The South Carolina Tiered Jobs Tax Credit is a valuable financial incentive that rewards new and expanding companies for creating jobs in South Carolina
                </div>
            </span>
            <span class="info-content-row-value" v-if="mainInfo.data.statename == 'South Carolina'">
              <div class="location-popup__actions">
                <button class="location-popup__actions__compare" @click="compare(mainInfo.countyName ,userid)"  >
                  <span v-if ="(firstclaculation) || worldwide ">${{firstclaculation}}{{worldwide}}</span>
                  $55,589.83
                </button>
              </div>
                
              
               <div class="pop-title" >Based on 5-year employment. Personalize your tax credit</div>
            </span>
             
          </div>
        </div>
      </div>

      <!--Side bar info-->
      <div
        v-if="sideInfo"
        v-show="isSideBarShown"
        class="card side-bar-info-card"
      >
        <button class="card-close-btn" @click="close">
          <img
            class="card-close-btn-icon"
            src="~assets/icons/icon-close.png"
            alt="close icon"
          />
        </button>

        <div class="info-content-container">
          <header class="info-header">
            <div class="info-header__country">
              <span class="info-header-title">County</span>
              <span class="info-header-title-value">{{
                sideInfo.countyname
              }}</span>
            </div>

            <div class="info-header__geo">
              <span class="info-header-subtitle">GEO ID</span>
              <span class="info-header-subtitle-value">{{
                sideInfo.geoid
              }}</span>
            </div>
          </header>

          <div v-for="i in 1" :key="i" class="info-content-side">
            <span ref="sideInfoText" class="info-content-row-value">{{
              sideInfo.population
            }}</span>

            <span ref="sideInfoText" class="info-content-row-value">{{
              sideInfo.degree
            }}</span>

            <span ref="sideInfoText" class="info-content-row-value">{{
              sideInfo.single
            }}</span>

            <span ref="sideInfoText" class="info-content-row-value">{{
              sideInfo.medium
            }}</span>

            <span ref="sideInfoText" class="info-content-row-value">{{
              sideInfo.expand
            }}</span>

            <span ref="sideInfoText" class="info-content-row-value">{{
              sideInfo.income
            }}</span>

            <span ref="sideInfoText" class="info-content-row-value">{{
              parseFloat(sideInfo.degrees * 100).toFixed(2)
            }}</span>

            <span ref="sideInfoText" class="info-content-row-value">{{
              sideInfo.house_count
            }}</span>

            <span ref="sideInfoText" class="info-content-row-value">{{
              parseFloat(sideInfo.job_growth_rate * 100).toFixed(2)
            }}</span>

            <span ref="sideInfoText" class="info-content-row-value">{{
              parseFloat(sideInfo.per_square_job).toFixed()
            }}</span>

            <span ref="sideInfoText" class="info-content-row-value">{{
              parseFloat(sideInfo.residents_count).toFixed()
            }}</span>

            
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue';
const FORMSPARK_ACTION_URL = "http://localhost:4000/user/southcarolinalisting";
const FORMSPARK_ACTION_URL1 = "http://localhost:4000/user/southPromote"; 
const FORMSPARK_ACTION_URL2 =  "http://localhost:4000/user/Singleuserandploygondetail"

import axios from "axios";

export default Vue.extend({
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    tabs: {
      type: Array /* [ { text: 'some thing', name: 'some-thing' } ] - name should be matched with the slot */,
      required: true,
      validator(arr) {
        return arr.every(
          (step: any) =>
            step.text &&
            typeof step.text === 'string' &&
            step.name &&
            (typeof step.name === 'string' || typeof step.name === 'number')
        );
      },
    },
    modelValue: {
      type: String || Number, // Model value
      required: true,
    },
    info: Boolean,
    mainInfo: Object || null,
    sidebarInfo: Object || null,
    changeStatus: Boolean,
  },
  data: () => ({
    mainInfoHeights: [],
    isSideBarShown: false,
    isTransitioning: false,
    sideInfo: null,
    isActive: false,
    // global variable 
    Numberofyears : 5,
    five_Year_Treasury : .0085,
    firstclaculation : '',
    tierpolygon4:'',
    tierpolygon123:'',
    jobworldwidecalculation: '',
    compare_one_window_open: false,
    compare_one_Infowindow: null,
    compareOnePolygon: {
      countyName: '',
      geoId: '',
      data: null,
    },
  
    ddlUser: [{"id": "1","Name": "Yes"},{"id": "2","Name": "NO"}],
    SectorCredit: 
[
{"id": "1","Name": "Manufacturing"},
{"id": "2","Name": "Processing"},
{"id": "3","Name": "Agricultural Packaging"},
{"id": "4","Name": "Warehousing and Distribution"},
{"id": "5","Name": "Research and Development"},
{"id": "6","Name": "Agribusiness operations"},
{"id": "7","Name": "Technology"},
{"id": "8","Name": "North American Industry Classification System Manual Section Table Subsector 621"},
{"id": "9","Name": "North American Industry Classification System Manual Section Table Subsector 622"},
{"id": "10","Name": "North American Industry Classification System Manual Section Table Subsector 623"},
{"id": "11","Name": "North American Industry Classification System Manual Section Table Subsector 488190"},
],

vacentUser: [{"id": "1","Name": "Yes"},{"id": "2","Name": "NO"}],
numberjob: [{"id": "1","Name": "10"},{"id": "2","Name": "20"},{"id": "3","Name": "30"},{"id": "4","Name": "55"},{"id": "5","Name": "100"},{"id": "6","Name": "130"},{"id": "10","Name": "150"},{"id": "7","Name": "175"},{"id": "8","Name": "200"},{"id": "9","Name": "10000"}],
jobsworldwide: [{"id": "1","Name": "10"},{"id": "2","Name": "20"},{"id": "3","Name": "30"},{"id": "4","Name": "55"},{"id": "5","Name": "100"},{"id": "6","Name": "130"},{"id": "10","Name": "150"},{"id": "7","Name": "175"},{"id": "8","Name": "200"},{"id": "9","Name": "10000"}],
User: 1,
Userdrp: "",
Sector:1,
Number:1,
jobworldwide:1,
jobdrp :'',
Sectordrp : '',
Numberdrp: '',
tier_value_per_employee :'',
currentlyvacant :false,
vacentrdrp: '',
tier7:'',
tier6:'',
tier5:'',
tiergreater175:'',
token:'',
jobcreatedperyear:'',
userid:''


  }),
  watch: {
    changeStatus() {
      this.sideInfo = this.sidebarInfo;
      this.isSideBarShown = true;
    },
    info() {
      this.isSideBarShown = false;
    },
    sideInfo() {
      this.handleUpdateHeights();
    },
  },
  
  created() {
    // Update v-model tab to the first passed tab if v-model value is not valid
    if (this.tabs?.length > 0) {
      // @ts-ignore: Unreachable code error
      if (!this.tabs.some((tab) => tab.name === this.modelValue)) {
        // @ts-ignore: Unreachable code error
        this.$emit('update:modelValue', this.tabs[0].name);
      }
    }
  },
  mounted() {
    this.token =window.localStorage.getItem("token") 
    this.userid = window.localStorage.getItem("userid") 
    this.jobworldwidecalculation;
    console.log(this.token,'this.token')
    console.log(this.userid ,'userid' )
    this.handleUpdateHeights();
    this.Userdrp ;
    this.Sectordrp ;
  },
  methods: {
    handleClick: function(){
      window.location.reload()
      // this.$router.push('/opportunity');
      this.isActive = false;
          localStorage.clear( );
    },


    handleClickrestart :function() {
      this.firstclaculation = '',
      this.jobworldwidecalculation = '',
     
      this.Sectordrp = '',
        this.jobcreatedperyear ='',
     this.jobdrp =''
    },
   
    submitdata:function(countyName,userid){


      
      if(this.Sectordrp == 1 || this.Sectordrp == 2 || this.Sectordrp == 3 ||this.Sectordrp == 4 || this.Sectordrp == 5 || this.Sectordrp == 6 || this.Sectordrp == 7) {
        this.jobcreatedperyear = this.Numberdrp

      }
      else{
        this.jobcreatedperyear =  this.Numberdrp
      }
      const ss  = {
        firstclaculation: +this.firstclaculation,
        finalsubmissionvalue: +this.jobworldwidecalculation,
        personperyear:this.Userdrp,
        taxcreditSectors :+this.Sectordrp,
        jobcreatedperyear : +this.jobcreatedperyear,
        worldwide : +this.jobdrp,
        Southploygonname:countyName,
        userid:userid
       
      }

      console.log(ss,'ss')

      axios.post(FORMSPARK_ACTION_URL1,{ss: ss}).then(
                            (response) => { this.tier_value_per_employee  = response.data.data[0].Tier},
                            (error) => { console.log(error)}
                        )
   


    },





    setSelectedTab(i: any) {
      // @ts-ignore: Unreachable code error
      this.$emit('update:modelValue', this.tabs[i].name);
    },


//when Click on amount value 

    compare(countyName) {
      this.compareFlag = true;
      this.isActive = true;
    // get the ploygon tier value 
      axios.post(FORMSPARK_ACTION_URL,{County: countyName}).then(
              (response) => { this.tier_value_per_employee  = response.data.data[0].Tier},
               (error) => { console.log(error)})
   // 
// get polygon and user value from saved table
   axios.post(FORMSPARK_ACTION_URL2,{Southploygonname: countyName ,userid:this.userid}).then(
              (response) => {this.getValueFun(response.data.data) },
               (error) => { console.log(error)})
    // end of api's                    
    },

   

     

    getValueFun(val) {
      if(val.personperyear != ''){
        this.onChange(val.personperyear)
        if(val.taxcreditSectors !=''){
          this.onChange1(val.taxcreditSectors)
          if(val.jobcreatedperyear != ''){
          //  if(val.taxcreditSectors == '1' || val.taxcreditSectors == '2 '|| val.taxcreditSectors == '3 '|| val.taxcreditSectors == '4' || val.taxcreditSectors == '5' || val.taxcreditSectors == '6' || val.taxcreditSectors == '7' )
          //   {
          //     this.onChange2(val.jobcreatedperyear)
          //  }
          // if(val.taxcreditSectors == '8' || val.taxcreditSectors == '9' || val.taxcreditSectors == '10' || val.taxcreditSectors == '11'  )
          //   {
          //     this.onChange3(val.jobcreatedperyear)
          //  }

          //  this.onChange3(val.jobcreatedperyear)
            if(val.worldwide != '') {
              this.onChange8(val.worldwide)
            }
          }
        }
      }
    },

    onChange: function (event) {
      console.log(event,'event')
      if(event){
        this.Userdrp = event;
        console.log(this.Userdrp,'this.Userdrp')
      }
      },


      onChange1: function (event) {
        if(event) {
         this.Sectordrp = event;
         if(this.Sectordrp == 8 || this.Sectordrp == 9 || this.Sectordrp == 10 || this.Sectordrp == 11 ){
          this.firstclaculation = ''
          if(this.Numberdrp != ''){
            console.log('----------',this.Numberdrp)
            this.onChange3(this.Numberdrp)
           }
         }else{
           if(this.Numberdrp != ''){
             console.log(this.Numberdrp ,'================== ')
            this.firstclaculation =(this.Numberdrp*this.Numberofyears*this.tier_value_per_employee/(Math.pow(1+this.five_Year_Treasury,this.Numberofyears)) ).toFixed(3)
           }else{
            this.Numberdrp = ''
           }
            this.jobworldwidecalculation =''
         }
         console.log(this.Sectordrp ,'this.Sectordrp ')
        }
      },

      onChange2: function (event) {
        if(event) {
          this.Numberdrp = +event ;
          this.firstclaculation =(this.Numberdrp*this.Numberofyears*this.tier_value_per_employee/(Math.pow(1+this.five_Year_Treasury,this.Numberofyears)) ).toFixed(3)
           console.log(this.firstclaculation,'if tier value is 4')
        }
      },

      onChange3: function (event) {
        if(event) {
     this.Numberdrp = +event;
     console.log(this.Numberdrp,'this.Numberdrp')
     console.log(this.tier_value_per_employee,'this.Numberdrp')
     this.tierpolygon123 = '';
     this.jobworldwidecalculation = '';
     if(   this.tier_value_per_employee == 4) {
      this.tierpolygon4 = (this.Numberdrp*this.Numberofyears*this.tier_value_per_employee/(Math.pow(1+this.five_Year_Treasury,this.Numberofyears)) ).toFixed(3)
      console.log(this.tierpolygon4,'if tier value is 4')
     }else if(this.tier_value_per_employee == 1 || this.tier_value_per_employee == 2 || this.tier_value_per_employee == 3 ) {

       if( this.Numberdrp >= 100  && this.Numberdrp <150){
        this.tiergreater175 = (this.Numberdrp*this.Numberofyears*this.tier_value_per_employee/(Math.pow(1+this.five_Year_Treasury,this.Numberofyears)) ).toFixed(3)
            console.log(  this.tiergreater175,' 100 and 150')
       }else if(this.Numberdrp >= 50  && this.Numberdrp <100){
        this.tiergreater175 = (this.Numberdrp*this.Numberofyears*this.tier_value_per_employee/(Math.pow(1+this.five_Year_Treasury,this.Numberofyears)) ).toFixed(3)
            console.log(  this.tiergreater175,' 50 and 100')
       }else if(this.Numberdrp >= 175){
        this.tiergreater175 = (this.Numberdrp*this.Numberofyears*this.tier_value_per_employee/(Math.pow(1+this.five_Year_Treasury,this.Numberofyears)) ).toFixed(3);
            console.log(  this.tiergreater175,' >175 and 1, 2 ,3');
        }else if(this.Numberdrp >= 25  && this.Numberdrp <50){
        this.tiergreater175 = (this.Numberdrp*this.Numberofyears*this.tier_value_per_employee/(Math.pow(1+this.five_Year_Treasury,this.Numberofyears)) ).toFixed(3)
            console.log(  this.tiergreater175,' 25 and 50')
       }

       }
        } 
      },

      //  when value under 150 ane 175 
      onChange4: function (event) {
      if(event) {
        this.vacentrdrp = event;
        this.tierpolygon123 =(this.Numberdrp*this.Numberofyears*this.tier_value_per_employee/(Math.pow(1+this.five_Year_Treasury,this.Numberofyears))).toFixed(3)
        console.log(  this.tierpolygon123,'150 ane 175 ')
      }
      },

     //  when value under 2 ane 25 
      onChange8: function (event) {
      if(event) {
        this.jobdrp = event;
        if(this.jobdrp < 99) {
       this.jobworldwidecalculation = (this.jobdrp*this.Numberofyears*this.tier_value_per_employee/(Math.pow(1+this.five_Year_Treasury,this.Numberofyears))).toFixed(3)
       console.log(this.jobworldwidecalculation,'this.jobworldwidecalculation')
        }
      }
      },

    close() {
      this.isSideBarShown = false;
      this.sideInfo = null;
    },
    handleUpdateHeights() {
      if (this.info) {
        setTimeout(() => {
          // get heights of the each main info rows
          if (this.$refs.mainInfoText && this.$refs.mainInfoText.length > 0) {
            
            this.mainInfoTextHeights = [];


            this.$refs.mainInfoText.forEach((row) => {
              // get element height and save
              this.mainInfoTextHeights.push(row.getBoundingClientRect().height);

            });
          }

          if (this.$refs.sideInfoText && this.$refs.sideInfoText.length > 0) {
            // set height of each element
            this.$refs.sideInfoText.forEach((row, i) => {
              if (this.mainInfoTextHeights[i]) {
                row.style = `min-height: ${this.mainInfoTextHeights[i]}px`;
              }
            });
          }
        }, 0);
      }
    },
  },
});
</script>

<style scoped lang="scss">
.calc-shell {
  display: flex;
}

.tabs {
  display: flex;
  flex-direction: column;
  order: 2;
  margin: 0;
  z-index: 1;
  transform: translateX(-5px);
  padding: 30px 0 0 0;
}

.tab {
  background-color: $color-blue-3;
  padding: 25px 14px;
  list-style-type: none;
  border-radius: 0 25px 25px 0;
  line-height: 1.1;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  color: $color-grey-4;
  font-weight: bold;

  &--active {
    background-color: $color-blue-4;
    color: $color-white;
  }

  &:hover {
    transform: translateX(5px);
  }
}

.card {
  border-radius: 16px;
  border: 1px solid $color-grey-3;
  padding: 20px;
  z-index: 2;
  min-width: 300px;
  min-height: 400px;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  overflow-x: hidden;
}

.hide-card-overflow {
  overflow: hidden;
}

// info shell
.info-shell {
  display: grid;
  grid-template-columns: 650px minmax(180px, auto);
  grid-template-rows: auto auto;
  grid-column-gap: 15px;
  grid-row-gap: 35px;
  grid-auto-flow: revert;

  .card {
    min-width: unset;
    padding: 10px;
  }
}

.info-shell-no-sidebar {
  grid-template-columns: 650px;
}

.info-shell-btn {
  border-radius: 16px;
  font-weight: bold;
  background-color: $color-blue-6;
  border: none;
  grid-column: 1 / -1;
  width: max-content;
  padding: 10px 15px;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  color: $color-white;
}

.info-shell-btn-icon {
  height: 17px;
  margin-left: 12px;
}

.card-close-btn {
  background: none;
  border: none;
  padding: 0;
  border-radius: 100px;
  height: 27px;
  width: 27px;
  align-self: flex-end;
  margin-bottom: 10px;
}

.card-close-btn-icon {
  height: 100%;
  width: 100%;
}

.side-bar-info-card,
.main-info-card {
  display: flex;
  flex-direction: column;
}

.side-bar-info-card {
  grid-column: 2 / -1;
}

.info-header {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid $color-grey-3;
  padding-bottom: 15px;

  &__country,
  &__geo {
    display: flex;
    justify-content: space-between;
  }

  .info-header-title {
    color: $color-blue-3;
    font-size: 0.9rem;
    margin-bottom: 5px;
  }

  .info-header-title-value {
    color: $color-blue-3;
    font-weight: bold;
    font-size: 0.9rem;
    margin-bottom: 5px;
    margin-left: 10px;
  }

  .info-header-subtitle {
    font-size: 0.6rem;
    color: $color-blue-3;
  }

  .info-header-subtitle-value {
    font-size: 0.6rem;
    margin-left: 10px;
  }
}

.info-content-container {
  padding: 0 16px 20px 16px;
}

.info-content-side {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;

  & > * + * {
    margin-top: 14px;
  }
}

.info-content-main {
  margin-top: 25px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 25px;
  grid-row-gap: 14px;
}

.info-content-row-text {
  color: $color-grey-3;
}

.info-content-row-value {
  color: $color-blue-1;
  font-weight: 500;
  white-space: nowrap;
}

.main-info-card {
  .main-info-header {
    margin-top: 37px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $color-grey-3;
    padding-bottom: 15px;
    align-items: center;

    .main-header-info-title {
      color: $color-blue-3;
      flex: 1 0 50%;
      margin-bottom: 0;
      line-height: 1.1;
    }

    .info-header {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
}
span.info-content-row-text, span.info-content-row-value {
    position: relative;
}
span.info-content-row-text:hover .pop-title, span.info-content-row-value:hover .pop-title{
    visibility:inherit;
}

span.info-content-row-text .pop-title, span.info-content-row-value .pop-title {
    background: #333;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    bottom: 30px;
    left: 0;
    color: #989898;
    visibility:hidden;
}
span.info-content-row-value .pop-title {
    left: initial !important;
    right: 0;
}
span.info-content-row-text .pop-title:before, span.info-content-row-value .pop-title:before {
    width: 12px;
    height: 12px;
    background: #333;
    content: '';
    position: absolute;
    bottom: -4px;
    transform: rotate(45deg);
    border-radius: 3px;
}
span.info-content-row-value .pop-title:before{right:15px;}



.location-popup__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 27px;

  &__compare {
    color: #2275c3;
    font-size: 14px;
    border: none;
    background: unset;
    padding: unset;
    font-weight: 300;
  }

  &__add {
    background: none;
    border: none;
    border-radius: 100px;
    padding: unset;

    & img {
      height: 27px;
    }
  }
}
.alert-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    left:0;
    top:0;
    background: rgba(0,0,0,.7);
    z-index: 5;
    display: none;
}

.open-popup{
  display: block;
}
.open-popup-quite{
  display: block;
}

.alert-set {
    position: fixed;
    width: 350px;
    background: white;
    text-align: center;
    border-radius: 15px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    padding: 40px 20px;
}

.alert-set h5 {
    margin: 0px 0 20px;
}

.button-set button {
    background: #333;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 6px;
    display: inline-block;
    margin: 0 5px;
    width: 100px;
}

.button-set button.cancel-alert {
    background: #0095d6;
}


.input-select-container,
.input-text-container {
  display: flex;
  align-items: center;
}
.alert-set select {
    margin-bottom: 15px;
}
.cls-flex {
    padding-right: 90px;
    text-align: left;
    margin-bottom: 10px;
}

.cls-flex section {
    position: relative;
}

.cls-flex section b {
  cursor: pointer;
    position: absolute;
    right: -90px;
    bottom: 6px;
    font-weight: 500;
    color: #021d46;
}
.cls-flex section b span {
    position: absolute;
    right: 0;
    background: #313131;
    bottom: 27px;
    width: 300px;
    color: white;
    padding: 15px;
    border-radius: 10px;
    visibility: hidden;
}

.cls-flex section b span:after {content: '';position: absolute;width: 14px;height: 14px;background: #313131;bottom: -5px;transform: rotate(45deg);right: 14px;}

.cls-flex section b:hover span {
    visibility: initial;
}
</style>
