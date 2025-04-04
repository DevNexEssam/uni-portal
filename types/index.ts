export interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
  }
  
  export interface Step {
    step: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
  }
  
  export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    rating: number;
  }
  
  export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface PricingPlan {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    buttonText: string;
    buttonVariant: 'primary' | 'secondary';
  }

  // CardComponent Props
  export interface CardComponentProps {
    title: string;
    count: number | string;
    icon?: React.ReactNode;
    iconClass?: string;
    link?: string;
    colorClass?: string;
    children?: React.ReactNode;
  }