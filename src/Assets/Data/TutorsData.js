const TutorsData = {
  heading: "Team Members",
  subheading:
    "FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep, and others to receive form submissions via email.",
  members: [
    {
      name: "Jane Smith",
      title: "Creative Designer",
      description:
        "Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in varius risus tellus quis lacus. Sed ac bibendum odio.",
      expertise: ["CSS", "Javascript", "React"],
      socialMedia: ["instagram", "twitter", "website"],
      profileImage : "https://flexiblog-education.netlify.app/static/41bc1caf29080d62bd156256ffb0cd6a/ae23d/jane-smith.webp",
    },
    {
      name: "Sarah Doe",
      title: "Internet Marketer",
      description:
        "Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in varius risus tellus quis lacus. Sed ac bibendum odio.",
      expertise: ["Affiliate", "Marketing", "Online Business"],
      socialMedia: ["instagram", "twitter", "website"],
      profileImage : "https://flexiblog-education.netlify.app/static/8138313836cfae3b6c5ed951add51e76/ae23d/sarah-doe.webp",
    },
    {
      name: "John Doe",
      title: "Web Developer",
      description:
        "Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in varius risus tellus quis lacus. Sed ac bibendum odio.",
      expertise: ["NodeJS", "ASP.NET", "PHP"],
      socialMedia: ["instagram", "twitter", "website"],
      profileImage : "https://flexiblog-education.netlify.app/static/18c810c8f231ac22d5ec2cf2819ed68c/ae23d/john-doe.webp",
    },
    {
      name: "Steve Grant",
      title: "Product Designer",
      description:
        "Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in varius risus tellus quis lacus. Sed ac bibendum odio.",
      expertise: ["Graphic Design", "Javascript", "UI/UX"],
      socialMedia: ["instagram", "twitter", "website"],
      profileImage : "https://flexiblog-education.netlify.app/static/509caf26abbc2f9f2d532e311031dc48/ae23d/steve-grant.webp",
    },
  ],
  links: [
        {
          label: 'Instagram',
          href: '#',
          icon: 'instagram',
          svgIcon: (
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="#C13584" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
          )
        },
        {
          label: 'Twitter',
          href: '#',
          icon: 'twitter',
          svgIcon: (
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#1DA1F2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
          )
        },
        {
          label: 'Website',
          href: '#',
          icon: 'github',
          svgIcon: (
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" color="darkslategray" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>          )
        },
      ],
};

export default TutorsData;