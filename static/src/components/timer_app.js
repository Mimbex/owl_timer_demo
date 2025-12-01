/** @odoo-module **/

import { Component, useState,onMounted, onWillUnmount } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { standardActionServiceProps } from "@web/webclient/actions/action_service";

export class TimerApp extends Component {
    static template = "owl_timer_demo.TimerApp";
    static props = { ...standardActionServiceProps };

    setup() {

        this.state = useState({
            seconds: 0,
            isRunning: false,
        });

        this.intervalId = null;


       onMounted(() => {

        console.log("TimerApp mounted");
       });

       onWillUnmount(() => {
        this.clearInterval();
    });
    }

    clearInterval(){
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    toggleTimer(){
        if (this.state.isRunning) {
            this.clearInterval();
            this.state.isRunning = false;
        } else {
          
            this.state.isRunning = true;
            this.intervalId = setInterval(() => {
                this.state.seconds ++;
        }, 1000);
        }

    }

    resetTimer(){
        this.clearInterval();
        this.state.seconds = 0;
        this.state.isRunning = false;
    }

    get formattedTime() {
        const minutes = String(Math.floor(this.state.seconds / 60)).padStart(2, "0");
        const seconds = String(this.state.seconds % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
    }


}

registry.category("actions").add("owl_timer_demo.timer_app", TimerApp);

