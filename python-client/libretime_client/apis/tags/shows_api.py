# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""

from libretime_client.paths.api_v2_shows.post import ShowsCreate
from libretime_client.paths.api_v2_shows_id.delete import ShowsDestroy
from libretime_client.paths.api_v2_shows.get import ShowsList
from libretime_client.paths.api_v2_shows_id.patch import ShowsPartialUpdate
from libretime_client.paths.api_v2_shows_id.get import ShowsRetrieve
from libretime_client.paths.api_v2_shows_id.put import ShowsUpdate


class ShowsApi(
    ShowsCreate,
    ShowsDestroy,
    ShowsList,
    ShowsPartialUpdate,
    ShowsRetrieve,
    ShowsUpdate,
):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    pass