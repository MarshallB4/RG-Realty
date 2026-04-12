import React from 'react';
import { CALGARY_MARKET_DATA } from '../constants';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import {
  Sparkles,
  TrendingUp,
  Activity,
  ArrowUpRight,
  BarChart3,
  LineChart as LineChartIcon,
} from 'lucide-react';

export const MarketStats: React.FC = () => {
  const latestPoint = CALGARY_MARKET_DATA[CALGARY_MARKET_DATA.length - 1];
  const firstPoint = CALGARY_MARKET_DATA[0];

  const priceChange =
    ((latestPoint.benchmarkPrice - firstPoint.benchmarkPrice) /
      firstPoint.benchmarkPrice) *
    100;

  const inventoryChange =
    ((latestPoint.inventory - firstPoint.inventory) / firstPoint.inventory) * 100;

  const getMarketInsight = () => {
  const last3 = CALGARY_MARKET_DATA.slice(-3);

  const priceTrend =
    last3[2].benchmarkPrice > last3[0].benchmarkPrice ? 'rising' : 'softening';

  const inventoryTrend =
    last3[2].inventory > last3[0].inventory ? 'increasing' : 'tightening';

  let marketType = 'Balanced Market';
  let summary = '';

  if (priceTrend === 'rising' && inventoryTrend === 'tightening') {
    marketType = "Seller's Market";
    summary =
      'Recent data shows upward pressure on pricing alongside tightening supply, suggesting continued competition among buyers and strong positioning for sellers.';
  } else if (priceTrend === 'softening' && inventoryTrend === 'increasing') {
    marketType = "Buyer's Market";
    summary =
      'Inventory levels have expanded while pricing has softened slightly, giving buyers more flexibility and negotiating power in the current market.';
  } else {
    marketType = 'Balanced Market';
    summary =
      'The market appears to be stabilizing, with pricing and inventory moving in tandem. Conditions currently favour a more balanced dynamic between buyers and sellers.';
  }

  return {
    marketType,
    summary,
    priceChange: Math.abs(priceChange).toFixed(1),
    inventoryChange: Math.abs(inventoryChange).toFixed(1),
    priceTrend: priceTrend === 'rising' ? 'Increasing' : 'Decreasing',
    inventoryTrend:
      inventoryTrend === 'increasing' ? 'Rising Supply' : 'Tightening Supply',
  };
};

  const insight = getMarketInsight();

  return (
    <div className="bg-[#f5f2eb] min-h-screen text-[#1f1d1a]">
      {/* Intro / Hero */}
      <section className="relative overflow-hidden border-b border-[#ddd4c7] bg-[#f7f4ee]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(185,169,140,0.24),_transparent_55%)]" />

        <div className="absolute right-0 top-0 h-full w-[40%] hidden lg:block">
          <img
            src="/images/yyc.webp"
            alt="Calgary market insight"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#2e2a24]/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-14 md:pb-16">
          <div className="max-w-4xl">
            <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-5">
              Market Intelligence
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1f1d1a] leading-[0.98] mb-6">
              Calgary Market
              <br />
              Analysis
            </h1>

            <p className="max-w-2xl text-[#5f584e] text-lg md:text-xl font-light leading-relaxed">
              Track pricing trends, inventory movement, and market direction with a cleaner view of
              the data. Use the insights below to better time your move and understand where the
              market may be heading.
            </p>
          </div>

          

          {/* Summary stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-6xl">
            <div className="bg-[#f9f6f0] border border-[#ddd4c7] p-6">
              <span className="block text-xs uppercase tracking-[0.18em] text-[#7d7468] mb-2">
                Benchmark Price
              </span>
              <div className="flex items-end justify-between gap-4">
                <p className="text-2xl md:text-3xl font-serif font-bold text-[#1f1d1a]">
                  ${latestPoint.benchmarkPrice.toLocaleString()}
                </p>
                <span className="inline-flex items-center text-[#6f8a61] text-sm font-medium">
                  <ArrowUpRight
  size={16}
  className={`mr-1 ${priceChange < 0 ? 'rotate-180' : ''}`}
/>
                  {Math.abs(priceChange).toFixed(1)}%
                </span>
              </div>
            </div>

            <div className="bg-[#f9f6f0] border border-[#ddd4c7] p-6">
              <span className="block text-xs uppercase tracking-[0.18em] text-[#7d7468] mb-2">
                Active Listings
              </span>
              <div className="flex items-end justify-between gap-4">
                <p className="text-2xl md:text-3xl font-serif font-bold text-[#1f1d1a]">
                  {latestPoint.inventory.toLocaleString()}
                </p>
                <span className="inline-flex items-center text-[#a05f5f] text-sm font-medium">
                  <ArrowUpRight
  size={16}
  className={`mr-1 ${inventoryChange >= 0 ? 'rotate-90' : '-rotate-90'}`}
/>
                  {Math.abs(inventoryChange).toFixed(1)}%
                </span>
              </div>
            </div>

            <div className="bg-[#f9f6f0] border border-[#ddd4c7] p-6">
              <span className="block text-xs uppercase tracking-[0.18em] text-[#7d7468] mb-2">
                Monthly Sales
              </span>
              <p className="text-2xl md:text-3xl font-serif font-bold text-[#1f1d1a]">
                {latestPoint.sales.toLocaleString()}
              </p>
            </div>

            <div className="bg-[#f9f6f0] border border-[#ddd4c7] p-6">
              <span className="block text-xs uppercase tracking-[0.18em] text-[#7d7468] mb-2">
                New Listings
              </span>
              <p className="text-2xl md:text-3xl font-serif font-bold text-[#1f1d1a]">
                {latestPoint.newListings.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Overview Strip */}
      <section className="border-b border-[#ddd4c7] bg-[#efe9df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <LineChartIcon size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Track Price Direction</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  See how benchmark pricing is trending month by month across the Calgary market.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <BarChart3 size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Monitor Inventory</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Understand how listing supply may affect negotiation leverage and market pace.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9e1d2] flex items-center justify-center text-[#8c7b5f] shrink-0">
                <Sparkles size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#1f1d1a] mb-1">Read the Signals</h3>
                <p className="text-[#5f584e] text-sm leading-relaxed">
                  Use the summary below to quickly understand whether conditions currently favour
                  buyers, sellers, or a more balanced market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="pt-20 md:pt-24 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#8c7b5f] font-bold tracking-[0.2em] uppercase text-xs block mb-4">
              Market Snapshot
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1f1d1a] mb-5">
              Current trends at a glance
            </h2>
            <p className="max-w-3xl text-[#5f584e] text-lg font-light leading-relaxed">
              Compare benchmark price movement with active inventory levels to better understand
              momentum in the Calgary market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Price Trend (PRIMARY) */}
            <div className="lg:col-span-7 bg-[#f9f6f0] p-10 border border-[#ddd4c7] shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <span className="text-[#8c7b5f] font-bold tracking-[0.18em] uppercase text-[11px] block mb-2">
                    Trend Line
                  </span>
                  <h3 className="text-3xl font-serif text-[#1f1d1a]">Benchmark Price</h3>
                </div>
                <TrendingUp size={22} className="text-[#8c7b5f]" />
              </div>

              <div className="h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={CALGARY_MARKET_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2d8ca" />
                    <XAxis
                      dataKey="month"
                      stroke="#7d7468"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#7d7468"
                      tickFormatter={(value) => `$${value / 1000}k`}
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#f9f6f0',
                        border: '1px solid #ddd4c7',
                        borderRadius: '0px',
                        color: '#1f1d1a',
                      }}
                      formatter={(value: any) => [
  `$${Number(value).toLocaleString()}`,
  'Benchmark Price',
]}
                    />
                    <Line
                      type="monotone"
                      dataKey="benchmarkPrice"
                      stroke="#8c7b5f"
                      strokeWidth={2.5}
                      dot={{ r: 4, fill: '#f9f6f0', stroke: '#8c7b5f', strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: '#8c7b5f' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Inventory Trend (SECONDARY) */}
            <div className="lg:col-span-5 bg-[#f9f6f0] p-8 border border-[#ddd4c7] shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[#8c7b5f] font-bold tracking-[0.18em] uppercase text-[11px] block mb-2">
                    Supply Levels
                  </span>
                  <h3 className="text-2xl font-serif text-[#1f1d1a]">Inventory Movement</h3>
                </div>
                <Activity size={20} className="text-[#8c7b5f]" />
              </div>

              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CALGARY_MARKET_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2d8ca" />
                    <XAxis
                      dataKey="month"
                      stroke="#7d7468"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#7d7468"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      cursor={{ fill: '#efe7da', opacity: 0.6 }}
                      contentStyle={{
                        backgroundColor: '#f9f6f0',
                        border: '1px solid #ddd4c7',
                        borderRadius: '0px',
                        color: '#1f1d1a',
                      }}
                    />
                    <Bar dataKey="inventory" fill="#b9a98c" maxBarSize={36} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="bg-[#e9e1d2] border border-[#d6cab7] shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
            <div className="p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-serif text-[#1f1d1a] mb-2">
                  Market Insights
                </h3>
                <p className="text-[#5f584e] text-sm">
                  Based on recent benchmark pricing and inventory trends
                </p>
              </div>

              <div className="bg-[#f9f6f0] p-8 border border-[#d6cab7]">
                <p className="text-xl font-serif text-[#1f1d1a] mb-4">{insight.marketType}</p>

                <p className="text-[#4f4a42] leading-relaxed font-light mb-6">
                  {insight.summary} Benchmark pricing has changed by {insight.priceChange}% over
                  the measured period, while inventory has shifted by {insight.inventoryChange}%.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#5f584e]">
                  <div>
                    <span className="block uppercase text-xs tracking-widest mb-1 text-[#8c7b5f]">
                      Price Trend
                    </span>
                    {insight.priceTrend}
                  </div>

                  <div>
                    <span className="block uppercase text-xs tracking-widest mb-1 text-[#8c7b5f]">
                      Inventory Trend
                    </span>
                    {insight.inventoryTrend}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};