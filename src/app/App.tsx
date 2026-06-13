/**
 * Application root — composes foundation components only. No homepage sections.
 */

import {
  Button,
  Container,
  Heading,
  Section,
  Text,
} from '@/components/ui'

export function App() {
  return (
    <div className="min-h-screen bg-surface text-text">
      <a href="#main-content" className="sr-only sr-only-focusable">
        Skip to main content
      </a>

      <main id="main-content">
        <Section>
          <Container className="gap-[var(--space-5)]">
            <Heading level={1}>Design System Foundation</Heading>
            <Text variant="body-large" measure>
              Reusable primitives for editorial layouts. Compose Section, Container,
              Heading, Text, and Button to build future page sections.
            </Text>
            <div className="flex flex-wrap gap-[var(--space-3)]">
              <Button variant="primary">Begin Your Journey</Button>
              <Button variant="secondary">Explore Experiences</Button>
              <Button variant="ghost" href="#main-content">
                Continue reading
              </Button>
            </div>
          </Container>
        </Section>

        <Section tone="secondary">
          <Container>
            <Heading level={2}>Typography</Heading>
            <Text variant="caption" tone="muted">
              Caption and metadata tone
            </Text>
          </Container>
        </Section>
      </main>
    </div>
  )
}
