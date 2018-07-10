/**
 * Created by sunqi on 2018/6/29.
 */

import ball_img from './assets/ball_img'
import spec_ball_img from './assets/spec_ball'
import wolf_img from './assets/wolf_img'

import leftArrow from './assets/left-arrow'
import rightArrow from './assets/right-arrow'

import  helper from '../../../utils/helper'

const slow = helper.isUIWEBKIT();
export default class Game {
    constructor(options) {
        this.containerID = options.containerID;
        this.startTime = options.startTime;
        this.container = $('#' + this.containerID);
        this.slow = helper.isUIWEBKIT()
        this.last = 0;
        this.interval = this.slow ? 20 : 10;

        this.score = 0;
        this.timeLimit = 30000
        this.time = 0;

        this.balls = [];
        this.wolf = null;
        this.onStop = options.onStop;

        this.active = false
        this.init()


    }

    init() {
        this.initWolf()
        // TODO TEST
        //this.addBall()
        this.animate()
    }

    updateClock() {
        const now = new Date().getTime();
        const d = now - this.startTime;
        this.time = d;
        $('#time-container').html(~~(this.time / 1000))
    }

    start() {

        const daojishi = $('#daojishi')
        const guide = $('#control-guide')
        guide.fadeIn(300)
        const self = this;

        daojishi.html(3);
        helper.loopDing()
        daojishi.fadeOut(1000, () => {
            helper.loopDing()
            daojishi.html(2)
            daojishi.fadeIn(0)
            daojishi.fadeOut(1000, () => {
                helper.loopDing()
                daojishi.html(1)
                daojishi.fadeIn(0)
                daojishi.fadeOut(1000, () => {
                    helper.chuishao();
                    daojishi.html('开始')
                    daojishi.fadeIn(0)

                    guide.fadeOut(100)
                    daojishi.fadeOut(1000, () => {
                        self.startTime = new Date().getTime();
                        self.active = true;
                    })
                })
            })
        })
    }

    stop() {
        this.active = false
        this.container.append(`<div class="youxijieshu animated zoomIn">游戏结束</div>`)

        setTimeout(() => {
            this.onStop(this.score)
        }, 1000)
    }

    addBall() {

        const spec = Math.random() > 0.8
        const options = {
            target: this.wolf.target,
            speed: (this.slow ? 6 : 5) + ~~(Math.random() * 5) ,
            score: spec ? 2 : 1,
            img: spec ? spec_ball_img : ball_img,
            container: this.container
        }

        this.balls.push(new Ball(options))
    }

    initWolf() {
        const w = 100;
        this.wolf = new Wolf({
            width: w,
            height: w * 1.1186,
            speed:  (this.slow ? 6 : 5),
            containerID: this.containerID
        })
    }


    fillBalls() {
        let liveCount = 0;
        this.balls.forEach(b => {
            if (b.live) {
                liveCount ++
            }
        })


        const l1 = this.slow ? 0.4 : 0.5;
        if (liveCount < 3) {
            if (Math.random() < l1) {
                this.addBall()
            }
        }


        const l2 = this.slow ? 0.15 : 0.2;

        if (liveCount >= 3 && liveCount < 7) {
            if (Math.random() < l2) {
                this.addBall()
            }
        }

        const l3 = 0.05;

        if (liveCount >= 7 && liveCount < 10) {
            if (Math.random() < l3) {
                this.addBall()
            }
        }

        const l4 =  0.02;

        if (liveCount > 10) {
            if (Math.random() < l4) {
                this.addBall()
            }
        }
    }

    render() {

        if (!this.active) {
            return false
        }

        this.updateClock()

        if (this.time > this.timeLimit) {
            this.stop()
        }


        this.fillBalls()
        this.wolf.update()
        this.balls.forEach(ball => {
            const flag = ball.update(this.wolf.target)
            if (flag) {
                this.score += flag;
                $('.score').html(this.score + '分')
            }
        })
        //this.balls.update()
    }

    animate() {
        const self = this;

        const now = Date.now();

        window.requestAnimationFrame(self.animate.bind(self))

        const delta = now - this.last;

        if (delta > this.interval) {
            this.last = (now - (delta % this.interval))
            self.render()

        }
    }
}

class Ball {
    constructor(options) {

        this.container = options.container;
        this.target = options.target;
        this.speed = options.speed;
        this.score = options.score;
        this.img = options.img;


        this.radius = 25;
        this.size = {
            width: this.radius * 2,
            height: this.radius * 2
        }
        this.id = 'ball' + (Math.random() + '').split('.')[1];
        this.pos = {
            x: (this.container.width() - this.radius * 2) * Math.random() + this.radius,
            y: -this.radius
        }
        this.css = this.getCss()
        this.elem = null;
        this.live = true;


        this.init()
    }

    init() {
        this.add()
    }

    getCss() {
        return {
            top: (this.pos.y - this.radius) + 'px',
            left: (this.pos.x - this.radius) + 'px'
        }
    }


    add() {
        const htm = `<div id="${this.id}" class="ball" style="width:${this.size.width}px;height:${this.size.height}px;top: ${this.css.top};left: ${this.css.left};"><img class="ball-img" src="${this.img}"/></div>`;
        this.container.append(htm);
        this.elem = $('#' + this.id);
    }

    update(target) {
        //if (this.pos.y > 400) {
        //    return false
        //}
        if (!this.live) {
            return false;
        }
        this.pos.y += this.speed;
        if (this.detect(target)) {
            if (!slow) {
                helper.loopCheer();
            }
            this.onCatch()
            return this.score;
        } else {
            this.move()
        }

        if (this.pos.y > this.container.height() + this.radius) {
            this.onOut()
        }

        return false
    }

    kill() {
        this.live = false
    }

    onOut() {
        this.kill();
        this.remove()
    }

    onCatch() {
        const self = this;
        this.kill()

        //if (this.slow) {
        //
        //}
        this.elem.html(`<div class="jiayi animated slideOutUp">+${this.score}</div>`);

        //if (!slow) {
        //    this.elem.html(`<div class="jiayi animated slideOutUp">+${this.score}</div>`);
        //} else {
        //    this.elem.html(`<div class="jiayi">+${this.score}</div>`);
        //}
        //
        //if (slow) {
        //
        //}
        //setTimeout(() => {
        //    self.remove()
        //}, 300)
    }

    remove() {
        this.elem.remove()
    }

    move() {
        this.elem.css(this.getCss())
    }

    detect(target) {

        if ( this.pos.y >= target.y
            && this.pos.y <= target.y + target.height
            && this.pos.x >= target.x
            && this.pos.x <= target.x + target.width
           ) {
            return true
        } else {
            return false
        }
    }


}


class Wolf {
    constructor(options) {
        this.containerID = options.containerID;
        this.container = $('#' + this.containerID);

        this.size = {
            width: options.width,
            height: options.height
        };
        this.speed = options.speed;
        this.pos = {
            x: this.container.width() / 2,
            y: this.container.height() - this.size.height / 2 - 24
        }

        this.css = this.getCss()
        this.id = 'wolf' + (Math.random() + '').split('.')[1]

        this.x = this.container.width() / 2;
        this.target = this.getTarget()
        this.boundary = {
            min: this.size.width / 2,
            max: this.container.width() - this.size.width / 2
        }
        this.active = false;

        this.init()

    }

    init() {
        this.add();
        this.addHelper()
        this.bindTouchEvent()
        this.active = true;
    }

    update() {
        if (!this.active) {
            return false
        }
        const delta = Math.abs(this.pos.x - this.x)

        if (delta <= this.speed) {
            return false
        }

        const cur_speed = this.speed *(1 + (delta / 150))

        if (this.pos.x > this.x) {
            this.pos.x -= cur_speed;
        }
        if (this.pos.x < this.x) {
            this.pos.x += cur_speed
        }

        //this.pos.x = this.x

        if (this.pos.x < this.boundary.min) {
            this.pos.x = this.boundary.min
        }

        if (this.pos.x > this.boundary.max) {
            this.pos.x = this.boundary.max
        }

        this.css = this.getCss()
        this.target = this.getTarget()

        this.helper.css({
            left: this.target.x + 'px',
            top: this.target.y + 'px'
        })
        //console.log(this.target)
        //console.log(this.css)
        this.elem.css(this.css);
    }

    bindTouchEvent() {
        const self = this;
        document.getElementById(this.containerID).addEventListener('touchmove', (evt) => {
            evt.preventDefault();
            self.x = ~~(evt.touches[0].clientX)
        }, false);

        document.getElementById(this.containerID).addEventListener('touchstart', (evt) => {
            evt.preventDefault();
        }, false);
    }

    getCss() {
        return {
            left: (this.pos.x - this.size.width / 2) + 'px',
            top: (this.pos.y - this.size.height / 2) + 'px'
        }
    }

    getTarget() {
        const wp = 1;
        const hp = 1
        return {
            x: this.pos.x - this.size.width / 2,
            y: this.pos.y - this.size.height / 2,
            width: this.size.width * wp,
            height: this.size.height * hp
        }
    }


    addHelper() {
        const htm = `<div id="testd" class="testd" style="width:${this.target.width}px;height:${this.target.height}px;"></div>`
        this.container.append(htm)
        this.helper = $('#testd')
    }


    add() {
        const htm = `<div id="${this.id}" class="wolf" style="width: ${this.size.width}px;height:${this.size.height}px;top:${this.css.top};left:${this.css.left}"><img src="${wolf_img}" /></div>`;
        this.container.append(htm);
        this.elem = $('#' + this.id);
    }

}