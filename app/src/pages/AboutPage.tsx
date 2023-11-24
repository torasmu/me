import PageWrapper from './PageWrapper'

type AboutPageProps = {}

export const AboutPage = ({}: AboutPageProps) => {
  return (
    <PageWrapper>
      <div>About</div>
      <div>
        <p>
          Hi there! My name is John Doe. I'm a passionate software developer
          with a love for creating innovative solutions. I have a strong
          background in web development and enjoy working with cutting-edge
          technologies.
        </p>
        <p>
          In my free time, I enjoy exploring new programming languages and
          frameworks. I believe in continuous learning and strive to stay
          up-to-date with the latest industry trends. I'm always excited to take
          on new challenges and collaborate with like-minded individuals.
        </p>
        <p>
          When I'm not coding, you can find me hiking in the mountains or
          playing guitar. I believe in maintaining a healthy work-life balance
          and finding inspiration from various sources. I'm a firm believer in
          the power of teamwork and enjoy working in collaborative environments.
        </p>
      </div>
    </PageWrapper>
  )
}
