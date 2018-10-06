import Vue from 'vue'
import Vuex from 'vuex'
import GetSheetDone from 'get-sheet-done'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {
        slug: 'plantbased',
        title: "Old Plant-based Diet",
        description: "Plant-based diet is a way of eating that celebrates plant foods and cuts out unhealthy items like added sugars and refined grains.",
        imgSrc: require('./assets/01_plantbased.png'),
        questions: [
          {
          text: 'When eating out, I usually...',
          imgs: '',
          type: '',
            answers: [
              {
                text: 'Choose a restaurant that doesn\'t use disposables or bring my own reusable servingware and cutlery.',
                value: 10,
                selected: false
              },
              {
                text: 'Don\'t really think about the waste created from eating there.',
                value: 20
              }
            ]
          },
          {
          text: 'plant-based question 2',
          imgs: '',
          type: '',
          answers: [
              {
                text: 'plant-based question 2 answer 1',
                value: ''
              },
              {
                text: 'plant-based question 2 answer 2',
                value: ''
              }
            ]
          },
          {
          text: 'plant-based question 3',
          imgs: '',
          type: '',
          answers: [
              {
                text: 'plant-based question 3 answer 1',
                value: ''
              },
              {
                text: 'plant-based question 3 answer 2',
                value: ''
              }
            ]
          },
        ]
      },
      {
        slug: 'zerowaste',
        title: "Zero Waste",
        description: "Zero Waste is a concept that challenges the old way of thinking about waste as something that has no value and to be thrown away.",
        imgSrc: require('./assets/02_zerowaste.png'),
        questions: [
          {
          text: 'Zero Waste question 1',
          imgs: '',
          type: '',
          answers: [
              {
                text: 'Zero Waste question 1 answer 1',
                value: ''
              },
              {
                text: 'Zero Waste question 1 answer 2',
                value: ''
              }
            ]
          },
          {
          text: 'Zero Waste question 2',
          imgs: '',
          type: '',
          answers: [
              {
                text: 'Zero Waste question 2 answer 1',
                value: ''
              },
              {
                text: 'Zero Waste question 2 answer 2',
                value: ''
              }
            ]
          },
          {
          text: 'Zero Waste question 3',
          imgs: '',
          type: '',
          answers: [
              {
                text: 'Zero Waste question 3 answer 1',
                value: ''
              },
              {
                text: 'Zero Waste question 3 answer 2',
                value: ''
              }
            ]
          },
        ],

      
      }
    ]
  },
  mutations: {
    storeData(state, data){
      state.categories[0].title = data[0].category;
    }

  },
  actions: {
    getData(){
      GetSheetDone.labeledCols('17_sT-7gZqDicun-bf5IC82CaB64p-nBy3tX5eiP7cfk', 1).then(sheet => {
        this.commit('storeData', sheet.data);
        // console.log(this.state.rawDataSheet1[0].category)
      })
    }
  }
})
