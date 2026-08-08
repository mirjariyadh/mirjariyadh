import { Project, Review, JourneyExperience } from '../types';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'pharmaceutical-01',
    title: 'High-End Pharmaceutical 3D BIM Model',
    category: ['Architectural Modeling' , 'MEP Systems'],
    thumbnail: 'assets/images/projects/dbl/t0.webp',
    images: [
      { url: 'assets/images/projects/dbl/p0.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p1.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p2.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p3.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p4.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p5.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p6.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p7.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p8.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p9.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p11.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p12.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p13.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p14.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p16.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p17.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p18.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p20.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p21.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p24.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p26.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
      { url: 'assets/images/projects/dbl/p27.webp', caption: 'Overall 3D Revit Architectural Render with Curtain Wall Details' },
    ],
    shortDesc: 'Complete 3D Revit Architectural model (LOD 350) for a 12,000 sq.ft pharmaceutical facility, featuring parametric facade elements and material schedules.',
    fullDesc: 'Modeled from 2D CAD architectural blueprints into high-precision Autodesk Revit 3D environment. Includes comprehensive parametric family creation, material takeoffs, room tagging, elevation extraction, and 3D walkthrough views prepared for high-end pharmaceutical development.',
    lod: 'LOD 350',
    softwareUsed: ['Autodesk Revit', 'Navisworks Manage', 'AutoCAD', 'Enscape'],
    clientRegion: 'United States (California)',
    completionDate: 'June 2024',
    areaSqFt: '12,500 sq.ft',
    keyFeatures: [
      'Parametric glass curtain wall system with dynamic shading fins',
      'Extracted accurate Bill of Quantities (BOQ) and schedule tables',
      'Zero-clash structural alignment with architectural layouts',
      'High-detail interior joinery modeling and ceiling plans'
    ],
    externalUrl: 'https://mirjariyadh.com.bd'
  },
  {
    id: 'arch-residence-01',
    title: 'East MC Kinny Architectural Residential 3D BIM Model',
    category: 'Architectural Modeling',
    thumbnail: 'assets/images/projects/east-mc-kinny/t0.webp',
    images: [
      { url: 'assets/images/projects/east-mc-kinny/p1.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/east-mc-kinny/p2.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/east-mc-kinny/p3.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/east-mc-kinny/p4.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/east-mc-kinny/p5.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/east-mc-kinny/p6.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/east-mc-kinny/p7.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/east-mc-kinny/p8.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/east-mc-kinny/p9.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/east-mc-kinny/p10.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/east-mc-kinny/p11.webp', caption: 'Architectural Residential Revit Model' }
    ],
    shortDesc: 'Transformed 3D Faro point cloud scan data into a millimeter-accurate Revit As-Built model (LOD 400) for historic renovation.',
    fullDesc: 'Processed over 18GB of point cloud scan data (.e57 format) using Autodesk Recap Pro and imported into Revit. Reconstructed irregular historical brick masonry, tilted columns, original timber roof trusses, and exposed pipework with strict tolerance limits (<5mm deviation).',
    lod: 'LOD 400',
    softwareUsed: ['Autodesk Revit', 'Autodesk ReCap Pro', 'Faro Scene', 'Navisworks'],
    clientRegion: 'United Kingdom (London)',
    completionDate: 'March 2024',
    areaSqFt: '28,000 sq.ft',
    keyFeatures: [
      'Sub-5mm modeling tolerance matching physical point cloud density',
      'Specialized handling of non-standard historic wall geometries',
      'As-Built structural verification and load path modeling',
      'Prepared model for retrofitting modern HVAC ductwork'
    ],
    externalUrl: 'https://mirjariyadh.com.bd'
  },
  {
    id: 'arch-residence-02',
    title: 'Eco Park Architectural Residential 3D BIM Model',
    category: 'Architectural Modeling',
    thumbnail: 'assets/images/projects/eco-park/t0.webp',
    images: [
      { url: 'assets/images/projects/eco-park/p0.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/eco-park/p1.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/eco-park/p2.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/eco-park/p3.webp', caption: 'Architectural Residential Revit Model' },
      { url: 'assets/images/projects/eco-park/p4.webp', caption: 'Architectural Residential Revit Model' }
    ],
    shortDesc: 'Transformed 3D Faro point cloud scan data into a millimeter-accurate Revit As-Built model (LOD 400) for historic renovation.',
    fullDesc: 'Processed over 18GB of point cloud scan data (.e57 format) using Autodesk Recap Pro and imported into Revit. Reconstructed irregular historical brick masonry, tilted columns, original timber roof trusses, and exposed pipework with strict tolerance limits (<5mm deviation).',
    lod: 'LOD 400',
    softwareUsed: ['Autodesk Revit', 'Autodesk ReCap Pro', 'Faro Scene', 'Navisworks'],
    clientRegion: 'United Kingdom (London)',
    completionDate: 'March 2024',
    areaSqFt: '28,000 sq.ft',
    keyFeatures: [
      'Sub-5mm modeling tolerance matching physical point cloud density',
      'Specialized handling of non-standard historic wall geometries',
      'As-Built structural verification and load path modeling',
      'Prepared model for retrofitting modern HVAC ductwork'
    ],
    externalUrl: 'https://mirjariyadh.com.bd'
  },
  {
    id: 'pharmaceutical-02',
    title: 'Healthcare Facility 3D BIM Model',
    category: ['Architectural Modeling' , 'MEP Systems'],
    thumbnail: 'assets/images/projects/hlsl/t0.webp',
    images: [
      { url: 'assets/images/projects/hlsl/p1.webp', caption: 'Healthcare Facility 3D BIM Model' },
      { url: 'assets/images/projects/hlsl/p2.webp', caption: 'Healthcare Facility 3D BIM Model' },
      { url: 'assets/images/projects/hlsl/p3.webp', caption: 'Healthcare Facility 3D BIM Model' },
      { url: 'assets/images/projects/hlsl/p4.webp', caption: 'Healthcare Facility 3D BIM Model' },
      { url: 'assets/images/projects/hlsl/p5.webp', caption: 'Healthcare Facility 3D BIM Model' },
      { url: 'assets/images/projects/hlsl/p6.webp', caption: 'Healthcare Facility 3D BIM Model' },
      { url: 'assets/images/projects/hlsl/p7.webp', caption: 'Healthcare Facility 3D BIM Model' },
      { url: 'assets/images/projects/hlsl/p8.webp', caption: 'Healthcare Facility 3D BIM Model' },
      { url: 'assets/images/projects/hlsl/p9.webp', caption: 'Healthcare Facility 3D BIM Model' },
      { url: 'assets/images/projects/hlsl/p10.webp', caption: 'Healthcare Facility 3D BIM Model' },
      { url: 'assets/images/projects/hlsl/p11.webp', caption: 'Healthcare Facility 3D BIM Model' }
    ],
    shortDesc: 'Transformed 3D Faro point cloud scan data into a millimeter-accurate Revit As-Built model (LOD 400) for historic renovation.',
    fullDesc: 'Processed over 18GB of point cloud scan data (.e57 format) using Autodesk Recap Pro and imported into Revit. Reconstructed irregular historical brick masonry, tilted columns, original timber roof trusses, and exposed pipework with strict tolerance limits (<5mm deviation).',
    lod: 'LOD 400',
    softwareUsed: ['Autodesk Revit', 'Autodesk ReCap Pro', 'Faro Scene', 'Navisworks'],
    clientRegion: 'United Kingdom (London)',
    completionDate: 'March 2024',
    areaSqFt: '28,000 sq.ft',
    keyFeatures: [
      'Sub-5mm modeling tolerance matching physical point cloud density',
      'Specialized handling of non-standard historic wall geometries',
      'As-Built structural verification and load path modeling',
      'Prepared model for retrofitting modern HVAC ductwork'
    ],
    externalUrl: 'https://mirjariyadh.com.bd'
  },
  {
    id: 'hotel-resort-01',
    title: 'Hotel Resort 3D BIM Model',
    category: ['Architectural Modeling' , 'MEP Systems'],
    thumbnail: 'assets/images/projects/hotel-lodge-1/t0.webp',
    images: [
      { url: 'assets/images/projects/hotel-lodge-1/p1.webp', caption: 'Hotel Resort 3D BIM Model' },
      { url: 'assets/images/projects/hotel-lodge-1/p2.webp', caption: 'Hotel Resort 3D BIM Model' },
      { url: 'assets/images/projects/hotel-lodge-1/p3.webp', caption: 'Hotel Resort 3D BIM Model' },
      { url: 'assets/images/projects/hotel-lodge-1/p4.webp', caption: 'Hotel Resort 3D BIM Model' },
      { url: 'assets/images/projects/hotel-lodge-1/p5.webp', caption: 'Hotel Resort 3D BIM Model' },
      { url: 'assets/images/projects/hotel-lodge-1/p6.webp', caption: 'Hotel Resort 3D BIM Model' },
      { url: 'assets/images/projects/hotel-lodge-1/p7.webp', caption: 'Hotel Resort 3D BIM Model' },
      { url: 'assets/images/projects/hotel-lodge-1/p8.webp', caption: 'Hotel Resort 3D BIM Model' },
      { url: 'assets/images/projects/hotel-lodge-1/p9.webp', caption: 'Hotel Resort 3D BIM Model' },
      { url: 'assets/images/projects/hotel-lodge-1/p10.webp', caption: 'Hotel Resort 3D BIM Model' },
      { url: 'assets/images/projects/hotel-lodge-1/p11.webp', caption: 'Hotel Resort 3D BIM Model' }
    ],
    shortDesc: 'Transformed 3D Faro point cloud scan data into a millimeter-accurate Revit As-Built model (LOD 400) for historic renovation.',
    fullDesc: 'Processed over 18GB of point cloud scan data (.e57 format) using Autodesk Recap Pro and imported into Revit. Reconstructed irregular historical brick masonry, tilted columns, original timber roof trusses, and exposed pipework with strict tolerance limits (<5mm deviation).',
    lod: 'LOD 400',
    softwareUsed: ['Autodesk Revit', 'Autodesk ReCap Pro', 'Faro Scene', 'Navisworks'],
    clientRegion: 'United Kingdom (London)',
    completionDate: 'March 2024',
    areaSqFt: '28,000 sq.ft',
    keyFeatures: [
      'Sub-5mm modeling tolerance matching physical point cloud density',
      'Specialized handling of non-standard historic wall geometries',
      'As-Built structural verification and load path modeling',
      'Prepared model for retrofitting modern HVAC ductwork'
    ],
    externalUrl: 'https://mirjariyadh.com.bd'
  },
  {
    id: 'mep-project-01',
    title: 'MEP Project 3D BIM Model',
    category: 'MEP Systems',
    thumbnail: 'assets/images/projects/hvac1/p1.webp',
    images: [
      { url: 'assets/images/projects/hvac1/p1.webp', caption: 'MEP Project 3D BIM Model' },
      { url: 'assets/images/projects/hvac1/p2.webp', caption: 'MEP Project 3D BIM Model' },
      { url: 'assets/images/projects/hvac1/p3.webp', caption: 'MEP Project 3D BIM Model' }
    ],
    shortDesc: 'Transformed 3D Faro point cloud scan data into a millimeter-accurate Revit As-Built model (LOD 400) for historic renovation.',
    fullDesc: 'Processed over 18GB of point cloud scan data (.e57 format) using Autodesk Recap Pro and imported into Revit. Reconstructed irregular historical brick masonry, tilted columns, original timber roof trusses, and exposed pipework with strict tolerance limits (<5mm deviation).',
    lod: 'LOD 400',
    softwareUsed: ['Autodesk Revit', 'Autodesk ReCap Pro', 'Faro Scene', 'Navisworks'],
    clientRegion: 'United Kingdom (London)',
    completionDate: 'March 2024',
    areaSqFt: '28,000 sq.ft',
    keyFeatures: [
      'Sub-5mm modeling tolerance matching physical point cloud density',
      'Specialized handling of non-standard historic wall geometries',
      'As-Built structural verification and load path modeling',
      'Prepared model for retrofitting modern HVAC ductwork'
    ],
    externalUrl: 'https://mirjariyadh.com.bd'
  },
  {
    id: 'mep-project-02',
    title: 'MEP Project 3D BIM Model for Office Building',
    category: 'MEP Systems',
    thumbnail: 'assets/images/projects/hvac2/p1.webp',
    images: [
      { url: 'assets/images/projects/hvac2/p1.webp', caption: 'MEP Project 3D BIM Model for Office Building' },
      { url: 'assets/images/projects/hvac2/p2.webp', caption: 'MEP Project 3D BIM Model for Office Building' },
      { url: 'assets/images/projects/hvac2/p3.webp', caption: 'MEP Project 3D BIM Model for Office Building' }
    ],
    shortDesc: 'Transformed 3D Faro point cloud scan data into a millimeter-accurate Revit As-Built model (LOD 400) for historic renovation.',
    fullDesc: 'Processed over 18GB of point cloud scan data (.e57 format) using Autodesk Recap Pro and imported into Revit. Reconstructed irregular historical brick masonry, tilted columns, original timber roof trusses, and exposed pipework with strict tolerance limits (<5mm deviation).',
    lod: 'LOD 400',
    softwareUsed: ['Autodesk Revit', 'Autodesk ReCap Pro', 'Faro Scene', 'Navisworks'],
    clientRegion: 'United Kingdom (London)',
    completionDate: 'March 2024',
    areaSqFt: '28,000 sq.ft',
    keyFeatures: [
      'Sub-5mm modeling tolerance matching physical point cloud density',
      'Specialized handling of non-standard historic wall geometries',
      'As-Built structural verification and load path modeling',
      'Prepared model for retrofitting modern HVAC ductwork'
    ],
    externalUrl: 'https://mirjariyadh.com.bd'
  },
  {
    id: 'mep-project-03',
    title: 'MEP Project 3D BIM Model for Incepta Pharmaceutical',
    category: ['Architectural Modeling' , 'MEP Systems'],
    thumbnail: 'assets/images/projects/incepta/t0.webp',
    images: [
      { url: 'assets/images/projects/incepta/p1.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p2.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p3.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p4.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p5.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p6.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p7.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p8.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p9.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p10.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p11.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p12.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p13.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p15.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p16.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p17.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' },
      { url: 'assets/images/projects/incepta/p18.webp', caption: 'MEP Project 3D BIM Model for Incepta Pharmaceutical' }
    ],
    shortDesc: 'Transformed 3D Faro point cloud scan data into a millimeter-accurate Revit As-Built model (LOD 400) for historic renovation.',
    fullDesc: 'Processed over 18GB of point cloud scan data (.e57 format) using Autodesk Recap Pro and imported into Revit. Reconstructed irregular historical brick masonry, tilted columns, original timber roof trusses, and exposed pipework with strict tolerance limits (<5mm deviation).',
    lod: 'LOD 400',
    softwareUsed: ['Autodesk Revit', 'Autodesk ReCap Pro', 'Faro Scene', 'Navisworks'],
    clientRegion: 'United Kingdom (London)',
    completionDate: 'March 2024',
    areaSqFt: '28,000 sq.ft',
    keyFeatures: [
      'Sub-5mm modeling tolerance matching physical point cloud density',
      'Specialized handling of non-standard historic wall geometries',
      'As-Built structural verification and load path modeling',
      'Prepared model for retrofitting modern HVAC ductwork'
    ],
    externalUrl: 'https://mirjariyadh.com.bd'
  },
  {
    id: 'arch-residence-03',
    title: 'Marple CrossArchitectural Residence 3D BIM Model',
    category: 'Architectural Modeling',
    thumbnail: 'assets/images/projects/marple-cross/t0.webp',
    images: [
      { url: 'assets/images/projects/marple-cross/p1.webp', caption: 'Architectural Residence 3D BIM Model for Marple Cross' },
      { url: 'assets/images/projects/marple-cross/p2.webp', caption: 'Architectural Residence 3D BIM Model for Marple Cross' },
      { url: 'assets/images/projects/marple-cross/p3.webp', caption: 'Architectural Residence 3D BIM Model for Marple Cross' },
      { url: 'assets/images/projects/marple-cross/p4.webp', caption: 'Architectural Residence 3D BIM Model for Marple Cross' },
      { url: 'assets/images/projects/marple-cross/p5.webp', caption: 'Architectural Residence 3D BIM Model for Marple Cross' },
      { url: 'assets/images/projects/marple-cross/p6.webp', caption: 'Architectural Residence 3D BIM Model for Marple Cross' },
      { url: 'assets/images/projects/marple-cross/p7.webp', caption: 'Architectural Residence 3D BIM Model for Marple Cross' },
      { url: 'assets/images/projects/marple-cross/p8.webp', caption: 'Architectural Residence 3D BIM Model for Marple Cross' },
      { url: 'assets/images/projects/marple-cross/p9.webp', caption: 'Architectural Residence 3D BIM Model for Marple Cross' }
    ],
    shortDesc: 'Transformed 3D Faro point cloud scan data into a millimeter-accurate Revit As-Built model (LOD 400) for historic renovation.',
    fullDesc: 'Processed over 18GB of point cloud scan data (.e57 format) using Autodesk Recap Pro and imported into Revit. Reconstructed irregular historical brick masonry, tilted columns, original timber roof trusses, and exposed pipework with strict tolerance limits (<5mm deviation).',
    lod: 'LOD 400',
    softwareUsed: ['Autodesk Revit', 'Autodesk ReCap Pro', 'Faro Scene', 'Navisworks'],
    clientRegion: 'United Kingdom (London)',
    completionDate: 'March 2024',
    areaSqFt: '28,000 sq.ft',
    keyFeatures: [
      'Sub-5mm modeling tolerance matching physical point cloud density',
      'Specialized handling of non-standard historic wall geometries',
      'As-Built structural verification and load path modeling',
      'Prepared model for retrofitting modern HVAC ductwork'
    ],
    externalUrl: 'https://mirjariyadh.com.bd'
  },
];

export const CLIENT_REVIEWS: Review[] = [
  {
    id: 'fiverr-rev-1',
    clientName: 'P. Architecture Studio',
    clientCountry: 'United States',
    platform: 'Fiverr',
    rating: 5.0,
    date: 'Dec 2024',
    comment: 'Made switching to an unfamiliar Revit workflow painless. Riyadh was a true asset place in before world stayed agreed on access, and patiently explained what the software could and couldn\'t do along the way.',
    projectType: 'Revit 3D Residential Modeling & Families',
    orderValue: '$1,200',
    verified: true
  },
  {
    id: 'fiverr-rev-2',
    clientName: 'K. Design Ltd',
    clientCountry: 'United Kingdom',
    platform: 'Fiverr',
    rating: 5.0,
    date: 'Nov 2024',
    comment: 'Reliably delivers strong, detail-focused work order after order — the kind of consistency that makes repeat bookings an easy decision. High quality BIM standards!',
    projectType: 'Point Cloud to Revit Conversion',
    orderValue: '$1,850',
    verified: true
  },
  {
    id: 'upwork-rev-1',
    clientName: 'Nexus Engineering Group',
    clientCountry: 'Australia',
    platform: 'Upwork',
    rating: 5.0,
    date: 'Jan 2025',
    comment: 'Mirja Riyadh is an exceptional BIM Specialist. His expertise in MEP clash detection and Revit family creation saved us weeks of site delays. Highly communicative, skilled, and detail-oriented.',
    projectType: 'Navisworks Clash Matrix & MEP Model',
    orderValue: '$3,400',
    verified: true
  },
  {
    id: 'upwork-rev-2',
    clientName: 'B. Urban Developers',
    clientCountry: 'Canada',
    platform: 'Upwork',
    rating: 5.0,
    date: 'Oct 2024',
    comment: 'Phenomenal work on our commercial architectural documentation sheets. Flawless Revit model setup, precise schedules, and delivered ahead of schedule. Will hire again!',
    projectType: 'Architectural Revit Permit Drawings',
    orderValue: '$2,100',
    verified: true
  }
];

export const CAREER_JOURNEY: JourneyExperience[] = [
  {
    id: 'exp-freelance-bim',
    title: 'Freelance BIM Specialist',
    company: 'Upwork & Fiverr (Global Clients)',
    employmentType: 'Freelance / Contract',
    period: 'July 2024 – Present (2 yrs)',
    location: 'Remote / Online',
    summary: 'Delivering end-to-end architectural, structural & MEP BIM projects for international clients across USA, UK, Canada, Australia, and Europe via Upwork and Fiverr top-rated seller status.',
    areasOfExpertise: [
      'Architectural, Structural & MEP BIM Projects',
      'Point Cloud to BIM Conversion',
      'Parametric Revit Family Design',
      'Navisworks Clash Detection & Coordination'
    ],
    responsibilities: [
      'Authoring high-precision LOD 300 - 500 3D Revit models for commercial & residential buildings',
      'Converting 3D point cloud scan files into complete As-Built BIM geometry',
      'Conducting inter-disciplinary clash matrix analysis in Navisworks Manage',
      'Developing permit-ready architectural and structural construction sheet sets',
      'Providing 1-on-1 BIM workflow consulting and Revit setup for international studios'
    ],
    software: ['Autodesk Revit', 'Navisworks Manage', 'AutoCAD', 'ReCap Pro', 'Enscape', 'Dynamo'],
    keyProjects: ['London Heritage Scan-to-BIM', 'Texas Residential Permit Set', 'Sydney High-Rise Clash Matrix'],
    highlights: ['5.0 Star Rated on Fiverr & Upwork', '100% Job Success Rate', 'Completed 18+ major international BIM deliverables']
  },
  {
    id: 'exp-project-eng',
    title: 'Project Engineer',
    company: 'Parallex Engineering Works',
    employmentType: 'Full-time',
    period: 'Jan 2023 – Feb 2024 (1 yr 2 mos)',
    location: 'Dhaka, Bangladesh',
    summary: 'Managed structural engineering design drawings, BIM model integration, site construction supervision, and cross-functional team coordination.',
    areasOfExpertise: [
      'Architectural and Structural Working Drawings',
      'Project Management',
      'Bill of Quantities (BOQ)',
      'Site Coordination & Quality Control'
    ],
    responsibilities: [
      'Supervised structural drawing extraction from central 3D Revit model',
      'Prepared detailed BOQ cost estimation and material requirement schedules',
      'Coordinated between field construction crews and structural design office',
      'Ensured architectural design compliance with Bangladesh National Building Code (BNBC)'
    ],
    software: ['Autodesk Revit', 'AutoCAD', 'Microsoft Office', 'Project Management Tools'],
    keyProjects: ['Commercial Plaza Structural Layout', 'Industrial Warehouse Steel Framework'],
    highlights: ['Reduced drawing revision turnaround time by 30%', 'Managed BOQ takeoffs with <2% material variance']
  },
  {
    id: 'exp-site-eng',
    title: 'Site Engineer',
    company: 'Proaab Residential Building',
    employmentType: 'Full-time',
    period: 'Jan 2022 – Dec 2022 (1 yr)',
    location: 'Dhaka, Bangladesh',
    summary: 'Conducted daily on-site civil engineering supervision, structural layout verification, rebar checking, and alignment against approved CAD/Revit drawings.',
    areasOfExpertise: [
      'Site Execution & Supervision',
      'Architectural & Structural CAD Interpretation',
      'Concrete & Rebar QA/QC'
    ],
    responsibilities: [
      'Supervised concrete pourings, column formwork, and slab reinforcement layouts on site',
      'Cross-checked 2D construction drawings against ongoing site construction',
      'Managed site safety standards, material deliveries, and contractor progress logs'
    ],
    software: ['AutoCAD', 'MS Office', 'Revit Viewer'],
    keyProjects: ['7-Story Residential Complex Construction'],
    highlights: ['Maintained zero site safety incidents', 'Ensured precise structural column placement alignment']
  },
  {
    id: 'exp-revit-modeler',
    title: 'Revit Modeler',
    company: 'Apex Town Equipment',
    employmentType: 'Full-time',
    period: 'Mar 2021 – Dec 2021 (10 mos)',
    location: 'Dhaka, Bangladesh',
    summary: 'Focused on high-volume architectural Revit 3D modeling, family creation, facade panel modeling, and quantity takeoffs.',
    areasOfExpertise: [
      'Building 3D Model Development',
      'Architectural Structural MEP Modeler',
      'Quantity Takeoffs'
    ],
    responsibilities: [
      'Converted 2D architectural sketches into detailed Revit 3D building geometry',
      'Built custom door, window, and cabinetry parametric Revit family models',
      'Extracted accurate schedule tables for glass, brick, and concrete quantities'
    ],
    software: ['Autodesk Revit', 'AutoCAD', 'Enscape'],
    keyProjects: ['Township Equipment Enclosure Models', 'Residential Sub-division Unit Models'],
    highlights: ['Developed 100+ parametric RFA component families']
  },
  {
    id: 'exp-sr-officer',
    title: 'Sr. Officer - Revit Designer',
    company: 'Neoclassic Life Science Ltd.',
    employmentType: 'Full-time',
    period: 'Jan 2020 – Feb 2021 (1 yr 2 mos)',
    location: 'Dhaka, Bangladesh',
    summary: 'Lead Revit designer for cleanroom facilities, laboratory layouts, administrative offices, and HVAC service shaft modeling.',
    areasOfExpertise: [
      'BIM Modeling (Arch, Struct, MEP)',
      'Cleanroom & Facility Layouts',
      'Architectural Interior Documentation'
    ],
    responsibilities: [
      'Designed pharmaceutical cleanroom spatial plans with strict wall panel joint specifications',
      'Coordinated HVAC ductwork and air filtration unit routing in ceiling plenums',
      'Prepared presentation renders for management approval using Revit & Enscape'
    ],
    software: ['Autodesk Revit', 'AutoCAD', 'MS Office', 'Enscape'],
    keyProjects: ['Life Science Cleanroom Laboratory', 'Corporate Office Interior Refurbishment'],
    highlights: ['Standardized cleanroom BIM template across company projects']
  }
];

export const BIM_SOFTWARE_TOOLS = [
  { name: 'Autodesk Revit', category: '3D BIM Modeling', mastery: 98, icon: 'Box' },
  { name: 'Navisworks Manage', category: 'Clash Detection & 4D', mastery: 95, icon: 'Grid' },
  { name: 'AutoCAD', category: '2D Drafting & Detailing', mastery: 96, icon: 'FileText' },
  { name: 'Autodesk ReCap Pro', category: 'Point Cloud Scan Data', mastery: 90, icon: 'Layers' },
  { name: 'Dynamo BIM', category: 'Visual Scripting & Automation', mastery: 85, icon: 'Cpu' },
  { name: 'Enscape & Lumion', category: '3D Photorealistic Rendering', mastery: 92, icon: 'Eye' },
  { name: 'BIM 360 / ACC', category: 'Cloud BIM Collaboration', mastery: 88, icon: 'Cloud' }
];

export const EXTERNAL_LINKS = {
  fiverr: 'https://www.fiverr.com/mirjariyadh',
  upwork: 'https://www.upwork.com/freelancers/~012e6231655d49ca23?mp_source=share',
  linkedin: 'https://www.linkedin.com/in/mirjariyadh',
  website: 'https://mirjariyadh.com.bd'
};
