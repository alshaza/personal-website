import { Typography } from '@mui/material'
import { Providers } from '../Providers'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { AppContainer, MainContainer } from '../layout.styles'
import { ImpactStats } from '../impact-stats/impact-stats'
import { LatestPosts } from '../latest-posts/latest-posts'
import { ContactCTA } from '../contact-cta/contact-cta'
import { aboutMeContent, timelineEntries, timelineSectionContent } from '../../data/content'
import { AboutIntro, AboutIntroLead, TimelineEntryCard, TimelineList, TimelineSection, TimelineYear } from './about-page.styles'

export function AboutPage() {
  return (
    <Providers>
      <AppContainer>
        <Header currentPath="/about-me" />
        <MainContainer role="main">
          <AboutIntro as="section" sx={{ mt: 4 }}>
            <Typography variant="h1" gutterBottom>
              {aboutMeContent.heading} Rami Alshaza
            </Typography>
            <AboutIntroLead variant="body1">{aboutMeContent.intro}</AboutIntroLead>
            {aboutMeContent.paragraphs.map((paragraph) => (
              <Typography key={paragraph} variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {paragraph}
              </Typography>
            ))}
          </AboutIntro>

          <TimelineSection as="section" aria-labelledby="timeline-heading">
            <Typography id="timeline-heading" variant="h2" sx={{ fontSize: '1.75rem', mb: 3 }}>
              {timelineSectionContent.heading}
            </Typography>
            <TimelineList>
              {timelineEntries.map((entry) => (
                <TimelineEntryCard key={`${entry.company}-${entry.year}`}>
                  <TimelineYear variant="caption" as="p" sx={{ m: 0 }}>
                    {entry.year}
                  </TimelineYear>
                  <Typography variant="subtitle1" component="p" fontWeight={700}>
                    {entry.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight={600}>
                    {entry.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {entry.description}
                  </Typography>
                </TimelineEntryCard>
              ))}
            </TimelineList>
          </TimelineSection>

          <ImpactStats />

          <LatestPosts />

          <ContactCTA />
        </MainContainer>
        <Footer />
      </AppContainer>
    </Providers>
  )
}
