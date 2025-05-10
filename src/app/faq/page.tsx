import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-96 m-32">
      <AccordionItem value="item-1">
        <AccordionTrigger>Accordion Item 1</AccordionTrigger>
        <AccordionContent>Item description 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Accordion Item 2</AccordionTrigger>
        <AccordionContent>Item description 2.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Accordion Item 3</AccordionTrigger>
        <AccordionContent>Item description 3.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
