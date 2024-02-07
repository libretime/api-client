# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform

    The version of the OpenAPI document: 2.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest
import datetime

from libretime_client.models.patched_smart_block_kind import PatchedSmartBlockKind  # noqa: E501

class TestPatchedSmartBlockKind(unittest.TestCase):
    """PatchedSmartBlockKind unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PatchedSmartBlockKind:
        """Test PatchedSmartBlockKind
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PatchedSmartBlockKind`
        """
        model = PatchedSmartBlockKind()  # noqa: E501
        if include_optional:
            return PatchedSmartBlockKind(
            )
        else:
            return PatchedSmartBlockKind(
        )
        """

    def testPatchedSmartBlockKind(self):
        """Test PatchedSmartBlockKind"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()