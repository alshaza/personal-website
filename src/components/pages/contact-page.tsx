import { Box, Typography } from '@mui/material'
import { Providers } from '../Providers'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { AppContainer, MainContainer } from '../layout.styles'
import { BookingProcess } from '../booking-process/booking-process'
import { Testimonials } from '../testimonials/testimonials'
import { ContactForm } from '../contact-form/contact-form'
import { CalendarSection } from '../calendar-section/calendar-section'
import { FaqSection } from '../faq-section/faq-section'
import { collaborateContent } from '../../data/content'

export function ContactPage() {
  return (
    <Providers>
      <AppContainer>
        <Header currentPath="/contact" />
        <MainContainer role="main">
          <Box component="section" sx={{ mt: 4 }}>
            <Typography variant="h1" gutterBottom>
              {collaborateContent.heading}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
              {collaborateContent.description}
            </Typography>
          </Box>

          <BookingProcess />

          <Testimonials />

          <Box component="section" id="contact-form" sx={{ mt: 6, scrollMarginTop: 96, width: '100%' }}>
            <Typography variant="h2" sx={{ fontSize: '1.75rem', mb: 4, textAlign: 'center' }}>
              Send a message
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 4, md: 10 },
                alignItems: { xs: 'stretch', md: 'center' },
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Box sx={{ flex: '1 1 320px', maxWidth: 400, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="body1" color="text.secondary">
                  Have something on your mind? Write to me and state your problem, I will get back to you in
                  less than 24 hours.
                </Typography>
              </Box>
              <Box sx={{ flex: '1 1 480px', maxWidth: 640, width: '100%' }}>
                <ContactForm />
              </Box>
            </Box>
          </Box>

          <CalendarSection />

          <FaqSection />
        </MainContainer>
        <Footer />
      </AppContainer>
    </Providers>
  )
}
