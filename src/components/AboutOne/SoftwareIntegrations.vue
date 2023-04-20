<template>
    <div class="software-integrations-area bg-gradient-color ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-content white-color">
                        <span class="sub-title">MANFAAT</span>
                        <h2>Manfaat BKPM</h2>
                        <div v-html="manfaat"></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-list">
                        <img src="../../assets/images/shape/border.png" alt="border">
                        <ul>
                            <li data-aos="fade-down">
                                <img src="../../assets/images/software-integrations/atlassian.png" class="atlassian" alt="atlassian">
                            </li>
                            <li data-aos="fade-right">
                                <img src="../../assets/images/software-integrations/skype.png" class="skype" alt="skype">
                            </li>
                            <li data-aos="fade-up">
                                <img src="../../assets/images/software-integrations/gdrive.png" class="gdrive" alt="gdrive">
                            </li>
                            <li data-aos="fade-down">
                                <img src="../../assets/images/software-integrations/slack.png" class="slack" alt="slack">
                            </li>
                            <li data-aos="fade-up">
                                <img src="../../assets/images/software-integrations/jira.png" class="jira" alt="jira">
                            </li>
                            <li>
                                <img src="../../assets/images/software-integrations/frame.png" class="frame" alt="frame">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape8">
            <img src="../../assets/images/shape/shape7.png" alt="shape">
        </div>
    </div>
</template>

<script>
import getTentang from '../../../api/getTentang'
export default {
    name: 'SoftwareIntegrations',
    data () {
        return {
            manfaat: null
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        async getData() {
            const data = await getTentang()
            this.manfaat = data.manfaat

        }
    }
}
</script>