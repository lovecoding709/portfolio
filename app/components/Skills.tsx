"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Development',
    skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL']
  },
  {
    icon: Palette,
    title: 'Design',
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX', 'Prototyping']
  },
  {
    icon: Sparkles,
    title: 'Other',
    skills: ['Git', 'CI/CD', 'Testing', 'Agile', 'SEO', 'Performance']
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-center">Skills & Expertise</h2>
          <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
            A diverse toolkit of technologies and design practices I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                className="bg-neutral-50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-neutral-900 text-white rounded-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3>{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-neutral-900 rounded-full" />
                      <span className="text-neutral-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
