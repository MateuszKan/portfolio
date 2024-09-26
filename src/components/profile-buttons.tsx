import Link from "next/link"
import { LinkedInLogoIcon, DownloadIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"

interface ProfileButtonsProps {
  linkedInUrl: string
  cvUrl: string
}

export default function ProfileButtons({ linkedInUrl, cvUrl }: ProfileButtonsProps) {
  return (
    <div className="flex flex-row gap-4 mt-6">
      <Button asChild className="sm:w-auto">
        <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
          <LinkedInLogoIcon className="w-4 h-4 mr-2" />
          LinkedIn
        </Link>
      </Button>
      <Button asChild className="sm:w-auto">
        <Link href={cvUrl} download className="inline-flex items-center justify-center">
          <DownloadIcon className="w-4 h-4 mr-2" />
          My CV
        </Link>
      </Button>
    </div>
  )
}
