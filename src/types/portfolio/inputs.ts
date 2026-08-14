import {
  portfolioFilterSchema,
  portfolioListQuerySchema,
} from "@/lib/validations/portfolio.schema";
import z from "zod";

/**
 * Input dari client (dari URL / API route)
 */
export type PortfolioQuery = Partial<z.input<typeof portfolioListQuerySchema>>;

/**
 * Khusus dipakai setelah parse, termasuk state React
 */
export type PortfolioFilter = z.infer<typeof portfolioFilterSchema>;
