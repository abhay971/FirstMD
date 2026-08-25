/**
 * Patient-resource articles. Content is transcribed from the First MD articles
 * doc; each article renders at /resources/articles/<slug> (see ArticlePage).
 * Drop the hero photo at public/assets/articles/<slug>.webp and set `image` —
 * the page shows a neutral placeholder until then.
 */

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'items'; items: { title: string; desc: string }[] }

export type ArticleSection = { heading: string; blocks: ArticleBlock[] }

export type Article = {
  slug: string
  title: string
  category: string
  readingTime: string
  /** One-line teaser for article cards. */
  summary: string
  /** Optional hero photo; falls back to a placeholder when omitted. */
  image?: string
  intro: ArticleSection
  sections: ArticleSection[]
  cta: { heading: string; text: string }
}

export const ARTICLES: Article[] = [
  {
    "slug": "high-blood-pressure",
    "image": "/assets/articles/high-blood-pressure.webp",
    "title": "Understanding High Blood Pressure: Causes, Symptoms & What You Can Do",
    "category": "Chronic Illness Management",
    "readingTime": "5–6 Minutes",
    "summary": "Why it often has no symptoms, what raises your risk, and the everyday habits that help keep it in check.",
    "intro": {
      "heading": "Understanding High Blood Pressure",
      "blocks": [
        {
          "type": "p",
          "text": "High blood pressure, also called hypertension, happens when the force of blood against your artery walls stays higher than it should. It often develops without noticeable symptoms, which is why regular blood pressure checks are important. When left uncontrolled, high blood pressure can increase the risk of heart disease, stroke, kidney problems, and other health complications."
        },
        {
          "type": "p",
          "text": "The good news is that high blood pressure can often be managed through healthy lifestyle changes, regular monitoring, and treatment when recommended by your healthcare provider."
        }
      ]
    },
    "sections": [
      {
        "heading": "What Causes High Blood Pressure?",
        "blocks": [
          {
            "type": "p",
            "text": "There isn't always one single cause. Your risk can be influenced by several factors, including:"
          },
          {
            "type": "list",
            "items": [
              "Family history of high blood pressure",
              "Age",
              "Lack of regular physical activity",
              "Excess weight",
              "High-sodium diet",
              "Tobacco use",
              "Excessive alcohol use",
              "Stress",
              "Diabetes or high cholesterol",
              "Certain kidney conditions"
            ]
          },
          {
            "type": "p",
            "text": "Some medications and underlying medical conditions can also contribute to high blood pressure."
          }
        ]
      },
      {
        "heading": "What Are the Symptoms?",
        "blocks": [
          {
            "type": "p",
            "text": "One of the biggest challenges with high blood pressure is that most people do not experience noticeable symptoms. You may have high blood pressure and feel completely healthy."
          },
          {
            "type": "p",
            "text": "The most reliable way to know your blood pressure is to have it checked regularly by a healthcare professional or through appropriate home monitoring."
          }
        ]
      },
      {
        "heading": "Why Managing Blood Pressure Matters",
        "blocks": [
          {
            "type": "p",
            "text": "When high blood pressure remains uncontrolled over time, it can put extra strain on your heart and blood vessels."
          },
          {
            "type": "p",
            "text": "It can increase the risk of:"
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Heart Disease",
                "desc": "Higher risk of heart attack and other cardiovascular problems."
              },
              {
                "title": "Stroke",
                "desc": "Damaged or weakened blood vessels can increase stroke risk."
              },
              {
                "title": "Kidney Problems",
                "desc": "Long-term high blood pressure can damage the kidneys."
              },
              {
                "title": "Vision Problems",
                "desc": "Blood vessel damage can affect the eyes and vision."
              }
            ]
          }
        ]
      },
      {
        "heading": "What You Can Do to Manage It",
        "blocks": [
          {
            "type": "p",
            "text": "Small, consistent lifestyle changes can make an important difference in blood pressure management."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Stay Active",
                "desc": "Regular physical activity supports heart and blood vessel health."
              },
              {
                "title": "Choose Heart-Healthy Foods",
                "desc": "Focus on a balanced diet and limit foods high in sodium."
              },
              {
                "title": "Maintain a Healthy Weight",
                "desc": "Achieving or maintaining a healthy weight can help reduce blood pressure."
              },
              {
                "title": "Limit Alcohol & Avoid Tobacco",
                "desc": "Alcohol can raise blood pressure, while tobacco damages blood vessels."
              },
              {
                "title": "Manage Stress",
                "desc": "Find healthy ways to manage everyday stress and support your overall well-being."
              },
              {
                "title": "Take Medications as Prescribed",
                "desc": "If medication is recommended, take it as directed and continue working with your healthcare provider."
              }
            ]
          }
        ]
      },
      {
        "heading": "When Should You See a Doctor?",
        "blocks": [
          {
            "type": "p",
            "text": "Schedule a visit if you have concerns about your blood pressure, have repeatedly elevated readings, or have risk factors such as diabetes, kidney disease, high cholesterol, or a family history of hypertension."
          },
          {
            "type": "p",
            "text": "If your blood pressure is higher than 180/120 mm Hg, repeat the reading after at least one minute. If it remains that high and you experience symptoms such as chest pain, shortness of breath, weakness, numbness, vision changes, or difficulty speaking, call 911 immediately."
          }
        ]
      }
    ],
    "cta": {
      "heading": "Ready to Take Control of Your Blood Pressure?",
      "text": "Regular monitoring and the right care plan can help you stay ahead of high blood pressure. If you have concerns about your blood pressure or want to discuss your overall health, the First MD team is here to help."
    }
  },
  {
    "slug": "diabetes-early-signs",
    "image": "/assets/articles/diabetes-early-signs.webp",
    "title": "Diabetes: Early Signs, Risk Factors & How to Stay Healthy",
    "category": "Chronic Illness Management",
    "readingTime": "5–6 Minutes",
    "summary": "The early warning signs of type 2 diabetes, who is at risk, and simple changes that support healthy blood sugar.",
    "intro": {
      "heading": "Understanding Diabetes",
      "blocks": [
        {
          "type": "p",
          "text": "Diabetes is a condition in which blood glucose, or blood sugar, becomes too high. Type 2 diabetes is the most common form and develops when the body does not use insulin effectively or does not make enough insulin."
        },
        {
          "type": "p",
          "text": "Diabetes can develop gradually, and some people may have few or no noticeable symptoms. Knowing the warning signs and understanding your risk can help you take action early."
        }
      ]
    },
    "sections": [
      {
        "heading": "What Are the Early Signs of Diabetes?",
        "blocks": [
          {
            "type": "p",
            "text": "Some common symptoms of diabetes include:"
          },
          {
            "type": "list",
            "items": [
              "Increased thirst",
              "Frequent urination",
              "Increased hunger",
              "Feeling unusually tired",
              "Blurred vision",
              "Unexplained weight loss",
              "Numbness or tingling in the hands or feet",
              "Sores that take longer to heal"
            ]
          },
          {
            "type": "p",
            "text": "Type 2 diabetes symptoms can develop slowly, so some people may not realize they have the condition until a routine checkup or blood test identifies it."
          }
        ]
      },
      {
        "heading": "Who Is at Risk for Type 2 Diabetes?",
        "blocks": [
          {
            "type": "p",
            "text": "Several factors can increase your risk of developing type 2 diabetes."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Family History",
                "desc": "Having a parent or sibling with diabetes can increase your risk."
              },
              {
                "title": "Age",
                "desc": "The risk of type 2 diabetes generally increases as you get older."
              },
              {
                "title": "Weight",
                "desc": "Being overweight or having obesity can increase your risk."
              },
              {
                "title": "Physical Inactivity",
                "desc": "Limited physical activity can contribute to insulin resistance and increased risk."
              },
              {
                "title": "Prediabetes",
                "desc": "Having blood sugar levels above the normal range can increase your chance of developing type 2 diabetes."
              },
              {
                "title": "Other Health Conditions",
                "desc": "High blood pressure, certain cholesterol levels, and a history of gestational diabetes can also increase risk."
              }
            ]
          }
        ]
      },
      {
        "heading": "Why Early Management Matters",
        "blocks": [
          {
            "type": "p",
            "text": "Managing diabetes is about more than keeping blood sugar within a recommended range. Your healthcare team may also monitor your blood pressure and cholesterol and help you develop healthy habits."
          },
          {
            "type": "p",
            "text": "When diabetes is not well controlled over time, it can contribute to health problems affecting the:"
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Heart",
                "desc": "Diabetes can increase the risk of heart disease and stroke."
              },
              {
                "title": "Kidneys",
                "desc": "High blood sugar can contribute to kidney damage."
              },
              {
                "title": "Eyes",
                "desc": "Diabetes can affect blood vessels in the eyes and may contribute to vision problems."
              },
              {
                "title": "Nerves",
                "desc": "High blood sugar can damage nerves and cause numbness or tingling."
              }
            ]
          }
        ]
      },
      {
        "heading": "How Can You Stay Healthy?",
        "blocks": [
          {
            "type": "p",
            "text": "Small, sustainable changes can help you manage your health and may help prevent or delay type 2 diabetes."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Eat Balanced Meals",
                "desc": "Choose a variety of vegetables, fruits, whole grains, lean proteins, and other nutritious foods while limiting added sugars and highly processed foods."
              },
              {
                "title": "Stay Active",
                "desc": "Regular physical activity can support healthy blood sugar, blood pressure, cholesterol, and weight."
              },
              {
                "title": "Maintain a Healthy Weight",
                "desc": "If you are overweight, even modest weight loss may help reduce your risk of developing type 2 diabetes."
              },
              {
                "title": "Get Enough Sleep",
                "desc": "Consistent, quality sleep is an important part of maintaining overall health."
              },
              {
                "title": "Keep Up With Checkups",
                "desc": "Regular visits allow your provider to monitor important health measurements and recommend appropriate testing or preventive care."
              }
            ]
          }
        ]
      },
      {
        "heading": "When Should You See a Doctor?",
        "blocks": [
          {
            "type": "p",
            "text": "Talk with your healthcare provider if you are experiencing symptoms of diabetes or have risk factors such as a family history, prediabetes, excess weight, or limited physical activity."
          },
          {
            "type": "p",
            "text": "A healthcare professional can determine whether blood glucose testing or additional evaluation is appropriate. Early identification can give you more opportunities to make changes and manage your health effectively."
          }
        ]
      }
    ],
    "cta": {
      "heading": "Take the Next Step Toward Better Health",
      "text": "Whether you're concerned about your blood sugar, have risk factors for diabetes, or simply want to stay on top of your health, First MD can help you understand your options and create a care plan based on your needs."
    }
  },
  {
    "slug": "back-pain-causes-treatment",
    "image": "/assets/articles/back-pain-causes-treatment.webp",
    "title": "Back Pain: Common Causes, Warning Signs & Treatment Options",
    "category": "Chiropractic / Family Medicine",
    "readingTime": "5–6 Minutes",
    "summary": "Common causes of back pain, the warning signs that need prompt attention, and how it is treated.",
    "intro": {
      "heading": "Understanding Back Pain",
      "blocks": [
        {
          "type": "p",
          "text": "Back pain is one of the most common health concerns and can range from a mild, aching sensation to sharp or severe pain. It may develop after lifting something, making a sudden movement, sitting for long periods, an injury, or sometimes without an obvious cause."
        },
        {
          "type": "p",
          "text": "Most acute back pain improves with time, but persistent or severe pain should be evaluated by a healthcare professional."
        }
      ]
    },
    "sections": [
      {
        "heading": "What Causes Back Pain?",
        "blocks": [
          {
            "type": "p",
            "text": "Back pain can have many different causes. Common ones include:"
          },
          {
            "type": "list",
            "items": [
              "Muscle or ligament strains",
              "Poor posture or prolonged sitting",
              "Lifting or moving incorrectly",
              "Sports or work-related injuries",
              "Herniated or damaged discs",
              "Arthritis or other joint conditions",
              "Sciatica or nerve irritation",
              "Spinal stenosis",
              "Previous injuries"
            ]
          },
          {
            "type": "p",
            "text": "Sometimes, the exact cause of back pain cannot be identified."
          }
        ]
      },
      {
        "heading": "What Does Back Pain Feel Like?",
        "blocks": [
          {
            "type": "p",
            "text": "Back pain can feel different from person to person. You may experience:"
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Aching or Stiffness",
                "desc": "A dull ache or stiffness that makes movement uncomfortable."
              },
              {
                "title": "Sharp Pain",
                "desc": "Sudden or intense pain, particularly after an injury or movement."
              },
              {
                "title": "Burning or Tingling",
                "desc": "A burning or tingling sensation may occur when nerves are irritated."
              },
              {
                "title": "Pain That Travels",
                "desc": "Pain may sometimes extend into the hip, leg, or foot depending on the underlying cause."
              }
            ]
          }
        ]
      },
      {
        "heading": "When Is Back Pain a Warning Sign?",
        "blocks": [
          {
            "type": "p",
            "text": "Most back pain is not caused by a serious condition. However, certain symptoms should not be ignored."
          },
          {
            "type": "p",
            "text": "Contact a healthcare provider if you experience:"
          },
          {
            "type": "list",
            "items": [
              "Severe or worsening pain",
              "Pain following a significant fall or injury",
              "Numbness or weakness in your legs",
              "Pain that travels down the leg",
              "Fever along with back pain",
              "Unexplained weight loss",
              "Difficulty walking or maintaining balance",
              "Changes in bladder or bowel control"
            ]
          },
          {
            "type": "p",
            "text": "These symptoms can sometimes indicate a more serious underlying problem and may require prompt medical evaluation."
          }
        ]
      },
      {
        "heading": "How Is Back Pain Treated?",
        "blocks": [
          {
            "type": "p",
            "text": "Treatment depends on the cause, severity, and duration of your symptoms. Your provider may recommend:"
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Movement & Exercise",
                "desc": "Gentle activity and appropriate exercises can help maintain strength and mobility."
              },
              {
                "title": "Heat or Cold Therapy",
                "desc": "Heat or cold packs may help relieve discomfort during certain types of acute back pain."
              },
              {
                "title": "Physical Therapy",
                "desc": "A physical therapist can guide stretching, strengthening, and movement techniques."
              },
              {
                "title": "Medications",
                "desc": "Depending on your situation, your healthcare provider may recommend appropriate pain-relieving medications."
              },
              {
                "title": "Chiropractic or Other Care",
                "desc": "Some patients may benefit from spinal manipulation or other complementary treatments depending on the cause of their pain."
              }
            ]
          }
        ]
      },
      {
        "heading": "When Should You See a Doctor?",
        "blocks": [
          {
            "type": "p",
            "text": "Consider scheduling an evaluation if your back pain is severe, keeps returning, interferes with your daily activities, or does not improve with basic self-care."
          },
          {
            "type": "p",
            "text": "Your provider can review your symptoms, perform a physical examination, and determine whether additional testing or treatment is appropriate."
          }
        ]
      }
    ],
    "cta": {
      "heading": "Don't Let Back Pain Slow You Down",
      "text": "Whether your pain is new, recurring, or affecting your everyday activities, getting the right evaluation can help you understand your options. The First MD team can help you determine the next step toward managing your pain and improving your mobility."
    }
  },
  {
    "slug": "cold-vs-flu",
    "image": "/assets/articles/cold-vs-flu.webp",
    "title": "How to Tell the Difference Between a Cold and the Flu",
    "category": "Urgent Care",
    "readingTime": "5–6 Minutes",
    "summary": "Colds and the flu can look alike — here is how to tell them apart and when to seek care.",
    "intro": {
      "heading": "Cold or Flu: How Can You Tell?",
      "blocks": [
        {
          "type": "p",
          "text": "A cold and the flu are both contagious respiratory illnesses, and their symptoms can look very similar. However, flu symptoms usually appear more suddenly and tend to be more intense than those of a common cold."
        },
        {
          "type": "p",
          "text": "Knowing the common differences can help you understand your symptoms and know when it may be time to seek medical care."
        }
      ]
    },
    "sections": [
      {
        "heading": "Common Cold Symptoms",
        "blocks": [
          {
            "type": "p",
            "text": "Cold symptoms are generally milder and often develop gradually. Common symptoms include:"
          },
          {
            "type": "list",
            "items": [
              "Runny or stuffy nose",
              "Sneezing",
              "Sore throat",
              "Mild cough",
              "Mild fatigue",
              "Occasional headache",
              "Mild body aches"
            ]
          },
          {
            "type": "p",
            "text": "Fever is less common with a cold, and most people continue with their normal activities despite feeling unwell."
          }
        ]
      },
      {
        "heading": "Common Flu Symptoms",
        "blocks": [
          {
            "type": "p",
            "text": "The flu often comes on suddenly and can make you feel significantly more unwell. Symptoms may include:"
          },
          {
            "type": "list",
            "items": [
              "Fever",
              "Chills",
              "Headache",
              "Muscle or body aches",
              "Significant fatigue",
              "Dry cough",
              "Sore throat",
              "Runny or stuffy nose"
            ]
          },
          {
            "type": "p",
            "text": "Fatigue and weakness can sometimes continue even after the other symptoms begin to improve."
          }
        ]
      },
      {
        "heading": "Cold vs. Flu: Key Differences",
        "blocks": [
          {
            "type": "items",
            "items": [
              {
                "title": "How Symptoms Start",
                "desc": "Cold symptoms usually develop gradually, while flu symptoms often appear suddenly."
              },
              {
                "title": "Fever",
                "desc": "Fever is uncommon with a cold but is common with the flu."
              },
              {
                "title": "Body Aches",
                "desc": "Mild aches may occur with a cold. Flu-related aches are often more noticeable."
              },
              {
                "title": "Fatigue",
                "desc": "A cold may cause mild tiredness, while the flu can cause significant exhaustion."
              },
              {
                "title": "Nasal Symptoms",
                "desc": "Runny or stuffy noses are more common with colds than with the flu."
              },
              {
                "title": "Cough",
                "desc": "Coughing can happen with both illnesses but may be more pronounced with the flu."
              }
            ]
          }
        ]
      },
      {
        "heading": "How Can You Feel Better?",
        "blocks": [
          {
            "type": "p",
            "text": "Most mild respiratory illnesses can be managed with rest, fluids, and appropriate symptom relief."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Stay Hydrated",
                "desc": "Drink plenty of fluids to help prevent dehydration."
              },
              {
                "title": "Get Plenty of Rest",
                "desc": "Give your body time to recover and avoid strenuous activity while you're feeling unwell."
              },
              {
                "title": "Monitor Your Symptoms",
                "desc": "Pay attention to changes in fever, breathing, pain, or overall condition."
              },
              {
                "title": "Talk With Your Provider",
                "desc": "If your symptoms are severe, worsening, or you're at higher risk for complications, contact your healthcare provider."
              }
            ]
          },
          {
            "type": "p",
            "text": "For some people with influenza, antiviral treatment may be appropriate, particularly when started early."
          }
        ]
      },
      {
        "heading": "When Should You See a Doctor?",
        "blocks": [
          {
            "type": "p",
            "text": "Consider contacting a healthcare provider if your symptoms are severe, getting worse, or not improving as expected."
          },
          {
            "type": "p",
            "text": "Seek prompt medical attention if you experience:"
          },
          {
            "type": "list",
            "items": [
              "Trouble breathing",
              "Chest pain or pressure",
              "Severe weakness or confusion",
              "Persistent or worsening symptoms",
              "A high or persistent fever",
              "Symptoms that improve and then become worse"
            ]
          },
          {
            "type": "p",
            "text": "People with certain chronic health conditions may also have a higher risk of complications from the flu and should contact their provider when they become sick."
          }
        ]
      }
    ],
    "cta": {
      "heading": "Feeling Sick? First MD Is Here to Help",
      "text": "Not sure whether you're dealing with a cold, the flu, or another illness? Our team can evaluate your symptoms and help you understand the next steps."
    }
  },
  {
    "slug": "why-physical-exams-matter",
    "image": "/assets/articles/why-physical-exams-matter.webp",
    "title": "Why Regular Physical Exams Matter Even When You Feel Healthy",
    "category": "Preventive Care",
    "readingTime": "5–6 Minutes",
    "summary": "What a physical exam covers, why preventive visits matter, and how to prepare for your appointment.",
    "intro": {
      "heading": "Why Regular Physical Exams Matter",
      "blocks": [
        {
          "type": "p",
          "text": "Feeling healthy doesn't always mean everything is healthy beneath the surface. Regular physical exams give you and your healthcare provider an opportunity to review your overall health, identify potential concerns early, and stay current with preventive care."
        },
        {
          "type": "p",
          "text": "A routine visit can also be a valuable time to discuss changes in your health, medications, lifestyle, family history, and any concerns you may otherwise overlook."
        }
      ]
    },
    "sections": [
      {
        "heading": "What Happens During a Physical Exam?",
        "blocks": [
          {
            "type": "p",
            "text": "A physical exam can vary depending on your age, health history, and individual needs. Your provider may review:"
          },
          {
            "type": "list",
            "items": [
              "Medical and family history",
              "Current medications and supplements",
              "Blood pressure and other vital signs",
              "Height, weight, and BMI",
              "Lifestyle habits",
              "Vaccination status",
              "Current symptoms or health concerns"
            ]
          },
          {
            "type": "p",
            "text": "Your provider may also recommend laboratory tests or preventive screenings based on your individual risk factors."
          }
        ]
      },
      {
        "heading": "Why Preventive Care Matters",
        "blocks": [
          {
            "type": "p",
            "text": "Regular visits aren't only about finding problems. They can help you stay proactive about your health and understand what you can do to reduce future risks."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Early Detection",
                "desc": "Some health conditions may develop without noticeable symptoms. Regular evaluations can help identify potential concerns earlier."
              },
              {
                "title": "Health Monitoring",
                "desc": "Tracking measurements such as blood pressure, weight, cholesterol, and blood sugar can help identify changes over time."
              },
              {
                "title": "Preventive Screenings",
                "desc": "Your provider can recommend screenings based on your age, sex, family history, and individual risk factors."
              },
              {
                "title": "Personalized Guidance",
                "desc": "Physical exams provide an opportunity to discuss nutrition, exercise, sleep, stress, medications, and other aspects of your health."
              }
            ]
          }
        ]
      },
      {
        "heading": "What Should You Bring to Your Appointment?",
        "blocks": [
          {
            "type": "p",
            "text": "A little preparation can help you make the most of your visit."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Medication List",
                "desc": "Bring a current list of prescription medications, over-the-counter medicines, and supplements."
              },
              {
                "title": "Medical History",
                "desc": "Let your provider know about recent diagnoses, procedures, vaccinations, or changes in your health."
              },
              {
                "title": "Questions & Concerns",
                "desc": "Write down anything you've noticed or want to discuss so you don't forget during your appointment."
              },
              {
                "title": "Health Information",
                "desc": "If you regularly monitor your blood pressure, blood sugar, symptoms, or other health measurements, bring those records when appropriate."
              }
            ]
          }
        ]
      },
      {
        "heading": "Who Should Consider Regular Physical Exams?",
        "blocks": [
          {
            "type": "p",
            "text": "Preventive care should be personalized rather than one-size-fits-all. Your provider can help determine which visits, screenings, and tests are appropriate based on your age, medical history, risk factors, and current health."
          },
          {
            "type": "p",
            "text": "Regular visits can be especially useful if you:"
          },
          {
            "type": "list",
            "items": [
              "Have a chronic health condition",
              "Take ongoing medications",
              "Have a family history of certain diseases",
              "Have risk factors for diabetes or heart disease",
              "Have noticed changes in your health",
              "Haven't had a routine health evaluation recently"
            ]
          }
        ]
      },
      {
        "heading": "When Should You Talk to a Doctor?",
        "blocks": [
          {
            "type": "p",
            "text": "Don't wait for your next routine appointment if you develop a new or concerning symptom. Contact a healthcare provider when you notice persistent changes in your health, unexplained symptoms, or concerns about an existing condition."
          },
          {
            "type": "p",
            "text": "For urgent or severe symptoms, seek appropriate medical attention immediately."
          }
        ]
      }
    ],
    "cta": {
      "heading": "Make Preventive Care Part of Your Health Routine",
      "text": "Regular physical exams can help you stay informed about your health and give you an opportunity to address concerns before they become bigger problems. At First MD, our team provides personalized primary and preventive care designed around your individual health needs."
    }
  },
  {
    "slug": "high-cholesterol",
    "image": "/assets/articles/high-cholesterol.webp",
    "title": "What Causes High Cholesterol and How Can You Manage It?",
    "category": "Chronic Illness Management",
    "readingTime": "5–6 Minutes",
    "summary": "What your cholesterol numbers mean and the lifestyle steps that help protect your heart.",
    "intro": {
      "heading": "Understanding High Cholesterol",
      "blocks": [
        {
          "type": "p",
          "text": "Cholesterol is a waxy substance your body needs to build cells and make certain hormones. Your body produces cholesterol naturally, and it also comes from some foods. However, having too much cholesterol in your blood can contribute to plaque buildup in your arteries and increase your risk of heart disease and stroke."
        },
        {
          "type": "p",
          "text": "High cholesterol often has no noticeable symptoms, which makes regular screening important—even if you feel completely healthy."
        }
      ]
    },
    "sections": [
      {
        "heading": "What Causes High Cholesterol?",
        "blocks": [
          {
            "type": "p",
            "text": "Several factors can affect your cholesterol levels. Some can be changed, while others are outside your control."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Diet",
                "desc": "Foods high in saturated and trans fats can raise unhealthy cholesterol levels."
              },
              {
                "title": "Weight",
                "desc": "Being overweight can contribute to higher LDL and lower HDL cholesterol."
              },
              {
                "title": "Physical Activity",
                "desc": "Regular exercise can help improve cholesterol levels and support heart health."
              },
              {
                "title": "Family History",
                "desc": "Some people inherit conditions that cause very high cholesterol, such as familial hypercholesterolemia."
              },
              {
                "title": "Age & Hormonal Changes",
                "desc": "Cholesterol levels can change as you get older and may be affected by hormonal changes."
              }
            ]
          },
          {
            "type": "p",
            "text": "Certain medical conditions and medications can also affect cholesterol levels."
          }
        ]
      },
      {
        "heading": "What Do Your Cholesterol Numbers Mean?",
        "blocks": [
          {
            "type": "p",
            "text": "A cholesterol test, often called a lipid panel, measures several types of fats and cholesterol in your blood."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "LDL Cholesterol",
                "desc": "Often called \"bad\" cholesterol. Higher levels can contribute to plaque buildup in the arteries."
              },
              {
                "title": "HDL Cholesterol",
                "desc": "Often called \"good\" cholesterol because it helps carry cholesterol back toward the liver."
              },
              {
                "title": "Triglycerides",
                "desc": "A type of fat in the blood that can also contribute to cardiovascular risk when levels are elevated."
              }
            ]
          },
          {
            "type": "p",
            "text": "Your provider considers these numbers along with your overall health and other risk factors when determining your treatment plan."
          }
        ]
      },
      {
        "heading": "How Can You Manage High Cholesterol?",
        "blocks": [
          {
            "type": "p",
            "text": "Lifestyle changes are an important part of cholesterol management. Depending on your individual risk, your provider may also recommend medication."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Choose Heart-Healthy Foods",
                "desc": "Include more vegetables, fruits, whole grains, beans, nuts, and lean proteins while limiting foods high in saturated and trans fats."
              },
              {
                "title": "Stay Active",
                "desc": "Regular moderate-intensity activity can support healthier cholesterol levels and overall cardiovascular health."
              },
              {
                "title": "Maintain a Healthy Weight",
                "desc": "If you are overweight, working toward a healthy weight may help improve your cholesterol profile."
              },
              {
                "title": "Avoid Tobacco",
                "desc": "Quitting smoking can improve HDL cholesterol and provide important benefits for cardiovascular health."
              },
              {
                "title": "Take Medication as Prescribed",
                "desc": "Some people need cholesterol-lowering medication in addition to lifestyle changes. Your provider can help determine what's appropriate for you."
              }
            ]
          }
        ]
      },
      {
        "heading": "Why Managing Cholesterol Matters",
        "blocks": [
          {
            "type": "p",
            "text": "High cholesterol usually doesn't make you feel sick, but over time it can contribute to fatty deposits inside your arteries. These deposits can restrict blood flow and increase the risk of cardiovascular problems."
          },
          {
            "type": "p",
            "text": "Managing cholesterol can help reduce your risk of:"
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Heart Disease",
                "desc": "High cholesterol can contribute to plaque buildup in the arteries."
              },
              {
                "title": "Heart Attack",
                "desc": "Blocked or narrowed arteries can reduce blood flow to the heart."
              },
              {
                "title": "Stroke",
                "desc": "Plaque buildup can affect blood flow to the brain."
              },
              {
                "title": "Peripheral Artery Disease",
                "desc": "Narrowed arteries can also affect blood flow to the legs and other parts of the body."
              }
            ]
          }
        ]
      },
      {
        "heading": "When Should You Get Your Cholesterol Checked?",
        "blocks": [
          {
            "type": "p",
            "text": "Because high cholesterol often doesn't cause symptoms, testing is the best way to know your levels."
          },
          {
            "type": "p",
            "text": "Talk with your healthcare provider about cholesterol screening, particularly if you have a family history of high cholesterol or heart disease, high blood pressure, diabetes, excess weight, or other cardiovascular risk factors."
          },
          {
            "type": "p",
            "text": "Your provider can review your results and help determine whether lifestyle changes, monitoring, or medication may be appropriate."
          }
        ]
      }
    ],
    "cta": {
      "heading": "Take Control of Your Heart Health",
      "text": "Knowing your cholesterol numbers is an important part of preventive healthcare. With regular monitoring, healthy habits, and the right treatment plan, high cholesterol can often be managed effectively. At First MD, our team can help you monitor cholesterol and other cardiovascular risk factors as part of comprehensive primary and chronic care."
    }
  },
  {
    "slug": "sciatica",
    "title": "Sciatica: Symptoms, Causes and When to See a Doctor",
    "category": "Chiropractic / Family Medicine",
    "readingTime": "5–6 Minutes",
    "summary": "How sciatic nerve pain feels, what causes it, and the symptoms that mean you should be seen.",
    "intro": {
      "heading": "Understanding Sciatica",
      "blocks": [
        {
          "type": "p",
          "text": "Sciatica is a type of nerve pain caused by irritation or pressure on the sciatic nerve, which runs from the lower back through the hips and down each leg. It commonly causes pain that travels from the lower back or buttock into one leg."
        },
        {
          "type": "p",
          "text": "For many people, sciatica improves within a few weeks. However, persistent, severe, or worsening symptoms should be evaluated by a healthcare professional."
        }
      ]
    },
    "sections": [
      {
        "heading": "What Causes Sciatica?",
        "blocks": [
          {
            "type": "p",
            "text": "Sciatica usually occurs when something puts pressure on or irritates a nerve in the lower spine."
          },
          {
            "type": "p",
            "text": "Common causes include:"
          },
          {
            "type": "list",
            "items": [
              "Herniated or bulging discs",
              "Spinal stenosis",
              "Degenerative disc changes",
              "Bone spurs",
              "Certain spinal injuries",
              "Pregnancy",
              "Muscle or joint problems"
            ]
          },
          {
            "type": "p",
            "text": "Risk can also increase with prolonged sitting, heavy lifting, limited physical activity, excess weight, and certain health conditions."
          }
        ]
      },
      {
        "heading": "What Are the Symptoms?",
        "blocks": [
          {
            "type": "p",
            "text": "Sciatica usually affects one side of the body and can cause symptoms ranging from mild discomfort to significant pain."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Shooting Pain",
                "desc": "Pain may travel from the lower back or buttock down the back or side of the leg."
              },
              {
                "title": "Tingling or Burning",
                "desc": "Some people experience a burning, tingling, or pins-and-needles sensation."
              },
              {
                "title": "Numbness",
                "desc": "The affected leg or foot may feel partially numb."
              },
              {
                "title": "Weakness",
                "desc": "Some people experience weakness or difficulty moving the affected leg or foot."
              }
            ]
          }
        ]
      },
      {
        "heading": "What Can Help Relieve Sciatica?",
        "blocks": [
          {
            "type": "p",
            "text": "Treatment depends on what's causing the symptoms and how severe they are. For mild cases, staying gently active and avoiding prolonged bed rest may help. Your healthcare provider may also recommend other approaches based on your condition."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Gentle Movement",
                "desc": "Walking and appropriate stretching can help maintain mobility and reduce stiffness."
              },
              {
                "title": "Heat or Cold",
                "desc": "Cold or heat packs may provide temporary relief for some people."
              },
              {
                "title": "Physical Therapy",
                "desc": "Targeted exercises can help improve flexibility, strength, posture, and support around the spine."
              },
              {
                "title": "Medications",
                "desc": "Your provider may recommend appropriate pain-relieving or anti-inflammatory medication."
              },
              {
                "title": "Chiropractic Care",
                "desc": "Depending on the cause of your symptoms, chiropractic care may be one of several treatment options considered as part of a personalized plan."
              }
            ]
          }
        ]
      },
      {
        "heading": "When Should You See a Doctor?",
        "blocks": [
          {
            "type": "p",
            "text": "Mild sciatica may improve on its own, but you should schedule an evaluation if your pain is severe, persistent, getting worse, or interfering with your daily activities."
          },
          {
            "type": "p",
            "text": "Seek immediate medical attention if you experience:"
          },
          {
            "type": "list",
            "items": [
              "Significant or worsening leg weakness",
              "Severe numbness",
              "Loss of bladder or bowel control",
              "Severe pain following an injury",
              "Numbness around the pelvis or inner thighs"
            ]
          },
          {
            "type": "p",
            "text": "These symptoms can indicate a more serious spinal or nerve problem."
          }
        ]
      }
    ],
    "cta": {
      "heading": "Don't Let Nerve Pain Slow You Down",
      "text": "If pain is traveling from your lower back into your leg, getting the right evaluation can help you understand what's causing it and what treatment options may be appropriate. At First MD, our team can evaluate your symptoms and help determine the next step toward better mobility and pain management."
    }
  },
  {
    "slug": "prevent-back-pain-habits",
    "title": "Everyday Habits That Can Help Prevent Back Pain",
    "category": "Chiropractic / Wellness",
    "readingTime": "5–6 Minutes",
    "summary": "Posture, lifting, sleep, and activity habits that help protect your back every day.",
    "intro": {
      "heading": "Protecting Your Back Every Day",
      "blocks": [
        {
          "type": "p",
          "text": "Back pain can develop from many different factors, including muscle strain, poor posture, inactivity, repetitive movements, and improper lifting. While not every episode of back pain can be prevented, healthy daily habits can help reduce stress on your back and support strength, flexibility, and mobility."
        }
      ]
    },
    "sections": [
      {
        "heading": "Stay Active",
        "blocks": [
          {
            "type": "p",
            "text": "Regular movement is one of the best ways to support a healthy back. Strengthening your core, back, hip, and leg muscles can provide better support for your spine and improve mobility."
          },
          {
            "type": "p",
            "text": "Walking, stretching, and other low-impact activities can be good ways to stay active. If you're experiencing pain, choose activities that feel comfortable and speak with a healthcare professional about exercises that are appropriate for you."
          }
        ]
      },
      {
        "heading": "Practice Good Posture",
        "blocks": [
          {
            "type": "p",
            "text": "Poor posture can place additional stress on the muscles and joints supporting your spine."
          },
          {
            "type": "p",
            "text": "When sitting or standing:"
          },
          {
            "type": "list",
            "items": [
              "Keep your head and shoulders aligned.",
              "Avoid prolonged slouching.",
              "Use a chair that provides adequate back support.",
              "Keep your work surface at a comfortable height.",
              "Change positions regularly instead of staying in one position for long periods."
            ]
          }
        ]
      },
      {
        "heading": "Lift With Care",
        "blocks": [
          {
            "type": "p",
            "text": "Improper lifting is a common contributor to back strain. When lifting something heavy, keep the object close to your body and bend through your knees and hips rather than relying on your lower back."
          },
          {
            "type": "p",
            "text": "If something is too heavy to lift safely, ask for assistance or use equipment designed to help move it."
          }
        ]
      },
      {
        "heading": "Take Breaks From Sitting",
        "blocks": [
          {
            "type": "p",
            "text": "Spending long periods in one position can contribute to stiffness and discomfort. If you work at a desk or spend significant time driving, take regular breaks to stand, walk, and change your position."
          },
          {
            "type": "p",
            "text": "A supportive chair and properly positioned workstation can also help reduce unnecessary strain on your back."
          }
        ]
      },
      {
        "heading": "Maintain a Healthy Weight",
        "blocks": [
          {
            "type": "p",
            "text": "Extra weight, particularly around the midsection, can place additional stress on the lower back. Maintaining a healthy weight through regular activity and balanced nutrition can support your spine and overall musculoskeletal health."
          }
        ]
      },
      {
        "heading": "Support Your Back While Sleeping",
        "blocks": [
          {
            "type": "p",
            "text": "Your sleeping position and mattress can affect how comfortable your back feels."
          },
          {
            "type": "p",
            "text": "Some people find side sleeping with a pillow between the knees comfortable. If you sleep on your back, placing a pillow beneath your knees may provide additional support. A medium-firm mattress may also be more comfortable for some people with recurring back discomfort."
          }
        ]
      },
      {
        "heading": "When Should You See a Doctor?",
        "blocks": [
          {
            "type": "p",
            "text": "If back pain continues, keeps returning, or interferes with your daily activities, it's worth discussing it with a healthcare professional."
          },
          {
            "type": "p",
            "text": "Seek prompt medical attention if back pain occurs with symptoms such as significant weakness or numbness, loss of bladder or bowel control, or following a serious injury."
          }
        ]
      }
    ],
    "cta": {
      "heading": "Take Care of Your Back",
      "text": "Your everyday habits can make a difference in how your back feels and functions. Staying active, maintaining good posture, lifting carefully, and paying attention to your body's signals can help support long-term back health. If you're dealing with persistent back pain or mobility concerns, the First MD team can help evaluate your symptoms and discuss appropriate care options."
    }
  },
  {
    "slug": "flu-symptoms-when-to-see-doctor",
    "title": "Common Flu Symptoms and When You Should See a Doctor",
    "category": "Urgent Care",
    "readingTime": "5–6 Minutes",
    "summary": "The most common flu symptoms, who is at higher risk, and when to contact a provider.",
    "intro": {
      "heading": "Understanding the Flu",
      "blocks": [
        {
          "type": "p",
          "text": "Influenza, commonly known as the flu, is a contagious respiratory illness that can cause symptoms ranging from mild to severe. Unlike a typical cold, flu symptoms often appear suddenly and may leave you feeling significantly more tired and unwell."
        },
        {
          "type": "p",
          "text": "Most healthy people recover with rest, fluids, and supportive care. However, some people are at greater risk of complications and may benefit from early medical evaluation."
        }
      ]
    },
    "sections": [
      {
        "heading": "What Are the Common Symptoms of the Flu?",
        "blocks": [
          {
            "type": "p",
            "text": "Flu symptoms can vary, but common signs include:"
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Fever & Chills",
                "desc": "You may develop a fever and experience periods of chills or sweating."
              },
              {
                "title": "Body Aches",
                "desc": "Muscle and joint aches can be more noticeable with the flu than with a common cold."
              },
              {
                "title": "Fatigue",
                "desc": "Significant tiredness and weakness are common and may continue even after other symptoms improve."
              },
              {
                "title": "Cough & Sore Throat",
                "desc": "A dry cough and sore throat are common respiratory symptoms."
              },
              {
                "title": "Headache",
                "desc": "Headaches can occur alongside fever and body aches."
              },
              {
                "title": "Runny or Stuffy Nose",
                "desc": "Nasal congestion or a runny nose may also occur."
              }
            ]
          }
        ]
      },
      {
        "heading": "How Is the Flu Different From a Cold?",
        "blocks": [
          {
            "type": "p",
            "text": "Both illnesses can cause coughing, congestion, sore throat, and fatigue, but the way they develop can be different."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Flu",
                "desc": "Symptoms often appear suddenly and may include fever, chills, significant body aches, and pronounced fatigue."
              },
              {
                "title": "Cold",
                "desc": "Symptoms generally develop more gradually and are often milder, with sneezing, runny nose, and sore throat being common."
              }
            ]
          },
          {
            "type": "p",
            "text": "Because symptoms can overlap with other respiratory illnesses, testing or evaluation may sometimes be needed to determine the cause."
          }
        ]
      },
      {
        "heading": "How Can You Manage Flu Symptoms?",
        "blocks": [
          {
            "type": "p",
            "text": "For mild illness, supportive care can help your body recover."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Get Plenty of Rest",
                "desc": "Give your body time to recover and avoid strenuous activity while you're sick."
              },
              {
                "title": "Stay Hydrated",
                "desc": "Drink plenty of fluids to help prevent dehydration."
              },
              {
                "title": "Monitor Your Symptoms",
                "desc": "Pay attention to changes in fever, breathing, pain, or your overall condition."
              },
              {
                "title": "Talk With Your Provider",
                "desc": "Some people, particularly those at higher risk of complications, may benefit from early medical evaluation or antiviral treatment."
              }
            ]
          },
          {
            "type": "p",
            "text": "Antibiotics do not treat influenza because the flu is caused by a virus rather than bacteria."
          }
        ]
      },
      {
        "heading": "Who May Be at Higher Risk?",
        "blocks": [
          {
            "type": "p",
            "text": "Certain people have a greater risk of developing complications from influenza, including:"
          },
          {
            "type": "list",
            "items": [
              "Young children",
              "Adults age 65 and older",
              "Pregnant individuals",
              "People with certain chronic medical conditions",
              "People with weakened immune systems"
            ]
          },
          {
            "type": "p",
            "text": "If you fall into a higher-risk group and develop flu symptoms, contacting your healthcare provider early can be especially important."
          }
        ]
      },
      {
        "heading": "When Should You See a Doctor?",
        "blocks": [
          {
            "type": "p",
            "text": "Contact a healthcare provider if your symptoms are severe, getting worse, or you're concerned about your condition."
          },
          {
            "type": "p",
            "text": "Seek urgent medical attention if you experience:"
          },
          {
            "type": "list",
            "items": [
              "Trouble breathing or shortness of breath",
              "Chest pain or pressure",
              "Severe or persistent vomiting",
              "Confusion or significant dizziness",
              "Severe weakness",
              "Symptoms that improve and then return with a fever or worsening cough"
            ]
          },
          {
            "type": "p",
            "text": "If you're unsure whether your symptoms are the flu, a cold, or another illness, a healthcare professional can help determine the appropriate next step."
          }
        ]
      }
    ],
    "cta": {
      "heading": "Feeling Sick? First MD Can Help",
      "text": "You don't have to figure out your symptoms alone. If you're experiencing flu-like symptoms or are concerned about your health, the First MD team can evaluate your condition and help you understand your care options."
    }
  },
  {
    "slug": "cold-flu-season-protection",
    "title": "How to Protect Your Health During Cold & Flu Season",
    "category": "Family Medicine / Preventive Care",
    "readingTime": "5–6 Minutes",
    "summary": "Practical hygiene, vaccination, and wellness habits to stay healthy through respiratory season.",
    "intro": {
      "heading": "Staying Healthy During Cold & Flu Season",
      "blocks": [
        {
          "type": "p",
          "text": "Cold and flu viruses can spread easily, especially when people spend more time together indoors. While you can't prevent every infection, simple everyday habits can reduce your exposure to germs and help protect yourself and those around you."
        },
        {
          "type": "p",
          "text": "Good hygiene, staying up to date with recommended vaccinations, getting enough rest, and taking care of your overall health are all important parts of staying well during respiratory illness season."
        }
      ]
    },
    "sections": [
      {
        "heading": "Wash Your Hands Regularly",
        "blocks": [
          {
            "type": "p",
            "text": "Handwashing is one of the simplest ways to reduce the spread of respiratory viruses."
          },
          {
            "type": "p",
            "text": "Wash your hands with soap and water for at least 20 seconds, particularly after coughing, sneezing, using the bathroom, eating, or caring for someone who is sick. When soap and water aren't available, an alcohol-based hand sanitizer can be useful."
          }
        ]
      },
      {
        "heading": "Avoid Touching Your Face",
        "blocks": [
          {
            "type": "p",
            "text": "Cold and flu viruses can reach your body when contaminated hands come into contact with your eyes, nose, or mouth."
          },
          {
            "type": "p",
            "text": "Try to avoid touching your face throughout the day, particularly after being in crowded public spaces or touching commonly shared surfaces."
          }
        ]
      },
      {
        "heading": "Practice Good Coughing & Sneezing Habits",
        "blocks": [
          {
            "type": "p",
            "text": "If you need to cough or sneeze, use a tissue or the inside of your elbow rather than your hands. Dispose of used tissues promptly and wash your hands afterward."
          },
          {
            "type": "p",
            "text": "These simple habits can help reduce the number of germs you spread to people around you."
          }
        ]
      },
      {
        "heading": "Keep Frequently Touched Surfaces Clean",
        "blocks": [
          {
            "type": "p",
            "text": "Germs can remain on commonly touched surfaces such as:"
          },
          {
            "type": "list",
            "items": [
              "Door handles",
              "Phones",
              "Keyboards",
              "Remote controls",
              "Light switches",
              "Countertops"
            ]
          },
          {
            "type": "p",
            "text": "Regularly cleaning high-touch surfaces can help reduce opportunities for germs to spread within your home or workplace."
          }
        ]
      },
      {
        "heading": "Support Your Overall Health",
        "blocks": [
          {
            "type": "p",
            "text": "Your everyday habits matter, especially during cold and flu season."
          },
          {
            "type": "items",
            "items": [
              {
                "title": "Get Enough Sleep",
                "desc": "Consistent, quality sleep supports your overall health and well-being."
              },
              {
                "title": "Stay Active",
                "desc": "Regular physical activity can support general health and immune function."
              },
              {
                "title": "Eat a Balanced Diet",
                "desc": "Choose a variety of fruits, vegetables, whole grains, and other nutrient-rich foods."
              },
              {
                "title": "Stay Hydrated",
                "desc": "Drinking enough fluids is important for normal body function."
              },
              {
                "title": "Avoid Smoking",
                "desc": "Smoking can make respiratory symptoms worse and negatively affect your health."
              }
            ]
          }
        ]
      },
      {
        "heading": "Stay Up to Date With Flu Vaccination",
        "blocks": [
          {
            "type": "p",
            "text": "Annual flu vaccination is an important tool for reducing your risk of influenza and its complications. Protection from the vaccine takes time to develop, so talk with your healthcare provider about seasonal vaccination and what is appropriate for you and your family."
          }
        ]
      },
      {
        "heading": "What If Someone in Your Home Gets Sick?",
        "blocks": [
          {
            "type": "p",
            "text": "If someone in your household develops cold or flu symptoms, take practical steps to reduce the spread:"
          },
          {
            "type": "list",
            "items": [
              "Encourage frequent handwashing.",
              "Avoid sharing towels, drinks, or personal items.",
              "Clean commonly touched surfaces.",
              "Improve ventilation when possible.",
              "Give the sick person space to rest and recover.",
              "Practice good cough and sneeze etiquette."
            ]
          }
        ]
      },
      {
        "heading": "When Should You See a Doctor?",
        "blocks": [
          {
            "type": "p",
            "text": "Most uncomplicated colds can be managed with rest and supportive care. However, contact a healthcare provider if symptoms are severe, getting worse, or you're concerned about your condition."
          },
          {
            "type": "p",
            "text": "Seek urgent medical attention for symptoms such as difficulty breathing, chest pain or pressure, severe weakness, confusion, or other serious or rapidly worsening symptoms."
          },
          {
            "type": "p",
            "text": "People with certain chronic conditions or other risk factors may be more vulnerable to complications and should discuss concerning symptoms with their healthcare provider."
          }
        ]
      }
    ],
    "cta": {
      "heading": "Stay Healthy This Season With First MD",
      "text": "Taking simple preventive steps can help protect you and your family throughout cold and flu season. If you're feeling sick or have concerns about your symptoms, the First MD team is here to help you understand your care options."
    }
  }
]

export const articleBySlug = (slug: string) => ARTICLES.find((a) => a.slug === slug)
export const articleHref = (a: Pick<Article, 'slug'>) => `/resources/articles/${a.slug}`
