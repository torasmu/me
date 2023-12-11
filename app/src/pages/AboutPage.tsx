import PageWrapper from './PageWrapper'

type AboutPageProps = {}

export const AboutPage = ({}: AboutPageProps) => {
  return (
    <PageWrapper title={'About'}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>
          Hi there! My name is Tom Rasmussen. I'm a passionate software engineer
          with a love for building innovative products. I have a strong
          background in web development and enjoy working with cutting-edge
          technologies and industry-leading teams.
        </p>
        <p>
          In my free time, I enjoy exploring new programming languages and
          frameworks. I believe in continuous learning and strive to stay
          up-to-date with the latest industry trends. I'm always excited to take
          on new challenges and collaborate with new people.
        </p>
        <p>
          When I'm not coding, you can find me traveling, camping, or exploring
          urban environments. I believe in maintaining a healthy work-life
          balance and finding inspiration from various sources, including other
          engineering disciplines. My current goal is to gain experience in team
          leadership and project management while continuing to grow as a
          engineer.
        </p>
      </div>
    </PageWrapper>
  )
}
