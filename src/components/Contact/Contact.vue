<template>
    <div class="contact-area ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Get in Touch</h2>
                <p>The IT industry offers a sea of options, from platforms, programming languages methodologies, technologies, tools, and more.</p>
            </div>
            <div class="contact-form">
                <form id="contactForm">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Eg: Sarah Taylor">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="email" name="email" class="form-control" id="email" placeholder="hello@sarah.com">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="text" name="phone_number" class="form-control" id="phone_number" placeholder="Enter your phone number">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <input type="text" name="msg_subject" class="form-control" id="msg_subject" placeholder="Enter your subject">
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="form-group">
                                <textarea name="message" id="message" class="form-control" cols="30" rows="6" placeholder="Enter message..."></textarea>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <button type="submit" class="default-btn"><i class='bx bx-paper-plane'></i> Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46660.669043361966!2d-76.17429939609431!3d43.03529129888566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3b8019f2991%3A0x58d5929e21a62e5!2sDinosaur%20Bar-B-Que!5e0!3m2!1sen!2sbd!4v1593527523138!5m2!1sen!2sbd"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>