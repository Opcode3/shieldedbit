import Link from 'next/link'
export default function Consulting() {
  return (
    <div className="consulting">
        <h2>Security is more than protection against threats</h2>
        <p>We are open to educate, empower and collaborate in research and development of new Cybersecurity and Digital Forensic tools.</p>
        <Link href='/'><a className='px-6 py-4 mt-4 rounded bg-black text-blue-50'>Request Consultation</a></Link>

    </div>
  )
}
