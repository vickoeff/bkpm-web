<template>
    <div class="coming-soon-area">
        <div class="container-fluid p-0">
            <div class="row m-0">
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="coming-soon-content">
                        <div class="d-table">
                            <div class="d-table-cell">
                                <router-link to="/" class="logo">
                                    <img src="../../assets/images/black-logo.png" alt="image">
                                </router-link>
                                <h2>We Are Launching Soon</h2>
                                <div id="timer" class="flex-wrap justify-content-center d-flex">
                                    <div
                                        id="days"
                                        class="time align-items-center flex-column d-flex justify-content-center"
                                    >
                                        <h3>{{days}}</h3>
                                        <p>Days</p>
                                    </div>
                                    <div
                                        id="hours"
                                        class="time align-items-center flex-column d-flex justify-content-center"
                                    >
                                        <h3>{{hours}}</h3>
                                        <p>Hours</p>
                                    </div>
                                    <div
                                        id="minutes"
                                        class="time align-items-center flex-column d-flex justify-content-center"
                                    >
                                        <h3>{{minutes}}</h3>
                                        <p>Minutes</p>
                                    </div>
                                    <div
                                        id="seconds"
                                        class="time align-items-center flex-column d-flex justify-content-center"
                                    >
                                        <h3>{{seconds}}</h3>
                                        <p>Seconds</p>
                                    </div>
                                </div>
                                <form class="newsletter-form" data-toggle="validator">
                                    <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL">
                                    <button type="submit" class="default-btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="coming-soon-image">
                        <img src="../../assets/images/coming-soon.jpg" alt="coming-soon">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComingSoon',
    data() {
        return {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    },
    created() { // Turn data into viewable values
        setInterval(() => {
            this.commingSoonTime();
        }, 1000);
    },
    methods: {
        commingSoonTime() {
            let endTime = new Date("December 5, 2025 17:00:00 PDT");            
            let endTimeParse = (Date.parse(endTime)) / 1000;
            let now = new Date();
            let nowParse = (Date.parse(now) / 1000);
            let timeLeft = endTimeParse - nowParse;
            let days = Math.floor(timeLeft / 86400);
            let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
    }
}
</script>