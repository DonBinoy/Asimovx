import { jobTranslations } from './jobTranslations';

export const translations = {
    EN: {
        navbar: {
            home: "Home",
            about: "About Us",
            services: "Our Service",
            portfolio: "Portfolio",
            careers: "Careers",
            blog: "Blog",
            contact: "Contact Us",
            products: "Products"
        },
        hero: {
            tagline: "Tech Consulting Reimagined",
            title_1: "Supercharge",
            title_2: "Your Business",
            title_3: "with AI.",
            description: "Empower your world of business with cutting-edge tech solutions that leverage state-of-the-art artificial intelligence (AI) to move your organization towards its goals faster than ever before.",
            cta_primary: "Start Your Journey",
            cta_secondary: "See the work"
        },
        features: {
            tagline: "What we do",
            title_1: "Solving Real-World Business",
            title_2: "Problems With AI.",
            description: "Our team of experienced AI consultants will work closely with you to identify the right artificial intelligence technologies, tools, and strategies that will help you streamline your business operations, improve customer engagement, and maximize profitability.",
            key_expertise: "Key Expertise",
            vision_title: "Computer Vision",
            vision_desc: "Our core expertise lies in crafting bespoke software solutions that harness the power of computer vision techniques to derive valuable insights from images, videos, LiDAR data, and live streams.",
            genai_title: "Generative AI",
            genai_desc: "Develop groundbreaking, high-performance solutions customized to your unique requirements. From tailoring NLP to harnessing the capabilities of computer vision and reinforcement learning.",
            nlp_title: "Natural Language Processing",
            nlp_desc: "Leverage the potential of deep learning to harness the power of natural language processing pipelines and derive valuable meaning and insights from unstructured text.",
            consulting_title: "AI Consulting",
            consulting_desc: "Identify the right technologies, tools, and strategies to streamline operations, improve engagement, and maximize profitability."
        },
        process: {
            tagline: "How we do it",
            title: "Our Process",
            step_1_title: "AI Strategy Development",
            step_1_desc: "Define clear objectives and roadmap for AI integration",
            step_2_title: "Data Analysis",
            step_2_desc: "Comprehensive evaluation of your data infrastructure",
            step_3_title: "AI Use Case Identification",
            step_3_desc: "Discover high-impact opportunities for AI implementation",
            step_4_title: "Gap Analysis",
            step_4_desc: "Identify technical and organizational requirements",
            step_5_title: "Deployment",
            step_5_desc: "Seamless integration into your existing systems",
            step_6_title: "Training and Education",
            step_6_desc: "Empower your team with AI expertise and best practices"
        },
        industries: {
            tagline: "Features",
            title_1: "We can help organizations",
            title_2: "of all sizes and industries",
            description: "Design, build and deploy state-of-the-art machine learning solutions. Learn more about some of the functions and segments we can help you with:",
            tech_title: "Technology & Software",
            tech_desc: "Our innovative solutions have helped technology companies re-imagine the way they operate.",
            sports_title: "Sports Tech",
            sports_desc: "We bring state-of-the-art technologies to sports with tracking, activity recognition, pose estimation and more.",
            auto_title: "Automotives",
            auto_desc: "With solutions ranging from multi-camera object tracking to behavior identification and process optimization.",
            manu_title: "Manufacturing/Agro",
            manu_desc: "We have implemented solutions ranging from computer vision tools for food manufacturers to real-time sensor analysis on production lines.",
            marketing_title: "Marketing",
            marketing_desc: "Whether it's on the demand or supply side, we help companies make the most of impression- and user-level data to optimize their advertising efforts.",
            health_title: "Healthcare & Pharma",
            health_desc: "We build solutions to make pharmaceuticals safer and more effective through machine learning based approaches for detecting prescription fraud.",
            gaming_title: "Gaming",
            gaming_desc: "Finding a way to engage players in this high-paced, competitive environment is a major challenge.",
            workforce_title: "Build A Future-Ready AI Workforce",
            workforce_desc: "Empower your team to seamlessly integrate AI into their daily workflows by providing customized training designed to address your specific requirements.",
            transformation_title: "Business Transformation",
            transformation_desc: "We specialize in digital business transformation, empowering companies to harness the power of technology and innovation.",
            web_title: "Web Application Design & Development",
            web_desc: "Web applications are essential tools for modern businesses, offering dynamic and interactive experiences for users.",
            mobile_title: "Mobile Development",
            mobile_desc: "Mobile applications are an excellent way to reach an audience that is already aware of and interested in your brand.",
            ecom_title: "E-Commerce Website",
            ecom_desc: "E-commerce websites are a powerful tool for engaging existing customers and attracting new ones through convenient online access."
        },
        blog: {
            tagline: "ARTICLE & NEWS",
            title_1: "Update Article",
            title_2: "& More Archives.",
            description: "Learn about and our news Information.",
            read_more: "Read More"
        },
        standards_banner: {
            tagline: "The Asimovx Standard",
            line_1: "EXCELLENCE",
            line_2: "IS ONLY THE",
            line_3: "START."
        },
        blog_articles: {
            common: {
                back_to_home: "Back to Home",
                view_github: "View on GitHub",
                view_repo: "If you’d like to jump straight to the code, please visit my Github-Repo:"
            },
            human_pose: {
                title: "Human Pose Comparison and Action Scoring using Deep Learning, OpenCV & Python",
                excerpt: "Pose Estimation is one of the more elegant applications of neural networks and is startlingly accurate and sometimes, seems like...",
                content: {
                    p1: "Pose Estimation is one of the more elegant applications of neural networks and is startlingly accurate and sometimes, seems like something right out of science fiction.",
                    p2: "For Instance, check out Google's Move Mirror, an in-browser application that estimates the user's pose in real time and then displays a movie still with the actor holding the same pose.",
                    p3: "When I glanced over it, however, I got an idea. What if the same methodology could be used to compare the same actions performed by two people? This technology could then be used to teach people over remote view! I got to work immediately and tried to reverse engineer the techniques used by Google.",
                    h_challenge: "The Challenge",
                    p4: "I found, to my disappointment, a few Tensorflow.js tutorials and theories on the same and nothing in python. This was understandable as it was an in-browser application and so, I decided to port the code to mighty Python. A few sessions of research showed me that they were using Posenet, a fast yet accurate model, for estimating pose.",
                    p5: "The Objective was simple: I wanted to go one step ahead and compare a whole action such as a punch or a kick with an image and tell me the extend to which it was correct.",
                    h_model: "The Model",
                    p6: "As I stated earlier, Google Mirror uses PoseNet, a deep learning model which specifies 17 points on the human body. I found a good python implementation of it here.",
                    h_similarity: "Defining Similarity",
                    p_similarity: "The next challenge was defining similarity. When we think about the problem, we see that there are many uncertainties to be addressed: humans can have different heights and body shapes, they might be in different parts in the picture: one person may have been standing close to the camera, another might have been faraway. All these problems have to be solved in order to output a correct result.",
                    h_solutions: "Key Solutions:",
                    li_bbox_bold: "New Bounding Box:",
                    li_bbox: "From the model output, we get the co-ordinates of the 17 key-points on a person's body. This information can be used to create a new bounding box which tightly covers the person in the picture.",
                    li_norm_bold: "Normalization:",
                    li_norm: "In order to account for the size inconsistencies, we perform L2 normalization of the points in order to transform it into a unit vector.",
                    h_cosine: "Cosine Similarity",
                    p_cosine_1: "Now that we have standardized the pose vectors, it is time to choose a similarity measure. I chose cosine similarity for this particular instance, mainly because we are working with vectors.",
                    p_cosine_2: "The 17 key-points are converted into a vector and plotted in high dimensional space. This vector plotting is compared to another vector plot from our benchmark image. The direction of vectors here are an indication of the similarity of the poses.",
                    h_drawbacks: "Drawbacks of Initial Approach",
                    li_drawback_1: "The algorithm does not take into account the time taken to perform the activity",
                    li_drawback_2: "There is no scope of attaining a 100 percent score since the average is taken against one picture",
                    h_dtw: "Dynamic Time Warping (DTW)",
                    p_dtw_1: "Even though it sounds like a sci-fi method of time travel, it really isn't. It is just a method used in comparing sequences and graphs of different lengths. It matches the different troughs and crests in a graph using one to many matching and such, resulting in synced up frames on its own.",
                    p_dtw_2: "This method seemed ideal for my use case, as I had similar graphs for each of the 17 key-points as the action was performed. I could then use DTW to compare these graphs and get 17 scores for each of the 17 key-points. An average of these 17 scores could be then taken as the total score.",
                    h_future: "Future Improvements",
                    li_auto_bold: "Automation:",
                    li_auto: "Recognition of action performed and orientation automatically",
                    li_score_bold: "Confidence Scores:",
                    li_score: "Using confidence scores returned by Posenet for more efficient scoring",
                    li_point_bold: "Point Specification:",
                    li_point: "According to the action to be performed, specific points can be used to increase accuracy",
                    li_feedback_bold: "Feedback System:",
                    li_feedback: "Providing feedback to users on which body part's movement needs correction",
                    h_refs: "References",
                    ref_1: "Move Mirror - TensorFlow Blog",
                    ref_2: "Dynamic Time Warping - Towards Data Science"
                }
            },
            realtime_image: {
                title: "Real-Time Image Classification On Android Using Flutter, TFlite",
                excerpt: "Making a smartphone app from scratch might seem a daunting task to most newbies and maybe even seasoned programmers. Enter Flutter....",
                content: {
                    p1: "If you’d like to jump straight to the code, please visit my Github-Repo:",
                    p2: "Making a smartphone app from scratch might seem a daunting task to most newbies and maybe even seasoned programmers. Enter Flutter.",
                    p3: "As One of the promising, albeit untested technologies unveiled by Google for android app development, Flutter aims to make smartphone app development easier than ever. It is even rumored that flutter will soon be the go-to name in mobile app development. Creating UIs is a breeze and the developer friendly coding style makes the icing on the cake.",
                    p4: "Working as an AI engineer, one of the most common problems I and my team mates encounter is the matter of deployment of our models. How do you prototype your deep learning models in a quick, yet elegant way? The answer is carried around in our very pockets. Smartphones. That’s right. That overpowered piece of hardware on which you are possibly reading this article at this very moment is any developer’s dream come true. Combine the ubiquitous nature of smartphones and the versatile technology that is machine learning and you’re looking at a vast potential of innovation right there.",
                    p5: "Now, I work at a place where people are often expected to roll up their sleeves and get the job done rather than wait for help. So, at one such instance, the matter of deployment loomed ahead of me and I had to choose between the daunting world of native android development and an exciting, yet uncharted new tech called Flutter. I chose the latter. At the time of writing this article, not every aspect of flutter is super stable, but it is certain that all of those problems shall disappear. In this article, I shall describe the important aspects of integrating deep learning models into an android app made with flutter. While I am no experienced android nor flutter developer, I was able to get a base version working in about a week. That’s how easy it is.",
                    p6: "I assume the reader has a base understanding of layouts in flutter and a basic understanding of the programming language used, which is Dart. If you are unfamiliar with what I just mentioned a few beginner posts will get you on your way. While the methods and code mentioned in this project is not exactly what I would call optimized, it can serve as a starting point or a base for your own projects. So let’s dive in to it.",
                    h_tflite: "We will be using the TFlite plugin",
                    p_tflite: "to integrate our neural network with the app. In order to use it, We first need to specify it as a dependency and also specify our model file’s presence in the assets folder. There are three steps to be followed for this:",
                    li_step1: "Place the model file(in .tflite format) in the assets folder along with the labels.txt file which contains the name of the classes used.",
                    li_step2: "Specify the file’s presence in the assets folder so that the compiler knows to use it and also specify the usage of the plugin.",
                    li_step3: "In android/app/build.gradle, add the following setting in android block.",
                    p_pubspec: "So let’s open up our pubspec.yaml file.",
                    h_pubspec: "pubspec.yaml",
                    p_dev_dep: "Here, you can see that I’ve specified the tflite: 1.0.1 as a dev_dependency. Now it is ready to be imported and used with our app. It’s that simple (Not quite). When flutter runs the packages get command, the files required to run this plugin will be downloaded without any further action from our side.",
                    p_home_dart: "Now let’s open up our home.dart file, which is the page which has the ignite button labeled “start classification”.",
                    h_import: "Importing the tflite plugin",
                    p_import_1: "As you can see, I’ve imported the tfliteplugin on line 3 in the home.dart page, similar to how I would import library files in other standard programming languages.",
                    p_import_2: "The Tflite plugin comes bundled with a function called loadModel() which is used to specify the name of the model to be loaded and the labels.txt file, which contains the name of the classes used.",
                    h_load: "Loading the model",
                    p_load: "For representation purposes, I’ve wrapped up this process in a function of my own, which is also called loadmodel().",
                    h_run_model: "runModelOnFrame() function",
                    p_run_1: "Now let’s move on to the camera.dart file, where the actual inference takes place. Here, We use the function runModelOnFrame(), which takes the frame from the camera stream and takes it as input to the model. This function requires a list of arguments such as the frame, its height, width, the number of results to be displayed and so on.",
                    p_run_2: "The output is received in the format specified by the plugin’s ReadMe file found on Flutter Pub.",
                    p_output_1: "This output is received by the recognitions variable.",
                    p_render: "The output received from the model is imposed on the ImageStream from the camera on the render.dart page. In order to do this, the results obtained from the model is passed into the render.dart page as a list named, well, results. These results are then displayed along with the confidence percentage on the screen.",
                    footer_repo: "All the code and project files are available in my GitHub:"
                }
            }
        },
        cta: {
            title_1: "Need a Custom",
            title_2: "Project Plan?",
            description: "Get in touch with our team to discuss your unique requirements and discover how we can accelerate your AI transformation.",
            button: "Get in Touch"
        },
        footer: {
            title_1: "Custom-built ML Based",
            title_2: "solutions for Enhancing",
            title_3: "your world of Business",
            description: "We're excited to be on this journey with you.",
            contact: "CONTACT",
            sweden: "Sweden",
            network: "Network",
            privacy: "Privacy",
            legal: "Legal",
            cookies: "Cookies"
        },
        careers: {
            tagline: "Join Us",
            title: "Build the Future.",
            description: "We are looking for passionate individuals to join our team of innovators, engineers, and problem solvers.",
            details: "Details"
        },
        portfolio: {
            tagline: "Our Work",
            title: "Selected Projects.",
            description: "A showcase of our pioneering work in artificial intelligence, robotics, and immersive digital experiences.",
            view_case_study: "Visit"
        },
        privacy_policy: {
            title: "Privacy",
            title_suffix: "Policy.",
            intro_1: "We created this privacy policy to demonstrate our commitment to privacy and security and to clearly define these standards for our website visitors. This privacy policy applies only to information collected by this website.",
            intro_2: "The following discloses our information gathering and dissemination practices for this website:",
            list_1: "We use consumers' IP addresses to help diagnose problems with our server and to administer our website.",
            list_2: "We use cookies to keep track of shopping cart contents and/or referral information.",
            list_3: "Our site uses an order form for consumers to request information about our products and services. We collect consumer's contact information (like their email address, telephone number, or mailing address). We use contact information from the form to send orders, information, or offers.",
            list_4: "The consumer's contact information may also be used to get in touch with the Consumer when necessary to resolve a problem.",
            list_5: "When you fill out a contact form or otherwise contact us, we may retain your communication in order to process your inquiries, respond to your requests and improve our services.",
            list_6: "In some cases, information you provide through third-party services such as toll-free numbers for this site or live chat services may be retained in order to process your inquiries, respond to your requests and improve our services. Information collected by these third-party services is also governed by their privacy policy.",
            list_7: "We may use your email address, phone number or mailing address to communicate with you about our services.",
            list_8: "We may use any information you provide or that we collect to provide, maintain, protect, and improve our services (including advertising services) and develop new services.",
            list_9: "Consumers may opt-out of receiving future mailings at any time; see the choice/opt-out section below.",
            list_10: "Consumers may contact us at any time to request that we delete contact information provided to us; see the choice/opt-out section below.",
            disclaimer: "Please note: if you communicate with us through this site, it is possible that your communication may not be treated as privileged or confidential. If you communicate with us through this site in a matter or condition for which we already represent or treat you, please remember that Internet e-mail and contact forms are not secure by nature and you should avoid sending sensitive or confidential internet messages.",
            sharing_title: "Information Sharing",
            sharing_text: "We do not sell, trade, or otherwise transfer your personally identifiable information from consumers to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or serving consumers, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.",
            security_title: "Security",
            security_text: "This site has security measures in place to protect the loss, misuse and alteration of the information under our control. We store all user information in databases protected via a variety of access controls as well as being physically located in a secure facility. This data is accessed only for the purposes specified in this privacy policy.",
            opt_out_title: "Choice/Opt-Out",
            opt_out_text: "You can opt out of receiving future communications from us. You can also request to see any information about you that we have stored, and you can request that we delete any of this information. See below for how to contact us.",
            usage_title: "Website Usage Disclaimers",
            usage_text: "Our company is responsible for the content of this website. This website is designed for general information purposes only and it does not constitute legal or medical advice or the formation of a lawyer-client or physician-client relationship.",
            contact_title: "How to Contact Us",
            contact_text: "If you have any questions about this privacy policy, the practices of this site, or your dealings with this Web site, please visit our contact page."
        },
        contact_page: {
            tagline: "Contact Us",
            title: "How can we help you?",
            blurb: "We are always here to help you with any questions or issues you may have. Feel free to reach out to us.",
            locations: {
                sweden: "Sweden",
                spain: "Spain",
                latvia: "Latvia"
            },
            form: {
                title: "Write to us..",
                subtitle: "We will get back to you as soon as possible",
                name: "Name",
                email: "Email",
                phone: "Phone",
                message: "Message",
                btn_submit: "Send Message",
                btn_sending: "Sending...",
                success_title: "Message Sent!",
                success_msg: "We'll get back to you shortly.",
                btn_another: "Send Another Message"
            },
            social_title: "Follow us"
        },
        services_page: {
            tagline: "What We Do",
            title_1: "Solving",
            title_2: "Real-World",
            title_3: "Business Problems",
            title_4: "With",
            title_5: "AI Based",
            title_6: "Consulting.",
            description: "Our team of experienced AI consultants will work closely with you to identify the right artificial intelligence technologies, tools, and strategies that will help you streamline your business operations, improve customer engagement, and maximize profitability, everything from NLP/Computer Vision to Generative AI.",
            contact_btn: "Contact Us",
            services_header: "Services",
            services_desc: "We can help organizations of all sizes and industries design, build and deploy state-of-the-art machine learning solutions.",
            core: {
                vision: {
                    title: "Computer Vision",
                    desc: "Our core expertise lies in crafting bespoke software solutions that harness the power of computer vision techniques to derive valuable insights from a diverse range of data sources, including images, videos, LiDAR data, and live streams.",
                    detail: "Through a fusion of cutting-edge deep learning algorithms and traditional computer vision approaches, we empower businesses to effortlessly detect, segment, and track objects, thereby unlocking crucial information and elevating the efficiency of their decision-making processes."
                },
                nlp: {
                    title: "Natural Language Processing",
                    desc: "Leverage the potential of deep learning to harness the power of natural language processing pipelines and derive valuable meaning and insights from unstructured text."
                },
                genai: {
                    title: "Generative AI",
                    desc: "Unlock the full potential of your business by embracing state-of-the-art generative AI solutions customized to your unique requirements. Our team of skilled machine learning engineers and scientists is poised to assist you in developing groundbreaking, high-performance solutions and seamlessly integrating generative AI into your business operations and products.",
                    detail: "Whether it’s tailoring natural language processing to your needs, harnessing the capabilities of computer vision, or exploring the realms of reinforcement learning, our seasoned professionals are committed to guiding you through the intricate landscape of generative AI, enabling you to seize its limitless possibilities"
                }
            },
            general: {
                tech: { title: "Technology & Software", desc: "Our innovative solutions have helped technology companies re-imagine the way they operate." },
                sports: { title: "Sports Tech", desc: "We bring state-of-the-art technologies to sports with tracking, activity recognition, pose estimation and more." },
                auto: { title: "Automotives", desc: "With solutions ranging from multi-camera object tracking to behavior identification and process optimization." },
                manu: { title: "Manufacturing/Agro", desc: "We have implemented solutions ranging from computer vision tools for food manufacturers to real-time sensor analysis on production lines." },
                marketing: { title: "Marketing", desc: "Whether it’s on the demand or supply side, we help companies make the most of impression- and user-level data to optimize their advertising efforts." },
                health: { title: "Healthcare & Pharma", desc: "We build solutions to make pharmaceuticals safer and more effective through machine learning based approaches for detecting prescription fraud, personalizing healthcare provider outreach, and researching the next wave of therapeutics." },
                gaming: { title: "Gaming", desc: "Finding a way to engage players in this high-paced, competitive environment is a major challenge. We help companies personalize promotions and incentives to maximize customer engagement through effective reinvestment." },
                workforce: { title: "Build A Future-Ready AI Workforce", desc: "Empower your team to seamlessly integrate AI into their daily workflows by providing customized training designed to address your specific requirements. Our training programs will equip your team with the necessary skills and knowledge to thrive and achieve success in leveraging AI technologies." },
                transformation: { title: "Business Transformation", desc: "At AsimovX, we specialize in digital business transformation, empowering companies to harness the power of technology and innovation to stay ahead in a rapidly evolving market. Our expert team collaborates with you to reimagine your business processes, enhance customer experiences, and streamline operations." },
                web: { title: "Web Application Design & Development", desc: "Web applications are essential tools for modern businesses, offering dynamic and interactive experiences for users. At Asimovx, we specialize in comprehensive web application development and design services tailored to meet your specific needs." },
                mobile: { title: "Mobile Development", desc: "Mobile applications are an excellent way to reach an audience that is already aware of and interested in your brand, as well as to attract new customers through easy access on their phones. Asimovx manages every aspect of the development process." },
                ecom: { title: "e-Commerce Website", desc: "E-commerce websites are a powerful tool for engaging existing customers and attracting new ones through convenient online access. Asimovx oversees every phase of the development process for its clients’ e-commerce platforms." }
            }
        },
        portfolio_page: {
            tagline: "Our Work",
            title: "Selected Projects.",
            description: "A showcase of our pioneering work in artificial intelligence, robotics, and immersive digital experiences.",
            view_case_study: "View Case Study",
            projects: {
                p4dots: { title: "4dots", category: "Custom Customization & Printing", desc: "A comprehensive customization and printing service offering personalized letterheads, booklets, and canvas prints." },
                kontrast: { title: "Kontrast", category: "Restaurant & Hospitality", desc: "A premium Northern Indian dining experience in Malmö, Sweden, featuring authentic Punjabi cuisine." },
                secondskin_b2b: { title: "SecondskinStyle B2B", category: "E-Commerce & Sportswear", desc: "Performance-driven sportswear engineered for athletes, emphasizing technical design and sustainable manufacturing." },
                secondskin: { title: "SecondskinStyle", category: "Consumer Sportswear", desc: "Premium athletic apparel brand focused on comfort, durability, and style for the modern athlete." },
                pipetechs: { title: "PipeTechs", category: "Pipeline Technology", desc: "Advanced pipeline leak detection systems using acoustic technology for liquid, gas, and sub-sea applications." },
                growers: { title: "Growers Direct", category: "Agriculture & Retail", desc: "Family-run nursery offering a wide range of plants, pottery, and expert gardening advice." },
                timax: { title: "Timax-NL", category: "Construction Consulting", desc: "Dutch consulting firm specializing in building regulations, energy performance, and sustainable construction." },
                sicci: { title: "Sicci", category: "Chamber of Commerce", desc: "Singapore Indian Chamber of Commerce and Industry, supporting business growth and advocacy since 1924." },
                icai: { title: "I C A I", category: "Professional Organization", desc: "Singapore Chapter of the Institute of Chartered Accountants of India, fostering professional development." },
                chets: { title: "Chet's Shoes", category: "E-Commerce & Retail", desc: "Family-owned footwear business offering premium work boots, safety shoes, and personalized service since 1947." },
                finance: { title: "Personal Finance Sweden", category: "Financial Education", desc: "Empowering expats and NRIs in Sweden with knowledge on investing, taxes, and family finance." }
            }
        },
        careers_page: {
            tagline: "Join Us",
            title: "Build The Future.",
            description: "We are looking for passionate individuals to join our team of innovators, engineers, and problem solvers.",
            search_placeholder: "Search roles...",
            filters: {
                all: "All",
                full_time: "Full-time",
                internship: "Internship"
            },
            details: "Details",
            no_positions: "No positions found matching your criteria.",
            clear_filters: "Clear filters"
        },
        jobs: jobTranslations.EN,
        career_details: {
            back_to_careers: "Back to Careers",
            apply_now: "Apply Now",
            share_role: "Share this role",
            department: "Department",
            dept_name: "Engineering & AI",
            contact_contact: "Contact",
            about_role: "About The Role",
            what_you_do: "What You'll Do",
            what_looking_for: "What We're Looking For",
            preferred_qual: "Preferred Qualifications",
            why_join: "Why Join Us?"
        },
        housing_association: {
            hero: {
                tagline: "AsimovX Ecosystem",
                title_1: "Board work,",
                title_2: "perfected.",
                description_1: "A premium digital layer for your building.",
                description_2: "Beautiful. Automated. Effortless."
            },
            sticky_scroll: {
                unified_command: {
                    title: "Unified Command.",
                    desc: "Bring your board, residents, and vendors into one shared reality. No more lost emails or WhatsApp threads."
                },
                visual_clarity: {
                    title: "Visual Clarity.",
                    desc: "See exactly what's happening in your building. From broken lights to budget usage, visualize it all."
                },
                future_proof: {
                    title: "Future Proof.",
                    desc: "Built on modern infrastructure that grows with you. Secure, fast, and always online."
                }
            },
            core_objective: {
                title: "The Housing Association Platform",
                description: "This platform is built to make life easier for Swedish housing associations (BRF) by reducing the everyday workload of board members. Many board members are volunteers, and today they spend far too much time on emails, follow-ups, spreadsheets, and manual coordination.",
                quote: "The goal is to let board members spend less time on administration and more time on what really matters, improving the living experience for residents.",
                features: {
                    chaos: "The platform replaces chaos with one simple, digital workspace that:",
                    list: [
                        "Reduces manual work",
                        "Removes repetitive tasks",
                        "Keeps everything in one place",
                        "Prevents information from being lost when boards change"
                    ]
                }
            },
            living_index: {
                tagline: "The Suite",
                title: "Everything in its right place.",
                description: "A complete operating system for your housing association. Designed for clarity, speed, and control.",
                features: {
                    communication: { title: "Communication", desc: "Reach everyone instantly." },
                    issues: { title: "Issues", desc: "Fix things faster." },
                    archives: { title: "Archives", desc: "Safe storage." },
                    booking: { title: "Booking", desc: "Resource management." },
                    board: { title: "Board", desc: "Operational command." },
                    residents: { title: "Residents", desc: "Self-service portal." }
                }
            },
            cta: {
                title_1: "Ready to",
                title_2: "Elevate?",
                book_demo: "Book a Demo",
                view_pricing: "View Pricing"
            },
            marquee: {
                system_online: "System Online",
                secure: "Secure",
                connected: "Connected",
                live: "Live"
            },
            dashboard: {
                network_status: "Network Status",
                optimal: "Optimal",
                latency: "Latency",
                users_live: "3 Users Live",
                new_alert: "New Alert",
                alert_msg: "Water pressure warning detected in Building A.",
                monthly_revenue: "Monthly Revenue",
                residents: "Residents",
                open_tasks: "Open Tasks"
            },
            booking: {
                hero: {
                    title_1: "Book",
                    title_2: "Smart.",
                    description: "Fair, transparent, and conflict-free. From Laundry Rooms to Guest Apartments.",
                    utilization: "Utilization",
                    conflicts: "Conflicts"
                },
                calendar: {
                    laundry_room: "Laundry Room A",
                    month: "October"
                },
                floating: {
                    resident_title: "Resident",
                    laundry: "Laundry A",
                    confirmed: "Confirmed",
                    reminders: "Reminders"
                },
                lifestyle: {
                    shared_spaces: {
                        title: "Shared Spaces.",
                        desc: "Maximize utilization of common resources without the headache."
                    },
                    guest_apartments: {
                        title: "Guest Apartments.",
                        desc: "Easy booking flows for overnight guests."
                    }
                }
            },
            communication: {
                hero: {
                    title_1: "Unified",
                    title_2: "Voice.",
                    description: "Speak once, reach everyone. A unified channel for announcements, updates, and urgent alerts.",
                    email_digested: "Email Digested",
                    mobile_push: "Mobile Push"
                },
                phone: {
                    messages: "Messages",
                    urgent: "Urgent",
                    just_now: "Just now",
                    elevator_title: "Elevator Maintenance",
                    elevator_desc: "Elevator B will be down for service...",
                    read_by: "Read by 45 Tenants",
                    push_sent: "Push Sent",
                    delivery_rate: "98% Delivery Rate"
                },
                features: {
                    title: "Board to Resident Flow",
                    description: "A dedicated channel for official, one-way communication from the board to the residents.",
                    items: {
                        board_announcements: { title: "Board Announcements", desc: "Board can post official news and updates in one central place.", benefit: "Residents know where to find reliable information" },
                        targeted_messages: { title: "Targeted Messages", desc: "Send messages to all residents or selected buildings/sections.", benefit: "Avoids unnecessary messages" },
                        email_notifications: { title: "Email Notifications", desc: "Automatic emails for new announcements.", benefit: "Ensures high visibility" },
                        message_read: { title: "Message Read Status", desc: "Track whether residents have read important notices.", benefit: "Confirms information has been received" },
                        push_notifications: { title: "Push Notifications", desc: "Alerts for urgent or time-sensitive updates.", benefit: "Faster communication when needed" },
                        vendor_comm: { title: "Vendor Communication", desc: "Communicate with external vendors directly through the system.", benefit: "Keeps all communication documented in one place" }
                    }
                },
                lifestyle: {
                    title: "Community, Connected.",
                    desc: "When everyone knows what’s happening, neighbors become friends.",
                    stat_title: "100%",
                    stat_subtitle: "Board Transparency",
                    stat_desc: "Based on user surveys 2024."
                }
            },
            issues: {
                hero: {
                    title_1: "Fix it",
                    title_2: "Faster.",
                    description: "From 'Broken Lock' to 'Fixed' in record time. Visual reporting that actually works."
                },
                map: {
                    broken_lock: "Broken Lock",
                    priority: "High Priority",
                    resolved: "Resolved!",
                    resolved_desc: "Janitor marked 'Entrance Light' as fixed."
                },
                features: {
                    title: "Structured Reporting",
                    description: "A dedicated system for managing facility-related problems and maintenance requests.",
                    items: {
                        submission: { title: "Issue Submission", desc: "Residents can report problems through the portal.", benefit: "Easy and quick reporting" },
                        photo: { title: "Photo Upload", desc: "Attach photos to explain the issue.", benefit: "Reduces misunderstandings" },
                        category: { title: "Issue Category", desc: "Select type (e.g. Plumbing, Electrical, Common Area).", benefit: "Faster handling" },
                        priority: { title: "Priority Level", desc: "Mark urgency (High, Medium, Low).", benefit: "Helps board focus on critical issues" },
                        tracking: { title: "Status Tracking", desc: "Clear progress: New → In Progress → Completed.", benefit: "Residents know what’s happening" },
                        comments: { title: "Comments & Updates", desc: "Shared message thread for updates and responses.", benefit: "Transparent communication" }
                    }
                },
                lifestyle: {
                    title: "Empower your caretakers.",
                    desc: "Give your vendors and janitors the digital tools they need to do their best work."
                }
            },
            documents: {
                hero: {
                    title_1: "Digital",
                    title_2: "Memory.",
                    description: "The institutional brain of your association. Secure, searchable, and safe forever.",
                    search_placeholder: "Search documents...",
                    encrypted: "Encrypted Storage",
                    archived_data: "Archived Data"
                },
                lifestyle: {
                    title: "Paperless Future.",
                    desc: "Stop drowning in binders. Access any contract, protocol, or invoice in seconds."
                }
            },
            board: {
                hero: {
                    title_1: "Board",
                    title_2: "Control.",
                    description: "Meetings, decisions, and tasks in one fluid workspace. Stop using WhatsApp for official business.",
                    task_manager: "Task Manager"
                },
                board_visual: {
                    todo: "To-Do",
                    protocol_signed: "Protocol Signed",
                    admin_time: "Admin Time",
                    open_tasks: "Open Tasks",
                    completed: "Completed"
                },
                tasks: {
                    budget: { t: "Budget 2026 Approval", s: "In Progress" },
                    playground: { t: "Playground Renovation", s: "Pending" },
                    fire_inspection: { t: "Fire Inspection", s: "Completed" }
                },
                lifestyle: {
                    title: "Focus on decisions.",
                    desc: "Let the software handle the reminders, signatures, and filing."
                }
            },
            residents: {
                hero: {
                    title_1: "Your",
                    title_2: "Home.",
                    description: "Everything related to your apartment in one place. Fees, keys, cars, and community.",
                    tags: {
                        payment_history: "Payment History",
                        car_registry: "Car Registry",
                        documents: "Documents",
                        polls: "Polls"
                    }
                },
                dashboard: {
                    monthly_fee: "Monthly Fee",
                    due_in: "Due in 5 days",
                    parking: "Parking",
                    slot: "Slot A-42",
                    active: "Active",
                    poll: "Community Poll",
                    poll_question: "Should we install solar panels on the south roof?",
                    yes: "Yes",
                    no: "No",
                    auto_pay: "Auto-Pay",
                    enabled: "Enabled",
                    guests: "Guests"
                },
                lifestyle: {
                    title: "You are in control.",
                    desc: "Access your housing details anytime, anywhere. No more waiting for the office to open."
                }
            },
        }
    },
    ES: {
        navbar: {
            home: "Inicio",
            about: "Sobre Nosotros",
            services: "Nuestro Servicio",
            portfolio: "Portafolio",
            careers: "Carreras",
            blog: "Blog",
            contact: "Contáctenos",
            products: "Productos"
        },
        hero: {
            tagline: "Consultoría Tecnológica Reinventada",
            title_1: "Potencie",
            title_2: "Su Negocio",
            title_3: "con IA.",
            description: "Empodere su mundo empresarial con soluciones tecnológicas de vanguardia que aprovechan la inteligencia artificial (IA) de última generación para llevar a su organización hacia sus objetivos más rápido que nunca.",
            cta_primary: "Inicie Su Viaje",
            cta_secondary: "Ver el trabajo"
        },
        features: {
            tagline: "Lo que hacemos",
            title_1: "Resolviendo Problemas",
            title_2: "Reales con IA.",
            description: "Nuestro equipo de consultores expertos en IA trabajará estrechamente con usted para identificar las tecnologías, herramientas y estrategias adecuadas que le ayudarán a optimizar sus operaciones y maximizar la rentabilidad.",
            key_expertise: "Experiencia Clave",
            vision_title: "Visión por Computadora",
            vision_desc: "Nuestra experiencia principal radica en crear soluciones de software a medida que aprovechan el poder de las técnicas de visión por computadora para obtener información valiosa de imágenes, videos y transmisiones en vivo.",
            genai_title: "IA Generativa",
            genai_desc: "Desarrolle soluciones innovadoras y de alto rendimiento personalizadas para sus requisitos únicos. Desde adaptar PLN hasta aprovechar las capacidades del aprendizaje por refuerzo.",
            nlp_title: "Procesamiento de Lenguaje Natural",
            nlp_desc: "Aproveche el potencial del aprendizaje profundo para utilizar el poder de las tuberías de procesamiento de lenguaje natural y obtener un significado valioso de textos no estructurados.",
            consulting_title: "Consultoría de IA",
            consulting_desc: "Identifique las tecnologías, herramientas y estrategias adecuadas para optimizar operaciones, mejorar el compromiso y maximizar la rentabilidad."
        },
        process: {
            tagline: "Cómo lo hacemos",
            title: "Nuestro Proceso",
            step_1_title: "Desarrollo de Estrategia de IA",
            step_1_desc: "Definir objetivos claros y hoja de ruta para la integración de IA",
            step_2_title: "Análisis de Datos",
            step_2_desc: "Evaluación integral de su infraestructura de datos",
            step_3_title: "Identificación de Casos de Uso",
            step_3_desc: "Descubrir oportunidades de alto impacto para la implementación de IA",
            step_4_title: "Análisis de Brechas",
            step_4_desc: "Identificar requisitos técnicos y organizativos",
            step_5_title: "Implementación",
            step_5_desc: "Integración perfecta en sus sistemas existentes",
            step_6_title: "Capacitación y Educación",
            step_6_desc: "Empoderar a su equipo con experiencia en IA y mejores prácticas"
        },
        industries: {
            tagline: "Características",
            title_1: "Podemos ayudar a organizaciones",
            title_2: "de todos los tamaños e industrias",
            description: "Diseñe, construya e implemente soluciones de aprendizaje automático de última generación. Conozca más sobre algunas de las funciones y segmentos en los que podemos ayudarle:",
            tech_title: "Tecnología y Software",
            tech_desc: "Nuestras soluciones innovadoras han ayudado a las empresas de tecnología a reinventar la forma en que operan.",
            sports_title: "Tecnología Deportiva",
            sports_desc: "Llevamos tecnologías de última generación a los deportes con seguimiento, reconocimiento de actividades, estimación de poses y más.",
            auto_title: "Automotriz",
            auto_desc: "Con soluciones que van desde el seguimiento de objetos con múltiples cámaras hasta la identificación de comportamientos y la optimización de procesos.",
            manu_title: "Manufactura/Agro",
            manu_desc: "Hemos implementado soluciones que van desde herramientas de visión por computadora para fabricantes de alimentos hasta análisis de sensores en tiempo real.",
            marketing_title: "Marketing",
            marketing_desc: "Ya sea en el lado de la demanda o de la oferta, ayudamos a las empresas a aprovechar al máximo los datos a nivel de usuario para optimizar sus esfuerzos publicitarios.",
            health_title: "Salud y Farmacia",
            health_desc: "Construimos soluciones para hacer que los productos farmacéuticos sean más seguros y efectivos a través de enfoques basados en aprendizaje automático.",
            gaming_title: "Juegos",
            gaming_desc: "Encontrar una manera de involucrar a los jugadores en este entorno competitivo y de ritmo rápido es un desafío importante.",
            workforce_title: "Construya una Fuerza Laboral de IA",
            workforce_desc: "Empodere a su equipo para integrar perfectamente la IA en sus flujos de trabajo diarios proporcionando capacitación personalizada.",
            transformation_title: "Transformación Empresarial",
            transformation_desc: "Nos especializamos en la transformación empresarial digital, empoderando a las empresas para aprovechar el poder de la tecnología.",
            web_title: "Diseño y Desarrollo de Apps Web",
            web_desc: "Las aplicaciones web son herramientas esenciales para las empresas modernas, ofreciendo experiencias dinámicas e interactivas.",
            mobile_title: "Desarrollo Móvil",
            mobile_desc: "Las aplicaciones móviles son una excelente manera de llegar a una audiencia que ya conoce su marca.",
            ecom_title: "Sitio Web de Comercio Electrónico",
            ecom_desc: "Los sitios web de comercio electrónico son una herramienta poderosa para involucrar a los clientes existentes y atraer nuevos."
        },
        blog: {
            tagline: "ARTÍCULOS Y NOTICIAS",
            title_1: "Artículos Recientes",
            title_2: "& Más Archivos.",
            description: "Aprenda sobre nuestra información y noticias.",
            read_more: "Leer Más"
        },
        standards_banner: {
            tagline: "El Estándar Asimovx",
            line_1: "LA EXCELENCIA",
            line_2: "ES SOLO EL",
            line_3: "COMIENZO."
        },
        blog_articles: {
            common: {
                back_to_home: "Volver al Inicio",
                view_github: "Ver en GitHub",
                view_repo: "Si desea ir directamente al código, visite mi repositorio de Github:"
            },
            human_pose: {
                title: "Comparación de Postura Humana y Puntuación de Acción usando Deep Learning",
                excerpt: "La estimación de postura es una de las aplicaciones más elegantes de las redes neuronales y es sorprendentemente precisa...",
                content: {
                    p1: "Pose Estimation is one of the more elegant applications of neural networks and is startlingly accurate and sometimes, seems like something right out of science fiction.",
                    p2: "For Instance, check out Google's Move Mirror, an in-browser application that estimates the user's pose in real time and then displays a movie still with the actor holding the same pose.",
                    p3: "When I glanced over it, however, I got an idea. What if the same methodology could be used to compare the same actions performed by two people? This technology could then be used to teach people over remote view! I got to work immediately and tried to reverse engineer the techniques used by Google.",
                    h_challenge: "The Challenge",
                    p4: "I found, to my disappointment, a few Tensorflow.js tutorials and theories on the same and nothing in python. This was understandable as it was an in-browser application and so, I decided to port the code to mighty Python. A few sessions of research showed me that they were using Posenet, a fast yet accurate model, for estimating pose.",
                    p5: "The Objective was simple: I wanted to go one step ahead and compare a whole action such as a punch or a kick with an image and tell me the extend to which it was correct.",
                    h_model: "The Model",
                    p6: "As I stated earlier, Google Mirror uses PoseNet, a deep learning model which specifies 17 points on the human body. I found a good python implementation of it here.",
                    h_similarity: "Defining Similarity",
                    p_similarity: "The next challenge was defining similarity. When we think about the problem, we see that there are many uncertainties to be addressed: humans can have different heights and body shapes, they might be in different parts in the picture: one person may have been standing close to the camera, another might have been faraway. All these problems have to be solved in order to output a correct result.",
                    h_solutions: "Key Solutions:",
                    li_bbox_bold: "New Bounding Box:",
                    li_bbox: "From the model output, we get the co-ordinates of the 17 key-points on a person's body. This information can be used to create a new bounding box which tightly covers the person in the picture.",
                    li_norm_bold: "Normalization:",
                    li_norm: "In order to account for the size inconsistencies, we perform L2 normalization of the points in order to transform it into a unit vector.",
                    h_cosine: "Cosine Similarity",
                    p_cosine_1: "Now that we have standardized the pose vectors, it is time to choose a similarity measure. I chose cosine similarity for this particular instance, mainly because we are working with vectors.",
                    p_cosine_2: "The 17 key-points are converted into a vector and plotted in high dimensional space. This vector plotting is compared to another vector plot from our benchmark image. The direction of vectors here are an indication of the similarity of the poses.",
                    h_drawbacks: "Drawbacks of Initial Approach",
                    li_drawback_1: "The algorithm does not take into account the time taken to perform the activity",
                    li_drawback_2: "There is no scope of attaining a 100 percent score since the average is taken against one picture",
                    h_dtw: "Dynamic Time Warping (DTW)",
                    p_dtw_1: "Even though it sounds like a sci-fi method of time travel, it really isn't. It is just a method used in comparing sequences and graphs of different lengths. It matches the different troughs and crests in a graph using one to many matching and such, resulting in synced up frames on its own.",
                    p_dtw_2: "This method seemed ideal for my use case, as I had similar graphs for each of the 17 key-points as the action was performed. I could then use DTW to compare these graphs and get 17 scores for each of the 17 key-points. An average of these 17 scores could be then taken as the total score.",
                    h_future: "Future Improvements",
                    li_auto_bold: "Automation:",
                    li_auto: "Recognition of action performed and orientation automatically",
                    li_score_bold: "Confidence Scores:",
                    li_score: "Using confidence scores returned by Posenet for more efficient scoring",
                    li_point_bold: "Point Specification:",
                    li_point: "According to the action to be performed, specific points can be used to increase accuracy",
                    li_feedback_bold: "Feedback System:",
                    li_feedback: "Providing feedback to users on which body part's movement needs correction",
                    h_refs: "References",
                    ref_1: "Move Mirror - TensorFlow Blog",
                    ref_2: "Dynamic Time Warping - Towards Data Science"
                }
            },
            realtime_image: {
                title: "Clasificación de Imágenes en Tiempo Real en Android usando Flutter, TFlite",
                excerpt: "Crear una aplicación para teléfonos inteligentes desde cero puede parecer una tarea desalentadora para la mayoría de los novatos...",
                content: {
                    p1: "If you’d like to jump straight to the code, please visit my Github-Repo:",
                    p2: "Making a smartphone app from scratch might seem a daunting task to most newbies and maybe even seasoned programmers. Enter Flutter.",
                    p3: "As One of the promising, albeit untested technologies unveiled by Google for android app development, Flutter aims to make smartphone app development easier than ever. It is even rumored that flutter will soon be the go-to name in mobile app development. Creating UIs is a breeze and the developer friendly coding style makes the icing on the cake.",
                    p4: "Working as an AI engineer, one of the most common problems I and my team mates encounter is the matter of deployment of our models. How do you prototype your deep learning models in a quick, yet elegant way? The answer is carried around in our very pockets. Smartphones. That’s right. That overpowered piece of hardware on which you are possibly reading this article at this very moment is any developer’s dream come true. Combine the ubiquitous nature of smartphones and the versatile technology that is machine learning and you’re looking at a vast potential of innovation right there.",
                    p5: "Now, I work at a place where people are often expected to roll up their sleeves and get the job done rather than wait for help. So, at one such instance, the matter of deployment loomed ahead of me and I had to choose between the daunting world of native android development and an exciting, yet uncharted new tech called Flutter. I chose the latter. At the time of writing this article, not every aspect of flutter is super stable, but it is certain that all of those problems shall disappear. In this article, I shall describe the important aspects of integrating deep learning models into an android app made with flutter. While I am no experienced android nor flutter developer, I was able to get a base version working in about a week. That’s how easy it is.",
                    p6: "I assume the reader has a base understanding of layouts in flutter and a basic understanding of the programming language used, which is Dart. If you are unfamiliar with what I just mentioned a few beginner posts will get you on your way. While the methods and code mentioned in this project is not exactly what I would call optimized, it can serve as a starting point or a base for your own projects. So let’s dive in to it.",
                    h_tflite: "We will be using the TFlite plugin",
                    p_tflite: "to integrate our neural network with the app. In order to use it, We first need to specify it as a dependency and also specify our model file’s presence in the assets folder. There are three steps to be followed for this:",
                    li_step1: "Place the model file(in .tflite format) in the assets folder along with the labels.txt file which contains the name of the classes used.",
                    li_step2: "Specify the file’s presence in the assets folder so that the compiler knows to use it and also specify the usage of the plugin.",
                    li_step3: "In android/app/build.gradle, add the following setting in android block.",
                    p_pubspec: "So let’s open up our pubspec.yaml file.",
                    h_pubspec: "pubspec.yaml",
                    p_dev_dep: "Here, you can see that I’ve specified the tflite: 1.0.1 as a dev_dependency. Now it is ready to be imported and used with our app. It’s that simple (Not quite). When flutter runs the packages get command, the files required to run this plugin will be downloaded without any further action from our side.",
                    p_home_dart: "Now let’s open up our home.dart file, which is the page which has the ignite button labeled “start classification”.",
                    h_import: "Importing the tflite plugin",
                    p_import_1: "As you can see, I’ve imported the tfliteplugin on line 3 in the home.dart page, similar to how I would import library files in other standard programming languages.",
                    p_import_2: "The Tflite plugin comes bundled with a function called loadModel() which is used to specify the name of the model to be loaded and the labels.txt file, which contains the name of the classes used.",
                    h_load: "Loading the model",
                    p_load: "For representation purposes, I’ve wrapped up this process in a function of my own, which is also called loadmodel().",
                    h_run_model: "runModelOnFrame() function",
                    p_run_1: "Now let’s move on to the camera.dart file, where the actual inference takes place. Here, We use the function runModelOnFrame(), which takes the frame from the camera stream and takes it as input to the model. This function requires a list of arguments such as the frame, its height, width, the number of results to be displayed and so on.",
                    p_run_2: "The output is received in the format specified by the plugin’s ReadMe file found on Flutter Pub.",
                    p_output_1: "This output is received by the recognitions variable.",
                    p_render: "The output received from the model is imposed on the ImageStream from the camera on the render.dart page. In order to do this, the results obtained from the model is passed into the render.dart page as a list named, well, results. These results are then displayed along with the confidence percentage on the screen.",
                    footer_repo: "All the code and project files are available in my GitHub:"
                }
            }
        },
        cta: {
            title_1: "¿Necesita un Plan",
            title_2: "de Proyecto Personalizado?",
            description: "Póngase en contacto con nuestro equipo para discutir sus requisitos únicos y descubrir cómo podemos acelerar su transformación de IA.",
            button: "Contáctenos"
        },
        footer: {
            title_1: "Soluciones de ML Personalizadas",
            title_2: "para Mejorar su",
            title_3: "mundo de Negocios",
            description: "Estamos emocionados de estar en este viaje con usted.",
            contact: "CONTACTO",
            sweden: "Suecia",
            network: "Red",
            privacy: "Privacidad",
            legal: "Legal",
            cookies: "Cookies"
        },
        careers: {
            tagline: "Únete a Nosotros",
            title: "Construye el Futuro.",
            description: "Buscamos personas apasionadas para unirse a nuestro equipo de innovadores, ingenieros y solucionadores de problemas.",
            details: "Detalles"
        },
        portfolio: {
            tagline: "Nuestro Trabajo",
            title: "Proyectos Seleccionados.",
            description: "Una muestra de nuestro trabajo pionero en inteligencia artificial, robótica y experiencias digitales inmersivas.",
            view_case_study: "Visitar"
        },
        privacy_policy: {
            title: "Política de",
            title_suffix: "Privacidad.",
            intro_1: "Creamos esta política de privacidad para demostrar nuestro compromiso con la privacidad y la seguridad y para definir claramente estos estándares para los visitantes de nuestro sitio web. Esta política de privacidad se aplica solo a la información recopilada por este sitio web.",
            intro_2: "A continuación se describen nuestras prácticas de recopilación y difusión de información para este sitio web:",
            list_1: "Utilizamos las direcciones IP de los consumidores para ayudar a diagnosticar problemas con nuestro servidor y para administrar nuestro sitio web.",
            list_2: "Utilizamos cookies para realizar un seguimiento del contenido del carrito de compras y/o la información de referencia.",
            list_3: "Nuestro sitio utiliza un formulario de pedido para que los consumidores soliciten información sobre nuestros productos y servicios. Recopilamos la información de contacto del consumidor (como su dirección de correo electrónico, número de teléfono o dirección postal). Utilizamos la información de contacto del formulario para enviar pedidos, información u ofertas.",
            list_4: "La información de contacto del consumidor también se puede utilizar para ponerse en contacto con el Consumidor cuando sea necesario para resolver un problema.",
            list_5: "Cuando completa un formulario de contacto o se comunica con nosotros de otra manera, podemos conservar su comunicación para procesar sus consultas, responder a sus solicitudes y mejorar nuestros servicios.",
            list_6: "En algunos casos, la información que proporciona a través de servicios de terceros, como números gratuitos para este sitio o servicios de chat en vivo, puede conservarse para procesar sus consultas, responder a sus solicitudes y mejorar nuestros servicios. La información recopilada por estos servicios de terceros también se rige por su política de privacidad.",
            list_7: "Podemos utilizar su dirección de correo electrónico, número de teléfono o dirección postal para comunicarnos con usted sobre nuestros servicios.",
            list_8: "Podemos utilizar cualquier información que proporcione o que recopilemos para proporcionar, mantener, proteger y mejorar nuestros servicios (incluidos los servicios publicitarios) y desarrollar nuevos servicios.",
            list_9: "Los consumidores pueden optar por no recibir futuros correos en cualquier momento; consulte la sección de elección/exclusión a continuación.",
            list_10: "Los consumidores pueden contactarnos en cualquier momento para solicitar que eliminemos la información de contacto que nos han proporcionado; consulte la sección de elección/exclusión a continuación.",
            disclaimer: "Tenga en cuenta: si se comunica con nosotros a través de este sitio, es posible que su comunicación no sea tratada como privilegiada o confidencial. Si se comunica con nosotros a través de este sitio en un asunto o condición por la cual ya lo representamos o tratamos, recuerde que el correo electrónico e Internet y los formularios de contacto no son seguros por naturaleza y debe evitar enviar mensajes de Internet confidenciales o sensibles.",
            sharing_title: "Intercambio de Información",
            sharing_text: "No vendemos, intercambiamos ni transferimos de otro modo su información de identificación personal de los consumidores a terceros. Esto no incluye a terceros de confianza que nos ayudan a operar nuestro sitio web, realizar nuestro negocio o servir a los consumidores, siempre que dichas partes acuerden mantener esta información confidencial. También podemos divulgar su información cuando creemos que la divulgación es apropiada para cumplir con la ley, hacer cumplir las políticas de nuestro sitio o proteger nuestros derechos, propiedad o seguridad, o los de otros. Sin embargo, la información del visitante no identificable personalmente se puede proporcionar a otras partes para marketing, publicidad u otros usos.",
            security_title: "Seguridad",
            security_text: "Este sitio cuenta con medidas de seguridad para proteger la pérdida, el mal uso y la alteración de la información bajo nuestro control. Almacenamos toda la información del usuario en bases de datos protegidas mediante una variedad de controles de acceso, además de estar ubicadas físicamente en una instalación segura. Se accede a estos datos solo para los fines especificados en esta política de privacidad.",
            opt_out_title: "Elección/Exclusión",
            opt_out_text: "Puede optar por no recibir futuros comunicaciones de nuestra parte. También puede solicitar ver cualquier información sobre usted que hayamos almacenado, y puede solicitar que eliminemos cualquiera de esta información. Consulte a continuación cómo contactarnos.",
            usage_title: "Descargos de Responsabilidad del Uso del Sitio Web",
            usage_text: "Nuestra empresa es responsable del contenido de este sitio web. Este sitio web está diseñado solo para fines de información general y no constituye asesoramiento legal o médico ni la formación de una relación abogado-cliente o médico-paciente.",
            contact_title: "Cómo Contactarnos",
            contact_text: "Si tiene alguna pregunta sobre esta política de privacidad, las prácticas de este sitio o sus tratos con este sitio web, visite nuestra página de contacto."
        },
        contact_page: {
            tagline: "Contáctenos",
            title: "¿Cómo podemos ayudarle?",
            blurb: "Siempre estamos aquí para ayudarle con cualquier pregunta o problema que pueda tener. No dude en comunicarse con nosotros.",
            locations: {
                sweden: "Suecia",
                spain: "España",
                latvia: "Letonia"
            },
            form: {
                title: "Escríbanos..",
                subtitle: "Le responderemos lo antes posible",
                name: "Nombre",
                email: "Correo electrónico",
                phone: "Teléfono",
                message: "Mensaje",
                btn_submit: "Enviar Mensaje",
                btn_sending: "Enviando...",
                success_title: "¡Mensaje Enviado!",
                success_msg: "Nos pondremos en contacto con usted en breve.",
                btn_another: "Enviar Otro Mensaje"
            },
            social_title: "Síguenos"
        },
        services_page: {
            tagline: "Lo que hacemos",
            title_1: "Soluciones",
            title_2: "Reales para",
            title_3: "Problemas de Negocio",
            title_4: "Con",
            title_5: "Consultoría de",
            title_6: "IA.",
            description: "Nuestro equipo de consultores expertos en IA trabajará estrechamente con usted para identificar las tecnologías, herramientas y estrategias adecuadas que le ayudarán a optimizar sus operaciones y maximizar la rentabilidad.",
            contact_btn: "Contáctenos",
            services_header: "Servicios",
            services_desc: "Podemos ayudar a organizaciones de todos los tamaños e industrias a diseñar, construir e implementar soluciones de aprendizaje automático de última generación.",
            core: {
                vision: {
                    title: "Visión por Computadora",
                    desc: "Nuestra experiencia principal radica en crear soluciones de software a medida que aprovechan el poder de las técnicas de visión por computadora para obtener información valiosa de imágenes, videos y transmisiones en vivo.",
                    detail: "A través de una fusión de algoritmos de aprendizaje profundo de vanguardia y enfoques tradicionales de visión por computadora, capacitamos a las empresas para detectar, segmentar y rastrear objetos sin esfuerzo."
                },
                nlp: {
                    title: "Procesamiento de Lenguaje Natural",
                    desc: "Aproveche el potencial del aprendizaje profundo para utilizar el poder de las tuberías de procesamiento de lenguaje natural y obtener un significado valioso de textos no estructurados."
                },
                genai: {
                    title: "IA Generativa",
                    desc: "Desbloquee todo el potencial de su negocio adoptando soluciones de IA generativa de vanguardia personalizadas para sus requisitos únicos.",
                    detail: "Ya sea adaptando el procesamiento de lenguaje natural a sus necesidades, aprovechando las capacidades de la visión por computadora o explorando los reinos del aprendizaje por refuerzo."
                }
            },
            general: {
                tech: { title: "Tecnología y Software", desc: "Nuestras soluciones innovadoras han ayudado a las empresas de tecnología a reinventar la forma en que operan." },
                sports: { title: "Tecnología Deportiva", desc: "Llevamos tecnologías de última generación a los deportes con seguimiento, reconocimiento de actividades, estimación de poses y más." },
                auto: { title: "Automotriz", desc: "Con soluciones que van desde el seguimiento de objetos con múltiples cámaras hasta la identificación de comportamientos y la optimización de procesos." },
                manu: { title: "Manufactura/Agro", desc: "Hemos implementado soluciones que van desde herramientas de visión por computadora para fabricantes de alimentos hasta análisis de sensores en tiempo real." },
                marketing: { title: "Marketing", desc: "Ya sea en el lado de la demanda o de la oferta, ayudamos a las empresas a aprovechar al máximo los datos a nivel de usuario." },
                health: { title: "Salud y Farmacia", desc: "Construimos soluciones para hacer que los productos farmacéuticos sean más seguros y efectivos a través de enfoques basados en aprendizaje automático." },
                gaming: { title: "Juegos", desc: "Encontrar una manera de involucrar a los jugadores en este entorno competitivo y de ritmo rápido es un desafío importante." },
                workforce: { title: "Fuerza Laboral de IA", desc: "Empodere a su equipo para integrar perfectamente la IA en sus flujos de trabajo diarios proporcionando capacitación personalizada." },
                transformation: { title: "Transformación Empresarial", desc: "Nos especializamos en la transformación empresarial digital, empoderando a las empresas para aprovechar el poder de la tecnología." },
                web: { title: "Diseño y Desarrollo Web", desc: "Las aplicaciones web son herramientas esenciales para las empresas modernas, ofreciendo experiencias dinámicas e interactivas." },
                mobile: { title: "Desarrollo Móvil", desc: "Las aplicaciones móviles son una excelente manera de llegar a una audiencia que ya conoce su marca." },
                ecom: { title: "Comercio Electrónico", desc: "Los sitios web de comercio electrónico son una herramienta poderosa para involucrar a los clientes existentes y atraer nuevos." }
            }
        },
        portfolio_page: {
            tagline: "Nuestro Trabajo",
            title: "Proyectos Seleccionados.",
            description: "Una muestra de nuestro trabajo pionero en inteligencia artificial, robótica y experiencias digitales inmersivas.",
            view_case_study: "Visitar Sítio",
            projects: {
                p4dots: { title: "4dots", category: "Personalización y Impresión", desc: "Un servicio integral de personalización e impresión que ofrece membretes, folletos y lienzos personalizados." },
                kontrast: { title: "Kontrast", category: "Restaurante y Hospitalidad", desc: "Una experiencia gastronómica premium del norte de la India en Malmö, Suecia." },
                secondskin_b2b: { title: "SecondskinStyle B2B", category: "E-Commerce y Ropa Deportiva", desc: "Ropa deportiva impulsada por el rendimiento diseñada para atletas, enfatizando el diseño técnico." },
                secondskin: { title: "SecondskinStyle", category: "Ropa Deportiva de Consumo", desc: "Marca de ropa deportiva premium centrada en la comodidad, la durabilidad y el estilo." },
                pipetechs: { title: "PipeTechs", category: "Tecnología de Tuberías", desc: "Sistemas avanzados de detección de fugas en tuberías utilizando tecnología acústica." },
                growers: { title: "Growers Direct", category: "Agricultura y Venta Minorista", desc: "Vivero familiar que ofrece una amplia gama de plantas, cerámica y consejos de jardinería." },
                timax: { title: "Timax-NL", category: "Consultoría de Construcción", desc: "Consultora holandesa especializada en normativas de construcción y rendimiento energético." },
                sicci: { title: "Sicci", category: "Cámara de Comercio", desc: "Cámara de Comercio e Industria India de Singapur, apoyando el crecimiento empresarial." },
                icai: { title: "I C A I", category: "Organización Profesional", desc: "Capítulo de Singapur del Instituto de Contadores Públicos de la India." },
                chets: { title: "Chet's Shoes", category: "E-Commerce y Venta Minorista", desc: "Empresa familiar de calzado que ofrece botas de trabajo premium y zapatos de seguridad." },
                finance: { title: "Finanzas Personales Suecia", category: "Financial Education", desc: "Empoderando a expatriados y NRI en Suecia con conocimientos sobre inversiones e impuestos." }
            }
        },
        careers_page: {
            tagline: "Únete a Nosotros",
            title: "Construye el Futuro.",
            description: "Buscamos personas apasionadas para unirse a nuestro equipo de innovadores, ingenieros y solucionadores de problemas.",
            search_placeholder: "Buscar roles...",
            filters: {
                all: "Todos",
                full_time: "Tiempo completo",
                internship: "Pasantía"
            },
            details: "Detalles",
            no_positions: "No se encontraron posiciones que coincidan con sus criterios.",
            clear_filters: "Borrar filtros"
        },
        jobs: jobTranslations.ES,
        career_details: {
            back_to_careers: "Volver a Carreras",
            apply_now: "Aplicar Ahora",
            share_role: "Compartir este puesto",
            department: "Departamento",
            dept_name: "Ingeniería e IA",
            contact_contact: "Contacto",
            about_role: "Sobre el Rol",
            what_you_do: "Lo que harás",
            what_looking_for: "Lo que buscamos",
            preferred_qual: "Cualificaciones Preferidas",
            why_join: "¿Por qué unirse a nosotros?"
        },
        housing_association: {
            hero: {
                tagline: "Ecosistema AsimovX",
                title_1: "Trabajo de la junta,",
                title_2: "perfeccionado.",
                description_1: "Una capa digital premium para su edificio.",
                description_2: "Hermoso. Automatizado. Sin esfuerzo."
            },
            sticky_scroll: {
                unified_command: {
                    title: "Comando Unificado.",
                    desc: "Lleve a su junta, residentes y proveedores a una realidad compartida. No más correos perdidos o hilos de WhatsApp."
                },
                visual_clarity: {
                    title: "Claridad Visual.",
                    desc: "Vea exactamente lo que sucede en su edificio. Desde luces rotas hasta uso del presupuesto, visualícelo todo."
                },
                future_proof: {
                    title: "A Prueba de Futuro.",
                    desc: "Construido sobre infraestructura moderna que crece con usted. Seguro, rápido y siempre en línea."
                }
            },
            core_objective: {
                title: "La Plataforma de Asociación de Vivienda",
                description: "Esta plataforma está construida para facilitar la vida de las asociaciones de vivienda suecas (BRF) reduciendo la carga de trabajo diaria de los miembros de la junta. Muchos miembros son voluntarios y hoy pasan far too much time on emails, follow-ups, spreadsheets, and manual coordination.",
                quote: "El objetivo es permitir que los miembros de la junta pasen menos tiempo en administración y más tiempo en lo que realmente importa, improving the living experience for residents.",
                features: {
                    chaos: "La plataforma reemplaza el caos con un espacio de trabajo digital simple que:",
                    list: [
                        "Reduce el trabajo manual",
                        "Elimina tareas repetitivas",
                        "Mantiene todo en un solo lugar",
                        "Evita que la información se pierda cuando la junta cambia"
                    ]
                }
            },
            living_index: {
                tagline: "La Suite",
                title: "Todo en su lugar correcto.",
                description: "Un sistema operativo completo para su asociación de vivienda. Diseñado para claridad, velocidad y control.",
                features: {
                    communication: { title: "Comunicación", desc: "Llegue a todos al instante." },
                    issues: { title: "Problemas", desc: "Arregle cosas más rápido." },
                    archives: { title: "Archivos", desc: "Almacenamiento seguro." },
                    booking: { title: "Reservas", desc: "Gestión de recursos." },
                    board: { title: "Junta", desc: "Comando operativo." },
                    residents: { title: "Residentes", desc: "Portal de autoservicio." }
                }
            },
            cta: {
                title_1: "¿Listo para",
                title_2: "Elevar?",
                book_demo: "Reservar Demo",
                view_pricing: "Ver Precios"
            },
            marquee: {
                system_online: "Sistema en Línea",
                secure: "Seguro",
                connected: "Conectado",
                live: "En Vivo"
            },
            dashboard: {
                network_status: "Estado de Red",
                optimal: "Óptimo",
                latency: "Latencia",
                users_live: "3 Usuarios",
                new_alert: "Nueva Alerta",
                alert_msg: "Advertencia de presión de agua detectada en Edificio A.",
                monthly_revenue: "Ingresos Mensuales",
                residents: "Residentes",
                open_tasks: "Tareas Pendientes"
            },
            booking: {
                hero: {
                    title_1: "Reserva",
                    title_2: "Inteligente.",
                    description: "Justo, transparente y sin conflictos. Desde lavanderías hasta apartamentos de invitados.",
                    utilization: "Utilización",
                    conflicts: "Conflictos"
                },
                calendar: {
                    laundry_room: "Lavandería A",
                    month: "Octubre"
                },
                floating: {
                    resident_title: "Residente",
                    laundry: "Lavandería A",
                    confirmed: "Confirmado",
                    reminders: "Recordatorios"
                },
                lifestyle: {
                    shared_spaces: {
                        title: "Espacios Comunes.",
                        desc: "Maximiza la utilización de recursos comunes sin dolores de cabeza."
                    },
                    guest_apartments: {
                        title: "Apartamentos de Invitados.",
                        desc: "Flujos de reserva fáciles para huéspedes nocturnos."
                    }
                }
            },
            communication: {
                hero: {
                    title_1: "Voz",
                    title_2: "Unificada.",
                    description: "Habla una vez, llega a todos. Un canal unificado para anuncios, actualizaciones y alertas urgentes.",
                    email_digested: "Resumen por Email",
                    mobile_push: "Notificación Móvil"
                },
                phone: {
                    messages: "Mensajes",
                    urgent: "Urgente",
                    just_now: "Ahora mismo",
                    elevator_title: "Mantenimiento Ascensor",
                    elevator_desc: "El ascensor B estará fuera de servicio...",
                    read_by: "Leído por 45 Inquilinos",
                    push_sent: "Notificación Enviada",
                    delivery_rate: "98% Tasa de Entrega"
                },
                features: {
                    title: "Flujo Junta a Residente",
                    description: "Un canal dedicado para comunicación oficial unidireccional de la junta a los residentes.",
                    items: {
                        board_announcements: { title: "Anuncios de la Junta", desc: "La junta puede publicar noticias oficiales y actualizaciones en un lugar central.", benefit: "Los residentes saben dónde encontrar información fiable" },
                        targeted_messages: { title: "Mensajes Dirigidos", desc: "Envía mensajes a todos los residentes o edificios/secciones seleccionados.", benefit: "Evita mensajes innecesarios" },
                        email_notifications: { title: "Notificaciones por Email", desc: "Emails automáticos para nuevos anuncios.", benefit: "Asegura alta visibilidad" },
                        message_read: { title: "Estado de Lectura", desc: "Rastrea si los residentes han leído avisos importantes.", benefit: "Confirma que la información ha sido recibida" },
                        push_notifications: { title: "Notificaciones Push", desc: "Alertas para actualizaciones urgentes o sensibles al tiempo.", benefit: "Comunicación más rápida cuando es necesaria" },
                        vendor_comm: { title: "Comunicación con Proveedores", desc: "Comunícate con proveedores externos directamente a través del sistema.", benefit: "Mantiene toda la comunicación documentada en un solo lugar" }
                    }
                },
                lifestyle: {
                    title: "Comunidad, Conectada.",
                    desc: "Cuando todos saben lo que pasa, los vecinos se convierten en amigos.",
                    stat_title: "100%",
                    stat_subtitle: "Transparencia de la Junta",
                    stat_desc: "Basado en encuestas a usuarios 2024."
                }
            },
            issues: {
                hero: {
                    title_1: "Arréglalo",
                    title_2: "Rápido.",
                    description: "De 'Cerradura Rota' a 'Arreglado' en tiempo récord. Reportes visuales que realmente funcionan."
                },
                map: {
                    broken_lock: "Cerradura Rota",
                    priority: "Alta Prioridad",
                    resolved: "¡Resuelto!",
                    resolved_desc: "El conserje marcó 'Luz de Entrada' como arreglada."
                },
                features: {
                    title: "Reportes Estructurados",
                    description: "Un sistema dedicado para gestionar problemas de instalaciones y solicitudes de mantenimiento.",
                    items: {
                        submission: { title: "Envío de Problemas", desc: "Los residentes pueden reportar problemas a través del portal.", benefit: "Reporte fácil y rápido" },
                        photo: { title: "Subida de Fotos", desc: "Adjunta fotos para explicar el problema.", benefit: "Reduce malentendidos" },
                        category: { title: "Categoría de Problema", desc: "Selecciona tipo (ej. Fontanería, Electricidad, Áreas Comunes).", benefit: "Manejo más rápido" },
                        priority: { title: "Nivel de Prioridad", desc: "Marca urgencia (Alta, Media, Baja).", benefit: "Ayuda a la junta a enfocarse en problemas críticos" },
                        tracking: { title: "Rastreo de Estado", desc: "Progreso claro: Nuevo → En Progreso → Completado.", benefit: "Los residentes saben lo que está pasando" },
                        comments: { title: "Comentarios y Actualizaciones", desc: "Hilo de mensajes compartido para actualizaciones y respuestas.", benefit: "Comunicación transparente" }
                    }
                },
                lifestyle: {
                    title: "Empodera a tus cuidadores.",
                    desc: "Dales a tus proveedores y conserjes las herramientas digitales que necesitan para hacer su mejor trabajo."
                }
            },
            documents: {
                hero: {
                    title_1: "Memoria",
                    title_2: "Digital.",
                    description: "El cerebro institucional de tu asociación. Seguro, buscable y a salvo para siempre.",
                    search_placeholder: "Buscar documentos...",
                    encrypted: "Almacenamiento Encriptado",
                    archived_data: "Datos Archivados"
                },
                lifestyle: {
                    title: "Futuro Sin Papel.",
                    desc: "Deja de ahogarte en archivadores. Accede a cualquier contrato, protocolo o factura en segundos."
                }
            },
            board: {
                hero: {
                    title_1: "Control",
                    title_2: "Junta.",
                    description: "Reuniones, decisiones y tareas en un espacio de trabajo fluido. Deja de usar WhatsApp para asuntos oficiales.",
                    task_manager: "Gestor de Tareas"
                },
                board_visual: {
                    todo: "Pendientes",
                    protocol_signed: "Protocolo Firmado",
                    admin_time: "Tiempo Admin",
                    open_tasks: "Tareas Abiertas",
                    completed: "Completadas"
                },
                tasks: {
                    budget: { t: "Aprobación Presupuesto 2026", s: "En Progreso" },
                    playground: { t: "Renovación Parque Infantil", s: "Pendiente" },
                    fire_inspection: { t: "Inspección de Incendios", s: "Completada" }
                },
                lifestyle: {
                    title: "Enfócate en decisiones.",
                    desc: "Deja que el software maneje los recordatorios, firmas y archivos."
                }
            },
            residents: {
                hero: {
                    title_1: "Tu",
                    title_2: "Hogar.",
                    description: "Todo lo relacionado con tu apartamento en un solo lugar. Cuotas, llaves, coches y comunidad.",
                    tags: {
                        payment_history: "Historial de Pagos",
                        car_registry: "Registro de Coches",
                        documents: "Documentos",
                        polls: "Encuestas"
                    }
                },
                dashboard: {
                    monthly_fee: "Cuota Mensual",
                    due_in: "Vence en 5 días",
                    parking: "Estacionamiento",
                    slot: "Plaza A-42",
                    active: "Activo",
                    poll: "Encuesta Comunitaria",
                    poll_question: "¿Deberíamos instalar paneles solares en el techo sur?",
                    yes: "Sí",
                    no: "No",
                    auto_pay: "Pago Automático",
                    enabled: "Habilitado",
                    guests: "Invitados"
                },
                lifestyle: {
                    title: "Tú tienes el control.",
                    desc: "Accede a los detalles de tu vivienda en cualquier momento y lugar. No más esperas a que abra la oficina."
                }
            },
        }
    },
    SV: {
        navbar: {
            home: "Hem",
            about: "Om Oss",
            services: "Våra Tjänster",
            portfolio: "Portfölj",
            careers: "Karriär",
            blog: "Blogg",
            contact: "Kontakta Oss",
            products: "Produkter"
        },
        hero: {
            tagline: "Teknisk Konsulting På Nytt Sätt",
            title_1: "Superladda",
            title_2: "Ditt Företag",
            title_3: "med AI.",
            description: "Stärk din affärsvärld med banbrytande tekniska lösningar som utnyttjar toppmodern artificiell intelligens (AI) för att flytta din organisation mot sina mål snabbare än någonsin tidigare.",
            cta_primary: "Börja Din Resa",
            cta_secondary: "Se arbetet"
        },
        features: {
            tagline: "Vad vi gör",
            title_1: "Löser Verkliga",
            title_2: "Affärsproblem Med AI.",
            description: "Vårt team av erfarna AI-konsulter kommer att arbeta nära dig för att identifiera rätt artificiell intelligens-teknologier, verktyg och strategier som hjälper dig att effektivisera din verksamhet och maximera lönsamheten.",
            key_expertise: "Nyckelkompetens",
            vision_title: "Datorseende",
            vision_desc: "Vår kärnkompetens ligger i att skapa skräddarsydda mjukvarulösningar som utnyttjar kraften i datorseende-tekniker för att få värdefulla insikter från bilder, videor och liveströmmar.",
            genai_title: "Generativ AI",
            genai_desc: "Utveckla banbrytande, högpresterande lösningar anpassade efter dina unika behov. Från att skräddarsy NLP till att utnyttja funktionerna inom datorseende.",
            nlp_title: "Bearbetning av Naturligt Språk",
            nlp_desc: "Utnyttja potentialen i djupinlärning för att använda kraften i pipelines för bearbetning av naturligt språk och få värdefull mening från ostrukturerad text.",
            consulting_title: "AI-konsulting",
            consulting_desc: "Identifiera rätt teknologier, verktyg och strategier för att effektivisera verksamheten, förbättra engagemanget och maximera lönsamheten."
        },
        process: {
            tagline: "Hur vi gör det",
            title: "Vår Process",
            step_1_title: "AI-strategiutveckling",
            step_1_desc: "Definiera tydliga mål och färdplan för AI-integrering",
            step_2_title: "Dataanalys",
            step_2_desc: "Omfattande utvärdering av din datainfrastruktur",
            step_3_title: "Identifiering av AI-användningsfall",
            step_3_desc: "Upptäck möjligheter med stor genomslagskraft för AI-implementering",
            step_4_title: "Gapanalys",
            step_4_desc: "Identifiera tekniska och organisatoriska krav",
            step_5_title: "Implementering",
            step_5_desc: "Sömlös integration i dina befintliga system",
            step_6_title: "Utbildning och Utveckling",
            step_6_desc: "Stärk ditt team med AI-expertis och bästa praxis"
        },
        industries: {
            tagline: "Funktioner",
            title_1: "Vi kan hjälpa organisationer",
            title_2: "av alla storlekar och branscher",
            description: "Designa, bygg och implementera toppmoderna maskininlärningslösningar. Läs mer om några av de funktioner och segment vi kan hjälpa dig med:",
            tech_title: "Teknik och Programvara",
            tech_desc: "Våra innovativa lösningar har hjälpt teknikföretag att ombilda hur de arbetar.",
            sports_title: "Sportteknik",
            sports_desc: "Vi tar med toppmodern teknik till sport med spårning, aktivitetsigenkänning, pose-estimering och mer.",
            auto_title: "Fordon",
            auto_desc: "Med lösningar som sträcker sig från objektspårning med flera kameror till beteendeidentifiering och processoptimering.",
            manu_title: "Tillverkning/Agro",
            manu_desc: "Vi har implementerat lösningar som sträcker sig från datorseendeverktyg för livsmedelsföretag till analys i realtid.",
            marketing_title: "Marknadsföring",
            marketing_desc: "Oavsett om det är på efterfråge- eller utbudssidan hjälper vi företag att få ut det mesta av data på användarnivå.",
            health_title: "Hälso- och Sjukvård",
            health_desc: "Vi bygger lösningar för att göra läkemedel säkrare och effektivare genom maskininlärningsbaserade metoder.",
            gaming_title: "Spel",
            gaming_desc: "Att hitta ett sätt att engagera spelare i denna snabba, konkurrenskraftiga miljö är en stor utmaning.",
            workforce_title: "Bygg en Framtidsredo AI-arbetsstyrka",
            workforce_desc: "Stärk ditt team att sömlöst integrera AI i sina dagliga arbetsflöden genom att tillhandahålla anpassad utbildning.",
            transformation_title: "Affärstransformation",
            transformation_desc: "Vi specialiserar oss på digital affärstransformation och ger företag möjlighet att utnyttja kraften i teknik.",
            web_title: "Webbappdesign och Utveckling",
            web_desc: "Webbapplikationer är viktiga verktyg för moderna företag och erbjuder dynamiska och interaktiva upplevelser.",
            mobile_title: "Mobilutveckling",
            mobile_desc: "Mobilapplikationer är ett utmärkt sätt att nå en publik som redan är medveten om ditt varumärke.",
            ecom_title: "E-handelswebbplats",
            ecom_desc: "E-handelswebbplatser är ett kraftfullt verktyg för att engagera befintliga kunder och locka nya."
        },
        blog: {
            tagline: "ARTIKLAR & NYHETER",
            title_1: "Uppdatera Artiklar",
            title_2: "& Fler Arkiv.",
            description: "Läs om vår information och nyheter.",
            read_more: "Läs Mer"
        },
        standards_banner: {
            tagline: "Asimovx-Standarden",
            line_1: "EXCELLENS",
            line_2: "ÄR BARA",
            line_3: "BÖRJAN."
        },
        blog_articles: {
            common: {
                back_to_home: "Tillbaka till Hem",
                view_github: "Visa på GitHub",
                view_repo: "Om du vill hoppa direkt till koden, besök min Github-Repo:"
            },
            human_pose: {
                title: "Jämförelse av Mänsklig Pose och Handlingspoängsättning med Deep Learning",
                excerpt: "Pose Estimation är en av de mer eleganta tillämpningarna av neurala nätverk och är förvånansvärt exakt...",
                content: {
                    p1: "Pose Estimation is one of the more elegant applications of neural networks and is startlingly accurate and sometimes, seems like something right out of science fiction.",
                    p2: "For Instance, check out Google's Move Mirror, an in-browser application that estimates the user's pose in real time and then displays a movie still with the actor holding the same pose.",
                    p3: "When I glanced over it, however, I got an idea. What if the same methodology could be used to compare the same actions performed by two people? This technology could then be used to teach people over remote view! I got to work immediately and tried to reverse engineer the techniques used by Google.",
                    h_challenge: "The Challenge",
                    p4: "I found, to my disappointment, a few Tensorflow.js tutorials and theories on the same and nothing in python. This was understandable as it was an in-browser application and so, I decided to port the code to mighty Python. A few sessions of research showed me that they were using Posenet, a fast yet accurate model, for estimating pose.",
                    p5: "The Objective was simple: I wanted to go one step ahead and compare a whole action such as a punch or a kick with an image and tell me the extend to which it was correct.",
                    h_model: "The Model",
                    p6: "As I stated earlier, Google Mirror uses PoseNet, a deep learning model which specifies 17 points on the human body. I found a good python implementation of it here.",
                    h_similarity: "Defining Similarity",
                    p_similarity: "The next challenge was defining similarity. When we think about the problem, we see that there are many uncertainties to be addressed: humans can have different heights and body shapes, they might be in different parts in the picture: one person may have been standing close to the camera, another might have been faraway. All these problems have to be solved in order to output a correct result.",
                    h_solutions: "Key Solutions:",
                    li_bbox_bold: "New Bounding Box:",
                    li_bbox: "From the model output, we get the co-ordinates of the 17 key-points on a person's body. This information can be used to create a new bounding box which tightly covers the person in the picture.",
                    li_norm_bold: "Normalization:",
                    li_norm: "In order to account for the size inconsistencies, we perform L2 normalization of the points in order to transform it into a unit vector.",
                    h_cosine: "Cosine Similarity",
                    p_cosine_1: "Now that we have standardized the pose vectors, it is time to choose a similarity measure. I chose cosine similarity for this particular instance, mainly because we are working with vectors.",
                    p_cosine_2: "The 17 key-points are converted into a vector and plotted in high dimensional space. This vector plotting is compared to another vector plot from our benchmark image. The direction of vectors here are an indication of the similarity of the poses.",
                    h_drawbacks: "Drawbacks of Initial Approach",
                    li_drawback_1: "The algorithm does not take into account the time taken to perform the activity",
                    li_drawback_2: "There is no scope of attaining a 100 percent score since the average is taken against one picture",
                    h_dtw: "Dynamic Time Warping (DTW)",
                    p_dtw_1: "Even though it sounds like a sci-fi method of time travel, it really isn't. It is just a method used in comparing sequences and graphs of different lengths. It matches the different troughs and crests in a graph using one to many matching and such, resulting in synced up frames on its own.",
                    p_dtw_2: "This method seemed ideal for my use case, as I had similar graphs for each of the 17 key-points as the action was performed. I could then use DTW to compare these graphs and get 17 scores for each of the 17 key-points. An average of these 17 scores could be then taken as the total score.",
                    h_future: "Future Improvements",
                    li_auto_bold: "Automation:",
                    li_auto: "Recognition of action performed and orientation automatically",
                    li_score_bold: "Confidence Scores:",
                    li_score: "Using confidence scores returned by Posenet for more efficient scoring",
                    li_point_bold: "Point Specification:",
                    li_point: "According to the action to be performed, specific points can be used to increase accuracy",
                    li_feedback_bold: "Feedback System:",
                    li_feedback: "Providing feedback to users on which body part's movement needs correction",
                    h_refs: "References",
                    ref_1: "Move Mirror - TensorFlow Blog",
                    ref_2: "Dynamic Time Warping - Towards Data Science"
                }
            },
            realtime_image: {
                title: "Realtids Bildklassificering på Android med Flutter, TFlite",
                excerpt: "Att göra en smartphone-app från grunden kan verka som en skrämmande uppgift för de flesta nybörjare...",
                content: {
                    p1: "If you’d like to jump straight to the code, please visit my Github-Repo:",
                    p2: "Making a smartphone app from scratch might seem a daunting task to most newbies and maybe even seasoned programmers. Enter Flutter.",
                    p3: "As One of the promising, albeit untested technologies unveiled by Google for android app development, Flutter aims to make smartphone app development easier than ever. It is even rumored that flutter will soon be the go-to name in mobile app development. Creating UIs is a breeze and the developer friendly coding style makes the icing on the cake.",
                    p4: "Working as an AI engineer, one of the most common problems I and my team mates encounter is the matter of deployment of our models. How do you prototype your deep learning models in a quick, yet elegant way? The answer is carried around in our very pockets. Smartphones. That’s right. That overpowered piece of hardware on which you are possibly reading this article at this very moment is any developer’s dream come true. Combine the ubiquitous nature of smartphones and the versatile technology that is machine learning and you’re looking at a vast potential of innovation right there.",
                    p5: "Now, I work at a place where people are often expected to roll up their sleeves and get the job done rather than wait for help. So, at one such instance, the matter of deployment loomed ahead of me and I had to choose between the daunting world of native android development and an exciting, yet uncharted new tech called Flutter. I chose the latter. At the time of writing this article, not every aspect of flutter is super stable, but it is certain that all of those problems shall disappear. In this article, I shall describe the important aspects of integrating deep learning models into an android app made with flutter. While I am no experienced android nor flutter developer, I was able to get a base version working in about a week. That’s how easy it is.",
                    p6: "I assume the reader has a base understanding of layouts in flutter and a basic understanding of the programming language used, which is Dart. If you are unfamiliar with what I just mentioned a few beginner posts will get you on your way. While the methods and code mentioned in this project is not exactly what I would call optimized, it can serve as a starting point or a base for your own projects. So let’s dive in to it.",
                    h_tflite: "We will be using the TFlite plugin",
                    p_tflite: "to integrate our neural network with the app. In order to use it, We first need to specify it as a dependency and also specify our model file’s presence in the assets folder. There are three steps to be followed for this:",
                    li_step1: "Place the model file(in .tflite format) in the assets folder along with the labels.txt file which contains the name of the classes used.",
                    li_step2: "Specify the file’s presence in the assets folder so that the compiler knows to use it and also specify the usage of the plugin.",
                    li_step3: "In android/app/build.gradle, add the following setting in android block.",
                    p_pubspec: "So let’s open up our pubspec.yaml file.",
                    h_pubspec: "pubspec.yaml",
                    p_dev_dep: "Here, you can see that I’ve specified the tflite: 1.0.1 as a dev_dependency. Now it is ready to be imported and used with our app. It’s that simple (Not quite). When flutter runs the packages get command, the files required to run this plugin will be downloaded without any further action from our side.",
                    p_home_dart: "Now let’s open up our home.dart file, which is the page which has the ignite button labeled “start classification”.",
                    h_import: "Importing the tflite plugin",
                    p_import_1: "As you can see, I’ve imported the tfliteplugin on line 3 in the home.dart page, similar to how I would import library files in other standard programming languages.",
                    p_import_2: "The Tflite plugin comes bundled with a function called loadModel() which is used to specify the name of the model to be loaded and the labels.txt file, which contains the name of the classes used.",
                    h_load: "Loading the model",
                    p_load: "For representation purposes, I’ve wrapped up this process in a function of my own, which is also called loadmodel().",
                    h_run_model: "runModelOnFrame() function",
                    p_run_1: "Now let’s move on to the camera.dart file, where the actual inference takes place. Here, We use the function runModelOnFrame(), which takes the frame from the camera stream and takes it as input to the model. This function requires a list of arguments such as the frame, its height, width, the number of results to be displayed and so on.",
                    p_run_2: "The output is received in the format specified by the plugin’s ReadMe file found on Flutter Pub.",
                    p_output_1: "This output is received by the recognitions variable.",
                    p_render: "The output received from the model is imposed on the ImageStream from the camera on the render.dart page. In order to do this, the results obtained from the model is passed into the render.dart page as a list named, well, results. These results are then displayed along with the confidence percentage on the screen.",
                    footer_repo: "All the code and project files are available in my GitHub:"
                }
            }
        },
        cta: {
            title_1: "Behöver du en Anpassad",
            title_2: "Projektplan?",
            description: "Kontakta vårt team för att diskutera dina unika krav och upptäck hur vi kan påskynda din AI-transformation.",
            button: "Kontakta Oss"
        },
        footer: {
            title_1: "Skräddarsydda ML-baserade",
            title_2: "lösningar för att Förbättra",
            title_3: "din Affärsvärld",
            description: "Vi är glada över att vara med på denna resa med dig.",
            contact: "KONTAKT",
            sweden: "Sverige",
            network: "Nätverk",
            privacy: "Integritet",
            legal: "Lagligt",
            cookies: "Cookies"
        },
        careers: {
            tagline: "Jobba Hos Oss",
            title: "Bygg Framtiden.",
            description: "Vi söker passionerade individer för att gå med i vårt team av innovatörer, ingenjörer och problemlösare.",
            details: "Detaljer"
        },
        portfolio: {
            tagline: "Vårt Arbete",
            title: "Utvalda Projekt.",
            description: "En utställning av vårt banbrytande arbete inom artificiell intelligens, robotik och uppslukande digitala upplevelser.",
            view_case_study: "Besök"
        },
        privacy_policy: {
            title: "Sekretess",
            title_suffix: "Policy.",
            intro_1: "Vi skapade denna sekretesspolicy för att visa vårt engagemang för integritet och säkerhet och för att tydligt definiera dessa standarder för våra webbplatsbesökare. Denna integritetspolicy gäller endast information som samlas in av denna webbplats.",
            intro_2: "Följande visar vår praxis för informationsinsamling och spridning av denna webbplats:",
            list_1: "Vi använder IP-adressen till konsumenter för att hjälpa till att diagnostisera problem med vår server och för att administrera vår webbplats.",
            list_2: "Vi använder cookies för att hålla reda på varukorgens innehåll och/eller hänvisningsinformation.",
            list_3: "Vår webbplats använder ett beställningsformulär för konsumenter för att begära information om våra produkter och tjänster. Vi samlar in konsumentens kontaktinformation (som deras e-postadress, telefonnummer eller postadress). Vi använder kontaktuppgifter från formuläret för att skicka produkter, information eller erbjudanden.",
            list_4: "Konsumentens kontaktuppgifter kan också användas för att komma i kontakt med Konsumenten om det behövs för att lösa ett problem.",
            list_5: "När du fyller i ett kontaktformulär eller på annat sätt kontaktar oss kan vi behålla din kommunikation för att kunna behandla dina förfrågningar, svara på dina förfrågningar och förbättra våra tjänster.",
            list_6: "I vissa fall kan information som du tillhandahåller via tredjepartstjänster som avgiftsfria nummer för den här webbplatsen eller livechatttjänster behållas för att behandla dina förfrågningar, svara på dina förfrågningar och förbättra våra tjänster. Information som samlas in av dessa tredjepartstjänster styrs också av deras integritetspolicy.",
            list_7: "Vi kan använda din e-postadress, ditt telefonnummer eller din postadress för att kommunicera med dig om våra tjänster.",
            list_8: "Vi kan använda all information som du tillhandahåller eller som vi samlar in för att tillhandahålla, underhålla, skydda och förbättra våra tjänster (inklusive reklamtjänster) och utveckla nya tjänster.",
            list_9: "Konsumenter kan när som helst välja bort att ta emot framtida utskick; se avsnittet om val/välj bort nedan.",
            list_10: "Konsumenter kan när som helst kontakta oss för att begära att vi raderar kontaktinformation som lämnats till oss; se avsnittet om val/opt-out nedan.",
            disclaimer: "Please note: om du kommunicerar med oss via denna webbplats är det möjligt att din kommunikation inte kommer att behandlas som privilegierad eller konfidentiell. Om du kommunicerar med oss via den här webbplatsen i ett ärende eller ett tillstånd som vi redan representerar eller behandlar dig för, kom ihåg att e-post och kontaktformulär på Internet inte är säkra till sin natur och du bör undvika att skicka känsliga eller konfidentiella internetmeddelanden.",
            sharing_title: "Informationsdelning",
            sharing_text: "Vi säljer, handlar inte med eller på annat sätt överför din personligt identifierbara information från konsumenter till externa parter. Detta inkluderar inte betrodda tredje parter som hjälper oss att driva vår webbplats, driva vår verksamhet eller betjäna konsumenter, så länge som dessa parter samtycker till att hålla denna information konfidentiell. Vi kan också lämna ut din information när vi anser att det är lämpligt för att följa lagen, upprätthålla vår webbplatspolicy eller skydda våra eller andras rättigheter, egendom eller säkerhet. Däremot kan vi dela aggregerad demografisk information med våra partners som inte innehåller personligt identifierbar information.",
            security_title: "Säkerhet",
            security_text: "Denna webbplats har säkerhetsåtgärder på plats för att skydda förlust, missbruk och ändring av informationen under vår kontroll. Vi lagrar all användarinformation i databaser som skyddas via en mängd olika åtkomstkontroller samt är fysiskt placerade i en säker anläggning. Dessa data nås endast för de syften som anges i denna sekretesspolicy.",
            opt_out_title: "Choice/Opt-Out",
            opt_out_text: "Du kan välja bort att ta emot framtida kommunikation från oss. Du kan också begära att få se all information om dig som vi har lagrat, och du kan begära att vi raderar någon av denna information. Se nedan för hur du kontaktar oss.",
            usage_title: "Ansvarsfriskrivningar för webbplatsanvändning",
            usage_text: "Vårt företag är ansvarigt för innehållet på denna webbplats. Denna webbplats är endast utformad för allmänna informationsändamål och den utgör inte juridisk eller medicinsk rådgivning eller bildandet av en advokat-klient eller läkare-klient relation.",
            contact_title: "Så här kontaktar du oss",
            contact_text: "Om du har några frågor om denna integritetspolicy, praxis på den här webbplatsen eller din hantering av denna webbplats, besök vår kontaktsida."
        },
        contact_page: {
            tagline: "Kontakta Oss",
            title: "Hur kan vi hjälpa dig?",
            blurb: "Vi finns alltid här för att hjälpa dig med eventuella frågor eller problem du kan ha. Tveka inte att höra av dig.",
            locations: {
                sweden: "Sverige",
                spain: "Spanien",
                latvia: "Lettland"
            },
            form: {
                title: "Skriv till oss..",
                subtitle: "Vi återkommer till dig så snart som möjligt",
                name: "Namn",
                email: "E-post",
                phone: "Telefon",
                message: "Meddelande",
                btn_submit: "Skicka Meddelande",
                btn_sending: "Skickar...",
                success_title: "Meddelande Skickat!",
                success_msg: "Vi återkommer till dig inom kort.",
                btn_another: "Skicka Ett Annat Meddelande"
            },
            social_title: "Följ oss"
        },
        services_page: {
            tagline: "Vad Vi Gör",
            title_1: "Löser",
            title_2: "Verkliga",
            title_3: "Affärsproblem",
            title_4: "Med",
            title_5: "AI-baserad",
            title_6: "Konsulting.",
            description: "Vårt team av erfarna AI-konsulter kommer att arbeta nära dig för att identifiera rätt artificiell intelligens-teknologier, verktyg och strategier som hjälper dig att effektivisera din verksamhet.",
            contact_btn: "Kontakta Oss",
            services_header: "Tjänster",
            services_desc: "Vi kan hjälpa organisationer av alla storlekar och branscher att designa, bygga och implementera toppmoderna maskininlärningslösningar.",
            core: {
                vision: {
                    title: "Datorseende",
                    desc: "Vår kärnkompetens ligger i att skapa skräddarsydda mjukvarulösningar som utnyttjar kraften i datorseende-tekniker för att få värdefulla insikter från bilder, videor och liveströmmar.",
                    detail: "Genom en sammanslagning av banbrytande djupinlärningsalgoritmer och traditionella datorseende-metoder ger vi företag möjlighet att enkelt upptäcka, segmentera och spåra objekt."
                },
                nlp: {
                    title: "Naturlig Språkbehandling",
                    desc: "Utnyttja potentialen i djupinlärning för att använda kraften i pipelines för bearbetning av naturligt språk och få värdefull mening från ostrukturerad text."
                },
                genai: {
                    title: "Generativ AI",
                    desc: "Utveckla banbrytande, högpresterande lösningar anpassade efter dina unika behov. Lås upp den fulla potentialen i ditt företag genom att omfamna toppmoderna generativa AI-lösningar.",
                    detail: "Oavsett om det handlar om att skräddarsy naturlig språkbehandling efter dina behov eller att utnyttja kapaciteten hos datorseende."
                }
            },
            general: {
                tech: { title: "Teknik och Programvara", desc: "Våra innovativa lösningar har hjälpt teknikföretag att ombilda hur de arbetar." },
                sports: { title: "Sportteknik", desc: "Vi tar med toppmodern teknik till sport med spårning, aktivitetsigenkänning, pose-estimering och mer." },
                auto: { title: "Fordon", desc: "Med lösningar som sträcker sig från objektspårning med flera kameror till beteendeidentifiering och processoptimering." },
                manu: { title: "Tillverkning/Agro", desc: "Vi har implementerat lösningar som sträcker sig från datorseendeverktyg för livsmedelsföretag till analys i realtid." },
                marketing: { title: "Marknadsföring", desc: "Oavsett om det är på efterfråge- eller utbudssidan hjälper vi företag att få ut det mesta av data på användarnivå." },
                health: { title: "Hälso- och Sjukvård", desc: "Vi bygger lösningar för att göra läkemedel säkrare och effektivare genom maskininlärningsbaserade metoder." },
                gaming: { title: "Spel", desc: "Att hitta ett sätt att engagera spelare i denna snabba, konkurrenskraftiga miljö är en stor utmaning." },
                workforce: { title: "AI-arbetsstyrka", desc: "Stärk ditt team att sömlöst integrera AI i sina dagliga arbetsflöden genom att tillhandahålla anpassad utbildning." },
                transformation: { title: "Affärstransformation", desc: "Vi specialiserar oss på digital affärstransformation och ger företag möjlighet att utnyttja kraften i teknik." },
                web: { title: "Webbappdesign", desc: "Webbapplikationer är viktiga verktyg för moderna företag och erbjuder dynamiska och interaktiva upplevelser." },
                mobile: { title: "Mobilutveckling", desc: "Mobilapplikationer är ett utmärkt sätt att nå en publik som redan är medveten om ditt varumärke." },
                ecom: { title: "E-handel", desc: "E-handelswebbplatser är ett kraftfullt verktyg för att engagera befintliga kunder och locka nya." }
            }
        },
        portfolio_page: {
            tagline: "Vårt Arbete",
            title: "Utvalda Projekt.",
            description: "En utställning av vårt banbrytande arbete inom artificiell intelligens, robotik och uppslukande digitala upplevelser.",
            view_case_study: "Besök Webbplats",
            projects: {
                p4dots: { title: "4dots", category: "Anpassning och Utskrift", desc: "En omfattande anpassnings- och utskriftstjänst som erbjuder personliga brevhuvuden och broschyrer." },
                kontrast: { title: "Kontrast", category: "Restaurang och Gästfrihet", desc: "En premium nordindisk matupplevelse i Malmö, Sverige, med autentisk punjabisk mat." },
                secondskin_b2b: { title: "SecondskinStyle B2B", category: "E-handel och Sportkläder", desc: "Prestationsdrivna sportkläder konstruerade för idrottare, med tonvikt på teknisk design." },
                secondskin: { title: "SecondskinStyle", category: "Konsument Sportkläder", desc: "Premium varumärke för sportkläder fokuserat på komfort, hållbarhet och stil." },
                pipetechs: { title: "PipeTechs", category: "Rörledningsteknik", desc: "Avancerade system för läckagedetektering i rörledningar med hjälp av akustisk teknik." },
                growers: { title: "Growers Direct", category: "Jordbruk och Detaljhandel", desc: "Familjedriven plantskola som erbjuder ett brett utbud av växter, keramik och expertråd." },
                timax: { title: "Timax-NL", category: "Byggkonsulting", desc: "Holländsk konsultfirma specialiserad på byggregler och energiprestanda." },
                sicci: { title: "Sicci", category: "Handelskammare", desc: "Singapore Indian Chamber of Commerce and Industry, stöder affärstillväxt." },
                icai: { title: "I C A I", category: "Professionell Organisation", desc: "Singapore-kapitlet för Institute of Chartered Accountants of India." },
                chets: { title: "Chet's Shoes", category: "E-handel och Detaljhandel", desc: "Familjeägt skoföretag som erbjuder premiumarbetsstövlar och skyddsskor." },
                finance: { title: "Privatekonomi Sverige", category: "Finansiell Utbildning", desc: "Stärka expats och NRI i Sverige med kunskap om investeringar och skatter." }
            }
        },
        careers_page: {
            tagline: "Jobba Hos Oss",
            title: "Bygg Framtiden.",
            description: "Vi söker passionerade individer för att gå med i vårt team av innovatörer, ingenjörer och problemlösare.",
            search_placeholder: "Sök roller...",
            filters: {
                all: "Alla",
                full_time: "Heltid",
                internship: "Praktik"
            },
            details: "Detaljer",
            no_positions: "Inga positioner hittades som matchar dina kriterier.",
            clear_filters: "Rensa filter"
        },
        jobs: jobTranslations.SV,
        career_details: {
            back_to_careers: "Tillbaka till Karriär",
            apply_now: "Ansök Nu",
            share_role: "Dela denna roll",
            department: "Avdelning",
            dept_name: "Teknik & AI",
            contact_contact: "Kontakt",
            about_role: "Om Rollen",
            what_you_do: "Vad du kommer att göra",
            what_looking_for: "Vad vi letar efter",
            preferred_qual: "Föredragna kvalifikationer",
            why_join: "Varför jobba hos oss?"
        },
        housing_association: {
            hero: {
                tagline: "AsimovX Ekosystem",
                title_1: "Styrelsearbete,",
                title_2: "fulländat.",
                description_1: "Ett premium digitalt lager för din byggnad.",
                description_2: "Vackert. Automatiserat. Enkelt."
            },
            sticky_scroll: {
                unified_command: {
                    title: "Enat Kommando.",
                    desc: "För samman din styrelse, boende och leverantörer i en gemensam verklighet. Inga fler förlorade e-postmeddelanden eller WhatsApp-trådar."
                },
                visual_clarity: {
                    title: "Visuell Tydlighet.",
                    desc: "Se exakt vad som händer i din byggnad. Från trasiga lampor till budgetutnyttjande, visualisera allt."
                },
                future_proof: {
                    title: "Framtidssäkrad.",
                    desc: "Byggd på modern infrastruktur som växer med dig. Säkert, snabbt och alltid online."
                }
            },
            core_objective: {
                title: "Bostadsrättsföreningens Plattform",
                description: "Denna plattform är byggd för att underlätta vardagen för svenska bostadsrättsföreningar (BRF) genom att minska den dagliga arbetsbelastningen för styrelsemedlemmar. Många styrelsemedlemmar är frivilliga och lägger idag alldeles för mycket tid på e-post, uppföljningar, kalkylblad och manuell samordning.",
                quote: "Målet är att låta styrelsemedlemmar lägga mindre tid på administration och mer tid på det som verkligen betyder något, att förbättra boendeupplevelsen.",
                features: {
                    chaos: "Plattformen ersätter kaos med en enkel, digital arbetsyta som:",
                    list: [
                        "Minskar manuellt arbete",
                        "Tar bort repetitiva uppgifter",
                        "Håller allt på ett ställe",
                        "Förhindrar att information går förlorad när styrelsen byts ut"
                    ]
                }
            },
            living_index: {
                tagline: "Sviten",
                title: "Allt på rätt plats.",
                description: "Ett komplett operativsystem för din bostadsrättsförening. Designat för tydlighet, snabbhet och kontroll.",
                features: {
                    communication: { title: "Kommunikation", desc: "Nå alla direkt." },
                    issues: { title: "Ärenden", desc: "Åtgärda saker snabbare." },
                    archives: { title: "Arkiv", desc: "Säker lagring." },
                    booking: { title: "Bokning", desc: "Resurshantering." },
                    board: { title: "Styrelse", desc: "Operativt kommando." },
                    residents: { title: "Boende", desc: "Självserviceportal." }
                }
            },
            cta: {
                title_1: "Redo att",
                title_2: "Lyfta?",
                book_demo: "Boka Demo",
                view_pricing: "Se Priser"
            },
            marquee: {
                system_online: "System Online",
                secure: "Säker",
                connected: "Ansluten",
                live: "Live"
            },
            dashboard: {
                network_status: "Nätverksstatus",
                optimal: "Optimal",
                latency: "Latens",
                users_live: "3 Användare",
                new_alert: "Ny Varning",
                alert_msg: "Vattentrycksvarning upptäckt i Byggnad A.",
                monthly_revenue: "Månadsintäkt",
                residents: "Boende",
                open_tasks: "Öppna Uppgifter"
            },
            booking: {
                hero: {
                    title_1: "Boka",
                    title_2: "Smart.",
                    description: "Rättvist, transparent och konfliktfritt. Från tvättstugor till gästlägenheter.",
                    utilization: "Utnyttjande",
                    conflicts: "Konflikter"
                },
                calendar: {
                    laundry_room: "Tvättstuga A",
                    month: "Oktober"
                },
                floating: {
                    resident_title: "Boende",
                    laundry: "Tvättstuga A",
                    confirmed: "Bekräftad",
                    reminders: "Påminnelser"
                },
                lifestyle: {
                    shared_spaces: {
                        title: "Gemensamma Utrymmen.",
                        desc: "Maximera utnyttjandet av gemensamma resurser utan huvudvärk."
                    },
                    guest_apartments: {
                        title: "Gästlägenheter.",
                        desc: "Enkla bokningsflöden för övernattande gäster."
                    }
                }
            },
            communication: {
                hero: {
                    title_1: "Enad",
                    title_2: "Röst.",
                    description: "Tala en gång, nå alla. En enad kanal för meddelanden, uppdateringar och brådskande varningar.",
                    email_digested: "E-post Sammanfattning",
                    mobile_push: "Mobilnotis"
                },
                phone: {
                    messages: "Meddelanden",
                    urgent: "Brådskande",
                    just_now: "Just nu",
                    elevator_title: "Hissunderhåll",
                    elevator_desc: "Hiss B kommer att vara ur drift för service...",
                    read_by: "Läst av 45 Boende",
                    push_sent: "Notis Skickad",
                    delivery_rate: "98% Leveransgrad"
                },
                features: {
                    title: "Styrelse till Boende Flöde",
                    description: "En dedikerad kanal för officiell, enkelriktad kommunikation från styrelsen till de boende.",
                    items: {
                        board_announcements: { title: "Styrelsemeddelanden", desc: "Styrelsen kan publicera officiella nyheter och uppdateringar på en central plats.", benefit: "Boende vet var de hittar pålitlig information" },
                        targeted_messages: { title: "Riktade Meddelanden", desc: "Skicka meddelanden till alla boende eller utvalda byggnader/sektioner.", benefit: "Undviker onödiga meddelanden" },
                        email_notifications: { title: "E-postnotiser", desc: "Automatiska e-postmeddelanden för nya meddelanden.", benefit: "Säkerställer hög synlighet" },
                        message_read: { title: "Lässtatus", desc: "Spåra om boende har läst viktiga meddelanden.", benefit: "Bekräftar att informationen har mottagits" },
                        push_notifications: { title: "Push-notiser", desc: "Varningar för brådskande eller tidskänsliga uppdateringar.", benefit: "Snabbare kommunikation när det behövs" },
                        vendor_comm: { title: "Leverantörskommunikation", desc: "Kommunicera med externa leverantörer direkt genom systemet.", benefit: "Håller all kommunikation dokumenterad på en plats" }
                    }
                },
                lifestyle: {
                    title: "Gemenskap, Ansluten.",
                    desc: "När alla vet vad som händer blir grannar vänner.",
                    stat_title: "100%",
                    stat_subtitle: "Styrelsetransparens",
                    stat_desc: "Baserat på användarundersökningar 2024."
                }
            },
            issues: {
                hero: {
                    title_1: "Fixa det",
                    title_2: "Snabbare.",
                    description: "Från 'Trasigt Lås' till 'Fixat' på rekordtid. Visuell rapportering som faktiskt fungerar."
                },
                map: {
                    broken_lock: "Trasigt Lås",
                    priority: "Hög Prioritet",
                    resolved: "Löst!",
                    resolved_desc: "Vaktmästaren markerade 'Entrébelysning' som åtgärdad."
                },
                features: {
                    title: "Strukturerad Rapportering",
                    description: "Ett dedikerat system för att hantera fastighetsrelaterade problem och underhållsförfrågningar.",
                    items: {
                        submission: { title: "Felanmälan", desc: "Boende kan rapportera problem via portalen.", benefit: "Enkel och snabb rapportering" },
                        photo: { title: "Ladda upp Foton", desc: "Bifoga bilder för att förklara problemet.", benefit: "Minskar missförstånd" },
                        category: { title: "Problemkategori", desc: "Välj typ (t.ex. VVS, El, Allmänna utrymmen).", benefit: "Snabbare hantering" },
                        priority: { title: "Prioritetsnivå", desc: "Markera brådska (Hög, Medel, Låg).", benefit: "Hjälper styrelsen fokusera på kritiska problem" },
                        tracking: { title: "Statusspårning", desc: "Tydlig framsteg: Ny → Pågående → Slutförd.", benefit: "Boende vet vad som händer" },
                        comments: { title: "Kommentarer & Uppdateringar", desc: "Gemensam meddelandetråd för uppdateringar och svar.", benefit: "Transparent kommunikation" }
                    }
                },
                lifestyle: {
                    title: "Stärk era förvaltare.",
                    desc: "Ge era leverantörer och vaktmästare de digitala verktyg de behöver för att göra sitt bästa jobb."
                }
            },
            documents: {
                hero: {
                    title_1: "Digitalt",
                    title_2: "Minne.",
                    description: "Föreningens institutionella hjärna. Säkert, sökbart och tryggt för alltid.",
                    search_placeholder: "Sök dokument...",
                    encrypted: "Krypterad Lagring",
                    archived_data: "Arkiverad Data"
                },
                lifestyle: {
                    title: "Papperslös Framtid.",
                    desc: "Sluta drunkna i pärmar. Få tillgång till valfritt kontrakt, protokoll eller faktura på sekunder."
                }
            },
            board: {
                hero: {
                    title_1: "Styrelse",
                    title_2: "Kontroll.",
                    description: "Möten, beslut och uppgifter i ett flytande arbetsutrymme. Sluta använda WhatsApp för officiella ärenden.",
                    task_manager: "Uppgiftshanterare"
                },
                board_visual: {
                    todo: "Att Göra",
                    protocol_signed: "Protokoll Signerat",
                    admin_time: "Admin Tid",
                    open_tasks: "Öppna Uppgifter",
                    completed: "Slutförda"
                },
                tasks: {
                    budget: { t: "Budget 2026 Godkännande", s: "Pågående" },
                    playground: { t: "Lekplatsrenovering", s: "Väntande" },
                    fire_inspection: { t: "Brandinspektion", s: "Slutförd" }
                },
                lifestyle: {
                    title: "Fokusera på beslut.",
                    desc: "Låt programvaran hantera påminnelser, signaturer och arkivering."
                }
            },
            residents: {
                hero: {
                    title_1: "Ditt",
                    title_2: "Hem.",
                    description: "Allt relaterat till din lägenhet på ett ställe. Avgifter, nycklar, bilar och gemenskap.",
                    tags: {
                        payment_history: "Betalningshistorik",
                        car_registry: "Bilregister",
                        documents: "Dokument",
                        polls: "Omröstningar"
                    }
                },
                dashboard: {
                    monthly_fee: "Månadsavgift",
                    due_in: "Förfaller om 5 dagar",
                    parking: "Parkering",
                    slot: "Plats A-42",
                    active: "Aktiv",
                    poll: "Gemenskapspoll",
                    poll_question: "Ska vi installera solpaneler på södra taket?",
                    yes: "Ja",
                    no: "Nej",
                    auto_pay: "Autogiro",
                    enabled: "Aktiverat",
                    guests: "Gäster"
                },
                lifestyle: {
                    title: "Du har kontrollen.",
                    desc: "Få tillgång till dina bostadsuppgifter när som helst, var som helst. Inget mer väntande på att kontoret ska öppna."
                }
            },
        }
    },
    DA: {
        navbar: {
            home: "Hjem",
            about: "Om Os",
            services: "Vores Ydelser",
            portfolio: "Portefølje",
            careers: "Karriere",
            blog: "Blog",
            contact: "Kontakt Os",
            products: "Produkter"
        },
        hero: {
            tagline: "Teknisk Rådgivning Gentänkt",
            title_1: "Sæt Strøm Til",
            title_2: "Din Virksomhed",
            title_3: "med AI.",
            description: "Styrk din forretningsverden med banebrydende teknologiske løsninger, der udnytter avanceret kunstig intelligens (AI) til at flytte din organisation mod sine mål hurtigere end nogensinde før.",
            cta_primary: "Start Din Rejse",
            cta_secondary: "Se arbejdet"
        },
        features: {
            tagline: "Hvad vi gør",
            title_1: "Løser Virkelige",
            title_2: "Forretningsproblemer Med AI.",
            description: "Vores team af erfarne AI-konsulenter vil arbejde tæt sammen med dig for at identificere de rette kunstig intelligens-teknologier, værktøjer og strategier, der hjælper dig med at strømline din virksomhed, forbedre kundeengagement og maksimere lønsomheden.",
            key_expertise: "Nøglekompetencer",
            vision_title: "Computer Vision",
            vision_desc: "Vores kernekompetence ligger i at skabe skræddersyede softwareløsninger, der udnytter kraften i computer vision-teknikker til at udlede værdifuld indsigt fra billeder, videoer og livestreams.",
            genai_title: "Generativ AI",
            genai_desc: "Udvikl banebrydende, højtydende løsninger tilpasset dine unikke krav. Fra at skræddersy NLP til at udnytte mulighederne inden for computer vision og reinforcement learning.",
            nlp_title: "Behandling af Naturligt Sprog",
            nlp_desc: "Udnyt potentialet i deep learning til at bruge kraften i pipelines for behandling af naturligt sprog og få værdifuld mening fra ustruktureret tekst.",
            consulting_title: "AI-rådgivning",
            consulting_desc: "Identificer de rette teknologier, værktøjer og strategier for at strømline driften, forbedre engagementet og maksimere lønsomheden."
        },
        process: {
            tagline: "Sådan gør vi",
            title: "Vores Proces",
            step_1_title: "AI Strategiudvikling",
            step_1_desc: "Definer klare mål og køreplan for AI-integration",
            step_2_title: "Data Analyse",
            step_2_desc: "Omfattende evaluering af din datainfrastruktur",
            step_3_title: "Identifikation af AI Use Cases",
            step_3_desc: "Opdag muligheder med stor effekt for AI-implementering",
            step_4_title: "Gap Analyse",
            step_4_desc: "Identificer tekniske og organisatoriske krav",
            step_5_title: "Implementering",
            step_5_desc: "Sømløs integration i dine eksisterende systemer",
            step_6_title: "Træning og Uddannelse",
            step_6_desc: "Styrk dit team med AI-ekspertise og bedste praksis"
        },
        industries: {
            tagline: "Funktioner",
            title_1: "Vi kan hjælpe organisationer",
            title_2: "af alle størrelser og brancher",
            description: "Design, byg og implementer topmoderne machine learning-løsninger. Lær mere om nogle af de funktioner og segmenter, vi kan hjælpe dig med:",
            tech_title: "Teknologi & Software",
            tech_desc: "Vores innovative løsninger har hjulpet teknologivirksomheder med at genoverveje måden, de arbejder på.",
            sports_title: "Sportsteknologi",
            sports_desc: "Vi bringer topmoderne teknologier til sport med tracking, aktivitetsgenkendelse, pose estimation og mere.",
            auto_title: "Bilindustrien",
            auto_desc: "Med løsninger der spænder fra objektsporing med flere kameraer til adfærdsidentifikation og procesoptimering.",
            manu_title: "Fremstilling/Agro",
            manu_desc: "Vi har implementeret løsninger, der spænder fra computer vision-værktøjer til fødevareproducenter til realtids-sensoranalyse på produktionslinjer.",
            marketing_title: "Marketing",
            marketing_desc: "Uanset om det er på efterspørgsels- eller udbudssiden, hjælper vi virksomheder med at få mest muligt ud af data på brugerniveau for at optimere deres annonceringsindsats.",
            health_title: "Sundhed & Pharma",
            health_desc: "Vi bygger løsninger for at gøre lægemidler sikrere og mere effektive gennem machine learning-baserede tilgange til at opdage receptsvindel.",
            gaming_title: "Gaming",
            gaming_desc: "At finde en måde at engagere spillere i dette høje tempo, konkurrenceprægede miljø er en stor udfordring.",
            workforce_title: "Byg en Fremtidssikret AI-arbejdsstyrke",
            workforce_desc: "Styrk dit team til at integrere AI sømløst i deres daglige arbejdsgange ved at tilbyde skræddersyet træning designet til at imødekomme dine specifikke krav.",
            transformation_title: "Forretningstransformation",
            transformation_desc: "Vi specialiserer os i digital forretningstransformation og giver virksomheder mulighed for at udnytte kraften i teknologi og innovation.",
            web_title: "Webapplikationsdesign & Udvikling",
            web_desc: "Webapplikationer er essentielle værktøjer for moderne virksomheder og tilbyder dynamiske og interaktive oplevelser for brugere.",
            mobile_title: "Mobiludvikling",
            mobile_desc: "Mobilapplikationer er en fremragende måde at nå et publikum, der allerede kender dit brand.",
            ecom_title: "E-Commerce Hjemmeside",
            ecom_desc: "E-commerce hjemmesider er et kraftfuldt værktøj til at engagere eksisterende kunder og tiltrække nye gennem bekvem online adgang."
        },
        blog: {
            tagline: "ARTIKLER & NYHEDER",
            title_1: "Opdater Artikel",
            title_2: "& Flere Arkiver.",
            description: "Læs om vores information og nyheder.",
            read_more: "Læs Mere"
        },
        standards_banner: {
            tagline: "Asimovx Standarden",
            line_1: "EKSELLENCE",
            line_2: "ER KUN",
            line_3: "BEGYNDELSEN."
        },
        blog_articles: {
            common: {
                back_to_home: "Tilbage til Hjem",
                view_github: "Se på GitHub",
                view_repo: "Hvis du vil hoppe direkte til koden, kan du besøge mit Github-Repo:"
            },
            human_pose: {
                title: "Sammenligning af Menneskelig Pose og Handlingsscoring med Deep Learning",
                excerpt: "Pose Estimation er en af de mere elegante applikationer af neurale netværk og er overraskende nøjagtig...",
                content: {
                    p1: "Pose Estimation is one of the more elegant applications of neural networks and is startlingly accurate and sometimes, seems like something right out of science fiction.",
                    p2: "For Instance, check out Google's Move Mirror, an in-browser application that estimates the user's pose in real time and then displays a movie still with the actor holding the same pose.",
                    p3: "When I glanced over it, however, I got an idea. What if the same methodology could be used to compare the same actions performed by two people? This technology could then be used to teach people over remote view! I got to work immediately and tried to reverse engineer the techniques used by Google.",
                    h_challenge: "The Challenge",
                    p4: "I found, to my disappointment, a few Tensorflow.js tutorials and theories on the same and nothing in python. This was understandable as it was an in-browser application and so, I decided to port the code to mighty Python. A few sessions of research showed me that they were using Posenet, a fast yet accurate model, for estimating pose.",
                    p5: "The Objective was simple: I wanted to go one step ahead and compare a whole action such as a punch or a kick with an image and tell me the extend to which it was correct.",
                    h_model: "The Model",
                    p6: "As I stated earlier, Google Mirror uses PoseNet, a deep learning model which specifies 17 points on the human body. I found a good python implementation of it here.",
                    h_similarity: "Defining Similarity",
                    p_similarity: "The next challenge was defining similarity. When we think about the problem, we see that there are many uncertainties to be addressed: humans can have different heights and body shapes, they might be in different parts in the picture: one person may have been standing close to the camera, another might have been faraway. All these problems have to be solved in order to output a correct result.",
                    h_solutions: "Key Solutions:",
                    li_bbox_bold: "New Bounding Box:",
                    li_bbox: "From the model output, we get the co-ordinates of the 17 key-points on a person's body. This information can be used to create a new bounding box which tightly covers the person in the picture.",
                    li_norm_bold: "Normalization:",
                    li_norm: "In order to account for the size inconsistencies, we perform L2 normalization of the points in order to transform it into a unit vector.",
                    h_cosine: "Cosine Similarity",
                    p_cosine_1: "Now that we have standardized the pose vectors, it is time to choose a similarity measure. I chose cosine similarity for this particular instance, mainly because we are working with vectors.",
                    p_cosine_2: "The 17 key-points are converted into a vector and plotted in high dimensional space. This vector plotting is compared to another vector plot from our benchmark image. The direction of vectors here are an indication of the similarity of the poses.",
                    h_drawbacks: "Drawbacks of Initial Approach",
                    li_drawback_1: "The algorithm does not take into account the time taken to perform the activity",
                    li_drawback_2: "There is no scope of attaining a 100 percent score since the average is taken against one picture",
                    h_dtw: "Dynamic Time Warping (DTW)",
                    p_dtw_1: "Even though it sounds like a sci-fi method of time travel, it really isn't. It is just a method used in comparing sequences and graphs of different lengths. It matches the different troughs and crests in a graph using one to many matching and such, resulting in synced up frames on its own.",
                    p_dtw_2: "This method seemed ideal for my use case, as I had similar graphs for each of the 17 key-points as the action was performed. I could then use DTW to compare these graphs and get 17 scores for each of the 17 key-points. An average of these 17 scores could be then taken as the total score.",
                    h_future: "Future Improvements",
                    li_auto_bold: "Automation:",
                    li_auto: "Recognition of action performed and orientation automatically",
                    li_score_bold: "Confidence Scores:",
                    li_score: "Using confidence scores returned by Posenet for more efficient scoring",
                    li_point_bold: "Point Specification:",
                    li_point: "According to the action to be performed, specific points can be used to increase accuracy",
                    li_feedback_bold: "Feedback System:",
                    li_feedback: "Providing feedback to users on which body part's movement needs correction",
                    h_refs: "References",
                    ref_1: "Move Mirror - TensorFlow Blog",
                    ref_2: "Dynamic Time Warping - Towards Data Science"
                }
            },
            realtime_image: {
                title: "Realtids Billedklassifikation på Android med Flutter, TFlite",
                excerpt: "At lave en smartphone-app fra bunden kan virke som en skræmmende opgave for de fleste nybegyndere...",
                content: {
                    p1: "If you’d like to jump straight to the code, please visit my Github-Repo:",
                    p2: "Making a smartphone app from scratch might seem a daunting task to most newbies and maybe even seasoned programmers. Enter Flutter.",
                    p3: "As One of the promising, albeit untested technologies unveiled by Google for android app development, Flutter aims to make smartphone app development easier than ever. It is even rumored that flutter will soon be the go-to name in mobile app development. Creating UIs is a breeze and the developer friendly coding style makes the icing on the cake.",
                    p4: "Working as an AI engineer, one of the most common problems I and my team mates encounter is the matter of deployment of our models. How do you prototype your deep learning models in a quick, yet elegant way? The answer is carried around in our very pockets. Smartphones. That’s right. That overpowered piece of hardware on which you are possibly reading this article at this very moment is any developer’s dream come true. Combine the ubiquitous nature of smartphones and the versatile technology that is machine learning and you’re looking at a vast potential of innovation right there.",
                    p5: "Now, I work at a place where people are often expected to roll up their sleeves and get the job done rather than wait for help. So, at one such instance, the matter of deployment loomed ahead of me and I had to choose between the daunting world of native android development and an exciting, yet uncharted new tech called Flutter. I chose the latter. At the time of writing this article, not every aspect of flutter is super stable, but it is certain that all of those problems shall disappear. In this article, I shall describe the important aspects of integrating deep learning models into an android app made with flutter. While I am no experienced android nor flutter developer, I was able to get a base version working in about a week. That’s how easy it is.",
                    p6: "I assume the reader has a base understanding of layouts in flutter and a basic understanding of the programming language used, which is Dart. If you are unfamiliar with what I just mentioned a few beginner posts will get you on your way. While the methods and code mentioned in this project is not exactly what I would call optimized, it can serve as a starting point or a base for your own projects. So let’s dive in to it.",
                    h_tflite: "We will be using the TFlite plugin",
                    p_tflite: "to integrate our neural network with the app. In order to use it, We first need to specify it as a dependency and also specify our model file’s presence in the assets folder. There are three steps to be followed for this:",
                    li_step1: "Place the model file(in .tflite format) in the assets folder along with the labels.txt file which contains the name of the classes used.",
                    li_step2: "Specify the file’s presence in the assets folder so that the compiler knows to use it and also specify the usage of the plugin.",
                    li_step3: "In android/app/build.gradle, add the following setting in android block.",
                    p_pubspec: "So let’s open up our pubspec.yaml file.",
                    h_pubspec: "pubspec.yaml",
                    p_dev_dep: "Here, you can see that I’ve specified the tflite: 1.0.1 as a dev_dependency. Now it is ready to be imported and used with our app. It’s that simple (Not quite). When flutter runs the packages get command, the files required to run this plugin will be downloaded without any further action from our side.",
                    p_home_dart: "Now let’s open up our home.dart file, which is the page which has the ignite button labeled “start classification”.",
                    h_import: "Importing the tflite plugin",
                    p_import_1: "As you can see, I’ve imported the tfliteplugin on line 3 in the home.dart page, similar to how I would import library files in other standard programming languages.",
                    p_import_2: "The Tflite plugin comes bundled with a function called loadModel() which is used to specify the name of the model to be loaded and the labels.txt file, which contains the name of the classes used.",
                    h_load: "Loading the model",
                    p_load: "For representation purposes, I’ve wrapped up this process in a function of my own, which is also called loadmodel().",
                    h_run_model: "runModelOnFrame() function",
                    p_run_1: "Now let’s move on to the camera.dart file, where the actual inference takes place. Here, We use the function runModelOnFrame(), which takes the frame from the camera stream and takes it as input to the model. This function requires a list of arguments such as the frame, its height, width, the number of results to be displayed and so on.",
                    p_run_2: "The output is received in the format specified by the plugin’s ReadMe file found on Flutter Pub.",
                    p_output_1: "This output is received by the recognitions variable.",
                    p_render: "The output received from the model is imposed on the ImageStream from the camera on the render.dart page. In order to do this, the results obtained from the model is passed into the render.dart page as a list named, well, results. These results are then displayed along with the confidence percentage on the screen.",
                    footer_repo: "All the code and project files are available in my GitHub:"
                }
            }
        },
        cta: {
            title_1: "Har du brug for en Skræddersyet",
            title_2: "Projektplan?",
            description: "Kontakt vores team for at diskutere dine unikke krav og opdag, hvordan vi kan accelerere din AI-transformation.",
            button: "Kontakt Os"
        },
        footer: {
            title_1: "Skræddersyede ML-baserede",
            title_2: "løsninger for at Forbedre",
            title_3: "din Forretningsverden",
            description: "Vi er glade for at være på denne rejse med dig.",
            contact: "KONTAKT",
            sweden: "Sverige",
            network: "Netværk",
            privacy: "Privatliv",
            legal: "Juridisk",
            cookies: "Cookies"
        },
        careers: {
            tagline: "Job Hos Os",
            title: "Byg Fremtiden.",
            description: "Vi leder efter passionerede individer til at slutte sig til vores team af innovatører, ingeniører og problemløsere.",
            details: "Detaljer"
        },
        portfolio: {
            tagline: "Vores Arbejde",
            title: "Udvalgte Projekter.",
            description: "Et udstillingsvindue for vores banebrydende arbejde inden for kunstig intelligens, robotteknologi og fordybende digitale oplevelser.",
            view_case_study: "Besøg"
        },
        privacy_policy: {
            title: "Privatlivs",
            title_suffix: "Politik.",
            intro_1: "Vi har oprettet denne privatlivspolitik for at demonstrere vores forpligtelse til privatliv og sikkerhed og for klart at definere disse standarder for vores hjemmesidebesøgende. Denne privatlivspolitik gælder kun for information indsamlet af denne hjemmeside.",
            intro_2: "Følgende beskriver vores praksis for indsamling og formidling af information for denne hjemmeside:",
            list_1: "Vi bruger forbrugernes IP-adresser til at hjælpe med at diagnosticere problemer med vores server og til at administrere vores hjemmeside.",
            list_2: "Vi bruger cookies til at holde styr på indkøbskurvens indhold og/eller henvisningsinformation.",
            list_3: "Vores side bruger en bestillingsformular, så forbrugerne kan anmode om information om vores produkter og tjenester. Vi indsamler forbrugerens kontaktoplysninger (som deres e-mailadresse, telefonnummer eller postadresse). Vi bruger kontaktoplysninger fra formularen til at sende ordrer, information eller tilbud.",
            list_4: "Forbrugerens kontaktoplysninger kan også bruges til at komme i kontakt med forbrugeren, når det er nødvendigt for at løse et problem.",
            list_5: "Når du udfylder en kontaktformular eller på anden måde kontakter os, kan vi gemme din kommunikation for at behandle dine forespørgsler, besvare dine anmodninger og forbedre vores tjenester.",
            list_6: "I nogle tilfælde kan information, du giver via tredjepartstjenester såsom gratisnumre til denne side eller live chat-tjenester, blive gemt for at behandle dine forespørgsler, besvare dine anmodninger og forbedre vores tjenester. Information indsamlet af disse tredjepartstjenester er også underlagt deres privatlivspolitik.",
            list_7: "Vi kan bruge din e-mailadresse, telefonnummer eller postadresse til at kommunikere med dig om vores tjenester.",
            list_8: "Vi kan bruge enhver information, du giver, eller som vi indsamler, til at levere, vedligeholde, beskytte og forbedre vores tjenester (herunder reklametjenester) og udvikle nye tjenester.",
            list_9: "Forbrugere kan til enhver tid fravælge at modtage fremtidige mails; se afsnittet om valg/fravalg nedenfor.",
            list_10: "Forbrugere kan til enhver tid kontakte os for at anmode om, at vi sletter kontaktoplysninger, der er givet til os; se afsnittet om valg/fravalg nedenfor.",
            disclaimer: "Bemærk venligst: hvis du kommunikerer med os via denne side, er det muligt, at din kommunikation ikke vil blive behandlet som privilegeret eller fortrolig. Hvis du kommunikerer med os via denne side i en sag eller tilstand, som vi allerede repræsenterer eller behandler dig for, skal du huske, at internet-e-mail og kontaktformularer ikke er sikre af natur, og du bør undgå at sende følsomme eller fortrolige internetbeskeder.",
            sharing_title: "Deling af Information",
            sharing_text: "Vi sælger, handler eller overfører ikke på anden måde din personligt identificerbare information fra forbrugere til eksterne parter. Dette inkluderer ikke betroede tredjeparter, der hjælper os med at drive vores hjemmeside, drive vores forretning eller betjene forbrugere, så længe disse parter accepterer at holde denne information fortrolig. Vi kan også frigive din information, når vi mener, at frigivelse er passende for at overholde loven, håndhæve vores webstedspolitikker eller beskytte vores eller andres rettigheder, ejendom eller sikkerhed. Dog kan ikke-personligt identificerbar besøgsinformation gives til andre parter til markedsføring, annoncering eller anden brug.",
            security_title: "Sikkerhed",
            security_text: "Denne side har sikkerhedsforanstaltninger på plads for at beskytte mod tab, misbrug og ændring af informationen under vores kontrol. Vi gemmer al brugerinformation i databaser beskyttet via en række adgangskontroller samt fysisk placeret i en sikker facilitet. Disse data tilgås kun til de formål, der er angivet i denne privatlivspolitik.",
            opt_out_title: "Valg/Fravalg",
            opt_out_text: "Du kan fravælge at modtage fremtidig kommunikation fra os. Du kan også anmode om at se enhver information om dig, som vi har gemt, og du kan anmode om, at vi sletter noget af denne information. Se nedenfor for, hvordan du kontakter os.",
            usage_title: "Ansvarsfraskrivelser for Hjemmesidebrug",
            usage_text: "Vores virksomhed er ansvarlig for indholdet af denne hjemmeside. Denne hjemmeside er designet til generelle informationsformål og udgør ikke juridisk eller medicinsk rådgivning eller dannelsen af et advokat-klient eller læge-patient forhold.",
            contact_title: "Sådan Kontakter Du Os",
            contact_text: "Hvis du har spørgsmål om denne privatlivspolitik, praksisserne på denne side eller din omgang med denne hjemmeside, bedes du besøge vores kontaktside."
        },
        contact_page: {
            tagline: "Kontakt Os",
            title: "Hvordan kan vi hjælpe?",
            blurb: "Vi er altid her for at hjælpe dig med eventuelle spørgsmål eller problemer, du måtte have. Tøv ikke med at kontakte os.",
            locations: {
                sweden: "Sverige",
                spain: "Spanien",
                latvia: "Letland"
            },
            form: {
                title: "Skriv til os..",
                subtitle: "Vi vender tilbage til dig så hurtigt som muligt",
                name: "Navn",
                email: "E-mail",
                phone: "Telefon",
                message: "Besked",
                btn_submit: "Send Besked",
                btn_sending: "Sender...",
                success_title: "Besked Sendt!",
                success_msg: "Vi vender tilbage til dig snarest.",
                btn_another: "Send En Anden Besked"
            },
            social_title: "Følg os"
        },
        services_page: {
            tagline: "Hvad Vi Gør",
            title_1: "Løser",
            title_2: "Virkelige",
            title_3: "Forretningsproblemer",
            title_4: "Med",
            title_5: "AI-baseret",
            title_6: "Rådgivning.",
            description: "Vores team af erfarne AI-konsulenter vil arbejde tæt sammen med dig for at identificere de rette kunstig intelligens-teknologier, værktøjer og strategier.",
            contact_btn: "Kontakt Os",
            services_header: "Tjenester",
            services_desc: "Vi kan hjælpe organisationer af alle størrelser og brancher med at designe, bygge og implementere topmoderne machine learning-løsninger.",
            core: {
                vision: {
                    title: "Computer Vision",
                    desc: "Vores kernekompetence ligger i at skabe skræddersyede softwareløsninger, der udnytter kraften i computer vision-teknikker til at udlede værdifuld indsigt.",
                    detail: "Gennem en fusion af banebrydende deep learning-algoritmer og traditionelle computer vision-tilgange giver vi virksomheder mulighed for nemt at opdage, segmentere og spore objekter."
                },
                nlp: {
                    title: "Naturlig Sprogbehandling",
                    desc: "Udnyt potentialet i deep learning til at bruge kraften i pipelines for behandling af naturligt sprog og få værdifuld mening fra ustruktureret tekst."
                },
                genai: {
                    title: "Generativ AI",
                    desc: "Udvikl banebrydende, højtydende løsninger tilpasset dine unikke krav. Frigør det fulde potentiale i din virksomhed ved at omfavne topmoderne løsninger.",
                    detail: "Uanset om det handler om at skræddersy naturlig sprogbehandling eller udnytte mulighederne inden for computer vision."
                }
            },
            general: {
                tech: { title: "Teknologi & Software", desc: "Vores innovative løsninger har hjulpet teknologivirksomheder med at genoverveje måden, de arbejder på." },
                sports: { title: "Sportsteknologi", desc: "Vi bringer topmoderne teknologier til sport med tracking, aktivitetsgenkendelse, pose estimation og mere." },
                auto: { title: "Bilindustrien", desc: "Med løsninger der spænder fra objektsporing med flere kameraer til adfærdsidentifikation og procesoptimering." },
                manu: { title: "Fremstilling/Agro", desc: "Vi har implementeret løsninger, der spænder fra computer vision-værktøjer til fødevareproducenter til realtids-sensoranalyse." },
                marketing: { title: "Marketing", desc: "Uanset om det er på efterspørgsels- eller udbudssiden, hjælper vi virksomheder med at få mest muligt ud af data." },
                health: { title: "Sundhed & Pharma", desc: "Vi bygger løsninger for at gøre lægemidler sikrere og mere effektive gennem machine learning-baserede tilgange." },
                gaming: { title: "Gaming", desc: "At finde en måde at engagere spillere i dette høje tempo, konkurrenceprægede miljø er en stor udfordring." },
                workforce: { title: "AI-arbejdsstyrke", desc: "Styrk dit team til at integrere AI sømløst i deres daglige arbejdsgange ved at tilbyde skræddersyet træning." },
                transformation: { title: "Forretningstransformation", desc: "Vi specialiserer os i digital forretningstransformation og giver virksomheder mulighed for at udnytte kraften i teknologi." },
                web: { title: "Webapplikationsdesign", desc: "Webapplikationer er essentielle værktøjer for moderne virksomheder og tilbyder dynamiske og interaktiva oplevelser." },
                mobile: { title: "Mobiludvikling", desc: "Mobilapplikationer er en fremragende måde at nå et publikum, der allerede kender dit brand." },
                ecom: { title: "E-Commerce", desc: "E-commerce hjemmesider er et kraftfuldt værktøj til at engagere eksisterende kunder og tiltrække nye." }
            }
        },
        portfolio_page: {
            tagline: "Vores Arbejde",
            title: "Udvalgte Projekter.",
            description: "Et udstillingsvindue for vores banebrydende arbejde inden for kunstig intelligens, robotteknologi og fordybende digitale oplevelser.",
            view_case_study: "Besøg Side",
            projects: {
                p4dots: { title: "4dots", category: "Tilpasning og Print", desc: "En omfattende tilpasnings- og printtjeneste, der tilbyder personlige brevpapirer og brochurer." },
                kontrast: { title: "Kontrast", category: "Restaurant og Gæstfrihed", desc: "En premium nordindisk spiseoplevelse i Malmø, Sverige, der byder på autentisk indisk mad." },
                secondskin_b2b: { title: "SecondskinStyle B2B", category: "E-Commerce og Sportstøj", desc: "Præstationsdrevet sportstøj udviklet til atleter, med vægt på teknisk design." },
                secondskin: { title: "SecondskinStyle", category: "Forbruger Sportstøj", desc: "Premium sportstøjsmærke fokuseret på komfort, holdbarhed og stil." },
                pipetechs: { title: "PipeTechs", category: "Rørledningsteknologi", desc: "Avancerede systemer til lækagedetektion i rørledninger ved hjælp af akustisk teknologi." },
                growers: { title: "Growers Direct", category: "Landbrug og Detailhandel", desc: "Familiedrevet planteskole, der tilbyder et bredt udvalg af planter, keramik og ekspertrådgivning." },
                timax: { title: "Timax-NL", category: "Byggerådgivning", desc: "Hollandsk rådgivningsvirksomhed med speciale i byggereglementer og energimærkning." },
                sicci: { title: "Sicci", category: "Handelskammer", desc: "Singapore Indian Chamber of Commerce and Industry, der støtter forretningsvækst." },
                icai: { title: "I C A I", category: "Professionel Organisation", desc: "Singapore-afdelingen af Institute of Chartered Accountants of India." },
                chets: { title: "Chet's Shoes", category: "E-Commerce og Detailhandel", desc: "Familiejet fodtøjsvirksomhed, der tilbyder premium arbejdsstøvler og sikkerhedssko." },
                finance: { title: "Privatøkonomi Sverige", category: "Finansiel Uddannelse", desc: "Styrkelse af expats og NRI'er i Sverige med viden om investering, skat og familiefinans." }
            }
        },
        careers_page: {
            tagline: "Job Hos Os",
            title: "Byg Fremtiden.",
            description: "Vi leder efter passionerede individer til at slutte sig til vores team af innovatører, ingeniører og problemløsere.",
            search_placeholder: "Søg roller...",
            filters: {
                all: "Alle",
                full_time: "Fuldtid",
                internship: "Praktik"
            },
            details: "Detaljer",
            no_positions: "Ingen stillinger fundet, der matcher dine kriterier.",
            clear_filters: "Ryd filtre"
        },
        jobs: jobTranslations.DA,
        career_details: {
            back_to_careers: "Tilbage til Karriere",
            apply_now: "Ansøg Nu",
            share_role: "Del denne stilling",
            department: "Afdeling",
            dept_name: "Teknik & AI",
            contact_contact: "Kontakt",
            about_role: "Om Rollen",
            what_you_do: "Hvad du vil lave",
            what_looking_for: "Hvad vi leder efter",
            preferred_qual: "Foretrukne kvalifikationer",
            why_join: "Hvorfor slutte sig til os?"
        },
        housing_association: {
            hero: {
                tagline: "AsimovX Økosystem",
                title_1: "Bestyrelsesarbejde,",
                title_2: "perfektioneret.",
                description_1: "Et premium digitalt lag til din bygning.",
                description_2: "Smukt. Automatiseret. Ubesværet."
            },
            sticky_scroll: {
                unified_command: {
                    title: "Samlet Kommando.",
                    desc: "Bring din bestyrelse, beboere og leverandører ind i en fælles virkelighed. Ikke flere tabte e-mails eller WhatsApp-tråde."
                },
                visual_clarity: {
                    title: "Visuel Klarhed.",
                    desc: "Se præcis, hvad der sker i din bygning. Fra ødelagte lys til budgetudnyttelse, visualiser det hele."
                },
                future_proof: {
                    title: "Fremtidssikret.",
                    desc: "Bygget på moderne infrastruktur, der vokser med dig. Sikkert, hurtigt og altid online."
                }
            },
            core_objective: {
                title: "Boligforeningsplatformen",
                description: "Denne platform er bygget til at gøre livet lettere for boligforeninger ved at reducere den daglige arbejdsbyrde for bestyrelsesmedlemmer. Mange bestyrelsesmedlemmer er frivillige og bruger i dag alt for meget tid på e-mails, opfølgninger, regneark og manuel koordinering.",
                quote: "Målet er at lade bestyrelsesmedlemmer bruge mindre tid på administration og mere tid på det, der virkelig betyder noget, at forbedre beboernes oplevelse.",
                features: {
                    chaos: "Platformen erstatter kaos med ét simpelt, digitalt arbejdsrum, der:",
                    list: [
                        "Reducerer manuelt arbejde",
                        "Fjerner gentagne opgaver",
                        "Holder alt på ét sted",
                        "Forhindrer information i at gå tabt ved bestyrelsesskift"
                    ]
                }
            },
            living_index: {
                tagline: "Suiten",
                title: "Alt på sin rette plads.",
                description: "Et komplet operativsystem til din boligforening. Designet til klarhed, hastighed og kontrol.",
                features: {
                    communication: { title: "Kommunikation", desc: "Nå alle øjeblikkeligt." },
                    issues: { title: "Sager", desc: "Løs ting hurtigere." },
                    archives: { title: "Arkiver", desc: "Sikker opbevaring." },
                    booking: { title: "Booking", desc: "Ressourcestyring." },
                    board: { title: "Bestyrelse", desc: "Operativ kommando." },
                    residents: { title: "Beboere", desc: "Selvbetjeningsportal." }
                }
            },
            cta: {
                title_1: "Klar til at",
                title_2: "Løfte?",
                book_demo: "Book Demo",
                view_pricing: "Se Priser"
            },
            marquee: {
                system_online: "System Online",
                secure: "Sikker",
                connected: "Forbundet",
                live: "Live"
            },
            dashboard: {
                network_status: "Netværksstatus",
                optimal: "Optimal",
                latency: "Latens",
                users_live: "3 Brugere",
                new_alert: "Ny Advarsel",
                alert_msg: "Vandtryksadvarsel registreret i Bygning A.",
                monthly_revenue: "Månedlig Omsætning",
                residents: "Beboere",
                open_tasks: "Åbne Opgaver"
            },
            booking: {
                hero: {
                    title_1: "Book",
                    title_2: "Smart.",
                    description: "Retfærdigt, gennemsigtigt og konfliktfrit. Fra vaskerier til gæstelejligheder.",
                    utilization: "Udnyttelse",
                    conflicts: "Konflikter"
                },
                calendar: {
                    laundry_room: "Vaskeri A",
                    month: "Oktober"
                },
                floating: {
                    resident_title: "Beboer",
                    laundry: "Vaskeri A",
                    confirmed: "Bekræftet",
                    reminders: "Påmindelser"
                },
                lifestyle: {
                    shared_spaces: {
                        title: "Fællesarealer.",
                        desc: "Maksimer udnyttelsen af fælles ressourcer uden hovedpine."
                    },
                    guest_apartments: {
                        title: "Gæstelejligheder.",
                        desc: "Nemme bookingflows for overnattende gæster."
                    }
                }
            },
            communication: {
                hero: {
                    title_1: "Forenede",
                    title_2: "Stemme.",
                    description: "Tal én gang, nå alle. En samlet kanal til meddelelser, opdateringer og presserende advarsler.",
                    email_digested: "E-mail Resume",
                    mobile_push: "Mobil Push"
                },
                phone: {
                    messages: "Beskeder",
                    urgent: "Haster",
                    just_now: "Lige nu",
                    elevator_title: "Elevator Vedligeholdelse",
                    elevator_desc: "Elevator B vil være ude af drift for service...",
                    read_by: "Læst af 45 Beboere",
                    push_sent: "Push Sendt",
                    delivery_rate: "98% Leveringsrate"
                },
                features: {
                    title: "Bestyrelse til Beboer Flow",
                    description: "En dedikeret kanal til officiel, envejskommunikation fra bestyrelsen til beboerne.",
                    items: {
                        board_announcements: { title: "Bestyrelsesmeddelelser", desc: "Bestyrelsen kan offentliggøre officielle nyheder og opdateringer ét centralt sted.", benefit: "Beboere ved, hvor de finder pålidelig information" },
                        targeted_messages: { title: "Målrettede Beskeder", desc: "Send beskeder til alle beboere eller udvalgte bygninger/sektioner.", benefit: "Undgår unødvendige beskeder" },
                        email_notifications: { title: "E-mail Notifikationer", desc: "Automatiske e-mails for nye meddelelser.", benefit: "Sikrer høj synlighed" },
                        message_read: { title: "Læsestatus", desc: "Spor om beboere har læst vigtige meddelelser.", benefit: "Bekræfter at informationen er modtaget" },
                        push_notifications: { title: "Push Notifikationer", desc: "Advarsler for hastende eller tidssensitive opdateringer.", benefit: "Hurtigere kommunikation når det er nødvendigt" },
                        vendor_comm: { title: "Leverandørkommunikation", desc: "Kommuniker med eksterne leverandører direkte gennem systemet.", benefit: "Holder al kommunikation dokumenteret ét sted" }
                    }
                },
                lifestyle: {
                    title: "Fællesskab, Forbundet.",
                    desc: "Når alle ved hvad der sker, bliver naboer til venner.",
                    stat_title: "100%",
                    stat_subtitle: "Bestyrelsesgennemsigtighed",
                    stat_desc: "Baseret på brugerundersøgelser 2024."
                }
            },
            issues: {
                hero: {
                    title_1: "Fix det",
                    title_2: "Hurtigere.",
                    description: "Fra 'Ødelagt Lås' til 'Fixet' på rekordtid. Visuel rapportering der faktisk virker."
                },
                map: {
                    broken_lock: "Ødelagt Lås",
                    priority: "Høj Prioritet",
                    resolved: "Løst!",
                    resolved_desc: "Viceværten markerede 'Indgangslys' som fixet."
                },
                features: {
                    title: "Struktureret Rapportering",
                    description: "Et dedikeret system til håndtering af facilitetsrelaterede problemer og vedligeholdelsesanmodninger.",
                    items: {
                        submission: { title: "Indsendelse af Problemer", desc: "Beboere kan rapportere problemer gennem portalen.", benefit: "Nem og hurtig rapportering" },
                        photo: { title: "Foto Upload", desc: "Vedhæft billeder for at forklare problemet.", benefit: "Reducerer misforståelser" },
                        category: { title: "Problemkategori", desc: "Vælg type (fx VVS, El, Fællesområde).", benefit: "Hurtigere håndtering" },
                        priority: { title: "Prioritetsniveau", desc: "Marker hast (Høj, Mellem, Lav).", benefit: "Hjælper bestyrelsen med at fokusere på kritiske problemer" },
                        tracking: { title: "Status Sporing", desc: "Tydelig fremgang: Ny → I Gang → Afsluttet.", benefit: "Beboere ved hvad der sker" },
                        comments: { title: "Kommentarer & Opdateringer", desc: "Fælles beskedtråd for opdateringer og svar.", benefit: "Gennemsigtig kommunikation" }
                    }
                },
                lifestyle: {
                    title: "Styrk jeres viceværter.",
                    desc: "Giv jeres leverandører og viceværter de digitale værktøjer de behøver for at gøre deres bedste arbejde."
                }
            },
            documents: {
                hero: {
                    title_1: "Digital",
                    title_2: "Hukommelse.",
                    description: "Foreningens institutionelle hjerne. Sikker, søgbar og tryg for altid.",
                    search_placeholder: "Søg dokumenter...",
                    encrypted: "Krypteret Lagring",
                    archived_data: "Arkiveret Data"
                },
                lifestyle: {
                    title: "Papirløs Fremtid.",
                    desc: "Stop med at drukne i mapper. Få adgang til enhver kontrakt, protokol eller faktura på sekunder."
                }
            },
            board: {
                hero: {
                    title_1: "Bestyrelses",
                    title_2: "Kontrol.",
                    description: "Møder, beslutninger og opgaver i ét flydende arbejdsrum. Stop med at bruge WhatsApp til officielle anliggender.",
                    task_manager: "Opgavestyring"
                },
                board_visual: {
                    todo: "At Gøre",
                    protocol_signed: "Protokol Underskrevet",
                    admin_time: "Admin Tid",
                    open_tasks: "Åbne Opgaver",
                    completed: "Afsluttet"
                },
                tasks: {
                    budget: { t: "Budget 2026 Godkendelse", s: "I Gang" },
                    playground: { t: "Legepladsrenovering", s: "Afventer" },
                    fire_inspection: { t: "Brandinspektion", s: "Afsluttet" }
                },
                lifestyle: {
                    title: "Fokus på beslutninger.",
                    desc: "Lad softwaren håndtere påmindelser, underskrifter og arkivering."
                }
            },
            residents: {
                hero: {
                    title_1: "Dit",
                    title_2: "Hjem.",
                    description: "Alt relateret til din lejlighed på ét sted. Afgifter, nøgler, biler og fællesskab.",
                    tags: {
                        payment_history: "Betalingshistorik",
                        car_registry: "Bilregister",
                        documents: "Dokumenter",
                        polls: "Afstemninger"
                    }
                },
                dashboard: {
                    monthly_fee: "Månedlig Ydelse",
                    due_in: "Forfalder om 5 dage",
                    parking: "Parkering",
                    slot: "Plads A-42",
                    active: "Aktiv",
                    poll: "Fællesskabsafstemning",
                    poll_question: "Skal vi installere solceller på sydtaget?",
                    yes: "Ja",
                    no: "Nej",
                    auto_pay: "Betalingsservice",
                    enabled: "Aktiveret",
                    guests: "Gæster"
                },
                lifestyle: {
                    title: "Du har kontrollen.",
                    desc: "Få adgang til dine boligoplysninger når som helst, hvor som helst. Ikke mere venten på at kontoret åbner."
                }
            },
        }
    }
};
