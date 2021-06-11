require 'rails_helper'

RSpec.describe "UnnecessaryRoutes", type: :routing do
  
  it "does not define unnecessary campers routes" do
    expect(patch: "/campers/1").not_to be_routable
    expect(delete: "/campers/1").not_to be_routable
  end
  
  it "does not define unnecessary activities routes" do
    expect(post: "/activities").not_to be_routable
    expect(get: "/activities/1").not_to be_routable
    expect(patch: "/activities/1").not_to be_routable
  end
  
  it "does not define unnecessary signups routes" do
    expect(get: "/signups").not_to be_routable
    expect(get: "/signups/1").not_to be_routable
    expect(patch: "/signups/1").not_to be_routable
    expect(delete: "/signups/1").not_to be_routable
  end

end
