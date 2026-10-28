import type { Project } from '../data/projects'

// 모든 프로젝트는 public/images 폴더의 실제 대표 이미지를 사용합니다.
const imageSlugs = [
  'autohwpx',
  'cozyroom',
  'imomtaxi',
  'bigyogo',
  'clickshield',
  'compareshop',
]

export default function ProjectVisual({
  project,
  large = false,
}: {
  project: Project
  large?: boolean
}) {
  const imageUrl = imageSlugs.includes(project.slug)
    ? `/images/${project.slug}-hero.png`
    : undefined

  return (
    <div className={`project-visual visual-${project.theme} ${large ? 'visual-large' : ''}`}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${project.title} 프로젝트 대표 이미지`}
          loading={large ? 'eager' : 'lazy'}
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}
    </div>
  )
}
