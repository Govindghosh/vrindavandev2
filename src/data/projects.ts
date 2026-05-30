import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'tikhat',
    title: 'TIKHAT',
    category: 'Web Apps',
    gradientFrom: 'from-purple-900',
    gradientTo: 'to-gold-primary',
    description:
      'End-to-end event ticketing platform with QR-based entry management, payment integration, and organizer dashboard.',
    impact: 'Live at tikhat.in - serving real event organizers',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'AWS S3', 'Razorpay'],
    liveUrl: 'https://tikhat.in',
    githubUrl: 'https://github.com/vrindavandev/tikhat',
    ariaLabel: 'TIKHAT event ticketing platform project',
  },
  {
    id: 'cryptians-store',
    title: 'CRYPTIANS STORE',
    category: 'Platforms',
    gradientFrom: 'from-teal-900',
    gradientTo: 'to-cyan-500',
    description:
      'Peer-to-peer crypto exchange with real-time order matching, live price feeds, and secure wallet integration.',
    impact: 'Real-time trading with sub-second order updates',
    stack: ['MERN', 'Socket.io', 'Redis', 'BullMQ', 'TypeScript'],
    liveUrl: 'https://cryptiansstore.in',
    githubUrl: 'https://github.com/vrindavandev/cryptians-store',
    ariaLabel: 'CRYPTIANS STORE crypto exchange project',
  },
  {
    id: 'add-god-crm',
    title: 'ADD-GOD CRM/HRM',
    category: 'Platforms',
    gradientFrom: 'from-slate-950',
    gradientTo: 'to-saffron',
    description:
      'Full-featured CRM and HRM platform for SMEs - lead management, employee tracking, payroll, and attendance system.',
    impact: 'Used by internal teams at Add-God Makers Pvt. Ltd.',
    stack: ['MERN', 'TypeScript', 'Docker', 'JWT', 'REST API'],
    liveUrl: 'https://addgodcrm.in',
    githubUrl: 'https://github.com/vrindavandev/add-god-crm',
    ariaLabel: 'ADD-GOD CRM and HRM platform project',
  },
  {
    id: 'visitor-management',
    title: 'VISITOR MANAGEMENT SYSTEM',
    category: 'AI/Automation',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-gold-primary',
    description:
      'Government-grade security system with Aadhaar QR verification, face recognition, liveness detection, and real-time alerts.',
    impact: 'Deployed for enterprise security - 99.2% accuracy',
    stack: ['React', 'FastAPI', 'Face Recognition', 'Aadhaar API', 'PostgreSQL'],
    liveUrl: 'https://visitortrack.in',
    githubUrl: 'https://github.com/vrindavandev/visitor-management',
    ariaLabel: 'Visitor Management System project',
  },
  {
    id: 'recon-dashboard',
    title: 'RECON DASHBOARD',
    category: 'Web Apps',
    gradientFrom: 'from-purple-950',
    gradientTo: 'to-cyan-500',
    description:
      'Financial reconciliation tool for automated transaction matching, discrepancy detection, and audit-ready reporting.',
    impact: 'Processing thousands of transactions daily',
    stack: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'BullMQ'],
    liveUrl: 'https://recondashboard.in',
    githubUrl: 'https://github.com/vrindavandev/recon-dashboard',
    ariaLabel: 'RECON DASHBOARD financial reconciliation tool project',
  },
]
