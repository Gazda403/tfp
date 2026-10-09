import { Branch17PageData } from '@/types/branchPlaybook';
import { branch01DigitalProducts } from './branches/branch01DigitalProducts';
import { branch02B2BServices } from './branches/branch02B2BServices';
import { branch03Ecommerce } from './branches/branch03Ecommerce';
import { branch04Trading } from './branches/branch04Trading';
import { branch05AiAutomation } from './branches/branch05AiAutomation';

export const BRANCH_PLAYBOOKS_MAP: Record<string, Branch17PageData> = {
  'digital-products': branch01DigitalProducts,
  'b2b-services': branch02B2BServices,
  'ecommerce-dropship': branch03Ecommerce,
  'crypto-trading': branch04Trading,
  'ai-automation': branch05AiAutomation,
};

export function getBranchPlaybook(branchId: string): Branch17PageData {
  return BRANCH_PLAYBOOKS_MAP[branchId] || branch01DigitalProducts;
}
