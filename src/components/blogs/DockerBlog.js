import { Heading, Subheading, Supersubheading, Text, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function DockerBlog() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Docker Course Blog – Highlights & Pro Tips`} />

      <Subheading text={`Why Learn Docker?`} />
      <Text text={`Docker is a game-changer in modern development and DevOps practices. It allows you to package applications with all dependencies into lightweight containers that run reliably in any environment. With Docker, you can simplify deployment, ensure consistency, and scale faster.`} />

      <Line />

      <Subheading text={`Course Coverage`} />
      <Text text={`This Docker course takes you from basics to advanced concepts in containerization. Here’s what we cover:`} />

      <ul className='list-disc pl-6 space-y-2 font-cambria'>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/docker'>Docker Course Overview</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/docker/docker-installation'>Installing Docker</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/docker/docker-images'>Working with Images</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/docker/docker-containers'>Running Containers</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/docker/dockerfile'>Creating Dockerfiles</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/docker/docker-compose'>Using Docker Compose</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/docker/docker-volumes'>Docker Volumes & Networks</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/docker/docker-best-practices'>Docker Best Practices</Link></li>
      </ul>

      <Line />

      <Subheading text={`What You'll Learn`} />
      <Text text={`✅ How to containerize applications and services.`} />
      <Text text={`✅ Working with Docker Hub and private registries.`} />
      <Text text={`✅ Writing effective Dockerfiles for custom builds.`} />
      <Text text={`✅ Managing multi-container setups using Docker Compose.`} />

      <Line />

      <Subheading text={`Key Concepts Covered`} />

      <Supersubheading text={`📦 Docker Images & Containers`} />
      <Text text={`Understand the lifecycle of containers and how Docker images are built and run. Learn best practices for managing them efficiently.`} />

      <Supersubheading text={`🛠️ Dockerfile Mastery`} />
      <Text text={`Write clean, optimized Dockerfiles to build your own images from scratch. Learn to use instructions like RUN, COPY, CMD, and ENTRYPOINT effectively.`} />

      <Supersubheading text={`🔗 Docker Compose`} />
      <Text text={`Set up and manage multi-container applications using Docker Compose. Great for orchestrating dev environments and microservices.`} />

      <Supersubheading text={`📁 Volumes & Networks`} />
      <Text text={`Persist data using volumes and connect containers across virtual networks. Essential for managing production-like environments.`} />

      <Line />

      <Subheading text={`Real-World Applications`} />
      <Text text={`🚀 Deploy web apps with NGINX, Node.js, or Python Flask in containers.`} />
      <Text text={`🚀 Run databases like MySQL or PostgreSQL in isolated containers.`} />
      <Text text={`🚀 Create portable dev environments that work on any machine.`} />

      <Line />

      <Subheading text={`Common Mistakes to Avoid`} />
      <Text text={`🔸 Writing inefficient Dockerfiles (e.g., too many layers, using latest tag).`} />
      <Text text={`🔸 Not cleaning up unused images and containers regularly.`} />
      <Text text={`🔸 Misusing bind mounts vs. volumes.`} />
      <Text text={`🔸 Forgetting to expose ports or define correct environment variables.`} />

      <Line />

      <Subheading text={`Pro Tips 💡`} />
      <Text text={`✅ Use multi-stage builds to keep images small.`} />
      <Text text={`✅ Leverage .dockerignore to optimize context size.`} />
      <Text text={`✅ Tag and version your images carefully.`} />
      <Text text={`✅ Use named volumes for persistent data.`} />

      <Line />

      <Subheading text={`Final Thoughts`} />
      <Text text={`Docker is more than a developer tool—it's a bridge to DevOps. Whether you're a developer, sysadmin, or SRE, mastering Docker will improve your workflow and productivity across the board.`} />

      <p className='font-cambria'>
        ➡️ Start learning today by visiting the{' '}
        <span className='text-blue-400 hover:text-blue-700'>
          <Link to='/course/docker'>Docker Course</Link>
        </span>{' '}
        and get hands-on with containers! 🐳🔥
      </p>
    </div>
  );
}
