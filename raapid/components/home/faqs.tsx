import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function Faqs() {
      const faq =[
          {
              title: "What is Raapid?",
              answer: "Only Jesus Christ knows"
          },
          {
              title: "What is Raapid all about?",
              answer: "Only Jesus Christ knows"
          },
          {
              title: "What services does Raapid offer?",
              answer: "Only Jesus Christ knows"
          },    {
              title: "Who is the founder of Raapid?",
              answer: "Only Jesus Christ knows"
          },    {
              title: "When is Raapid launching?",
              answer: "Only Jesus Christ knows"
          },
      ]
      return(
          <section id="faqs" className="md:h-screen h-[70vh] w-11/12 mx-auto flex items-center justify-center justify-items-center md:gap-0 gap-8 font-inter">
              <h1 className="md:block hidden text-gray-300 font-semibold text-4xl text-center">Frequently asked questions</h1>
              <h1 className="md:hidden block text-gray-300 font-semibold text-xl text-center">FAQS</h1>
  
              <div className="md:w-5/12 w-full mx-auto">
              {faq.map((question, index) => (
                  <Accordion key={index} type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>{question.title}</AccordionTrigger>
                        <AccordionContent>
                          {question.answer}
                        </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              ))}
  
              </div>
          </section>
      )
  }