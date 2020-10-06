require 'test_helper'

class ClosesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get closes_index_url
    assert_response :success
  end

end
