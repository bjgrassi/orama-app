export interface Fund {
  is_closed: boolean,
  simple_name: string;
  quota_date: string;
  profitabilities: {
    month: string,
    year: string,
    m12: string
  }
  operability: {
    minimum_initial_application_amount: string,
    // application_quotation_days_str: string,
    retrieval_quotation_days_str: string,
    // retrieval_liquidation_days_str: string,
  }
  specification: {
    fund_suitability_profile: {
      score_range_order: number,
      name: string
    },
    fund_risk_profile: {
      score_range_order: number,
      name: string
    },
    is_qualified: boolean,
    fund_type: string,
    fund_class: string,
    fund_macro_strategy: {
      name: string
    },
    fund_main_strategy: {
      name: string
    }
  }
}