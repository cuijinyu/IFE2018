import san from 'san';
var MyApp = san.defineComponent({
    template: `<div>
    <style scoped>
            .enter, .leave {
          transition: all .5s;
        }
        
        .before-enter, .leave {
          opacity: 0;
        }
        
        .enter, .before-leave {
          opacity: 1;
        }
    </style>
  <button on-click="toggle">TOGGLE</button>
  <span s-if="show" s-transition="hook">
    Transition Layer
  </span>
</div>`,
    initData() {
        return {show: true};
    },
    toggle() {
        this.data.set('show',!this.data.get('show'));
    },
    hook: {
        /* your answer */
        enter:function(el,done){
            let steps = 30;
            let currentStep = 0;

            /**
             * 并不清楚
             */
            function goStep() {
                if (currentStep >= steps) {
                    el.style.opacity = 1;
                    done();
                    return;
                }

                el.style.opacity = 1 / steps * currentStep++;
                requestAnimationFrame(goStep);
            }

            goStep();
        },
        leave:function(el,done){
            let steps = 30;
            let currentStep = 0;

            function goStep() {
                if (currentStep >= steps) {
                    el.style.opacity = 0;
                    done();
                    return;
                }

                el.style.opacity = 1 - 1 / steps * currentStep++;
                requestAnimationFrame(goStep);
            }

            goStep();
        }
    }
});
export default MyApp;
