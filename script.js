Vue.component('verte', Verte);

new Vue({
  el: '#main-container',
  data: {
    blobs: [],
    color: 'rgba(255,255,0)',
  },
  components: { Verte },
  mounted() {
    this.init();
  },
  methods: {
    create() {
      let newBlob = {};
      const randDiam = this.getRandom(40, 80);
      const randPos = this.getRandom(0, 150 - randDiam);
      const randTime = this.getRandom(10000, 20000);
      newBlob.w = randDiam + 'px';
      newBlob.h = randDiam + 'px';
      newBlob.left = randPos + 'px';
      newBlob.animTime = randTime + 'ms';
      this.blobs.push(newBlob);
    },
    init() {
      const numberOfBlobs = this.getRandom(8, 12);
      for (let i = 0; i < numberOfBlobs; i++) {
        this.create();
      }
    },
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
})
