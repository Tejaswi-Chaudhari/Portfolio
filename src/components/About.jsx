import React from 'react'
import { AttentionSeeker } from "react-awesome-reveal";
import './styles.css'
import helloLight from '../media/hello-light.png'
import helloDark from '../media/hello-dark.png'

const About = ({darkMode}) => {

    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
      
    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
    window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }

        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };


    return (
        <div>
            <AttentionSeeker shakeX>
                <h1 className="display-3" align="center">HELLO!<code> I'm Tejaswi</code></h1>
                <h2 className="lead" align="center">I
                    <span
                        class="txt-rotate"
                        data-period="2000"
                        data-rotate='[ " am a Full-Stack Developer.", " can work with NLP.", " love designing.", " am working on Problem Solving.", " am a learner for life!" ]'>
                    </span>
                </h2>
                <center>
                <img src={darkMode? helloDark : helloLight} alt="hello" className="hello-img"/>
                </center>
            </AttentionSeeker>
        </div>
    )
}

export default About
